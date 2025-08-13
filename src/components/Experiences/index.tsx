import useStore from '@/api/store'
import ExperiencesLink from './ExperiencesLink'

interface ExperienceData {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

const experiencesData: ExperienceData[] = [
  {
    company: 'System Bender',
    position: 'AI Engineer',
    duration: '2025 April - 2025 August (Full Time) - Remote',
    description: 'Worked with LangGraph, WASM, Python, and frontend technologies to build AI agents and deliver full-stack applications. Focused on seamless agent workflows, real-time interactions, and efficient system integration.',
    technologies: []
  },
  {
    company: 'Cryenx Labs',
    position: 'Full Stack SD - II',
    duration: '2022 Feb - 2025 April (Full Time) - In Office',
    description: 'Led a team to deliver AI, XR, and web/mobile solutions on time. Designed AI-powered medical tools improving diagnostic accuracy by 91%. Built WebXR experiences boosting engagement and client retention. Streamlined lead generation with AI, improved brand visibility by 40%, and integrated IoT hardware with PCB design.',
    technologies: []
  },
  {
    company: 'Quoqo Technologies',
    position: 'Devops Engineer',
    duration: '2021 Nov - 2022 Feb (Intern) - Remote',
    description: 'Automated legal paperwork management for 50+ companies, cutting manual effort by 65%. Deployed ML models for document processing with 84% accuracy. Built scalable Python APIs and alert systems using Azure, boosting system reliability by 95%.',
    technologies: []
  },
  {
    company: 'Anyytime Co.',
    position: 'Full Stack Developer',
    duration: '2021 May - 2021 Nov (Intern) - In Office',
    description: 'Designed UI/UX in Figma for an e-commerce app, doubling conversion rates. Built backend features and a Django dashboard to manage product data and client orders, improving operational efficiency.',
    technologies: []
  }
]

function Experiences() {
  const isLoading = useStore(state => state.isLoading)
  const isExperiences = useStore(state => state.isExperiences)

  return (
    <div className={`experiences ${isExperiences && !isLoading ? 'open' : ''}`} style={{ zIndex: isExperiences && !isLoading ? 3 : 2 }}>
      <div className='experiences-container'>
        
        <div className='experiences-timeline-wrapper'>
          <div className='experiences-timeline'>
            {experiencesData.map((experience: ExperienceData, index: number) => (
              <ExperiencesLink
                key={experience.company}
                open={isExperiences && !isLoading}
                company={experience.company}
                position={experience.position}
                duration={experience.duration}
                description={experience.description}
                technologies={experience.technologies}
                delay={(index + 1) * 0.1 + 0.3}
                animationDuration={0.6 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences