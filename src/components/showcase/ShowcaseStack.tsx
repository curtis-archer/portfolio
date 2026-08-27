import { ScatterMetricCard } from './ScatterMetricCard'
import './ShowcaseStack.css'

const CARDS = [
  {
    title: 'STAR RATING',
    value: '3.78',
    labels: ['3.21', '4.0', '4.8'] as [string, string, string],
    className: 'showcase-stack-card--rating-back',
    aboutOnly: true,
  },
  {
    title: 'UNITS SOLD',
    value: '5,100',
    labels: ['1K', '10K', '20M'] as [string, string, string],
    className: 'showcase-stack-card--units',
  },
  {
    title: 'AVG PRICE',
    value: '$35.10',
    labels: ['$15.50', '$45.50', '$75.50'] as [string, string, string],
    className: 'showcase-stack-card--price',
  },
  {
    title: 'STAR RATING',
    value: '3.78',
    labels: ['3.21', '4.0', '4.8'] as [string, string, string],
    className: 'showcase-stack-card--rating',
  },
  {
    title: 'REVIEWS',
    value: '1,234',
    labels: ['200K', '900K', '2M'] as [string, string, string],
    className: 'showcase-stack-card--reviews',
  },
] as const

export function ShowcaseStack({ layout = 'default' }: { layout?: 'default' | 'tall' }) {
  return (
    <div className="showcase-stack" aria-hidden="true">
      {CARDS.filter((card) => layout === 'tall' || !('aboutOnly' in card)).map((card) => (
        <div key={card.className} className={`showcase-stack-card ${card.className}`}>
          <ScatterMetricCard
            title={card.title}
            value={card.value}
            labels={card.labels}
            interactive={card.className === 'showcase-stack-card--reviews'}
          />
        </div>
      ))}
    </div>
  )
}
