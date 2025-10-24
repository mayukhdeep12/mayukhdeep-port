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
    duration: '2025 Apr - 2025 Aug (Full Time) - Remote',
    description: 'Developed full-stack AI applications from frontend interfaces to backend integrations, deploying multi-agent systems using LangGraph, AWS Bedrock, Docker, and Terraform across healthcare, fraud detection, and Vehicle insurance projects \n Built a comprehensive Multi RAG application with deep research capabilities, MCP server integration, web search functionality, document injestion workflows, chat history management with citations and guardrails, and role-based access control.',
    technologies: []
  },
  {
    company: 'Cryenx Labs',
    position: 'Full Stack SD - II',
    duration: '2022 Jan - 2025 Apr (Full Time) - In Office',
    description: 'Led team of 5 developers to ship 25+ AI/XR products across healthcare and gaming. Trained deep learning models for skin, hair, and nail diagnosis, and 3D object detection models for ailments using PyTorch, TensorFlow. Deployed models via KubeFlow, AWS, Jenkins with MLFlow monitoring and integrated APIs using FastAPI and database with MongoDB/Firebase. \n Developed WebXR experiences and frontend solutions using Three.js, Next.js, and Blender with binary optimization for smooth loading. Achieved 4-minute engagement time and improved user retention across MedTech, E-Comm, and Gaming products. \n Created company website and AI chatbot using fine-tuned Gemini on Google Cloud Vertex AI and Pinecone vector database, and Built project for OceanDrift using real-time ocean data and trained ML models for wave predictions, created Unreal Engine simulation dashboard with FastAPI backend, and deployed on GCP.',
    technologies: []
  },
  {
    company: 'Quoqo Technologies',
    position: 'Devops Engineer',
    duration: '2021 Nov - 2022 Jan (Intern) - Remote',
    description: ' Revamped legal infrastructure project automating paperwork detection and management for 40+ companies, reducing manual processing time by 65%. Trained and deployed ML model for document identification, extraction, and prediction, achieving 84% accuracy and improved workflow efficiency. \n Wrote APIs using Django to process document data from ML models and utilized Azure Functions for deployment. Created alert system with Azure monitoring tools to maintain web application health and ensure system reliability.',
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