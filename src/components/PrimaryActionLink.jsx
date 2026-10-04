export function PrimaryActionLink({ email, children, className = 'primary-action' }) {
  const href = `mailto:${email}?subject=Software%20engineering%20opportunity`

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

export default PrimaryActionLink
