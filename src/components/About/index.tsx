import useStore from '@/api/store'
import AboutLink from './AboutLink'

interface AboutContent {
  heading: string
  paragraph: string
  imageSrc: string
}

const aboutContent: AboutContent = {
  heading: "<About_Me/>",
  paragraph: "A versatile AI Engineer, and Full Stack Developer with a strong background in developing AI-driven medical solutions, computer vision applications, and immersive WebXR experiences. Experienced in leading cross-functional teams to deliver innovative solutions in healthcare, e-commerce, and gaming. Skilled in optimizing AI workflows, enhancing user engagement, and driving business growth through cutting-edge technology implementations.",
  imageSrc: "/about.jpg"
}

function About() {
  const isLoading = useStore(state => state.isLoading)
  const isAbout = useStore(state => state.isAbout)

  return (
    <div className={`about ${isAbout && !isLoading ? 'open' : ''}`} style={{ zIndex: isAbout && !isLoading ? 3 : 2 }}>
      <div className='about-content'>
        <AboutLink
          open={isAbout && !isLoading}
          heading={aboutContent.heading}
          paragraph={aboutContent.paragraph}
          imageSrc={aboutContent.imageSrc}
          delay={0.45}
          duration={0.8}
        />
      </div>
    </div>
  )
}

export default About