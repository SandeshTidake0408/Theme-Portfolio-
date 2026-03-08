/**
 * animations/landing.js — Landing Page Text Reveal Animation
 *
 * Uses a GSAP timeline to:
 *  1. Fade the navbar down from y: 10
 *  2. Stagger-reveal all `.wrap_content` elements upward
 */

export function init() {
  const loaderText = document.getElementById('loader-text');
  const loaderCat = document.getElementById('loader-cat');
  let counter = { value: 0 };
  let started = false;

  const startAnimation = () => {
    if (started) return;
    started = true;
    
    const tl = gsap.timeline();

    // 1. Loader counting up
    if (loaderText) {
      tl.to(['#loader-cat', loaderText], {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
      .to(counter, {
        value: 100,
        duration: 1.0,
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
        onComplete: () => {
          const loader = document.getElementById('loader');
          if (loader) loader.style.display = 'none';
        }
      });
    }

    // 2. Landing animation
    // We animate TO the final state to be safer
    tl.fromTo('#navbar', 
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'expo.inOut' },
      "-=0.3"
    ).to('.wrap_content', {
      y: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      duration: 1.5,
      stagger: 0.1,
    });
  };

  // Wait for GIF to load or fallback after 1 second
  if (loaderCat && !loaderCat.complete) {
    loaderCat.addEventListener('load', startAnimation);
    // Safety fallback
    setTimeout(startAnimation, 1500); 
  } else {
    startAnimation();
  }
}
