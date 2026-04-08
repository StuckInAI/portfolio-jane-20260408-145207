import styles from './About.module.css';

const highlights = [
  { icon: '🎯', label: 'Problem Solver', desc: 'Breaking down complex problems into elegant solutions' },
  { icon: '💡', label: 'Creative Thinker', desc: 'Bringing fresh perspectives to every project' },
  { icon: '🤝', label: 'Team Player', desc: 'Collaborating effectively in diverse environments' },
  { icon: '📚', label: 'Lifelong Learner', desc: 'Always staying up to date with the latest tech' }
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A little bit about who I am and what I do</p>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <span>JD</span>
              </div>
              <div className={styles.imageDecor1}></div>
              <div className={styles.imageDecor2}></div>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <h3 className={styles.aboutHeading}>
              Crafting Digital Experiences That Matter
            </h3>
            <p className={styles.aboutText}>
              Hi! I&apos;m John Doe, a passionate Full Stack Developer based in New York. 
              With over 5 years of experience building web applications, I specialize 
              in creating performant, accessible, and visually stunning digital products.
            </p>
            <p className={styles.aboutText}>
              I love working with React, Next.js, Node.js, and modern web technologies. 
              When I&apos;m not coding, you&apos;ll find me hiking, reading tech blogs, 
              or contributing to open-source projects.
            </p>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name:</span>
                <span className={styles.infoValue}>John Doe</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>john@example.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location:</span>
                <span className={styles.infoValue}>New York, USA</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Available:</span>
                <span className={`${styles.infoValue} ${styles.available}`}>For Hire</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">
              Download CV
            </a>
          </div>
        </div>
        <div className={styles.highlightsGrid}>
          {highlights.map((h) => (
            <div key={h.label} className={styles.highlightCard}>
              <span className={styles.highlightIcon}>{h.icon}</span>
              <h4 className={styles.highlightLabel}>{h.label}</h4>
              <p className={styles.highlightDesc}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
