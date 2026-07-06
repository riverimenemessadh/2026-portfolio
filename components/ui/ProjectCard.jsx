import { ExternalLink, GitHub } from 'react-feather'
import TechPill from './TechPill'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.thumbnail}
        onClick={() => onOpenModal(project)}
        role="button"
        tabIndex={0}
        aria-label={`View ${project.name} screenshots`}
      >
        <img src={project.mockup} alt={project.name} className={styles.mockupImg} />
      </div>

      <div className={styles.detailCard}>
        <h3 className={styles.title}>{project.name}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.pillsWrapper}>
          <div className={styles.pillsRow}>
            {project.pills.map((pill) => (
              <TechPill key={pill.name} name={pill.name} icon={pill.icon} />
            ))}
          </div>
        </div>

        <div className={styles.linksRow}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <ExternalLink size={19} />
              <span>Live demo</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <GitHub size={19} />
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}