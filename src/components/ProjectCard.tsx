import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { PhotoStack } from './photos/PhotoStack'
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
  variant?: 'default' | 'benchmark'
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
  variant = 'default',
  children,
}: ProjectCardProps) {
  const wrapClass = [
    'project-card-wrap',
    variant === 'benchmark' && 'project-card-wrap--benchmark',
    showLogo && 'project-card-wrap--logo',
  ]
    .filter(Boolean)
    .join(' ')

  const isInternalLink = href.startsWith('/') && !href.startsWith('//')

  const cardContent = (
    <>
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
          <img
            className="project-card-logo-mark"
            src="/assets/logo-large.svg"
            alt=""
            width={65}
            height={42}
          />
          <PhotoStack />
        </div>
      )}

      <span className="project-card-arrow" aria-hidden="true">
        <img src="/assets/arrow-link.svg" alt="" width={32} height={32} />
      </span>
    </>
  )

  return (
    <div className={wrapClass}>
      {isInternalLink ? (
        <Link to={href} className="project-card">
          {cardContent}
        </Link>
      ) : (
        <a href={href} className="project-card">
          {cardContent}
        </a>
      )}

    {title && description && (
      <p className="project-card-caption">
        <strong>{title}</strong>
        <span>{description}</span>
      </p>
    )}
    </div>
  )
}
