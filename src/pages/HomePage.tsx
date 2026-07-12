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
      </div>
    </div>
  )
}
