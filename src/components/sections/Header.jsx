import { Link } from 'react-router-dom'

export function Header({ name, navigation }) {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label={`${name}, home`}>
        <span className="brand-mark" aria-hidden="true">JB</span>
        <span>{name}</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={`${item.label}-${item.href}`} to={item.href}>{item.label}</Link>
        ))}
        <Link to="/contact" className="nav-contact">
          Contact <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header
