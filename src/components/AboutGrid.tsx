import { DashboardStrip } from './dashboard/DashboardStrip'
import { PhotoStack } from './photos/PhotoStack'
import { ProjectCard } from './ProjectCard'
import { ShowcaseStack } from './showcase/ShowcaseStack'
import './AboutGrid.css'

export function AboutGrid() {
  return (
    <section id="about" className="about-grid" aria-label="About">
      <ProjectCard
        className="about-grid-cell about-grid-cell--intro"
        href="/ai-analyst-workflows"
        variant="benchmark"
        hideArrow
      >
        <div className="about-card-media about-card-media--report">
          <img
            src="/assets/Home/instant-ai-reports.png"
            alt="Instant AI benchmarking report for BIC ballpoint pens"
          />
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--market"
        href="/competitive-intelligence"
        hideArrow
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
        className="about-grid-cell about-grid-cell--tall"
        variant="benchmark"
        asStatic
        hideArrow
      >
        <div className="about-card-media about-card-media--chat">
          <img
            src="/assets/Home/chat.png"
            alt="Ask Cobalt chat interface"
          />
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
        className="about-grid-cell about-grid-cell--showcase"
        asStatic
        hideArrow
      >
        <div className="about-card-showcase">
          <ShowcaseStack />
        </div>
      </ProjectCard>

      <ProjectCard
        className="about-grid-cell about-grid-cell--checkout"
        href="/checkout-redesign"
        hideArrow
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
        asStatic
        hideArrow
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
