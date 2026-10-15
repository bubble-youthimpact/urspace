/* My profile: basic info and application tracking */
(function () {
  var t = URS.t, esc = URS.esc, F = URS_FORMS, api = URS_API;
  var CFG = window.URS_CONFIG || {};
  var $ = function (id) { return document.getElementById(id); };
  var profile = null, apps = null, appsFailed = false;

  var ICONS = {
    design: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>',
    education: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>'
  };
  var STATUSES = ["received", "reviewing", "accepted", "declined"];

  function fmtDate(isoStr) {
    if (!isoStr) return "";
    var d = new Date(isoStr);
    if (isNaN(d)) return "";
    return d.toLocaleDateString(URS.lang() === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "short", day: "numeric" });
  }

  /* ---------- Header: name, email, counts ---------- */
  function paintHead() {
    if (!profile) return;
    var name = profile.name || profile.email;
    $("p-name").removeAttribute("data-i18n");
    $("p-name").textContent = name;
    $("p-avatar").textContent = name.trim().charAt(0).toUpperCase();
    $("p-email").textContent = profile.email;
    $("p-since").textContent = profile.createdAt ? t("profile.memberSince", { d: fmtDate(profile.createdAt) }) : "";
    if (apps) {
      $("n-total").textContent = apps.length;
      $("n-review").textContent = apps.filter(function (a) { return a.status === "received" || a.status === "reviewing"; }).length;
      $("n-accepted").textContent = apps.filter(function (a) { return a.status === "accepted"; }).length;
    }
  }

  /* ---------- Applications ---------- */
  // Where an application sits on the Received → In review → Decision track
  function track(status) {
    var step = status === "reviewing" ? 1 : (status === "accepted" || status === "declined") ? 2 : 0;
    var last = status === "accepted" ? t("status.accepted") : status === "declined" ? t("status.declined") : t("status.accepted") + " / " + t("status.declined");
    var labels = [t("status.received"), t("status.reviewing"), last];
    return '<ol class="app-track' + (status === "declined" ? " is-declined" : "") + '">' + labels.map(function (l, i) {
      return '<li class="' + (i < step ? "done" : i === step ? "now" : "") + '"' + (i === step ? ' aria-current="step"' : "") + "><span>" + esc(l) + "</span></li>";
    }).join("") + "</ol>";
  }

  function siteName(a) {
    var site = (window.URS_SITES || []).find(function (s) { return s.id === a.siteId; });
    if (site) return URS.loc(site, "name");
    return a.siteId === "other" ? t("apply.locationOther") : (a.siteName || "");
  }

  function paintApps() {
    var box = $("apps-list");
    if (appsFailed) { box.removeAttribute("aria-busy"); box.innerHTML = '<p class="form-msg error">' + esc(t("profile.appsErr")) + "</p>"; return; }
    if (!apps) return;
    box.removeAttribute("aria-busy");
    if (!apps.length) {
      box.innerHTML = '<div class="apps-empty">' +
        '<div class="ae-icon">' + ICONS.design + "</div>" +
        "<h3>" + esc(t("profile.appsEmpty")) + "</h3><p>" + esc(t("profile.appsEmptyBody")) + "</p>" +
        '<div class="ae-acts"><a class="btn sm" href="apply.html#design">' + esc(t("join.primary")) + '</a>' +
        '<a class="btn ghost sm" href="apply.html#education">' + esc(t("apply.edu.title")) + "</a></div></div>";
      return;
    }
    box.innerHTML = apps.map(function (a) {
      var type = a.type === "design" ? "design" : "education";
      var status = STATUSES.indexOf(a.status) >= 0 ? a.status : "received";
      var title = type === "design" ? (a.title || t("profile.typeDesign")) : t("profile.eduTitle");
      var where = type === "design" ? siteName(a) : "";
      var siteLink = type === "design" && a.siteId && a.siteId !== "other"
        ? '<a href="site.html#' + encodeURIComponent(a.siteId) + '">' + esc(where) + "</a>" : esc(where);
      return '<article class="app-row">' +
        '<div class="app-top">' +
          '<span class="app-ic ' + type + '">' + ICONS[type] + "</span>" +
          '<div class="app-main">' +
            '<span class="app-type">' + esc(t(type === "design" ? "profile.typeDesign" : "profile.typeEducation")) + "</span>" +
            "<h3>" + esc(title) + "</h3>" +
            '<p class="app-meta">' + esc(t("profile.submitted", { d: fmtDate(a.createdAt) })) + (where ? " · " + siteLink : "") + "</p>" +
          "</div>" +
          '<span class="status ' + status + '">' + esc(t("status." + status)) + "</span>" +
        "</div>" +
        track(status) +
        (a.note ? '<div class="app-note"><b>' + esc(t("profile.note")) + "</b><p>" + esc(a.note) + "</p></div>" : "") +
      "</article>";
    }).join("");
  }

  /* ---------- Basic info form ---------- */
  var form = $("form-profile"), saveBtn = form.querySelector("[type=submit]");
  function fillForm() {
    $("p-in-name").value = profile.name || "";
    $("p-in-email").value = profile.email || "";
    $("p-in-phone").value = profile.phone || "";
    $("p-in-org").value = profile.org || "";
    saveBtn.disabled = false;
    $("pw-email").hidden = !profile.hasPassword;
    $("pw-google").hidden = !!profile.hasPassword;
  }
  F.liveClear(form);
  form.addEventListener("input", function () { $("save-ok").hidden = true; $("save-err").hidden = true; });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!profile || !F.validate(form)) return;
    var data = F.values(form);
    F.busy(saveBtn, true, t("profile.saving"));
    api.saveProfile(data).then(function () {
      profile.name = data.name; profile.phone = data.phone; profile.org = data.org;
      paintHead();
      $("save-ok").hidden = false;
    }).catch(function () { $("save-err").hidden = false; })
      .then(function () { F.busy(saveBtn, false); });
  });

  $("pw-btn").addEventListener("click", function () {
    var b = $("pw-btn"); b.disabled = true;
    api.sendPasswordChange().then(function () { $("pw-sent").hidden = false; }).catch(function () { b.disabled = false; });
  });

  function paintDeleteLink() {
    var to = CFG.email || "";
    var subject = URS.lang() === "ko" ? "URSPACE 계정 삭제 요청" : "URSPACE account deletion request";
    var body = (URS.lang() === "ko" ? "다음 계정을 삭제해 주세요: " : "Please delete my URSPACE account: ") + ((profile && profile.email) || "");
    $("delete-link").href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  }

  /* ---------- Start ---------- */
  function start() {
    if (!api.currentUser()) { location.replace("login.html?next=profile.html"); return; }
    api.getProfile().then(function (p) {
      profile = p; fillForm(); paintHead(); paintDeleteLink();
    }).catch(function () { location.replace("login.html?next=profile.html"); });
    api.listApplications().then(function (list) { apps = list; paintApps(); paintHead(); })
      .catch(function () { appsFailed = true; paintApps(); });
  }
  // Wait until a saved login has been restored before deciding
  (api.authReady || Promise.resolve()).then(start);

  // Signed out in another tab
  document.addEventListener("urs:auth", function () { if (profile && !api.currentUser()) location.replace("index.html"); });
  document.addEventListener("urs:lang", function () { paintHead(); paintApps(); paintDeleteLink(); });
})();
