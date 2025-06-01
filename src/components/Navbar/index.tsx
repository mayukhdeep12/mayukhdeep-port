import { Fragment } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Clock from './Clock'
import MusicToggler from './MusicToggler'
import MusicControls from './MusicControls'
import HamburgerMenu from './HamburgerMenu'
import ContactsButton from '../Contacts/ContactsButton'
import ExperiencesButton from '../Experiences/ExperiencesButton'
import SkillsButton from '../Skills/SkillsButton'
import ProjectsButton from '../Projects/ProjectsButton'
import AboutButton from '../About/AboutButton'
import useStore from '@/api/store'

import NavbarItem from './NavbarItem'

function Navbar() {
  const setIsContacts = useStore(state => state.setIsContacts)
  const setIsProjects = useStore(state => state.setIsProjects)
  const setIsExperiences = useStore(state => state.setIsExperiences)
  const setIsSkills = useStore(state => state.setIsSkills)
  const setIsAbout = useStore(state => state.setIsAbout)

  const handleResetTabs = () => {
    setIsContacts(false)
    setIsProjects(false)
    setIsExperiences(false)
    setIsSkills(false)
    setIsAbout(false)
  }

  return (
    <Fragment>
      <div className='navbar'>
        <NavbarItem>
          <div className='navbar-text' onClick={handleResetTabs} style={{ cursor: 'pointer' }}>{import.meta.env.VITE_NICK_NAME}</div>
        </NavbarItem>
        <NavbarItem>
          <Clock />
        </NavbarItem>
        <NavbarItem>
          {/* Desktop navigation */}
          <div className='do-it desktop-nav'>
            <AboutButton />
            <SkillsButton />        
            <ExperiencesButton />
            <ProjectsButton />
            <ContactsButton />    
          </div>
          {/* Mobile/Tablet hamburger menu */}
          <div className='mobile-nav'>
            <HamburgerMenu />
          </div>
        </NavbarItem>
      </div>
      <MusicToggler />
      <MusicControls />
      <ThemeSwitcher />
    </Fragment>
  )
}

export default Navbar