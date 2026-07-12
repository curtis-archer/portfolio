import './BenchmarkPanel.css'

type Takeaway = {
  emoji: string
  title: string
  body: string
}

const EXECUTIVE_TAKEAWAYS: Takeaway[] = [
  {
    emoji: '📉',
    title: 'Share erosion in growing category',
    body: 'BIC grew revenue 0.4% YoY while Ballpoint Pens surged 14.4%, resulting in a 1.19-point share decline as premium-priced competitors captured disproportionate category expansion.',
  },
  {
    emoji: '💰',
    title: 'Pricing pressure threatens value position',
    body: "BIC's ASP fell 3.1% to $5.90 while category ASP rose 1.0%, with fast-growing rivals like Sayglossy ($19.44 ASP, 2,804% revenue growth) and deegtran ($22.50 ASP, 75% growth) each gaining over 0.6 share points in higher price tiers.",
  },
]

function TrendChip({
  direction,
  value,
}: {
  direction: 'up' | 'down'
  value: string
}) {
  return (
    <span className={`benchmark-trend benchmark-trend--${direction}`}>
      <img
        src={
          direction === 'up'
            ? '/assets/benchmark/arrow-up.svg'
            : '/assets/benchmark/arrow-down.svg'
        }
        alt=""
        width={8}
        height={8}
      />
      {value}
    </span>
  )
}

function TakeawaysList({ items }: { items: Takeaway[] }) {
  return (
    <ul className="benchmark-panel-takeaways-list">
      {items.map((item) => (
        <li key={item.title} className="benchmark-panel-takeaway">
          <p className="benchmark-panel-takeaway-title">
            <span className="benchmark-panel-takeaway-emoji" aria-hidden="true">
              {item.emoji}
            </span>
            {item.title}
          </p>
          <p className="benchmark-panel-takeaway-body">{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

function MetricsRow() {
  return (
    <div className="benchmark-panel-metrics">
      <div className="benchmark-panel-metric">
        <p className="benchmark-panel-metric-label">
          BIC&apos;s Revenue in Ballpoint Pens
        </p>
        <div className="benchmark-panel-metric-body">
          <div className="benchmark-panel-metric-data">
            <span className="benchmark-panel-metric-value">$20.3M</span>
            <TrendChip direction="up" value="2.68%" />
          </div>
          <div className="benchmark-panel-metric-chart">
            <img
              src="/assets/benchmark/chart-prior.svg"
              alt=""
              className="benchmark-panel-chart-prior"
            />
            <img
              src="/assets/benchmark/chart-main.svg"
              alt=""
              className="benchmark-panel-chart-main"
            />
          </div>
        </div>
      </div>

      <div className="benchmark-panel-metric-divider" aria-hidden="true" />

      <div className="benchmark-panel-metric">
        <p className="benchmark-panel-metric-label">
          BIC&apos;s Share of Ballpoint Pens
        </p>
        <div className="benchmark-panel-metric-body">
          <div className="benchmark-panel-metric-data">
            <span className="benchmark-panel-metric-value">8.83%</span>
            <TrendChip direction="down" value="0.84%" />
          </div>
          <img
            src="/assets/benchmark/pie-chart.svg"
            alt=""
            className="benchmark-panel-pie"
          />
        </div>
      </div>
    </div>
  )
}

export function BenchmarkPanel() {
  return (
    <div className="benchmark-panel" aria-hidden="true">
      <div className="benchmark-panel-prompt">
        <p>
          use <strong>/brand-benchmark</strong> and tell me how BIC is doing the{' '}
          ballpoint pens category
        </p>
      </div>

      <div className="benchmark-panel-status">
        <img src="/assets/benchmark/checkmark.svg" alt="" width={8} height={8} />
        <span>Completed 12 Steps</span>
        <img
          src="/assets/benchmark/chevron-down.svg"
          alt=""
          width={3}
          height={5}
        />
      </div>

      <p className="benchmark-panel-intro">
        Here&apos;s your Benchmarking Analysis for BIC.
      </p>

      <div className="benchmark-panel-report">
        <header className="benchmark-panel-header">
          <div className="benchmark-panel-header-text">
            <h3 className="benchmark-panel-title">BIC vs Ball Point Pens</h3>
            <div className="benchmark-panel-date">
              <img
                src="/assets/benchmark/calendar.svg"
                alt=""
                width={7}
                height={7}
              />
              <span>Feb 2025 - Jan 2026</span>
            </div>
          </div>
          <button type="button" className="benchmark-panel-share">
            <img src="/assets/benchmark/share.svg" alt="" width={11} height={11} />
            Share
          </button>
        </header>

        <div className="benchmark-panel-content">
          <section className="benchmark-panel-section">
            <p className="benchmark-panel-section-label">Executive Summary</p>
            <h4 className="benchmark-panel-headline">
              BIC Continues to Dominate, Despite Rising Pricing Risks
            </h4>

            <div className="benchmark-panel-summary">
              <MetricsRow />

              <div className="benchmark-panel-takeaways">
                <h5 className="benchmark-panel-takeaways-title">Key Takeaways</h5>
                <TakeawaysList items={EXECUTIVE_TAKEAWAYS} />
              </div>
            </div>
          </section>
        </div>

        <footer className="benchmark-panel-footer">
          <span className="benchmark-panel-footer-label">Open Full Report</span>
          <img
            src="/assets/benchmark/chevron-down-primary.svg"
            alt=""
            className="benchmark-panel-footer-chevron"
            width={11}
            height={11}
          />
        </footer>
      </div>
    </div>
  )
}
