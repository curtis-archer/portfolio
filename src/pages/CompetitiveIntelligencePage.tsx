import { Nav } from '../components/Nav'
import './CompetitiveIntelligencePage.css'

const TEAM = [
  'Jeremy Biron',
  'Katan Patel',
  'Ravi Jaswali',
  'Victor Ojukwu',
]

export function CompetitiveIntelligencePage() {
  return (
    <div className="page">
      <Nav />
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">Competitive Intelligence</h1>
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
                    Competitive Intelligence is a tool that brings together all of
                    Jungle Scout Catalyst&apos;s data into a single feature and
                    workflow.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Context</p>
                  <p className="case-study-text">
                    I designed the feature to reduce the steps it takes for users to
                    get insights by identifying common workflows, automating steps
                    where possible, and using clear data visualizations and
                    progressive disclosure to tell the data&apos;s story and
                    encourage customers to dig deeper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-gallery" aria-label="Project visuals">
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--hero">
              <div className="case-study-media case-study-media--hero">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/ci-large.png"
                    srcSet="/assets/competitive-intelligence/ci-large.png 1x, /assets/competitive-intelligence/Ci-large2x.png 2x"
                    alt="Competitive Intelligence dashboard overview for Rotary Cutters"
                    className="case-study-media-image"
                  />
                </div>
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--bento">
              <div className="case-study-media case-study-media--bento">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/scatterplot.png"
                    alt="Competitive Intelligence scatter plot comparing price and revenue across products"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-bento-right">
                <div className="case-study-bento-column">
                  <div className="case-study-media" aria-hidden="true" />
                </div>
                <div className="case-study-bento-column case-study-bento-column--stack">
                  <div className="case-study-media case-study-media--tile">
                    <div className="case-study-media-frame">
                      <img
                        src="/assets/competitive-intelligence/Create-Market.png"
                        alt="Create a Market modal for selecting a seed product"
                        className="case-study-media-image"
                      />
                    </div>
                  </div>
                  <div className="case-study-media" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
