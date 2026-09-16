import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { HomeVersionToggle } from './components/HomeVersionToggle'
import { Nav } from './components/Nav'
import { ScrollToTop } from './components/ScrollToTop'
import {
  HomeVersionContext,
  persistHomeVersion,
  readStoredHomeVersion,
  useHomeVersion,
  type HomeVersion,
} from './lib/homeVersion.ts'
import { AboutPage } from './pages/AboutPage'
import { AiAnalystWorkflowsPage } from './pages/AiAnalystWorkflowsPage'
import { CheckoutRedesignPage } from './pages/CheckoutRedesignPage'
import { CompetitiveIntelligencePage } from './pages/CompetitiveIntelligencePage'
import { DataVisualizationsPage } from './pages/DataVisualizationsPage'
import { DesignSystemPage } from './pages/DesignSystemPage'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'

function HomeVersionProvider({ children }: { children: ReactNode }) {
  const [version, setVersionState] = useState<HomeVersion>(readStoredHomeVersion)

  const setVersion = useCallback((next: HomeVersion) => {
    persistHomeVersion(next)
    setVersionState(next)
  }, [])

  const value = useMemo(
    () => ({ version, setVersion }),
    [version, setVersion],
  )

  return (
    <HomeVersionContext.Provider value={value}>
      {children}
    </HomeVersionContext.Provider>
  )
}

function AppShell() {
  const { pathname } = useLocation()
  const { setVersion } = useHomeVersion()
  const showNav = pathname !== '/resume'

  useEffect(() => {
    if (pathname === '/v2') setVersion('v2')
  }, [pathname, setVersion])

  return (
    <>
      <ScrollToTop />
      {showNav ? <Nav /> : null}
      {showNav ? <HomeVersionToggle /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/v2" element={<HomePage />} />
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
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <HomeVersionProvider>
        <AppShell />
      </HomeVersionProvider>
    </BrowserRouter>
  )
}

export default App
