type ScatterChartProps = {
  labels: [string, string, string]
}

type DotKind = 'gray' | 'orange' | 'orange-lg'

const DOTS: Array<{ x: number; kind: DotKind }> = [
  { x: 0, kind: 'orange' },
  { x: 2.74, kind: 'orange-lg' },
  { x: 4.11, kind: 'orange' },
  { x: 8.21, kind: 'orange' },
  { x: 12.32, kind: 'orange' },
  { x: 16.42, kind: 'orange-lg' },
  { x: 19.16, kind: 'orange' },
  { x: 23.26, kind: 'orange-lg' },
  { x: 26, kind: 'gray' },
  { x: 32.84, kind: 'gray' },
  { x: 41.05, kind: 'gray' },
  { x: 43.79, kind: 'gray' },
  { x: 46.53, kind: 'gray' },
  { x: 53.37, kind: 'gray' },
  { x: 64.32, kind: 'gray' },
  { x: 72.53, kind: 'gray' },
  { x: 80.73, kind: 'orange-lg' },
  { x: 94.42, kind: 'gray' },
  { x: 158.73, kind: 'gray' },
  { x: 184.73, kind: 'gray' },
  { x: 223.04, kind: 'gray' },
]

const DOT_RADIUS: Record<DotKind, number> = {
  gray: 4.1,
  orange: 4.1,
  'orange-lg': 5.47,
}

const DOT_FILL: Record<DotKind, string> = {
  gray: '#D9D9D9',
  orange: '#FF5E00',
  'orange-lg': '#FF5E00',
}

export function ScatterChart({ labels }: ScatterChartProps) {
  return (
    <div className="scatter-chart">
      <svg
        className="scatter-chart-plot"
        viewBox="0 0 231 22"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <line x1="0" y1="4.1" x2="231" y2="4.1" stroke="#F0F0F0" strokeWidth="1.37" />

        <line x1="29.7" y1="0" x2="29.7" y2="22" stroke="#F0F0F0" strokeWidth="1.37" />
        <line x1="117.5" y1="0" x2="117.5" y2="22" stroke="#F0F0F0" strokeWidth="1.37" />
        <line x1="204.9" y1="0" x2="204.9" y2="22" stroke="#F0F0F0" strokeWidth="1.37" />

        {DOTS.map((dot, index) => {
          const radius = DOT_RADIUS[dot.kind]
          return (
            <circle
              key={`${dot.x}-${index}`}
              cx={dot.x + radius}
              cy={4.1}
              r={radius}
              fill={DOT_FILL[dot.kind]}
            />
          )
        })}
      </svg>

      <div className="scatter-chart-labels">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  )
}
