/**
 * sections/footer.js — Main Footer Section
 *
 * Social links are managed in the `socialLinks` array below.
 * To add or remove links, just edit this array.
 */

export const socialLinks = [
  { label: 'Github', href: 'https://github.com/SandeshTidake0408' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/sandesh-tidake/' },
  {
    label: 'Instagram',
    href: 'https://instagram.com/its_tidakesandesh0408?igshid=MzMyNGUyNmU2YQ==',
  },
  { label: 'Twitter', href: 'https://twitter.com/SandeshT0408' },
];

function socialLinkHTML(link) {
  return `<a href="${link.href}" class="bottom_border" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
}

export const footerHTML = `
  <div id="main_footer">
    <div class="left">
      <p id="copyright_year">©</p>
      <p><time class="current_time"></time> IST</p>
    </div>
    <div class="right">
      ${socialLinks.map(socialLinkHTML).join('\n      ')}
    </div>
  </div>
`;

/**
 * Mounts the footer section and starts the live clock.
 * @param {HTMLElement} container
 */
export function mount(container) {
  container.insertAdjacentHTML('beforeend', footerHTML);
  initClock();
  initCopyrightYear();
}

function initClock() {
  const timeEl = document.querySelector('.current_time');
  if (!timeEl) return;
  const update = () => {
    timeEl.innerHTML = new Date().toLocaleTimeString();
  };
  update(); // set immediately, don't wait 1 second
  setInterval(update, 1000);
}

function initCopyrightYear() {
  const yearEl = document.querySelector('#copyright_year');
  if (!yearEl) return;
  yearEl.textContent = `${new Date().getFullYear()} ©`;
}
