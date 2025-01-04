import { useCursor } from '@/hooks/useCursor'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface AboutLinkProps {
  open: boolean
  heading: string
  paragraph: string
  imageSrc: string
  delay: number
  duration: number
}

function AboutLink(props: AboutLinkProps) {
  const { open, heading, paragraph, imageSrc, delay, duration } = props
  const ref = useRef<HTMLDivElement>(null)
  useCursor('about-content', ref)

  return (
    <div className='about-content-wrapper'>
      <motion.div
        ref={ref}
        className='about-content-container'
        variants={{
          hidden: { y: '101%', opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
        transition={{ ease: [0.005, 0.985, 0.22, 1], delay, duration }}
      >
        <div className="about-grid">
          <div className="about-image-container">
            <img src={imageSrc} alt="About" className="about-image" />
          </div>
          <div className="about-text-container">
            <div className='about-heading'>{heading}</div>
            <p className='about-paragraph'>{paragraph}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutLink