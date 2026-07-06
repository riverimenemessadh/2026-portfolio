import ExpertiseCard from '@/components/ui/ExpertiseCard'
import StackIcon from '@/components/ui/StackIcon'
import { stack } from '@/data/stackData'
import styles from './Expertise.module.css'

export default function Expertise() {
  return (
    <section id="expertise" className={styles.expertise}>
      <h2 className={styles.heading}>Expertise</h2>

      <div className={styles.cardsRow}>
        <ExpertiseCard
          illustrationSrc="/assets/images/web-illustration.svg"
          title="Web Development"
          description="Full-stack web development across frontend, backend, and database layers."
        />
        <ExpertiseCard
          illustrationSrc="/assets/images/mobile-illustration.svg"
          title="Mobile Development"
          description="Mobile applications that work consistently across platforms without compromise."
        />
      </div>

      <h3 className={styles.stackHeading}>Stack</h3>

      <div className={styles.stackContainer}>
        <div className={styles.stackGroup}>
          <span className={styles.groupLabel}>WEB</span>
          <div className={styles.iconsRow}>
            {stack.web.map((item) => (
              <StackIcon key={item.name} src={item.icon} name={item.name} />
            ))}
          </div>
        </div>

        <div className={styles.stackGroup}>
          <span className={styles.groupLabel}>MOBILE</span>
          <div className={styles.iconsRow}>
            {stack.mobile.map((item) => (
              <StackIcon key={item.name} src={item.icon} name={item.name} />
            ))}
          </div>
        </div>

        <div className={styles.stackGroup}>
          <span className={styles.groupLabel}>TOOLS</span>
          <div className={styles.iconsRow}>
            {stack.tools.map((item) => (
              <StackIcon key={item.name} src={item.icon} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}