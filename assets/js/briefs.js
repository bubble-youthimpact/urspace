/* =====================================================================
   URSPACE — Policy brief layout
   Builds the HTML of one brief (data from data-briefs.js). The case
   studies page shows it in a side panel via window.URS_BRIEF_HTML.
   ===================================================================== */
(function () {
  var BRIEFS = window.URS_BRIEFS || [];
  var DICT = window.URS_I18N || { en: {} };
  function lang() { return document.documentElement.lang === "ko" ? "ko" : "en"; }
  function t(k, v) {
    var s = (DICT[lang()] || {})[k]; if (s == null) s = DICT.en[k]; if (s == null) s = k;
    if (v) s = s.replace(/\{(\w+)\}/g, function (_, x) { return v[x] != null ? v[x] : ""; });
    return s;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function list(items, cls) { return '<ul class="' + cls + '">' + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }

  /* Outcome of each case, read from the case library (data-cases.js) */
  var CASES = {};
  (window.URS_CASES || []).forEach(function (c) {
    var o = (c.outcome || "").toLowerCase();
    CASES[c.name] = /mixed|ongoing|uncertain/.test(o) ? "mixed" : /fail/.test(o) ? "failure" : "success";
  });
  var ORDER = ["success", "mixed", "failure"];
  function counts(b) {
    var n = { success: 0, mixed: 0, failure: 0 };
    b.cases.forEach(function (c) { n[CASES[c] || "mixed"]++; });
    return n;
  }
  function countLine(n) {
    return ORDER.filter(function (k) { return n[k]; }).map(function (k) {
      return '<span class="pb-c-' + k + '">' + n[k] + " " + esc(t("pb.o." + k)) + "</span>";
    }).join('<i aria-hidden="true">·</i>');
  }
  function caseLink(name) { return "case-studies.html?case=" + encodeURIComponent(name); }

  /* ---------- One brief ---------- */
  function sec(n, key, inner, cls) {
    return '<section class="pb-sec' + (cls ? " " + cls : "") + '"><h2><span>' + n + "</span>" + esc(t("pb.s." + key)) + "</h2>" + inner + "</section>";
  }

  function docHTML(b) {
    var head =
      '<header class="pb-head">' +
        '<div class="pb-label"><span>URSPACE · ' + esc(t("pb.no", { n: b.no })) + "</span><span>" + esc(b.updated) + "</span></div>" +
        "<h1>" + esc(b.title) + "</h1>" +
        '<p class="pb-meta">' + esc(b.scope) + '<i aria-hidden="true">·</i>' + countLine(counts(b)) + "</p>" +
      "</header>";

    var summary = sec("01", "summary",
      '<div class="pb-sum"><div><p class="pb-lead">' + esc(b.summary) + "</p>" +
        '<p class="pb-rec"><b>' + esc(t("pb.decision")) + "</b>" + esc(b.recommendation) + "</p></div>" +
        '<dl class="pb-kf">' + b.keyFacts.map(function (f) { return "<div><dt>" + esc(f.l) + "</dt><dd>" + esc(f.v) + "</dd></div>"; }).join("") + "</dl></div>");

    var lessons = sec("02", "lessons", '<ol class="pb-ol">' + b.lessons.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ol>");

    var risks = sec("03", "risks", '<ul class="pb-risks">' + b.risks.map(function (r) {
      return '<li><div><strong>' + esc(r.r) + '</strong><span class="pb-lv lv-' + esc(r.level) + '">' + esc(t("pb.lv." + r.level)) + "</span></div><p>" + esc(r.d) + "</p></li>";
    }).join("") + "</ul>");

    var data = sec("04", "data", '<dl class="pb-dp">' + b.dataPoints.map(function (d) { return "<div><dd>" + esc(d.v) + "</dd><dt>" + esc(d.l) + "</dt></div>"; }).join("") + "</dl>");

    var n = counts(b), total = b.cases.length;
    var bar = '<div class="pb-obar">' + ORDER.filter(function (k) { return n[k]; }).map(function (k) {
      return '<span class="ob-' + k + '" style="flex:' + n[k] + '">' + n[k] + "</span>";
    }).join("") + "</div>";
    var legend = '<p class="pb-olegend">' + ORDER.filter(function (k) { return n[k]; }).map(function (k) {
      return '<span><i class="ob-' + k + '"></i>' + esc(t("pb.o." + k)) + "</span>";
    }).join("") + "</p>";
    var sorted = b.cases.slice().sort(function (a, c) { return ORDER.indexOf(CASES[a]) - ORDER.indexOf(CASES[c]); });
    var cl = '<ul class="pb-cases">' + sorted.map(function (c) {
      return '<li><i class="ob-' + (CASES[c] || "mixed") + '" aria-hidden="true"></i><a href="' + caseLink(c) + '">' + esc(c) + "</a></li>";
    }).join("") + "</ul>";
    var tl = '<figure class="pb-fig"><figcaption>' + esc(t("pb.dOutcomes", { n: total })) + "</figcaption>" + bar + legend + cl + "</figure>";
    var gc = '<figure class="pb-fig"><figcaption>' + esc(t("pb.dGains")) + '</figcaption><div class="pb-gc">' +
      "<div><h4>" + esc(t("pb.gained")) + "</h4>" + list(b.gainsCosts.gains, "pb-plus") + "</div>" +
      "<div><h4>" + esc(t("pb.paid")) + "</h4>" + list(b.gainsCosts.costs, "pb-minus") + "</div></div></figure>";
    var diagrams = sec("05", "diagrams", '<div class="pb-figs">' + tl + gc + "</div>");

    var recs = sec("06", "recs", '<table class="pb-table"><thead><tr><th>' + esc(t("pb.action")) + "</th><th>" + esc(t("pb.lead")) + "</th></tr></thead><tbody>" +
      b.recommendations.map(function (r, i) { return '<tr><td><span class="pb-n">' + (i + 1) + "</span>" + esc(r.h) + "</td><td>" + esc(r.who) + "</td></tr>"; }).join("") + "</tbody></table>");

    var questions = sec("07", "questions", '<ul class="pb-check">' + b.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul>");

    var foot = '<footer class="pb-foot">' + esc(t("pb.basedOn")) + ' <a href="case-studies.html">' + esc(t("pb.library")) + "</a></footer>";

    return head + '<div class="pb-doc">' + summary +
      '<div class="pb-two">' + lessons + risks + "</div>" + data + diagrams + recs + questions + foot + "</div>";
  }
  // Shared with the case studies page, which shows briefs in a side panel
  window.URS_BRIEF_HTML = docHTML;

})();
