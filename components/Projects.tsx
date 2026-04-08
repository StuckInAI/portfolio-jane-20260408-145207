import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: '#6c63ff',
    emoji: '🛍️',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop kanban boards and real-time updates.',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
    color: '#ff6584',
    emoji: '📋',
    featured: true
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    description: 'Sleek chat interface powered by OpenAI API with conversation history and context management.',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'Vercel'],
    color: '#43e97b',
    emoji: '🤖',
    featured: true
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Headless CMS for managing portfolio content with a custom admin panel and API.',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    color: '#f7971e',
    emoji: '📁',
    featured: false
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Real-time weather app with location-based forecasts, charts, and alerts.',
    tags: ['Vue.js', 'OpenWeather API', 'Chart.js'],
    color: '#4facfe',
    emoji: '🌤️',
    featured: false
  },
  {
    id: 6,
    title: 'Crypto Tracker',
    description: 'Live cryptocurrency portfolio tracker with price alerts and market analysis.',
    tags: ['React', 'CoinGecko API', 'Redux'],
    color: '#a18cd1',
    emoji: '📈',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of the things I&apos;ve built</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            >
              <div
                className={styles.projectIcon}
                style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}
              >
                <span>{project.emoji}</span>
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.projectActions}>
                <a href="#" className={styles.actionBtn}>
                  <span>&#9651;</span> Live Demo
                </a>
                <a href="#" className={styles.actionBtnSecondary}>
                  <span>&lt;/&gt;</span> Code
                </a>
              </div>
              {project.featured && (
                <span className={styles.featuredBadge}>Featured</span>
              )}
            </div>
          ))}
        </div>
        <div className={styles.viewMore}>
          <a href="#" className="btn btn-outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
}
