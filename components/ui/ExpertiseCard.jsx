import styles from './ExpertiseCard.module.css'

export default function ExpertiseCard({ illustrationSrc, title, description }) {
  return (
    <div className={styles.card} tabIndex={0} role="button">
      <img src={illustrationSrc} alt={title} className={styles.illustration} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}