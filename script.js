// Portfolio Data Loading
let portfolioData = {};

// Load portfolio data from JSON
async function loadPortfolioData() {
  try {
    const response = await fetch('./data.json');
    portfolioData = await response.json();
    initializePortfolio();
  } catch (error) {
    console.error('Error loading portfolio data:', error);
  }
}

// Initialize portfolio with data
function initializePortfolio() {
  // Apply theme colors
  applyTheme();
  
  // Render profile information
  renderHeroSection();
  renderSkills();
  renderExperience();
  renderEducation();
  
  // Add event listeners
  addEventListeners();
}

// Apply theme colors from data
function applyTheme() {
  const root = document.documentElement;
  const theme = portfolioData.theme;
  
  Object.keys(theme).forEach(key => {
    const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    root.style.setProperty(cssVar, theme[key]);
  });
}

// Render hero section with name and title
function renderHeroSection() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;
  
  heroContent.innerHTML = `
    <div>
      <h1>${portfolioData.greeting} ${portfolioData.name}</h1>
      <h2>${portfolioData.title}</h2>
      <p>${portfolioData.tagline}</p>
      <div class="stats">
        ${Object.entries(portfolioData.stats).map(([key, value]) => `
          <div class="stat-card">
            <div class="stat-number">${value}</div>
            <div class="stat-label">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
          </div>
        `).join('')}
      </div>
      <div class="hero-cta">
        <a href="#contact" class="btn">Get In Touch</a>
        <a href="${portfolioData.resumeFile}" class="btn">Download Resume</a>
      </div>
    </div>
  `;
}

// Render skills section
function renderSkills() {
  const skillsSection = document.querySelector('#skills');
  if (!skillsSection) return;
  
  let html = '<div class="skills-grid">';
  
  portfolioData.skills.forEach(category => {
    html += `
      <div class="skill-category">
        <h3>${category.category}</h3>
    `;
    
    category.items.forEach(skill => {
      html += `
        <div class="skill-item">
          <div class="skill-name">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="width: ${skill.level}%"></div>
          </div>
        </div>
      `;
    });
    
    html += '</div>';
  });
  
  html += '</div>';
  skillsSection.innerHTML = html;
}

// Render experience section
function renderExperience() {
  const experienceSection = document.querySelector('#experience');
  if (!experienceSection) return;
  
  let html = '<div class="experience-timeline">';
  
  portfolioData.experience.forEach(job => {
    html += `
      <div class="experience-item">
        <h3>${job.position}</h3>
        <div class="company">${job.company}</div>
        <div class="duration">${job.years}</div>
        <p>${job.description}</p>
      </div>
    `;
  });
  
  html += '</div>';
  experienceSection.innerHTML = html;
}

// Render education section
function renderEducation() {
  const educationSection = document.querySelector('#education');
  if (!educationSection) return;
  
  let html = '<div class="education-list">';
  
  portfolioData.education.forEach(edu => {
    html += `
      <div class="education-item">
        <h3>${edu.degree}</h3>
        <div class="institution">${edu.institution}</div>
        <div class="years">${edu.years}</div>
        <div class="score">${edu.score}</div>
      </div>
    `;
  });
  
  html += '</div>';
  educationSection.innerHTML = html;
}

// Add smooth scrolling and event listeners
function addEventListeners() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Animate skill bars on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInDown 0.6s ease-out';
      }
    });
  });
  
  document.querySelectorAll('.skill-progress').forEach(el => {
    observer.observe(el);
  });
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', loadPortfolioData);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioData, loadPortfolioData, initializePortfolio };
}
