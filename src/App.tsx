import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { AiAnalystWorkflowsPage } from './pages/AiAnalystWorkflowsPage'
import { CheckoutRedesignPage } from './pages/CheckoutRedesignPage'
import { CompetitiveIntelligencePage } from './pages/CompetitiveIntelligencePage'
import { DataVisualizationsPage } from './pages/DataVisualizationsPage'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route
          path="/competitive-intelligence"
          element={<CompetitiveIntelligencePage />}
        />
        <Route
          path="/ai-analyst-workflows"
          element={<AiAnalystWorkflowsPage />}
        />
        <Route
          path="/checkout-redesign"
          element={<CheckoutRedesignPage />}
        />
        <Route
          path="/data-visualizations"
          element={<DataVisualizationsPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
