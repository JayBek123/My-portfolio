import { Link, useParams } from 'react-router-dom'
import ProjectArtwork from '../components/ProjectArtwork'
import { siteContent } from '../data/siteContent'

function ProjectDetailPage() {
  const { projectName } = useParams()
  const project = siteContent.projects.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === projectName,
  )
  const projectIndex = siteContent.projects.indexOf(project) + 1

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

        <div className="project-case-study">
          <ProjectArtwork index={projectIndex} title={project.title} />
          <div className="project-case-copy">
            <div>
              <p className="project-card-label">Project overview</p>
              <p>{project.detail}</p>
            </div>
          </div>
        </div>

        <div className="about-band project-outcome-band">
          <div className="about-inner">
            <p className="section-index">02 <span>/</span> Intended outcome</p>
            <div className="about-content">
              <h2>What it aims to improve.</h2>
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

        <Link to="/work" className="primary-action project-back-link">Back to all projects <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  )
}

export default ProjectDetailPage
