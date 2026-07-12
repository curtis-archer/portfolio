import { ORANGE_CHART_PATH, ORANGE_CHART_VIEWBOX } from './chartConstants'

type ChartLineProps = {
  variant: 'orange' | 'gray'
  gradientId: string
}

const GRAY_PATH =
  'M1.02524 20.8489C1.02524 20.8489 16.1066 24.8886 21.1107 24.8886C26.1148 24.8886 36.6857 27.3742 42.033 27.3742C47.3803 27.3742 56.5209 25.9038 62.2114 25.9038C67.9019 25.9038 77.1015 28.0978 83.1352 28.0978C89.1688 28.0978 97.9605 30.6897 103.405 30.6897C108.85 30.6897 118.154 18.2153 124.141 18.2153C130.129 18.2153 139.494 16.5291 144.227 16.5291C148.96 16.5291 159.781 20.5688 165.056 20.5688C170.332 20.5688 180.562 8.87336 185.049 8.87336C189.536 8.87336 201.221 1.02498 205.785 1.02498C210.349 1.02498 221.149 10.4813 226.521 10.4813'

export function ChartLine({ variant, gradientId }: ChartLineProps) {
  if (variant === 'orange') {
    return (
      <svg
        className="chart-line"
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
          d={ORANGE_CHART_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg
      className="chart-line"
      viewBox="0 0 227.546 31.7147"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={GRAY_PATH}
        fill="none"
        stroke="#7B7B7B"
        strokeWidth="2.05"
        strokeLinecap="round"
      />
    </svg>
  )
}
