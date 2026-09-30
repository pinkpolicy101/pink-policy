const MUN_LIBRARY = {
  ga: {
    label: 'General Assembly',
    docs: [
      { title: 'UN Charter', url: 'https://www.un.org/en/about-us/un-charter/full-text' },
      { title: 'UN Sustainable Development Goals', url: 'https://sdgs.un.org/goals' },
      { title: 'UNGA resolutions on climate and development', url: 'https://www.un.org/en/ga/' }
    ],
    sources: [
      { title: 'United Nations', url: 'https://www.un.org/' },
      { title: 'UN News', url: 'https://news.un.org/en/' },
      { title: 'UNDP', url: 'https://www.undp.org/' }
    ],
    briefs: [
      { title: 'Global development and inequality', url: 'https://www.un.org/en/academic-impact/sustainable-development-goals' },
      { title: 'Climate and environmental policy', url: 'https://www.un.org/en/climatechange' },
      { title: 'Human rights and state accountability', url: 'https://www.ohchr.org/' }
    ],
    keywords: ['climate', 'development', 'rights', 'humanitarian', 'sustainability', 'peace', 'education', 'migration']
  },
  sc: {
    label: 'Security Council',
    docs: [
      { title: 'UN Security Council resolutions', url: 'https://main.un.org/securitycouncil/' },
      { title: 'UN Charter Chapter VII', url: 'https://www.un.org/en/about-us/un-charter/chapter-vii' },
      { title: 'UN peacekeeping overview', url: 'https://peacekeeping.un.org/en' }
    ],
    sources: [
      { title: 'UN Peacekeeping', url: 'https://peacekeeping.un.org/' },
      { title: 'ICRC', url: 'https://www.icrc.org/' },
      { title: 'International Crisis Group', url: 'https://www.crisisgroup.org/' }
    ],
    briefs: [
      { title: 'Conflict prevention and security', url: 'https://www.un.org/securitycouncil/' },
      { title: 'War, sanctions and diplomacy', url: 'https://www.cfr.org/' },
      { title: 'Regional security analysis', url: 'https://www.iiss.org/' }
    ],
    keywords: ['war', 'conflict', 'peacekeeping', 'sanctions', 'security', 'arms', 'diplomacy', 'territory']
  },
  ecosoc: {
    label: 'ECOSOC',
    docs: [
      { title: 'ECOSOC overview', url: 'https://www.un.org/ecosoc/' },
      { title: 'UN development policy', url: 'https://www.un.org/development/desa/' },
      { title: 'UN social policy resources', url: 'https://www.un.org/ecosoc/en' }
    ],
    sources: [
      { title: 'UN DESA', url: 'https://www.un.org/development/desa/' },
      { title: 'UN Women', url: 'https://www.unwomen.org/' },
      { title: 'UNESCO', url: 'https://www.unesco.org/' }
    ],
    briefs: [
      { title: 'Sustainable development and livelihoods', url: 'https://sdgs.un.org/' },
      { title: 'Education and social inclusion', url: 'https://www.unesco.org/en' },
      { title: 'Health and social policy', url: 'https://www.who.int/' }
    ],
    keywords: ['poverty', 'development', 'health', 'education', 'inequality', 'gender', 'labor', 'social policy']
  },
  unhrc: {
    label: 'UN Human Rights Council',
    docs: [
      { title: 'UN Human Rights Council', url: 'https://www.ohchr.org/en/hr-bodies/hrc/home' },
      { title: 'Universal Declaration of Human Rights', url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights' },
      { title: 'OHCHR country reports', url: 'https://www.ohchr.org/en/countries' }
    ],
    sources: [
      { title: 'OHCHR', url: 'https://www.ohchr.org/' },
      { title: 'Amnesty International', url: 'https://www.amnesty.org/' },
      { title: 'Human Rights Watch', url: 'https://www.hrw.org/' }
    ],
    briefs: [
      { title: 'Rights, accountability and detention', url: 'https://www.hrw.org/' },
      { title: 'Freedom of expression and media', url: 'https://rsf.org/' },
      { title: 'Women’s rights and equality', url: 'https://www.unwomen.org/' }
    ],
    keywords: ['rights', 'freedom', 'detention', 'minorities', 'women', 'dignity', 'accountability', 'justice']
  },
  unep: {
    label: 'UN Environment Programme',
    docs: [
      { title: 'UNEP home', url: 'https://www.unep.org/' },
      { title: 'Climate action resources', url: 'https://www.unep.org/explore-topics/climate-action' },
      { title: 'Environmental policy and emissions', url: 'https://www.unep.org/topics' }
    ],
    sources: [
      { title: 'IPCC', url: 'https://www.ipcc.ch/' },
      { title: 'UN Climate Change', url: 'https://unfccc.int/' },
      { title: 'World Resources Institute', url: 'https://www.wri.org/' }
    ],
    briefs: [
      { title: 'Climate resilience and mitigation', url: 'https://www.unep.org/topics/climate-action' },
      { title: 'Biodiversity and conservation', url: 'https://www.unep.org/topics/biodiversity' },
      { title: 'Industry and pollution', url: 'https://www.unep.org/topics/chemicals-and-pollution-action' }
    ],
    keywords: ['climate', 'emissions', 'energy', 'environment', 'pollution', 'water', 'biodiversity', 'sustainability']
  },
  who: {
    label: 'World Health Organization',
    docs: [
      { title: 'WHO homepage', url: 'https://www.who.int/' },
      { title: 'Global health surveillance', url: 'https://www.who.int/health-topics' },
      { title: 'Health policy and access', url: 'https://www.who.int/health-topics' }
    ],
    sources: [
      { title: 'WHO', url: 'https://www.who.int/' },
      { title: 'CDC', url: 'https://www.cdc.gov/' },
      { title: 'Gavi', url: 'https://www.gavi.org/' }
    ],
    briefs: [
      { title: 'Public health and inequality', url: 'https://www.who.int/health-topics/' },
      { title: 'Vaccination and disease control', url: 'https://www.who.int/immunization' },
      { title: 'Health systems and access', url: 'https://www.who.int/health-topics/' }
    ],
    keywords: ['health', 'vaccines', 'pandemic', 'medicine', 'public health', 'medical access', 'wellbeing']
  },
  crisis: {
    label: 'Crisis Committee',
    docs: [
      { title: 'UN crisis and conflict resources', url: 'https://www.un.org/en/' },
      { title: 'ICRC conflict analysis', url: 'https://www.icrc.org/' },
      { title: 'Global crisis reporting', url: 'https://www.reuters.com/' }
    ],
    sources: [
      { title: 'Reuters World', url: 'https://www.reuters.com/world/' },
      { title: 'BBC World', url: 'https://www.bbc.com/news/world' },
      { title: 'Al Jazeera World', url: 'https://www.aljazeera.com/' }
    ],
    briefs: [
      { title: 'Escalation and negotiation', url: 'https://www.crisisgroup.org/' },
      { title: 'Military strategy and diplomacy', url: 'https://www.cfr.org/' },
      { title: 'Regional instability analysis', url: 'https://www.iiss.org/' }
    ],
    keywords: ['war', 'conflict', 'crisis', 'military', 'escalation', 'security', 'negotiation', 'humanitarian']
  },
  special: {
    label: 'Specialized Agencies',
    docs: [
      { title: 'UN Agencies overview', url: 'https://www.un.org/en/about-us/un-system' },
      { title: 'UNESCO', url: 'https://www.unesco.org/' },
      { title: 'UNICEF', url: 'https://www.unicef.org/' }
    ],
    sources: [
      { title: 'UNICEF', url: 'https://www.unicef.org/' },
      { title: 'UNESCO', url: 'https://www.unesco.org/' },
      { title: 'World Bank', url: 'https://www.worldbank.org/' }
    ],
    briefs: [
      { title: 'Education and children’s rights', url: 'https://www.unicef.org/' },
      { title: 'Culture and global education', url: 'https://www.unesco.org/' },
      { title: 'Development and public policy', url: 'https://www.worldbank.org/' }
    ],
    keywords: ['education', 'culture', 'youth', 'development', 'innovation', 'children', 'media', 'inequality']
  }
};

const translations = {
  en: {
    tagline: 'POLITICS, MADE UNDERSTANDABLE',
    heroEyebrow: 'A STUDENT-MADE CIVICS CORNER',
    heroHeading: 'Politics, minus<br>the <em>wait, what?</em>',
    heroIntro: 'From MUN research to country comparisons, this is a student-made space for understanding politics without the fluff. We focus on the real issues: governance, rights, power, conflict, and the people behind the headlines.',
    newsBtn: 'Read the news',
    munBtn: 'MUN research tool',
    newsTitle: 'Stay updated',
    newsDeck: 'Politics only. No lifestyle fluff. No celebrity gossip. Just political developments, public policy, elections, and global power struggles.',
    countriesTitle: 'Politics is global'
  },
  ar: {
    tagline: 'السياسة، بطريقة سهلة',
    heroEyebrow: 'زاوية تعليمية من طالب/ة',
    heroHeading: 'السياسة، بدون<br>الـ <em>انتظر، ماذا؟</em>',
    heroIntro: 'من أبحاث MUN إلى مقارنة الدول، هذه مساحة طلابية لفهم السياسة بوضوح بعيدًا عن الضجيج. نركز على القضايا الحقيقية: الحكم، الحقوق، القوة، النزاع، والأشخاص وراء العناوين.',
    newsBtn: 'اقرأ الأخبار',
    munBtn: 'أداة بحث MUN',
    newsTitle: 'ابقَ على اطلاع',
    newsDeck: 'السياسة فقط. لا شائعات ولا فوضى. فقط تطورات سياسية، سياسة عامة، انتخابات، وصراعات السلطة العالمية.',
    countriesTitle: 'السياسة عالمية'
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const renderFeedbackList = () => {
  const items = JSON.parse(localStorage.getItem('pinkpoli-feedback') || '[]');
  const container = $('#feedback-list');

  if (!items.length) {
    container.innerHTML = '<p class="muted">No suggestions yet. Be the first to help improve the site.</p>';
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="feedback-item">
      <strong>${item.type || 'Suggestion'}:</strong>
      <p>${item.message}</p>
      <small>${item.name ? `By ${item.name}` : 'Anonymous'} • ${new Date(item.date).toLocaleDateString()}</small>
    </div>
  `).join('');
};

const handleFeedbackSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = $('#feedback-name').value.trim();
  const email = $('#feedback-email').value.trim();
  const type = $('#feedback-type').value.trim();
  const message = $('#feedback-message').value.trim();

  if (!message) {
    $('#feedback-status').textContent = 'Please write a suggestion before submitting.';
    return;
  }

  const existing = JSON.parse(localStorage.getItem('pinkpoli-feedback') || '[]');
  existing.unshift({
    name,
    email,
    type,
    message,
    date: new Date().toISOString()
  });

  localStorage.setItem('pinkpoli-feedback', JSON.stringify(existing.slice(0, 20)));
  $('#feedback-status').textContent = 'Suggestion saved. Thanks for helping improve the site.';
  form.reset();
  renderFeedbackList();
};

const getMatches = (country, topic, committeeKey) => {
  const committee = MUN_LIBRARY[committeeKey] || MUN_LIBRARY.ga;
  const query = `${country} ${topic}`.toLowerCase();
  const docs = committee.docs.filter(item => {
    const haystack = `${item.title} ${committee.label}`.toLowerCase();
    return !query || haystack.includes(query) || committee.keywords.some(keyword => query.includes(keyword));
  });

  const sources = committee.sources.filter(item => {
    const haystack = `${item.title} ${committee.label}`.toLowerCase();
    return !query || haystack.includes(query) || committee.keywords.some(keyword => query.includes(keyword));
  });

  const briefs = committee.briefs.filter(item => {
    const haystack = `${item.title} ${committee.label}`.toLowerCase();
    return !query || haystack.includes(query) || committee.keywords.some(keyword => query.includes(keyword));
  });

  return {
    docs: docs.length ? docs : committee.docs.slice(0, 3),
    sources: sources.length ? sources : committee.sources.slice(0, 3),
    briefs: briefs.length ? briefs : committee.briefs.slice(0, 3)
  };
};

const renderMunResults = (event) => {
  event.preventDefault();
  const committee = $('#mun-committee').value;
  const country = $('#mun-country').value.trim();
  const topic = $('#mun-topic').value.trim();

  const selected = committee || 'ga';
  const matches = getMatches(country, topic, selected);

  const docsList = $('#un-docs-list');
  const govList = $('#gov-sources-list');
  const briefsList = $('#briefs-list');

  docsList.innerHTML = matches.docs.map(item => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></li>`).join('');
  govList.innerHTML = matches.sources.map(item => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></li>`).join('');
  briefsList.innerHTML = matches.briefs.map(item => `<li><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></li>`).join('');

  $('#mun-results').hidden = false;
};

const applyLanguage = (lang) => {
  const entries = document.querySelectorAll('[data-i18n]');
  entries.forEach(node => {
    const key = node.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      node.innerHTML = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
};

const toggleLanguage = () => {
  const current = document.body.dataset.lang === 'ar' ? 'ar' : 'en';
  const next = current === 'en' ? 'ar' : 'en';
  document.body.dataset.lang = next;
  applyLanguage(next);
};

const initSite = () => {
  $('#year').textContent = new Date().getFullYear();
  renderFeedbackList();
  $('#feedback-form').addEventListener('submit', handleFeedbackSubmit);
  $('#mun-search-form').addEventListener('submit', renderMunResults);
  $('#language-toggle').addEventListener('click', toggleLanguage);
  $('#menu-toggle').addEventListener('click', () => {
    const nav = $('#primary-nav');
    const isOpen = nav.classList.toggle('open');
    $('#menu-toggle').setAttribute('aria-expanded', String(isOpen));
  });
  applyLanguage('en');
};

document.addEventListener('DOMContentLoaded', initSite);
