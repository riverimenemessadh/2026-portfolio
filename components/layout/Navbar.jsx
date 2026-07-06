'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'react-feather'
import { navLinks } from '@/data/siteData'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef(null)

  // Track scroll position to toggle scrolled state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer to track which section is active
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sections.forEach((section) => observerRef.current.observe(section))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const handleLinkClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          River Messadh
        </a>

        <nav className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                activeSection === link.href.replace('#', '') ? styles.active : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`${styles.dropdown} ${isMobileOpen ? styles.dropdownOpen : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.dropdownLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}