import { BenchmarkPanel } from './benchmark/BenchmarkPanel'
import { DashboardStrip } from './dashboard/DashboardStrip'
import { ProjectCard } from './ProjectCard'
import { ShowcaseStack } from './showcase/ShowcaseStack'
import './ProjectGrid.css'

export function ProjectGrid() {
  return (
    <section id="work" className="project-grid" aria-label="Featured work">
      <div className="project-grid-row project-grid-row--featured">
        <ProjectCard
          href="/competitive-intelligence"
          tags={[
            { icon: '/assets/lightbulb.svg', label: 'Product Vision' },
            { icon: '/assets/book.svg', label: 'Case Study' },
          ]}
        >
          <div className="project-card-dashboard project-card-dashboard--lift">
            <DashboardStrip
              showSecondaryMetrics={false}
              interactiveChart
            />
          </div>
        </ProjectCard>
        <ProjectCard href="/ai-analyst-workflows" variant="benchmark">
          <div className="project-card-benchmark">
            <BenchmarkPanel />
          </div>
        </ProjectCard>
      </div>

      <div className="project-grid-row project-grid-row--quad">
        <ProjectCard
          href="#"
          tags={[{ icon: '/assets/book.svg', label: 'Show Case' }]}
        >
          <div className="project-card-showcase">
            <ShowcaseStack />
          </div>
        </ProjectCard>
        <ProjectCard href="#" />
        <ProjectCard href="#" />
        <ProjectCard href="#" showLogo />
      </div>

      <div className="project-grid-row project-grid-row--split">
        <ProjectCard href="#" />
        <ProjectCard href="#" />
      </div>
    </section>
  )
}
