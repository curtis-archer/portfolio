import './Nav.css'

export function Nav() {
  return (
    <header className="nav-header">
      <nav className="nav" aria-label="Main navigation">
        <a href="/" className="nav-logo" aria-label="Home">
          <img src="/assets/logo.svg" alt="" width={31} height={20} />
        </a>
        <a href="#work" className="nav-link nav-link--active" aria-current="page">
          Work
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
      </nav>
    </header>
  )
}
