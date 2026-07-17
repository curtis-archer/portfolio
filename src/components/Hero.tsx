import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">
        <span className="hero-title-primary">Hello, I&apos;m Curtis.</span>
        <span className="hero-title-secondary">
          I&apos;m a <em>product designer</em> with over 10 years experience.
        </span>
      </h1>
      <div className="hero-actions">
        <a href="mailto:hello@curtisarcher.com" className="hero-btn hero-btn--primary">
          Let&apos;s chat
        </a>
        <a
          href="https://www.linkedin.com/in/curtis-archer-8b74004"
          className="hero-btn hero-btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Or let&apos;s connect online
          <img
            src="/assets/linkedin-icon.svg"
            alt=""
            width={20}
            height={20}
            className="hero-btn-icon"
          />
        </a>
      </div>
    </section>
  )
}
