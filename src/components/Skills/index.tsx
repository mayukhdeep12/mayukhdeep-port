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
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'Rust', 'C++', 'C', 'Solidity'],
    icon: '💻'
  },
  {
    title: 'AI/ML Frameworks',
    skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Transformers', 'LangChain', 'LangGraph', 'Confy UI'],
    icon: '🎨'
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Svelte', 'Vue.js', 'Three.js', 'GSAP', 'Framer Motion'],
    icon: '⚙️'
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Django', 'Flask','FastAPI',],
    icon: '🚀'
  },
  {
    title: 'Databases',
    skills: ['Supabase', 'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Sanity', 'AWS RDS', 'AWS DynamoDB'],
    icon: '🌍'
  },
  {
    title: 'Devops & Cloud',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'AWS', 'GCP', 'Azure', 'Digital Ocean'],
    icon: '🤝'
  },
  {
    title: 'XR and Game Development',
    skills: ['8thWall', 'Lens Studio', 'Unity', 'Unreal Engine'],
    icon: '🤝'
  },
  {
    title: '2D/3D Design Tools',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Premiere Pro', 'After Effects', 'Blender', 'Webflow', 'Shopify', 'Wix'],
    icon: '🤝'
  },
  {
    title: 'App Development',
    skills: ['Flutter', 'Android Studio', 'React Native'],
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