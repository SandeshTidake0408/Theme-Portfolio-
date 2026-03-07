/**
 * animations/landing.js — Landing Page Text Reveal Animation
 *
 * Uses a GSAP timeline to:
 *  1. Fade the navbar down from y: 10
 *  2. Stagger-reveal all `.wrap_content` elements upward
 */

export function init() {
  const tl = gsap.timeline();
  const loaderText = document.getElementById('loader-text');
  const loaderCat = document.getElementById('loader-cat');
  let counter = { value: 0 };

  const startAnimation = () => {
    if (!loaderText) return;

    tl.to(['#loader-cat', loaderText], {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
    .to(counter, {
      value: 100,
      duration: 1.5,
      ease: 'power3.inOut',
      onUpdate: () => {
        loaderText.innerText = Math.round(counter.value) + '%';
      },
    })
    .to('#loader', {
      y: '-100%',
      duration: 1,
      ease: 'expo.inOut',
      delay: 0.2,
    });

    // 2. Landing animation
    tl.from('#navbar', {
      y: 10,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.inOut',
    }, "-=0.3").to('.wrap_content', {
      y: 0,
      ease: 'expo.inOut',
      delay: -1,
      duration: 2,
      stagger: 0.1,
    });
  };

  // Wait for GIF to load or fallback after 1 second
  if (loaderCat && !loaderCat.complete) {
    loaderCat.onload = startAnimation;
    setTimeout(startAnimation, 1000); // Fallback
  } else {
    startAnimation();
  }
}
