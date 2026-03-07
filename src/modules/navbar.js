/**
 * sections/navbar.js — Navbar Section
 */

export const navbarHTML = `
  <div id="navbar" data-scroll data-scroll-sticky data-scroll-target="#main">
    <a href="/">Sandesh Tidake</a>
    <p class="bottom_border">Menu+</p>
  </div>
`;

/**
 * Mounts the navbar into the beginning of the provided container element.
 * @param {HTMLElement} container
 */
export function mount(container) {
  container.insertAdjacentHTML('afterbegin', navbarHTML);
}
