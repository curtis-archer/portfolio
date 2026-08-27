import { useState } from 'react'
import { Nav } from '../components/Nav'
import './AboutPage.css'

const ROLES = [
  {
    id: 'staff',
    dates: '2025 - 2026',
    title: 'Staff Product Designer',
    company: 'Jungle Scout',
    description:
      "As Staff Product Designer, I lead design and product strategy for Cobalt's dedicated AI sprint team, partnering with the CTO to shape our AI product vision. I grounded the strategy in customer pain points and enterprise use cases, securing executive support for a dedicated implementation team. Working closely with engineering, I translated that vision into scalable AI workflows that helped drive significant improvements in close and renewal rates.",
  },
  {
    id: 'manager',
    dates: '2019 - 2025',
    title: 'UX Design Manager',
    company: 'Jungle Scout',
    description:
      "As UX Design Manager, I led a team of designers while remaining hands-on with product strategy and design. I built Jungle Scout's first design system and introduced new ways of working that accelerated product development. I designed a new enterprise product that reached $1M ARR in nine months and $10M within two years, while a checkout redesign reduced 7-day churn by 50% without impacting conversion.",
  },
  {
    id: 'senior',
    dates: '2018 - 2019',
    title: 'Sr. Product Designer',
    company: 'Jungle Scout',
    description:
      "As a Senior Product Designer, I owned end-to-end design across concept development, research, and high-fidelity execution. I designed Jungle Scout's Listing Builder, an SEO-focused tool that became one of the product's stickiest features, while leading research and usability testing to guide product decisions.",
  },
  {
    id: 'blair',
    dates: '2013 - 2018',
    title: 'UX / UI Designer',
    company: 'Blair & Co. Advertising',
    description:
      'As a UX/UI Designer, I designed and oversaw websites and digital products for the real estate industry. I created an in-house lead management system that became a recurring product offering and developed a standardized website system that accelerated development and enabled conversion optimization at scale. I also managed projects end-to-end, partnering with clients to define requirements, success metrics, and ongoing improvements.',
  },
] as const

export function AboutPage() {
  const [openRoleId, setOpenRoleId] = useState<string | null>(ROLES[0].id)

  return (
    <div className="page">
      <Nav />
      <main className="about-page">
        <section className="about-section" aria-labelledby="about-heading">
          <div className="about-layout">
            <h1 id="about-heading" className="about-heading">
              About
            </h1>

            <div className="about-photo">
              <img
                src="/assets/About/About.png"
                alt="Curtis Archer on a beach with a small dog"
                width={412}
                height={308}
              />
            </div>

            <div className="about-copy">
              <p>
                I&apos;m a product designer who&apos;s helped product
                organizations scale through strategic design leadership, from
                building design systems that accelerate engineering velocity to
                launching net-new enterprise products that reach new customer
                types.
              </p>
              <p>
                Over 10 years, I&apos;ve shaped product vision alongside CTOs,
                led cross-functional teams from discovery to delivery, and
                embedded AI-driven features that help users accomplish their
                goals.
              </p>
              <p>
                My design process has changed over the years, especially with
                the availability of AI tools; however, my design philosophy
                remains the same.
              </p>
              <p>
                <strong>
                  Design is about solving problems, not building better
                  interfaces.{' '}
                </strong>
                I believe great product design starts with a deep understanding
                of the people and problems we&apos;re solving. I focus on
                creating experiences that make complex things easier to
                understand, give people confidence to act, and evolve through
                building, testing, and iterating with real users. Ultimately,
                the best design is the solution that solves the problem so well
                that the interface gets out of the way.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-section about-section--experience"
          aria-labelledby="experience-heading"
        >
          <div className="about-layout">
            <h2 id="experience-heading" className="about-heading">
              Experience
            </h2>

            <div className="about-resume-wrap">
              <a
                className="about-resume"
                href="/assets/About/Curtis-Archer-Resume.pdf"
                download="Curtis-Archer-Resume.pdf"
              >
                Download my resume
              </a>
            </div>

            <ul className="about-jobs">
              {ROLES.map((role) => {
                const isOpen = openRoleId === role.id

                return (
                  <li key={role.id}>
                    <button
                      type="button"
                      className={`about-job${isOpen ? ' about-job--open' : ''}`}
                      aria-expanded={isOpen}
                      aria-controls={`about-job-${role.id}`}
                      onClick={() =>
                        setOpenRoleId((current) =>
                          current === role.id ? null : role.id,
                        )
                      }
                    >
                      <span className="about-job-dates">{role.dates}</span>
                      <span className="about-job-body">
                        <span className="about-job-copy">
                          <span className="about-job-title">{role.title}</span>
                          <span className="about-job-company">
                            {role.company}
                          </span>
                          <span
                            id={`about-job-${role.id}`}
                            className="about-job-collapse"
                            aria-hidden={!isOpen}
                          >
                            <span className="about-job-collapse-inner">
                              <span className="about-job-description">
                                {role.description}
                              </span>
                            </span>
                          </span>
                        </span>
                        <span
                          className={`about-job-icon${isOpen ? ' about-job-icon--open' : ''}`}
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
