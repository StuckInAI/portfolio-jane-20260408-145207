'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'john@example.com', href: 'mailto:john@example.com' },
  { icon: '📱', label: 'Phone', value: '+1 (555) 000-1234', href: 'tel:+15550001234' },
  { icon: '📍', label: 'Location', value: 'New York, USA', href: '#' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/johndoe', href: '#' }
];

const socialLinks = [
  { label: 'GitHub', icon: 'Gh', href: '#', color: '#fff' },
  { label: 'LinkedIn', icon: 'Li', href: '#', color: '#0077b5' },
  { label: 'Twitter', icon: 'Tw', href: '#', color: '#1da1f2' },
  { label: 'Dribbble', icon: 'Dr', href: '#', color: '#ea4c89' }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let&apos;s talk!</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <h3 className={styles.contactHeading}>Let&apos;s Work Together</h3>
            <p className={styles.contactText}>
              I&apos;m always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className={styles.contactInfoList}>
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className={styles.contactInfoItem}>
                  <span className={styles.contactInfoIcon}>{info.icon}</span>
                  <div>
                    <p className={styles.contactInfoLabel}>{info.label}</p>
                    <p className={styles.contactInfoValue}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialLink}
                  aria-label={s.label}
                  style={{ '--social-color': s.color } as React.CSSProperties}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.contactRight}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {submitted && (
                <div className={styles.successMsg}>
                  ✅ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                  className={styles.formInput}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={styles.formTextarea}
                />
              </div>
              <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
