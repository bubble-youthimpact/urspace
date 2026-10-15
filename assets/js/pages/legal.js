/* Privacy Policy and Terms of Service: contents list for the visible language */
(function () {
  var toc = document.getElementById("toc");

  function slug(text, i) { return "s" + (i + 1); }

  function build() {
    var lang = URS.lang();
    var article = document.querySelector('[data-lang-block="' + lang + '"]') || document.querySelector("[data-lang-block]");
    var heads = article.querySelectorAll("h2");
    toc.innerHTML = "";
    heads.forEach(function (h, i) {
      h.id = lang + "-" + slug(h.textContent, i);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      toc.appendChild(li);
    });
    // Highlight the section being read
    if (window.IntersectionObserver) {
      if (build.io) build.io.disconnect();
      var links = toc.querySelectorAll("a");
      build.io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (l) { l.classList.toggle("on", l.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-20% 0px -70% 0px" });
      heads.forEach(function (h) { build.io.observe(h); });
    }
  }

  build();
  document.addEventListener("urs:lang", build);
})();
