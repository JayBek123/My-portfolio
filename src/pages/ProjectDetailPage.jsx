import { Link, useParams } from 'react-router-dom'
import { siteContent } from '../data/siteContent'

function ProjectDetailPage() {
  const { projectName } = useParams()
  const project = siteContent.projects.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === projectName,
  )

  if (!project) {
    return (
      <main>
        <section className="work-section" aria-labelledby="project-not-found-title">
          <div className="section-heading">
            <p className="section-index">Project</p>
            <div>
              <h2 id="project-not-found-title">Project not found.</h2>
              <p>That project could not be located.</p>
            </div>
          </div>
          <Link to="/work" className="primary-action">Back to all projects <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section className="work-section" aria-labelledby="project-detail-title">
        <div className="section-heading">
          <p className="section-index">01 <span>/</span> Selected work</p>
          <div>
            <h2 id="project-detail-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>

        <div className="project-list">
          <article className="project-row" key={project.title}>
            <span className="project-number">01</span>
            <h3>{project.title}</h3>
            <p>{project.detail}</p>
            <span className="project-arrow" aria-hidden="true">↗</span>
          </article>
        </div>

        <div className="about-band" style={{ marginTop: '2rem' }}>
          <div className="about-inner">
            <p className="section-index">02 <span>/</span> Outcome</p>
            <div className="about-content">
              <h2>Why it matters.</h2>
              <p>{project.outcome}</p>
              <div className="skills-block">
                <p className="skills-label">Project focus</p>
                <ul className="skill-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Link to="/work" className="primary-action" style={{ marginTop: '2rem' }}>Back to all projects <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}

export default ProjectDetailPage
