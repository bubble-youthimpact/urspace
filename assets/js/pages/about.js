/* About page: brochure download (matches the site language) and page viewer */
(function () {
  var cfg = (window.URS_CONFIG || {}).brochure;
  if (!cfg) return;
  var t = URS.t, esc = URS.esc;
  var $ = function (id) { return document.getElementById(id); };
  var pages = cfg.pages || 0, current = 0, lastFocus = null;
  var viewer = $("bro-viewer");

  function lang() { return cfg[URS.lang()] ? URS.lang() : "en"; }
  function other() { return lang() === "en" ? "ko" : "en"; }
  function img(n) { return "assets/img/brochure/" + lang() + "-" + n + ".webp"; }

  function render() {
    var l = lang();
    [$("brochure-btn"), $("bro-dl")].forEach(function (a) { a.href = cfg[l]; a.hidden = false; });
    var o = $("bro-other");
    if (cfg[other()]) { o.href = cfg[other()]; o.hidden = false; } else o.hidden = true;
    $("brochure").hidden = !pages;
    $("bro-grid").innerHTML = Array.from({ length: pages }, function (_, i) {
      var n = i + 1;
      return '<button type="button" class="bro-page" data-page="' + n + '" aria-label="' + esc(t("about.brochurePage", { n: n, t: pages })) + '">' +
        '<img src="' + img(n) + '" alt="" loading="lazy" width="1650" height="1275"><span>' + n + " / " + pages + "</span></button>";
    }).join("");
    if (current) show(current);
  }

  function show(n) {
    current = Math.min(Math.max(n, 1), pages);
    $("bro-img").src = img(current);
    $("bro-img").alt = t("about.brochurePage", { n: current, t: pages });
    $("bro-count").textContent = t("about.brochurePage", { n: current, t: pages });
    $("bro-prev").disabled = current === 1;
    $("bro-next").disabled = current === pages;
  }
  function open(n, from) {
    lastFocus = from; show(n);
    viewer.classList.add("open"); viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setTimeout(function () { $("bro-close").focus({ preventScroll: true }); }, 30);
  }
  function close() {
    current = 0;
    viewer.classList.remove("open"); viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  $("bro-grid").addEventListener("click", function (e) {
    var b = e.target.closest("[data-page]"); if (b) open(+b.getAttribute("data-page"), b);
  });
  $("bro-prev").addEventListener("click", function () { show(current - 1); });
  $("bro-next").addEventListener("click", function () { show(current + 1); });
  $("bro-close").addEventListener("click", close);
  viewer.addEventListener("click", function (e) { if (e.target === viewer) close(); });
  document.addEventListener("keydown", function (e) {
    if (!current) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
    if (e.key === "Tab") {
      var f = Array.prototype.filter.call(viewer.querySelectorAll("button"), function (b) { return !b.disabled; });
      var i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  document.addEventListener("urs:lang", render);
  render();
})();
