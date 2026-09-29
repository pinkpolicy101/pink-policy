# Pink Poli 101

A free, mobile-friendly political science study hub made by Daad Yousef Alahmari, an 11th grade student interested in political science.

## Run it

Open `index.html` in a browser, or publish this repository with GitHub Pages. There is no build step, API key, or server requirement.

## News and accuracy

The news panel requests recent results from GDELT and discards results unless their hostname is on the publisher allowlist in `app.js`. GDELT's timestamp is when it indexed an article, not necessarily the publisher's publication date, and the interface labels it accordingly. Feed results are headlines linked to original reporting, not generated summaries. If the feed is unavailable, the site shows trusted source portals instead of fabricated or stale headlines. Check original sources for current facts and dates.

The feed uses a public third-party endpoint and may be unavailable or rate-limited. A production newsroom workflow would require editorial review and a maintained backend. The question helper matches a small, cited learning library; it is not an AI service. Topic ideas and bookmarks are stored only in the visitor's browser. There is no public student forum or moderation backend.

Edit the curated learning content and trusted publisher list in `app.js`. Verify event dates with official calendars before adding them.
