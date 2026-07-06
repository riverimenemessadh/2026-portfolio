import { Briefcase, MapPin, Calendar, Book } from 'react-feather'
import { TbBuilding } from 'react-icons/tb'
import { aboutText, experience, education } from '@/data/experienceData'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* About Block */}
      <div className={styles.block}>
        <h2 className={styles.heading}>About</h2>
        <p className={styles.paragraph}>{aboutText.paragraph}</p>
        <p className={styles.availability}>{aboutText.availability}</p>
        <div className={styles.divider} />
      </div>

      {/* Experience Block */}
      <div className={styles.block}>
        <h2 className={styles.heading}>Experience</h2>
        {experience.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.columnsRow}>
              <div className={styles.leftColumn}>
                <p className={styles.role}>{entry.role}</p>
                <div className={styles.rowItem}>
                  <Briefcase size={22} className={styles.icon} />
                  <span>{entry.company}</span>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.rowItem}>
                  <MapPin size={22} className={styles.icon} />
                  <span>{entry.location}</span>
                </div>
                <div className={styles.rowItem}>
                  <Calendar size={22} className={styles.icon} />
                  <span>{entry.startDate} - {entry.endDate}</span>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
        ))}
      </div>

      {/* Education Block */}
      <div className={styles.block}>
        <h2 className={styles.heading}>Education</h2>
        {education.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <div className={styles.columnsRow}>
              <div className={styles.leftColumn}>
                <p className={styles.role}>{entry.degree}</p>
                <div className={styles.rowItem}>
                  <TbBuilding size={22} className={styles.icon} />
                  <span>{entry.institution}</span>
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.rowItem}>
                  <Book size={22} className={styles.icon} />
                  <span>{entry.field}</span>
                </div>
                <div className={styles.rowItem}>
                  <Calendar size={22} className={styles.icon} />
                  <span>{entry.startDate} - {entry.endDate}</span>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
        ))}
      </div>
    </section>
  )
}