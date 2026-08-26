import { Nav } from '../components/Nav'
import './CompetitiveIntelligencePage.css'
import './AiAnalystWorkflowsPage.css'

const TEAM = ['John Arstingstall', 'Salim Hamed', 'Ivan Bernatovic']

const ASSET = '/assets/Ask Cobalt'

function askAsset(file: string) {
  return `${ASSET}/${encodeURIComponent(file)}`
}

export function AiAnalystWorkflowsPage() {
  return (
    <div className="page">
      <Nav />
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">Ask Cobalt</h1>
              <p className="case-study-subtitle">
                2026&nbsp;&nbsp;|&nbsp;&nbsp;Cobalt
              </p>
            </div>

            <div className="case-study-details">
              <aside className="case-study-meta">
                <div className="case-study-block">
                  <p className="case-study-label">My Role</p>
                  <p className="case-study-text">
                    Lead Product Designer
                    <br />
                    Product Manager
                  </p>
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
                  <p className="case-study-label">Timeline</p>
                  <p className="case-study-text">6 Months</p>
                </div>
              </aside>

              <div className="case-study-copy">
                <div className="case-study-block">
                  <p className="case-study-label">Background</p>
                  <p className="case-study-text">
                    Cobalt is Jungle Scout’s enterprise offering. It offers
                    marketplace analysis on a larger scale for large brands and
                    retailers selling on Amazon
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Description</p>
                  <p className="case-study-text">
                    I led product design and product management for Cobalt&apos;s
                    transition from deterministic reports to an AI-powered,
                    conversational experience. Along the way, AI fundamentally
                    changed how I worked with engineering—from designing static
                    screens to building, testing, and refining experiences
                    directly in code.
                  </p>
                </div>

                <div
                  className="case-study-status"
                  role="status"
                  aria-label="Case study availability"
                >
                  <span className="case-study-status-pill">
                    Case Study coming soon
                  </span>
                  <span className="case-study-status-note">
                    Or available upon request
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-gallery" aria-label="Project visuals">
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--ask-hero">
                <img
                  src={askAsset('Ask-Cobalt-Hero.png')}
                  alt="Ask Cobalt chat with a completed benchmarking report for BIC vs ballpoint pens"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--tile">
                <img
                  src={askAsset('Floating Button.png')}
                  alt="Ask Cobalt floating action button over a category insights dashboard"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
              <div className="case-study-media case-study-media--tile">
                <img
                  src={askAsset('Pop Up Chat.png')}
                  alt="Ask Cobalt pop-up chat with suggested prompts for baseball gloves"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--tile">
                <img
                  src={askAsset('Empty Chat Page.png')}
                  alt="Ask Cobalt empty chat home with report starter cards"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
              <div className="case-study-media case-study-media--tile">
                <img
                  src={askAsset('Artifacts.png')}
                  alt="Ask Cobalt Artifacts library of saved reports"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--ask-full">
                <img
                  src={askAsset('Scheduled Task.png')}
                  alt="Ask Cobalt scheduled Market Watch task with run history and setup panel"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
