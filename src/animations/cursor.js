/**
 * animations/cursor.js — Custom Cursor Follower
 *
 * Replaces the browser default cursor with a custom white circle
 * that skews/scales in the direction of mouse movement.
 * On mobile the cursor element is hidden via CSS (no init needed).
 */

export function init() {
  const cursor = document.querySelector('#curser_circle');
  if (!cursor) return;

  let timeOut;
  let xprev = 0;
  let yprev = 0;

  window.addEventListener('mousemove', (e) => {
    clearTimeout(timeOut);

    const xscale = gsap.utils.clamp(0.9, 1.1, e.clientX - xprev);
    const yscale = gsap.utils.clamp(0.9, 1.1, e.clientY - yprev);
    xprev = e.clientX;
    yprev = e.clientY;

    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`;

    // Reset scale after mouse stops moving
    timeOut = setTimeout(() => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
    }, 100);
  });
}
