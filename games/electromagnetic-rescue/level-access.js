// One-use, same-tab navigation permission. This is never a developer-mode setting.
(() => {
  const key = 'electromagnetic-rescue-next-level';
  const script = document.currentScript;
  const siteRoot = new URL('./', script.src);
  const page = target => new URL(String(target).replace(/^\/+/, ''), siteRoot);
  const level = Number(script?.dataset.level || 0);
  const path = level > 1 ? page(`level${level}.html`).pathname : '';
  const grant = target => {
    try { sessionStorage.setItem(key, JSON.stringify({ target: page(target).pathname, at: Date.now() })); } catch { /* unavailable storage */ }
  };
  const consume = target => {
    let ticket = null;
    try {
      ticket = JSON.parse(sessionStorage.getItem(key) || 'null');
      sessionStorage.removeItem(key);
    } catch { /* invalid or unavailable storage */ }
    return ticket?.target === target && Date.now() - ticket.at < 15000 && Date.now() >= ticket.at;
  };
  window.gameLevelAccess = { grant };
  if (path && !consume(path)) location.replace(siteRoot.href);
  if (path) window.addEventListener('pageshow', event => { if (event.persisted) location.replace(siteRoot.href); });
  if (!level) {
    try { sessionStorage.removeItem(key); } catch { /* unavailable storage */ }
  }

  // The developer controls are local to the current page and never persisted.
  // Free mode deliberately does not load this script.
  const held = new Set();
  const shortcut = ['Control', 'Shift', 'KeyH', 'KeyU', 'KeyI'];
  let latched = false;
  let panel;
  const codeOf = event => event.code.startsWith('Control') ? 'Control' : event.code.startsWith('Shift') ? 'Shift' : event.code;
  const mobile = () => matchMedia('(pointer: coarse) and (hover: none) and (max-width: 1024px)').matches;
  const interactiveFocus = target => {
    const element = target instanceof Element ? target : document.activeElement;
    return !!element?.closest('input, textarea, select, button, a, [contenteditable], [role="textbox"]');
  };
  const clearKeys = () => { held.clear(); latched = false; };
  const closePanel = () => { if (panel) panel.hidden = true; clearKeys(); };

  document.addEventListener('DOMContentLoaded', () => {
    panel = document.getElementById('developer-levels');
    if (!panel) {
      panel = document.createElement('section');
      panel.id = 'developer-levels';
      panel.className = 'game-developer';
      panel.setAttribute('aria-label', '开发者选关');
      panel.hidden = true;
      panel.innerHTML = '<strong>开发者选关</strong><div><button type="button" data-dev-level="1">第一关</button><button type="button" data-dev-level="2">第二关</button><button type="button" data-dev-level="3">第三关</button><button type="button" data-dev-level="4">第四关</button></div>';
      document.body.append(panel);
    }
    panel.hidden = true;
    panel.querySelectorAll('[data-dev-level]').forEach(button => button.addEventListener('click', () => {
      if (panel.hidden || mobile()) return;
      const chosen = Number(button.dataset.devLevel);
      if (chosen < 1 || chosen > 4) return;
      const target = `/level${chosen}.html`;
      grant(target);
      location.assign(page(target).href);
    }));
    document.addEventListener('click', event => {
      if (event.target instanceof Element && event.target.closest('#restart, #play-again, #retry, #start-challenge, #free-start, .home-mode')) closePanel();
    }, true);
  });

  window.addEventListener('keydown', event => {
    if (mobile() || interactiveFocus(event.target)) { clearKeys(); return; }
    const code = codeOf(event);
    if (!shortcut.includes(code)) return;
    held.add(code);
    if (held.has('Control') && held.has('Shift') && held.has('KeyH')) event.preventDefault();
    if (shortcut.every(key => held.has(key))) {
      event.preventDefault();
      if (!latched && !event.repeat && panel) {
        panel.hidden = !panel.hidden;
        latched = true;
      }
    }
  }, true);
  window.addEventListener('keyup', event => {
    held.delete(codeOf(event));
    if (!shortcut.every(key => held.has(key))) latched = false;
  }, true);
  window.addEventListener('blur', clearKeys);
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearKeys(); });
})();
