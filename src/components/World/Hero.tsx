// import { useThree } from '@react-three/fiber'
// import type { GroupProps } from '@react-three/fiber'
// import { useMemo } from 'react'
// import type { PerspectiveCamera } from 'three'
// import { calculateScreenSize } from '@/utils/helpers'
// import Screen from './Screen'
// import Title from './Title'
// import Floor from './Floor'

// function Hero(props: GroupProps) {
//   const { name = 'Hero', ...restProps } = props
//   const { width, height } = useThree(state => calculateScreenSize(state.camera as PerspectiveCamera, 6))
//   const floorY = useMemo(() => -height / 2 - 0.2, [height])
//   const videoSrc = 'https://cdn.glitch.global/f85b9cad-76d1-4a2c-85f9-10087647d4de/dgdgdgghd%20(1)%20(1).mp4?v=1740482567794'; // Update with your video path

//   return (
//     <group name={name} {...restProps}>
//       <Screen position={[0, 0, -3]} width={width} height={height} videoSrc={videoSrc}  />
//       <Title position={[0, 0, -2.5]} screenWidth={width} />
//       <Floor position={[0, floorY, 0]} />
//     </group>
//   )
// }

// export default Hero

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
  
  // Desktop video (your current video)
  const videoSrc = 'https://cdn.glitch.global/986fc018-8516-42f5-af32-953ec30d55ab/14152861-hd_1280_720_30fps.mp4?v=1748886692272'
  
  // Mobile video (add your mobile-optimized video URL here)
  const mobileVideoSrc = 'https://cdn.glitch.global/986fc018-8516-42f5-af32-953ec30d55ab/10994873-hd_1080_1920_25fps.mp4?v=1748886385232' // Replace with your mobile video URL

  return (
    <group name={name} {...restProps}>
      <Screen 
        position={[0, 0, -3]} 
        width={width} 
        height={height} 
        videoSrc={videoSrc}
        mobileVideoSrc={mobileVideoSrc}
      />
      <Title position={[0, 0, -2.5]} screenWidth={width} />
      <Floor position={[0, floorY, 0]} />
    </group>
  )
}

export default Hero