/* DabbaMap — Main JS */

// ── Toast ──────────────────────────────────────────────────────────────────
function showToast(msg, duration = 2800) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), duration);
}

// ── Copy to clipboard ──────────────────────────────────────────────────────
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.style.color = 'var(--success)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
    showToast('Copied to clipboard!');
  });
}

// ── Checkbox Pills ─────────────────────────────────────────────────────────
function initCheckboxPills() {
  document.querySelectorAll('.checkbox-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const isRadio = pill.closest('.checkbox-pills-row')?.dataset.radio === 'true';
      if (isRadio) {
        pill.closest('.checkbox-pills-row').querySelectorAll('.checkbox-pill').forEach(p => p.classList.remove('active'));
      }
      pill.classList.toggle('active');
    });
  });
}

// ── Tabs ───────────────────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('[data-tab-group]') || btn.closest('.tab-container');
      const target = btn.dataset.tab;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const content = group.querySelector(`[data-tab-content="${target}"]`);
      if (content) content.classList.add('active');
    });
  });
}

// ── Mobile Navbar ──────────────────────────────────────────────────────────
function initNavbar() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    hamburger.innerHTML = open ? '✕' : '☰';
  });
}

// ── Multi-step form ────────────────────────────────────────────────────────
function initStepForm() {
  const steps = document.querySelectorAll('.step-panel');
  if (!steps.length) return;
  let current = 0;

  function goToStep(i) {
    steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
    document.querySelectorAll('.step-item').forEach((item, idx) => {
      const dot   = item.querySelector('.step-dot');
      const label = item.querySelector('.step-label');
      const line  = item.nextElementSibling;
      dot.classList.remove('current','complete');
      label.classList.remove('current','complete');
      if (idx < i)  { dot.classList.add('complete');  label.classList.add('complete'); }
      if (idx === i){ dot.classList.add('current');   label.classList.add('current'); }
      if (line && line.classList.contains('step-line')) {
        line.classList.toggle('complete', idx < i);
      }
    });
    current = i;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => { if (current < steps.length - 1) goToStep(current + 1); });
  });
  document.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => { if (current > 0) goToStep(current - 1); });
  });
  goToStep(0);
}

// ── Char counter ───────────────────────────────────────────────────────────
function initCharCounters() {
  document.querySelectorAll('[data-maxlength]').forEach(el => {
    const max     = parseInt(el.dataset.maxlength);
    const counter = el.parentElement.querySelector('.char-count');
    if (!counter) return;
    function update() { counter.textContent = `${el.value.length} / ${max}`; }
    el.addEventListener('input', update);
    update();
  });
}

// ── Anonymous message expand — handled per-page (profile.html) ────────────
function initAnonMessage() {
  // profile.html has its own complete handler with OTP login flow
}

// ── Confirm active ─────────────────────────────────────────────────────────
function initConfirmActive() {
  const btn  = document.getElementById('confirm-active-btn');
  const bar  = document.getElementById('confirm-active-bar');
  const stat = document.getElementById('status-indicator');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (bar) bar.style.display = 'none';
    if (stat) stat.textContent = '🟢 Active — just confirmed';
    showToast('Great! Your listing is marked as active.');
  });
}

// ── List/Map toggle ────────────────────────────────────────────────────────
function initViewToggle() {
  const listBtn = document.getElementById('view-list');
  const mapBtn  = document.getElementById('view-map');
  const listView= document.getElementById('list-view');
  const mapView = document.getElementById('map-view');
  if (!listBtn || !mapBtn) return;

  listBtn.addEventListener('click', () => {
    listBtn.classList.add('active');
    mapBtn.classList.remove('active');
    if (listView) listView.style.display = '';
    if (mapView)  mapView.style.display  = 'none';
  });
  mapBtn.addEventListener('click', () => {
    mapBtn.classList.add('active');
    listBtn.classList.remove('active');
    if (mapView)  mapView.style.display  = '';
    if (listView) listView.style.display = 'none';
    initLeafletMap();
  });
}

// ── Leaflet Map ────────────────────────────────────────────────────────────
let mapInstance = null;
function initLeafletMap() {
  if (mapInstance || !window.L) return;
  const el = document.getElementById('leaflet-map');
  if (!el) return;

  mapInstance = L.map('leaflet-map').setView([19.076, 72.877], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(mapInstance);

  const pins = [
    { lat: 19.082, lng: 72.872, name: 'Sunita\'s Kitchen', area: 'Andheri West', price: '₹80/meal', type: 'veg', color: '#4A7C59' },
    { lat: 19.071, lng: 72.883, name: 'Ramesh Tiffins',   area: 'Andheri East', price: '₹90/meal', type: 'nonveg', color: '#DC2626' },
    { lat: 19.078, lng: 72.868, name: 'Jain Dabba',       area: 'Versova',      price: '₹100/meal',type: 'jain',   color: '#7c3aed' },
    { lat: 19.065, lng: 72.890, name: 'Priya\'s Meals',   area: 'Sakinaka',     price: '₹75/meal', type: 'veg',    color: '#4A7C59' },
  ];

  pins.forEach(p => {
    const icon = L.divIcon({
      html: `<div style="width:32px;height:40px;background:${p.color};border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.25);border:2px solid rgba(255,255,255,0.4)"><span style="transform:rotate(45deg);font-size:14px">🍱</span></div>`,
      iconSize: [32, 40], iconAnchor: [16, 40], popupAnchor: [0, -44], className: ''
    });
    const popup = `
      <div style="font-family:'DM Sans',sans-serif;padding:4px;min-width:180px">
        <div style="font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:#2C1810">${p.name}</div>
        <div style="font-size:12px;color:#7C6B5A;margin:2px 0">${p.area}</div>
        <div style="font-size:18px;font-weight:700;color:#C8771A;margin:4px 0">${p.price}</div>
        <a href="profile.html" style="display:inline-block;margin-top:6px;padding:6px 14px;background:#C8771A;color:#fff;border-radius:100px;font-size:12px;font-weight:600;text-decoration:none">View Details →</a>
      </div>`;
    L.marker([p.lat, p.lng], { icon }).addTo(mapInstance).bindPopup(popup, { maxWidth: 220 });
  });
}

// ── Discover filter ────────────────────────────────────────────────────────
function initDiscoverFilter() {
  const form = document.getElementById('filter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Filters applied!');
  });
  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      form.reset();
      form.querySelectorAll('.checkbox-pill').forEach(p => p.classList.remove('active'));
      showToast('Filters cleared');
    });
  }
}

// ── Listing success ────────────────────────────────────────────────────────
function initListForm() {
  // Handled by inline script in list.html (saves to localStorage before showing success)
}

// ── Recommend success ──────────────────────────────────────────────────────
function initRecommendForm() {
  const btn     = document.getElementById('recommend-submit');
  const form    = document.getElementById('recommend-form');
  const success = document.getElementById('recommend-success');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (form)    form.style.display    = 'none';
    if (success) success.style.display = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const again = document.getElementById('recommend-again');
  if (again) {
    again.addEventListener('click', () => {
      if (form)    form.style.display    = '';
      if (success) success.style.display = 'none';
    });
  }
}

// ── Sticky navbar ──────────────────────────────────────────────────────────
function initStickyNav() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  });
}

// ── Staggered card animation ───────────────────────────────────────────────
function initCardAnimate() {
  const cards = document.querySelectorAll('.card-anim');
  if (!('IntersectionObserver' in window)) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  cards.forEach((c, i) => {
    c.style.animationDelay = `${i * 80}ms`;
    obs.observe(c);
  });
}

// ── Profile icon ───────────────────────────────────────────────────────────
function initProfileIcon() {
  const btn  = document.getElementById('nav-profile-btn');
  const drop = document.getElementById('nav-profile-drop');
  if (!btn || !drop) return;

  function getUser() {
    try { return JSON.parse(localStorage.getItem('dabbamapUser') || 'null'); } catch(e) { return null; }
  }

  function render() {
    const user = getUser();
    if (user && user.loggedIn) {
      const initial = (user.name || user.phone || 'U')[0].toUpperCase();
      btn.textContent = initial;
      btn.style.fontFamily = 'var(--font-display)';
      drop.innerHTML =
        '<div class="npd-header">' +
          '<div class="npd-name">' + (user.name || 'My Account') + '</div>' +
          '<div class="npd-sub">' + (user.email || user.phone || '') + '</div>' +
        '</div>' +
        '<button class="npd-btn" id="npd-dash-p">📊 My Dashboard</button>' +
        '<button class="npd-btn" id="npd-dash-c">🍛 My Orders</button>' +
        '<div class="npd-divider"></div>' +
        '<button class="npd-btn danger" id="npd-logout">Log out</button>';
      drop.querySelector('#npd-dash-p').onclick = function() { window.location.href = 'dashboard.html?role=provider'; };
      drop.querySelector('#npd-dash-c').onclick = function() { window.location.href = 'dashboard.html?role=consumer'; };
      drop.querySelector('#npd-logout').onclick = function() {
        if (window.DabbaAuth) {
          window.DabbaAuth.signOut().then(function() {
            showToast('Logged out.');
            setTimeout(function() { location.reload(); }, 500);
          });
        } else {
          localStorage.removeItem('dabbamapUser');
          setTimeout(function() { location.reload(); }, 300);
        }
      };
    } else {
      btn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;stroke:var(--primary);fill:none;stroke-width:1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';
      drop.innerHTML =
        '<div class="npd-header">' +
          '<div class="npd-name">Welcome to DabbaMap</div>' +
          '<div class="npd-sub">Log in to access your dashboard</div>' +
        '</div>' +
        '<button class="npd-btn" id="npd-open-login">🔑 Log in / Sign up</button>';
      drop.querySelector('#npd-open-login').onclick = function() {
        drop.classList.remove('open');
        openNavLoginModal();
      };
    }
  }

  render();

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    drop.classList.toggle('open');
  });
  document.addEventListener('click', function() { drop.classList.remove('open'); });

  window.refreshProfileIcon = render;
}

// ── Pan-India place / pincode lookup (OpenStreetMap Nominatim) ───────────────
// Returns up to `limit` Indian places matching the query via cb([{label, sub, lat, lng}]).
window.fetchIndiaPlaces = function (query, cb, limit) {
  query = (query || '').trim();
  if (query.length < 3) { cb([]); return; }
  var isPin = /^\d{3,6}$/.test(query);
  var url = 'https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=in&limit='
    + (limit || 6) + '&' + (isPin ? 'postalcode=' + encodeURIComponent(query) : 'q=' + encodeURIComponent(query));
  fetch(url, { headers: { 'Accept-Language': 'en' } })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var seen = {}, out = [];
      (data || []).forEach(function (d) {
        var a = d.address || {};
        var primary = a.suburb || a.neighbourhood || a.village || a.town || a.city
          || a.county || (d.display_name || '').split(',')[0];
        var region  = a.city || a.state_district || a.state || '';
        if (!primary) return;
        var label = primary + (region && region !== primary ? ', ' + region : '');
        var key = label.toLowerCase();
        if (seen[key]) return;
        seen[key] = 1;
        out.push({ label: label, sub: a.postcode || a.state || 'India', lat: d.lat, lng: d.lon });
      });
      cb(out);
    })
    .catch(function () { cb([]); });
};

// ── Account storage helpers (email + password) ──────────────────────────────
function getAccounts() {
  try { return JSON.parse(localStorage.getItem('dabbamapAccounts') || '{}'); } catch(e) { return {}; }
}
function saveAccounts(a) { localStorage.setItem('dabbamapAccounts', JSON.stringify(a)); }

// ── Inline login / sign-up modal (email + password) ──────────────────────────
// Optional onSuccess(user) callback fires after a successful login/signup.
function openNavLoginModal(onSuccess) {
  if (document.getElementById('nav-login-modal')) return;

  const modal = document.createElement('div');
  modal.id = 'nav-login-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:100000;background:rgba(44,24,16,.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px';

  let mode = 'login'; // 'login' | 'signup'

  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:28px;max-width:400px;width:100%;box-shadow:0 12px 48px rgba(44,24,16,.3)">
      <div style="font-size:28px;margin-bottom:8px">🔐</div>
      <h3 id="nlm-title" style="font-family:var(--font-display);font-size:21px;font-weight:800;margin-bottom:6px">Welcome back</h3>
      <p id="nlm-subtitle" style="font-size:13px;color:var(--text-muted);margin-bottom:18px">Log in to manage your dabba and messages.</p>

      <div id="nlm-tabs" style="display:flex;border:1.5px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:18px">
        <button id="nlm-tab-login"  type="button" style="flex:1;padding:9px;border:none;background:var(--primary);color:#fff;font-weight:700;cursor:pointer;font-family:var(--font-body);font-size:13px">Log In</button>
        <button id="nlm-tab-signup" type="button" style="flex:1;padding:9px;border:none;background:transparent;color:var(--text-muted);font-weight:600;cursor:pointer;font-family:var(--font-body);font-size:13px">Sign Up</button>
      </div>

      <div id="nlm-name-field" class="form-group mb-3" style="display:none">
        <label class="form-label">Your Name</label>
        <input type="text" id="nlm-name" class="form-input" placeholder="Enter your name" autocomplete="name" />
      </div>

      <div class="form-group mb-3">
        <label class="form-label">Email Address</label>
        <input type="email" id="nlm-email" class="form-input" placeholder="you@example.com" autocomplete="email" />
      </div>

      <div class="form-group mb-3" id="nlm-pass-field">
        <label class="form-label" id="nlm-pass-label">Password</label>
        <input type="password" id="nlm-password" class="form-input" placeholder="••••••••" autocomplete="current-password" />
      </div>

      <div id="nlm-forgot-wrap" style="text-align:right;margin-top:-6px;margin-bottom:14px">
        <a href="#" id="nlm-forgot" style="font-size:12px;color:var(--primary);font-weight:600;text-decoration:none">Forgot password?</a>
      </div>

      <div id="nlm-confirm-field" class="form-group mb-4" style="display:none">
        <label class="form-label">Confirm Password</label>
        <input type="password" id="nlm-confirm" class="form-input" placeholder="••••••••" autocomplete="new-password" />
      </div>

      <div id="nlm-error" style="display:none;font-size:13px;color:#dc2626;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:8px 12px;margin-bottom:14px"></div>

      <div style="display:flex;gap:10px">
        <button class="btn btn-primary" style="flex:1" id="nlm-submit">Log In →</button>
        <button class="btn btn-ghost" id="nlm-close">Cancel</button>
      </div>

      <p id="nlm-switch-hint" style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:16px;margin-bottom:0">
        New to DabbaMap? <a href="#" id="nlm-switch-link" style="color:var(--primary);font-weight:600;text-decoration:none">Create an account</a>
      </p>
    </div>`;

  document.body.appendChild(modal);

  const title    = document.getElementById('nlm-title');
  const subtitle = document.getElementById('nlm-subtitle');
  const tabs      = document.getElementById('nlm-tabs');
  const tabLogin = document.getElementById('nlm-tab-login');
  const tabSignup= document.getElementById('nlm-tab-signup');
  const nameField= document.getElementById('nlm-name-field');
  const passField= document.getElementById('nlm-pass-field');
  const confField= document.getElementById('nlm-confirm-field');
  const passLabel= document.getElementById('nlm-pass-label');
  const forgotWrap = document.getElementById('nlm-forgot-wrap');
  const submit   = document.getElementById('nlm-submit');
  const errBox   = document.getElementById('nlm-error');
  const switchHint = document.getElementById('nlm-switch-hint');

  function showError(msg) { errBox.textContent = msg; errBox.style.display = ''; }
  function clearError()   { errBox.style.display = 'none'; }

  function setMode(m) {
    mode = m;
    clearError();
    const isSignup = m === 'signup';
    const isReset  = m === 'reset';

    // Tabs only relevant for login/signup
    tabs.style.display = isReset ? 'none' : 'flex';
    tabLogin.style.background  = isSignup ? 'transparent' : 'var(--primary)';
    tabLogin.style.color       = isSignup ? 'var(--text-muted)' : '#fff';
    tabLogin.style.fontWeight  = isSignup ? '600' : '700';
    tabSignup.style.background  = isSignup ? 'var(--primary)' : 'transparent';
    tabSignup.style.color       = isSignup ? '#fff' : 'var(--text-muted)';
    tabSignup.style.fontWeight  = isSignup ? '700' : '600';

    nameField.style.display = isSignup ? '' : 'none';
    passField.style.display = isReset ? 'none' : '';
    confField.style.display = isSignup ? '' : 'none';
    forgotWrap.style.display = (m === 'login') ? '' : 'none';
    passLabel.textContent = 'Password';

    title.textContent =
      isSignup ? 'Create your account' :
      isReset  ? 'Forgot password'      : 'Welcome back';
    subtitle.textContent =
      isSignup ? 'Sign up to list your dabba or save your messages.' :
      isReset  ? "Enter your registered email and we'll email you a reset link." :
                 'Log in to manage your dabba and messages.';
    submit.textContent =
      isSignup ? 'Create Account →' :
      isReset  ? 'Send Reset Link →'  : 'Log In →';

    switchHint.innerHTML =
      isSignup ? 'Already have an account? <a href="#" id="nlm-switch-link" style="color:var(--primary);font-weight:600;text-decoration:none">Log in</a>' :
      isReset  ? 'Remembered it? <a href="#" id="nlm-switch-link" style="color:var(--primary);font-weight:600;text-decoration:none">Back to log in</a>' :
                 'New to DabbaMap? <a href="#" id="nlm-switch-link" style="color:var(--primary);font-weight:600;text-decoration:none">Create an account</a>';
    document.getElementById('nlm-switch-link').addEventListener('click', e => { e.preventDefault(); setMode((isSignup || isReset) ? 'login' : 'signup'); });
    document.getElementById('nlm-password').setAttribute('autocomplete', isSignup ? 'new-password' : 'current-password');
  }

  tabLogin.addEventListener('click', () => setMode('login'));
  tabSignup.addEventListener('click', () => setMode('signup'));
  document.getElementById('nlm-switch-link').addEventListener('click', e => { e.preventDefault(); setMode('signup'); });
  document.getElementById('nlm-forgot').addEventListener('click', e => { e.preventDefault(); setMode('reset'); });

  function closeModal() { modal.remove(); }
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.getElementById('nlm-close').addEventListener('click', closeModal);

  function validEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }

  function userFromRes(res, fallbackName, email) {
    var su = (res.data && (res.data.user || (res.data.session && res.data.session.user))) || null;
    if (!su) return { name: fallbackName || (email||'').split('@')[0], email: email, loggedIn: true };
    return {
      id: su.id,
      name: (su.user_metadata && su.user_metadata.name) || fallbackName || (su.email||'').split('@')[0],
      email: su.email, loggedIn: true, loginMethod: 'email'
    };
  }

  submit.addEventListener('click', () => {
    clearError();
    const Auth  = window.DabbaAuth;
    const email = document.getElementById('nlm-email').value.trim().toLowerCase();
    const pass  = document.getElementById('nlm-password').value;

    if (!validEmail(email)) { showError('Please enter a valid email address.'); return; }
    if (!Auth) { showError('Still connecting to the server — try again in a second.'); return; }

    // FORGOT PASSWORD → email a reset link
    if (mode === 'reset') {
      submit.disabled = true; submit.textContent = 'Sending…';
      Auth.resetPassword(email).then(function (res) {
        submit.disabled = false; submit.textContent = 'Send Reset Link →';
        if (res.error) { showError(res.error.message); return; }
        var card = modal.querySelector('div');
        card.innerHTML =
          '<div style="font-size:28px;margin-bottom:8px">📩</div>' +
          '<h3 style="font-family:var(--font-display);font-size:21px;font-weight:800;margin-bottom:6px">Check your email</h3>' +
          '<p style="font-size:13px;color:var(--text-muted);margin-bottom:16px">We sent a password reset link to <strong>' + email + '</strong>. Open it to set a new password.</p>' +
          '<button class="btn btn-primary" style="width:100%" id="nlm-ok">Done</button>';
        card.querySelector('#nlm-ok').addEventListener('click', closeModal);
      });
      return;
    }

    if (!pass || pass.length < 4) { showError('Password must be at least 4 characters.'); return; }

    if (mode === 'signup') {
      const name = document.getElementById('nlm-name').value.trim();
      const conf = document.getElementById('nlm-confirm').value;
      if (!name) { showError('Please enter your name.'); return; }
      if (pass !== conf) { showError('Passwords do not match.'); return; }
      submit.disabled = true; submit.textContent = 'Creating…';
      Auth.signUp(name, email, pass).then(function (res) {
        submit.disabled = false; submit.textContent = 'Create Account →';
        if (res.error) { showError(res.error.message); return; }
        if (!res.data.session) { // email confirmation is enabled
          showError('Account created! Please check your email to confirm, then log in.');
          setMode('login');
          return;
        }
        closeModal();
        showToast('Account created — welcome, ' + name + '!');
        if (typeof onSuccess === 'function') onSuccess(userFromRes(res, name, email));
      });
    } else {
      submit.disabled = true; submit.textContent = 'Logging in…';
      Auth.signIn(email, pass).then(function (res) {
        submit.disabled = false; submit.textContent = 'Log In →';
        if (res.error) { showError(res.error.message || 'Incorrect email or password.'); return; }
        var u = userFromRes(res, null, email);
        closeModal();
        showToast('Welcome back' + (u.name ? ', ' + u.name : '') + '!');
        if (typeof onSuccess === 'function') onSuccess(u);
      });
    }
  });

  // Enter key submits
  modal.addEventListener('keydown', e => { if (e.key === 'Enter') submit.click(); });

  setMode('login');
}

// ── Password recovery (opens when the reset email link is clicked) ───────────
window.onDabbaPasswordRecovery = function () {
  if (document.getElementById('nav-recovery-modal')) return;
  var modal = document.createElement('div');
  modal.id = 'nav-recovery-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:100000;background:rgba(44,24,16,.55);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML =
    '<div style="background:#fff;border-radius:20px;padding:28px;max-width:400px;width:100%;box-shadow:0 12px 48px rgba(44,24,16,.3)">' +
      '<div style="font-size:28px;margin-bottom:8px">🔑</div>' +
      '<h3 style="font-family:var(--font-display);font-size:21px;font-weight:800;margin-bottom:6px">Set a new password</h3>' +
      '<p style="font-size:13px;color:var(--text-muted);margin-bottom:18px">Choose a new password for your account.</p>' +
      '<div class="form-group mb-3"><label class="form-label">New Password</label><input type="password" id="nrm-pass" class="form-input" placeholder="••••••••" autocomplete="new-password" /></div>' +
      '<div class="form-group mb-4"><label class="form-label">Confirm Password</label><input type="password" id="nrm-conf" class="form-input" placeholder="••••••••" autocomplete="new-password" /></div>' +
      '<div id="nrm-error" style="display:none;font-size:13px;color:#dc2626;background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:8px 12px;margin-bottom:14px"></div>' +
      '<button class="btn btn-primary" style="width:100%" id="nrm-submit">Update Password →</button>' +
    '</div>';
  document.body.appendChild(modal);
  function err(m) { var e = document.getElementById('nrm-error'); e.textContent = m; e.style.display = ''; }
  document.getElementById('nrm-submit').addEventListener('click', function () {
    var p = document.getElementById('nrm-pass').value;
    var c = document.getElementById('nrm-conf').value;
    if (!p || p.length < 4) { err('Password must be at least 4 characters.'); return; }
    if (p !== c) { err('Passwords do not match.'); return; }
    window.DabbaAuth.updatePassword(p).then(function (res) {
      if (res.error) { err(res.error.message); return; }
      modal.remove();
      showToast('Password updated — you\'re logged in.');
      if (window.refreshProfileIcon) window.refreshProfileIcon();
    });
  });
};

// ── Dashboard notification badge (unread enquiries/replies) ──────────────────
function initDashboardBadge() {
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href="dashboard.html"], .nav-mobile-menu a[href="dashboard.html"]')
  );
  if (!links.length) return;

  var badges = links.map(function (a) {
    a.style.position = 'relative';
    var b = document.createElement('span');
    b.className = 'nav-dash-badge';
    b.style.display = 'none';
    a.appendChild(b);
    return b;
  });

  function setBadge(n) {
    badges.forEach(function (b) {
      if (n > 0) { b.textContent = n > 9 ? '9+' : String(n); b.style.display = 'flex'; }
      else { b.style.display = 'none'; }
    });
  }

  var onDash = location.pathname.indexOf('dashboard.html') !== -1;

  function compute() {
    var u = window.DabbaAuth && window.DabbaAuth.getUser();
    if (!u || !u.id || !window.DabbaMessages) { setBadge(0); return; }
    var seenKey = 'dabbamapDashSeen:' + u.id;
    if (onDash) { localStorage.setItem(seenKey, String(Date.now())); setBadge(0); return; }
    var lastSeen = parseInt(localStorage.getItem(seenKey) || '0', 10);
    Promise.all([window.DabbaMessages.myConsumer(), window.DabbaMessages.myProvider()]).then(function (r) {
      var n = 0;
      (r[0] || []).forEach(function (c) { (c.messages || []).forEach(function (m) {
        if (m.from_role === 'provider' && new Date(m.created_at).getTime() > lastSeen) n++;
      }); });
      (r[1] || []).forEach(function (c) { (c.messages || []).forEach(function (m) {
        if (m.from_role === 'consumer' && new Date(m.created_at).getTime() > lastSeen) n++;
      }); });
      setBadge(n);
    }).catch(function () { setBadge(0); });
  }

  if (window.DabbaAuthReady) window.DabbaAuthReady.then(compute); else compute();
  if (window.DabbaMessages && !window._dashBadgeSub) {
    window._dashBadgeSub = window.DabbaMessages.subscribe(function () { compute(); });
  }
  setInterval(compute, 15000);
}

// ── Init ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProfileIcon();
  initDashboardBadge();
  initCheckboxPills();
  initTabs();
  initStepForm();
  initCharCounters();
  initAnonMessage();
  initConfirmActive();
  initViewToggle();
  initDiscoverFilter();
  initListForm();
  initRecommendForm();
  initStickyNav();
  initCardAnimate();

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => copyText(btn.dataset.copy, btn));
  });
});
