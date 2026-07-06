import { Mail, GitHub, Linkedin } from 'react-feather'
import ContactForm from '@/components/ui/ContactForm'
import { footerIcons } from '@/data/siteData'
import styles from './Contact.module.css'

const FEATHER_ICONS = {
  Mail,
  GitHub,
  Linkedin,
}

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.subtitle}>Have a project or opportunity in mind? Get in touch.</p>

      <ContactForm />

      <div className={styles.socialRow}>
        {footerIcons.map((item) => {
          const IconComponent = item.type === 'feather' ? FEATHER_ICONS[item.icon] : null
          const iconSrc = item.name === 'Upwork' ? '/assets/icons/upwork-contact.png' : item.icon
          const isMailto = item.href.startsWith('mailto:')

          return (
            <a
              key={item.name}
              href={item.href}
              target={isMailto ? undefined : '_blank'}
              rel={isMailto ? undefined : 'noopener noreferrer'}
              className={styles.socialItem}
            >
              {item.type === 'feather' ? (
                <IconComponent size={50} className={styles.icon} />
              ) : (
                <img src={iconSrc} alt={item.name} className={styles.iconImg} />
              )}
              <span className={styles.label}>{item.name}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}