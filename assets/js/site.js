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
      /* 100vw includes the scrollbar; full-bleed elements subtract this. */
      var sbw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--sbw', (sbw > 0 ? sbw : 0) + 'px');
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

    // Same-page anchors are handled here so the landing spot clears the sticky
    // masthead. (This originally also had to out-run jQuery smoothScroll from
    // main.min.js, which forced a -20px offset; that bundle is no longer loaded.)
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

  // ---------- Responsive nav (replaces greedy-nav from main.min.js) ----------
  // Keeps the same DOM contract the theme's CSS expects: links live in
  // .visible-links, overflow moves to .hidden-links, and .hidden / .close
  // drive the toggle button.
  function initGreedyNav() {
    var nav = document.querySelector('.greedy-nav');
    if (!nav) return;

    var visible = nav.querySelector('.visible-links');
    var hidden = nav.querySelector('.hidden-links');
    var toggle = nav.querySelector('button');
    if (!visible || !hidden || !toggle) return;

    /* Remember the original order so items can move back on resize. */
    var items = Array.prototype.slice.call(visible.children);
    var brand = items.length ? items[0] : null;

    function close() {
      hidden.classList.add('hidden');
      toggle.classList.remove('close');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function available() {
      /* Width the links may occupy: the nav minus the toggle and the
         theme-toggle group parked at the right edge. */
      var actions = document.querySelector('.masthead__actions');
      var reserved = (actions ? actions.offsetWidth + 24 : 0);
      if (!hidden.classList.contains('hidden') || hasOverflow()) reserved += toggle.offsetWidth;
      return nav.clientWidth - reserved;
    }

    function hasOverflow() {
      return hidden.children.length > 0;
    }

    function widthOf(list) {
      var total = 0;
      Array.prototype.forEach.call(list.children, function(li) { total += li.offsetWidth; });
      return total;
    }

    function layout() {
      /* Start from everything visible, then push the tail out until it fits. */
      while (hidden.children.length) {
        visible.appendChild(hidden.firstElementChild);
      }
      hidden.classList.add('hidden');

      var limit = available();
      var guard = 0;
      while (widthOf(visible) > limit && visible.children.length > 1 && guard < 50) {
        var last = visible.lastElementChild;
        if (last === brand) break;
        hidden.insertBefore(last, hidden.firstChild);
        limit = available();
        guard++;
      }

      toggle.classList.toggle('hidden', !hasOverflow());
      if (!hasOverflow()) close();
    }

    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Toggle menu');
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var open = hidden.classList.contains('hidden');
      hidden.classList.toggle('hidden', !open);
      toggle.classList.toggle('close', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    hidden.addEventListener('click', function(e) {
      if (e.target.closest('a')) close();
    });

    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target)) close();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });

    var queued = false;
    window.addEventListener('resize', function() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function() { queued = false; layout(); });
    });

    layout();
    /* Webfonts change the measurements, so lay out again once they land. */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
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

  // ---------- Click the email address to copy it ----------
  function initCopyEmail() {
    var link = document.querySelector('.contact a[href^="mailto:"]');
    if (!link) return;

    var label = link.querySelector('.contact__label') || link;
    var address = link.getAttribute('href').replace(/^mailto:/, '').split('?')[0];
    if (!address) return;

    // "Copied" is shorter than the address, so swapping the text would shrink
    // the pill mid-click. Reserve the address's own width up front and centre
    // whatever sits in it, so the chip is the same size copied or not. Measured
    // after webfonts settle - Karla is wider than the fallback, and locking a
    // fallback-sized box would clip the address once the real face loads.
    function lockWidth() {
      // Only ever measure the address itself - re-measuring while the flash
      // message is showing would lock in the shorter string's width.
      if (label.textContent !== address) return;
      label.style.minWidth = '';
      var w = label.getBoundingClientRect().width;
      if (!w) return;
      label.style.display = 'inline-block';
      label.style.textAlign = 'center';
      label.style.minWidth = w + 'px';
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(lockWidth).catch(lockWidth);
    } else {
      lockWidth();
    }
    window.addEventListener('resize', lockWidth);

    function restore() {
      label.textContent = address;
      link.classList.remove('is-copied');
    }

    function flash(text, ok) {
      label.textContent = text;
      link.classList.toggle('is-copied', !!ok);
      window.setTimeout(restore, 1600);
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

    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (!navigator.clipboard) {
        var done = legacyCopy();
        flash(done ? 'Copied \u2713' : address, done);
        return;
      }
      navigator.clipboard.writeText(address).then(function() {
        flash('Copied \u2713', true);
      }).catch(function() {
        var done = legacyCopy();
        flash(done ? 'Copied \u2713' : address, done);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initGreedyNav();
      initThemeToggle();
      initFadeIn();
      initAnchorOffset();
      initNavSpy();
      initProjectToggles();
      initCopyEmail();
    });
  } else {
    initGreedyNav();
    initThemeToggle();
    initFadeIn();
    initAnchorOffset();
    initNavSpy();
    initProjectToggles();
    initCopyEmail();
  }
})();
