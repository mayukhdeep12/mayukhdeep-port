// loader.tsx

import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Fragment, PropsWithChildren, useEffect, useRef, useState } from 'react'
import useStore from '@/api/store'
import Shader from '@/api/Shader'

function Loader({ children }: PropsWithChildren) {
  const counterRef = useRef<HTMLElement>(null)
  const isLoading = useStore(state => state.isLoading)
  const setIsLoading = useStore(state => state.setIsLoading)
  const y = useMotionValue('0%')
  const display = useMotionValue('block')
  const progress = useMotionValue(0); // Track progress from 0 to 100
  const fadeOutProgress = useMotionValue(0); //Track the fading out progress from 0 to 100

  const backgroundOpacity = useTransform(
    fadeOutProgress,
    [0, 100],
    [1, 0] // Map fadeOutProgress to opacity (1 to 0)
  );

  useEffect(() => {
    const controls = animate(0, 100, {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.3,
      onUpdate(value) {
        progress.set(value); // Update the progress value
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(value)}%`
        }
      },
      onComplete() {
        // Trigger fade out animation after reaching 100%
        animate(0, 100, {
          ease: "easeInOut",
          duration: 0.5, // Duration for fade out
          onUpdate: (value) => {
            fadeOutProgress.set(value); //Animate the fade out progress value
          },
          onComplete: () => {
            // Only after the fade out animation is complete, move the content up
            animate(y, '100%', {
              ease: 'easeInOut',
              duration: 0.6,
              delay: 0.3,
              onComplete() {
                Shader.translateLoader(() => setIsLoading(false));
                display.set('none');
              },
            });
          },
        });
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsLoading, progress, fadeOutProgress]);

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
          backgroundColor: `rgba(0,0,0)`,
          opacity: backgroundOpacity, // Use the opacity from useTransform
          zIndex: 3, // Below the text, above other content
          pointerEvents: 'none', // Allow clicks to pass through
          display,
        }}
      >
        <motion.div className='loader' >
          <motion.div style={{ y }}>
            <span ref={counterRef}>0%</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {!isLoading && children}
    </Fragment>
  );
}

export default Loader