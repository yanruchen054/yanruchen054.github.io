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
