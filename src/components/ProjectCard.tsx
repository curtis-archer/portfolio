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
  kind?: string
  description?: string
  variant?: 'default' | 'benchmark'
  className?: string
  asStatic?: boolean
  hideArrow?: boolean
  children?: ReactNode
}

export function ProjectCard({
  tags,
  preview,
  previewAlt = '',
  showLogo = false,
  href = '#',
  title,
  kind,
  description,
  variant = 'default',
  className = '',
  asStatic = false,
  hideArrow = false,
  children,
}: ProjectCardProps) {
  const wrapClass = [
    'project-card-wrap',
    variant === 'benchmark' && 'project-card-wrap--benchmark',
    showLogo && 'project-card-wrap--logo',
    className,
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

      {!hideArrow && (
        <span className="project-card-arrow" aria-hidden="true">
          <img src="/assets/arrow-link.svg" alt="" width={32} height={32} />
        </span>
      )}
    </>
  )

  return (
    <div className={wrapClass}>
      {asStatic ? (
        <div className="project-card">{cardContent}</div>
      ) : isInternalLink ? (
        <Link to={href} className="project-card">
          {cardContent}
        </Link>
      ) : (
        <a href={href} className="project-card">
          {cardContent}
        </a>
      )}

      {(title || description) && (
        <div className="project-card-caption">
          {title && (
            <p className="project-card-caption-title">
              <strong>{title}</strong>
              {kind && (
                <>
                  <span className="project-card-caption-pipe" aria-hidden="true">
                    |
                  </span>
                  <span className="project-card-caption-kind">{kind}</span>
                </>
              )}
            </p>
          )}
          {description && (
            <p className="project-card-caption-body">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}
