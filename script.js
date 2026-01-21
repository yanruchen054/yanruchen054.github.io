// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Cookie banner
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");

  const hasAccepted = localStorage.getItem("cookieAccepted") === "yes";
  if (hasAccepted && banner) banner.style.display = "none";

  if (acceptBtn && banner) {
    acceptBtn.addEventListener("click", function () {
      banner.style.display = "none";
      localStorage.setItem("cookieAccepted", "yes");
    });
  }

  // Smooth scroll for nav
  document.querySelectorAll('.nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;

      const headerOffset = document.getElementById("topbar")?.offsetHeight || 0;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset - 10;

      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
});
