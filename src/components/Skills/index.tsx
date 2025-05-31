import useStore from '@/api/store'
import SkillsLink from './SkillsLink'
import { Icon } from '@/assets'

interface SkillsLink {
  title: string
  href: string
  icon: Icon
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

function Skills() {
  const isLoading = useStore(state => state.isLoading)
  const isSkills = useStore(state => state.isSkills)

  return (
    <div className={`skills ${isSkills && !isLoading ? 'open' : ''}`} style={{ zIndex: isSkills && !isLoading ? 3 : 2 }}>
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
  )
}

export default Skills
