type ChartLineProps = {
  variant: 'orange' | 'gray'
  gradientId: string
}

const ORANGE_PATH =
  'M1.0252 21.4718C1.0252 21.4718 36.3978 29.4387 48.1347 29.4387C59.8716 29.4387 84.6652 34.3408 97.207 34.3408C109.749 34.3408 131.188 31.4409 144.535 31.4409C157.881 31.4409 179.459 35.7679 193.61 35.7679C207.762 35.7679 228.382 40.8796 241.153 40.8796C253.923 40.8796 275.746 16.2778 289.789 16.2778C303.832 16.2778 325.798 12.9523 336.898 12.9523C347.999 12.9523 373.379 20.9192 385.752 20.9192C398.126 20.9192 422.12 33.8251 432.644 33.8251C443.168 33.8251 470.576 24.9021 481.28 24.9021C491.984 24.9021 517.314 1.02498 529.916 1.02498'

const GRAY_PATH =
  'M1.02524 20.8489C1.02524 20.8489 16.1066 24.8886 21.1107 24.8886C26.1148 24.8886 36.6857 27.3742 42.033 27.3742C47.3803 27.3742 56.5209 25.9038 62.2114 25.9038C67.9019 25.9038 77.1015 28.0978 83.1352 28.0978C89.1688 28.0978 97.9605 30.6897 103.405 30.6897C108.85 30.6897 118.154 18.2153 124.141 18.2153C130.129 18.2153 139.494 16.5291 144.227 16.5291C148.96 16.5291 159.781 20.5688 165.056 20.5688C170.332 20.5688 180.562 8.87336 185.049 8.87336C189.536 8.87336 201.221 1.02498 205.785 1.02498C210.349 1.02498 221.149 10.4813 226.521 10.4813'

export function ChartLine({ variant, gradientId }: ChartLineProps) {
  if (variant === 'orange') {
    return (
      <svg
        className="chart-line"
        viewBox="0 0 530.941 41.9045"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="266.015"
            y1="-11.2941"
            x2="265.732"
            y2="53.9719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3300" />
            <stop offset="0.5" stopColor="#FF4900" />
            <stop offset="1" stopColor="#FF8400" />
          </linearGradient>
        </defs>
        <path
          d={ORANGE_PATH}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.05"
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
