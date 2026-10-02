(() => {
  "use strict";
  const filters = document.querySelectorAll("[data-filter]");
  const publications = document.querySelectorAll(".publication[data-category]");
  const count = document.getElementById("publication-count");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      filters.forEach((filter) =>
        filter.setAttribute("aria-pressed", String(filter === button)),
      );
      let visible = 0;
      publications.forEach((publication) => {
        const show =
          category === "all" || publication.dataset.category === category;
        publication.hidden = !show;
        if (show) visible += 1;
      });
      if (count)
        count.textContent = `Showing ${category === "all" ? "all " : ""}${visible} publications and manuscripts. * Equal contribution.`;
    });
  });

  // Native anchor links retain keyboard access, browser history, and reduced-motion support.
  const links = document.querySelectorAll('.nav a[href^="#"]');
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            if (link.hash === `#${entry.target.id}`)
              link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-12% 0px -63% 0px", threshold: 0 },
    );
    links.forEach((link) => {
      const section = document.getElementById(link.hash.slice(1));
      if (section) observer.observe(section);
    });
  }
})();
