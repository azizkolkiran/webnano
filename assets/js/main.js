(function () {
  // Mobile nav
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Simple filter (faculty + theses)
  const input = document.querySelector('[data-filter-input]');
  const target = document.querySelector('[data-filter-target]');
  if (input && target) {
    const rows = Array.from(target.querySelectorAll('article, tr'));
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      rows.forEach((el) => {
        const text = (el.innerText || '').toLowerCase();
        el.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach((tabsEl) => {
    const tabs = Array.from(tabsEl.querySelectorAll('[data-tab]'));
    const panels = Array.from(document.querySelectorAll('[data-panel]'));
    // local panels: take siblings that match data-panel (scope by nearest container)
    const container = tabsEl.closest('.section') || document;
    const localPanels = Array.from(container.querySelectorAll('[data-panel]'));
    tabs.forEach((t) => {
      t.addEventListener('click', () => {
        const key = t.getAttribute('data-tab');
        tabs.forEach(x => x.classList.toggle('active', x === t));
        localPanels.forEach(p => p.classList.toggle('active', p.getAttribute('data-panel') === key));
      });
    });
  });
})();