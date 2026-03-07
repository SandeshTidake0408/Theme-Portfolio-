/**
 * animations/landing.js — Landing Page Text Reveal Animation
 *
 * Uses a GSAP timeline to:
 *  1. Fade the navbar down from y: 10
 *  2. Stagger-reveal all `.wrap_content` elements upward
 */

export function init() {
  const tl = gsap.timeline();

  tl.from('#navbar', {
    y: 10,
    opacity: 0,
    duration: 1.5,
    ease: 'expo.inOut',
  }).to('.wrap_content', {
    y: 0,
    ease: 'expo.inOut',
    delay: -1, // start slightly before navbar finishes
    duration: 2,
    stagger: 0.1, // sequential delay between each text element
  });
}
