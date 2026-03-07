/**
 * theme.js — Central Design Token System (GenZ Revamp)
 *
 * Palette: Deep dark background + Electric Purple × Cyan accent gradient.
 * To re-theme the entire site, only edit values in this file.
 */

export const theme = {
  colors: {
    background: '#07070f',
    surface: '#0e0e1c',
    surfaceAlt: 'rgba(255, 255, 255, 0.03)',
    accent: '#a855f7',
    accentSecondary: '#06b6d4',
    accentGlow: 'rgba(168, 85, 247, 0.18)',
    text: '#ede9fe',
    textMuted: 'rgba(237, 233, 254, 0.55)',
    textSubtle: 'rgba(237, 233, 254, 0.3)',
    border: 'rgba(168, 85, 247, 0.18)',
    borderHover: 'rgba(168, 85, 247, 0.5)',
    cursorBg: '#a855f7',
    cursorText: '#ffffff',
    buttonBg: 'transparent',
    buttonText: '#ede9fe',
    buttonBorder: 'rgba(168, 85, 247, 0.5)',
    buttonHoverBg: '#a855f7',
    buttonHoverText: '#ffffff',
    tagBg: 'rgba(168, 85, 247, 0.1)',
    tagText: '#c084fc',
  },
  fonts: {
    primary: '"Space Grotesk", "Poppins", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  gradients: {
    accent: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
    accentReverse: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
    glow: 'radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
  },
  spacing: {
    navPaddingX: '2.5rem',
    navPaddingY: '1.5rem',
    sectionPaddingX: '2.5rem',
  },
  sizing: {
    cursorDefault: '12px',
    cursorExpanded: '80px',
    profileImage: '260px',
  },
  transitions: {
    cursorMove: 'cubic-bezier(0.1, 1, 0.2, 1) 0.6s',
    smooth: 'all 0.3s ease',
    slow: 'all 0.6s ease',
    borderReveal: 'transform 0.5s ease',
    arrowRotate: 'rotate 0.4s ease',
    buttonFill: 'all 0.4s ease',
    imageZoom: 'transform 0.3s ease-in-out',
  },
  radii: {
    pill: '9999px',
    circle: '50%',
    card: '16px',
    tag: '6px',
  },
};

export function applyTheme() {
  const root = document.documentElement;
  const t = theme;

  // Colors
  root.style.setProperty('--clr-bg', t.colors.background);
  root.style.setProperty('--clr-surface', t.colors.surface);
  root.style.setProperty('--clr-surface-alt', t.colors.surfaceAlt);
  root.style.setProperty('--clr-accent', t.colors.accent);
  root.style.setProperty('--clr-accent-2', t.colors.accentSecondary);
  root.style.setProperty('--clr-accent-glow', t.colors.accentGlow);
  root.style.setProperty('--clr-text', t.colors.text);
  root.style.setProperty('--clr-text-muted', t.colors.textMuted);
  root.style.setProperty('--clr-text-subtle', t.colors.textSubtle);
  root.style.setProperty('--clr-border', t.colors.border);
  root.style.setProperty('--clr-border-hover', t.colors.borderHover);
  root.style.setProperty('--clr-cursor-bg', t.colors.cursorBg);
  root.style.setProperty('--clr-cursor-text', t.colors.cursorText);
  root.style.setProperty('--clr-btn-bg', t.colors.buttonBg);
  root.style.setProperty('--clr-btn-text', t.colors.buttonText);
  root.style.setProperty('--clr-btn-border', t.colors.buttonBorder);
  root.style.setProperty('--clr-btn-hover-bg', t.colors.buttonHoverBg);
  root.style.setProperty('--clr-btn-hover-text', t.colors.buttonHoverText);
  root.style.setProperty('--clr-tag-bg', t.colors.tagBg);
  root.style.setProperty('--clr-tag-text', t.colors.tagText);

  // Fonts
  root.style.setProperty('--font-primary', t.fonts.primary);
  root.style.setProperty('--font-mono', t.fonts.mono);

  // Gradients
  root.style.setProperty('--gradient-accent', t.gradients.accent);
  root.style.setProperty('--gradient-accent-rev', t.gradients.accentReverse);
  root.style.setProperty('--gradient-glow', t.gradients.glow);

  // Spacing
  root.style.setProperty('--spacing-nav-x', t.spacing.navPaddingX);
  root.style.setProperty('--spacing-nav-y', t.spacing.navPaddingY);
  root.style.setProperty('--spacing-section-x', t.spacing.sectionPaddingX);

  // Sizing
  root.style.setProperty('--size-cursor-default', t.sizing.cursorDefault);
  root.style.setProperty('--size-cursor-expanded', t.sizing.cursorExpanded);
  root.style.setProperty('--size-profile-image', t.sizing.profileImage);

  // Transitions
  root.style.setProperty('--transition-cursor', t.transitions.cursorMove);
  root.style.setProperty('--transition-smooth', t.transitions.smooth);
  root.style.setProperty('--transition-border', t.transitions.borderReveal);
  root.style.setProperty('--transition-arrow', t.transitions.arrowRotate);
  root.style.setProperty('--transition-button', t.transitions.buttonFill);
  root.style.setProperty('--transition-image-zoom', t.transitions.imageZoom);

  // Radii
  root.style.setProperty('--radius-pill', t.radii.pill);
  root.style.setProperty('--radius-circle', t.radii.circle);
  root.style.setProperty('--radius-card', t.radii.card);
  root.style.setProperty('--radius-tag', t.radii.tag);
}
