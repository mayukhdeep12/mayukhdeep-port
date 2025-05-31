import { motion } from 'framer-motion'
import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

const transition = { ease: [0.005, 0.985, 0.22, 1], duration: 0.6 }
const variants = (y: '100%' | '-100%') => ({ hidden: { y, opacity: 0 }, visible: { y: 0, opacity: 1 } })
const textProps = (main: boolean) => (open: boolean) => ({
  className: `skills-button-text${main ? '' : '-close'}`,
  variants: variants(main ? '-100%' : '100%'),
  initial: main ? 'visible' : 'hidden',
  animate: main ? (open ? 'hidden' : 'visible') : open ? 'visible' : 'hidden',
  transition,
})
const mainProps = textProps(true)
const closeProps = textProps(false)

function SkillsButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isSkills)
  const setOpen = useStore(state => state.setIsSkills)
  const setProjectsOpen = useStore(state => state.setIsProjects)
  const setAboutOpen = useStore(state => state.setIsAbout)
  const setContactsOpen = useStore(state => state.setIsContacts)
  const setIsExperiences = useStore(state => state.setIsExperiences)

  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
      setProjectsOpen(false)
      setAboutOpen(false)
      setContactsOpen(false)
      setIsExperiences(false)
    }
  }, [setOpen, open, setProjectsOpen, setAboutOpen, setContactsOpen, setIsExperiences])

  useCursor('skills-button', ref)

  return (
    <button ref={ref} className='skills-button navbar-text' onClick={toggle}>
      <motion.span {...mainProps(open)}>Skills</motion.span>
      <motion.span {...closeProps(open)}>Close</motion.span>
      <span className='skills-button-glow' />
    </button>
  )
}

export default SkillsButton