import { ChartLine } from './ChartLine'
import { InteractiveChartLine } from './InteractiveChartLine'
import { TrendBadge } from './TrendBadge'

const MONTHS = ['Mar', 'May', 'Jul', 'Sep', 'Nov', 'Jan']

type MetricCardProps = {
  title: string
  value: string
  trend: { direction: 'up' | 'down'; value: string }
  chartVariant: 'orange' | 'gray'
  chartId: string
  badge?: string
  className?: string
  interactiveChart?: boolean
}

export function MetricCard({
  title,
  value,
  trend,
  chartVariant,
  chartId,
  badge,
  className = '',
  interactiveChart = false,
}: MetricCardProps) {
  return (
    <article className={`metric-card ${className}`.trim()}>
      <header className="metric-card-header">
        <h3 className="metric-card-title">{title}</h3>
        {badge && (
          <span className="metric-card-badge">
            <span className="metric-card-pin" aria-hidden="true" />
            {badge}
          </span>
        )}
      </header>

      <div className="metric-card-value">{value}</div>
      <TrendBadge direction={trend.direction} value={trend.value} />

      <div
        className={`metric-card-chart${interactiveChart ? ' metric-card-chart--interactive' : ''}`}
      >
        <div className="metric-card-grid" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {interactiveChart && chartVariant === 'orange' ? (
          <InteractiveChartLine gradientId={chartId} />
        ) : (
          <ChartLine variant={chartVariant} gradientId={chartId} />
        )}
        <div className="metric-card-months">
          {MONTHS.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
