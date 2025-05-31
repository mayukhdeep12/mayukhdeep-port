import { useCursor } from '@/hooks/useCursor'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export interface AboutLinkProps {
  open: boolean
  paragraph: string
  imageSrc: string
  delay: number
  duration: number
}

function AboutLink(props: AboutLinkProps) {
  const { open, paragraph, imageSrc, delay, duration } = props
  const ref = useRef<HTMLDivElement>(null)
  useCursor('about-content', ref)

  // Animation variants
  const containerVariants = {
    hidden: { y: '101%', opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        ease: [0.005, 0.985, 0.22, 1],
        delay,
        duration,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        ease: [0.005, 0.985, 0.22, 1],
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        ease: [0.005, 0.985, 0.22, 1],
        duration: 0.8,
        delay: delay + 0.2
      }
    }
  }

  return (
    <div className='about-content-wrapper'>
      <motion.div
        ref={ref}
        className='about-container'
        variants={containerVariants}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
      >
        <div className="about-grid">
          {/* Image Section */}
          <motion.div 
            className="about-image-section"
            variants={itemVariants}
          >
            <motion.div 
              className="about-image-container"
              variants={imageVariants}
            >
              <img src={imageSrc} alt="About" className="about-image" />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="about-decorative-elements">
              <div className="element element-1"></div>
              <div className="element element-2"></div>
              <div className="element element-3"></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="about-text-section">
            <motion.div variants={itemVariants}>
              <motion.div 
                className='about-subtitle'
                variants={itemVariants}
              >
                Full Stack Developer & AI Engineer
              </motion.div>
            </motion.div>

            <motion.p 
              className='about-paragraph'
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutLink