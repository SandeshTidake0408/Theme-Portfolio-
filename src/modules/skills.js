/**
 * sections/skills.js — Skills Section (Updated with Sandesh's actual stack)
 */

export const skillCategories = [
  {
    name: 'Frontend',
    icon: '⚡',
    skills: ['React.js', 'Next.js', 'Material UI', 'Storybook', 'GSAP'],
  },
  {
    name: 'Backend',
    icon: '⚙',
    skills: ['Node.js', 'MongoDB', 'SQL', 'Nginx'],
  },
  {
    name: 'Tooling',
    icon: '◈',
    skills: ['Webpack', 'Vite', 'Vercel', 'React Testing Library'],
  },
  {
    name: 'Languages',
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript', 'C++', 'HTML / CSS'],
  },
];

function skillCardHTML({ name, icon, skills }) {
  return `
    <div class="skill-card">
      <div class="skill-card-header">
        <span class="skill-icon">${icon}</span>
        <h4 class="skill-category">${name}</h4>
      </div>
      <ul class="skill-list">
        ${skills.map((s) => `<li class="skill-tag">${s}</li>`).join('\n        ')}
      </ul>
    </div>
  `;
}

export const skillsHTML = `
  <div id="skills_page">
    <div class="section-label">Skills &amp; Stack</div>
    <h2 class="section-title">I build with the <span class="gradient-text">right tools.</span></h2>
    <div class="skills-grid">
      ${skillCategories.map(skillCardHTML).join('')}
    </div>
  </div>
`;

export function mount(container) {
  container.insertAdjacentHTML('beforeend', skillsHTML);
}
