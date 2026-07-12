import './PhotoStack.css'

const PHOTOS = [
  {
    src: '/assets/photos/img-3752.png',
    alt: 'Surfboards at the beach',
    className: 'photo-stack-item--3752',
  },
  {
    src: '/assets/photos/img-4071.png',
    alt: 'Dog resting near ancient ruins',
    className: 'photo-stack-item--4071',
  },
  {
    src: '/assets/photos/img-4072.png',
    alt: 'Motorcycle passing a colorful building',
    className: 'photo-stack-item--4072',
  },
  {
    src: '/assets/photos/img-3753.png',
    alt: 'Island cabin at dusk',
    className: 'photo-stack-item--3753',
  },
  {
    src: '/assets/photos/img-3908.png',
    alt: 'Building reflected in a puddle',
    className: 'photo-stack-item--3908',
  },
] as const

export function PhotoStack() {
  return (
    <div className="photo-stack" aria-hidden="true">
      {PHOTOS.map((photo) => (
        <div key={photo.className} className={`photo-stack-item ${photo.className}`}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  )
}
