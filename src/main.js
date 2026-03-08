/**
 * main.js — Application Entry Point
 *
 * Boot order:
 *  1. Apply design tokens from theme.js
 *  2. Mount all sections into #main
 *  3. Initialise Locomotive Scroll
 *  4. Initialise animations
 */

import { applyTheme, toggleTheme } from './theme.js';

import * as navbar from './modules/navbar.js';
import * as landing from './modules/landing.js';
import * as projects from './modules/projects.js';
import * as skills from './modules/skills.js';
import * as experience from './modules/experience.js';
import * as education from './modules/education.js';
import * as profile from './modules/profile.js';
import * as extra from './modules/extra.js';
import * as footer from './modules/footer.js';

import { init as initCursor } from './animations/cursor.js';
import { init as initLandingAnim } from './animations/landing.js';
import { init as initProjectsAnim } from './animations/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Apply Theme
  applyTheme();

  // 2. Mount all sections
  const main = document.querySelector('#main');
  navbar.mount(document.body); // Still mounts at start but outside main
  landing.mount(main);
  projects.mount(main);
  skills.mount(main);
  experience.mount(main);
  education.mount(main);
  profile.mount(main);
  extra.mount(main);
  footer.mount(main);

  // 3. Initialise Locomotive Scroll
  new LocomotiveScroll({
    el: main,
    smooth: true,
    multiplier: 1,
  });

  // 4. Initialise Animations
  initLandingAnim();
  initCursor();
  initProjectsAnim();

  // 5. Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLightMode = toggleTheme();
      themeToggle.innerText = isLightMode ? 'Dark Mode' : 'Light Mode';
    });
  }
});
