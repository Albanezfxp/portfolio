import { useRef } from 'react'
import { gsap, useGSAP, MEDIA } from '../../lib/gsap'
import { contactLinks, profile } from '../../data/profile'
import styles from './Contact.module.css'

export default function Contact() {
  const root = useRef(null)

  useGSAP(
    () => {
      const q = gsap.utils.selector(root)
      const mm = gsap.matchMedia()

      // As duas linhas entram de lados opostos conforme a seção chega
      mm.add(MEDIA.motion, () => {
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'top 20%', scrub: 1 },
          })
          .from(q('[data-line="1"]'), { xPercent: -45, autoAlpha: 0.2 }, 0)
          .from(q('[data-line="2"]'), { xPercent: 45, autoAlpha: 0.2 }, 0)
      })

      // Linhas de contato sobem em cascata quando a lista aparece
      mm.add(MEDIA.motion, () => {
        gsap.from(q('[data-contact-row]'), {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: q('[data-contact-list]')[0], start: 'top 85%', once: true },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="contato" ref={root} className={styles.contact}>
      <h2 className={styles.title}>
        <span className={styles.titleLine} data-line="1">
          Vamos
        </span>
        <span className={styles.titleLine} data-line="2">
          conversar.
        </span>
      </h2>

      <div className={styles.panel}>
        <p className={styles.intro}>
          Tem um projeto, uma vaga ou só quer trocar uma ideia? Me chama, respondo rápido.
        </p>

        <ul className={styles.list} data-contact-list>
          {contactLinks.map((link) => (
            <li key={link.label} data-contact-row>
              <a
                className={styles.row}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                {...(link.download && { download: link.download })}
              >
                <span className={styles.rowLabel}>{link.label}</span>
                <span className={styles.rowValue}>{link.value}</span>
                <span className={styles.rowIcon} aria-hidden="true">
                  {link.icon}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <p className={styles.copy}>
          © {profile.year} {profile.name}
        </p>
      </footer>
    </section>
  )
}
