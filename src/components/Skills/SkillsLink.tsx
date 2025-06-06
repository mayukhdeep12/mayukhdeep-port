import { Icon } from '@/assets'
import { useCursor } from '@/hooks/useCursor'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface SkillsLinkProps {
  open: boolean
  title: string
  href: string
  icon: Icon
  delay: number
  duration: number
}

function SkillsLink(props: SkillsLinkProps) {
  const { open, title, href, icon, delay, duration } = props
  const ref = useRef<HTMLAnchorElement>(null)

  useCursor(`skills-socials-link-${title}`, ref, icon)

  return (
    <div className='skills-socials-link-wrapper'>
      <motion.a
        ref={ref}
        href={href}
        target='_blank'
        rel='noreferrer'
        className='skills-socials-link'
        variants={{
          hidden: { y: '101%', pointerEvents: 'none', opacity: 0 },
          visible: { y: 0, pointerEvents: 'auto', opacity: 1 },
        }}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
        transition={{ ease: [0.005, 0.985, 0.22, 1], delay, duration }}
      >
        <span className='skills-socials-link-text'>{title}</span>
        <span className='skills-socials-link-glow' />
      </motion.a>
    </div>
  )
}

export default SkillsLink