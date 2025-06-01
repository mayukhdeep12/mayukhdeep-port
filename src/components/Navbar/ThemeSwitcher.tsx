import { useCallback } from 'react'
import useStore from '@/api/store'
import { randomHexColor } from '@/utils/helpers'
import NavbarButton from './NavbarButton'

// Option 1: Palette Icon (Most Popular for Theme Switchers)
const PaletteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
)

function ThemeSwitcher() {
  const setAccentColor = useStore(state => state.setAccentColor)

  const onClick = useCallback(() => setAccentColor(randomHexColor()), [setAccentColor])

  return (
    <NavbarButton id='theme-switcher' side='right' onClick={onClick}>
      {/* Replace with your preferred icon */}
      <PaletteIcon />
    </NavbarButton>
  )
}

export default ThemeSwitcher