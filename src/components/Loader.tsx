// Modern Level Up Loader - Matching Your Theme
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Fragment, PropsWithChildren, useEffect, useRef, useState } from 'react'
import useStore from '@/api/store'
import Shader from '@/api/Shader'

function Loader({ children }: PropsWithChildren) {
  const counterRef = useRef<HTMLElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const isLoading = useStore(state => state.isLoading)
  const setIsLoading = useStore(state => state.setIsLoading)
  const [showComplete, setShowComplete] = useState(false)
  
  const y = useMotionValue('0%')
  const display = useMotionValue('block')
  const progress = useMotionValue(0)
  const fadeOutProgress = useMotionValue(0)

  const backgroundOpacity = useTransform(
    fadeOutProgress,
    [0, 100],
    [1, 0]
  )

  const progressWidth = useTransform(
    progress,
    [0, 100],
    ['0%', '100%']
  )

  useEffect(() => {
    const controls = animate(0, 100, {
      ease: 'easeInOut',
      duration: 2,
      delay: 0.5,
      onUpdate(value) {
        progress.set(value)
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(value)}%`
        }
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${value}%`
        }
      },
      onComplete() {
        // Show completion effect
        setShowComplete(true)
        
        // Start fade out after brief pause
        setTimeout(() => {
          animate(0, 100, {
            ease: "easeInOut",
            duration: 0.6,
            onUpdate: (value) => {
              fadeOutProgress.set(value)
            },
            onComplete: () => {
              animate(y, '100%', {
                ease: 'easeInOut',
                duration: 0.8,
                delay: 0.2,
                onComplete() {
                  Shader.translateLoader(() => setIsLoading(false))
                  display.set('none')
                },
              })
            },
          })
        }, 600)
      },
    })

    return () => controls.stop()
  }, [setIsLoading, progress, fadeOutProgress, y, display])

  return (
    <Fragment>
      <motion.div
        className='loader-background'
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: backgroundOpacity,
          zIndex: 3,
          pointerEvents: 'none',
          display,
        }}
      >
        {/* Minimal floating elements */}
        <div className="loader-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
        </div>
        
        {/* Main loader content */}
        <motion.div className='loader'>
          <motion.div style={{ y }}>
            <span ref={counterRef}>0%</span>
          </motion.div>
        </motion.div>

        {/* Minimalist progress bar */}
        <div className="loader-progress">
          <motion.div 
            ref={progressBarRef}
            className="loader-progress-fill"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Loading text in your navbar style */}
        <div className="loader-text">
          Experience getting ready
        </div>

        {/* Completion effect */}
        {showComplete && (
          <motion.div
            className="level-up-complete"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </motion.div>

      {!isLoading && children}
    </Fragment>
  )
}

export default Loader