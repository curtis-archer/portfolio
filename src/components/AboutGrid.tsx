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
        asStatic
        hideArrow
      />

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
        asStatic
        hideArrow
      />

      <ProjectCard
        className="about-grid-cell about-grid-cell--photos"
        asStatic
        hideArrow
      >
        <div className="about-card-photos">
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
        className="about-grid-cell about-grid-cell--empty-a"
        asStatic
        hideArrow
      />

      <ProjectCard
        className="about-grid-cell about-grid-cell--empty-b"
        asStatic
        hideArrow
      />
    </section>
  )
}
