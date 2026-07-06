'use client'

import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'react-feather'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const screenshots = project.screenshots
  const total = screenshots.length

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrev()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [total])

  // Mouse wheel navigation
  const handleWheel = (e) => {
    if (e.deltaY > 10) goToNext()
    else if (e.deltaY < -10) goToPrev()
  }

  // Touch swipe navigation (horizontal swipe = next/prev, vertical swipe down = dismiss)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 80) {
      onClose()
      return
    }

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) goToPrev()
      else goToNext()
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.modalBox}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.topBar}>
          <span className={styles.imageLabel}>
            {project.name}-{currentIndex + 1}
          </span>
          <span className={styles.counter}>
            {currentIndex + 1}/{total}
          </span>
        </div>

        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>

        <div className={styles.imageWrapper}>
          <button
            className={styles.navButton}
            style={{ left: 16 }}
            onClick={goToPrev}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={screenshots[currentIndex]}
            alt={`${project.name} screenshot ${currentIndex + 1}`}
            className={styles.screenshot}
          />

          <button
            className={styles.navButton}
            style={{ right: 16 }}
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}