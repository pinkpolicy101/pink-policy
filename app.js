const TRUSTED = ["apnews.com", "reuters.com", "bbc.com", "bbc.co.uk", "news.un.org", "un.org", "spa.gov.sa", "mofa.gov.sa", "whitehouse.gov", "congress.gov", "supremecourt.gov", "fec.gov", "state.gov", "cfr.org"];
const REGIONS = {
  world: { label: "World", note: "Compare reporting across trusted outlets; check the original article for evidence, attribution and updates." },
  saudi: { label: "Saudi", note: "For official positions, compare reporting with the linked Saudi institution or UN document where available." },
  us: { label: "U.S.", note: "Check the primary record for the institution involved, then compare it with independent reporting." }
};
const SOURCE_PORTALS = {
  world: [["BBC News: World", "https://www.bbc.com/news/world"], ["UN News", "https://news.un.org/en/"], ["Reuters: World", "https://www.reuters.com/world/"]],
  saudi: [["Saudi Press Agency", "https://www.spa.gov.sa/en"], ["Saudi Ministry of Foreign Affairs", "https://www.mofa.gov.sa/en"], ["BBC News: Middle East", "https://www.bbc.com/news/world/middle_east"]],
  us: [["Associated Press: Politics", "https://apnews.com/politics"], ["BBC News: U.S. & Canada", "https://www.bbc.com/news/us_and_canada"], ["U.S. Congress", "https://www.congress.gov/"]]
};
const SOURCES = { "United Nations": "https://www.un.org/", "UN Charter": "https://www.un.org/en/about-us/un-charter/full-text", "U.S. Constitution": "https://www.archives.gov/founding-docs/constitution-transcript", "College Board": "https://apcentral.collegeboard.org/courses", "Saudi Press Agency": "https://www.spa.gov.sa/en", "Saudi Ministry of Foreign Affairs": "https://www.mofa.gov.sa/en", "U.S. National Archives": "https://www.archives.gov/founding-docs", "Congress.gov": "https://www.congress.gov/" };
const TERMS = [
  ["Democracy", "A system in which people have meaningful ways to participate in choosing leaders and influencing public decisions. Democracies differ in how they organize elections, representation, rights and institutions.", ["College Board", "U.S. Constitution"]],
  ["Legitimacy", "The belief that a government or political institution has the right to make decisions. Legitimacy can come from laws, tradition, performance, public consent or a combination.", ["College Board"]],
  ["Sovereignty", "A state's authority to govern itself and make decisions within its territory, while being recognized as independent in relations with other states.", ["College Board", "UN Charter"]],
  ["Federalism", "A system that divides governing powers between a national government and regional governments. The exact division depends on a country's constitution and political practice.", ["U.S. Constitution", "College Board"]],
  ["Authoritarianism", "A political system in which power is concentrated and political competition or civil liberties are significantly restricted. The degree and form can vary.", ["College Board"]],
  ["Political socialization", "The process through which people develop political values, beliefs and habits. Families, schools, peers, media and experiences can all play a role.", ["College Board"]],
  ["Judicial independence", "The ability of judges and courts to decide cases without improper pressure from political actors or other outside forces.", ["College Board", "U.S. Constitution"]],
  ["Civil society", "Organizations and groups outside the state and private household, such as community associations, advocacy groups and unions, where people organize around shared interests.", ["College Board"]],
  ["Constitution", "A country's foundational legal framework. It typically establishes institutions, describes how powers are assigned and may set limits on government authority.", ["U.S. Constitution", "College Board"]],
  ["Rule of law", "The principle that laws apply through established, publicly known processes, including to people who govern. How well it is practiced can vary and is evaluated using evidence.", ["College Board", "U.S. Constitution"]],
  ["Bicameralism", "A legislature organized into two chambers. The chambers may have different membership rules, responsibilities or ways of representing people and regions.", ["U.S. Constitution", "College Board"]],
  ["Checks and balances", "Institutional arrangements that give branches or bodies ways to limit or review one another's powers.", ["U.S. Constitution", "College Board"]],
  ["International relations", "The study of interactions among states and other global actors, including diplomacy, conflict, trade and cooperation.", ["College Board", "UN Charter"]],
  ["Treaty", "A formal agreement between states or other parties governed by international law. The text and the parties' actions help determine its meaning and obligations.", ["UN Charter", "United Nations"]],
  ["Separation of powers", "The assignment of different government responsibilities to distinct branches or institutions, often intended to prevent excessive concentration of authority.", ["U.S. Constitution", "College Board"]],
  ["Political efficacy", "A person's sense that they can understand politics and that their participation may influence political decisions.", ["College Board"]]
].map(([term, definition, sources]) => ({ term, definition, sources }));
const QUIZ = [
  { question: "In a federal system, where is governing authority typically located?", options: ["Only in the national government", "Between national and regional governments", "Only in courts", "Only in local communities"], correct: 1, why: "Federal systems divide authority between national and regional governments. Constitutions and political practice shape how that division works.", source: "U.S. Constitution" },
  { question: "What is a primary source for the text of a proposed U.S. federal bill?", options: ["A social media post", "A campaign slogan", "The bill record on Congress.gov", "A headline without a link"], correct: 2, why: "Congress.gov is the official legislative information system and links to bill text, actions and status.", source: "Congress.gov" },
  { question: "What does political socialization describe?", options: ["A court reviewing a law", "How people develop political beliefs and habits", "A treaty between states", "A legislature's budget process"], correct: 1, why: "Political socialization is how people develop political values and habits through institutions and experiences.", source: "College Board" },
  { question: "What does sovereignty mainly refer to?", options: ["A state's authority to govern itself", "A court's ability to interpret law", "A citizen's voting age", "A news outlet's editorial policy"], correct: 0, why: "Sovereignty concerns a state's authority within its territory and its independence in relations with other states.", source: "UN Charter" }
];
const TIMELINE = [
  ["1787", "U.S. Constitution drafted", "U.S. National Archives", "https://www.archives.gov/founding-docs/constitution"],
  ["1945", "UN Charter enters into force", "United Nations", "https://www.un.org/en/about-us/un-charter/full-text"],
  ["1948", "Universal Declaration of Human Rights adopted", "United Nations", "https://www.un.org/en/about-us/universal-declaration-of-human-rights"],
  ["1962", "Saudi Arabia joins the United Nations", "United Nations", "https://www.un.org/en/about-us/member-states"]
];
const GUIDES = [
  ["AP Comparative Government and Politics", "Countries, institutions, regimes and political change.", "https://apcentral.collegeboard.org/courses/ap-comparative-government-and-politics"],
  ["AP U.S. Government and Politics", "Constitutional foundations, institutions, participation and policy.", "https://apcentral.collegeboard.org/courses/ap-united-states-government-and-politics"]
];
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = (value) => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
let regionKey = "world", studyMode = "quiz", quizIndex = 0, cardIndex = 0, cardShown = false, liveSearchResults = [];
function stored(key) { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; } }
function persist(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
function sourceLink(name) { return `<a href="${SOURCES[name] || SOURCES["College Board"]}" target="_blank" rel="noopener noreferrer">${esc(name)}</a>`; }
function renderSaved() {
  const items = stored("pinkpoli-bookmarks");
  $("#bookmark-count").textContent = items.length;
  $("#bookmark-list").innerHTML = items.length ? items.map((x, i) => `<div class="bookmark-entry"><a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.title)}</a><button data-remove="${i}" aria-label="Remove ${esc(x.title)}">×</button></div>`).join("") : "<p>Nothing saved yet. Bookmark an article or study guide to keep it nearby.</p>";
}
function saveLink(title, url) { const items = stored("pinkpoli-bookmarks"); if (!items.some(x => x.url === url)) items.unshift({ title, url }); persist("pinkpoli-bookmarks", items.slice(0, 50)); renderSaved(); }
function trustedUrl(raw) { try { const u = new URL(raw); return u.protocol === "https:" && TRUSTED.some(d => u.hostname === d || u.hostname.endsWith(`.${d}`)); } catch { return false; } }
function publisher(host) { const map = [["spa.gov.sa", "Saudi Press Agency"], ["mofa.gov.sa", "Saudi Ministry of Foreign Affairs"], ["news.un.org", "UN News"], ["un.org", "United Nations"], ["apnews.com", "Associated Press"], ["reuters.com", "Reuters"], ["bbc.com", "BBC News"], ["bbc.co.uk", "BBC News"], ["whitehouse.gov", "The White House"], ["congress.gov", "U.S. Congress"], ["supremecourt.gov", "U.S. Supreme Court"], ["fec.gov", "Federal Election Commission"], ["state.gov", "U.S. Department of State"], ["cfr.org", "Council on Foreign Relations"]]; return map.find(([d]) => host === d || host.endsWith(`.${d}`))?.[1] || host; }
function publishedDate(value) { const date = new Date(value); return Number.isNaN(date.getTime()) ? "Publication date unavailable" : `Published ${new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(date)}`; }
function renderNews(items, key) {
  const grid = $("#news-grid"), reg = REGIONS[key];
  liveSearchResults = items.map(a => ({ title: a.title, detail: publisher(new URL(a.url).hostname) + " · " + publishedDate(a.published_at), url: a.url, keywords: a.title }));
  if (!items.length) {
    grid.innerHTML = SOURCE_PORTALS[key].map(([title, url]) => `<article class="news-card source-card"><div class="news-meta"><span class="news-source">TRUSTED SOURCE</span><span class="news-region">${reg.label}</span></div><h3><a href="${url}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a></h3><p class="news-context">No cached headlines yet. Open this publisher for its latest coverage.</p></article>`).join("");
    return;
  }
  grid.innerHTML = items.map(a => { const host = new URL(a.url).hostname.replace(/^www\./, ""); const title = esc(a.title); const summary = esc(a.summary || reg.note); return `<article class="news-card"><div class="news-meta"><span class="news-source">${esc(publisher(host))}</span><span>·</span><span>${esc(publishedDate(a.published_at))}</span><span class="news-region">${reg.label}</span></div><h3><a href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">${title}</a></h3><p class="news-context">${summary}</p><button class="save-button" data-save-title="${title}" data-save-url="${esc(a.url)}">♡ Save</button></article>`; }).join("");
}
async function fetchNews(key = regionKey) {
  regionKey = key; const reg = REGIONS[key], notice = $("#feed-notice");
  $$(".news-tab").forEach(t => { const on = t.dataset.region === key; t.classList.toggle("active", on); t.setAttribute("aria-selected", String(on)); });
  $("#news-grid").innerHTML = '<p class="loading">✳<br>Checking trusted publishers…</p>'; notice.hidden = true;
  try {
    const response = await fetch(`./news.json?refresh=${Date.now()}`, { cache: "no-store" }); if (!response.ok) throw new Error(`News cache returned ${response.status}`);
    const payload = await response.json();
    const articles = (payload.articles?.[key] || []).filter(a => a.title && a.published_at && trustedUrl(a.url)).slice(0, 6);
    renderNews(articles, key);
    const updated = payload.generated_at ? new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(new Date(payload.generated_at)) : "not yet";
    $("#news-status").textContent = articles.length ? `${articles.length} recent stories · ${reg.label}` : `No cached stories · ${reg.label}`;
    $("#last-checked").textContent = `Trusted-source cache updated ${updated}.`;
    if (!articles.length) { notice.textContent = "There are no cached headlines for this section yet. Use the direct trusted-source links below while the scheduled update runs."; notice.hidden = false; }
  } catch (error) {
    renderNews([], key); $("#news-status").textContent = "Showing trusted source portals"; $("#last-checked").textContent = "The cached news file could not be loaded.";
    notice.textContent = "Recent headlines are temporarily unavailable. These links open trusted publishers directly; no stories are being generated."; notice.hidden = false;
  }
}
function renderTerms(filter = "") { const list = TERMS.filter(x => x.term.toLowerCase().includes(filter.toLowerCase())); $("#term-chips").innerHTML = list.length ? list.map(x => `<button class="term-chip" data-term="${esc(x.term)}">${esc(x.term)}</button>`).join("") : "<p class=deck>No matching term yet. Try another word.</p>"; }
function showTerm(term) { const x = TERMS.find(t => t.term.toLowerCase() === term.toLowerCase()); if (!x) return; $$(".term-chip").forEach(b => b.classList.toggle("selected", b.dataset.term === x.term)); $("#definition-panel").innerHTML = `<small>QUICK DEFINITION</small><h3>${esc(x.term)}</h3><p>${esc(x.definition)}</p><div>Sources: ${x.sources.map(sourceLink).join(" ")}</div>`; }
function renderStudy() {
  const stage = $("#study-stage");
  if (studyMode === "quiz") { const q = QUIZ[quizIndex % QUIZ.length]; stage.innerHTML = `<small class="stage-kicker">PRACTICE QUESTION · ${quizIndex + 1} OF ${QUIZ.length}</small><h3>${esc(q.question)}</h3><div class="quiz-options">${q.options.map((o,i) => `<button class="quiz-answer" data-answer="${i}">${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join("")}</div><div id="quiz-feedback" class="quiz-feedback" aria-live="polite"></div><div class="stage-controls"><button id="next-question">Next question →</button><span>Try it before opening your notes.</span></div>`; }
  else if (studyMode === "cards") { const t = TERMS[cardIndex % TERMS.length]; stage.innerHTML = `<small class="stage-kicker">FLASHCARD · ${cardIndex+1} OF ${TERMS.length}</small><button class="flashcard" id="flashcard"><small>${cardShown ? "DEFINITION" : "TAP TO REVEAL"}</small><strong>${cardShown ? esc(t.term) : `${esc(t.term)} — what does it mean?`}</strong><span>${cardShown ? esc(t.definition) : "Think of your answer, then reveal."}</span></button><div class="stage-controls"><button id="previous-card">← Previous</button><button id="next-card">Next →</button></div>`; }
  else if (studyMode === "timeline") stage.innerHTML = `<small class="stage-kicker">A FEW FOUNDATIONAL MILESTONES</small><h3>Institutions are shaped over time.</h3><div class="timeline-points">${TIMELINE.map(x => `<div class="timeline-point"><b>${x[0]}</b><span>${esc(x[1])}</span><a href="${x[3]}" target="_blank" rel="noopener noreferrer">${esc(x[2])} ↗</a></div>`).join("")}</div>`;
  else stage.innerHTML = `<small class="stage-kicker">OFFICIAL COURSE STARTING POINTS</small><h3>Let the course framework be your map.</h3><div class="guide-list">${GUIDES.map(x => `<div class="guide-entry"><a href="${x[2]}" target="_blank" rel="noopener noreferrer">${esc(x[0])} ↗<small>${esc(x[1])}</small></a><button class="save-button" data-save-title="${esc(x[0])}" data-save-url="${esc(x[2])}">♡ Save</button></div>`).join("")}</div>`;
}
function answerQuestion(value) { const q = value.toLowerCase(), match = TERMS.find(t => q.includes(t.term.toLowerCase()) || t.term.toLowerCase().split(" ").some(w => w.length > 6 && q.includes(w))); if (match) return `<p><b>${esc(match.term)}</b> means ${esc(match.definition)}</p><p>Study source: ${match.sources.map(sourceLink).join(" ")}</p><p>This is a study definition, not a complete analysis. Check original materials and compare evidence.</p>`; return `<p>This question is not in the built-in study library yet, and this page cannot verify live political developments. Start with an official record or trusted report, then compare sources.</p><p>Start here: ${sourceLink("United Nations")} · ${sourceLink("College Board")} · ${sourceLink("Congress.gov")}</p>`; }
const searchable = [...TERMS.map(x => ({ title:x.term, detail:x.definition, url:"#dictionary", keywords:x.term })), ...GUIDES.map(x => ({ title:x[0], detail:x[1], url:"#study", keywords:x[0] })), {title:"Saudi Politics",detail:"Diplomacy, Saudi institutions and official sources",url:"#saudi",keywords:"Saudi politics diplomacy government"},{title:"World Politics",detail:"International institutions and world news",url:"#world",keywords:"world politics international UN"},{title:"Trusted Resources",detail:"Official, educational, research and news sources",url:"#resources",keywords:"resources news sources"},{title:"Political Calendar",detail:"Official event and election schedules",url:"#calendar",keywords:"calendar election summit UN"}];
function initSearch() { const form=$("#site-search"), input=$("#search-input"), box=$("#search-results"); const update=()=>{const q=input.value.trim().toLowerCase();if(!q){box.hidden=true;return}const found=[...liveSearchResults,...searchable].filter(x=>`${x.title} ${x.detail} ${x.keywords}`.toLowerCase().includes(q)).slice(0,6);box.innerHTML=found.length?found.map(x=>`<a href="${esc(x.url)}"${x.url.startsWith("https:")?' target="_blank" rel="noopener noreferrer"':""}><b>${esc(x.title)}</b><small>${esc(x.detail)}</small></a>`).join(""):'<a href="#resources">No exact match. Browse trusted resources →</a>';box.hidden=false};input.addEventListener("input",update);form.addEventListener("submit",e=>{e.preventDefault();update();box.querySelector("a")?.click()});document.addEventListener("click",e=>{if(!form.contains(e.target))box.hidden=true});box.addEventListener("click",()=>box.hidden=true);}
renderTerms();renderStudy();renderSaved();initSearch();$("#year").textContent=new Date().getFullYear();fetchNews();setInterval(()=>fetchNews(regionKey),15*60*1000);
document.addEventListener("click", event => {
  const b = event.target.closest("button,a"); if (!b) return;
  if (b.matches(".news-tab")) fetchNews(b.dataset.region);
  if (b.matches("[data-open-region]")) fetchNews(b.dataset.openRegion);
  if (b.matches("[data-save-title]")) { saveLink(b.dataset.saveTitle,b.dataset.saveUrl); b.textContent="✓ Saved"; b.classList.add("is-saved"); }
  if (b.matches("[data-remove]")) { const a=stored("pinkpoli-bookmarks");a.splice(Number(b.dataset.remove),1);persist("pinkpoli-bookmarks",a);renderSaved(); }
  if (b.matches("[data-term]")) showTerm(b.dataset.term);
  if (b.matches("[data-search-term]")) setTimeout(()=>showTerm(b.dataset.searchTerm),0);
  if (b.matches("[data-study]")) { studyMode=b.dataset.study;$$('[data-study]').forEach(x=>{x.classList.toggle("active",x===b);x.setAttribute("aria-selected",String(x===b))});renderStudy(); }
  if (b.matches("[data-answer]")) { const q=QUIZ[quizIndex%QUIZ.length],answer=Number(b.dataset.answer);$$('.quiz-answer').forEach(x=>{x.disabled=true;if(Number(x.dataset.answer)===q.correct)x.classList.add("correct");else if(x===b)x.classList.add("incorrect")});$("#quiz-feedback").innerHTML=`${answer===q.correct?"Correct.":"Not quite."} ${esc(q.why)} Source: ${sourceLink(q.source)}`; }
  if (b.matches("#next-question")) {quizIndex=(quizIndex+1)%QUIZ.length;renderStudy()}
  if (b.matches("#flashcard")) {cardShown=!cardShown;renderStudy()}
  if (b.matches("#next-card")) {cardIndex=(cardIndex+1)%TERMS.length;cardShown=false;renderStudy()}
  if (b.matches("#previous-card")) {cardIndex=(cardIndex-1+TERMS.length)%TERMS.length;cardShown=false;renderStudy()}
  if (b.matches("#bookmark-toggle")) {const open=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",String(!open));$("#bookmark-list").hidden=open}
  if (b.matches(".main-nav a")) {$("#primary-nav").classList.remove("open");$("#menu-toggle").setAttribute("aria-expanded","false")}
});
$("#dictionary-search").addEventListener("input",e=>renderTerms(e.target.value.trim()));
$("#ask-form").addEventListener("submit",e=>{e.preventDefault();$("#ask-answer").innerHTML=answerQuestion($("#ask-input").value.trim())});
$("#suggest-form").addEventListener("submit",e=>{e.preventDefault();const input=$("#suggest-input"),items=stored("pinkpoli-ideas");items.unshift({text:input.value.trim(),savedAt:new Date().toISOString()});const ok=persist("pinkpoli-ideas",items.slice(0,30));let status=e.currentTarget.nextElementSibling;if(!status||status.tagName!=="P"){status=document.createElement("p");status.setAttribute("role","status");e.currentTarget.after(status)}status.textContent=ok?"Idea saved on this device.":"Could not save this idea in this browser.";input.value=""});
$("#menu-toggle").addEventListener("click",e=>{const open=e.currentTarget.getAttribute("aria-expanded")==="true";e.currentTarget.setAttribute("aria-expanded",String(!open));e.currentTarget.setAttribute("aria-label",open?"Open navigation":"Close navigation");$("#primary-nav").classList.toggle("open",!open)});
renderTerms();renderStudy();renderSaved();initSearch();$("#year").textContent=new Date().getFullYear();fetchNews();
