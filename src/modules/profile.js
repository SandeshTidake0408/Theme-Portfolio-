/**
 * sections/profile.js — Profile / About Me Section (Revamped)
 */

export const profileHTML = `
  <div id="profile_page">
    <div class="image" role="img" aria-label="Photo of Sandesh Tidake"></div>
    <div class="description">
      <h5 class="section-label">(About Me)</h5>
      <p>
        Hey — I'm <strong>Sandesh</strong>, a Software Engineer with a designer's eye. I care deeply
        about the intersection of clean code and beautiful UI. I've shipped products people
        actually enjoy using — from full-stack web apps to polished design systems.
      </p>
      <p>
        When I'm not writing code or pushing pixels, I'm rewatching Lost In Space for the 3rd time
        or losing ranked games. I believe that great software should feel as good as it works.
      </p>
      <a href="mailto:sandeshtidake37@gmail.com" class="connect_button">Let's Talk →</a>
    </div>
  </div>
`;

export function mount(container) {
  container.insertAdjacentHTML('beforeend', profileHTML);
}
