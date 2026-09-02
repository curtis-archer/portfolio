import { BeforeAfterSlider } from '../components/BeforeAfterSlider'
import './CompetitiveIntelligencePage.css'
import './DataVisualizationsPage.css'

const ASSET = '/assets/Design System'

function dsAsset(file: string) {
  return encodeURI(`${ASSET}/${file}`)
}

export function DesignSystemPage() {
  return (
    <div className="page">
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">Design System</h1>
              <p className="case-study-subtitle">
                2023&nbsp;&nbsp;|&nbsp;&nbsp;Jungle Scout Catalyst
              </p>
            </div>

            <div className="case-study-details">
              <aside className="case-study-meta">
                <div className="case-study-block">
                  <p className="case-study-label">My Role</p>
                  <p className="case-study-text">Product Design Manager</p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Date</p>
                  <p className="case-study-text">2023</p>
                </div>
              </aside>

              <div className="case-study-copy">
                <div className="case-study-block">
                  <p className="case-study-label">Background</p>
                  <p className="case-study-text">
                    Jungle Scout Catalyst provides marketplace intelligence to
                    help Amazon sellers make well-informed decisions about
                    product innovation or listing SEO.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Description</p>
                  <p className="case-study-text">
                    Jungle Scout was originally built without a single design
                    system. This led to an inconsistent user experience and
                    made it very hard to improve the overall polish that our
                    app so direly needed. As a Product Manager, I led the
                    design of an updated visual style and worked closely with
                    engineers to create an implementation and adoption plan,
                    ensuring the work was prioritized and that engineers
                    actually used the newly built components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-gallery" aria-label="Before and after">
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--design-system">
                <BeforeAfterSlider
                  className="before-after--natural"
                  beforeSrc={dsAsset('Product Tracker Before.png')}
                  afterSrc={dsAsset('Product Tacker After.png')}
                  beforeAlt="Product Tracker before the design system"
                  afterAlt="Product Tracker after the design system"
                  ariaLabel="Compare Product Tracker before and after the design system"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--design-system">
                <BeforeAfterSlider
                  className="before-after--natural"
                  beforeSrc={dsAsset('Profit before.png')}
                  afterSrc={dsAsset('Profit after.png')}
                  beforeAlt="Profit Overview before the design system"
                  afterAlt="Profit Overview after the design system"
                  ariaLabel="Compare Profit Overview before and after the design system"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--design-system">
                <BeforeAfterSlider
                  className="before-after--natural"
                  beforeSrc={dsAsset('Extension before.png')}
                  afterSrc={dsAsset('Extension after.png')}
                  beforeAlt="Jungle Scout extension before the design system"
                  afterAlt="Jungle Scout extension after the design system"
                  ariaLabel="Compare the Jungle Scout extension before and after the design system"
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
