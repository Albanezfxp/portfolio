import { useRef, useState } from 'react'
import { gsap, useGSAP, MEDIA } from '../../lib/gsap'
import { certifications, certificationIssuers } from '../../data/certifications'
import styles from './Certifications.module.css'

export default function Certifications() {
  const root = useRef(null)
  const [issuer, setIssuer] = useState('Todos')

  const visible = certifications.filter((c) => issuer === 'Todos' || c.issuer === issuer)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      // Cada linha: borda desenha, depois as células aparecem
      mm.add(MEDIA.motion, () => {
        q('[data-row]').forEach((row) => {
          gsap
            .timeline({ scrollTrigger: { trigger: row, start: 'top 92%', once: true } })
            .from(row.querySelectorAll('[data-line]'), { scaleX: 0, duration: 0.8, ease: 'power3.inOut' })
            .from(
              row.querySelectorAll('[data-cell]'),
              { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
              '-=0.4',
            )
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="certificacoes" ref={root} className={styles.section}>
      <h2 className={styles.label}>Certificações</h2>

      <div className={styles.filters} role="group" aria-label="Filtrar por emissor">
        {certificationIssuers.map((name) => (
          <button
            key={name}
            type="button"
            className={`${styles.filter} ${issuer === name ? styles.active : ''}`}
            aria-pressed={issuer === name}
            onClick={() => setIssuer(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <ol className={styles.list}>
        {visible.map((c, i) => (
          <li key={c.title} className={styles.row} data-row>
            <span className={`${styles.line} ${styles.lineTop}`} data-line />
            <div className={styles.content}>
              <span className={styles.date} data-cell>
                {c.date}
                {c.hours ? ` · ${c.hours}` : ''}
              </span>
              <h3 className={styles.title} data-cell>
                {c.title}
              </h3>
              <span className={styles.issuer} data-cell>
                {c.issuer}
              </span>
              <span className={styles.action} data-cell>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Ver certificado ↗
                  </a>
                )}
              </span>
            </div>
            {i === visible.length - 1 && <span className={`${styles.line} ${styles.lineBottom}`} data-line />}
          </li>
        ))}
      </ol>
    </section>
  )
}
