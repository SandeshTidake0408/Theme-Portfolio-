/**
 * sections/landing.js — Landing / Hero Section (Revamped for Software Engineer)
 */

const ARROW_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>`;

export const landingHTML = `
  <div id="landing_page">
    <div id="heading">
      <div class="hero-tag">
        <span class="hero-tag-dot"></span>
        <span class="hero-tag-text">Open to work</span>
      </div>
      <div id="wrapper">
        <h1 class="wrap_content hero-line">Software</h1>
      </div>
      <div id="wrapper">
        <h1 class="wrap_content hero-line gradient-text">Engineer.</h1>
      </div>
      <div id="wrapper">
        <p class="wrap_content hero-sub">crafting fast, beautiful digital experiences — based in India 🇮🇳</p>
      </div>
      <div class="hero-ctas">
        <div id="wrapper">
          <a href="#second_page" class="wrap_content cta-primary">View My Work ${ARROW_SVG}</a>
        </div>
        <div id="wrapper">
          <a href="mailto:sandeshtidake37@gmail.com" class="wrap_content cta-secondary">Let's Talk ${ARROW_SVG}</a>
        </div>
      </div>
    </div>
    <div id="landing_footer">
      <div id="wrapper">
        <div class="wrap_content">
          <a href="#" class="bottom_border arrow_rot">Software Eng. & UI Designer ${ARROW_SVG}</a>
        </div>
      </div>
      <div id="wrapper">
        <div class="wrap_content">
          <a href="#" class="bottom_border arrow_rot">ACES '23 Design Head ${ARROW_SVG}</a>
        </div>
      </div>
      <div id="wrapper">
        <div class="arrows">
          <img class="wrap_content arrow_move" src="./assets/arrow-up.svg" alt="Scroll Down">
          <img class="wrap_content arrow_move" src="./assets/arrow-up.svg" alt="Scroll Down">
        </div>
      </div>
    </div>
  </div>
`;

export function mount(container) {
  container.insertAdjacentHTML('beforeend', landingHTML);
}
