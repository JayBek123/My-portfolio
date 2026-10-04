import PrimaryActionLink from '../PrimaryActionLink'

export function ContactSection({ email, contact }) {
  return (
    <section className="contact-strip" aria-labelledby="contact-title">
      <p className="section-index">03 <span>/</span> Next step</p>
      <h2 id="contact-title">{contact.title}</h2>
      <PrimaryActionLink email={email}>
        Start a conversation <span aria-hidden="true">↗</span>
      </PrimaryActionLink>
    </section>
  )
}

export default ContactSection
