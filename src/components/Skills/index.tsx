import useStore from '@/api/store'
// Import icons from react-icons
import {
  SiPython, SiJavascript, SiTypescript, SiGo, SiCplusplus, SiC,
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv,
  SiReact, SiNextdotjs, SiTailwindcss, SiSvelte, SiVuedotjs, SiThreedotjs, SiGreensock,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiFastapi,
  SiSupabase, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSanity, SiAmazon,SiWebgl,
  SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGooglecloud, SiDigitalocean,SiPandas,SiLangchain,SiRedis,SiApachekafka,SiVercel,SiNetlify,SiHeroku,SiGithubactions,
  SiGrafana,SiGit,SiBlender,SiUnrealengine,SiMake,SiZapier,SiN8N,SiClickup,SiDiscord,
  SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiWebflow, SiShopify, SiWix
} from 'react-icons/si'
import { IoIosDocument } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { FaRobot, FaGamepad } from 'react-icons/fa'
import { RiAiGenerate } from "react-icons/ri";

interface SkillCategory {
  title: string
  skills: { name: string; icon: React.ComponentType<any> }[]
  icon: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Java', icon: FaJava },
      { name: 'Go', icon: SiGo },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
    ],
    icon: '💻'
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Keras', icon: SiKeras },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Pandas', icon: SiPandas },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'LangGraph', icon: SiLangchain },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Docling', icon: IoIosDocument },
      { name: 'ComfyUI', icon: FaRobot },
      { name: 'Ultralytics', icon: SiOpencv },
      { name: 'MLflow', icon: RiAiGenerate },
      { name: 'Kubeflow', icon: SiKubernetes},

    ],
    icon: '🤖'
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'VTK.js', icon: SiThreedotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Svelte', icon: SiSvelte },
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'GSAP', icon: SiGreensock },
      { name: 'WebGL', icon: SiWebgl },
      
    ],
    icon: '🎨'
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Django', icon: SiDjango },
      { name: 'Flask', icon: SiFlask },
      { name: 'FastAPI', icon: SiFastapi },
    ],
    icon: '⚙️'
  },
  {
    title: 'Databases & Message Queue',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Sanity', icon: SiSanity },
      { name: 'Apache Kafka', icon: SiApachekafka },
    ],
    icon: '🗄️'
  },
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', icon: SiAmazon },
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'Azure', icon: VscAzure },
      { name: 'Digital Ocean', icon: SiDigitalocean },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Netlify', icon: SiNetlify },
      { name: 'Heroku', icon: SiHeroku },

    ],
    icon: '☁️'
  },
  {
    title: 'Devops & Infrastructure',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Grafana', icon: SiGrafana },
    ],
    icon: '🔧'
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'A-Frame', icon: FaGamepad },
      { name: 'Blender', icon: SiBlender },
      { name: 'Unreal Engine', icon: SiUnrealengine },
      { name: '8thWall', icon: FaGamepad },
      { name: 'Lens Studio', icon: FaGamepad },
      { name: 'Make', icon: SiMake },
      { name: 'Zapier', icon: SiZapier },
      { name: 'N8N', icon: SiN8N },
      { name: 'Clickup', icon: SiClickup },
      { name: 'Discord', icon: SiDiscord },

    ],
    icon: '🎮'
  },
  {
    title: 'Design & Creative Tools',
    skills: [
      { name: 'Figma', icon: SiFigma },
      { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
      { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
      { name: 'Premiere Pro', icon: SiAdobepremierepro },
      { name: 'After Effects', icon: SiAdobeaftereffects },
      { name: 'Webflow', icon: SiWebflow },
      { name: 'Shopify', icon: SiShopify },
      { name: 'Wix', icon: SiWix },
    ],
    icon: '🎭'
  },
]

function Skills() {
  const isLoading = useStore(state => state.isLoading)
  const isSkills = useStore(state => state.isSkills)

  return (
    <div className={`skills ${isSkills && !isLoading ? 'open' : ''}`} style={{ zIndex: isSkills && !isLoading ? 3 : 2 }}>
      <div className='skills-content'>
        <div className='skills-grid'>
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className='skills-category'
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <div className='skills-category-header'>
                <span className='skills-category-icon'>{category.icon}</span>
                <h3 className='skills-category-title'>{category.title}</h3>
              </div>
              <div className='skills-list'>
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <div 
                      key={skill.name} 
                      className='skill-item'
                      style={{
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      <IconComponent className='skill-icon' />
                      <span className='skill-name'>{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills