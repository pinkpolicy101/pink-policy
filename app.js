const COUNTRY_DATA = {
  'saudi-arabia': {
    name: 'Saudi Arabia',
    overview: 'Saudi Arabia is a monarchy with a strong state-led development model and a major focus on economic diversification, tourism, education, and digital innovation.',
    government: 'Monarchy; executive leadership under the King; state institutions support Vision 2030 reforms and public policy implementation.',
    keyIssues: [
      'Vision 2030 and economic diversification',
      'Tourism, culture, and entertainment development',
      'Education, skills development, and digital transformation',
      'Regional cooperation and infrastructure investment'
    ],
    officialSources: [
      { label: 'Saudi Press Agency (SPA)', url: 'https://www.spa.gov.sa/en' },
      { label: 'Vision 2030', url: 'https://www.vision2030.gov.sa/' },
      { label: 'Saudi Ministry of Tourism', url: 'https://www.visitsaudi.com/en' },
      { label: 'Saudi Ministry of Education', url: 'https://www.moe.gov.sa/en' }
    ],
    officialUpdates: [
      { title: 'Vision 2030 progress and investment priorities', url: 'https://www.vision2030.gov.sa/' },
      { title: 'Tourism and destination growth', url: 'https://www.visitsaudi.com/en' },
      { title: 'National education and skills development', url: 'https://www.moe.gov.sa/en' }
    ]
  },
  'united-states': {
    name: 'United States',
    overview: 'The United States is a constitutional federal republic with democratic elections, separation of powers, and a strong role for courts, Congress, and the presidency.',
    government: 'Federal constitutional republic with a presidential system, a bicameral Congress, and an independent judiciary.',
    keyIssues: ['elections and voting', 'federalism and state power', 'civil rights', 'foreign policy and public institutions'],
    officialSources: [
      { label: 'White House', url: 'https://www.whitehouse.gov/' },
      { label: 'Congress.gov', url: 'https://www.congress.gov/' },
      { label: 'U.S. State Department', url: 'https://www.state.gov/' }
    ],
    officialUpdates: [
      { title: 'Executive and policy updates', url: 'https://www.whitehouse.gov/' },
      { title: 'Congressional legislation and oversight', url: 'https://www.congress.gov/' },
      { title: 'U.S. foreign policy and diplomacy', url: 'https://www.state.gov/' }
    ]
  },
  palestine: {
    name: 'Palestine',
    overview: 'Palestine is a key case in debates over statehood, occupation, self-determination, rights, and international diplomacy.',
    government: 'Palestinian National Authority and Palestinian institutions, with a continued struggle over statehood, governance, and occupation.',
    keyIssues: ['statehood and self-determination', 'occupation and rights', 'international diplomacy', 'humanitarian access'],
    officialSources: [
      { label: 'Palestinian Ministry of Foreign Affairs', url: 'https://www.mofa.pna.ps/' },
      { label: 'UNISPAL', url: 'https://www.un.org/unispal/' },
      { label: 'UN News', url: 'https://news.un.org/en/' }
    ],
    officialUpdates: [
      { title: 'Palestinian diplomatic statements', url: 'https://www.mofa.pna.ps/' },
      { title: 'UN reporting and humanitarian updates', url: 'https://news.un.org/en/' },
      { title: 'UNISPAL references and official records', url: 'https://www.un.org/unispal/' }
    ]
  },
  'united-kingdom': {
    name: 'United Kingdom',
    overview: 'The UK is a constitutional monarchy with a parliamentary system and a long tradition of representative government and legal institutions.',
    government: 'Constitutional monarchy with a parliamentary system and devolved governments in Scotland, Wales, and Northern Ireland.',
    keyIssues: ['parliament and election politics', 'constitutional change', 'public policy and welfare', 'UK-EU and international relations'],
    officialSources: [
      { label: 'UK Government', url: 'https://www.gov.uk/' },
      { label: 'Parliament UK', url: 'https://www.parliament.uk/' },
      { label: 'Foreign, Commonwealth & Development Office', url: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office' }
    ],
    officialUpdates: [
      { title: 'UK government announcements', url: 'https://www.gov.uk/' },
      { title: 'Parliamentary proceedings and debates', url: 'https://www.parliament.uk/' },
      { title: 'Foreign policy and international affairs', url: 'https://www.gov.uk/government/organisations/foreign-commonwealth-development-office' }
    ]
  },
  turkey: {
    name: 'Turkey',
    overview: 'Turkey is a republic with a strong executive structure, regional strategic influence, and major debates over governance, security, and democracy.',
    government: 'Presidential republic with a strong executive and a broad role for the state in security and development policy.',
    keyIssues: ['state power and governance', 'regional security', 'economic policy', 'foreign policy and NATO relations'],
    officialSources: [
      { label: 'Turkish Presidency', url: 'https://www.tccb.gov.tr/' },
      { label: 'Turkish Ministry of Foreign Affairs', url: 'https://www.mfa.gov.tr/' },
      { label: 'Turkish Grand National Assembly', url: 'https://www.tbmm.gov.tr/' }
    ],
    officialUpdates: [
      { title: 'Presidential statements and policy news', url: 'https://www.tccb.gov.tr/' },
      { title: 'Foreign ministry updates', url: 'https://www.mfa.gov.tr/' },
      { title: 'Legislative and parliamentary updates', url: 'https://www.tbmm.gov.tr/' }
    ]
  },
  brazil: {
    name: 'Brazil',
    overview: 'Brazil is a federal republic with strong regional diversity, democratic institutions, and major debates around inequality and public policy.',
    government: 'Federal presidential system with subnational state governments and a strong role for democratic elections.',
    keyIssues: ['democracy and public accountability', 'inequality and welfare', 'environment and Amazon policy', 'regional leadership'],
    officialSources: [
      { label: 'Brazil Government Portal', url: 'https://www.gov.br/' },
      { label: 'Brazilian Congress', url: 'https://www2.camara.leg.br/' },
      { label: 'Brazil Ministry of Foreign Affairs', url: 'https://www.gov.br/mre/' }
    ],
    officialUpdates: [
      { title: 'Federal government updates', url: 'https://www.gov.br/' },
      { title: 'Legislative news', url: 'https://www2.camara.leg.br/' },
      { title: 'Foreign affairs and diplomacy', url: 'https://www.gov.br/mre/' }
    ]
  },
  india: {
    name: 'India',
    overview: 'India is a large federal democracy with significant political diversity, major social and economic policy debates, and a central role in global politics.',
    government: 'Federal parliamentary democracy with a constitution, national parliament, and states with significant power.',
    keyIssues: ['federalism and governance', 'social equality', 'economic development', 'regional and international relations'],
    officialSources: [
      { label: 'Government of India', url: 'https://www.india.gov.in/' },
      { label: 'Indian Parliament', url: 'https://sansad.in/' },
      { label: 'Ministry of External Affairs', url: 'https://www.mea.gov.in/' }
    ],
    officialUpdates: [
      { title: 'Government updates', url: 'https://www.india.gov.in/' },
      { title: 'Parliamentary information', url: 'https://sansad.in/' },
      { title: 'Foreign policy updates', url: 'https://www.mea.gov.in/' }
    ]
  },
  china: {
    name: 'China',
    overview: 'China is a one-party state with a highly centralized political system and major influence over trade, infrastructure, technology, and global governance.',
    government: 'One-party state under the Chinese Communist Party with centralized political and economic coordination.',
    keyIssues: ['party-state governance', 'economic development', 'technology and security', 'global trade and diplomacy'],
    officialSources: [
      { label: 'Chinese Government Portal', url: 'https://english.www.gov.cn/' },
      { label: 'National People’s Congress', url: 'https://www.npc.gov.cn/' },
      { label: 'Ministry of Foreign Affairs of China', url: 'https://www.fmprc.gov.cn/mfa_eng/' }
    ],
    officialUpdates: [
      { title: 'Government policy updates', url: 'https://english.www.gov.cn/' },
      { title: 'Legislative and national developments', url: 'https://www.npc.gov.cn/' },
      { title: 'Foreign policy and diplomatic updates', url: 'https://www.fmprc.gov.cn/mfa_eng/' }
    ]
  },
  egypt: {
    name: 'Egypt',
    overview: 'Egypt is a state with major political and military institutions, strong Arab regional influence, and public policy debates across governance and development.',
    government: 'Republic with a strong executive and powerful military and state institutions that shape domestic politics.',
    keyIssues: ['government reform', 'economic development', 'security and regional policy', 'education and public services'],
    officialSources: [
      { label: 'Egypt State Information Service', url: 'https://www.sis.gov.eg/' },
      { label: 'Egyptian Cabinet', url: 'https://www.cabinet.gov.eg/' },
      { label: 'Egyptian Foreign Ministry', url: 'https://www.mfa.gov.eg/' }
    ],
    officialUpdates: [
      { title: 'Official state information', url: 'https://www.sis.gov.eg/' },
      { title: 'Cabinet and domestic policy updates', url: 'https://www.cabinet.gov.eg/' },
      { title: 'Diplomatic and foreign policy updates', url: 'https://www.mfa.gov.eg/' }
    ]
  },
  'south-africa': {
    name: 'South Africa',
    overview: 'South Africa is a constitutional democracy with a strong public discussion around inequality, transition from apartheid, and public accountability.',
    government: 'Constitutional democracy with a parliamentary system and strong constitutional protections.',
    keyIssues: ['post-apartheid governance', 'inequality and public services', 'citizen participation', 'regional diplomacy'],
    officialSources: [
      { label: 'South African Government', url: 'https://www.gov.za/' },
      { label: 'Parliament of South Africa', url: 'https://www.parliament.gov.za/' },
      { label: 'Department of International Relations and Cooperation', url: 'https://dirco.gov.za/' }
    ],
    officialUpdates: [
      { title: 'Government announcements', url: 'https://www.gov.za/' },
      { title: 'Parliamentary developments', url: 'https://www.parliament.gov.za/' },
      { title: 'International relations updates', url: 'https://dirco.gov.za/' }
    ]
  },
  france: {
    name: 'France',
    overview: 'France is a semi-presidential republic with strong political parties, state institutions, and a central role in European governance.',
    government: 'Semi-presidential republic with executive power shared between the president and prime minister, alongside parliament.',
    keyIssues: ['presidential politics', 'European integration', 'migration policy', 'economic reform'],
    officialSources: [
      { label: 'Government of France', url: 'https://www.gouvernement.fr/' },
      { label: 'French Parliament', url: 'https://www.assemblee-nationale.fr/' },
      { label: 'French Ministry of Foreign Affairs', url: 'https://www.diplomatie.gouv.fr/' }
    ],
    officialUpdates: [
      { title: 'French government updates', url: 'https://www.gouvernement.fr/' },
      { title: 'Parliamentary updates', url: 'https://www.assemblee-nationale.fr/' },
      { title: 'Foreign policy', url: 'https://www.diplomatie.gouv.fr/' }
    ]
  },
  japan: {
    name: 'Japan',
    overview: 'Japan is a constitutional monarchy with a strong bureaucratic state and major policy influence in East Asia and global trade.',
    government: 'Constitutional monarchy with a parliamentary system and a powerful administrative state.',
    keyIssues: ['bureaucracy and policy implementation', 'security and regional relations', 'demographic change', 'technology and trade'],
    officialSources: [
      { label: 'Japan Government', url: 'https://www.japan.go.jp/' },
      { label: 'Japanese Diet', url: 'https://www.shugiin.go.jp/' },
      { label: 'Ministry of Foreign Affairs Japan', url: 'https://www.mofa.go.jp/' }
    ],
    officialUpdates: [
      { title: 'Government updates', url: 'https://www.japan.go.jp/' },
      { title: 'Legislative updates', url: 'https://www.shugiin.go.jp/' },
      { title: 'Foreign policy updates', url: 'https://www.mofa.go.jp/' }
    ]
  }
};

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
  const type = $('#feedback-type').value.trim();
  const message = $('#feedback-message').value.trim();

  if (!message) {
    $('#feedback-status').textContent = 'Please write a suggestion before submitting.';
    return;
  }

  const existing = JSON.parse(localStorage.getItem('pinkpoli-feedback') || '[]');
  existing.unshift({
    name,
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

const renderCountryProfile = (countryKey) => {
  const country = COUNTRY_DATA[countryKey] || COUNTRY_DATA['saudi-arabia'];
  const panel = $('#country-profile-panel');

  panel.innerHTML = `
    <article class="country-profile-card">
      <div class="country-profile-header">
        <div>
          <p class="eyebrow">COUNTRY PROFILE</p>
          <h3>${country.name}</h3>
        </div>
      </div>
      <p>${country.overview}</p>
      <div class="country-profile-grid">
        <div>
          <h4>Government structure</h4>
          <p>${country.government}</p>
        </div>
        <div>
          <h4>Key issues</h4>
          <ul>
            ${country.keyIssues.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="country-profile-sources">
        <h4>Official trusted sources</h4>
        <ul>
          ${country.officialSources.map(source => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></li>`).join('')}
        </ul>
      </div>
      <div class="country-profile-sources">
        <h4>Official updates</h4>
        <ul>
          ${country.officialUpdates.map(update => `<li><a href="${update.url}" target="_blank" rel="noreferrer">${update.title}</a></li>`).join('')}
        </ul>
      </div>
    </article>
  `;
};

const handleCountrySearch = () => {
  const query = $('#country-search-input').value.trim().toLowerCase();
  const matches = Object.entries(COUNTRY_DATA).filter(([key, data]) => {
    return data.name.toLowerCase().includes(query) || key.toLowerCase().includes(query);
  });

  if (!matches.length) {
    $('#country-profile-panel').innerHTML = '<div class="country-profile-card"><p>No country profile matches that search. Try Saudi Arabia, United States, Palestine, or Japan.</p></div>';
    return;
  }

  const [selectedKey] = matches[0];
  renderCountryProfile(selectedKey);
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
  renderCountryProfile('saudi-arabia');

  $('#feedback-form').addEventListener('submit', handleFeedbackSubmit);
  $('#mun-search-form').addEventListener('submit', renderMunResults);
  $('#language-toggle').addEventListener('click', toggleLanguage);
  $('#country-search-input').addEventListener('input', handleCountrySearch);
  $('#menu-toggle').addEventListener('click', () => {
    const nav = $('#primary-nav');
    const isOpen = nav.classList.toggle('open');
    $('#menu-toggle').setAttribute('aria-expanded', String(isOpen));
  });

  $$('.country-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.country;
      renderCountryProfile(key);
      $('#country-search-input').value = COUNTRY_DATA[key].name;
    });
  });

  applyLanguage('en');
};

document.addEventListener('DOMContentLoaded', initSite);
