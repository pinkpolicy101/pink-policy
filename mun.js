const STORAGE_KEY = "pinkpoli-mun-research";
const $ = (selector) => document.querySelector(selector);
const fields = ["country", "committee", "topic", "position", "evidence", "proposals"];
const fieldIds = Object.fromEntries(fields.map(name => [name, `mun-${name}`]));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
let sourceEntries = [];
const sourceForm = $("#mun-source-form");
const sourceSubmit = sourceForm.querySelector("button[type=submit]");
const sourceDateLabel = document.createElement("label");
sourceDateLabel.innerHTML = 'Publication / document date<input id="source-date" type="date">';
const sourceClaimLabel = document.createElement("label");
sourceClaimLabel.innerHTML = 'Claim this source supports<input id="source-claim" maxlength="180" placeholder="e.g. Official position on the agenda">';
sourceForm.insertBefore(sourceDateLabel, sourceSubmit);
sourceForm.insertBefore(sourceClaimLabel, sourceSubmit);
function loadDraft() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}
function saveDraft(showMessage = true) {
  const draft = Object.fromEntries(fields.map(name => [name, $(`#${fieldIds[name]}`).value.trim()]));
  draft.sources = sourceEntries;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    if (showMessage) $("#mun-save-status").textContent = "Saved privately in this browser.";
  } catch {
    $("#mun-save-status").textContent = "This browser could not save the draft. Download it to keep a copy.";
  }
  return draft;
}
function renderSources() {
  $("#mun-source-list").innerHTML = sourceEntries.length ? sourceEntries.map((source, index) => `<div class="mun-source-item"><button type="button" data-delete-source="${index}" aria-label="Remove ${escapeHtml(source.title)}">Remove</button><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} ↗</a><small>${escapeHtml(source.type)} · ${escapeHtml(source.date || `Added ${source.added}`)}</small>${source.claim ? `<small>Supports: ${escapeHtml(source.claim)}</small>` : ""}</div>`).join("") : '<p class="mun-validation">No sources added yet.</p>';
}
function makeBrief() {
  const draft = saveDraft(false);
  const sourceLines = sourceEntries.length ? sourceEntries.map(source => `- ${source.title} (${source.type}; ${source.date || `added ${source.added}`})${source.claim ? `; supports: ${source.claim}` : ""} — ${source.url}`).join("\n") : "- Add verified sources to your source log.";
  return [
    "MUN DELEGATE RESEARCH BRIEF",
    `Country: ${draft.country || "Not set"}`,
    `Committee: ${draft.committee || "Not set"}`,
    `Agenda topic: ${draft.topic || "Not set"}`,
    "",
    "1. DOCUMENTED COUNTRY POSITION",
    draft.position || "Research and cite the country's official position.",
    "",
    "2. EVIDENCE AND PRIOR ACTION",
    draft.evidence || "Add dated statements, votes, resolutions, treaties or policy actions.",
    "",
    "3. POSSIBLE DELEGATION PROPOSALS",
    draft.proposals || "Draft proposals and confirm they fit the committee's mandate.",
    "",
    "4. SOURCE LOG",
    sourceLines,
    "",
    "Verify each claim against the original source and your conference's rules. This is a research outline, not an official country position."
  ].join("\n");
}
function restoreDraft() {
  const draft = loadDraft();
  fields.forEach(name => { $(`#${fieldIds[name]}`).value = draft[name] || ""; });
  sourceEntries = Array.isArray(draft.sources) ? draft.sources : [];
  renderSources();
  if (fields.some(name => draft[name]) || sourceEntries.length) $("#mun-save-status").textContent = "Your saved draft was restored from this browser.";
}
$("#mun-form").addEventListener("input", () => saveDraft());
$("#mun-form").addEventListener("submit", event => {
  event.preventDefault();
  saveDraft();
});
$("#mun-source-form").addEventListener("submit", event => {
  event.preventDefault();
  const title = $("#source-title").value.trim();
  const rawUrl = $("#source-url").value.trim();
  let url;
  try { url = new URL(rawUrl); }
  catch { $("#source-feedback").textContent = "Enter a valid HTTPS source link."; return; }
  if (url.protocol !== "https:") { $("#source-feedback").textContent = "Use an HTTPS link so the source opens securely."; return; }
  sourceEntries.unshift({ title, url: url.href, type: $("#source-type").value, date: $("#source-date").value, claim: $("#source-claim").value.trim(), added: new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date()) });
  sourceEntries = sourceEntries.slice(0, 50);
  saveDraft(false);
  renderSources();
  $("#source-feedback").textContent = "Source added to your private brief. Verify it before relying on it.";
  $("#source-title").value = "";
  $("#source-url").value = "";
  $("#source-date").value = "";
  $("#source-claim").value = "";
});
document.addEventListener("click", event => {
  const button = event.target.closest("[data-delete-source]");
  if (!button) return;
  sourceEntries.splice(Number(button.dataset.deleteSource), 1);
  saveDraft(false);
  renderSources();
});
$("#mun-download").addEventListener("click", () => {
  const file = new Blob([makeBrief()], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "mun-delegate-research-brief.txt";
  link.click();
  URL.revokeObjectURL(link.href);
  $("#mun-save-status").textContent = "Outline downloaded; the draft is also saved in this browser.";
});
$("#mun-clear").addEventListener("click", () => {
  if (!window.confirm("Clear this delegate brief and its source log from this browser?")) return;
  localStorage.removeItem(STORAGE_KEY);
  sourceEntries = [];
  fields.forEach(name => { $(`#${fieldIds[name]}`).value = ""; });
  renderSources();
  $("#mun-save-status").textContent = "Draft cleared from this browser.";
  $("#source-feedback").textContent = "";
});
restoreDraft();
