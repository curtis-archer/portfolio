import { ScatterChart } from './ScatterChart'

type ScatterMetricCardProps = {
  title: string
  value: string
  labels: [string, string, string]
  className?: string
  interactive?: boolean
}

export function ScatterMetricCard({
  title,
  value,
  labels,
  className = '',
  interactive = false,
}: ScatterMetricCardProps) {
  return (
    <article className={`scatter-metric-card ${className}`.trim()}>
      <h3 className="scatter-metric-card-title">{title}</h3>

      <div className="scatter-metric-card-body">
        <ScatterChart labels={labels} interactive={interactive} />

        <div className="scatter-metric-card-data">
          <span className="scatter-metric-card-value">{value}</span>
          <span className="scatter-metric-card-label">Group Avg</span>
        </div>
      </div>
    </article>
  )
}
