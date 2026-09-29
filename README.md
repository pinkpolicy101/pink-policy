# Pink Poli 101

A free, mobile-friendly political science study hub made by Daad Yousef Alahmari, an 11th grade student interested in political science.

## Run it

Open `index.html` in a browser, or publish this repository with GitHub Pages. There is no build step, API key, or server requirement.

## News and accuracy

The news panel reads `news.json`, refreshed twice an hour by the GitHub Actions workflow in `.github/workflows/refresh-news.yml`. `refresh_news.py` fetches BBC RSS feeds for world, politics, Middle East and U.S./Canada coverage, and accepts only entries with valid dates and approved publisher domains. The story title and description come from the publisher feed, and every headline links to the original report. A rolling archive retains up to 500 stories per region for 180 days. If the cache is missing or empty, the page shows direct links to trusted source portals rather than invented headlines.

Public RSS feeds may be unavailable or rate-limited. If GitHub Actions cannot push cache updates, check repository **Settings → Actions → General → Workflow permissions** and allow read/write access. The question helper matches a small, cited learning library; it is not an AI service. Topic ideas, bookmarks and MUN research drafts are stored only in the visitor's browser. There is no public student forum or moderation backend.

Edit the curated learning content and trusted publisher list in `app.js`. MUN delegate tools are in `mun-research.html` and `mun.js`. Verify event dates with official calendars before adding them.
