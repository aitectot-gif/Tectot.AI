(() => {
  "use strict";

  const accent = "#7C3AED";

  // ===== Icon set (hand-authored line icons, 24x24, currentColor) =====
  const ICONS = {
    megaphone: '<path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1Z"/><path d="M15 8a4 4 0 0 1 0 8"/><path d="M18 5a8 8 0 0 1 0 14"/>',
    trendingUp: '<polyline points="3,17 9,11 13,15 21,6"/><polyline points="15,6 21,6 21,12"/>',
    code: '<polyline points="8,6 3,12 8,18"/><polyline points="16,6 21,12 16,18"/><line x1="14" y1="4" x2="10" y2="20"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><line x1="20" y1="20" x2="15.5" y2="15.5"/>',
    share: '<circle cx="6" cy="12" r="2.3"/><circle cx="18" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><line x1="8" y1="10.8" x2="16" y2="7.2"/><line x1="8" y1="13.2" x2="16" y2="16.8"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1.1.9-2 2-2h2.3A4.2 4.2 0 0 0 21.5 10 9 9 0 0 0 12 3Z"/><circle cx="7.5" cy="10.5" r="1.1"/><circle cx="11" cy="7.5" r="1.1"/><circle cx="15" cy="8.5" r="1.1"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    cpu: '<rect x="7" y="7" width="10" height="10" rx="1.5"/><line x1="10.5" y1="2.5" x2="10.5" y2="5.5"/><line x1="13.5" y1="2.5" x2="13.5" y2="5.5"/><line x1="10.5" y1="18.5" x2="10.5" y2="21.5"/><line x1="13.5" y1="18.5" x2="13.5" y2="21.5"/><line x1="2.5" y1="10.5" x2="5.5" y2="10.5"/><line x1="2.5" y1="13.5" x2="5.5" y2="13.5"/><line x1="18.5" y1="10.5" x2="21.5" y2="10.5"/><line x1="18.5" y1="13.5" x2="21.5" y2="13.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><polygon points="15,9 13,13 9,15 11,11"/>',
    barChart: '<line x1="5" y1="21" x2="5" y2="11"/><line x1="12" y1="21" x2="12" y2="6"/><line x1="19" y1="21" x2="19" y2="14"/>',
    layers: '<polygon points="12,4 20,9 12,14 4,9"/><polyline points="4,14 12,18 20,14"/>',
    clipboardCheck: '<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><polyline points="8.5,13 11,15.5 16,10"/>',
    mapPin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.6"/><path d="M15.5 14.2c2.6.4 4.5 2.6 4.5 5.3"/>',
    home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/><rect x="10" y="14" width="4" height="6"/>',
    heartPulse: '<path d="M12 20s-7.5-4.7-9.5-9.6C1.2 6.9 3.4 4 6.6 4c1.9 0 3.4 1 4.4 2.5C12 5 13.5 4 15.4 4c3.2 0 5.4 2.9 4.1 6.4C17.5 15.3 12 20 12 20Z"/><polyline points="6,12 9,12 10.5,9 12.5,15 14,12 18,12"/>',
    graduationCap: '<polygon points="12,4 22,9 12,14 2,9"/><path d="M7 11.5v4.7c0 1 2.2 2.3 5 2.3s5-1.3 5-2.3v-4.7"/><line x1="22" y1="9" x2="22" y2="15.5"/>',
    factory: '<path d="M3 21V11l5 3.5V11l5 3.5V9l6 4v8Z"/><line x1="7" y1="6" x2="7" y2="9.5"/><line x1="12" y1="4" x2="12" y2="8"/>',
    hardHat: '<path d="M4 16a8 8 0 0 1 16 0Z"/><line x1="2.5" y1="16" x2="21.5" y2="16"/><line x1="12" y1="6" x2="12" y2="9.5"/>',
    shoppingBag: '<path d="M6 8h12l-1 12.5a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    bed: '<path d="M2.5 18v-7a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v7"/><path d="M2.5 15h19"/><rect x="4.5" y="9" width="6" height="4" rx="1"/><line x1="2.5" y1="18" x2="2.5" y2="20.5"/><line x1="21.5" y1="18" x2="21.5" y2="20.5"/>',
    briefcase: '<rect x="3" y="8" width="18" height="11" rx="2"/><path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
    store: '<path d="M3.5 9 4.7 4h14.6l1.2 5"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M3.5 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/>',
    messageCircle: '<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1.2-5A8.5 8.5 0 1 1 21 11.5Z"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.6"/><polyline points="3,17 9,12 13,15.5 16,13 21,17.5"/>'
  };
  function icon(name, size) {
    size = size || 22;
    const paths = ICONS[name] || ICONS.image;
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  // ===== Data =====
  const services = [
    { n: "01", icon: "megaphone", title: "Digital Marketing", desc: "SEO, social media, content and digital strategy built around business goals." },
    { n: "02", icon: "trendingUp", title: "Performance Marketing", desc: "Meta Ads, Google Ads and lead generation campaigns engineered for conversion." },
    { n: "03", icon: "code", title: "Website Development", desc: "High-performance websites designed for speed, clarity and conversion." },
    { n: "04", icon: "search", title: "SEO & Local SEO", desc: "Search visibility, Google Business Profile management and organic growth." },
    { n: "05", icon: "share", title: "Social Media Marketing", desc: "Creative strategy, content calendars and audience growth on the platforms that matter." },
    { n: "06", icon: "palette", title: "Creative & Branding", desc: "Campaign creatives, visual identity and marketing assets that hold attention." },
    { n: "07", icon: "target", title: "Lead Generation", desc: "Systems designed to generate qualified business enquiries, not just clicks." },
    { n: "08", icon: "cpu", title: "Technology Solutions", desc: "Web apps, software, CRM and automation built around how your team works." }
  ];

  const differentiators = [
    { icon: "compass", title: "Strategy First", desc: "Every campaign starts with business objectives, not templates." },
    { icon: "barChart", title: "Performance Focused", desc: "We measure results, not vanity metrics." },
    { icon: "layers", title: "Creative + Technology", desc: "Marketing and technology work together, not in silos." },
    { icon: "clipboardCheck", title: "Transparent Reporting", desc: "Clear reporting and actionable insights, always." },
    { icon: "mapPin", title: "Local Understanding", desc: "Strong understanding of Indian and regional businesses." },
    { icon: "users", title: "Long-Term Partnership", desc: "We focus on sustainable growth instead of short-term campaigns." }
  ];

  const statsData = [
    { target: 100, suffix: "+", label: "Projects Delivered" },
    { target: 50, suffix: "+", label: "Businesses Supported" },
    { target: 10, suffix: "+", label: "Industries Served" },
    { target: 5, suffix: "+", label: "Years of Experience" }
  ];

  const caseStudies = [
    { client: "Sample Real Estate Group", industry: "Real Estate", icon: "home", tag: "Website", challenge: "Low-converting listings and weak local search visibility.", result: "Rebuilt site + local SEO → stronger enquiry flow" },
    { client: "Sample Dental Clinic", industry: "Healthcare", icon: "heartPulse", tag: "Google Ads", challenge: "High cost-per-lead from unfocused ad spend.", result: "Restructured campaigns → improved cost efficiency" },
    { client: "Sample Coaching Institute", industry: "Education", icon: "graduationCap", tag: "Meta Ads", challenge: "Admissions campaigns not reaching the right audience.", result: "Refined targeting + creative testing → stronger reach" },
    { client: "Sample Manufacturing Co.", industry: "Manufacturing", icon: "factory", tag: "SEO", challenge: "Invisible on search for high-intent B2B keywords.", result: "Technical + content SEO → improved organic rankings" },
    { client: "Sample Retail Brand", industry: "Retail", icon: "shoppingBag", tag: "Branding", challenge: "Inconsistent visual identity across channels.", result: "Unified brand system across digital touchpoints" },
    { client: "Sample Consulting Firm", industry: "Professional Services", icon: "briefcase", tag: "Lead Generation", challenge: "Referral-only growth with no scalable pipeline.", result: "Built structured lead-gen funnel" }
  ];

  const process = [
    { n: "01", title: "Discover", desc: "Understand business goals." },
    { n: "02", title: "Strategize", desc: "Create the growth roadmap." },
    { n: "03", title: "Create", desc: "Build campaigns, websites and creative assets." },
    { n: "04", title: "Launch", desc: "Deploy and optimize." },
    { n: "05", title: "Scale", desc: "Measure results and improve continuously." }
  ];

  const testimonials = [
    { name: "Client Name", role: "Founder, Sample Business", quote: "This is placeholder testimonial copy — real client feedback will be added here.", badge: "Pending client testimonial" },
    { name: "Client Name", role: "Marketing Head, Sample Company", quote: "Placeholder quote reflecting the tone of a satisfied client — to be replaced.", badge: "Pending client testimonial" },
    { name: "Client Name", role: "Director, Sample Group", quote: "Another sample testimonial slot, ready for real client words.", badge: "Pending client testimonial" }
  ];

  const industries = [
    { name: "Real Estate", icon: "home", radius: "8px" }, { name: "Healthcare", icon: "heartPulse", radius: "50%" }, { name: "Education", icon: "graduationCap", radius: "2px" },
    { name: "Manufacturing", icon: "factory", radius: "8px" }, { name: "Construction", icon: "hardHat", radius: "50%" }, { name: "Retail", icon: "shoppingBag", radius: "2px" },
    { name: "Hospitality", icon: "bed", radius: "8px" }, { name: "Professional Services", icon: "briefcase", radius: "50%" }, { name: "Technology", icon: "cpu", radius: "2px" },
    { name: "Local Businesses", icon: "store", radius: "8px" }
  ];

  const blog = [
    { category: "Digital Marketing", icon: "megaphone", date: "Sample", title: "What a Growth-Focused Digital Strategy Actually Looks Like", excerpt: "A look at how strategy, creative and performance connect into one system." },
    { category: "SEO", icon: "search", date: "Sample", title: "Local SEO Basics Every Small Business Should Get Right", excerpt: "The fundamentals that decide whether customers find you first." },
    { category: "Meta Ads", icon: "messageCircle", date: "Sample", title: "Why Most Lead Campaigns Waste Budget — And How to Fix It", excerpt: "Common mistakes in targeting, creative and conversion tracking." }
  ];

  const faqData = [
    { question: "What services does Tectot provide?", answer: "Digital marketing, SEO, paid advertising, website development, branding and technology solutions for businesses of all sizes." },
    { question: "Do you work with small businesses?", answer: "Yes — we work with small, medium and growing businesses across industries." },
    { question: "Do you provide Meta Ads management?", answer: "Yes, including Facebook, Instagram and WhatsApp lead campaigns." },
    { question: "Do you provide Google Ads?", answer: "Yes, including search, display and performance campaigns." },
    { question: "Can you manage Google Business Profile?", answer: "Yes — profile setup, optimization, reviews and local visibility." },
    { question: "Do you build WordPress websites?", answer: "Yes, along with custom-built websites and landing pages." },
    { question: "How long does website development take?", answer: "Timelines depend on scope — we agree a clear timeline during discovery." },
    { question: "How do you measure campaign performance?", answer: "Through transparent reporting tied to the goals agreed at the start of the engagement." },
    { question: "Do you provide monthly digital marketing packages?", answer: "Yes, retainer-based packages are available depending on scope." },
    { question: "Can you work with businesses outside Hosur?", answer: "Yes — we work with clients across India remotely." }
  ];

  const localSeoItems = ["Google Business Profile optimization", "Local SEO & citations", "Review & reputation management", "Local keyword targeting", "Maps visibility", "Ongoing performance tracking"];
  const adChannels = ["Meta Ads", "Instagram Ads", "WhatsApp Campaigns", "Retargeting", "Creative Testing", "Audience Strategy"];
  const webFeatures = ["UI/UX design", "WordPress development", "Business websites", "Landing pages", "E-commerce", "Performance optimization", "Mobile-first build", "SEO-ready structure"];
  const growthStages = ["Strategy", "Creative", "Traffic", "Leads", "Conversion", "Growth"];
  const filterOptions = ["All", "Website", "SEO", "Meta Ads", "Google Ads", "Branding", "Lead Generation"];

  const barHeights = ["40%", "55%", "75%", "50%", "90%", "60%", "100%"];
  const barColorFor = (i) => (i === 2 || i === 4 || i === 6) ? accent : "oklch(70% 0.02 260)";

  // ===== Helpers =====
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  function renderBars(containerId, extraClass) {
    const container = $(containerId);
    if (!container) return;
    container.innerHTML = "";
    barHeights.forEach((h, i) => {
      const bar = el("div", "bar" + (extraClass ? " " + extraClass : ""));
      bar.style.height = h;
      bar.style.background = barColorFor(i);
      container.appendChild(bar);
    });
  }

  const trustMarks = ["target", "layers", "compass", "cpu", "barChart", "store"];
  function renderTrustLogos() {
    const container = $("trustLogos");
    trustMarks.forEach((iconName, i) => {
      const box = el("div", "trust-logo");
      box.innerHTML = `<span class="trust-mark">${icon(iconName, 18)}</span><span>LOGO ${i + 1}</span>`;
      container.appendChild(box);
    });
  }

  function renderServices() {
    const grid = $("servicesGrid");
    services.forEach((s) => {
      const card = el("div", "service-card");
      card.innerHTML = `
        <div class="service-icon">${icon(s.icon, 22)}</div>
        <div class="service-num">${s.n}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class="service-link">Explore Service <span>→</span></span>
      `;
      grid.appendChild(card);
    });
  }

  function renderGrowthStages() {
    const container = $("growthStages");
    growthStages.forEach((label, i) => {
      const wrap = el("div", "growth-stage");
      wrap.innerHTML = `<div class="growth-stage-box">${label}</div>` + (i < growthStages.length - 1 ? `<span class="growth-arrow">→</span>` : "");
      container.appendChild(wrap);
    });
  }

  function renderWhy() {
    const grid = $("whyGrid");
    differentiators.forEach((d) => {
      const card = el("div", "why-card");
      card.innerHTML = `
        <div class="why-icon">${icon(d.icon, 20)}</div>
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
      `;
      grid.appendChild(card);
    });
  }

  function renderStats(counts) {
    const grid = $("statsGrid");
    grid.innerHTML = "";
    statsData.forEach((s, i) => {
      const box = el("div");
      box.innerHTML = `
        <div class="stat-value">${counts[i]}${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      `;
      grid.appendChild(box);
    });
  }

  let currentFilter = "All";

  function renderFilterTags() {
    const container = $("filterTags");
    container.innerHTML = "";
    filterOptions.forEach((label) => {
      const btn = el("button", "filter-tag" + (label === currentFilter ? " active" : ""), label);
      btn.type = "button";
      btn.addEventListener("click", () => {
        currentFilter = label;
        renderFilterTags();
        renderCaseGrid();
      });
      container.appendChild(btn);
    });
  }

  function renderCaseGrid() {
    const grid = $("caseGrid");
    grid.innerHTML = "";
    const filtered = currentFilter === "All" ? caseStudies : caseStudies.filter((c) => c.tag === currentFilter);
    filtered.forEach((c) => {
      const card = el("div", "case-card");
      card.innerHTML = `
        <div class="case-visual"><span class="case-visual-icon">${icon(c.icon, 40)}</span></div>
        <div class="case-body">
          <div class="case-tags">
            <span class="case-tag">${c.industry}</span>
            <span class="case-tag-sample">Sample project</span>
          </div>
          <h3>${c.client}</h3>
          <p>${c.challenge}</p>
          <div class="case-result">${c.result}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderGbpMap() {
    const container = $("gbpMap");
    if (!container) return;
    container.innerHTML = `
      <svg viewBox="0 0 320 120" width="100%" height="100%" preserveAspectRatio="none">
        <rect x="0" y="0" width="320" height="120" fill="oklch(32% 0.01 260)"/>
        <path d="M0 30 H320 M0 70 H320 M0 100 H320" stroke="oklch(42% 0.01 260)" stroke-width="2"/>
        <path d="M60 0 V120 M180 0 V120 M250 0 V120" stroke="oklch(42% 0.01 260)" stroke-width="2"/>
        <path d="M0 55 H320" stroke="oklch(48% 0.01 260)" stroke-width="4"/>
        <circle cx="150" cy="55" r="7" fill="${accent}" opacity="0.35"/>
        <path d="M150 40a12 12 0 0 1 12 12c0 8-12 22-12 22s-12-14-12-22a12 12 0 0 1 12-12Z" fill="${accent}"/>
        <circle cx="150" cy="52" r="4" fill="white"/>
      </svg>
    `;
  }

  function renderSkeletonGraphic() {
    const container = $("skeletonGraphic");
    if (!container) return;
    container.innerHTML = `
      <svg viewBox="0 0 200 100" width="100%" height="100%" preserveAspectRatio="none">
        <polyline points="0,80 30,55 55,65 85,30 115,45 145,15 175,35 200,10" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="145" cy="15" r="4.5" fill="${accent}"/>
      </svg>
    `;
  }

  function renderLocalSeoList() {
    const container = $("localSeoList");
    localSeoItems.forEach((l) => {
      const item = el("div", "dash-item", `<span class="dash">—</span>${l}`);
      container.appendChild(item);
    });
  }

  function renderAdMetrics() {
    const container = $("adMetrics");
    const metrics = [
      { label: "Reach", value: "62K" }, { label: "Leads", value: "284" }, { label: "CPL", value: "₹110" },
      { label: "CTR", value: "3.4%" }, { label: "Conversions", value: "96" }
    ];
    metrics.forEach((m) => {
      const box = el("div", "ad-metric");
      box.innerHTML = `<div class="ad-metric-value">${m.value}</div><div class="ad-metric-label">${m.label}</div>`;
      container.appendChild(box);
    });
  }

  function renderPillRow(id, items) {
    const container = $(id);
    items.forEach((label) => container.appendChild(el("span", "pill", label)));
  }

  function renderWebFeatures() {
    const container = $("webFeatures");
    webFeatures.forEach((w) => {
      container.appendChild(el("div", "web-feature", `<span class="dash">—</span>${w}`));
    });
  }

  function renderProcess() {
    const container = $("processRow");
    process.forEach((p) => {
      const step = el("div", "process-step");
      step.innerHTML = `
        <div class="process-num">${p.n}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      `;
      container.appendChild(step);
    });
  }

  function renderIndustries() {
    const grid = $("industriesGrid");
    industries.forEach((ind) => {
      const card = el("div", "industry-card");
      card.innerHTML = `<div class="industry-shape" style="border-radius:${ind.radius};">${icon(ind.icon, 18)}</div><div class="industry-name">${ind.name}</div>`;
      grid.appendChild(card);
    });
  }

  function renderInsights() {
    const grid = $("insightsGrid");
    blog.forEach((b) => {
      const card = el("div", "insight-card");
      card.innerHTML = `
        <div class="insight-banner">${icon(b.icon, 26)}</div>
        <div class="insight-meta"><span class="insight-category">${b.category}</span><span class="insight-date">· ${b.date}</span></div>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <span class="insight-link">Read Article →</span>
      `;
      grid.appendChild(card);
    });
  }

  // ===== FAQ =====
  let activeFaq = 0;
  function renderFaq() {
    const container = $("faqList");
    container.innerHTML = "";
    faqData.forEach((f, i) => {
      const isOpen = i === activeFaq;
      const item = el("div", "faq-item");
      item.innerHTML = `
        <button type="button" class="faq-question">${f.question}<span class="faq-icon">${isOpen ? "−" : "+"}</span></button>
        ${isOpen ? `<div class="faq-answer">${f.answer}</div>` : ""}
      `;
      item.querySelector(".faq-question").addEventListener("click", () => {
        activeFaq = isOpen ? -1 : i;
        renderFaq();
      });
      container.appendChild(item);
    });
  }

  // ===== Testimonials =====
  let testimonialIndex = 0;
  let autoplayTimer = null;

  function renderTestimonial() {
    const t = testimonials[testimonialIndex];
    $("testimonialBadge").textContent = t.badge;
    $("testimonialQuote").textContent = `"${t.quote}"`;
    $("testimonialName").textContent = t.name;
    $("testimonialRole").textContent = t.role;

    const dotsContainer = $("testimonialDots");
    dotsContainer.innerHTML = "";
    testimonials.forEach((_, i) => {
      const dot = el("button", "testimonial-dot" + (i === testimonialIndex ? " active" : ""));
      dot.type = "button";
      dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
      dot.addEventListener("click", () => {
        testimonialIndex = i;
        renderTestimonial();
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function nextTestimonial() {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  }
  function prevTestimonial() {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  }
  function restartAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextTestimonial, 6000);
  }

  // ===== Stats counter (scroll-triggered) =====
  function initStatsCounter() {
    const section = $("statsSection");
    if (!section) return;
    let started = false;
    renderStats(statsData.map(() => 0));

    const start = () => {
      if (started) return;
      started = true;
      const targets = statsData.map((s) => s.target);
      const steps = 30;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const counts = targets.map((t) => Math.round(t * Math.min(1, step / steps)));
        renderStats(counts);
        if (step >= steps) clearInterval(timer);
      }, 40);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) start(); });
      }, { threshold: 0.3 });
      observer.observe(section);
    } else {
      start();
    }
  }

  // ===== Nav interactions =====
  function initNav() {
    const navToggle = $("navToggle");
    const mobileMenu = $("mobileMenu");
    navToggle.addEventListener("click", () => {
      const isOpen = !mobileMenu.hidden;
      mobileMenu.hidden = isOpen;
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.textContent = isOpen ? "☰" : "✕";
    });
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      mobileMenu.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.textContent = "☰";
    }));

    // Services mega-menu opens on hover/focus via CSS (.nav-item-dropdown:hover/:focus-within).
    // Click is kept only as a touch-device fallback (no hover) — toggles the same CSS state.
    const servicesToggle = $("servicesToggle");
    const servicesDropdown = servicesToggle.closest(".nav-item-dropdown");
    servicesToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = servicesDropdown.classList.toggle("touch-open");
      servicesToggle.setAttribute("aria-expanded", String(isOpen));
    });
    document.addEventListener("click", (e) => {
      if (servicesDropdown.classList.contains("touch-open") && !servicesDropdown.contains(e.target)) {
        servicesDropdown.classList.remove("touch-open");
        servicesToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===== Contact form =====
  function initContactForm() {
    const form = $("contactForm");
    const success = $("contactSuccess");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.hidden = true;
      success.hidden = false;
    });
  }

  // ===== Init =====
  document.addEventListener("DOMContentLoaded", () => {
    renderBars("heroBars");
    renderTrustLogos();
    renderServices();
    renderGrowthStages();
    renderWhy();
    initStatsCounter();
    renderFilterTags();
    renderCaseGrid();
    renderGbpMap();
    renderLocalSeoList();
    renderAdMetrics();
    renderBars("adBars", "ad-bar");
    renderPillRow("adChannels", adChannels);
    renderWebFeatures();
    renderSkeletonGraphic();
    renderProcess();
    renderTestimonial();
    renderIndustries();
    renderInsights();
    renderFaq();
    initNav();
    initContactForm();

    $("nextTestimonial").addEventListener("click", () => { nextTestimonial(); restartAutoplay(); });
    $("prevTestimonial").addEventListener("click", () => { prevTestimonial(); restartAutoplay(); });
    restartAutoplay();
  });
})();
