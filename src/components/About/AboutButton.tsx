import { motion } from 'framer-motion'
import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

const transition = { ease: [0.005, 0.985, 0.22, 1], duration: 0.6 }
const variants = (y: '100%' | '-100%') => ({ hidden: { y, opacity: 0 }, visible: { y: 0, opacity: 1 } })
const textProps = (main: boolean) => (open: boolean) => ({
  className: `about-button-text${main ? '' : '-close'}`,
  variants: variants(main ? '-100%' : '100%'),
  initial: main ? 'visible' : 'hidden',
  animate: main ? (open ? 'hidden' : 'visible') : open ? 'visible' : 'hidden',
  transition,
})
const mainProps = textProps(true)
const closeProps = textProps(false)

function AboutButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isAbout)
  const setOpen = useStore(state => state.setIsAbout)
  const setProjectsOpen = useStore(state => state.setIsProjects)
  const setContactsOpen = useStore(state => state.setIsContacts)

  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
      setContactsOpen(false) // Close Contacts when Projects is opened
      setProjectsOpen(false)
    }
  }, [setOpen, open, setContactsOpen])

  useCursor('about-button', ref)

  return (
    <button ref={ref} className='about-button navbar-text' onClick={toggle}>
      <motion.span {...mainProps(open)}>About</motion.span>
      <motion.span {...closeProps(open)}>Close</motion.span>
      <span className='about-button-aura' />
    </button>
  )
}

export default AboutButton