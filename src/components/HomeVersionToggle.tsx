import { useNavigate } from 'react-router-dom'
import { useHomeVersion } from '../lib/homeVersion.ts'
import './HomeVersionToggle.css'

export function HomeVersionToggle() {
  const { version, setVersion } = useHomeVersion()
  const navigate = useNavigate()

  return (
    <div className="home-version-toggle" role="group" aria-label="Home version">
      <button
        type="button"
        className={`home-version-toggle-option${version === 'v1' ? ' home-version-toggle-option--active' : ''}`}
        aria-pressed={version === 'v1'}
        onClick={() => {
          setVersion('v1')
          navigate('/')
        }}
      >
        V1
      </button>
      <button
        type="button"
        className={`home-version-toggle-option${version === 'v2' ? ' home-version-toggle-option--active' : ''}`}
        aria-pressed={version === 'v2'}
        onClick={() => {
          setVersion('v2')
          navigate('/')
        }}
      >
        V2
      </button>
    </div>
  )
}
