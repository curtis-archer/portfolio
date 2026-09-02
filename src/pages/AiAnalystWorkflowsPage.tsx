import './CompetitiveIntelligencePage.css'
import './DataVisualizationsPage.css'
import './CheckoutRedesignPage.css'
import './AiAnalystWorkflowsPage.css'

const TEAM = ['John Arstingstall', 'Salim Hamed', 'Ivan Bernatovic']

const ASSET = '/assets/Ask Cobalt'
const LIGHTBULB = `${ASSET}/${encodeURIComponent('lightbulb-02.svg')}`

const IA = [
  {
    title: 'New Chat',
    body: 'Trigger to start a new session.',
  },
  {
    title: 'Schedules',
    body: 'Sessions triggered on a schedule with a saved prompt.',
  },
  {
    title: 'Sessions',
    body: 'Individual chat conversation linked to a user. The session is saved and can be revisited.',
  },
  {
    title: 'Artifacts',
    body: 'Any object that is created within a chat session. This could be a PDF report, Excel export, etc. Tied to a user, but is shareable.',
  },
] as const

function askAsset(file: string) {
  return `${ASSET}/${encodeURIComponent(file)}`
}

function ImpactMetrics({ labelledBy }: { labelledBy?: string }) {
  return (
    <div
      className="case-study-impact case-study-impact--ask"
      role="group"
      aria-labelledby={labelledBy}
    >
      <div className="case-study-impact-item">
        <div className="case-study-impact-value-block">
          <p className="case-study-impact-value">+75%</p>
          <p className="case-study-impact-delta">~20% → ~35%</p>
        </div>
        <p className="case-study-label">Closing rate improvement</p>
      </div>
      <div className="case-study-impact-item">
        <p className="case-study-impact-value">60%</p>
        <p className="case-study-label">
          New customer purchase reason was our AI tools
        </p>
      </div>
      <div className="case-study-impact-item">
        <p className="case-study-impact-value">3.2</p>
        <p className="case-study-label">Sessions per week per user</p>
      </div>
    </div>
  )
}

function StoryImage({
  file,
  alt,
  variant,
}: {
  file: string
  alt: string
  variant?: 'deterministic'
}) {
  const className = [
    'case-study-story-media',
    'case-study-story-media--ask',
    variant === 'deterministic' ? 'case-study-story-media--ask-deterministic' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      <img
        src={askAsset(file)}
        alt={alt}
        className="case-study-story-image"
        width={1600}
        height={variant === 'deterministic' ? 1154 : 1088}
      />
    </div>
  )
}

export function AiAnalystWorkflowsPage() {
  return (
    <div className="page">
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
              </div>
            </div>

            <ImpactMetrics />
          </div>
        </header>

        <section
          className="case-study-gallery case-study-gallery--lead"
          aria-label="Project hero"
        >
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
          </div>
        </section>

        <div className="case-study-story case-study-story--ask">
          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Challenge</h2>
            <p className="case-study-text">
              Cobalt offers a wealth of Amazon market intelligence to help large
              brands understand market trends and make informed decisions.
              However, it can be challenging and time-consuming for Brand
              Managers to understand what is happening within their market, why
              it’s happening, and what they should do about it.
            </p>
            <p className="case-study-text">
              We wanted to explore how AI could help customers get from{' '}
              <strong>data → insight → action</strong> faster, shifting Cobalt
              from simply offering data to helping customers understand what it
              means.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">First Steps</h2>
            <p className="case-study-text">
              We explored two paths in parallel: a deterministic experience, in
              which we defined the questions and outputs, and a
              non-deterministic experience, in which customers could ask their
              own questions.
            </p>

            <div className="case-study-path-stack">
              <div className="case-study-story-block">
                <h3 className="case-study-story-option">
                  The deterministic path
                </h3>
                <p className="case-study-text">
                  We knew a lot about the reports our customers wanted, so we
                  built a sample report that benchmarked a customer’s brand
                  against their market.
                </p>
                <p className="case-study-text">
                  I designed the structure and visualizations to tell the
                  data&apos;s story, while AI analyzed and summarized the
                  results into a digestible report that customers could share
                  with their teams.
                </p>
                <p className="case-study-text">
                  Even though the workflow output was predetermined, the design
                  process was highly iterative due to the variability of LLM
                  responses. Rather than handing engineering a finished report, I
                  started with a structured outline and iterated on the
                  experience as the underlying functionality came to life.
                </p>
                <p className="case-study-text">
                  AI coding tools like Cursor also allowed me to make UI
                  refinements directly in code, shortening the feedback loop
                  between design and development.
                </p>
                <StoryImage
                  file="Deterministic.png"
                  alt="Deterministic benchmarking analysis report comparing BIC to ballpoint pens"
                  variant="deterministic"
                />
              </div>

              <div className="case-study-story-block">
                <h3 className="case-study-story-option">
                  The non-deterministic path
                </h3>
                <p className="case-study-text">
                  To explore the other direction, an engineer built an early
                  version of a Cobalt MCP that allowed customers to interact
                  with our data through a chat interface. By focusing solely on
                  the MCP, we could gather user feedback without building our
                  own chat experience.
                </p>
                <p className="case-study-text">
                  We started small, but as soon as we showed it to customers,
                  requests for access to more data poured in.
                </p>
              </div>
            </div>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">What we learned</h2>
            <p className="case-study-text">
              Customers loved the deterministic reports. The combination of
              visualizations and AI-generated analysis made complex data easy to
              understand and helped build trust in the insights.
            </p>
            <p className="case-study-text">
              But the predefined nature of the reports was limiting. Customers
              wanted to ask different questions, explore different parts of
              their business, and tailor the analysis to their specific needs.
            </p>
            <p className="case-study-text">
              The response to the MCP was even stronger. Customers loved being
              able to ask questions and get specific insights in seconds rather
              than digging through dashboards.
            </p>
            <p className="case-study-text">
              But we also uncovered an important accessibility problem: many of
              our customers didn&apos;t have access to an LLM provider through
              their work, while others weren&apos;t allowed to connect an MCP to
              their company&apos;s environment because of privacy and security
              policies.
            </p>
            <p className="case-study-text">This led us to two key conclusions:</p>

            <div className="case-study-insights">
              <div className="case-study-insight">
                <img
                  src={LIGHTBULB}
                  alt=""
                  width={24}
                  height={24}
                  className="case-study-insight-icon"
                />
                <p className="case-study-text">
                  <strong>
                    Customers need the flexibility to ask their own questions.
                  </strong>{' '}
                  Even users with similar roles have vastly different businesses
                  and day-to-day needs.
                </p>
              </div>
              <div className="case-study-insight">
                <img
                  src={LIGHTBULB}
                  alt=""
                  width={24}
                  height={24}
                  className="case-study-insight-icon"
                />
                <p className="case-study-text">
                  <strong>AI needs to live inside Cobalt.</strong> Building the
                  experience into the product would make this capability
                  accessible to customers who couldn&apos;t use an external LLM
                  or MCP.
                </p>
              </div>
            </div>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">AI chat beta</h2>
            <p className="case-study-text">
              With the goal of releasing a beta version of the asap, I worked
              closely with an engineer to create a simple chat experience
              connected to the same data as our MCP, rather than spending weeks
              designing every screen and state up front.
            </p>
            <p className="case-study-text">
              Once the basic functionality was working, I used Cursor to
              iteratively design and refine the experience directly in code.
              This let me experiment with interactions using real data rather
              than designing against assumptions.
            </p>
            <p className="case-study-text">
              After launch, the response was immediate. Customers told us they
              uncovered insights they would have missed in the past. Usage
              steadily grew, and requests for capabilities like recurring
              prompts and automated analysis poured in.
            </p>
            <StoryImage
              file="AI Analyst.png"
              alt="AI Analyst empty chat home with suggested workflows"
            />
            <p className="case-study-text">
              Usage grew rapidly, with customers who tried the chat consistently
              returning week after week.
            </p>
            <p className="case-study-text">
              But the rapid pace of experimentation had created another problem:{' '}
              <strong>Cobalt&apos;s AI experience was becoming fragmented.</strong>
            </p>
            <p className="case-study-text">
              We had AI Analyst, where the original deterministic reports lived,
              and Chat existed as a tab within it. Chat couldn&apos;t trigger
              reports, and users couldn&apos;t ask follow-up questions about
              report insights.
            </p>
            <p className="case-study-text">
              At the same time, we knew we wanted to introduce new concepts like
              Agents and Projects. Rather than continuing to add features to a
              fragmented experience, I stepped back to rethink how the pieces
              should fit together.
            </p>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title">Final Designs</h2>
            <p className="case-study-text">
              I first aligned with engineering on the information architecture
              for how conversations, generated outputs, and scheduled tasks
              should relate to each other:
            </p>
            <div className="case-study-ia">
              <div className="case-study-ia-grid">
                {IA.map((item) => (
                  <div key={item.title} className="case-study-ia-col">
                    <p className="case-study-ia-title">{item.title}</p>
                    <p className="case-study-ia-text">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="case-study-text">
              From there, I worked through the experience to make sure the
              interaction patterns, terminology, context, and copy were
              consistent across the different AI capabilities.
            </p>
            <p className="case-study-text">
              This was also when I partnered with marketing to establish Ask
              Cobalt as the umbrella for Cobalt&apos;s AI experience.
            </p>
            <p className="case-study-text">
              The goal wasn&apos;t just to rename the existing features. It was
              to create a foundation that could support everything we wanted to
              build next.
            </p>
            <div className="case-study-story-stack case-study-story-stack--ask">
              <StoryImage
                file="Final 1.png"
                alt="Ask Cobalt chat with a completed BIC vs ballpoint pens benchmarking report"
              />
              <StoryImage
                file="Final 2.png"
                alt="Ask Cobalt scheduled Market Watch task with run history and setup panel"
              />
              <StoryImage
                file="Final 3.png"
                alt="Ask Cobalt Artifacts library of saved reports"
              />
              <StoryImage
                file="Final 4.png"
                alt="Ask Cobalt floating action button over a category insights dashboard"
              />
              <StoryImage
                file="Final 5.png"
                alt="Ask Cobalt pop-up chat with suggested prompts for baseball gloves"
              />
            </div>
          </section>

          <section className="case-study-story-block">
            <h2 className="case-study-story-title" id="ask-cobalt-outcome">
              Outcomes &amp; Takeaways
            </h2>
            <ImpactMetrics labelledBy="ask-cobalt-outcome" />
            <p className="case-study-text">
              Since launching Ask Cobalt, we have seen our{' '}
              <strong>new account close rate jump from ~20% to ~35%</strong>,
              and AI tools now account for{' '}
              <strong>60%+ of new customer purchase reasons</strong> because
              prospects can see the value of Cobalt more quickly and easily in
              the sales process. We also saw that users started an average of{' '}
              <strong>3.2 chat sessions per week per user</strong>, indicating
              stickiness.
            </p>
            <p className="case-study-text">
              Ask Cobalt was unlike any product I had worked on before.
              Designing for AI meant embracing uncertainty, testing ideas before
              they were fully formed, and being comfortable with experiments
              failing.
            </p>
            <p className="case-study-text">
              More importantly, it changed how I think about the relationship
              between design and development. Rather than designing everything
              up front and handing it off, I increasingly worked alongside
              engineering teams, using prototypes, code, and real customer
              feedback to shape the product together.
            </p>
            <p className="case-study-text">
              <strong>
                AI didn&apos;t just change what we were designing. It changed
                how we designed it.
              </strong>
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
