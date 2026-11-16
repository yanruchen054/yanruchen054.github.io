// Keep links to archived sections accessible through normal URL fragments.
(() => {
  function revealArchive() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const target = id && document.getElementById(id);
    if (!target) return;
    let disclosure = target.closest('details');
    let expanded = false;
    while (disclosure) {
      if (!disclosure.open) { disclosure.open = true; expanded = true; }
      disclosure = disclosure.parentElement.closest('details');
    }
    if (expanded) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
  revealArchive();
  window.addEventListener('hashchange', revealArchive);
})();
