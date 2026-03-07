/**
 * animations/loader.js — Intro Loading Screen Animation
 *
 * Shows a full-screen loader with a counter (0 → 100) and a progress bar.
 * Returns a Promise that resolves after the loader slides off screen.
 * Call `await initLoader()` in main.js before initialising other animations.
 */

export function init() {
  return new Promise((resolve) => {
    const loader = document.querySelector('#loader');
    const counter = document.querySelector('#loader-count');
    const barFill = document.querySelector('#loader-bar-fill');

    // If loader elements aren't in the DOM, resolve immediately
    if (!loader || !counter || !barFill) {
      resolve();
      return;
    }

    const obj = { count: 0 };

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        // Pause briefly at 100%, then slide loader panel up
        gsap.to(loader, {
          yPercent: -100,
          duration: 1,
          delay: 0.3,
          ease: 'expo.inOut',
          onComplete: () => {
            loader.style.display = 'none';
            resolve();
          },
        });
      },
    });

    tl
      // Reveal the loader name letters with stagger
      .from('.loader-name .loader-letter', {
        y: 60,
        opacity: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: 'expo.out',
      })
      // Count 0 → 100 and fill the progress bar simultaneously
      .to(
        obj,
        {
          count: 100,
          duration: 2.2,
          ease: 'power3.out',
          onUpdate() {
            const val = Math.floor(obj.count);
            counter.textContent = val;
            barFill.style.width = `${val}%`;
          },
        },
        '-=0.4'
      );
  });
}
