import { useRef } from 'react'
import { gsap, SplitText, useGSAP, MEDIA } from '../../lib/gsap'
import { about } from '../../data/profile'
import { aboutExtra, aboutFacts } from '../../data/about'
import Skills from './Skills'
import styles from './About.module.css'

export default function About() {
  const root = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Palavras acendem de cinza escuro para #EDEDED conforme o scroll
      mm.add(MEDIA.motion, () => {
        const text = root.current.querySelector('[data-reveal-text]')
        SplitText.create(text, {
          type: 'words',
          autoSplit: true,
          onSplit: (self) =>
            gsap.fromTo(
              self.words,
              { color: '#2A2A2A' },
              {
                color: '#EDEDED',
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: { trigger: text, start: 'top 80%', end: 'bottom 45%', scrub: true },
              },
            ),
        })
      })

      // Parágrafo secundário e fatos entram em cascata ao rolar
      mm.add(MEDIA.motion, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: '[data-extra]', start: 'top 85%', once: true },
        })
        tl.from('[data-extra-text]', { autoAlpha: 0, y: 16, duration: 0.7, ease: 'power3.out' }).from(
          '[data-fact]',
          { autoAlpha: 0, y: 14, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          0.2,
        )
        tl.from('[data-fact-line]', { scaleX: 0, duration: 0.9, stagger: 0.1, ease: 'power3.inOut' }, 0.2)
      })
    },
    { scope: root },
  )

  return (
    <section id="sobre" ref={root} className={styles.about}>
      <div className={styles.row}>
        <h2 className={styles.label}>Sobre</h2>
        <div className={styles.content}>
          <p className={styles.text} data-reveal-text>
            {about}
          </p>
          <div className={styles.extra} data-extra>
            <div className={styles.extraText} data-extra-text>
              {aboutExtra.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className={styles.facts}>
              {aboutFacts.map((fact) => (
                <div key={fact.value} className={styles.fact} data-fact>
                  <span className={styles.factLine} data-fact-line />
                  <dt className={styles.factValue}>{fact.value}</dt>
                  <dd className={styles.factLabel}>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  )
}
