'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projectsData'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.subtitle}>A selection of things I&apos;ve built recently.</p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={setActiveProject}
          />
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  )
}