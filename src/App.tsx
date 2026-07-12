import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AiAnalystWorkflowsPage } from './pages/AiAnalystWorkflowsPage'
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
        <Route
          path="/ai-analyst-workflows"
          element={<AiAnalystWorkflowsPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
