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
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus">
                <img
                  src="/assets/competitive-intelligence/CI-Full.png"
                  alt="Competitive Intelligence dashboard overview for Rotary Cutters"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--bento">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/ScatterPlot1.png"
                    alt="Scatter plot comparing product price and revenue with hover tooltip"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-media case-study-media--bento">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/ScatterPlot2.png"
                    alt="Scatter plot with product actions menu for competitive analysis"
                    className="case-study-media-image"
                  />
                </div>
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--tile">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/ProductDetails.png"
                    alt="Product Details modal showing metrics and performance chart"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-media case-study-media--tile">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/AddProducts.png"
                    alt="Add Products modal for entering ASINs and reviewing selected products"
                    className="case-study-media-image"
                  />
                </div>
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--tile">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/EmptyState.png"
                    alt="Empty state prompting users to create their first market"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-media case-study-media--tile">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/Create.png"
                    alt="Create a Market modal for selecting a seed product"
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
