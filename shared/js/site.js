document.documentElement.classList.add('js'); // no-JS reveal gate: CSS scopes .reveal hiding under html.js
// Shared site JS: mobile nav toggle, lead form submit, scroll reveal.
(function () {
  // Mobile nav
  var toggle = document.querySelector('[data-nav-toggle]');
  var menu = document.querySelector('[data-nav-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Lead form
  var form = document.querySelector('[data-lead-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var status = form.querySelector('[data-form-status]');
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.page = location.pathname;
      btn.disabled = true;
      if (status) { status.textContent = 'Sending…'; status.className = 'form-status'; }
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then(function (r) { return r.json().catch(function () { return { ok: r.ok }; }); })
        .then(function (j) {
          if (j.ok) {
            form.reset();
            if (status) { status.textContent = "Thank you — we'll be in touch within one business day."; status.className = 'form-status form-status--ok'; }
          } else {
            throw new Error(j.error || 'Something went wrong');
          }
        })
        .catch(function (err) {
          if (status) { status.textContent = err.message + ' — or email us at purewaterva58@gmail.com'; status.className = 'form-status form-status--err'; }
        })
        .finally(function () { btn.disabled = false; });
    });
  }

  // Scroll reveal (respects reduced motion)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
