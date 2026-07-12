export const ORANGE_CHART_PATH =
  'M1 32.5852C1 32.5852 9.13062 40.2889 13.9692 40.2889C18.8079 40.2889 22.7406 44.1407 26.9385 44.1407C31.1364 44.1407 34.9807 36.437 39.9077 36.437C44.8347 36.437 48.5907 40.4815 52.8769 40.4815C57.1632 40.4815 60.8308 27.3232 65.8462 27.3232C70.8616 27.3232 75.5685 44.3333 79.3793 44.3333C83.1901 44.3333 87.8086 36.437 92.3485 36.437C96.8884 36.437 101.419 32.5852 105.318 32.5852C109.217 32.5852 113.659 29.529 118.287 29.529C122.915 29.529 127.269 40.2889 131.256 40.2889C135.244 40.2889 139.509 32.3926 144.225 32.3926C148.942 32.3926 153.119 36.437 157.195 36.437C161.271 36.437 165.359 44.1407 170.164 44.1407C174.969 44.1407 178.969 36.437 183.133 36.437C187.298 36.437 191.209 44.1407 196.102 44.1407C200.996 44.1407 204.819 32.5852 209.072 32.5852C213.324 32.5852 217.059 36.437 222.041 36.437C227.023 36.437 230.427 40.2889 235.574 40.2889C240.721 40.2889 242.909 40.2889 247.979 40.2889C253.05 40.2889 256.519 44.1407 260.949 44.1407C265.378 44.1407 268.759 24.8815 273.918 24.8815C279.076 24.8815 282.369 29.529 286.887 29.529C291.405 29.529 294.609 44.1407 299.856 44.1407C305.103 44.1407 307.977 40.2889 313.389 40.2889C318.802 40.2889 321.587 32.5852 326.359 32.5852C331.13 32.5852 333.827 34.6854 339.328 34.6854C344.829 34.6854 347.437 44.1407 352.297 44.1407C357.157 44.1407 361.047 40.2889 365.266 40.2889C369.486 40.2889 373.529 44.1407 377.672 44.1407C381.814 44.1407 385.527 36.437 391.205 36.437C396.882 36.437 399.137 34.6854 404.174 34.6854C409.211 34.6854 412.747 31.1133 417.143 31.1133C421.539 31.1133 424.987 43.0094 430.112 43.0094C435.238 43.0094 438.597 40.2889 443.082 40.2889C447.566 40.2889 452.207 44.1407 456.051 44.1407C459.895 44.1407 464.447 40.2889 469.02 40.2889C473.593 40.2889 478.057 32.5852 481.989 32.5852C485.922 32.5852 491.425 32.5852 495.523 32.5852C499.62 32.5852 502.538 44.4893 507.928 44.4893C513.318 44.4893 516.147 44.1407 520.897 44.1407C525.647 44.1407 527.018 32.5852 533.866 32.5852C540.715 32.5852 541.756 32.5852 547.399 32.5852C553.043 32.5852 555.366 36.437 560.369 36.437C565.372 36.437 567.606 36.437 573.338 36.437C579.07 36.437 579.846 24.8815 586.307 24.8815C592.769 24.8815 593.456 16.4074 599.276 16.4074C605.097 16.4074 605.696 20.2593 612.246 20.2593C618.795 20.2593 619.306 8.70371 625.215 8.70371C631.124 8.70371 631.546 1.00001 638.184 1.00001C644.822 1.00001 645.033 8.70371 651.092 8.70371C657.151 8.70371 664 1.00001 664 1.00001'

export const ORANGE_CHART_VIEWBOX = { width: 665, height: 45.4893 }

export type ChartDataPoint = {
  x: number
  dateRange: string
  value: string
  seriesLabel: string
}

export const MARKET_SHARE_POINTS: ChartDataPoint[] = [
  {
    x: 0,
    dateRange: 'Mar 1, 2023 - Mar 31, 2023',
    value: '2.92%',
    seriesLabel: 'Your Total Market Share (4 Products)',
  },
  {
    x: 0.2,
    dateRange: 'May 1, 2023 - May 31, 2023',
    value: '3.08%',
    seriesLabel: 'Your Total Market Share (4 Products)',
  },
  {
    x: 0.4,
    dateRange: 'Jul 1, 2023 - Jul 31, 2023',
    value: '3.21%',
    seriesLabel: 'Your Total Market Share (4 Products)',
  },
  {
    x: 0.55,
    dateRange: 'Oct 21, 2023 - Oct 28, 2023',
    value: '3.15%',
    seriesLabel: 'Your Total Market Share (4 Products)',
  },
  {
    x: 0.8,
    dateRange: 'Nov 1, 2023 - Nov 30, 2023',
    value: '3.38%',
    seriesLabel: 'Your Total Market Share (4 Products)',
  },
  {
    x: 1,
    dateRange: 'Jan 1, 2024 - Jan 31, 2024',
    value: '3.43%',
    seriesLabel: 'Your Total Market Share (4 Products)',
  },
]

export function getPointYOnPath(path: SVGPathElement, xRatio: number): number {
  const targetX = xRatio * ORANGE_CHART_VIEWBOX.width
  const totalLength = path.getTotalLength()
  let low = 0
  let high = totalLength

  for (let i = 0; i < 32; i += 1) {
    const mid = (low + high) / 2
    const point = path.getPointAtLength(mid)
    if (point.x < targetX) {
      low = mid
    } else {
      high = mid
    }
  }

  return path.getPointAtLength((low + high) / 2).y
}

function parsePercent(value: string): number {
  return Number.parseFloat(value.replace('%', ''))
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function getDateRangeAtX(xRatio: number): string {
  const startMs = new Date('2023-03-01').getTime()
  const endMs = new Date('2024-01-31').getTime()
  const hoveredMs = startMs + (endMs - startMs) * xRatio
  const weekStart = new Date(hoveredMs - 3 * 86_400_000)
  const weekEnd = new Date(hoveredMs + 3 * 86_400_000)

  return `${formatDate(weekStart)} - ${formatDate(weekEnd)}`
}

export function getValueAtX(xRatio: number, points: ChartDataPoint[]): string {
  if (xRatio <= points[0].x) return points[0].value
  if (xRatio >= points[points.length - 1].x) return points[points.length - 1].value

  for (let i = 0; i < points.length - 1; i += 1) {
    const left = points[i]
    const right = points[i + 1]

    if (xRatio >= left.x && xRatio <= right.x) {
      const t = (xRatio - left.x) / (right.x - left.x)
      const leftValue = parsePercent(left.value)
      const rightValue = parsePercent(right.value)

      return formatPercent(leftValue + (rightValue - leftValue) * t)
    }
  }

  return points[points.length - 1].value
}

export function getHoverDataAtX(
  xRatio: number,
  points: ChartDataPoint[],
): Pick<ChartDataPoint, 'dateRange' | 'value' | 'seriesLabel'> {
  return {
    dateRange: getDateRangeAtX(xRatio),
    value: getValueAtX(xRatio, points),
    seriesLabel: points[0].seriesLabel,
  }
}
