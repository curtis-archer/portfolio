import { AboutGridV2 } from '../components/home-v2/AboutGridV2'
import { Hero } from '../components/Hero'
import '../App.css'

/** Experimental home. Edit freely — the live home stays on `/`. */
export function HomePageV2() {
  return (
    <div className="page">
      <div className="page-body">
        <Hero />
        <AboutGridV2 />
      </div>
    </div>
  )
}
