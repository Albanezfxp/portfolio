import { useId, useState } from 'react'
import styles from './Experience.module.css'

/** Linha de experiência; com `item.bullets` vira acordeão (botão + painel). */
export default function ExperienceRow({ item, last, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const expandable = Boolean(item.bullets?.length)

  const head = (
    <>
      <span className={styles.period} data-cell>
        {item.period}
      </span>
      <h3 className={styles.title} data-cell>
        {item.title}
      </h3>
      <span className={styles.place} data-cell>
        {item.place}
      </span>
      {expandable && (
        <span className={`${styles.chevron}`} aria-hidden="true" data-cell>
          {open ? '−' : '+'}
        </span>
      )}
    </>
  )

  return (
    <li className={styles.row} data-row>
      <span className={`${styles.line} ${styles.lineTop}`} data-line />
      {last && <span className={`${styles.line} ${styles.lineBottom}`} data-line />}
      {expandable ? (
        <>
          <button
            type="button"
            className={`${styles.content} ${styles.toggle}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          >
            {head}
          </button>
          <div id={panelId} className={`${styles.panel} ${open ? styles.panelOpen : ''}`} role="region">
            <div className={styles.panelInner} data-cell>
              <ul className={styles.bullets}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {item.tags?.length > 0 && (
                <ul className={styles.tags}>
                  {item.tags.map((t) => (
                    <li key={t} className={styles.tag}>
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.content}>{head}</div>
      )}
    </li>
  )
}
