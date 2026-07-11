import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Product Design <span className="hero-title-muted">Leader</span>
        </h1>
        <div className="hero-intro">
          <p>
            Hi, I&apos;m <em className="hero-name">Curtis Archer</em>.
          </p>
          <p>
            I&apos;m a product designer who&apos;s been crafting experiences for
            over 10 years.
          </p>
        </div>
      </div>
      <div className="hero-actions">
        <a href="mailto:hello@curtisarcher.com" className="btn btn--primary">
          EMAIL ME
        </a>
        <a
          href="https://www.linkedin.com/in/curtis-archer-8b74004"
          className="btn btn--secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          LET&apos;S CONNECT
          <img src="/assets/linkedin.svg" alt="" width={24} height={24} />
        </a>
      </div>
    </section>
  )
}
