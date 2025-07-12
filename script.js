document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");

  // Uncomment below lines if you want the banner to stay hidden after accepting:
   const hasAccepted = localStorage.getItem("cookieAccepted") === "yes";
   if (hasAccepted) {
     banner.style.display = "none";
   }

  acceptBtn.addEventListener("click", function () {
    banner.style.display = "none";
     localStorage.setItem("cookieAccepted", "yes");
  });
});

// script.js
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const headerOffset = document.getElementById('header').offsetHeight;
    const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});
