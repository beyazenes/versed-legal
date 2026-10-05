// Shows the Turkish or English text: ?lang=tr / ?lang=en, else the browser's language.
(function () {
  var param = new URLSearchParams(location.search).get("lang");
  var lang = param || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("section[lang]").forEach(function (s) {
      s.classList.toggle("active", s.getAttribute("lang") === l);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.lang === l ? "true" : "false");
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.lang); });
    });
    apply(lang);
  });
})();
