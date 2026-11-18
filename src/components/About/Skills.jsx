import { useRef } from 'react'
import { gsap, useGSAP, MEDIA } from '../../lib/gsap'
import { skills } from '../../data/skills'
import styles from './About.module.css'

export default function Skills() {
  const root = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      // Linha do topo desenha da esquerda para a direita, itens em cascata
      mm.add(MEDIA.motion, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
        })
        q('[data-skill-col]').forEach((col, i) => {
          const at = i * 0.12
          tl.from(col.querySelector('[data-line]'), { scaleX: 0, duration: 0.9, ease: 'power3.inOut' }, at)
            .from(
              col.querySelectorAll('[data-skill-item]'),
              { autoAlpha: 0, y: 14, duration: 0.6, stagger: 0.06, ease: 'power3.out' },
              at + 0.35,
            )
        })
      })
    },
    { scope: root },
  )

  return (
    <div ref={root} className={styles.row}>
      <h2 className={styles.label}>Habilidades</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.group} className={styles.skillCol} data-skill-col>
            <span className={styles.line} data-line />
            <h3 className={styles.group} data-skill-item>
              {skill.group}
            </h3>
            <ul className={styles.items}>
              {skill.items.map((item) => (
                <li key={item} className={styles.item} data-skill-item>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
