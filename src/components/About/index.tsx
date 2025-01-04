import useStore from '@/api/store'
import AboutLink from './AboutLink'

interface AboutContent {
  heading: string
  paragraph: string
  imageSrc: string
}

const aboutContent: AboutContent = {
  heading: "About Me",
  paragraph: "With a keen understanding of the full stack, I am capable of developing end-to-end web applications that deliver a seamless user experience. My commitment to staying updated with the latest industry trends ensures that I can leverage cutting-edge technologies to create modern and efficient web solutions.",
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