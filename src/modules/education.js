/**
 * sections/education.js — Education Section
 * In full GenZ energy because grades shouldn't define you, but here they are anyway.
 */

export const educationItems = [
  {
    degree: 'B.E. Computer Engineering',
    institution: 'D.Y. Patil College of Engineering',
    location: 'Pune',
    year: '2021 – 2025',
    grade: '8.9 CGPA',
    note: 'dropped into SDE life, no cap 🎓',
  },
  {
    degree: 'HSC — Science (Class XII)',
    institution: 'SNJB College',
    location: 'Nashik',
    year: '2021',
    grade: '88%',
    note: 'peak student arc, respectfully 📈',
  },
];

function educationCardHTML(item) {
  return `
    <div class="edu-card">
      <div class="edu-top">
        <span class="edu-grade tag">${item.grade}</span>
        <span class="edu-year">${item.year}</span>
      </div>
      <h3 class="edu-degree">${item.degree}</h3>
      <p class="edu-institution">${item.institution}, <span class="edu-location">${item.location}</span></p>
      <p class="edu-note">${item.note}</p>
    </div>
  `;
}

export const educationHTML = `
  <div id="education_page">
    <div class="section-label">Education</div>
    <h2 class="section-title">Where I leveled <span class="gradient-text">up.</span></h2>
    <div class="edu-grid">
      ${educationItems.map(educationCardHTML).join('')}
    </div>
  </div>
`;

export function mount(container) {
  container.insertAdjacentHTML('beforeend', educationHTML);
}
