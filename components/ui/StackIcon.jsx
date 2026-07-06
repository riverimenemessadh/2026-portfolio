import styles from './StackIcon.module.css'

export default function StackIcon({ src, name }) {
  return (
    <div className={styles.stackIcon} tabIndex={0} role="button">
      <div className={styles.iconBox}>
        <img src={src} alt={name} className={styles.icon} />
      </div>
      <span className={styles.label}>{name}</span>
    </div>
  )
}