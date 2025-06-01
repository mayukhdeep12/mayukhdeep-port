import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

function AboutButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isAbout)
  const setOpen = useStore(state => state.setIsAbout)
  const setProjectsOpen = useStore(state => state.setIsProjects)
  const setContactsOpen = useStore(state => state.setIsContacts)
  const setExperiencesOpen = useStore(state => state.setIsExperiences)
  const setSkillsOpen = useStore(state => state.setIsSkills)
  
  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
      setContactsOpen(false)
      setProjectsOpen(false)
      setExperiencesOpen(false)
      setSkillsOpen(false)
    }
  }, [setOpen, open, setContactsOpen, setProjectsOpen, setExperiencesOpen, setSkillsOpen])

  useCursor('about-button', ref)

  return (
    <button 
      ref={ref} 
      className={`nav-button navbar-text ${open ? 'nav-button-active' : ''}`} 
      onClick={toggle}
    >
      About
      <span className='nav-button-aura' />
    </button>
  )
}

export default AboutButton