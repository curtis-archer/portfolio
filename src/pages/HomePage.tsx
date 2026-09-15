import { useHomeVersion } from '../lib/homeVersion.ts'
import { HomePageV1 } from './HomePageV1'
import { HomePageV2 } from './HomePageV2'

export function HomePage() {
  const { version } = useHomeVersion()
  return version === 'v2' ? <HomePageV2 /> : <HomePageV1 />
}
