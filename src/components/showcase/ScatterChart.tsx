import { useState } from 'react'
import { ProductThumbnail } from './ProductThumbnail'
import {
  DOT_FILL,
  DOT_RADIUS,
  SCATTER_AXIS_Y,
  SCATTER_DOTS,
  SCATTER_TICKS,
  SCATTER_VIEWBOX,
  TOOLTIP_DOT_FILL,
  type ScatterDot,
} from './scatterConstants'

type ScatterChartProps = {
  labels: [string, string, string]
  interactive?: boolean
}

export function ScatterChart({ labels, interactive = false }: ScatterChartProps) {
  const [activeDot, setActiveDot] = useState<ScatterDot | null>(null)

  const chartClass = [
    'scatter-chart',
    interactive && 'scatter-chart--interactive',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={chartClass}
      onPointerLeave={interactive ? () => setActiveDot(null) : undefined}
    >
      <svg
        className="scatter-chart-plot"
        viewBox={`0 0 ${SCATTER_VIEWBOX.width} ${SCATTER_VIEWBOX.height}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden={interactive ? undefined : true}
        role={interactive ? 'img' : undefined}
        aria-label={interactive ? 'Single axis scatter plot' : undefined}
      >
        <line
          x1="0"
          y1={SCATTER_AXIS_Y}
          x2={SCATTER_VIEWBOX.width}
          y2={SCATTER_AXIS_Y}
          stroke="#f0f0f0"
          strokeWidth="1.23"
        />

        {SCATTER_TICKS.map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2={SCATTER_VIEWBOX.height}
            stroke="#f0f0f0"
            strokeWidth="1.23"
          />
        ))}

        {SCATTER_DOTS.map((dot, index) => {
          const radius = DOT_RADIUS[dot.kind]
          const isActive = activeDot === dot
          const fill = DOT_FILL[dot.kind]

          return (
            <g key={`${dot.cx}-${index}`}>
              {interactive && (
                <circle
                  className="scatter-chart-hit"
                  cx={dot.cx}
                  cy={SCATTER_AXIS_Y}
                  r={8}
                  onPointerEnter={() => setActiveDot(dot)}
                  onFocus={() => setActiveDot(dot)}
                  onBlur={() => setActiveDot(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${dot.productName}, ${dot.value} reviews`}
                />
              )}
              {dot.kind === 'orange-lg' && (
                <circle
                  className={`scatter-chart-glow${isActive ? ' scatter-chart-glow--active' : ''}`}
                  cx={dot.cx}
                  cy={SCATTER_AXIS_Y}
                  r={radius + 2.5}
                  fill="none"
                  stroke={fill}
                  strokeWidth="1.5"
                  opacity={isActive ? 0.35 : 0.2}
                  pointerEvents="none"
                />
              )}
              <circle
                cx={dot.cx}
                cy={SCATTER_AXIS_Y}
                r={radius}
                fill={fill}
                pointerEvents="none"
              />
            </g>
          )
        })}
      </svg>

      <div className="scatter-chart-labels">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      {interactive && activeDot && (
        <div
          className={[
            'scatter-chart-popover',
            activeDot.cx / SCATTER_VIEWBOX.width < 0.35 && 'scatter-chart-popover--align-left',
            activeDot.cx / SCATTER_VIEWBOX.width > 0.72 && 'scatter-chart-popover--align-right',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ left: `${(activeDot.cx / SCATTER_VIEWBOX.width) * 100}%` }}
          role="tooltip"
        >
          <div className="scatter-chart-tooltip">
            <div className="scatter-chart-tooltip-body">
              <div className="scatter-chart-tooltip-row">
                <div className="scatter-chart-tooltip-asin">
                  <span
                    className="scatter-chart-tooltip-dot"
                    style={{ background: TOOLTIP_DOT_FILL[activeDot.kind] }}
                    aria-hidden="true"
                  />
                  <ProductThumbnail src={activeDot.productImage} />
                  <p className="scatter-chart-tooltip-name">{activeDot.productName}</p>
                </div>
                <span className="scatter-chart-tooltip-value">{activeDot.value}</span>
              </div>
            </div>
            <div className="scatter-chart-tooltip-footer">Click to Inspect</div>
          </div>
        </div>
      )}
    </div>
  )
}
