import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import { Nav } from '../components/Nav'
import './CompetitiveIntelligencePage.css'

const TEAM = [
  'Jeremy Biron',
  'Katan Patel',
  'Ravi Jaswali',
  'Victor Ojukwu',
]

export function CheckoutRedesignPage() {
  return (
    <div className="page">
      <Nav />
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">Checkout Redesign</h1>
              <p className="case-study-subtitle">
                New Feature Design&nbsp;&nbsp;|&nbsp;&nbsp;Jungle Scout Catalyst
              </p>
            </div>

            <div className="case-study-details">
              <aside className="case-study-meta">
                <div className="case-study-block">
                  <p className="case-study-label">My Role</p>
                  <p className="case-study-text">Lead Product Designer</p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Team</p>
                  <ul className="case-study-team">
                    {TEAM.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Date</p>
                  <p className="case-study-text">2024</p>
                </div>
              </aside>

              <div className="case-study-copy">
                <div className="case-study-block">
                  <p className="case-study-label">Background</p>
                  <p className="case-study-text">
                    Jungle Scout Catalyst provides marketplace intelligence to help
                    Amazon sellers make well-informed decisions about product
                    innovation or listing SEO.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Description</p>
                  <p className="case-study-text">
                    Checkout Redesign is a redesign of the purchase flow that
                    simplifies how customers complete subscription and plan
                    upgrades across Jungle Scout Catalyst.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Context</p>
                  <p className="case-study-text">
                    I redesigned the checkout experience to reduce friction by
                    clarifying plan options, surfacing key decision criteria at the
                    right moments, and streamlining the steps from selection to
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-gallery" aria-label="Project visuals">
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--checkout">
                <BeforeAfterSlider
                  beforeSrc="/assets/checkout/Before.png"
                  afterSrc="/assets/checkout/After.png"
                  beforeAlt="Checkout before redesign"
                  afterAlt="Checkout after redesign"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--tile">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/checkout/Step1.png"
                    alt="Checkout redesign step 1 create account"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-media case-study-media--tile">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/checkout/Step2.png"
                    alt="Checkout redesign step 2 payment details"
                    className="case-study-media-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
