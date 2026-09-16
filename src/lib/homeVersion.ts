import { createContext, useContext } from 'react'

export const HOME_VERSION_KEY = 'portfolio-home-experiment'

export type HomeVersion = 'v1' | 'v2'

export type HomeVersionContextValue = {
  version: HomeVersion
  setVersion: (version: HomeVersion) => void
}

export const HomeVersionContext = createContext<HomeVersionContextValue | null>(
  null,
)

export function readStoredHomeVersion(): HomeVersion {
  try {
    const stored = localStorage.getItem(HOME_VERSION_KEY)
    if (stored === 'v1') return 'v1'
    return 'v2'
  } catch {
    return 'v2'
  }
}

export function persistHomeVersion(version: HomeVersion) {
  try {
    localStorage.setItem(HOME_VERSION_KEY, version)
  } catch {
    // Ignore private-mode / blocked storage.
  }
}

export function useHomeVersion() {
  const context = useContext(HomeVersionContext)
  if (!context) {
    throw new Error('useHomeVersion must be used within HomeVersionProvider')
  }
  return context
}
