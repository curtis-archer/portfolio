type TrendBadgeProps = {
  direction: 'up' | 'down'
  value: string
}

function TrendArrow({ direction }: { direction: 'up' | 'down' }) {
  const fill = direction === 'up' ? '#07835B' : '#E71313'

  return (
    <svg
      className="trend-badge-arrow"
      viewBox="0 0 12.2998 12.2998"
      aria-hidden="true"
    >
      {direction === 'up' ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 2.92505L1.90007 9.07495L10.0999 9.07495L6 2.92505Z"
          fill={fill}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 9.07495L10.0999 2.92505H1.90007L6 9.07495Z"
          fill={fill}
        />
      )}
    </svg>
  )
}

export function TrendBadge({ direction, value }: TrendBadgeProps) {
  return (
    <div className="trend-badge">
      <span className={`trend-badge-pill trend-badge-pill--${direction}`}>
        <TrendArrow direction={direction} />
        {value}
      </span>
      <span className="trend-badge-label">vs previous period</span>
    </div>
  )
}
