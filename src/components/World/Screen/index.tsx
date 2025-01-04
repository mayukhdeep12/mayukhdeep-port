import { useFrame } from '@react-three/fiber'
import type { GroupProps } from '@react-three/fiber'
import { useControls } from 'leva'
import { useRef, useEffect, useState } from 'react'
import { RectAreaLight, VideoTexture, LinearFilter } from 'three'
import Controls from '@/api/Controls'
import useStore from '@/api/store'
import Shader from '@/api/Shader'

export interface ScreenProps extends GroupProps {
  width: number
  height: number
  videoSrc: string
}

const controls = Controls.folder('World', 'Screen', {
  lightIntensity: Controls.num(10, 0, 50),
})

function Screen(props: ScreenProps) {
  const { width, height, videoSrc, name = 'Screen', ...restProps } = props
  const rectLightRef = useRef<RectAreaLight>(null)
  const [videoTexture, setVideoTexture] = useState<VideoTexture | null>(null)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const prevAccentColor = useRef<string>('')
  const prevLightIntensity = useRef<number>(-1)
  const args = useControls(...controls.get())
  const setScreen = useStore(state => state.setScreen)

  // Check if page is loaded
  useEffect(() => {
    if (document.readyState === 'complete') {
      // If already loaded, wait a short delay before setting loaded state
      setTimeout(() => setIsPageLoaded(true), 1000)
    } else {
      // If not loaded, wait for load event
      const handleLoad = () => {
        setTimeout(() => setIsPageLoaded(true), 1000)
      }
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Initialize video after page is loaded
  useEffect(() => {
    if (!isPageLoaded) return

    const initVideo = () => {
      const video = document.createElement('video')
      video.src = videoSrc
      video.crossOrigin = 'anonymous'
      video.loop = true
      video.muted = true
      video.playsInline = true

      const texture = new VideoTexture(video)
      texture.minFilter = LinearFilter
      setVideoTexture(texture)

      video.addEventListener('loadeddata', () => {
        video.play()
      })

      return { video, texture }
    }

    const { video, texture } = initVideo()

    return () => {
      video.pause()
      video.src = ''
      video.load()
      if (texture) {
        texture.dispose()
      }
      setVideoTexture(null)
    }
  }, [videoSrc, isPageLoaded])

  useFrame(() => {
    if (!rectLightRef.current || !videoTexture) return
    
    const accentColor = Shader.getAccentColor()
    if (prevAccentColor.current !== accentColor) {
      rectLightRef.current.color.set(accentColor)
      prevAccentColor.current = accentColor
    }
    
    const loader = Shader.getLoader()
    const lightIntensity = args.lightIntensity * loader
    if (prevLightIntensity.current !== lightIntensity) {
      rectLightRef.current.intensity = lightIntensity
      prevLightIntensity.current = lightIntensity
    }
    
    videoTexture.needsUpdate = true
  })

  return (
    <group name={name} {...restProps}>
      <mesh ref={setScreen} scale={[width, height, 1]}>
        <planeGeometry args={[1, 1]} />
        {videoTexture && (
          <meshBasicMaterial map={videoTexture} />
        )}
      </mesh>
      <rectAreaLight 
        ref={rectLightRef} 
        width={width} 
        height={height} 
        rotation-y={Math.PI} 
      />
    </group>
  )
}

export default Screen