// All research and disclosure content remains available without JavaScript.
(() => {
  const papers = Array.from(document.querySelectorAll('.research-list .paper'));
  const filterGroup = document.querySelector('.research-filters');
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const filterStatus = document.getElementById('filter-status');
  function filterResearch(category, announce = true) {
    let count = 0;
    papers.forEach((paper) => {
      paper.hidden = category !== 'all' && paper.dataset.category !== category;
      if (!paper.hidden) count += 1;
    });
    filters.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    if (filterStatus && announce) filterStatus.textContent = `Showing ${count} research projects.`;
  }
  if (filterGroup && papers.length) {
    filterGroup.hidden = false;
    filters.forEach((button) => button.addEventListener('click', () => filterResearch(button.dataset.filter)));
  }
  function revealAnchor() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    if (target.closest('.research-list') && target.hidden) filterResearch('all', false);
    let disclosure = target.closest('details');
    while (disclosure) {
      disclosure.open = true;
      disclosure = disclosure.parentElement.closest('details');
    }
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
  revealAnchor();
  window.addEventListener('hashchange', revealAnchor);
  const navLinks = Array.from(document.querySelectorAll('.navigation a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      const section = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0].target;
      navLinks.forEach((link) => {
        if (link.hash === `#${section.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-85px 0px -60% 0px', threshold: 0 });
    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();
