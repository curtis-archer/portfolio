type ProductThumbnailProps = {
  src: string
  alt?: string
}

export function ProductThumbnail({ src, alt = '' }: ProductThumbnailProps) {
  return (
    <div className="product-thumbnail">
      <span className="product-thumbnail-layer product-thumbnail-layer--back" aria-hidden="true" />
      <span className="product-thumbnail-layer product-thumbnail-layer--front" aria-hidden="true">
        <img className="product-thumbnail-image" src={src} alt={alt} width={32} height={32} />
      </span>
    </div>
  )
}
