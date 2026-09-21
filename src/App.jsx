import { useState } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'

const name = "Welcome to John's Portfolio"
const role = 'Computer Science & Engineering Student'
const summary =
  'I am a driven student developer focused on software engineering, artificial intelligence, and creating practical digital solutions that solve real-world problems.'

const education = [
  { label: 'Degree', value: 'BSc. Computer Science and Engineering' },
  { label: 'Institution', value: 'University of Science and Technology' },
  { label: 'Level', value: 'Level 300' },
]

const skills = ['Python', 'C++', 'Web Development', 'Databases', 'Mobile App Development', 'AI']

const projects = [
  {
    title: 'SmartQueue System',
    description:
      'A virtual queue platform designed to improve service flow and reduce long waiting times in academic and administrative settings.',
  },
  {
    title: 'Student Timetable System',
    description:
      'A scheduling application built to help students organize study and class routines more efficiently and clearly.',
  },
  {
    title: 'Practical Tech Development',
    description:
      'A focus on building meaningful solutions through software, with a preference for tools that solve everyday challenges.',
  },
]

const experience = [
  'Software development and problem-solving with a strong interest in practical digital solutions.',
  'Collaborative project work involving teamwork, planning, and implementation.',
  'Focused learning in AI, databases, web technologies, and student-oriented systems.',
]

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    if (activePage === 'projects') {
      return (
        <main className="page-shell">
          <section className="module page-header">
            <p className="section-tag">Projects</p>
            <h3>Selected work</h3>
          </section>

          <section className="module project-grid compact-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </section>
        </main>
      )
    }

    if (activePage === 'resume') {
      return (
        <main className="page-shell resume-shell">
          <section className="module resume-header">
            <div>
              <p className="section-tag">Resume</p>
              <h3>{name}</h3>
            </div>
            <div className="resume-meta">
              <span>{role}</span>
              <a href="mailto:johnbekoe1516@gmail.com">johnbekoe1516@gmail.com</a>
            </div>
          </section>

          <div className="resume-grid">
            <section className="module resume-panel">
              <p className="section-tag">Summary</p>
              <p>{summary}</p>
            </section>

            <section className="module resume-panel">
              <p className="section-tag">Education</p>
              <div className="resume-list">
                {education.map((item) => (
                  <div key={item.label} className="resume-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="module resume-panel wide-panel">
              <p className="section-tag">Experience & focus</p>
              <ul className="bullet-list">
                {experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="module resume-panel wide-panel">
              <p className="section-tag">Skills</p>
              <div className="skill-list" aria-label="Skills">
                {skills.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </main>
      )
    }

    return (
      <main className="cv-shell">
        <section className="hero module">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio</p>
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p className="summary">{summary}</p>

            <div className="actions">
              <a className="primary-btn" href="mailto:johnbekoe1516@gmail.com">
                Email me
              </a>
              <button type="button" className="secondary-btn" onClick={() => setActivePage('projects')}>
                View projects
              </button>
            </div>
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar-wrap">
              <img src={profileImage} alt={name} className="avatar-photo" />
            </div>
            <p className="label">Student developer</p>
            <h3>Building practical solutions with purpose.</h3>
          </aside>
        </section>

        <div className="two-column">
          <section className="module info-panel">
            <p className="section-tag">Profile</p>
            <p>
              I am a motivated Computer Science and Engineering student with a strong interest in
              software development, artificial intelligence, and practical technology solutions. I
              enjoy learning by building, strengthening my skills, and preparing myself to become a
              capable software engineer who creates meaningful impact through technology.
            </p>
          </section>

          <section className="module education-panel">
            <p className="section-tag">Education</p>
            <div className="detail-list">
              {education.map((item) => (
                <div key={item.label} className="detail-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="module skill-panel">
          <p className="section-tag">Skills</p>
          <div className="skill-list" aria-label="Skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="module project-section">
          <p className="section-tag">Projects</p>

          <div className="projects">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <div className="portfolio-page">
      <header className="topbar">
        <span className="brand">{name}</span>
        <nav className="nav" aria-label="Main navigation">
          <button type="button" className={activePage === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('home')}>
            Home
          </button>
          <button type="button" className={activePage === 'projects' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('projects')}>
            Projects
          </button>
          <button type="button" className={activePage === 'resume' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('resume')}>
            Resume
          </button>
          <a href="mailto:johnbekoe1516@gmail.com">Contact</a>
        </nav>
      </header>

      {renderPage()}

      <footer className="footer">
        <div>
          <p>Let’s build something meaningful together.</p>
          <a href="mailto:johnbekoe1516@gmail.com">johnbekoe1516@gmail.com</a>
        </div>

        <div className="social-links">
          <a href="https://github.com/JayBek123" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/john-bekoe-b644522b8/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
