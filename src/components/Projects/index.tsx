import useStore from '@/api/store';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Icon } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/hooks/useCursor';

interface ProjectSocial {
  title: string
  href: string
  icon: Icon
  preview?: string;
  comingSoon?: boolean;
  description?: string;
  tech?: string[];
}

interface ProjectsLinkProps {
  open: boolean;
  title: string;
  href: string;
  icon: Icon;
}

// Optimized ProjectsLink component
const ProjectsLink = ({ open, title, href, icon }: ProjectsLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  useCursor(`projects-socials-link-${title}`, ref, icon);
  
  if (!open) return null;
  
  return (
    <motion.div 
      className='projects-link-wrapper'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.a
        ref={ref}
        href={href}
        target='_blank'
        rel='noreferrer'
        className='projects-link-button'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          ease: [0.25, 0.46, 0.45, 0.94], 
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }}
      >
        <span className="link-text">View Project</span>
        <div className="link-arrow">→</div>
      </motion.a>
    </motion.div>
  );
};

// Memoized project data
const projects: ProjectSocial[] = [
  {
    title: 'Genscribe AI',
    href: 'https://github.com/mayukhdeep12/Genscribe-AI',
    icon: 'Play',
    preview: '/projects/img1.png',
    description: 'AI-powered content generation platform with advanced natural language processing capabilities.',
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB']
  },
  {
    title: 'HealthSphere AI',
    href: 'https://github.com/mayukhdeep12/HealthSphere-AI',
    icon: 'Play',
    preview: 'https://cdn.glitch.global/986fc018-8516-42f5-af32-953ec30d55ab/create-a-architecture-visualization.jpg?v=1738615901650',
    description: 'Comprehensive healthcare AI solution for medical diagnosis and patient management.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL']
  },
  {
    title: 'Mediview 3D',
    href: 'https://github.com/mayukhdeep12/MediView-3D',
    icon: 'Play',
    preview: 'https://cdn.glitch.global/986fc018-8516-42f5-af32-953ec30d55ab/create-a-generative-ai-modelling-3d.jpg?v=1738615897454',
    description: '3D medical visualization tool for enhanced diagnostic imaging and analysis.',
    tech: ['Three.js', 'WebGL', 'React', 'Medical Imaging']
  },
  {
    title: 'PeerComm',
    href: 'https://github.com/mayukhdeep12/Peercomm',
    icon: 'Play',
    preview: '/images/genscribe-preview.jpg',
    description: 'Peer-to-peer communication platform with real-time messaging and video calls.',
    tech: ['WebRTC', 'Socket.io', 'React', 'Express']
  },
  {
    title: 'AI E-Comm Search',
    href: 'https://github.com/mayukhdeep12/Smart_product_search',
    icon: 'Play',
    preview: '/images/genscribe-preview.jpg',
    description: 'Intelligent e-commerce search engine with AI-powered product recommendations.',
    tech: ['Elasticsearch', 'Machine Learning', 'React', 'Python']
  },
  {
    title: 'Grounding Llama',
    href: 'https://github.com/mayukhdeep12/Grounding-Llama',
    icon: 'Play',
    preview: '/images/genscribe-preview.jpg',
    description: 'Advanced language model grounding system for improved AI reasoning and factual accuracy.',
    tech: ['PyTorch', 'Transformers', 'CUDA', 'Python']
  },
  {
    title: 'AI Travel Planner',
    href: '#',
    icon: 'Play',
    preview: '/projects/img1.png',
    comingSoon: true,
    description: 'Intelligent travel planning assistant with personalized itinerary generation.',
    tech: ['React Native', 'AI/ML', 'Maps API', 'Firebase']
  },
];

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const techTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.2 }
  }
};

function Projects() {
  const isLoading = useStore((state) => state.isLoading);
  const isProjects = useStore((state) => state.isProjects);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  // Optimized scroll function
  const scrollTo = useCallback((direction: 'up' | 'down') => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'down' ? 300 : -300;
      projectsRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  }, []);

  // Simplified content visibility
  useEffect(() => {
    if (isProjects && !isLoading) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isProjects, isLoading]);

  // Memoized project cards to prevent re-renders
  const projectCards = useMemo(() => 
    projects.map((project) => (
      <motion.div
        key={project.title}
        className={`project-card ${project.comingSoon ? 'coming-soon' : ''}`}
        variants={cardVariants}
        whileHover={{ 
          scale: 1.03, 
          y: -8,
          transition: { duration: 0.2 }
        }}
        layout
      >
        {/* Project Image */}
        <div className="project-image">
          <img 
            src={project.preview} 
            alt={project.title}
            loading="lazy"
            decoding="async"
          />
          <div className="project-overlay">
            <ProjectsLink
              open={showContent}
              title={project.title}
              href={project.href}
              icon={project.icon}
            />
          </div>
        </div>

        {/* Project Info */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          {/* Tech Stack */}
          <motion.div 
            className="project-tech"
            variants={{ 
              visible: { 
                transition: { 
                  staggerChildren: 0.03,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {project.tech?.map((tech) => (
              <motion.span
                key={tech}
                className="tech-tag"
                variants={techTagVariants}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Coming Soon Badge */}
        {project.comingSoon && (
          <motion.div
            className="coming-soon-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.3, 
              type: "spring", 
              stiffness: 400,
              damping: 25
            }}
          >
            Coming Soon
          </motion.div>
        )}

        {/* Glassmorphism Effect */}
        <div className="card-glass-effect" />
      </motion.div>
    )), [showContent]);

  // Early return for better performance
  if (!isProjects || isLoading) return null;

  return (
    <div className="projects open" style={{ zIndex: 3 }}>
      {/* Background Overlay */}
      <motion.div
        className="projects-glass-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Navigation Arrows */}
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              className="scroll-arrow top"
              onClick={() => scrollTo('up')}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>↑</span>
            </motion.div>
            <motion.div
              className="scroll-arrow bottom"
              onClick={() => scrollTo('down')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>↓</span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <div className="projects-container">
        <div className="projects-scrollable" ref={projectsRef}>
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >
            {projectCards}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;