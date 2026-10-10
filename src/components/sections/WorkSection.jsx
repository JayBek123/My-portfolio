import { Link } from 'react-router-dom'
import ProjectArtwork from '../ProjectArtwork'

export function WorkSection({ projects }) {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-index">01 <span>/</span> Selected work</p>
        <div>
          <h2 id="work-title">Problems worth solving.</h2>
          <p>Small snapshots of what I like to build: practical, people-first software.</p>
        </div>
      </div>
      <div className="project-gallery">
        {projects.map((project, index) => {
          const projectPath = project.title.toLowerCase().replace(/\s+/g, '-')

          return (
            <article className="project-card" key={project.title}>
              <ProjectArtwork index={index + 1} title={project.title} />
              <div className="project-card-copy">
                <span className="project-card-label">Selected work <span aria-hidden="true">/</span> 0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags" aria-label="Project focus">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <Link to={`/project/${projectPath}`} className="project-card-link">
                  View project <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WorkSection
