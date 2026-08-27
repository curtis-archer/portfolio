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
      'As Staff Product Designer, I was embedded on a sprint team, owning design and product management responsibilities, and collaborating directly with the CTO to shape the strategic vision for our enterprise product, Cobalt.',
  },
  {
    id: 'manager',
    dates: '2019 - 2025',
    title: 'UX Design Manager',
    company: 'Jungle Scout',
  },
  {
    id: 'senior',
    dates: '2018 - 2019',
    title: 'Sr. Product Designer',
    company: 'Jungle Scout',
  },
  {
    id: 'blair',
    dates: '2013 - 2018',
    title: 'UX / UI Designer',
    company: 'Blair & Co. Advertising',
  },
] as const

export function AboutPage() {
  const [openRoleId, setOpenRoleId] = useState<string | null>(ROLES[0].id)

  return (
    <div className="page">
      <Nav />
      <main className="about-page">
        <section className="about-section about-section--bio" aria-labelledby="about-heading">
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
                const description =
                  'description' in role ? role.description : undefined

                return (
                  <li key={role.id}>
                    <button
                      type="button"
                      className="about-job"
                      aria-expanded={isOpen}
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
                          {description ? (
                            <span
                              className="about-job-description"
                              hidden={!isOpen}
                            >
                              {description}
                            </span>
                          ) : null}
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
