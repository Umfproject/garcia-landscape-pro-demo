(function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const form = document.getElementById("estimate-form");
  const card = document.getElementById("estimate-form-card");
  const success = document.getElementById("form-success");

  if (form && card && success) {
    form.addEventListener("submit", (e) => {
      // Demo: show success UI. Wire Formspark → Make → Twilio later for SMS.
      e.preventDefault();
      card.classList.add("is-sent");
      success.classList.add("is-visible");
      success.focus?.();
      window.scrollTo({ top: card.offsetTop - 80, behavior: "smooth" });
    });
  }
})();
