export function AboutSection({ about, education, skills }) {
  return (
    <section className="about-band" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <p className="section-index">02 <span>/</span> Background</p>
        <div className="about-content">
          <h2 id="about-title">
            {about.label}<br />{about.labelSecondary}
          </h2>
          <p>{about.description}</p>
          <div className="education-list">
            {education.map((item) => (
              <div className="education-row" key={item.label}>
                <span>{item.label}</span><strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="skills-block">
            <p className="skills-label">Technologies & tools</p>
            <ul className="skill-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
