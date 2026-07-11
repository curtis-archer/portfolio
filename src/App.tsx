import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="page-header">
        <Nav />
        <Hero />
      </div>
      <ProjectGrid />
    </div>
  )
}

export default App
