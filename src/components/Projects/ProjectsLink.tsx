import { Icon } from '@/assets'
import { useCursor } from '@/hooks/useCursor'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface ProjectsLinkProps {
  open: boolean
  title: string
  href: string
  icon: Icon
  delay: number
  duration: number
}

function ProjectsLink(props: ProjectsLinkProps) {
  const { open, title, href, icon, delay, duration } = props
  const ref = useRef<HTMLAnchorElement>(null)
  useCursor(`projects-socials-link-${title}`, ref, icon)
  return (
    <div className='projects-socials-link-wrapper'>
      <motion.a
        ref={ref}
        href={href}
        target='_blank'
        rel='noreferrer'
        className='projects-socials-link'
        variants={{
          hidden: { y: '101%', pointerEvents: 'none' },
          visible: { y: 0, pointerEvents: 'auto' },
        }}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
        transition={{ ease: [0.005, 0.985, 0.22, 1], delay, duration }}
      >
        {title}
      </motion.a>
    </div>
  )
}

export default ProjectsLink