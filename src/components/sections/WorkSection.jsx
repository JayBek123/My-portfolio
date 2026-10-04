import { Link } from 'react-router-dom'

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
      <div className="project-list">
        {projects.map((project, index) => {
          const projectPath = project.title.toLowerCase().replace(/\s+/g, '-')

          return (
            <article className="project-row" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={`/project/${projectPath}`} className="primary-action">
                View project <span aria-hidden="true">↗</span>
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WorkSection
