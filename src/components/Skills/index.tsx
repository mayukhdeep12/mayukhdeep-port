import useStore from '@/api/store'
// Import icons from react-icons
import {
  SiPython, SiJavascript, SiTypescript, SiGo, SiRust, SiCplusplus, SiC,
  SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiHuggingface,
  SiReact, SiNextdotjs, SiTailwindcss, SiSvelte, SiVuedotjs, SiThreedotjs, SiGreensock, SiFramer,
  SiNodedotjs, SiExpress, SiDjango, SiFlask, SiFastapi,
  SiSupabase, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSanity, SiAmazon, SiAmazondynamodb,
  SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGooglecloud, SiDigitalocean,
  SiUnity, SiUnrealengine,
  SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobeaftereffects, SiBlender, SiWebflow, SiShopify, SiWix,
  SiFlutter, SiAndroidstudio, SiReact as SiReactNative
} from 'react-icons/si'
import { IoIosDocument } from "react-icons/io";
import { VscAzure } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { FaBrain, FaRobot, FaGamepad } from 'react-icons/fa'

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
      { name: 'Rust', icon: SiRust },
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
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'Transformers', icon: SiHuggingface },
      { name: 'LangChain', icon: FaBrain },
      { name: 'LangGraph', icon: FaBrain },
      { name: 'Docling', icon: IoIosDocument },
      { name: 'ComfyUI', icon: FaRobot },
    ],
    icon: '🤖'
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Svelte', icon: SiSvelte },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'GSAP', icon: SiGreensock },
      { name: 'Framer Motion', icon: SiFramer },
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
    title: 'Databases & Storage',
    skills: [
      { name: 'Supabase', icon: SiSupabase },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Sanity', icon: SiSanity },
      { name: 'AWS RDS', icon: SiAmazon },
    ],
    icon: '🗄️'
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'AWS', icon: SiAmazon },
      { name: 'GCP', icon: SiGooglecloud },
      { name: 'Azure', icon: VscAzure },
      { name: 'Digital Ocean', icon: SiDigitalocean },
    ],
    icon: '☁️'
  },
  {
    title: 'XR & Game Development',
    skills: [
      { name: '8thWall', icon: FaGamepad },
      { name: 'Lens Studio', icon: FaGamepad },
      { name: 'Unity', icon: SiUnity },
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
      { name: 'Blender', icon: SiBlender },
      { name: 'Webflow', icon: SiWebflow },
      { name: 'Shopify', icon: SiShopify },
      { name: 'Wix', icon: SiWix },
    ],
    icon: '🎭'
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'React Native', icon: SiReactNative },
    ],
    icon: '📱'
  }
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