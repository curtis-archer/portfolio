import { AboutGrid } from '../components/AboutGrid'
import { Hero } from '../components/Hero'
import '../App.css'

export function HomePage() {
  return (
    <div className="page">
      <div className="page-body">
        <Hero />
        <AboutGrid />
      </div>
    </div>
  )
}
