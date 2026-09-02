import { DashboardStrip } from './dashboard/DashboardStrip'
import { PhotoStack } from './photos/PhotoStack'
import { ProjectCard } from './ProjectCard'
import { ShowcaseStack } from './showcase/ShowcaseStack'
import './AboutGrid.css'

export function AboutGrid() {
  return (
    <section id="work" className="about-grid" aria-label="Work">
      <ProjectCard
        className="about-grid-cell about-grid-cell--intro"
        href="/ai-analyst-workflows"
        variant="benchmark"
        title="Conversational Market Intelligence"
        kind="Case Study"
        description="A 0→1 AI product where I led design and PM to ship Cobalt’s first AI tools."
      >
        <div className="about-card-media about-card-media--report">
          <img
            src="/assets/Home/Ask-Cobalt-Segment.png"
            alt="Ask Cobalt category insights dashboard"
          />
        </div>
        <div className="about-card-ask-cta" aria-hidden="true">
          <div className="about-card-ask-cta-surface">
            <div className="about-card-ask-cta-icon">
              <span className="about-card-ask-cta-star">
                <img src="/assets/Home/star-05.svg" alt="" />
              </span>
            </div>
            <div className="about-card-ask-cta-text">
              <p className="about-card-ask-cta-title">Ask Cobalt</p>
              <p className="about-card-ask-cta-shortcut">Shift + k</p>
            </div>
          </div>
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--market"
        href="/competitive-intelligence"
        title="From scattered data to one workflow"
        kind="Showcase"
        description="Led design of a new Catalyst feature that transformed dense datasets into a clear story."
      >
        <div className="about-card-dashboard">
          <DashboardStrip
            showSecondaryMetrics={false}
            interactiveChart
            marketShareChartId="chart-gradient-market-about"
          />
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--showcase"
        href="/data-visualizations"
        title="Charts sellers could actually read"
        kind="Case Study"
        description="How I improved data comprehension through customer feedback and iteration."
      >
        <div className="about-card-showcase">
          <ShowcaseStack layout="tall" />
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--photos"
        asStatic
        hideArrow
      >
        <div className="about-card-photos">
          <img
            className="project-card-logo-mark"
            src="/assets/logo-large.svg"
            alt=""
            width={65}
            height={42}
          />
          <PhotoStack />
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--checkout"
        href="/checkout-redesign"
        title="Reducing churn by improving trust"
        kind="Case Study"
        description="A support-ticket diagnosis turned into a checkout redesign resulting in a drastic churn reduction."
      >
        <div className="about-card-checkout">
          <img
            src="/assets/checkout/LandingCheckout.png"
            alt="Checkout redesign subscription summary"
          />
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--design"
        href="/design-system"
        title="Introduction of Jungle Scout’s first design system"
        kind="Showcase"
        description="A look at the visual impact of a new design system aimed at creating consistency and improving visual polish."
      >
        <div className="about-card-media about-card-media--design">
          <img
            src="/assets/Home/design-system.png"
            alt="Jungle Scout design system color foundations"
          />
        </div>
      </ProjectCard>
    </section>
  )
}
