// The page uses native links and disclosure controls so all content remains
// accessible without JavaScript. Expand an archive when directly linked to it.
(() => {
  function revealAnchor() {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    let disclosure = target.closest("details");
    while (disclosure) {
      disclosure.open = true;
      disclosure = disclosure.parentElement.closest("details");
    }
  }
  revealAnchor();
  window.addEventListener("hashchange", revealAnchor);
})();
