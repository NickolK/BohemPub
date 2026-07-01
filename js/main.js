// ── MOBILE NAV ──────────────────────────────────
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}

// ── MENU TABS ───────────────────────────────────
function switchTab(tab, btn) {
    document.querySelectorAll('.mcontent').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.mtab').forEach(t => t.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
    btn.classList.add('active');
}

// ── GALLERY TABS ─────────────────────────────────
function switchGallery(tab, btn) {
    document.querySelectorAll('.gcontent').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.gtab').forEach(t => t.classList.remove('active'));
    document.getElementById('gtab-' + tab).classList.add('active');
    btn.classList.add('active');
}

// ── TOAST ────────────────────────────────────────
function sendForm() {
    const t = document.getElementById('toast');
    if (!t) return;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3600);
}

// ── PARALLAX ─────────────────────────────────────
window.addEventListener('scroll', () => {
    const g = document.querySelector('.hero-grid');
    if (g) g.style.transform = `translateY(${scrollY * .28}px)`;
});

// ── ACTIVE NAV ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
    if (typeof initPage === 'function') initPage();
});

// ── RENDER HELPERS ───────────────────────────────

function menuRow(item) {
    return `<div class="row">
    <div class="row-left">
      <div class="row-name">${item.name}</div>
      ${item.desc ? `<div class="row-desc">${item.desc}</div>` : ''}
      ${item.allergens ? `<div class="row-allergens">Alergény: ${item.allergens}</div>` : ''}
    </div>
    <div class="row-price">${item.price}</div>
  </div>`;
}

function napojRow(item) {
    return `<div class="row">
    <div class="row-left">
      <div class="row-name">${item.name}</div>
      ${item.desc ? `<div class="row-desc">${item.desc}</div>` : ''}
    </div>
    <div class="row-price">${item.price}</div>
  </div>`;
}

function menuSection(key, data) {
    return `<div class="menu-cat">${data.title}</div>
    ${data.items.map(menuRow).join('')}`;
}

function napojSection(key, data) {
    return `<div class="menu-cat">${data.title}</div>
    ${data.items.map(napojRow).join('')}`;
}

function galleryItem(item) {
    if (item.src) {
        return `<div class="gallery-item">
      <div class="gallery-bg" style="background-image:url('${item.src}');background-size:cover;background-position:center;"></div>
      <div class="gallery-label">${item.alt}</div>
    </div>`;
    }
    const bgs = ['gb1','gb2','gb3','gb4','gb5','gb6','gb7','gb8'];
    const cls = bgs[Math.floor(Math.random() * bgs.length)];
    return `<div class="gallery-item">
    <div class="gallery-bg ${cls}"></div>
    <div class="gallery-emoji">${item.emoji}</div>
    <div class="gallery-label">${item.alt}</div>
  </div>`;
}

function eventCard(ev) {
    const hasPoster = ev.poster !== null;
    return `<div class="event ${hasPoster ? 'event-poster' : ''}">
    ${hasPoster
        ? `<div class="event-img"><img src="${ev.poster}" alt="${ev.title}" loading="lazy"></div>`
        : `<div class="event-date"><span class="event-day">🎫</span><span class="event-when">${ev.when}</span></div>`
    }
    <div class="event-body">
      ${hasPoster ? `<div class="event-when-sm">${ev.when}</div>` : ''}
      <div class="event-name">${ev.title}</div>
      <div class="event-desc">${ev.desc}</div>
      <span class="event-pill">${ev.tag}</span>
    </div>
  </div>`;
}

// ── PAGE INITS ────────────────────────────────────

function renderPonuka() {
    const jedloEl   = document.getElementById('tab-jedlo');
    const napojEl   = document.getElementById('tab-napoje');
    const denneEl   = document.getElementById('tab-denne');
    if (!jedloEl) return;

    // Jedlo
    jedloEl.innerHTML = Object.entries(DB.menu).map(([k,v]) => menuSection(k,v)).join('');

    // Nápoje
    napojEl.innerHTML = Object.entries(DB.napoje).map(([k,v]) => napojSection(k,v)).join('');

    // Denné menu - AKTUALIZOVANÉ
    denneEl.innerHTML = `
    <div class="daily-banner">
      <div>
        <h3>Denné menu · Pondelok – Piatok</h3>
        <p>${DB.denneMenu.note}</p>
      </div>
      <div class="daily-badge">7,99 €</div>
    </div>
    
    <div class="menu-cat">Denný rozpis</div>
    ${DB.denneMenu.dni.map(d => `
      <div class="row">
        <div class="row-left">
          <div class="row-name" style="font-weight:bold; color:var(--amber)">${d.day}</div>
          <div class="row-desc" style="font-size:0.85rem; font-style:italic">${d.soup}</div>
          <div class="row-desc" style="font-weight:bold">${d.meal}</div>
        </div>
      </div>`).join('')}

    <div class="menu-cat" style="margin-top:20px">Menu na celý týždeň</div>
    ${DB.denneMenu.menuCelyTyzden.map(m => `
      <div class="row">
        <div class="row-left">
          <div class="row-desc">${m}</div>
        </div>
      </div>`).join('')}
  `;
}

function renderGaleria() {
    const pEl = document.getElementById('gtab-priestor');
    const jEl = document.getElementById('gtab-jedlo');
    if (!pEl) return;
    pEl.innerHTML = DB.gallery.priestor.map(galleryItem).join('');
    jEl.innerHTML = DB.gallery.jedlo.map(galleryItem).join('');
}

function renderEventy() {
    const el = document.getElementById('eventGrid');
    if (!el) return;
    el.innerHTML = DB.events.map(eventCard).join('');
}

function renderKontakt() {
    const h = document.getElementById('hoursGrid');
    if (h) h.innerHTML = DB.info.hours.map(r =>
        `<span class="hday">${r.day}</span><span class="htime">${r.time}</span>`).join('');
    const m = document.getElementById('mapFrame');
    if (m) m.src = DB.info.mapsEmbed;
}

function renderIndex() {
    const heroImg = document.getElementById('heroImg');
    if (heroImg && DB.heroImages.length) {
        let i = 0;
        heroImg.src = DB.heroImages[0];
        setInterval(() => {
            i = (i + 1) % DB.heroImages.length;
            heroImg.style.opacity = 0;
            setTimeout(() => { heroImg.src = DB.heroImages[i]; heroImg.style.opacity = 1; }, 400);
        }, 5000);
    }
    const ep = document.getElementById('eventPreview');
    if (ep) {
        const posterEvents = DB.events.filter(e => e.poster).slice(0, 5);
        ep.innerHTML = posterEvents.map(ev => `
      <div class="event event-poster">
        <div class="event-img"><img src="${ev.poster}" alt="${ev.title}" loading="lazy"></div>
        <div class="event-body">
          <div class="event-when-sm">${ev.when}</div>
          <div class="event-name">${ev.title}</div>
          <div class="event-desc">${ev.desc}</div>
          <span class="event-pill">${ev.tag}</span>
        </div>
      </div>`).join('');
    }
}

function initPage() {
    renderPonuka();
    renderGaleria();
    renderEventy();
    renderKontakt();
    renderIndex();
}