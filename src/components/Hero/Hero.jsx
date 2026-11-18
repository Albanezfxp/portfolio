import { useRef } from 'react'
import { gsap, SplitText, useGSAP, MEDIA } from '../../lib/gsap'
import { profile } from '../../data/profile'
import Nav from '../Nav/Nav'
import HeroFigure from './HeroFigure'
import styles from './Hero.module.css'

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      // 1. Intro ao carregar (~2s)
      mm.add(MEDIA.motion, () => {
        const split = SplitText.create(q('[data-title]'), {
          type: 'chars',
          mask: 'chars',
          charsClass: 'hero-char',
        })
        const stroke = q('[data-year-stroke]')

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          // devolve o texto original (kerning exato do design) ao terminar
          onComplete: () => split.revert(),
        })

        tl.from(q('[data-glow]'), { autoAlpha: 0, scale: 0.85, duration: 1.4, ease: 'power2.out' }, 0)
          .from(split.chars, { yPercent: 105, duration: 0.9, stagger: 0.04, ease: 'power4.out' }, 0.55)
          .fromTo(stroke, { strokeDashoffset: 1400 }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.6)
          .fromTo(stroke, { fillOpacity: 0 }, { fillOpacity: 1, duration: 0.4, ease: 'none' }, '>-0.15')
          .from(q('[data-hero-ui]'), { autoAlpha: 0, y: 10, duration: 0.6, stagger: 0.06 }, 1.45)

        return () => split.revert()
      })

      // 2. Mouse contínuo (quickTo)
      mm.add(MEDIA.pointer, () => {
        const tween = (selector, prop, duration) =>
          gsap.quickTo(q(selector), prop, { duration, ease: 'power3' })

        const glowX = tween('[data-glow-move]', 'x', 1.8)
        const glowY = tween('[data-glow-move]', 'y', 1.8)
        const titleX = tween('[data-title-mouse]', 'x', 1.1)
        const yearX = tween('[data-year-mouse]', 'x', 1.1)

        const onMove = (e) => {
          const nx = (e.clientX / window.innerWidth) * 2 - 1
          const ny = (e.clientY / window.innerHeight) * 2 - 1
          glowX(nx * 70)
          glowY(ny * 45)
          titleX(nx * 16)
          yearX(-nx * 16)
        }

        window.addEventListener('mousemove', onMove)
        return () => window.removeEventListener('mousemove', onMove)
      })

      // 3. Saída do hero (pin + scrub). A seção seguinte sobe por cima
      //    no fim do pin (margin negativa no Projects.module.css).
      mm.add(MEDIA.desktop, () => {
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: '+=100%',
              pin: true,
              scrub: 0.6,
            },
          })
          .to(q('[data-title-scroll]'), { xPercent: 35, autoAlpha: 0, duration: 0.7 }, 0)
          .to(q('[data-year-scroll]'), { xPercent: -35, autoAlpha: 0, duration: 0.7 }, 0)
          .to(q('[data-glow-fade]'), { autoAlpha: 0, duration: 0.6 }, 0)
          .to(q('[data-hero-fade]'), { autoAlpha: 0, duration: 0.3 }, 0)
          .to({}, { duration: 0.25 })
      })
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className={styles.hero}>
      <div className={styles.glowAnchor} data-glow-fade>
        <div className={styles.glowMove} data-glow-move>
          <div className={styles.glow} data-glow />
        </div>
      </div>

      <div className={styles.navLayer} data-hero-fade>
        <Nav />
      </div>

      {/* Boneco estático por enquanto (sem animação) */}
      <div className={styles.figure}>
        <HeroFigure className={styles.figureSvg} />
      </div>

      <div className={styles.bottom}>
        <div className={styles.meta} data-hero-fade>
          <a href="#projetos" className={styles.hint} data-hero-ui>
            Rolar ↓
          </a>
          <p className={styles.label} data-hero-ui>
            {profile.role}
            <br />
            {profile.location}
          </p>
        </div>

        <h1 className={styles.titles}>
          <span className={styles.yearScroll} data-year-scroll>
            <span className={styles.yearMouse} data-year-mouse>
              <svg className={styles.year} viewBox="0 0 370 150" aria-hidden="true">
                {profile.heroTag.split(' ').map((word, i) => (
                  <text key={word} x="0" y={62 + i * 74} className={styles.yearText} data-year-stroke>
                    {word}
                  </text>
                ))}
              </svg>
              <span className="sr-only">{profile.heroTag}</span>
            </span>
          </span>
          <span className={styles.titleScroll} data-title-scroll>
            <span className={styles.titleMouse} data-title-mouse>
              <span className={styles.title} data-title>
                Portfólio
              </span>
            </span>
          </span>
        </h1>
      </div>
    </section>
  )
}
