import { useCallback, useRef, useState } from 'react'
import { useCursor } from '@/hooks/useCursor'
import ContactsButton from '../Contacts/ContactsButton'
import ExperiencesButton from '../Experiences/ExperiencesButton'
import SkillsButton from '../Skills/SkillsButton'
import ProjectsButton from '../Projects/ProjectsButton'
import AboutButton from '../About/AboutButton'

function HamburgerMenu() {
  const ref = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  useCursor('hamburger-menu', ref)

  return (
    <div className='hamburger-menu-container'>
      <button 
        ref={ref} 
        className={`hamburger-menu-button navbar-text ${isOpen ? 'hamburger-menu-active' : ''}`} 
        onClick={toggle}
        aria-label="Toggle navigation menu"
      >
        <div className='hamburger-icon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className='nav-button-aura' />
      </button>
      
      {isOpen && (
        <>
          <div className='hamburger-backdrop' onClick={closeMenu} />
          <div className='hamburger-dropdown'>
            <div className='hamburger-dropdown-content'>
              <div onClick={closeMenu}>
                <AboutButton />
              </div>
              <div onClick={closeMenu}>
                <SkillsButton />
              </div>
              <div onClick={closeMenu}>
                <ExperiencesButton />
              </div>
              <div onClick={closeMenu}>
                <ProjectsButton />
              </div>
              <div onClick={closeMenu}>
                <ContactsButton />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default HamburgerMenu