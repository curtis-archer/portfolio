import { AboutGrid } from '../components/AboutGrid'
import { Hero } from '../components/Hero'
import { Nav } from '../components/Nav'
import '../App.css'

export function HomePage() {
  return (
    <div className="page">
      <Nav />
      <div className="page-body">
        <Hero />
        <AboutGrid />
      </div>
    </div>
  )
}
