/**
 * sections/experience.js — Work Experience (Updated)
 */

export const experiences = [
  {
    period: 'June 2025 — Present',
    role: 'Software Engineer',
    company: 'LogiNext Solutions',
    description:
      'Building and shipping features for logistics tech products used at scale. Working full-stack with React, Node.js and a bunch of caffeine.',
    tags: ['Full-Stack', 'React', 'Node.js'],
    isCurrent: true,
  },
  {
    period: 'Feb 2025 — June 2025',
    role: 'Software Development Intern',
    company: 'LogiNext Solutions',
    description:
      'Joined as an intern, shipped actual features, got converted to full-time. Classic intern-to-SDE arc — no cap.',
    tags: ['Intern → SDE', 'React', 'Problem Solving'],
    isCurrent: false,
  },
  {
    period: 'College',
    role: 'UI Developer & Designer',
    company: 'Eximap Nisarg (Internship)',
    description:
      'First real gig during college. Built UI components and designed interfaces — the one that started the whole dev journey.',
    tags: ['UI/UX', 'Design', 'First Job Ever'],
    isCurrent: false,
  },
];

function experienceItemHTML(exp) {
  return `
    <div class="exp-item${exp.isCurrent ? ' exp-item--current' : ''}">
      <div class="exp-period">${exp.period}</div>
      <div class="exp-body">
        <div class="exp-header">
          <h3 class="exp-role">${exp.role}</h3>
          <span class="exp-company">@ ${exp.company}</span>
          ${exp.isCurrent ? '<span class="exp-badge">● Available</span>' : ''}
        </div>
        <p class="exp-description">${exp.description}</p>
        <div class="exp-tags">
          ${exp.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

export const experienceHTML = `
  <div id="experience_page">
    <div class="section-label">Experience</div>
    <h2 class="section-title">Where I've <span class="gradient-text">shipped things.</span></h2>
    <div class="exp-list">
      ${experiences.map(experienceItemHTML).join('')}
    </div>
  </div>
`;

export function mount(container) {
  container.insertAdjacentHTML('beforeend', experienceHTML);
}
