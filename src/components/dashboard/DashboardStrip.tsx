import { MetricCard } from './MetricCard'
import './DashboardStrip.css'

export function DashboardStrip() {
  return (
    <div className="dashboard-strip" aria-hidden="true">
      <MetricCard
        title="YOUR MARKET SHARE"
        value="3.43%"
        trend={{ direction: 'up', value: '2.45%' }}
        chartVariant="orange"
        chartId="chart-gradient-market"
        badge="4 Pinned Products"
        className="metric-card--market-share"
      />

      <div className="dashboard-strip-group">
        <MetricCard
          title="TOTAL REVENUE"
          value="$773,632"
          trend={{ direction: 'down', value: '2.45%' }}
          chartVariant="gray"
          chartId="chart-gradient-revenue"
          className="metric-card--revenue"
        />
        <MetricCard
          title="TOTAL UNITS SOLD"
          value="16,845"
          trend={{ direction: 'down', value: '2.45%' }}
          chartVariant="gray"
          chartId="chart-gradient-units"
          className="metric-card--units"
        />
      </div>
    </div>
  )
}
