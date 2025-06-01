import { useCallback, useRef } from 'react'
import useStore from '@/api/store'
import { useCursor } from '@/hooks/useCursor'

function ProjectsButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const open = useStore(state => state.isProjects)
  const setOpen = useStore(state => state.setIsProjects)
  const setContactsOpen = useStore(state => state.setIsContacts)
  const setAboutOpen = useStore(state => state.setIsAbout)
  const setExperiencesOpen = useStore(state => state.setIsExperiences)
  const setSkillsOpen = useStore(state => state.setIsSkills)

  const toggle = useCallback(() => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
      setContactsOpen(false)
      setAboutOpen(false)
      setExperiencesOpen(false)
      setSkillsOpen(false)
    }
  }, [setOpen, open, setContactsOpen, setAboutOpen, setExperiencesOpen, setSkillsOpen])

  useCursor('projects-button', ref)

  return (
    <button 
      ref={ref} 
      className={`nav-button navbar-text ${open ? 'nav-button-active' : ''}`} 
      onClick={toggle}
    >
      PROJECTS
      <span className='nav-button-aura' />
    </button>
  )
}

export default ProjectsButton