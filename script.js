document.addEventListener("DOMContentLoaded", function () {
  // ===== Cookie banner =====
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

  // ===== Smooth scroll for in-page anchors =====
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      const header = document.getElementById('header');
      const headerOffset = header ? header.offsetHeight : 0;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset - 8;

      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // ===== Active nav highlight on scroll =====
  const navLinks = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function setActiveLink() {
    const header = document.getElementById('header');
    const headerOffset = header ? header.offsetHeight : 0;
    const scrollPos = window.scrollY + headerOffset + 20;

    let current = null;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec;
    }

    navLinks.forEach(a => a.classList.remove("active"));
    if (current) {
      const active = navLinks.find(a => a.getAttribute("href") === `#${current.id}`);
      if (active) active.classList.add("active");
    }
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
});
