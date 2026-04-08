import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'CSS / SASS', level: 90 },
      { name: 'Vue.js', level: 75 }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 75 }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 72 },
      { name: 'CI/CD', level: 78 },
      { name: 'Linux', level: 82 }
    ]
  }
];

const techIcons = [
  { name: 'React', color: '#61DAFB', symbol: 'Re' },
  { name: 'Next.js', color: '#fff', symbol: 'Nx' },
  { name: 'TypeScript', color: '#3178C6', symbol: 'TS' },
  { name: 'Node.js', color: '#68A063', symbol: 'No' },
  { name: 'PostgreSQL', color: '#336791', symbol: 'PG' },
  { name: 'Docker', color: '#2496ED', symbol: 'Do' },
  { name: 'AWS', color: '#FF9900', symbol: 'AW' },
  { name: 'MongoDB', color: '#47A248', symbol: 'Mg' }
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        <div className={styles.techIcons}>
          {techIcons.map((tech) => (
            <div key={tech.name} className={styles.techIcon} style={{ '--tech-color': tech.color } as React.CSSProperties}>
              <span>{tech.symbol}</span>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <span className={styles.skillIcon}>{cat.icon}</span>
                <h3 className={styles.skillTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
