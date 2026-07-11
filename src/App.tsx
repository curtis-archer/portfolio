import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import './App.css'

function App() {
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

export default App
