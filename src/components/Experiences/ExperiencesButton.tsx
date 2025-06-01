import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

function ExperiencesButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isExperiences)
  const setOpen = useStore(state => state.setIsExperiences)
  const setProjectsOpen = useStore(state => state.setIsProjects)
  const setAboutOpen = useStore(state => state.setIsAbout)
  const setContactsOpen = useStore(state => state.setIsContacts)
  const setSkillsOpen = useStore(state => state.setIsSkills)
  
  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
      setProjectsOpen(false)
      setAboutOpen(false)
      setContactsOpen(false)
      setSkillsOpen(false)
    }
  }, [setOpen, open, setProjectsOpen, setAboutOpen, setContactsOpen, setSkillsOpen])

  useCursor('experiences-button', ref)

  return (
    <button 
      ref={ref} 
      className={`nav-button navbar-text ${open ? 'nav-button-active' : ''}`} 
      onClick={toggle}
    >
      Experiences
      <span className='nav-button-aura' />
    </button>
  )
}

export default ExperiencesButton