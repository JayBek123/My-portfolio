import AboutSection from '../components/sections/AboutSection'
import { siteContent } from '../data/siteContent'

function AboutPage() {
  const { about, education, skills, principles } = siteContent

  return (
    <main>
      <AboutSection about={about} education={education} skills={skills} />
      <section className="page-detail" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="section-index">How I work</p>
          <div>
            <h2 id="principles-title">A practical way of learning.</h2>
            <p>I try to make each project useful, understandable, and better with every iteration.</p>
          </div>
        </div>
        <div className="focus-grid">
          {principles.map((principle, index) => (
            <article className="focus-item" key={principle.title}>
              <span className="project-number">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage