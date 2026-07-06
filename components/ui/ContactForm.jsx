'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <textarea
        placeholder="Write a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.textarea}
        required
      />

      <button type="submit" className={styles.submitButton} disabled={status === 'sending'}>
        {status === 'sent'
          ? 'Message sent!'
          : status === 'sending'
          ? 'Sending...'
          : status === 'error'
          ? 'Something went wrong, try again'
          : 'Send'}
      </button>
    </form>
  )
}