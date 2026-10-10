import PrimaryActionLink from '../PrimaryActionLink'

export function HeroSection({ name, role, email, profileImage, hero, heroStats }) {
  return (
    <section className="hero hero-photo" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="availability-dot" /> {hero.locationLabel} <span className="eyebrow-divider">/</span> {hero.availability}
        </p>
        <p className="hero-role">{role}</p>
        <h1 id="hero-title">
          {hero.title} <span>{hero.titleAccent}</span>
        </h1>
        <p className="hero-summary">{hero.summary}</p>
        <PrimaryActionLink email={email}>
          Start a conversation <span aria-hidden="true">↗</span>
        </PrimaryActionLink>
        <div className="hero-facts" aria-label="At a glance">
          {heroStats.map((stat) => (
            <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>
          ))}
        </div>
      </div>

      <figure className="portrait-panel">
        <img src={profileImage} alt={`Portrait of ${name}`} />
      </figure>
    </section>
  )
}

export default HeroSection
