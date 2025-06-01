import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

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
    <button 
      ref={ref} 
      className={`nav-button navbar-text ${open ? 'nav-button-active' : ''}`} 
      onClick={toggle}
    >
      Skills
      <span className='nav-button-aura' />
    </button>
  )
}

export default SkillsButton