/**
 * sections/projects.js — Projects Showcase (Updated with real descriptions)
 *
 * Projects are a data array. Each entry has a crazy one-liner subtitle,
 * real bullet-point descriptions, tags, and an optional GitHub link.
 */

const GITHUB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
</svg>`;

export const projects = [
  {
    id: 'nexus-mcp',
    title: 'Nexus MCP',
    subtitle: "AI doesn't just suggest — it straight up ships. 🤖",
    year: '2025',
    type: 'AI · MCP Server',
    github: 'https://github.com/SandeshTidake0408/Nexus-MCP',
    tags: ['Node.js', 'TypeScript', 'MCP Protocol', 'Claude AI'],
    bullets: [
      'A custom AI server that lets Claude actually run your terminal, edit code, and ship features instead of just giving you copy-paste boilerplate.',
      'Built the bridge using Node.js & TypeScript so the AI has direct, sandboxed access to file I/O and Git ops. No cap, it writes code for me.',
      'Wrote 15+ custom tools so Claude can autonomously run test suites and debug on its own without me holding its hand.',
      'Cut down repetitive setup time by 70%. I just type a prompt, and it builds the scaffold.',
    ],
  },
  {
    id: 'markme',
    title: 'MarkMe',
    subtitle: "No proxies allowed. Location doesn't lie. 📍",
    year: '2023',
    type: 'Full-Stack Web App',
    github: 'https://github.com/SandeshTidake0408/MarkMe',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'SCSS'],
    bullets: [
      'A location-based attendance tracking web app that literally prevents people from faking their attendance using proxy.',
      "Built the backend rock-solid with Node.js, Express, and MongoDB, topped off with JWT auth so people can't mess with the sessions.",
      "Hooked up real-time geolocation — if you aren't actually in the class radius, you ain't getting marked present.",
      'Automated the boring spreadsheet stuff. One click and the Excel report generates itself, saving 80% of manual data entry time.',
    ],
  },
  {
    id: 'talkverse',
    title: 'TalkVerse',
    subtitle: 'Real-time. Dark mode on. Vibes absolutely immaculate. 💬',
    year: '2023',
    type: 'Real-Time Chat App',
    github: 'https://github.com/SandeshTidake0408/Talk-Verse---Chat-Application',
    tags: ['React', 'Firebase', 'Redux Toolkit', 'Tailwind CSS'],
    bullets: [
      'A real-time chat app with dark mode, instant messaging, and image sharing — basically the group chat of your dreams.',
      "Slapped React and Firebase together so messages sync instantly. No refreshing the page like it's 2012.",
      'Wired up Redux Toolkit & Persist so your chats stay exactly where you left them, even if your Wi-Fi randomly drops.',
      'Styled the whole thing with Tailwind CSS because nobody has time to write raw CSS for a responsive layout anymore.',
    ],
  },
  {
    id: 'docvault',
    title: 'DocVault',
    subtitle: 'It started with Figma and a dream. Still lives rent-free in my portfolio. ✦',
    year: '2021',
    type: 'UI/UX Design · Figma',
    github: null,
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Design System'],
    bullets: [
      'A complete UI/UX concept and interactive prototype for a document management system, designed top-to-bottom in Figma.',
      'Made sure the typography, layout grids, and color tokens were pixel-perfect because aesthetics actually matter.',
      'Built out the interactive flows for uploading, searching, and sharing so it feels like a real app, not just static JPEGs.',
      'Handed off 40+ responsive screens ready for devs to actually build without asking "what padding is this?"',
    ],
  },
];

function projectCardHTML(project, index, arr) {
  const isLast = index === arr.length - 1;
  const githubLink = project.github
    ? `<a href="${project.github}" class="project-github arrow_rot" target="_blank" rel="noopener noreferrer">GitHub ${GITHUB_SVG}</a>`
    : `<span class="project-github--design">Design Only</span>`;

  return `
    <div class="project-item${isLast ? ' project-item--last' : ''}">
      <div class="project-title-row">
        <span class="project-type">${project.type}</span>
        <div class="project-actions">
          <span class="project-year">${project.year}</span>
          ${githubLink}
        </div>
      </div>
      <h2 class="project-name">${project.title}</h2>
      <p class="project-subtitle">${project.subtitle}</p>
      <ul class="project-bullets">
        <li>${project.bullets[0]}</li>
        <div class="bullets-extra">
          ${project.bullets
            .slice(1)
            .map((b) => `<li>${b}</li>`)
            .join('\n          ')}
        </div>
      </ul>
      <button class="read-more-btn">Read more ↓</button>
      <div class="project-tags">
        ${project.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

export const projectsHTML = `
  <div id="second_page">
    <div class="section-label">Work</div>
    <h2 class="section-title">Things I've <span class="gradient-text">actually built.</span></h2>
    ${projects.map((p, i, arr) => projectCardHTML(p, i, arr)).join('')}
  </div>
`;

export function mount(container) {
  container.insertAdjacentHTML('beforeend', projectsHTML);

  const btns = container.querySelectorAll('.read-more-btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const extraInfo = e.target.previousElementSibling.querySelector('.bullets-extra');
      if (extraInfo.classList.contains('expanded')) {
        extraInfo.classList.remove('expanded');
        e.target.innerText = 'Read more ↓';
      } else {
        extraInfo.classList.add('expanded');
        e.target.innerText = 'Read less ↑';
      }
    });
  });
}
