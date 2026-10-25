import { useRef } from 'react'
import { gsap, useGSAP, MEDIA } from '../../lib/gsap'
import { experience, education } from '../../data/experience'
import ExperienceRow from './ExperienceRow'
import styles from './Experience.module.css'

export default function Experience() {
  const root = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      // Cada linha: borda desenha, depois data, cargo e empresa
      mm.add(MEDIA.motion, () => {
        q('[data-row]').forEach((row) => {
          gsap
            .timeline({ scrollTrigger: { trigger: row, start: 'top 88%', once: true } })
            .from(row.querySelectorAll('[data-line]'), { scaleX: 0, duration: 0.9, ease: 'power3.inOut' })
            .from(
              row.querySelectorAll('[data-cell]'),
              { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
              '-=0.45',
            )
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="experiencia" ref={root} className={styles.experience}>
      <h2 className={styles.label}>(04) Experiência</h2>
      <ol className={styles.list}>
        {experience.map((item, i) => (
          <ExperienceRow key={item.title} item={item} last={i === experience.length - 1} defaultOpen={i === 0} />
        ))}
      </ol>
      <h3 className={styles.subLabel}>Formação</h3>
      <ol className={styles.list}>
        {education.map((item, i) => (
          <ExperienceRow key={item.title} item={item} last={i === education.length - 1} />
        ))}
      </ol>
    </section>
  )
}
