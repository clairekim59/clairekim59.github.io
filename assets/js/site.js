/*
 * Site behaviour: theme toggle, scroll reveal, sticky-nav anchor offset,
 * active-section nav, project card toggles, copy-email.
 *
 * This lives in its own file on purpose. _config.yml enables compress_html in
 * production, which strips newlines from rendered pages - an inline script
 * would collapse onto one line and its first // comment would swallow the
 * rest of the script. Static assets are not compressed.
 */
(function() {
  // ---------- Theme toggle ----------
  function initThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function render() {
      var cur = document.documentElement.getAttribute('data-theme') || 'light';
      btn.innerHTML = cur === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-label', 'Switch to ' + (cur === 'dark' ? 'light' : 'dark') + ' mode');
    }

    render();
    btn.addEventListener('click', function() {
      var cur = document.documentElement.getAttribute('data-theme') || 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      render();
    });
  }

  // ---------- Scroll fade-in ----------
  function initFadeIn() {
    if (!('IntersectionObserver' in window)) return;

    var selector = '.page__content > h1, .page__content > h2, .page__content > h3, .page__content > p, .page__content > ul, .page__content > ol, .page__content > .skills, .page__content > .open-to, .page__content > .timeline, .page__content > a.btn, .page__content > div, .page__content > details';
    var targets = document.querySelectorAll(selector);

    Array.prototype.forEach.call(targets, function(el) {
      el.classList.add('fade-in-up');
    });

    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    Array.prototype.forEach.call(targets, function(el) { io.observe(el); });
  }

  // ---------- Sticky-nav anchor offset ----------
  function initAnchorOffset() {
    var masthead = document.querySelector('.masthead');
    if (!masthead) return;

    var GAP = 20; // breathing room between the nav and the section rule

    function navHeight() { return masthead.offsetHeight; }

    function setNavHeight() {
      document.documentElement.style.setProperty('--nav-h', navHeight() + 'px');
    }
    setNavHeight();
    window.addEventListener('resize', setNavHeight);

    // Section headings carry a large top margin and padding, and browsers align
    // scroll-margin against the margin box, so compute the landing spot from the
    // heading's border box instead: its accent rule sits just under the nav.
    // offsetTop ignores the fade-in transform, so the landing spot is the same
    // whether or not the section has animated in yet.
    function documentTop(el) {
      var top = 0;
      while (el) { top += el.offsetTop; el = el.offsetParent; }
      return top;
    }

    function scrollToTarget(target, smooth) {
      var top = (target.offsetParent ? documentTop(target)
                                     : target.getBoundingClientRect().top + window.pageYOffset)
                - navHeight() - GAP;
      if (top < 0) top = 0;
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: top, behavior: (smooth && !reduced) ? 'smooth' : 'auto' });
    }

    function targetFromHash(hash) {
      if (!hash || hash === '#') return null;
      try { return document.getElementById(decodeURIComponent(hash.slice(1))); }
      catch (err) { return null; }
    }

    // main.min.js binds jQuery smoothScroll with a fixed -20px offset that
    // ignores scroll-margin-top, so headings land behind the sticky nav — and it
    // re-binds itself after every scroll, so unbinding it once is not enough.
    // Handle same-page anchors here in the capture phase instead, before the
    // plugin's own click handler ever sees the event.
    document.addEventListener('click', function(e) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      var link = e.target.closest && e.target.closest('a[href]');
      if (!link || link.target === '_blank') return;

      var url;
      try { url = new URL(link.href, window.location.href); } catch (err) { return; }
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;

      var target = targetFromHash(url.hash);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();
      setNavHeight();
      scrollToTarget(target, true);
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', url.hash);
      }
    }, true);

    // Back/forward between hashes, and pages loaded straight to a #hash (the
    // browser jumps there before the nav height is known).
    window.addEventListener('hashchange', function() {
      var target = targetFromHash(window.location.hash);
      if (target) scrollToTarget(target, false);
    });

    var initial = targetFromHash(window.location.hash);
    if (initial) {
      window.setTimeout(function() { scrollToTarget(initial, false); }, 0);
      window.addEventListener('load', function() { scrollToTarget(initial, false); });
    }
  }

  // ---------- Active section in the nav + scroll progress ----------
  function initNavSpy() {
    var masthead = document.querySelector('.masthead');
    if (!masthead) return;

    // Only links that point at a section of *this* page can be "current" — the
    // CV page has its own #experience heading, and highlighting a link that
    // navigates away would be a lie.
    var links = [];
    var samePageLinks = [];
    Array.prototype.forEach.call(document.querySelectorAll('.greedy-nav a[href]'), function(a) {
      var url;
      try { url = new URL(a.href, window.location.href); } catch (err) { return; }
      if (url.origin !== window.location.origin) return;

      if (url.pathname !== window.location.pathname) return;
      samePageLinks.push(a);

      if (!url.hash) return;
      var section = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (section) links.push({ link: a, section: section });
    });

    // A page with no in-page sections (the CV) just marks its own tab.
    if (!links.length) {
      samePageLinks.forEach(function(a) { a.classList.add('nav-current'); });
    }

    var bar = document.createElement('div');
    bar.className = 'scroll-progress';
    var fill = document.createElement('span');
    bar.appendChild(fill);
    masthead.appendChild(bar);

    var queued = false;

    function update() {
      queued = false;

      if (fill) {
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var pct = scrollable > 0 ? (window.pageYOffset / scrollable) * 100 : 0;
        fill.style.width = Math.max(0, Math.min(100, pct)) + '%';
      }

      if (!links.length) return;

      // The section whose heading most recently passed under the nav wins; at
      // the very bottom of the page the last section always wins.
      var line = masthead.offsetHeight + 24;
      var atBottom = window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight - 2;
      var currentId = links[0].section.id;

      for (var i = 0; i < links.length; i++) {
        if (links[i].section.getBoundingClientRect().top <= line) currentId = links[i].section.id;
      }
      if (atBottom) currentId = links[links.length - 1].section.id;

      links.forEach(function(entry) {
        entry.link.classList.toggle('nav-current', entry.section.id === currentId);
      });
    }

    function request() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    document.addEventListener('toggle', request, true);
    update();
  }

  // ---------- Expand / collapse all project cards ----------
  function initProjectToggles() {
    Array.prototype.forEach.call(document.querySelectorAll('.proj-toggle'), function(btn) {
      var cards = [];
      var node = btn.parentNode ? btn.parentNode.nextElementSibling : null;
      while (node && node.tagName !== 'H2' && node.tagName !== 'H1') {
        if (node.tagName === 'DETAILS') cards.push(node);
        node = node.nextElementSibling;
      }
      if (!cards.length) { btn.style.display = 'none'; return; }

      function allOpen() {
        return cards.every(function(c) { return c.open; });
      }

      function render() {
        var open = allOpen();
        btn.textContent = open ? 'Collapse all' : 'Expand all';
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      btn.addEventListener('click', function() {
        var open = allOpen();
        cards.forEach(function(c) { c.open = !open; });
        render();
      });

      cards.forEach(function(c) { c.addEventListener('toggle', render); });
      render();
    });
  }

  // ---------- Copy email address ----------
  function initCopyEmail() {
    var link = document.querySelector('.author__urls a[href^="mailto:"]');
    if (!link || !navigator.clipboard) return;

    var address = link.getAttribute('href').replace(/^mailto:/, '').split('?')[0];
    if (!address) return;

    // Deliberately not a <button>: main.min.js binds the author-links dropdown
    // to every button inside .author__urls-wrapper, so a real button here would
    // also toggle that panel.
    var btn = document.createElement('span');
    btn.className = 'copy-email';
    btn.textContent = 'copy';
    btn.title = 'Copy ' + address;
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', 'Copy email address');

    function flash(label, ok) {
      btn.textContent = label;
      btn.classList.toggle('is-copied', !!ok);
      window.setTimeout(function() {
        btn.textContent = 'copy';
        btn.classList.remove('is-copied');
      }, 1800);
    }

    function legacyCopy() {
      var field = document.createElement('textarea');
      field.value = address;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      document.body.removeChild(field);
      return ok;
    }

    function copy(e) {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(address).then(function() {
        flash('copied \u2713', true);
      }).catch(function() {
        var ok = legacyCopy();
        flash(ok ? 'copied \u2713' : 'copy failed', ok);
      });
    }

    btn.addEventListener('click', copy);
    btn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') copy(e);
    });

    link.parentNode.classList.add('has-copy');
    link.parentNode.appendChild(btn);
  }

  // ---------- Tab title animation ----------
  function initTitleSwap() {
    var originalTitle = document.title;
    var awayTitle = '👋 Come back!';
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        document.title = awayTitle;
      } else {
        document.title = originalTitle;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initThemeToggle();
      initFadeIn();
      initAnchorOffset();
      initNavSpy();
      initProjectToggles();
      initCopyEmail();
      initTitleSwap();
    });
  } else {
    initThemeToggle();
    initFadeIn();
    initAnchorOffset();
    initNavSpy();
    initProjectToggles();
    initCopyEmail();
    initTitleSwap();
  }
})();
