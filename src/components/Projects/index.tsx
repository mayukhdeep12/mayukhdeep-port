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
    title: 'Webgl Experience',
    href: '#',
    icon: 'Play',
  },
  {
    title: 'Generative AI',
    href: '#',
    icon: 'Play',
  },
  {
    title: 'Xperience Reality',
    href: '#',
    icon: 'Play',
  },
  {
    title: 'Radiological Tool',
    href: '#',
    icon: 'Play',
  },
  
]

function Projects() {
  const isLoading = useStore(state => state.isLoading)
  const open = useStore(state => state.isProjects)
  return (
    <div className={`projects ${open && !isLoading ? 'open' : ''}`}>
      <div className='projects-socials'>
        {projects.map((link, index) => (
          <ProjectsLink
            key={link.title}
            open={open && !isLoading}
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