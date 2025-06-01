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
