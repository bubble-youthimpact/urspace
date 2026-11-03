/* Case Studies page: timeline, filters, cards and the slide-in detail panel */
(function () {
  var t = URS.t, esc = URS.esc;
  var $ = function (id) { return document.getElementById(id); };
  var DATA = (window.URS_CASES || []).map(function (d) { return Object.assign({}, d); });

  var THEMES = [
    { en: "Waterfront", ko: "수변", re: /waterfront|land reclamation/i },
    { en: "Green & sustainable", ko: "녹지·지속가능", re: /green|eco|sustainab|environment/i },
    { en: "Transit & infrastructure", ko: "교통·인프라", re: /transit|transport|brt|rail|infrastructure/i },
    { en: "Mixed-use & business districts", ko: "복합·업무지구", re: /mixed|business|financial|innovation/i },
    { en: "New towns & capitals", ko: "신도시·행정수도", re: /new town|capital|smart city/i },
    { en: "Public housing", ko: "공공주택", re: /housing/i },
    { en: "Culture, sports & events", ko: "문화·스포츠·행사", re: /cultur|event|sports/i },
    { en: "Urban regeneration", ko: "도시재생", re: /regenerat|brownfield|redevelop/i }
  ];
  var REGIONS = [
    { en: "Asia", ko: "아시아", re: /korea|japan|china|singapore|malaysia|myanmar/i },
    { en: "Europe", ko: "유럽", re: /kingdom|germany|sweden|netherlands|spain|france|denmark/i },
    { en: "North America", ko: "북미", re: /usa|canada/i },
    { en: "Latin America", ko: "중남미", re: /brazil|mexico|colombia|chile/i },
    { en: "Middle East", ko: "중동", re: /arab emirates|saudi|qatar/i },
    { en: "Oceania", ko: "오세아니아", re: /australia|zealand/i }
  ];
  function L(o) { return o[URS.lang()] || o.en; }

  DATA.forEach(function (d, i) {
    d.id = i;
    var o = (d.outcome || "").toLowerCase();
    d.o = /mixed|ongoing|uncertain/.test(o) ? "mixed" : /fail/.test(o) ? "failure" : "success";
    d.initial = /initial/.test(o);
    var y = (d.timeline || "").match(/\d{4}/); d.year = y ? +y[0] : null;
    d.themes = THEMES.filter(function (th) { return th.re.test(d.type); }).map(function (th) { return th.en; });
    var r = REGIONS.filter(function (rg) { return rg.re.test(d.location); })[0]; d.region = r ? r.en : "Other";
    d.isKorea = /korea/i.test(d.location);
    d.tags = (d.type || "").split("/").map(function (s) { return s.trim(); }).filter(Boolean);
    d.hay = [d.name, d.location, d.type, d.agency, d.stakeholders, d.problem, d.goal, d.policy, d.funding].join(" ").toLowerCase();
  });
  function outcomeLabel(d) {
    if (URS.lang() === "en") return d.outcome ? d.outcome.replace("(Initial)", "(initially)") : "Success";
    return t("cs." + d.o) + (d.initial ? " (초기)" : "");
  }

  var short = { success: "s", mixed: "m", failure: "f" };
  var state = { q: "", o: "all", theme: "", region: "", sort: "year-asc" };
  var current = [], openId = null, tab = "overview";

  /* ---------- Selects ---------- */
  function fillSelects() {
    var th = $("cs-theme"), rg = $("cs-region");
    th.innerHTML = '<option value="">' + esc(t("cs.allTypes")) + "</option>" + THEMES.map(function (x) {
      var n = DATA.filter(function (d) { return d.themes.indexOf(x.en) > -1; }).length;
      return n ? '<option value="' + esc(x.en) + '">' + esc(L(x)) + " (" + n + ")</option>" : "";
    }).join("");
    var nK = DATA.filter(function (d) { return d.isKorea; }).length;
    rg.innerHTML = '<option value="">' + esc(t("cs.allRegions")) + "</option>" +
      (nK ? '<option value="__korea">' + esc(t("cs.korea")) + " (" + nK + ")</option>" : "") +
      REGIONS.concat([{ en: "Other", ko: "기타" }]).map(function (x) {
        var n = DATA.filter(function (d) { return d.region === x.en; }).length;
        return n ? '<option value="' + x.en + '">' + esc(L(x)) + " (" + n + ")</option>" : "";
      }).join("");
    th.value = state.theme; rg.value = state.region;
  }

  function filtered() {
    var q = state.q.trim().toLowerCase();
    var list = DATA.filter(function (d) {
      if (state.o !== "all" && d.o !== state.o) return false;
      if (state.theme && d.themes.indexOf(state.theme) < 0) return false;
      if (state.region === "__korea" ? !d.isKorea : (state.region && d.region !== state.region)) return false;
      if (q && d.hay.indexOf(q) < 0) return false;
      return true;
    });
    var s = state.sort;
    list.sort(function (a, b) {
      if (s === "name") return a.name.localeCompare(b.name);
      if (s === "report") return (b.report ? 1 : 0) - (a.report ? 1 : 0) || (a.year || 0) - (b.year || 0);
      return s === "year-desc" ? (b.year || 0) - (a.year || 0) : (a.year || 0) - (b.year || 0);
    });
    return list;
  }

  /* ---------- Cards ---------- */
  var check = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  function card(d) {
    return '<button type="button" class="cs-case o-' + short[d.o] + '" data-id="' + d.id + '">' +
      '<div class="cs-case-top"><span class="cs-badge b-' + short[d.o] + '">' + esc(outcomeLabel(d)) + '</span><span class="cs-year">' + (d.year ? esc(t("cs.began", { y: d.year })) : "") + "</span></div>" +
      "<h3>" + esc(d.name) + '</h3><div class="cs-loc">' + esc(d.location) + "</div>" +
      '<p class="cs-sum">' + esc(d.problem || d.goal) + "</p>" +
      '<div class="cs-tags">' + d.tags.slice(0, 3).map(function (x) { return '<span class="cs-tag">' + esc(x) + "</span>"; }).join("") + "</div>" +
      '<div class="cs-case-foot">' + (d.report ? '<span class="cs-has-report">' + check + esc(t("cs.hasReport")) + "</span>" : '<span class="cs-no-report">' + esc(t("cs.summary")) + "</span>") +
      '<span class="cs-open">' + esc(t("cs.read")) + "</span></div></button>";
  }
  function render() {
    current = filtered();
    $("cs-grid").innerHTML = current.length ? current.map(card).join("") :
      '<div class="cs-empty"><h3>' + esc(t("cs.empty")) + "</h3><p>" + esc(t("cs.emptyBody")) + '</p><button type="button" class="btn ghost sm" data-reset>' + esc(t("cs.clear")) + "</button></div>";
    var active = state.q || state.o !== "all" || state.theme || state.region;
    $("cs-count").textContent = t("cs.showing", { n: current.length, t: DATA.length });
    $("cs-reset").hidden = !active;
    var ids = {}; current.forEach(function (d) { ids[d.id] = 1; });
    document.querySelectorAll("#cs-tl .cs-dot").forEach(function (el) { el.classList.toggle("dim", !ids[el.dataset.id]); });
  }

  /* ---------- Timeline ---------- */
  function drawTimeline() {
    var tl = $("cs-tl"), tip = $("cs-tip");
    tl.querySelectorAll(".cs-dot,.cs-tl-axis,.cs-tick").forEach(function (e) { e.remove(); });
    var W = Math.max(tl.parentNode.clientWidth, 720), pad = 18;
    var yrs = DATA.filter(function (d) { return d.year; }).map(function (d) { return d.year; });
    if (!yrs.length) return;
    var min = Math.floor(Math.min.apply(null, yrs) / 10) * 10, max = Math.ceil((Math.max.apply(null, yrs) + 1) / 10) * 10;
    var x = function (y) { return pad + (y - min) / (max - min) * (W - pad * 2); };
    var rows = [], placed = [];
    DATA.filter(function (d) { return d.year; }).slice().sort(function (a, b) { return a.year - b.year; }).forEach(function (d) {
      var px = x(d.year), r = 0;
      while ((rows[r] || []).some(function (p) { return Math.abs(p - px) < 21; })) r++;
      (rows[r] = rows[r] || []).push(px); placed.push({ d: d, x: px, r: r });
    });
    var H = rows.length * 22 + 52;
    tl.style.height = H + "px";
    tl.insertAdjacentHTML("beforeend", '<div class="cs-tl-axis"></div>');
    for (var y = min; y <= max; y += 10) tl.insertAdjacentHTML("beforeend", '<span class="cs-tick" style="left:' + x(y) + 'px">' + y + "</span>");
    placed.forEach(function (p) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "cs-dot o-" + p.d.o; b.dataset.id = p.d.id;
      b.style.left = p.x + "px"; b.style.bottom = (34 + p.r * 22) + "px";
      b.setAttribute("aria-label", p.d.name + ", " + p.d.year + ", " + outcomeLabel(p.d));
      var show = function () {
        tip.innerHTML = esc(p.d.name) + "<small>" + esc(p.d.location) + ", " + p.d.year + "</small>";
        tip.style.left = Math.min(Math.max(p.x, 90), W - 90) + "px"; tip.style.top = (H - (34 + p.r * 22) - 56) + "px"; tip.classList.add("on");
      };
      var hide = function () { tip.classList.remove("on"); };
      b.addEventListener("mouseenter", show); b.addEventListener("focus", show);
      b.addEventListener("mouseleave", hide); b.addEventListener("blur", hide);
      b.addEventListener("click", function () { openCase(p.d.id, b); });
      tl.appendChild(b);
    });
    render();
  }

  /* ---------- Drawer ---------- */
  var lastFocus = null;
  function fact(label, val, wide) { return val ? '<div class="cs-fact' + (wide ? " wide" : "") + '"><dt>' + esc(label) + "</dt><dd>" + esc(val) + "</dd></div>" : ""; }
  function block(h, txt) { return txt ? '<div class="cs-block"><h4>' + esc(h) + "</h4><p>" + esc(txt) + "</p></div>" : ""; }

  function body(d) {
    if (tab === "overview") return '<dl class="cs-facts">' +
        fact(t("cs.fLocation"), d.location) + fact(t("cs.fTimeline"), d.timeline) +
        fact(t("cs.fAgency"), d.agency, true) + fact(t("cs.fStake"), d.stakeholders, true) +
        fact(t("cs.fFunding"), d.funding, true) + fact(t("cs.fPolicy"), d.policy, true) + "</dl>" +
      block(t("cs.problem"), d.problem) + block(t("cs.goal"), d.goal) + block(t("cs.process"), d.process);
    if (tab === "outcomes") return '<div class="cs-versus">' +
        '<div class="cs-vbox cs-v-pos"><h4>' + esc(t("cs.good")) + "</h4><p>" + esc(d.positive || t("cs.notRecorded")) + "</p></div>" +
        '<div class="cs-vbox cs-v-neg"><h4>' + esc(t("cs.bad")) + "</h4><p>" + esc(d.negative || t("cs.notRecorded")) + "</p></div></div>" +
      block(t("cs.community"), d.community) + block(t("cs.mistakes"), d.mistakes);
    if (tab === "lessons") return (d.recommendation ? '<div class="cs-callout"><h4>' + esc(t("cs.reco")) + "</h4><p>" + esc(d.recommendation) + "</p></div>" : "") +
      block(t("cs.lessons"), d.lessons) +
      (d.korea ? '<div class="cs-korea"><h4>' + esc(t("cs.koreaMeans")) + "</h4><p>" + esc(d.korea) + "</p></div>" : "");
    if (!d.report) return '<div class="cs-noreport"><h4>' + esc(t("cs.noReport")) + "</h4><p>" + esc(t("cs.noReportBody")) +
      '</p><button type="button" class="btn ghost" data-tab="lessons">' + esc(t("cs.readLessons")) + "</button></div>";
    // Report: a short first line with no full stop becomes a heading.
    // "Sources" becomes a numbered list with clickable links;
    // "Overall Assessment" and "Evidence Limitations" get their own styling.
    function linkify(text) {
      return esc(text).replace(/https?:\/\/[^\s<]+[^\s<.,;)]/g, function (u) {
        return '<a href="' + u + '" target="_blank" rel="noopener">' + u + "</a>";
      });
    }
    return '<div class="cs-report">' + d.report.split(/\n\s*\n/).map(function (blk) {
      var lines = blk.trim().split("\n"), head = "";
      if (lines.length > 1 && lines[0].length < 90 && !/[.!?]$/.test(lines[0])) head = lines.shift().trim();
      lines = lines.filter(Boolean);
      var h = head ? "<h3>" + esc(head) + "</h3>" : "";
      if (/^sources$/i.test(head))
        return '<section class="cs-sources">' + h + "<ol>" + lines.map(function (l) { return "<li>" + linkify(l) + "</li>"; }).join("") + "</ol></section>";
      if (/^overall assessment$/i.test(head))
        return '<div class="cs-callout cs-overall">' + "<h4>" + esc(head) + "</h4>" + lines.map(function (l) { return "<p>" + linkify(l) + "</p>"; }).join("") + "</div>";
      if (/^evidence limitations$/i.test(head))
        return '<div class="cs-limits">' + "<h4>" + esc(head) + "</h4>" + lines.map(function (l) { return "<p>" + linkify(l) + "</p>"; }).join("") + "</div>";
      return h + lines.map(function (l) { return "<p>" + linkify(l) + "</p>"; }).join("");
    }).join("") + "</div>";
  }

  function paint() {
    var d = DATA[openId];
    $("cs-dbadge").innerHTML = '<span class="cs-badge b-' + short[d.o] + '">' + esc(outcomeLabel(d)) + "</span>";
    $("cs-dtitle").textContent = d.name;
    $("cs-dsub").textContent = d.location + (d.timeline ? "  |  " + d.timeline : "");
    document.querySelectorAll("#cs-tabs button").forEach(function (b) {
      b.setAttribute("aria-selected", b.dataset.t === tab ? "true" : "false");
      if (b.dataset.t === "report") b.textContent = t(d.report ? "cs.tabReport" : "cs.tabReportSoon");
    });
    $("cs-dbody").innerHTML = body(d);
    $("cs-dbody").scrollTop = 0;
    var idx = current.findIndex(function (x) { return x.id === openId; });
    $("cs-prev").disabled = idx <= 0; $("cs-next").disabled = idx < 0 || idx >= current.length - 1;
  }
  function openCase(id, from) {
    lastFocus = from || document.activeElement; openId = +id; tab = "overview"; paint();
    $("cs-drawer").classList.add("on"); $("cs-scrim").classList.add("on");
    $("cs-drawer").setAttribute("aria-hidden", "false");
    document.body.classList.add("drawer-open");
    setTimeout(function () { $("cs-close").focus({ preventScroll: true }); }, 50);
  }
  function closeCase() {
    $("cs-drawer").classList.remove("on"); $("cs-scrim").classList.remove("on");
    $("cs-drawer").setAttribute("aria-hidden", "true");
    document.body.classList.remove("drawer-open");
    openId = null; if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  function step(n) {
    var idx = current.findIndex(function (x) { return x.id === openId; });
    var nx = current[idx + n]; if (nx) { openId = nx.id; paint(); }
  }

  /* ---------- Events ---------- */
  function reset() {
    state = { q: "", o: "all", theme: "", region: "", sort: state.sort };
    $("cs-q").value = ""; $("cs-theme").value = ""; $("cs-region").value = "";
    Array.prototype.forEach.call($("cs-seg").children, function (x) { x.setAttribute("aria-pressed", x.dataset.o === "all" ? "true" : "false"); });
    render();
  }
  $("cs-grid").addEventListener("click", function (e) {
    var c = e.target.closest(".cs-case"); if (c) return openCase(c.dataset.id, c);
    if (e.target.closest("[data-reset]")) reset();
  });
  $("cs-q").addEventListener("input", function (e) { state.q = e.target.value; render(); });
  $("cs-seg").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    state.o = b.dataset.o;
    Array.prototype.forEach.call(this.children, function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
    render();
  });
  $("cs-theme").addEventListener("change", function (e) { state.theme = e.target.value; render(); });
  $("cs-region").addEventListener("change", function (e) { state.region = e.target.value; render(); });
  $("cs-sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
  $("cs-reset").addEventListener("click", reset);
  $("cs-tabs").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) { tab = b.dataset.t; paint(); } });
  $("cs-dbody").addEventListener("click", function (e) { var b = e.target.closest("[data-tab]"); if (b) { tab = b.dataset.tab; paint(); } });
  $("cs-close").addEventListener("click", closeCase);
  $("cs-scrim").addEventListener("click", closeCase);
  $("cs-prev").addEventListener("click", function () { step(-1); });
  $("cs-next").addEventListener("click", function () { step(1); });
  document.addEventListener("keydown", function (e) {
    if (openId === null) return;
    if (e.key === "Escape") closeCase();
    if (e.key === "Tab") {
      var f = $("cs-drawer").querySelectorAll("button:not([disabled]),[tabindex='0']");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(drawTimeline, 150); });
  document.addEventListener("urs:lang", function () {
    var sort = $("cs-sort").value; fillSelects(); $("cs-sort").value = sort;
    drawTimeline(); if (openId !== null) paint();
  });

  fillSelects();
  drawTimeline();
})();
