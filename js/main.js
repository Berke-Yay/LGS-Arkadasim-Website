/* LGS Arkadaşım – sayfa davranışları (bağımlılık yok) */
(function () {
  'use strict';
  var doc = document;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Üst menü, mobil menü, dil menüsü.
     Öğeler her çağrıda yeniden aranır; böylece sayfa içeriği değişse bile çalışır. */
  var $ = function (sel) { return doc.querySelector(sel); };
  var NAV_BREAK = window.matchMedia('(min-width: 1280px)');

  function onScroll() {
    var header = $('[data-header]'), fab = $('[data-fab]');
    var y = window.pageYOffset || doc.documentElement.scrollTop;
    if (header) { if (y > 8) header.setAttribute('data-scrolled', ''); else header.removeAttribute('data-scrolled'); }
    if (fab) { if (y > 520) fab.setAttribute('data-show', ''); else fab.removeAttribute('data-show'); }
  }
  function setNav(open) {
    var burger = $('[data-burger]'), nav = $('[data-nav]');
    if (!burger || !nav) return;
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) nav.setAttribute('data-open', ''); else nav.removeAttribute('data-open');
    doc.body.classList.toggle('nav-open', open);
  }
  function setLang(open) {
    var lang = $('[data-lang-menu]');
    if (!lang) return;
    var btn = lang.querySelector('.lang__btn');
    if (open) lang.setAttribute('data-open', ''); else lang.removeAttribute('data-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  // Tüm tıklamalar tek yerden (olay temsili): menü düğmeleri, dil menüsü, dışarı tıklama.
  doc.addEventListener('click', function (e) {
    var t = e.target;
    var burger = t.closest && t.closest('[data-burger]');
    if (burger) {
      setLang(false);
      setNav(burger.getAttribute('aria-expanded') !== 'true');
      return;
    }
    var langBtn = t.closest && t.closest('.lang__btn');
    if (langBtn) {
      var lang = langBtn.closest('[data-lang-menu]');
      setNav(false);
      setLang(!lang.hasAttribute('data-open'));
      return;
    }
    if (t.closest && t.closest('[data-nav] a')) setNav(false);
    if (!(t.closest && t.closest('[data-lang-menu]'))) setLang(false);
  });
  doc.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var lang = $('[data-lang-menu]'), burger = $('[data-burger]');
    if (lang && lang.hasAttribute('data-open')) { setLang(false); lang.querySelector('.lang__btn').focus(); }
    if (burger && burger.getAttribute('aria-expanded') === 'true') { setNav(false); burger.focus(); }
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  var onBreak = function () { var header = $('[data-header]'); var long = header && /^(de|es|fr)$/.test(header.getAttribute('data-lang') || ''); if (NAV_BREAK.matches && !(long && window.innerWidth < 1560)) setNav(false); };
  if (NAV_BREAK.addEventListener) NAV_BREAK.addEventListener('change', onBreak); else if (NAV_BREAK.addListener) NAV_BREAK.addListener(onBreak);
  window.addEventListener('resize', onBreak);
  onScroll();

  /* Sayfaya özgü davranışlar (çubuk animasyonu, iletişim formu). Sayfa içeriği değişirse yeniden çağrılabilir. */
  function initPage() {
    /* Karşılaştırma çubukları: görünce dolsun, sayı yukarı saysın */
    var cmp = doc.querySelector('[data-compare]');
    function countUp(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var fmt = new Intl.NumberFormat(el.getAttribute('data-locale') || undefined, { style: 'percent', maximumFractionDigits: 1 });
      if (reduce || !isFinite(target)) return;
      var start = null, dur = 1300;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt.format((target * eased) / 100);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (cmp) {
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (!en.isIntersecting) return;
            cmp.classList.add('is-in');
            cmp.querySelectorAll('[data-count]').forEach(countUp);
            io.disconnect();
          });
        }, { threshold: 0.35 });
        io.observe(cmp);
      } else {
        cmp.classList.add('is-in');
      }
    }

    /* İletişim formu */
    var form = doc.getElementById('contact-form');
    if (form) {
      var endpoint = form.getAttribute('data-endpoint');
      var status = form.querySelector('[data-status]');
      var submit = form.querySelector('[data-submit]');
      var msg = form.querySelector('textarea');
      var left = form.querySelector('[data-count-left]');
      var max = parseInt(msg.getAttribute('maxlength'), 10) || 500;
      var say = function (text, kind) { status.textContent = text; status.className = 'form__status' + (kind ? ' is-' + kind : ''); };
      var updateLeft = function () { left.textContent = form.getAttribute('data-msg-left').replace('{n}', Math.max(0, max - msg.value.length)); };
      msg.addEventListener('input', updateLeft);
      updateLeft();

      form.addEventListener('submit', function (e) {
        var f = form.elements;
        var bad = [];
        var name = f.name.value.trim(), email = f.email.value.trim(), text = f.message.value.trim();
        if (name.length < 2) bad.push(f.name);
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) bad.push(f.email);
        if (text.length < 10) bad.push(f.message);
        [f.name, f.email, f.message].forEach(function (x) { x.classList.toggle('is-invalid', bad.indexOf(x) > -1); });
        if (bad.length) { e.preventDefault(); say(form.getAttribute('data-msg-validation'), 'err'); bad[0].focus(); return; }
        if (!endpoint) return; // uç nokta yoksa tarayıcı varsayılan (mailto) davranışını uygular
        e.preventDefault();
        submit.disabled = true;
        say(form.getAttribute('data-msg-sending'));
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: name, email: email, message: text, lang: f.lang.value, website: f.website.value, Name: name, Email: email, Message: text })
        }).then(function (res) {
          if (res.ok) { form.reset(); updateLeft(); say(form.getAttribute('data-msg-success'), 'ok'); }
          else if (res.status === 429) say(form.getAttribute('data-msg-rate'), 'err');
          else if (res.status === 400) say(form.getAttribute('data-msg-validation'), 'err');
          else say(form.getAttribute('data-msg-error'), 'err');
        }).catch(function () { say(form.getAttribute('data-msg-error'), 'err'); })
          .then(function () { submit.disabled = false; });
      });
    }
  }

  /* ---------- Yazı animasyonları ----------
     Başlıklar kelime kelime (hero'da harf harf) maskeden yükselir, paragraflar odaklanarak belirir,
     misyon/vizyon metni kaydırdıkça kelime kelime aydınlanır, kartlar sırayla girer, tutarlar sayarak yükselir.
     Hareket azaltma tercihi açıksa ya da tarayıcı desteklemiyorsa hiçbir şey gizlenmez. */
  var scrubs = [];
  var scrubBound = false;
  function scrubUpdate() {
    var vh = window.innerHeight || 800;
    scrubs.forEach(function (el) {
      if (!el.isConnected) return;
      var r = el.getBoundingClientRect();
      var p = (vh * 0.9 - r.top) / (r.height + vh * 0.35);
      el.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
    });
  }
  function mk(tag, cls) { var n = doc.createElement(tag); if (cls) n.className = cls; return n; }

  /* Metni kelimelere (ya da harflere) böler; ekran okuyucu için asıl metin gizli bir kopya olarak kalır. */
  function splitText(el, chars) {
    if (el.children.length || !el.textContent.trim()) return null;
    var text = el.textContent.trim().replace(/\s+/g, ' ');
    var sr = mk('span', 'sr-only'); sr.textContent = text;
    var vis = mk('span'); vis.setAttribute('aria-hidden', 'true');
    var n = 0;
    text.split(' ').forEach(function (word, idx) {
      if (idx) vis.appendChild(doc.createTextNode(' '));
      var w = mk('span', 'w');
      if (chars) {
        Array.from(word).forEach(function (c) { var i = mk('span', 'wi'); i.style.setProperty('--i', n++); i.textContent = c; w.appendChild(i); });
      } else {
        var i = mk('span', 'wi'); i.style.setProperty('--i', n++); i.textContent = word; w.appendChild(i);
      }
      vis.appendChild(w);
    });
    el.textContent = '';
    el.appendChild(sr); el.appendChild(vis);
    return { text: text, count: n };
  }
  function scrubText(el) {
    if (el.children.length) return;
    var words = el.textContent.trim().split(/\s+/);
    el.textContent = '';
    words.forEach(function (word, i) {
      if (i) el.appendChild(doc.createTextNode(' '));
      var sw = mk('span', 'sw'); sw.style.setProperty('--k', (i / words.length).toFixed(3)); sw.textContent = word; el.appendChild(sw);
    });
    el.setAttribute('data-scrub', '');
    scrubs.push(el);
  }
  function formatInt(n, sep) {
    var s = String(n);
    if (!sep) return s;
    return s.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
  }
  function countNum(el) {
    var m = el.textContent.match(/\d[\d.,   ]*\d|\d/);
    if (!m) return;
    var raw = m[0], target = parseInt(raw.replace(/\D/g, ''), 10);
    var sepM = raw.match(/[.,   ]/), sep = sepM ? sepM[0] : '';
    var pre = el.textContent.slice(0, m.index), post = el.textContent.slice(m.index + raw.length);
    if (!isFinite(target) || target < 2) return;
    var t0 = null, dur = 1700;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = pre + formatInt(Math.round(target * e), sep) + post;
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = pre + formatInt(0, sep) + post;
    requestAnimationFrame(step);
  }

  function initMotion() {
    scrubs = [];
    if (reduce || !('IntersectionObserver' in window)) return;
    var marked = [];
    function mark(el, kind, delay) {
      if (!el || el.hasAttribute('data-rv')) return;
      /* Öğenin kendi eğimi/dönüşü varsa (ör. optik form) animasyon o konuma oturur, sonda sıçramaz */
      var rest = window.getComputedStyle(el).transform;
      if (rest && rest !== 'none') el.style.setProperty('--rest', rest);
      el.setAttribute('data-rv', kind);
      if (delay != null) { el.style.setProperty('--d', delay + 'ms'); el.setAttribute('data-fixed', ''); }
      marked.push(el);
    }
    var all = function (sel, fn) { Array.prototype.forEach.call(doc.querySelectorAll(sel), fn); };
    try {
      /* Açılış koreografisi: ana sayfa hero'su */
      var hero = doc.querySelector('.hero');
      if (hero) {
        mark(hero.querySelector('.hero__badge'), 'fade', 0);
        mark(hero.querySelector('.wm__lgs') || hero.querySelector('.hero__title'), 'chars', 140);
        mark(hero.querySelector('.wm__ark'), 'wipe', 520);
        mark(hero.querySelector('.hero__tagline'), 'wipe', 760);
        mark(hero.querySelector('.hero__lead'), 'fade', 900);
        all('.hero .mission li', function (li, i) { mark(li, 'slide', 1000 + i * 90); });
        mark(hero.querySelector('.hero__cta'), 'up', 1380);
        mark(hero.querySelector('.hero__grid > :last-child'), 'up', 420);
      }
      /* Açılış: iç sayfa başlıkları */
      mark(doc.querySelector('.page-hero__title'), 'split', 80);
      mark(doc.querySelector('.page-hero__lead'), 'fade', 460);

      /* Başlıklar: kelime kelime maskeden yükselir */
      all('.display, .finish__title, .mvcard__h, .values__h, .compare__title', function (el) { mark(el, 'split'); });
      /* Paragraflar: odaklanarak belirir */
      all('.lead, .who__note, .schools__cols > div, .compare__note, .story__text p, .impact__perfect, .section__more, .books__label, .books__amount, .handle, .social__btns, .cta__in > .btn, .form, .contact__info, .contact__grid > *', function (el) { mark(el, 'fade'); });
      /* Kartlar ve listeler: sırayla girer */
      all('.what-grid > li, .values > li, .who__list > li, .school-list > li, .sponsor-grid > *, .faq__item, .diff-list > li, .duty-list > li, .lesson-list > li, .tl__item, .cycle-road > li, .mvcard, .stop, .lane__half, .finish, .igcard, .bar, .books__card', function (el) { mark(el, 'up'); });
      /* Misyon / vizyon: kaydırdıkça kelime kelime aydınlanır */
      all('.mvcard p', scrubText);
      scrubUpdate();
      if (!scrubBound) { scrubBound = true; window.addEventListener('scroll', function () { if (scrubs.length) requestAnimationFrame(scrubUpdate); }, { passive: true }); window.addEventListener('resize', scrubUpdate); }

      /* Bölme işlemleri */
      var splits = new Map();
      marked.forEach(function (el) {
        var kind = el.getAttribute('data-rv');
        if (kind === 'split' || kind === 'chars') {
          var info = splitText(el, kind === 'chars');
          if (info) splits.set(el, info); else el.setAttribute('data-rv', 'fade');
        }
      });
      all('.books__amount, .books__card-amount', function (el) { el.setAttribute('data-num', ''); });
      if (doc.querySelector('.books__card-amount') && !doc.querySelector('.books__card-amount').hasAttribute('data-rv')) mark(doc.querySelector('.books__card-amount'), 'fade');

      var pending = new Set(marked);
      function reveal(el, delay, instant) {
        if (!pending.has(el)) return;
        pending.delete(el);
        var kind = el.getAttribute('data-rv'), info = splits.get(el);
        el.style.setProperty('--d', (instant ? 0 : delay) + 'ms');
        if (instant) el.setAttribute('data-instant', '');
        el.classList.add('is-in');
        if (el.hasAttribute('data-num')) setTimeout(function () { countNum(el); }, (instant ? 0 : delay) + 250);
        var total = instant ? 60 : delay + 1500 + (info ? info.count * 60 : 0);
        setTimeout(function () {
          el.removeAttribute('data-rv'); el.removeAttribute('data-fixed'); el.removeAttribute('data-instant');
          el.style.removeProperty('--d'); el.style.removeProperty('--rest');
          if (info && kind === 'split' && el.querySelector('.sr-only')) el.textContent = info.text; /* temiz metne dön */
        }, total);
      }
      var io = new IntersectionObserver(function (entries) {
        var now = entries.filter(function (e) { return e.isIntersecting; }).sort(function (a, b) { return a.target.compareDocumentPosition(b.target) & 2 ? 1 : -1; });
        now.forEach(function (en, k) {
          var el = en.target;
          io.unobserve(el);
          reveal(el, el.hasAttribute('data-fixed') ? (parseInt(el.style.getPropertyValue('--d'), 10) || 0) : Math.min(k, 7) * 85, false);
        });
      }, { threshold: 0, rootMargin: '0px 0px -7% 0px' });
      marked.forEach(function (el) { io.observe(el); });
      /* Güvenlik ağı: çok hızlı kaydırmada (End tuşu, bağlantı atlaması) gözlemcinin atladığı ve artık ekranın üstünde kalmış öğeler animasyonsuz, hemen görünür olur */
      var sweeping = false;
      function sweep() {
        sweeping = false;
        pending.forEach(function (el) { if (el.getBoundingClientRect().bottom < -40) { io.unobserve(el); reveal(el, 0, true); } });
      }
      window.addEventListener('scroll', function () { if (pending.size && !sweeping) { sweeping = true; requestAnimationFrame(sweep); } }, { passive: true });
    } catch (e) {
      /* Bir şey ters giderse içerik görünür kalsın */
      marked.forEach(function (el) { el.removeAttribute('data-rv'); });
    }
  }

  initPage();
  initMotion();
  window.LGS = { initPage: function () { initPage(); initMotion(); }, onScroll: onScroll, closeMenus: function () { setNav(false); setLang(false); } };
})();
