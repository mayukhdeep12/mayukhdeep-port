import { useCursor } from '@/hooks/useCursor'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface ExperienceLinkProps {
  open: boolean
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
  delay: number
  animationDuration: number
}

function ExperiencesLink(props: ExperienceLinkProps) {
  const { open, company, position, duration, description, technologies, delay, animationDuration } = props
  const ref = useRef<HTMLDivElement>(null)

  useCursor(`experiences-timeline-item-${company}`, ref)

  return (
    <motion.div
      ref={ref}
      className='experiences-timeline-item'
      variants={{
        hidden: { y: '50px', opacity: 0, pointerEvents: 'none' },
        visible: { y: 0, opacity: 1, pointerEvents: 'auto' },
      }}
      initial='hidden'
      animate={open ? 'visible' : 'hidden'}
      transition={{ ease: [0.005, 0.985, 0.22, 1], delay, duration: animationDuration }}
    >
      <div className='experiences-timeline-marker'>
        <div className='experiences-timeline-dot'></div>
        <div className='experiences-timeline-line'></div>
      </div>
      
      <div className='experiences-timeline-content'>
        <div className='experiences-timeline-header'>
          <h3 className='experiences-timeline-company'>{company}</h3>
          <span className='experiences-timeline-duration'>{duration}</span>
        </div>
        
        <h4 className='experiences-timeline-position'>{position}</h4>
        
        <p className='experiences-timeline-description'>{description}</p>
        
        <div className='experiences-timeline-technologies'>
          {technologies.map((tech, index) => (
            <span key={index} className='experiences-timeline-tech-tag'>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ExperiencesLink