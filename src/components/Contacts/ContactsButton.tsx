import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

function ContactsButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isContacts)
  const setOpen = useStore(state => state.setIsContacts)
  const setProjectsOpen = useStore(state => state.setIsProjects)
  const setAboutOpen = useStore(state => state.setIsAbout)
  const setExperiencesOpen = useStore(state => state.setIsExperiences)
  const setSkillsOpen = useStore(state => state.setIsSkills)

  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
      setProjectsOpen(false)
      setAboutOpen(false)
      setExperiencesOpen(false)
      setSkillsOpen(false)
    }
  }, [setOpen, open, setProjectsOpen, setAboutOpen, setExperiencesOpen, setSkillsOpen])

  useCursor('contacts-button', ref)

  return (
    <button 
      ref={ref} 
      className={`nav-button navbar-text ${open ? 'nav-button-active' : ''}`} 
      onClick={toggle}
    >
      CONNECT
      <span className='nav-button-aura' />
    </button>
  )
}

export default ContactsButton