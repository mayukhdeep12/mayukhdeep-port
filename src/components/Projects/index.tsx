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
    title: '1. Genscribe AI',
    href: 'https://github.com/mayukhdeep12/Genscribe-AI',
    icon: 'Play',
  },
  {
    title: '2. HealthSphere AI',
    href: 'https://github.com/mayukhdeep12/HealthSphere-AI',
    icon: 'Play',
  },
  {
    title: '3. Mediview 3D',
    href: 'https://github.com/mayukhdeep12/MediView-3D',
    icon: 'Play',
  },
  {
    title: '4. PeerComm',
    href: 'https://github.com/mayukhdeep12/Peercomm',
    icon: 'Play',
  },
  // {
  //   title: '5. Shader Sparkle',
  //   href: '#',
  //   icon: 'Play',
  // },
  // {
  //   title: '6. Image Editing',
  //   href: '#',
  //   icon: 'Play',
  // },
  // {
  //   title: '7. Robot Simulation',
  //   href: '#',
  //   icon: 'Play',,
  // },
]

function Projects() {
  const isLoading = useStore(state => state.isLoading)
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