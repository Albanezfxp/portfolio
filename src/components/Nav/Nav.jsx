import { navLinks, profile } from '../../data/profile'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <header className={styles.nav}>
      <a href="#top" className={styles.logo} aria-label={`${profile.name}, início`} data-hero-ui>
        {profile.initials}
      </a>
      <span className={styles.name} data-hero-ui>
        {profile.name}
      </span>
      <nav aria-label="Seções">
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href} data-hero-ui>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
