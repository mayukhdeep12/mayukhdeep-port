import { Fragment } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Clock from './Clock'
import MusicToggler from './MusicToggler'
import MusicControls from './MusicControls'
import ContactsButton from '../Contacts/ContactsButton'
import ProjectsButton from '../Projects/ProjectsButton'
import NavbarItem from './NavbarItem'

function Navbar() {
  return (
    <Fragment>
      <div className='navbar'>
        <NavbarItem>
          <div className='navbar-text'>{import.meta.env.VITE_NICK_NAME}</div>
        </NavbarItem>
        <NavbarItem>
          <Clock />
        </NavbarItem>
        <NavbarItem>
          <div className='do-it'>
            <ContactsButton />
            <ProjectsButton />
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