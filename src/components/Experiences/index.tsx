import useStore from '@/api/store'
import ExperiencesLink from './ExperiencesLink'

interface ExperienceData {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

const experiencesData: ExperienceData[] = [
  {
    company: 'TechCorp Solutions',
    position: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    description: 'Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    company: 'InnovateTech Inc.',
    position: 'Frontend Developer',
    duration: '2020 - 2022',
    description: 'Built responsive web applications with modern JavaScript frameworks. Collaborated with UX/UI team to implement pixel-perfect designs and improved application performance by 40%.',
    technologies: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack', 'Jest', 'Figma']
  },
  {
    company: 'Digital Dynamics',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    description: 'Developed and maintained client websites using various CMS platforms. Gained experience in backend development and database management while working on e-commerce solutions.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Git']
  },
  {
    company: 'StartupHub',
    position: 'Intern Developer',
    duration: '2018 - 2019',
    description: 'Assisted in developing mobile-first web applications. Participated in code reviews and learned best practices for clean code and version control in an agile environment.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Firebase', 'Scrum']
  }
]

function Experiences() {
  const isLoading = useStore(state => state.isLoading)
  const isExperiences = useStore(state => state.isExperiences)

  return (
    <div className={`experiences ${isExperiences && !isLoading ? 'open' : ''}`} style={{ zIndex: isExperiences && !isLoading ? 3 : 2 }}>
      <div className='experiences-container'>
        
        <div className='experiences-timeline-wrapper'>
          <div className='experiences-timeline'>
            {experiencesData.map((experience: ExperienceData, index: number) => (
              <ExperiencesLink
                key={experience.company}
                open={isExperiences && !isLoading}
                company={experience.company}
                position={experience.position}
                duration={experience.duration}
                description={experience.description}
                technologies={experience.technologies}
                delay={(index + 1) * 0.1 + 0.3}
                animationDuration={0.6 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences