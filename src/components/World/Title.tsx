import { Text } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import Shader from '@/api/Shader';

const fontUrl = '/fonts/Montserrat/Italic.ttf';
const color = '#ffffff';

export interface TitleProps extends GroupProps {
  screenWidth: number;
}

function Title(props: TitleProps) {
  const { screenWidth, name = 'Title', ...restProps } = props;
  const firstLineRef = useRef<{ fillOpacity?: number }>(null);
  const secondLineRef = useRef<{ fillOpacity?: number }>(null);
  const thirdLineRef = useRef<{ fillOpacity?: number }>(null);
  
  // Animation timing constants
  const FADE_DURATION = 3; // Duration of fade in/out in seconds
  const VISIBLE_PAUSE = 5; // Duration of pause when visible
  const HIDDEN_PAUSE = 5; // Duration of pause when hidden
  const TOTAL_CYCLE = (FADE_DURATION * 2) + VISIBLE_PAUSE + HIDDEN_PAUSE; // Total cycle time
  
  // Animation state
  const timeRef = useRef(0);

  // Define a breakpoint for mobile view
  const mobileBreakpoint = 768;

  // Calculate font sizes based on screen width
  const fontSize = useMemo(() => Math.max(screenWidth / 10, 0.2), [screenWidth]);

  // Increase subTextFontSize for mobile view
  const subTextFontSize = useMemo(() => {
    return screenWidth < mobileBreakpoint ? fontSize * 0.4 : fontSize * 0.2;
  }, [fontSize, screenWidth]);

  const lineSpacing = useMemo(() => fontSize / 2, [fontSize]);

  useFrame((state, delta) => {
    if (!firstLineRef.current || !secondLineRef.current || !thirdLineRef.current) return;

    // Update time and keep it within the cycle duration
    timeRef.current = (timeRef.current + delta) % TOTAL_CYCLE;
    
    let opacity = 0;
    
    // Calculate opacity based on current phase of animation
    if (timeRef.current < FADE_DURATION) {
      // Fade in phase
      opacity = timeRef.current / FADE_DURATION;
    } else if (timeRef.current < FADE_DURATION + VISIBLE_PAUSE) {
      // Pause at full opacity
      opacity = 1;
    } else if (timeRef.current < (FADE_DURATION * 2) + VISIBLE_PAUSE) {
      // Fade out phase
      const fadeOutTime = timeRef.current - (FADE_DURATION + VISIBLE_PAUSE);
      opacity = 1 - (fadeOutTime / FADE_DURATION);
    } else {
      // Pause at zero opacity
      opacity = 0;
    }
    
    // Ensure opacity is between 0 and 1
    opacity = Math.max(0, Math.min(1, opacity));
    
    // Apply opacity to all text elements
    firstLineRef.current.fillOpacity = opacity;
    secondLineRef.current.fillOpacity = opacity;
    thirdLineRef.current.fillOpacity = opacity;
  });

  return (
    <group name={name} {...restProps}>
      <Text 
        ref={firstLineRef}
        position={[0, lineSpacing, 0]}
        font={fontUrl}
        fontSize={fontSize}
        color={color}
      >
        MAYUKHDEEP
      </Text>
      <Text 
        ref={secondLineRef}
        position={[0, -lineSpacing, 0]}
        font={fontUrl}
        fontSize={fontSize}
        color={color}
      >
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
  );
}

export default Title;