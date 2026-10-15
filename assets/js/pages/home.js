/* Home page: hero facts, random closed schools, random development projects, case-study dots */
(function () {
  var t = URS.t, esc = URS.esc, loc = URS.loc;
  var $ = function (id) { return document.getElementById(id); };
  var PROJECTS = window.URS_PROJECTS || [], SITES = window.URS_SITES || [], CASES = window.URS_CASES || [];

  // A fresh random order on every visit (kept the same while switching language)
  function shuffled(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  var pickSites = shuffled(SITES).slice(0, 4);
  // Four projects: desktop shows one row of three; when the grid wraps onto
  // two or more rows (tablet, phone) all four show, so no row has a lone card.
  var pickProjects = shuffled(PROJECTS).slice(0, 4);

  // Outcome of each case study, for the dots
  var outcomes = CASES.map(function (c) {
    var o = (c.outcome || "").toLowerCase();
    return /mixed/.test(o) ? "m" : /fail/.test(o) ? "f" : "s";
  }).sort(function (a, b) { return "smf".indexOf(a) - "smf".indexOf(b); });

  function render() {
    /* Hero facts */
    $("facts").innerHTML =
      '<a href="gallery.html#sites"><b>' + SITES.length + "</b><span>" + esc(t("home.fact.sites")) + "</span></a>" +
      '<a href="gallery.html#projects"><b>' + PROJECTS.length + "</b><span>" + esc(t("home.fact.projects")) + "</span></a>" +
      '<a href="case-studies.html"><b>' + CASES.length + "</b><span>" + esc(t("home.fact.cases")) + "</span></a>";

    /* Closed schools */
    $("home-sites").innerHTML = pickSites.map(function (s) {
      return '<a class="scard" href="site.html#' + encodeURIComponent(s.id) + '">' +
        '<img src="' + esc(s.image) + '" alt="" loading="lazy">' +
        '<div class="top"><span class="tag"><span class="pin"></span>' + esc(URS.regionLabel(s.region)) + "</span>" +
        '<span class="tag dark">' + esc(URS.closedLabel(s)) + "</span></div>" +
        '<div class="info"><h3>' + esc(loc(s, "name")) + "</h3><p>" + esc(loc(s, "location")) + "</p></div></a>";
    }).join("");

    /* Development projects */
    $("home-featured").innerHTML = pickProjects.map(function (p) {
      return '<a class="pcard" href="gallery.html#' + encodeURIComponent(p.id) + '">' +
        '<div class="media">' + (p.region ? '<span class="region">' + esc(URS.regionLabel(p.region)) + "</span>" : "") + '<img src="' + esc(p.image) + '" alt="" loading="lazy"></div>' +
        '<div class="body"><h3>' + esc(loc(p, "name")) + '</h3><p class="loc">' + esc(loc(p, "location")) + "</p></div></a>";
    }).join("");
  }

  /* Case-study dots */
  $("home-dots").innerHTML = outcomes.map(function (k) { return '<i class="' + k + '"></i>'; }).join("");
  ["s", "m", "f"].forEach(function (k) { $("n-" + k).textContent = outcomes.filter(function (x) { return x === k; }).length; });

  render();
  document.addEventListener("urs:lang", render);
})();
