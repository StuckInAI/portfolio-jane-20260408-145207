import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerLeft}>
          <a href="#home" className={styles.logo}>
            John<span>Doe</span>
          </a>
          <p className={styles.footerText}>
            Building beautiful digital experiences with passion and precision.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p className={styles.copyright}>
          &copy; {year} John Doe. All rights reserved.
        </p>
        <p className={styles.madeWith}>
          Made with <span>♥</span> using Next.js
        </p>
      </div>
    </footer>
  );
}
