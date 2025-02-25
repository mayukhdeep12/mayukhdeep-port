import { useThree } from '@react-three/fiber'
import type { GroupProps } from '@react-three/fiber'
import { useMemo } from 'react'
import type { PerspectiveCamera } from 'three'
import { calculateScreenSize } from '@/utils/helpers'
import Screen from './Screen'
import Title from './Title'
import Floor from './Floor'

function Hero(props: GroupProps) {
  const { name = 'Hero', ...restProps } = props
  const { width, height } = useThree(state => calculateScreenSize(state.camera as PerspectiveCamera, 6))
  const floorY = useMemo(() => -height / 2 - 0.2, [height])
  const videoSrc = 'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/dgdgdgghd%20(1)%20(1).mp4?v=1740482567794'; // Update with your video path

  return (
    <group name={name} {...restProps}>
      <Screen position={[0, 0, -3]} width={width} height={height} videoSrc={videoSrc}  />
      <Title position={[0, 0, -2.5]} screenWidth={width} />
      <Floor position={[0, floorY, 0]} />
    </group>
  )
}

export default Hero