const APPROVED = ["bbc.com", "bbc.co.uk", "news.un.org"];
const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
let cache = { archive: {}, articles: {} };
let visibleCount = 20;
function trusted(url) {
  try { const parsed = new URL(url); return parsed.protocol === "https:" && APPROVED.some(host => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`)); }
  catch { return false; }
}
function publisher(url) {
  const host = new URL(url).hostname;
  return host.endsWith("news.un.org") ? "UN News" : "BBC News";
}
function availableItems(region) {
  const combined = [...(cache.archive?.[region] || []), ...(cache.articles?.[region] || [])];
  return [...new Map(combined.filter(item => item.title && item.published_at && trusted(item.url)).map(item => [item.url, item])).values()];
}
function render() {
  const region = $("#archive-region").value;
  const query = $("#archive-search").value.trim().toLowerCase();
  const range = $("#archive-range").value;
  const order = $("#archive-order").value;
  const now = Date.now();
  let items = availableItems(region).filter(item => {
    const date = new Date(item.published_at).getTime();
    if (!Number.isFinite(date)) return false;
    const age = (now - date) / 86400000;
    if (range === "30" && age > 30) return false;
    if (range === "90" && age > 90) return false;
    if (range === "older" && age <= 90) return false;
    return `${item.title} ${item.summary || ""} ${publisher(item.url)}`.toLowerCase().includes(query);
  });
  items.sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
  if (order === "newest") items.reverse();
  $("#archive-count").textContent = `${items.length} ${items.length === 1 ? "story" : "stories"} match your filters.`;
  $("#archive-results").innerHTML = items.length ? items.slice(0, visibleCount).map(item => {
    const date = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(item.published_at));
    return `<article class="archive-item"><time datetime="${escapeHtml(item.published_at)}">${escapeHtml(date)}</time><div><h2><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)} ↗</a></h2><small>${escapeHtml(publisher(item.url))} · Original reporting</small>${item.summary ? `<p>${escapeHtml(item.summary)}</p>` : ""}</div></article>`;
  }).join("") : '<p class="loading">No stories match those filters yet. Try another date range or open the <a href="index.html#resources">trusted source list</a>.</p>';
  $("#archive-more").hidden = items.length <= visibleCount;
}
$("#archive-search").addEventListener("input", () => { visibleCount = 20; render(); });
$("#archive-region").addEventListener("change", () => { visibleCount = 20; render(); });
$("#archive-range").addEventListener("change", () => { visibleCount = 20; render(); });
$("#archive-order").addEventListener("change", () => { visibleCount = 20; render(); });
$("#archive-more").addEventListener("click", () => { visibleCount += 20; render(); });
fetch("./news.json", { cache: "no-store" }).then(response => {
  if (!response.ok) throw new Error(`News cache returned ${response.status}`);
  return response.json();
}).then(data => {
  cache = data;
  const date = data.generated_at ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(data.generated_at)) : "unknown";
  $("#archive-updated").textContent = `Archive last refreshed ${date}.`;
  render();
}).catch(() => {
  $("#archive-updated").textContent = "The headline archive could not be loaded.";
  $("#archive-results").innerHTML = '<p class="loading">Check your connection or visit <a href="index.html#resources">trusted publishers directly</a>.</p>';
});
