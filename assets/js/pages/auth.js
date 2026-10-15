/* Log in and Sign up pages */
(function () {
  var t = URS.t, F = URS_FORMS, api = URS_API;
  var $ = function (id) { return document.getElementById(id); };

  // Where to go after logging in: ?next=page.html (same site only)
  var next = new URLSearchParams(location.search).get("next") || "index.html";
  if (!/^[\w\-]+(\.html)?(\?[^\s#]*)?(#[\w\-]*)?$/.test(next)) next = "index.html";
  ["to-signup", "to-login"].forEach(function (id) {
    var a = $(id); if (a && next !== "index.html") a.href += "?next=" + encodeURIComponent(next);
  });

  // Show / hide password
  document.querySelectorAll("[data-toggle-pw]").forEach(function (b) {
    b.addEventListener("click", function () {
      var input = b.parentElement.querySelector("input");
      input.type = input.type === "password" ? "text" : "password";
      b.setAttribute("aria-pressed", input.type === "text" ? "true" : "false");
    });
  });

  // Google sign-in (connect Firebase in services.js)
  document.querySelectorAll("[data-google]").forEach(function (b) {
    b.addEventListener("click", function () {
      var msg = b.parentElement.querySelector("[data-google-msg]");
      api.signInWithGoogle()
        .then(function () { location.href = next; })
        .catch(function (err) {
          if (!msg || err.message === "cancelled") return;
          msg.textContent = t(err.message === "not-configured" ? "login.googleSoon" : "err.generic");
          msg.hidden = false;
        });
    });
  });

  /* ---------- Log in ---------- */
  var login = $("form-login");
  if (login) {
    F.liveClear(login);
    login.addEventListener("input", function () { $("login-err").style.display = "none"; });
    login.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!F.validate(login)) return;
      var v = F.values(login), btn = login.querySelector("[type=submit]");
      F.busy(btn, true, "…");
      api.signIn(v.email, v.password)
        .then(function () { location.href = next; })
        .catch(function (err) {
          F.busy(btn, false);
          $("login-err").textContent = t(err.message === "too-many" ? "err.tooMany" : err.message === "generic" ? "err.generic" : "err.login");
          $("login-err").style.display = "block"; $("l-pw").focus();
        });
    });
    $("forgot").addEventListener("click", function (e) {
      e.preventDefault();
      var email = $("l-email").value.trim(), field = $("l-email").closest(".field");
      if (!F.EMAIL.test(email)) { field.classList.add("invalid"); $("l-email").focus(); return; }
      api.resetPassword(email).then(function () { $("forgot-msg").hidden = false; });
    });
  }

  /* ---------- Sign up ---------- */
  var signup = $("form-signup");
  if (signup) {
    F.liveClear(signup);
    signup.addEventListener("submit", function (e) {
      e.preventDefault();
      $("s-email-err").textContent = t("err.email");
      var ok = F.validate(signup, function (field, input) {
        if (field.hasAttribute("data-pw") && input.value.length < 8) return false;
        if (field.hasAttribute("data-pw-confirm") && input.value !== $("s-pw").value) return false;
      });
      if (!ok) return;
      var v = F.values(signup), btn = signup.querySelector("[type=submit]");
      F.busy(btn, true, "…");
      api.signUp(v.name, v.email, v.password)
        .then(function () { location.href = next; })
        .catch(function (err) {
          F.busy(btn, false);
          if (err.message !== "exists") { $("s-email-err").textContent = t("err.generic"); $("s-email-field").classList.add("invalid"); return; }
          if (err.message === "exists") {
            $("s-email-err").textContent = t("err.exists");
            $("s-email-field").classList.add("invalid"); $("s-email").focus();
          }
        });
    });
  }
})();
