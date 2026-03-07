/**
 * animations/projects.js — Project Hover Animation (Updated)
 *
 * Since projects now show full descriptions (no floating image),
 * this module adds a subtle GSAP hover nudge to each project name
 * and manages the custom cursor expansion.
 */

export function init() {
  const cursor = document.querySelector('#curser_circle');
  const cursorLabel = cursor?.querySelector('p');

  document.querySelectorAll('.project-item').forEach((item) => {
    const name = item.querySelector('.project-name');

    item.addEventListener('mouseenter', () => {
      if (cursor) {
        cursor.style.width = 'var(--size-cursor-expanded)';
        cursor.style.height = 'var(--size-cursor-expanded)';
      }
      if (cursorLabel) cursorLabel.style.display = 'block';

      gsap.to(name, {
        x: 12,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    item.addEventListener('mouseleave', () => {
      if (cursor) {
        cursor.style.width = 'var(--size-cursor-default)';
        cursor.style.height = 'var(--size-cursor-default)';
      }
      if (cursorLabel) cursorLabel.style.display = 'none';

      gsap.to(name, {
        x: 0,
        opacity: 0.65,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  });
}
