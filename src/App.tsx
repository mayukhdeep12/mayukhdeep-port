import { Fragment } from 'react'
import Experiences from '@/components/Experiences'
import Skills from '@/components/Skills'
import Loader from '@/components/Loader'
import Contacts from '@/components/Contacts'
import Projects from '@/components/Projects'
import About from '@/components/About'


import Navbar from '@/components/Navbar'
import LevaGui from '@/components/LevaGui'
import Cursor from '@/components/Cursor'
import useDebug from '@/hooks/useDebug'
import usePointer from '@/hooks/usePointer'
import useInitMusic from '@/hooks/useInitMusic'
import '@/App.scss'
import Experience from './components/Experience'

function App() {
  useDebug()
  usePointer()
  useInitMusic()

  return (
    <Fragment>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffd700',
        color: '#000',
        textAlign: 'center',
        padding: '10px',
        zIndex: 9999,
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        🚧 Website Under Construction 🚧
      </div>
      <Experience />
      
      <Loader>
      <Contacts />
        <Projects />
        <About />
        <Experiences />
        <Skills />
        <Navbar />
      </Loader>
      <LevaGui />
      <Cursor />
    </Fragment>
  )
}

export default App
