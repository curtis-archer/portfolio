import './CompetitiveIntelligencePage.css'
import './DataVisualizationsPage.css'

const TEAM = [
  'Jeremy Biron',
  'Katan Patel',
  'Ravi Jaswali',
  'Victor Ojukwu',
]

const ASSET = '/assets/Data-visualizations'
const HEART = `${ASSET}/insight-heart.svg`

export function DataVisualizationsPage() {
  return (
    <div className="page">
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">
                Data Visualization Exploration
              </h1>
              <p className="case-study-subtitle">
                2024&nbsp;&nbsp;|&nbsp;&nbsp;Jungle Scout Catalyst
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
                  <p className="case-study-label">Context</p>
                  <p className="case-study-text">
                    Competitive Intelligence is a tool that allows Amazon Sellers
                    to gain insights on their competition by benchmarking their
                    products against 200 of their closest competitors on Amazon.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Description</p>
                  <p className="case-study-text">
                    I designed the overall feature, from segment creation to data
                    visualizations, focusing here on my process in developing the
                    “How the Competition Stacks Up” tabs—from initial concept
                    through iterative refinements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-gallery case-study-gallery--lead" aria-label="Project hero">
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--datavis">
                <img
                  src={`${ASSET}/Data-Vis-Header.png`}
                  alt="Competitive Intelligence overview with market share charts and competition stack-up cards"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="case-study-story">
          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Challenge</h2>
            <p className="case-study-text">
              The challenge was to create a compact visualization within a
              clickable dashboard tab that provides enough actionable detail while
              encouraging users to engage further.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Constraints</h2>
            <p className="case-study-text">
              Due to the intended user experience, the data visualizations needed
              to fit into one of five to six clickable tabs, limiting dimensions.
              We also aimed to build storytelling into the visuals, moving beyond
              simple group averages to illustrate the breadth and variety of data.
              Users should understand how they are performing at a glance,
              including data ranges and clustering. Additionally, the visual had
              to accommodate up to 200 products and visually highlight the
              user&apos;s product segment, which typically included 1-10 products.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">First iterations</h2>
            <div className="case-study-story-media case-study-story-media--first">
              <img
                src={`${ASSET}/First-Iteration.png`}
                alt="First iteration of How You Stack Up metric cards and revenue comparison chart"
                className="case-study-story-image"
                width={1600}
                height={600}
              />
            </div>
            <p className="case-study-text">
              The first visualization I tested was the box-and-whisker chart. This
              chart type is often used in data analysis to visualize the
              distribution of a large dataset and highlight outliers. Although
              this is a common graph used by data analysts, I wasn’t sure whether
              our user would understand it, and I knew I had to gather user
              feedback.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Testing</h2>
            <div className="case-study-story-media case-study-story-media--testing">
              <img
                src={`${ASSET}/Testing.png`}
                alt="Spreadsheet mockup used to test competitive intelligence chart layouts"
                className="case-study-story-image"
                width={1600}
                height={924}
              />
            </div>
            <p className="case-study-text">
              To evaluate user comprehension, I did not show prototypes with only
              placeholder data; it was important to observe reactions to relevant,
              real data and assess correct interpretation. I conducted eight
              semi-structured 30-minute interviews, presenting Excel-based
              prototypes using participants&apos; actual products and competitors.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Key Insights</h2>
            <div className="case-study-insights">
              <div className="case-study-insight">
                <div className="case-study-insight-dots" aria-hidden="true">
                  <span className="case-study-insight-dot case-study-insight-dot--alert" />
                  {Array.from({ length: 7 }, (_, i) => (
                    <span key={i} className="case-study-insight-dot" />
                  ))}
                </div>
                <p className="case-study-text">
                  Only <strong>one</strong> out of eight users correctly
                  interpreted the box-and-whisker chart, indicating it is not an
                  ideal choice for our audience.
                </p>
              </div>
              <div className="case-study-insight">
                <div className="case-study-insight-hearts" aria-hidden="true">
                  {Array.from({ length: 8 }, (_, i) => (
                    <span key={i} className="case-study-insight-heart">
                      <img src={HEART} alt="" width={12} height={13} />
                    </span>
                  ))}
                </div>
                <p className="case-study-text">
                  After the explanation, users expressed interest in the chart
                  and appreciated that, at a glance, it allows them to understand
                  the market&apos;s makeup.
                </p>
              </div>
            </div>
            <p className="case-study-text">
              With the test results in mind, I considered several ways forward:
              continuing to develop the box-and-whisker chart with added
              onboarding, simplifying the tab’s design, or iterating to find an
              alternative visualization that could bridge the gap between
              complexity and ease of understanding.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Continued Iteration</h2>
            <div className="case-study-story-media case-study-story-media--more">
              <img
                src={`${ASSET}/More-Iterations.png`}
                alt="Grid of metric card iterations comparing range, bar, trend, and distribution styles"
                className="case-study-story-image"
                width={1600}
                height={1138}
              />
            </div>
            <p className="case-study-text">
              After reevaluating, I explored simpler concepts, comparing user
              performance to segment averages or medians, but I also developed a
              new approach. While explaining the box-and-whisker chart, I drew a
              horizontal line with dots at each end to represent the highest- and
              lowest-revenue products. I then added other dots near both ends,
              with a cluster in the center indicating where most products were
              positioned in the market.
            </p>
            <p className="case-study-text">
              I recognized that this method resembled a scatter plot, which could
              offer a simpler, more accessible solution.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">
              Improving Clarity Even Further
            </h2>
            <div className="case-study-story-media case-study-story-media--hover">
              <img
                src={`${ASSET}/Hover-State.png`}
                alt="Before and after hover tooltips showing ASIN versus product name and thumbnail"
                className="case-study-story-image"
                width={1600}
                height={592}
              />
            </div>
            <p className="case-study-text">
              After we started building and testing the new single-axis scatter
              plot, we learned something interesting. Our hover interaction was
              defaulting to showing a product’s ASIN* but our customers don’t know
              their own products ASINs let alone their competitor’s. This makes
              it much harder for them to recognize and remember competing products
              and would require the customer to take further steps to identify any
              product of interest.
            </p>
            <p className="case-study-text">
              After seeing this feedback, I brought it to the engineering team. I
              convinced them of the value of including every product’s image,
              which would make it much easier for users to identify and recognize
              competitor products.
            </p>
            <p className="case-study-text">
              *An ASIN is a unique ID every product has on Amazon. We defaulted
              to this in the past due to unreliable product names.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Final Deliverable</h2>
            <div className="case-study-story-stack">
              <div className="case-study-story-media case-study-story-media--hover">
                <img
                  src={`${ASSET}/Final%201.png`}
                  alt="Final competition stack-up cards with product hover tooltip"
                  className="case-study-story-image"
                  width={1600}
                  height={592}
                />
              </div>
              <div className="case-study-story-media case-study-story-media--hover">
                <img
                  src={`${ASSET}/Final%202.png`}
                  alt="Final How the Competition Stacks Up cards with scatter plot controls"
                  className="case-study-story-image"
                  width={1600}
                  height={592}
                />
              </div>
              <div className="case-study-story-media case-study-story-media--final">
                <img
                  src={`${ASSET}/Final%203.png`}
                  alt="Final Competitive Intelligence dashboard with market share over time"
                  className="case-study-story-image"
                  width={1600}
                  height={1349}
                />
              </div>
            </div>
            <p className="case-study-text">
              The final design included six tiles, each focused on a distinct data
              point with an individual scatter plot. Every product in the segment
              was included, with user products highlighted in orange and
              competitors in grey, to emphasize user performance. Hovering over
              any dot revealed a tooltip with the product image, metric, and
              options to see actions or learn more.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Takeaway &amp; Reflection</h2>
            <p className="case-study-text">
              This project reinforced two important considerations.
            </p>
            <p className="case-study-text">
              First, understand your user’s technical proficiency. While users
              seek data analysis, Jungle Scout primarily supports Amazon Sellers
              with small businesses. This means they may not have years of
              experience in data analysis. Understanding the user&apos;s background
              and avoiding technical assumptions are essential.
            </p>
            <p className="case-study-text">
              Second, question your assumptions and standard practices. If I
              hadn’t pushed back on our standard practice of using ASINs instead
              of showing the product image with its title, we would never have
              changed the experience. We would have maintained a subpar experience
              instead of pushing it forward.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
