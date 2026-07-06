import { Mail, GitHub, Linkedin } from 'react-feather'
import { footerNavLinks, footerIcons } from '@/data/siteData'
import styles from './Footer.module.css'

const FEATHER_ICONS = {
  Mail,
  GitHub,
  Linkedin,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />

      <div className={styles.row}>
        <p className={styles.copyright}>River Messadh © {year}</p>

        <nav className={styles.navLinks}>
          {footerNavLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.iconsRow}>
          {footerIcons.map((item) => {
            const IconComponent = item.type === 'feather' ? FEATHER_ICONS[item.icon] : null
            const iconSrc = item.name === 'Upwork' ? '/assets/icons/upwork-footer.png' : item.icon
            const isMailto = item.href.startsWith('mailto:')

            return (
              <a
                key={item.name}
                href={item.href}
                target={isMailto ? undefined : '_blank'}
                rel={isMailto ? undefined : 'noopener noreferrer'}
                className={styles.iconLink}
                aria-label={item.name}
              >
                {item.type === 'feather' ? (
                  <IconComponent size={22} />
                ) : (
                  <img src={iconSrc} alt={item.name} className={styles.iconImg} />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}