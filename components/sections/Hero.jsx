import { ChevronRight } from 'react-feather'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.heading}>River Messadh</h1>
      <p className={styles.subtitle}>Full-stack Web &amp; Mobile Developer</p>
      <p className={styles.body}>
        I build web and mobile products from database to interface.
      </p>
      <a href="#contact" className={styles.cta}>
        <span>Let&apos;s talk</span>
        <ChevronRight size={21} />
      </a>
    </section>
  )
}