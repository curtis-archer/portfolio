import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CompetitiveIntelligencePage } from './pages/CompetitiveIntelligencePage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/competitive-intelligence"
          element={<CompetitiveIntelligencePage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
