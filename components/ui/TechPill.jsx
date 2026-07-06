import styles from './TechPill.module.css'

export default function TechPill({ name, icon }) {
  return (
    <div className={styles.pill}>
      <img src={icon} alt={name} className={styles.icon} />
      <span className={styles.name}>{name}</span>
    </div>
  )
}