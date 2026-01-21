document.addEventListener("DOMContentLoaded", function () {
  // Cookie banner
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");

  if (banner && acceptBtn) {
    const hasAccepted = localStorage.getItem("cookieAccepted") === "yes";
    if (hasAccepted) banner.style.display = "none";

    acceptBtn.addEventListener("click", function () {
      banner.style.display = "none";
      localStorage.setItem("cookieAccepted", "yes");
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const header = document.getElementById("header");
      const headerOffset = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });
});
