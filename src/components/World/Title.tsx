import { Text } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import Shader from '@/api/Shader'

const fontUrl = '/fonts/Montserrat/Italic.ttf'
const color = '#ffffff'

export interface TitleProps extends GroupProps {
  screenWidth: number
}

function Title(props: TitleProps) {
  const { screenWidth, name = 'Title', ...restProps } = props
  const firstLineRef = useRef<{ fillOpacity?: number }>(null)
  const secondLineRef = useRef<{ fillOpacity?: number }>(null)
  const thirdLineRef = useRef<{ fillOpacity?: number }>(null)
  
  // Define a breakpoint for mobile view
  const mobileBreakpoint = 768;

  // Calculate font sizes based on screen width
  const fontSize = useMemo(() => Math.max(screenWidth / 10, 0.2), [screenWidth])
  
  // Increase subTextFontSize for mobile view
  const subTextFontSize = useMemo(() => {
    return screenWidth < mobileBreakpoint ? fontSize * 0.4 : fontSize * 0.2;
  }, [fontSize, screenWidth]);

  const lineSpacing = useMemo(() => fontSize / 2, [fontSize])
  const prevOpacity = useRef<number>(-1)

  useFrame(() => {
    if (!firstLineRef.current || !secondLineRef.current || !thirdLineRef.current) return
    const opacity = Shader.getLoader()
    if (prevOpacity.current !== opacity) {
      firstLineRef.current.fillOpacity = opacity
      secondLineRef.current.fillOpacity = opacity
      thirdLineRef.current.fillOpacity = opacity
    }
  })

  return (
    <group name={name} {...restProps}>
      <Text ref={firstLineRef} position={[0, lineSpacing, 0]} font={fontUrl} fontSize={fontSize} color={color}>
        MAYUKHDEEP
      </Text>
      <Text ref={secondLineRef} position={[0, -lineSpacing, 0]} font={fontUrl} fontSize={fontSize} color={color}>
        MATHUR
      </Text>
      <Text 
        ref={thirdLineRef} 
        position={[0, -lineSpacing - 0.6, 0]} 
        font={fontUrl} 
        fontSize={subTextFontSize} 
        color={color}
      >
        ENGINEER • DEVELOPER • DESIGNER
      </Text>
    </group>
  )
}

export default Title