export function Footer({ email, name, location, socialLinks }) {
  return (
    <footer className="site-footer">
      <a className="footer-email" href={`mailto:${email}`}>{email}</a>
      <p>Designed and built by {name} <span>·</span> {location}</p>
      <div className="social-links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            {link.label} ↗
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
