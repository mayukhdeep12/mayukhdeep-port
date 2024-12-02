import useStore from '@/api/store'
import ProjectsLink from './ProjectsLink'
import { Icon } from '@/assets'

interface ProjectSocial {
  title: string
  href: string
  icon: Icon
}

const projects: ProjectSocial[] = [
  {
    title: '1. Webgl Theatre',
    href: '#',
    icon: 'Play',
  },
  {
    title: '2. TenFold AI',
    href: '#',
    icon: 'Play',
  },
  {
    title: '3. Xperience Augment',
    href: '#',
    icon: 'Play',
  },
  {
    title: '4. DeepScan',
    href: '#',
    icon: 'Play',
  },
  {
    title: '5. AI Trip Planner',
    href: '#',
    icon: 'Play',
  },
  {
    title: '6. Video Editing',
    href: '#',
    icon: 'Play',
  },
  {
    title: '7. Drone Simulator',
    href: '#',
    icon: 'Play',
  },
]

function Projects() {
  const isLoading = useStore(state => state.isLoading)
  const isContacts = useStore(state => state.isContacts)
  const isProjects = useStore(state => state.isProjects)

  return (
    <div className={`projects ${isProjects && !isLoading ? 'open' : ''}`} style={{ zIndex: isProjects && !isLoading ? 3 : 2 }}>
      <div className='projects-socials'>
        {projects.map((link, index) => (
          <ProjectsLink
            key={link.title}
            open={isProjects && !isLoading}
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

export default Projects