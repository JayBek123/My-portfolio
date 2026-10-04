import ContactSection from '../components/sections/ContactSection'
import { siteContent } from '../data/siteContent'

function ContactPage() {
  const { email, contact, location, socialLinks } = siteContent

  return (
    <main>
      <ContactSection email={email} contact={contact} />
      <section className="page-detail contact-details" aria-labelledby="contact-details-title">
        <div className="section-heading">
          <p className="section-index">Get in touch</p>
          <div>
            <h2 id="contact-details-title">A good place to start.</h2>
            <p>{contact.description}</p>
          </div>
        </div>
        <div className="contact-options">
          <div>
            <span className="skills-label">Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>
            <span className="skills-label">Based in</span>
            <p>{location}</p>
          </div>
          <div>
            <span className="skills-label">Elsewhere</span>
            <div className="contact-socials">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage