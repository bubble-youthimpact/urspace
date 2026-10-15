/* Design site detail page: site.html#<site id> (site.html?id=... also works) */
(function () {
  var t = URS.t, esc = URS.esc, api = window.URS_API;
  var id = new URLSearchParams(location.search).get("id") || decodeURIComponent(location.hash.slice(1));
  var site = (window.URS_SITES || []).find(function (s) { return s.id === id; });
  var root = document.getElementById("site-root");
  var backIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>';

  function render() {
    if (!site) {
      document.title = t("site.notFound") + " · URSPACE";
      root.innerHTML = '<div style="padding:80px 0"><div class="empty"><h3>' + esc(t("site.notFound")) + "</h3><p>" + esc(t("site.notFoundBody")) +
        '</p><a class="btn" href="gallery.html#sites">' + esc(t("site.allSites")) + "</a></div></div>";
      return;
    }
    document.title = URS.loc(site, "name") + " · URSPACE";
    var reused = site.status === "reused";
    var paras = [URS.loc(site, "summary")].concat(URS.loc(site, "details") || []).filter(Boolean);

    root.innerHTML =
      '<a class="back" href="gallery.html#sites">' + backIcon + esc(t("site.back")) + "</a>" +
      '<article class="site-detail">' +
        '<div class="media"><img src="' + esc(site.image) + '" alt=""></div>' +
        "<div>" +
          '<span class="badge ' + (reused ? "reused" : "open") + '">' + esc(t(reused ? "site.reused" : "site.open")) + "</span>" +
          "<h1>" + esc(URS.loc(site, "name")) + "</h1>" +
          '<dl class="facts"><div><dt>' + esc(t("site.location")) + "</dt><dd>" + esc(URS.loc(site, "location")) + "</dd></div>" +
          "<div><dt>" + esc(t("site.years")) + "</dt><dd>" + esc(URS.loc(site, "years")) + (URS.closedYear(site) ? " · " + esc(URS.closedLabel(site)) : "") + "</dd></div></dl>" +
          '<div class="copy">' + paras.map(function (p) { return "<p>" + URS.rich(p) + "</p>"; }).join("") + "</div>" +
          '<div class="actions"><a class="btn" href="apply.html#site-' + encodeURIComponent(site.id) + '">' + esc(t("site.submit")) + "</a></div>" +
        "</div>" +
      "</article>" +
      '<section class="sub-section"><h2>' + esc(t("site.designs")) + '</h2><div id="designs"></div></section>' +
      '<section class="sub-section" id="comments-section"><h2>' + esc(t("site.comments")) + '</h2><div id="comment-box"></div><p class="form-msg error" id="comment-msg" role="alert" hidden></p><div class="comments" id="comments"></div></section>' +
      '<section class="sub-section"><h2>' + esc(t("site.others")) + '</h2><div class="site-cards">' +
        (window.URS_SITES || []).filter(function (s) { return s.id !== site.id && s.status !== "reused"; }).slice(0, 4).map(function (s) {
          return '<a class="scard" href="site.html#' + encodeURIComponent(s.id) + '"><img src="' + esc(s.image) + '" alt="" loading="lazy">' +
            '<div class="top"><span class="tag"><span class="pin"></span>' + esc(URS.regionLabel(s.region)) + '</span><span class="tag dark">' + esc(URS.closedLabel(s)) + "</span></div>" +
            '<div class="info"><h3>' + esc(URS.loc(s, "name")) + "</h3><p>" + esc(URS.loc(s, "location")) + "</p></div></a>";
        }).join("") + "</div></section>";

    api.listDesigns(site.id).then(function (list) {
      var box = document.getElementById("designs");
      if (!list.length) {
        box.innerHTML = '<div class="empty"><h3>' + esc(t("site.noDesigns")) + "</h3><p>" + esc(t("site.noDesignsBody")) +
          '</p><a class="btn ghost sm" href="apply.html#site-' + encodeURIComponent(site.id) + '">' + esc(t("site.submit")) + "</a></div>";
      } else {
        box.innerHTML = '<div class="grid-3">' + list.map(function (d) {
          return '<div class="pcard"><div class="media"><img src="' + esc(d.image) + '" alt=""></div><div class="body"><h3>' + esc(d.name) + '</h3><p class="loc">' + esc(d.designer) + "</p></div></div>";
        }).join("") + "</div>";
      }
    });
    renderCommentBox();
    renderComments();
  }

  function renderCommentBox() {
    var box = document.getElementById("comment-box");
    if (!box) return;
    if (api.currentUser()) {
      box.innerHTML = '<form class="comment-form" id="comment-form"><label class="sr-only" for="c-text">' + esc(t("site.commentPh")) + "</label>" +
        '<input id="c-text" maxlength="600" autocomplete="off" placeholder="' + esc(t("site.commentPh")) + '">' +
        '<button class="btn sm" type="submit">' + esc(t("site.post")) + "</button></form>";
      document.getElementById("comment-form").addEventListener("submit", function (e) {
        e.preventDefault();
        var input = document.getElementById("c-text"), text = input.value.trim();
        if (!text) { input.focus(); return; }
        var btn = this.querySelector("[type=submit]"); btn.disabled = true;
        api.addComment(site.id, text)
          .then(function () { input.value = ""; renderComments(); })
          .catch(function () { showCommentMsg(t("site.commentError")); })
          .then(function () { btn.disabled = false; });
      });
    } else {
      box.innerHTML = '<p class="signin-note"><a class="textlink" href="login.html?next=' + encodeURIComponent((location.pathname.split("/").pop().replace(/\.html$/, "") || "site") + ".html" + location.search + location.hash) + '">' +
        esc(t("site.loginToComment")) + "</a></p>";
    }
  }

  function showCommentMsg(text) {
    var box = document.getElementById("comment-msg");
    if (!box) return;
    box.textContent = text; box.hidden = !text;
  }

  // Each comment you wrote has a Delete button; it asks once on the page before deleting
  function renderComments() {
    var list$ = document.getElementById("comments");
    if (!list$) return;
    api.listComments(site.id).then(function (list) {
      var fmt = new Intl.DateTimeFormat(URS.lang() === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "short", day: "numeric" });
      list$.innerHTML = list.length ? list.map(function (c) {
        return '<div class="comment" data-id="' + esc(c.id || "") + '"><div class="comment-top"><div class="who">' + esc(c.name) +
          '<span class="when">' + esc(fmt.format(new Date(c.at))) + "</span></div>" +
          (c.mine ? '<div class="comment-actions"><button type="button" class="link-btn" data-del>' + esc(t("site.delete")) + "</button></div>" : "") +
          "</div><p>" + esc(c.text) + "</p></div>";
      }).join("") : '<p class="signin-note">' + esc(t("site.noComments")) + "</p>";
    }).catch(function () {
      list$.innerHTML = '<p class="signin-note">' + esc(t("site.noComments")) + "</p>";
    });
  }

  document.addEventListener("click", function (e) {
    var item = e.target.closest(".comment"); if (!item) return;
    var actions = item.querySelector(".comment-actions"); if (!actions) return;
    if (e.target.closest("[data-del]")) {
      actions.innerHTML = '<span class="confirm-q">' + esc(t("site.deleteConfirm")) + "</span>" +
        '<button type="button" class="link-btn danger" data-del-yes>' + esc(t("site.delete")) + "</button>" +
        '<button type="button" class="link-btn" data-del-no>' + esc(t("site.cancel")) + "</button>";
      actions.querySelector("[data-del-no]").focus();
    } else if (e.target.closest("[data-del-no]")) {
      renderComments();
    } else if (e.target.closest("[data-del-yes]")) {
      e.target.disabled = true;
      api.deleteComment(site.id, item.getAttribute("data-id"))
        .then(renderComments)
        .catch(function () { showCommentMsg(t("site.deleteError")); renderComments(); });
    }
  });

  render();
  document.addEventListener("urs:lang", render);
  window.addEventListener("hashchange", function () {
    var next = decodeURIComponent(location.hash.slice(1));
    var found = (window.URS_SITES || []).find(function (s) { return s.id === next; });
    if (found) { site = found; render(); window.scrollTo(0, 0); }
  });
  document.addEventListener("urs:auth", function () { renderCommentBox(); renderComments(); });
})();
