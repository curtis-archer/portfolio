import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

export function Nav() {
  const { pathname } = useLocation()
  const isAboutActive = pathname === '/about'
  const isWorkActive =
    !isAboutActive &&
    (pathname === '/' ||
      pathname.startsWith('/competitive-intelligence') ||
      pathname.startsWith('/ai-analyst-workflows') ||
      pathname.startsWith('/checkout-redesign') ||
      pathname.startsWith('/data-visualizations'))

  return (
    <header className="nav-header">
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="nav-logo" aria-label="Home">
          <img src="/assets/logo.svg" alt="" width={31} height={20} />
        </Link>
        <Link
          to="/#work"
          className={`nav-link${isWorkActive ? ' nav-link--active' : ''}`}
          aria-current={isWorkActive ? 'page' : undefined}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={`nav-link${isAboutActive ? ' nav-link--active' : ''}`}
          aria-current={isAboutActive ? 'page' : undefined}
        >
          About
        </Link>
      </nav>
    </header>
  )
}
