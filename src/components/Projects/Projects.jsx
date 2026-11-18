import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP, MEDIA } from '../../lib/gsap'
import { revealLines, cursorTilt } from '../../lib/animations'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const root = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      mm.add(MEDIA.motion, () => {
        // dispara cedo para entrar ainda durante a saída do hero
        const headStart = { start: 'top 95%' }
        revealLines(q('[data-heading]')[0], headStart)
        gsap.from(q('[data-subheading]'), {
          autoAlpha: 0,
          y: 16,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: q('[data-heading]')[0], once: true, ...headStart },
        })

        // Entrada por card: sobe 60px e a mídia abre de baixo para cima
        const cards = q('[data-card]')
        const mediaOf = (card) => card.querySelector('[data-media]')
        gsap.set(cards, { y: 60, autoAlpha: 0 })
        gsap.set(cards.map(mediaOf), { clipPath: 'inset(100% 0% 0% 0%)' })

        ScrollTrigger.batch(cards, {
          start: 'top 85%',
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out' })
            gsap.to(batch.map(mediaOf), {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.2,
              stagger: 0.15,
              delay: 0.1,
              ease: 'power4.inOut',
            })
          },
        })
      })

      // Hover: zoom 1.05 na mídia + tilt do card seguindo o cursor
      mm.add(MEDIA.pointer, () => {
        const cleanups = q('[data-card]').map((card) => {
          const zoom = gsap.quickTo(card.querySelector('[data-zoom]'), 'scale', {
            duration: 0.8,
            ease: 'power3.out',
          })
          return cursorTilt(card, { max: 3, onEnter: () => zoom(1.05), onLeave: () => zoom(1) })
        })
        return () => cleanups.forEach((cleanup) => cleanup())
      })
    },
    { scope: root },
  )

  return (
    <section id="projetos" ref={root} className={styles.projects}>
      <header className={styles.head}>
        <div>
          <h2 className={styles.heading} data-heading>
            Projetos
          </h2>
        </div>
        <p className={styles.subheading} data-subheading>
          Sistemas reais, do banco de dados
          <br />
          à interface, no ar e em andamento.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
