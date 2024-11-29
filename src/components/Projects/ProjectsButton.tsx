import { motion } from 'framer-motion'
import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

const transition = { ease: [0.005, 0.985, 0.22, 1], duration: 0.6 }
const variants = (y: '100%' | '-100%') => ({ hidden: { y, opacity: 0 }, visible: { y: 0, opacity: 1 } })
const textProps = (main: boolean) => (open: boolean) => ({
  className: `projects-button-text${main ? '' : '-close'}`,
  variants: variants(main ? '-100%' : '100%'),
  initial: main ? 'visible' : 'hidden',
  animate: main ? (open ? 'hidden' : 'visible') : open ? 'visible' : 'hidden',
  transition,
})
const mainProps = textProps(true)
const closeProps = textProps(false)

function ProjectsButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isProjects)
  const setOpen = useStore(state => state.setIsProjects)
  const toggle = useCallback(() => setOpen(!open), [setOpen, open])
  useCursor('projects-button', ref)
  return (
    <button ref={ref} className='projects-button navbar-text' onClick={toggle}>
      <motion.span {...mainProps(open)}>PROJECTS</motion.span>
      <motion.span {...closeProps(open)}>Close</motion.span>
      <span className='projects-button-aura' />
    </button>
  )
}

export default ProjectsButton