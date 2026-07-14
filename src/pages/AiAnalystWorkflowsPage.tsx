import { Nav } from '../components/Nav'
import './CompetitiveIntelligencePage.css'

const TEAM = [
  'John Arstingstall',
  'Salim Hamed',
  'Ivan Bernatovic',
]

export function AiAnalystWorkflowsPage() {
  return (
    <div className="page">
      <Nav />
      <article className="case-study">
        <header className="case-study-intro">
          <div className="case-study-intro-inner">
            <div className="case-study-header">
              <h1 className="case-study-title">AI Analyst Workflows</h1>
              <p className="case-study-subtitle">
                Concept Development&nbsp;&nbsp;|&nbsp;&nbsp;Cobalt
              </p>
            </div>

            <div className="case-study-details">
              <aside className="case-study-meta">
                <div className="case-study-block">
                  <p className="case-study-label">My Role</p>
                  <p className="case-study-text">
                    Lead Product Designer
                    <br />
                    Planning &amp; Prioritization
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
                  <p className="case-study-label">Date</p>
                  <p className="case-study-text">2026</p>
                </div>
              </aside>

              <div className="case-study-copy">
                <div className="case-study-block">
                  <p className="case-study-label">Background</p>
                  <p className="case-study-text">
                    Cobalt is Jungle Scout’s enterprise offering. It provides
                    marketplace analysis at scale for large brands and retailers
                    selling on Amazon.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Description</p>
                  <p className="case-study-text">
                    AI Analyst Workflows was the first AI offering inside Cobalt. It
                    builds reports and provides analysis, saving users hours each
                    week.
                  </p>
                </div>

                <div className="case-study-block">
                  <p className="case-study-label">Context</p>
                  <p className="case-study-text">
                    Working closely with customers and our CSMs to uncover which
                    reports our users build regularly, I designed deterministic
                    reports that our users could easily share in the weekly and
                    monthly decks. This saves users hours by enabling automated
                    processes and LLMs to analyze data and uncover insights much
                    faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-gallery" aria-label="Project visuals">
          <div className="case-study-gallery-inner">
            <div className="case-study-gallery-row case-study-gallery-row--focus">
              <div className="case-study-media case-study-media--focus case-study-media--natural">
                <img
                  src="/assets/competitive-intelligence/ai-workflow-reports/Workflow-Full.png"
                  alt="AI Analyst Workflows full report view"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--bento case-study-media--inset">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/ai-workflow-reports/Pricing.png"
                    alt="Pricing and price band analysis within a workflow report"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-media case-study-media--bento case-study-media--followup">
                <img
                  src="/assets/competitive-intelligence/ai-workflow-reports/Followup.png"
                  alt="Follow-up actions after completing a workflow report"
                  className="case-study-media-image case-study-media-image--fill"
                />
              </div>
            </div>

            <div className="case-study-gallery-row case-study-gallery-row--pair">
              <div className="case-study-media case-study-media--tile case-study-media--chat">
                <div className="case-study-media-frame">
                  <img
                    src="/assets/competitive-intelligence/ai-workflow-reports/Chat.png"
                    alt="AI Analyst empty chat with suggested workflows"
                    className="case-study-media-image"
                  />
                </div>
              </div>
              <div className="case-study-media case-study-media--tile case-study-media--artifacts">
                <img
                  src="/assets/competitive-intelligence/ai-workflow-reports/Artifacts.png"
                  alt="AI Analyst Artifacts library of saved reports"
                  className="case-study-media-image case-study-media-image--artifacts"
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
