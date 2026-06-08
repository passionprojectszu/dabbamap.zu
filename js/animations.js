/* DabbaMap Animations JS — scroll reveal, count-up,
   ripple, card glow, page transitions, navbar hide */

/* ── Page fade-in on load ── */
(function() {
  document.documentElement.style.opacity = '0';
  window.addEventListener('DOMContentLoaded', function() {
    requestAnimationFrame(function() {
      document.documentElement.style.transition = 'opacity 0.4s ease';
      document.documentElement.style.opacity = '1';
    });
  });
})();

/* ── Smooth page exit on navigation ── */
function initPageTransitions() {
  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf('http') === 0
        || href.indexOf('mailto') === 0 || href.indexOf('tel') === 0
        || link.target === '_blank' || link.hasAttribute('download')) return;
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var dest = href;
      document.documentElement.style.transition = 'opacity 0.25s ease';
      document.documentElement.style.opacity = '0';
      setTimeout(function() { window.location.href = dest; }, 260);
    });
  });
}

/* ── Navbar: hide on scroll down, show on scroll up ── */
function initNavbarBehaviour() {
  var nav = document.querySelector('.navbar');
  if (!nav) return;
  var lastY = 0;
  window.addEventListener('scroll', function() {
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 8);
    if (y > 300) {
      if (y > lastY + 6)      nav.classList.add('nav-hidden');
      else if (y < lastY - 6) nav.classList.remove('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastY = y;
  }, { passive: true });
}

/* ── Scroll reveal (IntersectionObserver) ── */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything
    document.querySelectorAll('[data-reveal], [data-stagger]').forEach(function(el) {
      el.classList.add('in-view');
    });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = parseFloat(el.dataset.delay || 0);
      setTimeout(function() { el.classList.add('in-view'); }, delay * 1000);
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-reveal], [data-stagger]').forEach(function(el) {
    obs.observe(el);
  });
}

/* ── Count-up numbers ── */
function initCountUp() {
  if (!('IntersectionObserver' in window)) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      obs.unobserve(el);
      var target   = parseFloat(el.dataset.count);
      var prefix   = el.dataset.prefix || '';
      var suffix   = el.dataset.suffix || '';
      var decimals = (el.dataset.count.indexOf('.') >= 0) ? 1 : 0;
      var duration = 1400;
      var start    = performance.now();

      function tick(now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = eased * target;
        el.textContent = prefix + (decimals ? val.toFixed(1) : Math.round(val)) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-count]').forEach(function(el) {
    obs.observe(el);
  });
}

/* ── Button ripple effect ── */
function initRipple() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn');
    if (!btn) return;
    var rect = btn.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    var x = e.clientX - rect.left - size / 2;
    var y = e.clientY - rect.top  - size / 2;
    var r = document.createElement('span');
    r.className = 'btn-ripple';
    r.style.cssText = 'width:'+size+'px;height:'+size+'px;left:'+x+'px;top:'+y+'px;';
    btn.appendChild(r);
    setTimeout(function() { r.remove(); }, 600);
  });
}

/* ── Card radial mouse glow ── */
function initCardGlow() {
  var selector = '.dabba-card, .sidebar-card, .priv-feat, .safety-icon-card, .who-panel';
  document.querySelectorAll(selector).forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      var y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.backgroundImage =
        'radial-gradient(circle at '+x+'% '+y+'%, rgba(200,119,26,0.05) 0%, transparent 65%)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.backgroundImage = '';
    });
  });
}

/* ── Discover: stagger new cards on grid update ── */
function initDiscoverStagger() {
  var grid = document.getElementById('results-grid');
  if (!grid) return;
  var seen = new Set();
  var obs = new MutationObserver(function() {
    grid.querySelectorAll('.dabba-card').forEach(function(card, i) {
      if (seen.has(card)) return;
      seen.add(card);
      card.style.opacity = '0';
      card.style.transform = 'translateY(18px)';
      setTimeout(function() {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)';
        card.style.opacity = '1';
        card.style.transform = 'none';
      }, i * 55);
    });
  });
  obs.observe(grid, { childList: true });
}

/* ── Filter panel slide in ── */
function initFilterSlide() {
  var panel = document.querySelector('.filter-panel');
  if (!panel) return;
  panel.style.opacity = '0';
  panel.style.transform = 'translateX(-20px)';
  setTimeout(function() {
    panel.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)';
    panel.style.opacity = '1';
    panel.style.transform = 'none';
  }, 200);
}

/* ── Hero section: stagger children ── */
function initHeroStagger() {
  var hero = document.querySelector('.ab-hero, .hero');
  if (!hero) return;
  var kids = hero.querySelectorAll('.hero-pill, h1, .ab-hero h1, .hero-title, .ab-hero-sub, .hero-subtitle, .ab-stats-row, .hero-search, .map-topbar, .map-stats-row');
  kids.forEach(function(el, i) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    setTimeout(function() {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)';
      el.style.opacity = '1';
      el.style.transform = 'none';
    }, 300 + i * 100);
  });
}

/* ── Number counter for home stat ── */
function initHomeStatCounter() {
  var statEl = document.getElementById('stat-count');
  if (!statEl) return;
  var target = parseInt(statEl.textContent) || 65;
  statEl.textContent = '0';
  setTimeout(function() {
    var start = performance.now();
    var dur = 1200;
    function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      statEl.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, 800);
}

/* ── Step form: slide direction ── */
function initStepSlide() {
  var steps = document.querySelectorAll('.step-panel');
  if (!steps.length) return;
  // Watch for active class changes using MutationObserver
  steps.forEach(function(step) {
    var mo = new MutationObserver(function() {
      if (step.classList.contains('active')) {
        step.style.animation = 'none';
        void step.offsetWidth; // reflow
        step.style.animation = '';
      }
    });
    mo.observe(step, { attributes: true, attributeFilter: ['class'] });
  });
}

/* ── Init everything ── */
document.addEventListener('DOMContentLoaded', function() {
  initNavbarBehaviour();
  initScrollReveal();
  initCountUp();
  initRipple();
  initCardGlow();
  initDiscoverStagger();
  initFilterSlide();
  initHeroStagger();
  initStepSlide();
  // Page transitions last (so other click handlers fire first)
  setTimeout(initPageTransitions, 150);
});
