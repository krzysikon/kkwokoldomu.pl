(function () {
  // ---- Header background on scroll (skip if header is already .solid) ----
  var header = document.getElementById('header');
  if (header && !header.classList.contains('solid')) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile menu ----
  var burger = document.getElementById('burger');
  var mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    var toggle = function (open) {
      document.body.classList.toggle('mobile-open', open);
      mobileNav.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
    };
    burger.addEventListener('click', function () {
      toggle(!document.body.classList.contains('mobile-open'));
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggle(false); });
    });
  }

  // ---- Scroll reveal ----
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (e) { e.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  // ---- Contact form -> automatyczna wysyłka e-mail (Formsubmit.co) ----
  var form = document.getElementById('contactForm');
  if (form) {
    var ENDPOINT = 'https://formsubmit.co/ajax/krzysiekikonrad@gmail.com';
    var statusEl = document.getElementById('formStatus');
    var btn = form.querySelector('button[type="submit"]');
    var btnLabel = btn ? btn.innerHTML : '';

    var showStatus = function (type, msg) {
      if (!statusEl) return;
      statusEl.className = 'form-status show ' + type;
      statusEl.innerHTML = msg;
    };
    var val = function (id) {
      var el = document.getElementById(id);
      return el ? (el.value || '').trim() : '';
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot — jeśli wypełnione, to bot: udajemy sukces i nic nie wysyłamy.
      var hp = form.querySelector('input[name="_honey"]');
      if (hp && hp.value) { return; }

      var name = val('name'), phone = val('phone'), city = val('city'), email = val('email');
      if (!name || !phone || !city) {
        showStatus('err', 'Podaj imię, numer telefonu i miejscowość, abyśmy mogli przygotować wycenę.');
        return;
      }

      // Reply-to = adres e-mail klienta (jeśli podany)
      var replyto = form.querySelector('input[name="_replyto"]');
      if (replyto) { replyto.value = email || ''; }

      if (btn) { btn.disabled = true; btn.innerHTML = 'Wysyłanie…'; }
      showStatus('ok', 'Wysyłanie zapytania…');

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (r) { return r.json().catch(function () { return {}; }); })
        .then(function (data) {
          var ok = data && (data.success === true || data.success === 'true');
          if (ok) {
            form.reset();
            showStatus('ok', 'Dziękujemy! Twoje zapytanie zostało wysłane — odezwiemy się z wyceną najszybciej, jak to możliwe.');
          } else {
            showStatus('err',
              'Nie udało się wysłać formularza. Zadzwoń: <a href="tel:+48532574313">+48 532 574 313</a> lub napisz: <a href="mailto:krzysiekikonrad@gmail.com">krzysiekikonrad@gmail.com</a>.');
          }
        })
        .catch(function () {
          showStatus('err',
            'Brak połączenia. Zadzwoń: <a href="tel:+48532574313">+48 532 574 313</a> lub napisz: <a href="mailto:krzysiekikonrad@gmail.com">krzysiekikonrad@gmail.com</a>.');
        })
        .then(function () {
          if (btn) { btn.disabled = false; btn.innerHTML = btnLabel; }
        });
    });
  }
})();
