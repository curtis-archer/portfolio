import { useCallback, useRef, useState } from 'react'
import {
  MARKET_SHARE_POINTS,
  ORANGE_CHART_PATH,
  ORANGE_CHART_VIEWBOX,
  getHoverDataAtX,
  getPointYOnPath,
  type ChartDataPoint,
} from './chartConstants'

type HoverState = {
  xRatio: number
  dotTop: number
  dateRange: string
  value: string
  seriesLabel: string
}

type InteractiveChartLineProps = {
  gradientId: string
  dataPoints?: ChartDataPoint[]
}

export function InteractiveChartLine({
  gradientId,
  dataPoints = MARKET_SHARE_POINTS,
}: InteractiveChartLineProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [hoverState, setHoverState] = useState<HoverState | null>(null)

  const updateHoverState = useCallback(
    (clientX: number) => {
      const path = pathRef.current
      const chart = chartRef.current
      if (!path || !chart) return

      const rect = chart.getBoundingClientRect()
      const xRatio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
      const pathY = getPointYOnPath(path, xRatio)
      const lineArea = chart.querySelector<HTMLElement>('.chart-line-area')
      if (!lineArea) return

      const chartRect = chart.getBoundingClientRect()
      const lineRect = lineArea.getBoundingClientRect()
      const yRatio = pathY / ORANGE_CHART_VIEWBOX.height
      const dotYInChart = lineRect.top - chartRect.top + yRatio * lineRect.height
      const hoverData = getHoverDataAtX(xRatio, dataPoints)

      setHoverState({
        xRatio,
        dotTop: dotYInChart - 12,
        ...hoverData,
      })
    },
    [dataPoints],
  )

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    updateHoverState(event.clientX)
  }

  const handlePointerLeave = () => {
    setHoverState(null)
  }

  return (
    <div
      ref={chartRef}
      className="interactive-chart"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        className="chart-line chart-line-area"
        viewBox={`0 0 ${ORANGE_CHART_VIEWBOX.width} ${ORANGE_CHART_VIEWBOX.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="1"
            y1="22.7447"
            x2="664"
            y2="22.7447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF8400" />
            <stop offset="0.5" stopColor="#FF6001" />
            <stop offset="1" stopColor="#FF3B01" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d={ORANGE_CHART_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {hoverState && (
        <div
          className={`chart-hover${hoverState.xRatio < 0.35 ? ' chart-hover--flip' : ''}`}
          style={{
            left: `${hoverState.xRatio * 100}%`,
            transform: 'translateX(-5px)',
          }}
        >
          <div className="chart-hover-tooltip" role="tooltip">
            <div className="chart-hover-tooltip-date">{hoverState.dateRange}</div>
            <div className="chart-hover-tooltip-body">
              <div className="chart-hover-tooltip-row">
                <div className="chart-hover-tooltip-label">
                  <span className="chart-hover-tooltip-swatch" aria-hidden="true" />
                  <span>{hoverState.seriesLabel}</span>
                </div>
                <span className="chart-hover-tooltip-value">{hoverState.value}</span>
              </div>
            </div>
          </div>

          <div className="chart-hover-marker">
            <span className="chart-hover-crosshair" aria-hidden="true" />
            <span
              className="chart-hover-dot"
              style={{ top: hoverState.dotTop }}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </div>
  )
}
