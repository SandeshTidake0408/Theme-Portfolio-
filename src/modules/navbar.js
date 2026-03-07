/**
 * sections/navbar.js — Navbar Section
 */

export const navbarHTML = `
  <div id="navbar" data-scroll data-scroll-sticky data-scroll-target="#main">
    <a href="/">Sandesh Tidake</a>
    <div style="display: flex; gap: 1.5rem; align-items: center;">
      <p id="theme-toggle" class="bottom_border">Light Mode</p>
      <p class="bottom_border">Menu+</p>
    </div>
  </div>
`;

/**
 * Mounts the navbar into the beginning of the provided container element.
 * @param {HTMLElement} container
 */
export function mount(container) {
  container.insertAdjacentHTML('afterbegin', navbarHTML);
}
