from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
from pathlib import Path
import html
import json
import re
import sys
from urllib.error import URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "news.json"
FEEDS = [
    ("world", "https://feeds.bbci.co.uk/news/world/rss.xml"),
    ("world", "https://feeds.bbci.co.uk/news/politics/rss.xml"),
    ("saudi", "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml"),
    ("us", "https://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml"),
]
ALLOWED_HOSTS = {"bbc.com", "bbc.co.uk", "news.un.org"}
SAUDI_TERMS = re.compile(r"\b(saudi|riyadh|jeddah)\b", re.IGNORECASE)
US_TERMS = re.compile(r"\b(u\.s\.|us|united states|american|washington|congress|white house|senate|supreme court)\b", re.IGNORECASE)
POLITICAL_TERMS = re.compile(
    r"\b(election|government|politic|president|minister|parliament|court|diplomac|sanction|"
    r"treaty|united nations|security council|protest|vote|policy|legislation|senate|congress|"
    r"administration|summit|lawmakers|foreign affairs)\b",
    re.IGNORECASE,
)


class TextOnly(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []

    def handle_data(self, data):
        self.parts.append(data)


def plain_text(value):
    parser = TextOnly()
    parser.feed(html.unescape(value or ""))
    return re.sub(r"\s+", " ", " ".join(parser.parts)).strip()


def child_text(item, wanted):
    for child in item:
        if child.tag.rsplit("}", 1)[-1].lower() == wanted:
            return child.text or ""
    return ""


def parse_date(value):
    try:
        parsed = parsedate_to_datetime(value)
    except (TypeError, ValueError, OverflowError):
        try:
            parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        except (AttributeError, TypeError, ValueError, OverflowError):
            return None
    if parsed is None:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.astimezone(timezone.utc)


def item_from_xml(item, region, feed_url):
    title = plain_text(child_text(item, "title"))
    url = child_text(item, "link").strip()
    published = parse_date(child_text(item, "pubdate"))
    summary = plain_text(child_text(item, "description"))
    parsed_url = urlparse(url)
    host = (parsed_url.hostname or "").lower()
    if not title or not published or parsed_url.scheme != "https":
        return None
    if not any(host == domain or host.endswith("." + domain) for domain in ALLOWED_HOSTS):
        return None
    searchable = f"{title} {summary}"
    if region == "saudi" and not SAUDI_TERMS.search(searchable):
        return None
    if region == "us" and not US_TERMS.search(searchable):
        return None
    if region == "world" and "news/world/rss.xml" in feed_url and not POLITICAL_TERMS.search(searchable):
        return None
    return {
        "title": title,
        "url": url,
        "published_at": published.isoformat().replace("+00:00", "Z"),
        "summary": summary[:320],
    }


def fetch_feed(region, url):
    request = Request(url, headers={
        "User-Agent": "PinkPoli101/1.0 (student educational project)",
        "Accept": "application/rss+xml, application/xml, text/xml",
    })
    with urlopen(request, timeout=20) as response:
        root = ET.fromstring(response.read())
    items = [node for node in root.iter() if node.tag.rsplit("}", 1)[-1].lower() == "item"]
    return [parsed for item in items if (parsed := item_from_xml(item, region, url))]


def load_previous():
    try:
        return json.loads(OUTPUT.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {"articles": {}, "archive": {}}


def main():
    now = datetime.now(timezone.utc)
    fetched = {"world": [], "saudi": [], "us": []}
    successful_regions = set()
    for region, url in FEEDS:
        try:
            items = fetch_feed(region, url)
            fetched[region].extend(items)
            successful_regions.add(region)
            print(f"Fetched {len(items)} {region} stories from {url}")
        except (URLError, TimeoutError, ET.ParseError, OSError) as error:
            print(f"Could not fetch {url}: {error}", file=sys.stderr)

    if not successful_regions:
        raise SystemExit("No trusted RSS feeds could be fetched; leaving the existing cache unchanged.")

    previous = load_previous()
    previous_articles = previous.get("articles", {})
    previous_archive = previous.get("archive", {})
    articles = {}
    archive = {}
    cutoff = now - timedelta(days=180)
    for region, fresh in fetched.items():
        by_url = {}
        for item in [*previous_archive.get(region, []), *previous_articles.get(region, []), *fresh]:
            published = parse_date(item.get("published_at", ""))
            if published and published >= cutoff and item.get("url"):
                by_url.setdefault(item["url"], item)
        archive[region] = sorted(by_url.values(), key=lambda item: item["published_at"], reverse=True)[:500]
        current = fresh
        if region not in successful_regions:
            current = [item for item in archive[region] if (published := parse_date(item["published_at"])) and published >= now - timedelta(days=7)]
        articles[region] = sorted({item["url"]: item for item in current}.values(), key=lambda item: item["published_at"], reverse=True)[:30]

    temporary = OUTPUT.with_suffix(".json.tmp")
    temporary.write_text(json.dumps({
        "generated_at": now.isoformat().replace("+00:00", "Z"),
        "articles": articles,
        "archive": archive,
    }, ensure_ascii=True, indent=2) + "\n", encoding="utf-8")
    temporary.replace(OUTPUT)
    print(f"Wrote trusted news cache: {OUTPUT}")


if __name__ == "__main__":
    main()
