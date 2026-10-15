/* Design Gallery: project grid with filters + popup, and the design-site list */
(function () {
  var t = URS.t, esc = URS.esc;
  var PROJECTS = window.URS_PROJECTS || [], SITES = window.URS_SITES || [];
  var state = { region: "", q: "" };
  var $ = function (id) { return document.getElementById(id); };

  $("n-projects").textContent = " " + PROJECTS.length;
  $("n-sites").textContent = " " + SITES.length;

  /* ---------- Region chips (built from the data) ---------- */
  var regions = [];
  PROJECTS.forEach(function (p) { if (p.region && regions.indexOf(p.region) < 0) regions.push(p.region); });

  function renderChips() {
    var all = [{ v: "", label: t("gallery.all") + " " + PROJECTS.length }].concat(regions.map(function (r) {
      return { v: r, label: URS.regionLabel(r) + " " + PROJECTS.filter(function (p) { return p.region === r; }).length };
    }));
    $("region-chips").innerHTML = all.map(function (c) {
      return '<button type="button" class="chip" data-region="' + esc(c.v) + '" aria-pressed="' + (state.region === c.v) + '">' + esc(c.label) + "</button>";
    }).join("");
  }

  /* ---------- Project grid ---------- */
  function filtered() {
    var q = state.q.trim().toLowerCase();
    return PROJECTS.filter(function (p) {
      if (state.region && p.region !== state.region) return false;
      if (q && [p.name, p.location, p.name_en, p.location_en].join(" ").toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
  }
  function renderGrid() {
    var list = filtered();
    $("count").textContent = t("gallery.showing", { n: list.length, t: PROJECTS.length });
    $("project-grid").innerHTML = list.length ? list.map(function (p) {
      return '<button type="button" class="pcard" data-id="' + esc(p.id) + '">' +
        '<div class="media">' + (p.region ? '<span class="region">' + esc(URS.regionLabel(p.region)) + "</span>" : "") + '<img src="' + esc(p.image) + '" alt="" loading="lazy"></div>' +
        '<div class="body"><h3>' + esc(URS.loc(p, "name")) + '</h3><p class="loc">' + esc(URS.loc(p, "location")) + "</p></div></button>";
    }).join("") :
      '<div class="empty" style="grid-column:1/-1"><h3>' + esc(t("gallery.noResults")) + '</h3><button type="button" class="btn ghost sm" data-clear>' + esc(t("gallery.clear")) + "</button></div>";
  }

  /* ---------- Design sites ---------- */
  function renderSites() {
    $("site-list").innerHTML = SITES.map(function (s) {
      var reused = s.status === "reused";
      return '<a class="srow" href="site.html#' + encodeURIComponent(s.id) + '">' +
        '<div class="media"><span class="tag"><span class="pin"></span>' + esc(URS.regionLabel(s.region)) + '</span><img src="' + esc(s.image) + '" alt="" loading="lazy"></div>' +
        '<div class="body">' +
          '<div class="tags"><span class="badge ' + (reused ? "reused" : "open") + '">' + esc(t(reused ? "site.reused" : "site.open")) + "</span>" +
          '<span class="badge closed">' + esc(URS.closedLabel(s)) + "</span></div>" +
          "<h3>" + esc(URS.loc(s, "name")) + '</h3><p class="loc">' + esc(URS.loc(s, "location")) + "</p>" +
          '<p class="years">' + esc(URS.loc(s, "years")) + '</p><p class="sum">' + esc(URS.plain(URS.loc(s, "summary"))) + "</p>" +
          '<span class="go">' + esc(t("gallery.viewSite")) + URS.icon.arrow + "</span>" +
        "</div></a>";
    }).join("");
  }

  /* ---------- Project popup ---------- */
  var modal = $("project-modal"), lastFocus = null, openId = null;
  function paintModal() {
    var p = PROJECTS.find(function (x) { return x.id === openId; });
    if (!p) return;
    var body = (URS.loc(p, "history") ? "<h3>" + esc(t("gallery.history")) + "</h3><p>" + esc(URS.loc(p, "history")) + "</p>" : "") +
      (URS.loc(p, "plan") ? "<h3>" + esc(t("gallery.plan")) + "</h3><p>" + esc(URS.loc(p, "plan")) + "</p>" : "");
    if (!body) body = '<div class="modal-empty">' + esc(t("gallery.pending")) + "</div>";
    $("pm-content").innerHTML = '<div class="media"><img src="' + esc(p.image) + '" alt=""></div>' +
      '<div class="body"><h2 id="pm-title">' + esc(URS.loc(p, "name")) + '</h2><p class="loc">' + esc(URS.loc(p, "location")) + "</p>" + body + "</div>";
  }
  function openModal(id, from) {
    if (!PROJECTS.some(function (x) { return x.id === id; })) return;
    openId = id; lastFocus = from || document.activeElement;
    paintModal();
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-card").scrollTop = 0;
    setTimeout(function () { $("pm-close").focus({ preventScroll: true }); }, 30);
    if (location.hash !== "#" + id) { try { history.replaceState(null, "", "#" + id); } catch (e) {} }
  }
  function closeModal() {
    if (!openId) return;
    openId = null;
    modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  /* ---------- Events ---------- */
  $("region-chips").addEventListener("click", function (e) {
    var b = e.target.closest("[data-region]"); if (!b) return;
    state.region = b.getAttribute("data-region"); renderChips(); renderGrid();
  });
  $("q").addEventListener("input", function (e) { state.q = e.target.value; renderGrid(); });
  $("project-grid").addEventListener("click", function (e) {
    var c = e.target.closest("[data-id]"); if (c) return openModal(c.getAttribute("data-id"), c);
    if (e.target.closest("[data-clear]")) { state = { region: "", q: "" }; $("q").value = ""; renderChips(); renderGrid(); }
  });
  $("pm-close").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (!openId) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") { e.preventDefault(); $("pm-close").focus(); }
  });
  document.addEventListener("urs:lang", function () { renderChips(); renderGrid(); renderSites(); if (openId) paintModal(); });

  renderChips(); renderGrid(); renderSites();

  // Open a project directly from a link like gallery.html#yongsan-core
  var hash = decodeURIComponent(location.hash.slice(1));
  if (hash && hash !== "sites" && hash !== "projects") openModal(hash);
  window.addEventListener("hashchange", function () {
    var h = decodeURIComponent(location.hash.slice(1));
    if (h && h !== "sites" && h !== "projects" && h !== openId) openModal(h);
  });
})();
