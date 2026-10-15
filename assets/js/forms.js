/* Shared form helpers: validation and the "sent" state */
window.URS_FORMS = (function () {
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* Checks every .field in the form. Returns true when all pass. */
  function validate(form, extra) {
    var ok = true, firstBad = null;
    form.querySelectorAll(".field").forEach(function (f) {
      var input = f.querySelector("input:not([type=file]),select,textarea");
      var bad = false;
      if (f.hasAttribute("data-required") && input && !input.value.trim()) bad = true;
      if (!bad && f.hasAttribute("data-email") && input && !EMAIL.test(input.value.trim())) bad = true;
      if (extra) { var r = extra(f, input); if (r === false) bad = true; }
      f.classList.toggle("invalid", bad);
      if (input) input.setAttribute("aria-invalid", bad ? "true" : "false");
      if (bad) { ok = false; if (!firstBad) firstBad = f; }
    });
    if (firstBad) {
      var target = firstBad.querySelector("input,select,textarea");
      firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
      if (target) setTimeout(function () { target.focus({ preventScroll: true }); }, 250);
    }
    return ok;
  }

  /* Clear a field's error as soon as the person fixes it */
  function liveClear(form) {
    form.addEventListener("input", function (e) {
      var f = e.target.closest(".field");
      if (f && f.classList.contains("invalid")) { f.classList.remove("invalid"); e.target.setAttribute("aria-invalid", "false"); }
    });
  }

  function values(form) {
    var out = {};
    form.querySelectorAll("input[name],select[name],textarea[name]").forEach(function (el) { out[el.name] = el.value.trim(); });
    return out;
  }

  function busy(btn, on, label) {
    btn.disabled = on;
    if (on) { btn.dataset.label = btn.textContent; btn.textContent = label; }
    else if (btn.dataset.label) btn.textContent = btn.dataset.label;
  }

  return { validate: validate, liveClear: liveClear, values: values, busy: busy, EMAIL: EMAIL };
})();
