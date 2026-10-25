import { useState } from 'react'
import styles from './ProjectCard.module.css'

// "PDV System" -> "PS"
const initials = (title) =>
  title
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function ProjectCard({ project, index }) {
  const { title, description, stack, url, cover, gradient } = project
  const [failed, setFailed] = useState(!cover)
  const colors = { '--from': gradient[0], '--to': gradient[1] }

  return (
    <article className={styles.card} data-card>
      <div className={styles.media} style={colors} data-media>
        <div className={styles.zoom} data-zoom>
          {failed ? (
            <div className={styles.placeholder} aria-hidden="true">
              <span className={styles.initials}>{initials(title)}</span>
            </div>
          ) : (
            <img
              className={styles.cover}
              src={cover}
              alt={`Capa do projeto ${title}`}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
            />
          )}
        </div>
        <div className={styles.overlay} aria-hidden="true" />
        {!url && <span className={styles.badge}>Em andamento</span>}
      </div>

      <div className={styles.info}>
        <p className={styles.eyebrow}>{String(index + 1).padStart(2, '0')}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.stack}>
          {stack.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label={`Ver site de ${title} (abre em nova aba)`}
          >
            Ver site ↗
          </a>
        )}
      </div>
    </article>
  )
}
