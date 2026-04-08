import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>John Doe</h1>
          <h2 className={styles.title}>Full Stack Developer</h2>
          <p className={styles.description}>
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about clean code and innovative solutions.
          </p>
          <div className={styles.heroActions}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Projects Done</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNum}>30+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.avatarRing}>
            <div className={styles.avatar}>
              <div className={styles.avatarInner}>
                <span>JD</span>
              </div>
            </div>
          </div>
          <div className={styles.floatingCard1}>
            <span>&#9889;</span> React Developer
          </div>
          <div className={styles.floatingCard2}>
            <span>&#128640;</span> Next.js Expert
          </div>
        </div>
      </div>
      <a href="#about" className={styles.scrollDown}>
        <span></span>
      </a>
    </section>
  );
}
