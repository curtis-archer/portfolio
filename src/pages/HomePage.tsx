import { AboutGrid } from '../components/AboutGrid'
import { Hero } from '../components/Hero'
import { Nav } from '../components/Nav'
import { ProjectGrid } from '../components/ProjectGrid'
import '../App.css'

export function HomePage() {
  return (
    <div className="page">
      <Nav />
      <div className="page-body">
        <Hero />
        <ProjectGrid />
        <AboutGrid />
      </div>
    </div>
  )
}
