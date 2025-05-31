import useStore from '@/api/store'
import SkillsLink from './SkillsLink'
import { Icon } from '@/assets'

interface SkillsLink {
  title: string
  href: string
  icon: Icon
}

interface SkillCategory {
  title: string
  skills: string[]
  icon: string
}

const skillsLinks: SkillsLink[] = [
  {
    title: 'Resume',
    href: `https://drive.google.com/file/d/1lD2Tpj9VVeXx5mwi_mF_2rQPlsG-A-Jv/view?usp=sharing`,
    icon: 'Email',
  },
  {
    title: 'Email',
    href: 'mailto:mayukhdeep12@gmail.com',
    icon: 'Email',
  },
  {
    title: 'LinkedIn',
    href: `https://linkedin.com/in/${import.meta.env.VITE_LINKEDIN_HANDLE}`,
    icon: 'LinkedIn',
  },
  {
    title: 'GitHub',
    href: `https://github.com/${import.meta.env.VITE_GITHUB_HANDLE}`,
    icon: 'GitHub',
  },
  {
    title: 'X / Twitter',
    href: `https://twitter.com/${import.meta.env.VITE_TWITTER_HANDLE}`,
    icon: 'X',
  },
]

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust'],
    icon: '💻'
  },
  {
    title: 'Frontend Technologies',
    skills: ['React', 'Vue.js', 'Angular', 'Next.js', 'Svelte', 'HTML5', 'CSS3'],
    icon: '🎨'
  },
  {
    title: 'Backend Technologies',
    skills: ['Node.js', 'Express', 'Django', 'FastAPI', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
    icon: '⚙️'
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx'],
    icon: '🚀'
  },
  {
    title: 'Spoken Languages',
    skills: ['English (Fluent)', 'Hindi (Native)', 'Bengali (Native)', 'Spanish (Basic)'],
    icon: '🌍'
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Team Collaboration', 'Problem Solving', 'Communication', 'Project Management'],
    icon: '🤝'
  }
]

function Skills() {
  const isLoading = useStore(state => state.isLoading)
  const isSkills = useStore(state => state.isSkills)

  return (
    <div className={`skills ${isSkills && !isLoading ? 'open' : ''}`} style={{ zIndex: isSkills && !isLoading ? 3 : 2 }}>
      <div className='skills-content'>
        <div className='skills-grid'>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className='skills-category'
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className='skills-category-header'>
                <span className='skills-category-icon'>{category.icon}</span>
                <h3 className='skills-category-title'>{category.title}</h3>
              </div>
              <div className='skills-list'>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill} 
                    className='skill-item'
                    style={{
                      animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className='skills-socials'>
          {skillsLinks.map((link: SkillsLink, index: number) => (
            <SkillsLink
              key={link.title}
              open={isSkills && !isLoading}
              title={link.title}
              href={link.href}
              icon={link.icon}
              delay={(index + 1) * 0.05 + 0.4}
              duration={0.7 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills