import {
  useCallback,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'
import './BeforeAfterSlider.css'

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
  ariaLabel?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className,
  ariaLabel = 'Compare before and after designs',
}: BeforeAfterSliderProps) {
  const descId = useId()
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const [position, setPosition] = useState(50)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    if (width <= 0) return
    const next = ((clientX - left) / width) * 100
    setPosition(Math.min(100, Math.max(0, next)))
  }, [])

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    draggingRef.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    updatePosition(event.clientX)
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 2
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault()
      setPosition((value) => Math.max(0, value - step))
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault()
      setPosition((value) => Math.min(100, value + step))
    } else if (event.key === 'Home') {
      event.preventDefault()
      setPosition(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setPosition(100)
    }
  }

  return (
    <div
      ref={containerRef}
      className={['before-after', className].filter(Boolean).join(' ')}
      style={{ '--before-after-pos': `${position}%` } as CSSProperties}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% before, ${Math.round(100 - position)}% after`}
      aria-describedby={descId}
    >
      <p id={descId} className="before-after-sr-only">
        {beforeAlt}. {afterAlt}. Drag or use arrow keys to reveal each version.
      </p>

      <img
        src={afterSrc}
        alt=""
        className="before-after-image before-after-image--base"
        draggable={false}
      />

      <div className="before-after-before" aria-hidden="true">
        <img
          src={beforeSrc}
          alt=""
          className="before-after-image"
          draggable={false}
        />
      </div>

      <span className="before-after-label before-after-label--before" aria-hidden="true">
        Before
      </span>
      <span className="before-after-label before-after-label--after" aria-hidden="true">
        After
      </span>

      <div className="before-after-divider" aria-hidden="true">
        <div className="before-after-knob">
          <svg
            className="before-after-knob-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 7L3 12L8 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 7L21 12L16 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
