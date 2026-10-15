/* Apply page: two tabs (design upload / education) */
(function () {
  var t = URS.t, esc = URS.esc, F = URS_FORMS, api = URS_API;
  var $ = function (id) { return document.getElementById(id); };
  var params = new URLSearchParams(location.search);
  var hash = decodeURIComponent(location.hash.slice(1));
  if (hash === "education" || hash === "design") params.set("tab", hash);
  if (hash.indexOf("site-") === 0) { params.set("tab", "design"); params.set("site", hash.slice(5)); }
  var CFG = window.URS_CONFIG || {};
  var MAX = 10 * 1024 * 1024;   // FormSubmit's limit for attachments
  // FormSubmit needs a real web page to send from and return to (not a file on
  // your computer, and not inside a preview frame)
  var canFormSubmit = /^https?:$/.test(location.protocol) && window.top === window.self;
  var file = null;

  /* ---------- Left-hand description (follows the selected tab) ---------- */
  var ASIDE = {
    design: { img: "assets/img/program-space-matching.webp", tag: "apply.tabDesign", title: "apply.design.asideTitle", body: "apply.design.aside", link: "apply.design.link", href: "gallery.html#sites" },
    education: { img: "assets/img/program-education.webp", tag: "apply.tabEdu", title: "programs.edu.title", body: "programs.edu.body", link: "apply.edu.link", href: "programs.html#education" }
  };
  var currentTab = "design";
  function paintAside() {
    var a = ASIDE[currentTab];
    $("aside-img").src = a.img;
    $("aside-tag").textContent = t(a.tag);
    $("aside-title").textContent = t(a.title);
    $("aside-body").textContent = t(a.body);
    $("aside-link").textContent = t(a.link);
    $("aside-link").href = a.href;
  }

  // Education is emailed through FormSubmit, so it isn't in preview mode
  if (CFG.educationEmail) {
    var note = document.querySelector("#panel-education [data-demo-note]");
    if (note) note.remove();
  }
  if (CFG.designEmail && canFormSubmit) {
    var dnote = document.querySelector("#panel-design [data-demo-note]");
    if (dnote) dnote.remove();
  }

  /* Design uploads: a regular file-upload post to FormSubmit, sent into a
     hidden frame so the visitor stays on URSPACE. Resolves once FormSubmit
     has answered. */
  function sendDesignByEmail(data) {
    return new Promise(function (resolve, reject) {
      var site = (window.URS_SITES || []).find(function (s) { return s.id === data.location; });
      var fields = {
        "_subject": "URSPACE design submission: " + (data.designName || "") + " (" + (data.designer || "") + ")",
        "_template": "table",
        "_captcha": "false",
        "_replyto": data.email,
        "Designer name": data.designer,
        "Design location": site ? site.name + " · " + site.location : t("apply.locationOther"),
        "Design name": data.designName,
        "Description": data.description,
        "Phone": data.phone || "-",
        "email": data.email,
        "Language": document.documentElement.lang
      };
      var name = "fs-design-" + Date.now();
      var frame = document.createElement("iframe");
      frame.name = name; frame.hidden = true; frame.setAttribute("aria-hidden", "true");
      frame.title = "upload";
      document.body.appendChild(frame);

      var f = document.createElement("form");
      f.method = "POST"; f.enctype = "multipart/form-data"; f.hidden = true; f.target = name;
      f.action = "https://formsubmit.co/" + encodeURIComponent(CFG.designEmail);
      Object.keys(fields).forEach(function (k) {
        var i = document.createElement("input"); i.type = "hidden"; i.name = k; i.value = fields[k]; f.appendChild(i);
      });
      var fileInput = document.createElement("input");
      fileInput.type = "file"; fileInput.name = "attachment";
      var dt = new DataTransfer(); dt.items.add(file); fileInput.files = dt.files;
      f.appendChild(fileInput);
      document.body.appendChild(f);

      var finished = false;
      function finish(ok) {
        if (finished) return; finished = true;
        clearTimeout(timer);
        setTimeout(function () { f.remove(); frame.remove(); }, 1000);
        ok ? resolve() : reject(new Error("send"));
      }
      // Listen only after the empty frame has been added, so its first blank load doesn't count
      frame.addEventListener("load", function () { finish(true); });
      var timer = setTimeout(function () { finish(false); }, 120000);
      f.submit();
    });
  }

  /* ---------- Tabs ---------- */
  var tabs = document.querySelectorAll("[role=tab]");
  function showTab(name) {
    currentTab = name; paintAside();
    tabs.forEach(function (b) {
      var on = b.getAttribute("data-tab") === name;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
      $("panel-" + b.getAttribute("data-tab")).hidden = !on;
    });
    try { history.replaceState(null, "", "#" + name); } catch (e) {}
  }
  tabs.forEach(function (b) {
    b.addEventListener("click", function () { showTab(b.getAttribute("data-tab")); });
    b.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        var other = Array.prototype.find.call(tabs, function (x) { return x !== b; });
        other.focus(); showTab(other.getAttribute("data-tab"));
      }
    });
  });
  showTab(params.get("tab") === "education" ? "education" : "design");
  // A link to the other tab from this same page (e.g. apply.html#education)
  window.addEventListener("hashchange", function () {
    var h = location.hash.slice(1);
    if (h === "education" || h === "design") showTab(h);
  });

  /* ---------- Design location list (from data-places.js) ---------- */
  function fillSites() {
    var sel = $("d-location"), current = sel.value || params.get("site") || "";
    sel.innerHTML = '<option value="">' + esc(t("apply.locationPh")) + "</option>" +
      (window.URS_SITES || []).map(function (s) {
        return '<option value="' + esc(s.id) + '">' + esc(URS.loc(s, "name")) + " · " + esc(URS.loc(s, "location")) + "</option>";
      }).join("") + '<option value="other">' + esc(t("apply.locationOther")) + "</option>";
    sel.value = current;
    if (sel.value !== current) sel.value = "";
  }
  fillSites();

  /* ---------- File upload ---------- */
  var drop = $("drop"), input = $("d-file");
  function fmtSize(b) { return b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB"; }
  function setFile(f) {
    var field = drop.closest(".field");
    file = null;
    if (f && f.size > MAX) {
      $("file-err").textContent = t("err.fileSize"); field.classList.add("invalid");
      input.value = ""; $("file-chip").classList.remove("show"); return;
    }
    file = f || null;
    field.classList.remove("invalid"); $("file-err").textContent = t("err.file");
    if (!file) { $("file-chip").classList.remove("show"); input.value = ""; return; }
    $("file-name").textContent = file.name;
    $("file-size").textContent = fmtSize(file.size);
    var thumb = $("file-thumb");
    if (/^image\//.test(file.type)) { thumb.src = URL.createObjectURL(file); thumb.style.visibility = "visible"; }
    else { thumb.removeAttribute("src"); thumb.style.visibility = "hidden"; }
    $("file-chip").classList.add("show");
  }
  input.addEventListener("change", function () { setFile(input.files[0]); });
  ["dragenter", "dragover"].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.add("over"); }); });
  ["dragleave", "drop"].forEach(function (ev) { drop.addEventListener(ev, function (e) { e.preventDefault(); drop.classList.remove("over"); }); });
  drop.addEventListener("drop", function (e) { if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]); });
  $("file-remove").addEventListener("click", function () { setFile(null); input.focus(); });

  /* ---------- Submit ---------- */
  function success(form, type) {
    var card = form.parentElement;
    card.innerHTML = '<div class="success" role="status"><div class="tick"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>' +
      "<h2>" + esc(t("apply.done")) + "</h2><p>" + esc(t("apply.doneBody")) + '</p><button type="button" class="btn ghost" data-again>' + esc(t("apply.another")) + "</button></div>";
    // Start a fresh, empty form on the same tab
    card.querySelector("[data-again]").addEventListener("click", function () {
      try { history.replaceState(null, "", "#" + type); } catch (e) {}
      location.reload();
    });
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function wire(form, type) {
    F.liveClear(form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = F.validate(form, function (field) {
        if (field.hasAttribute("data-file")) { if (!file) { $("file-err").textContent = t("err.file"); return false; } }
      });
      if (!ok) return;
      var btn = form.querySelector("[type=submit]"), msg = form.querySelector("[data-form-error]");
      msg.hidden = true;
      F.busy(btn, true, t("apply.sending"));
      var data = F.values(form);
      if (type === "design") {
        var site = (window.URS_SITES || []).find(function (s) { return s.id === data.location; });
        data.locationName = site ? site.name : data.location;
      }
      var sending = (type === "design" && CFG.designEmail && canFormSubmit)
        ? sendDesignByEmail(data)
        : api.submitApplication(type, data, type === "design" ? file : null);
      sending
        .then(function () { success(form, type); })
        .catch(function () { F.busy(btn, false); msg.textContent = t("err.send"); msg.hidden = false; });
    });
  }
  wire($("form-design"), "design");
  wire($("form-education"), "education");

  document.addEventListener("urs:lang", function () { fillSites(); paintAside(); });
})();
