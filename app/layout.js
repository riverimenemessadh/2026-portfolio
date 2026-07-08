import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'River Messadh Full-Stack Developer',
  description: 'Full-stack web and mobile developer based in Algeria.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'River Messadh Full-Stack Developer',
    description: 'Have a project or opportunity in mind? Get in touch.',
    url: 'https://rivermessadhportfolio.netlify.app',
    siteName: 'River Messadh',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'River Messadh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'River Messadh Portfolio',
    description: 'Have a project or opportunity in mind? Get in touch.',
    images: ['/og-image.png'],
  },
}


export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "River Messadh",
      "jobTitle": "Full-Stack Web & Mobile Developer",
      "url": "https://rivermessadhportfolio.netlify.app/",
      "sameAs": [
        "https://github.com/riverimenemessadh",
        "https://www.linkedin.com/in/river-messadh/",
        "https://www.upwork.com/freelancers/~017d459f20e3d30e04?mp_source=share"
      ],
      "knowsAbout": [
        "Web Development", "Mobile Development", "React", "Next.js",
        "Flutter", "Laravel", "Flutter", "Java", "Wordpress", "UI/UX", "Full-Stack Development", "Front-End Development", "Back-End Development", "Database Management", "API Integration", "Responsive Design", "Cross-Platform Development", "Agile Methodologies", "Version Control (Git)", "Testing and Debugging", "Performance Optimization", "Security Best Practices", "Cloud Services (AWS, Firebase)", "Continuous Integration/Continuous Deployment (CI/CD)", "Project Management", "Team Collaboration", "Problem Solving", "Communication Skills", "Adaptability", "Time Management", "Creativity", "Critical Thinking", "Leadership"
      ],
      "description": "The BEST Full-stack developer building web and mobile applications. Open to remote freelance projects and full-time opportunities worldwide."
    }
  )
  }}
/>
      </body>
    </html>
  )
}