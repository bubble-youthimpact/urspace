/* =====================================================================
   URSPACE — shared layout
   Builds the header, mobile menu and footer on every page, and handles
   English/Korean switching. Pages mark their slot with
   <div id="site-header"></div> and <div id="site-footer"></div>.
   ===================================================================== */
(function () {
  var CFG = window.URS_CONFIG || {};
  var DICT = window.URS_I18N || { en: {}, ko: {} };

  /* ---------- Language ---------- */
  var lang = CFG.defaultLang || "en";
  try { lang = localStorage.getItem("urs-lang") || lang; } catch (e) {}
  if (!DICT[lang]) lang = "en";

  function t(key, vars) {
    var s = (DICT[lang] && DICT[lang][key]);
    if (s == null) s = DICT.en[key];
    if (s == null) s = key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ""; });
    return s;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function applyText(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    // Only for trusted text from i18n.js that contains links
    root.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    root.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    root.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
  }
  function setLang(next) {
    lang = next;
    try { localStorage.setItem("urs-lang", next); } catch (e) {}
    document.documentElement.lang = next;
    applyText();
    renderAuthSlots();
    var titleKey = document.body.getAttribute("data-title");
    if (titleKey) document.title = t(titleKey) + " · URSPACE";
    document.dispatchEvent(new CustomEvent("urs:lang", { detail: next }));
  }

  /* ---------- Icons ---------- */
  var ICON = {
    globe: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>',
    arrow: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    insta: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    close: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'
  };

  var NAV = [
    { href: "about.html", key: "nav.about", page: "about" },
    { href: "programs.html", key: "nav.programs", page: "programs" },
    { href: "gallery.html", key: "nav.gallery", page: "gallery" },
    { href: "case-studies.html", key: "nav.cases", page: "cases" },
    { href: "apply.html", key: "nav.apply", page: "apply" }
  ];

  function navLinks(withArrow) {
    var current = document.body.getAttribute("data-page");
    return NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.page === current ? ' aria-current="page"' : "") + '><span data-i18n="' + n.key + '"></span>' +
        (withArrow ? ICON.arrow : "") + "</a>";
    }).join("");
  }

  /* ---------- Header ---------- */
  function buildHeader() {
    var slot = document.getElementById("site-header");
    if (!slot) return;
    slot.outerHTML =
      '<a class="skip" href="#main" data-i18n="nav.skip"></a>' +
      '<header class="site-header"><div class="wrap bar">' +
        '<a class="logo" href="index.html" aria-label="URSPACE home">URSPACE</a>' +
        '<nav class="main-nav" aria-label="Main">' + navLinks(false) + "</nav>" +
        '<div class="header-actions">' +
          '<button type="button" class="lang-btn" data-lang-toggle data-i18n-aria="lang.label">' + ICON.globe + '<span data-i18n="lang.switch"></span></button>' +
          '<span class="desk" data-auth-slot="desk"></span>' +
          '<button type="button" class="menu-btn" aria-expanded="false" aria-controls="mobile-menu" data-i18n-aria="nav.menu"><span class="bars"><span></span><span></span><span></span></span></button>' +
        "</div>" +
      "</div></header>" +
      '<div class="mobile-menu" id="mobile-menu" aria-hidden="true">' +
        '<nav aria-label="Mobile">' + navLinks(true) + "</nav>" +
        '<div class="mm-actions" data-auth-slot="mobile"></div>' +
      "</div>";
  }

  function renderAuthSlots() {
    var api = window.URS_API, user = api && api.currentUser();
    document.querySelectorAll("[data-auth-slot]").forEach(function (slot) {
      var mobile = slot.getAttribute("data-auth-slot") === "mobile";
      if (user) {
        var initial = esc((user.name || user.email).trim().charAt(0).toUpperCase());
        var first = esc((user.name || user.email).trim().split(/\s+/)[0]);
        var onProfile = document.body.getAttribute("data-page") === "profile";
        slot.innerHTML = mobile
          ? '<div class="signin-note">' + esc(user.name) + " · " + esc(user.email) + '</div>' +
            '<a class="btn" href="profile.html">' + esc(t("nav.profile")) + '</a>' +
            '<button type="button" class="btn ghost" data-logout>' + esc(t("nav.logout")) + "</button>"
          : '<a class="user-chip" href="profile.html"' + (onProfile ? ' aria-current="page"' : "") + ' title="' + esc(t("nav.profile")) + '"><span class="av">' + initial + "</span><span>" + first + "</span></a>";
      } else {
        slot.innerHTML = '<a class="btn' + (mobile ? "" : " sm") + '" href="login.html">' + esc(t("nav.login")) + "</a>";
      }
    });
  }

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    var btn = document.querySelector(".menu-btn"), menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;
    function set(open) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", t(open ? "nav.close" : "nav.menu"));
      menu.classList.toggle("open", open);
      menu.setAttribute("aria-hidden", open ? "false" : "true");
      document.body.classList.toggle("menu-open", open);
      if (open) { var first = menu.querySelector("a"); if (first) first.focus({ preventScroll: true }); }
    }
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function (e) { if (e.target.closest("a")) set(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) { set(false); btn.focus(); }
      if (e.key === "Tab" && menu.classList.contains("open")) {
        var items = [btn].concat(Array.prototype.slice.call(menu.querySelectorAll("a,button")));
        var i = items.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
        else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
      }
    });
    window.matchMedia("(min-width: 961px)").addEventListener("change", function (m) { if (m.matches) set(false); });
  }

  /* ---------- Footer ---------- */
  function buildFooter() {
    var slot = document.getElementById("site-footer");
    if (!slot) return;
    // Invitation band before the footer (pages can opt out with data-no-join on <body>)
    var join = document.body.hasAttribute("data-no-join") ? "" :
      '<section class="join"><div class="wrap"><div class="join-card">' +
        '<div><h2 data-i18n="join.title"></h2><p data-i18n="join.body"></p></div>' +
        '<div class="acts"><a class="btn light" href="apply.html#design" data-i18n="join.primary"></a>' +
        '<a class="btn outline-light" href="gallery.html#sites" data-i18n="join.secondary"></a></div>' +
      "</div></div></section>";
    var mail = esc(CFG.email || ""), ig = esc(CFG.instagram || "");
    slot.outerHTML = join +
      '<footer class="site-footer"><div class="wrap">' +
        '<div class="cols">' +
          '<div><div class="flogo">URSPACE</div><p class="copy" data-i18n="footer.tagline"></p></div>' +
          '<div><h4 data-i18n="footer.links"></h4><ul>' +
            NAV.map(function (n) { return '<li><a href="' + n.href + '" data-i18n="' + n.key + '"></a></li>'; }).join("") +
          "</ul></div>" +
          '<div class="soc"><h4 data-i18n="footer.social"></h4><ul>' +
            (mail ? '<li><a href="mailto:' + mail + '">' + ICON.mail + mail + "</a></li>" : "") +
            (ig ? '<li><a href="https://www.instagram.com/' + ig + '/" target="_blank" rel="noopener">' + ICON.insta + "@" + ig + "</a></li>" : "") +
          "</ul></div>" +
        "</div>" +
        '<div class="legal"><span data-i18n="footer.copy"></span>' +
          '<nav aria-label="Legal"><a href="privacy.html" data-i18n="footer.privacy"></a><a href="terms.html" data-i18n="footer.terms"></a></nav></div>' +
      "</div></footer>";
  }

  /* ---------- Boot ---------- */
  // Year a site closed, taken from the last 4-digit year in its "years" text
  function closedYear(site) {
    var ys = String((site && site.years) || "").match(/\d{4}/g);
    return ys ? +ys[ys.length - 1] : null;
  }
  function closedLabel(site) {
    var y = closedYear(site); if (!y) return "";
    return t("site.closedFor", { n: new Date().getFullYear() - y, y: y });
  }

  // Text from the data files: **bold** becomes bold, everything else is escaped
  function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); }
  function plain(s) { return String(s == null ? "" : s).replace(/\*\*/g, ""); }

  // Place data: use the English field (name_en, plan_en ...) in English when it exists
  function loc(o, field) {
    if (!o) return "";
    var en = o[field + "_en"];
    if (lang === "en" && en != null && en !== "" && !(Array.isArray(en) && !en.length)) return en;
    return o[field];
  }
  var REGION_EN = { "서울": "Seoul", "경기": "Gyeonggi", "인천": "Incheon", "부산": "Busan", "제주": "Jeju", "경남": "Gyeongnam", "강원": "Gangwon", "충북": "Chungbuk", "충남": "Chungnam", "경북": "Gyeongbuk", "전북": "Jeonbuk", "전남": "Jeonnam", "대전": "Daejeon", "대구": "Daegu", "광주": "Gwangju", "울산": "Ulsan", "세종": "Sejong" };
  function regionLabel(r) { return lang === "en" && REGION_EN[r] ? REGION_EN[r] : (r || ""); }

  window.URS = { t: t, esc: esc, rich: rich, plain: plain, loc: loc, regionLabel: regionLabel, lang: function () { return lang; }, applyText: applyText, icon: ICON, closedYear: closedYear, closedLabel: closedLabel };

  // Every new page starts at the very top, unless the link points to a
  // section on the page (like programs.html#education).
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  function toTop() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (id && document.getElementById(id)) return;
    window.scrollTo(0, 0);
    // Inside an embedded preview, also bring the top of the page into view
    if (window.top !== window.self) { try { document.documentElement.scrollIntoView({ block: "start" }); } catch (e) {} }
  }

  /* ---------- Clean addresses (/about instead of /about.html) ---------- */
  var cleanOn = CFG.cleanUrls && /^https?:$/.test(location.protocol) && window.top === window.self &&
    !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  function cleanHref(h) {
    var m = /^([\w\-]+)\.html((?:[?#].*)?)$/.exec(h || "");
    if (!m) return null;
    return (m[1] === "index" ? "./" : m[1]) + m[2];
  }
  function cleanLinks(root) {
    (root.querySelectorAll ? root : document).querySelectorAll("a[href]").forEach(function (a) {
      var c = cleanHref(a.getAttribute("href")); if (c) a.setAttribute("href", c);
    });
  }
  if (cleanOn) {
    var path = location.pathname;
    var clean = path.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (clean !== path) { try { history.replaceState(history.state, "", clean + location.search + location.hash); } catch (e) {} }
  }

  buildHeader();
  buildFooter();
  document.documentElement.lang = lang;
  applyText();
  renderAuthSlots();
  initMenu();
  toTop();
  if (cleanOn) {
    cleanLinks(document);
    // Links added later (cards, popups, footer) get the same treatment
    new MutationObserver(function (list) {
      list.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) { if (n.matches && n.matches("a[href]")) cleanLinks(n.parentNode); else cleanLinks(n); } }); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  window.addEventListener("pageshow", function (e) { if (e.persisted) toTop(); });
  var titleKey = document.body.getAttribute("data-title");
  if (titleKey) document.title = t(titleKey) + " · URSPACE";

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-lang-toggle]")) setLang(lang === "en" ? "ko" : "en");
    if (e.target.closest("[data-logout]")) {
      window.URS_API.signOut().then(function () {
        if (document.body.getAttribute("data-page") === "profile") location.href = "index.html";
      });
    }
  });
  document.addEventListener("urs:auth", renderAuthSlots);

  var header = document.querySelector(".site-header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Show the "preview mode" note on forms until a real backend is connected
  if (window.URS_API) {
    document.querySelectorAll("[data-demo-note]").forEach(function (el) {
      var isAuth = el.getAttribute("data-demo-note") === "auth";
      el.hidden = !(isAuth ? window.URS_API.authIsDemo() : window.URS_API.isDemo());
    });
  }
})();
