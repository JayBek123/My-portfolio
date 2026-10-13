import profileImage from '../assets/profile-ceremony.png'
import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import { siteContent } from '../data/siteContent'

function Home() {
  const { role, email, hero, heroStats, homeFocus, name } = siteContent

  return (
    <main>
      <HeroSection
        name={name}
        role={role}
        email={email}
        profileImage={profileImage}
        hero={hero}
        heroStats={heroStats}
      />
      <section className="home-focus" aria-labelledby="home-focus-title">
        <div className="section-heading">
          <p className="section-index">A quick introduction</p>
          <div>
            <h2 id="home-focus-title">The problems I like to work on.</h2>
            <p>I’m interested in software that makes everyday tasks easier to understand, organize, and complete.</p>
          </div>
        </div>
        <div className="focus-grid">
          {homeFocus.map((item, index) => (
            <article className="focus-item" key={item.title}>
              <span className="project-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="home-links">
          <Link className="primary-action" to="/work">Explore selected work <span aria-hidden="true">↗</span></Link>
          <Link className="text-link" to="/about">More about me <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  )
}

export default Home
