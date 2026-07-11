import type { ReactNode } from 'react'
import './ProjectCard.css'

type ProjectTag = {
  icon: string
  label: string
}

type ProjectCardProps = {
  tags?: ProjectTag[]
  preview?: string
  previewAlt?: string
  showLogo?: boolean
  href?: string
  title?: string
  description?: string
  children?: ReactNode
}

export function ProjectCard({
  tags,
  preview,
  previewAlt = '',
  showLogo = false,
  href = '#',
  title,
  description,
  children,
}: ProjectCardProps) {
  return (
    <div className="project-card-wrap">
    <a href={href} className="project-card">
      {tags && tags.length > 0 && (
        <div className="project-card-tags">
          {tags.map((tag) => (
            <span key={tag.label} className="project-card-tag">
              <img src={tag.icon} alt="" width={14} height={14} />
              {tag.label}
            </span>
          ))}
        </div>
      )}

      {children}

      {preview && (
        <div className="project-card-preview">
          <img src={preview} alt={previewAlt} />
        </div>
      )}

      {showLogo && (
        <div className="project-card-logo">
          <img src="/assets/logo-large.svg" alt="" width={65} height={42} />
        </div>
      )}

      <span className="project-card-arrow" aria-hidden="true">
        <img src="/assets/arrow-link.svg" alt="" width={32} height={32} />
      </span>
    </a>

    {title && description && (
      <p className="project-card-caption">
        <strong>{title}</strong>
        <span>{description}</span>
      </p>
    )}
    </div>
  )
}
