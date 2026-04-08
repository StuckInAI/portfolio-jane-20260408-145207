import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    type: 'Full-time',
    description: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and drove adoption of TypeScript across the team.',
    achievements: [
      'Reduced page load time by 40% through performance optimization',
      'Built real-time collaboration features used by 50k+ daily users',
      'Introduced automated testing, achieving 85% code coverage'
    ],
    color: '#6c63ff'
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    type: 'Full-time',
    description: 'Developed and maintained multiple React applications. Worked closely with designers to implement pixel-perfect UIs.',
    achievements: [
      'Built component library adopted by 5 product teams',
      'Improved lighthouse score from 60 to 95',
      'Reduced bundle size by 35% using code splitting'
    ],
    color: '#ff6584'
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    period: '2019 – 2020',
    type: 'Full-time',
    description: 'Built responsive websites and web apps for various clients across e-commerce, hospitality, and media industries.',
    achievements: [
      'Delivered 20+ client projects on time and budget',
      'Introduced Git workflow improving team collaboration',
      'Learned React and Node.js in first 3 months'
    ],
    color: '#43e97b'
  },
  {
    id: 4,
    role: 'Freelance Developer',
    company: 'Self-employed',
    period: '2018 – 2019',
    type: 'Freelance',
    description: 'Worked with various clients to build custom web solutions, from simple landing pages to complex web applications.',
    achievements: [
      'Managed 10+ concurrent client projects',
      'Built e-commerce solution generating $500k in first year',
      'Maintained 5-star client satisfaction rating'
    ],
    color: '#f7971e'
  }
];

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`${styles.timelineItem} ${idx % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.timelineDot} style={{ background: exp.color }}></div>
              <div className={styles.timelineCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company} style={{ color: exp.color }}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.type}>{exp.type}</span>
                  </div>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((a) => (
                    <li key={a} className={styles.achievement}>
                      <span className={styles.dot} style={{ background: exp.color }}></span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className={styles.timelineLine}></div>
        </div>
      </div>
    </section>
  );
}
