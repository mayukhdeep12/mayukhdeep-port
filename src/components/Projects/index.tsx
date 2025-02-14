import useStore from '@/api/store';
import { useEffect, useRef, useState } from 'react';
import ProjectsLink from './ProjectsLink';
import { Icon } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence

interface ProjectSocial {
  title: string
  href: string
  icon: Icon
  preview?: string; // Add a preview image or video URL
  comingSoon?: boolean; // Optional flag for "Coming Soon" projects
}

const projects: ProjectSocial[] = [
  {
    title: '1. Genscribe AI',
    href: 'https://github.com/mayukhdeep12/Genscribe-AI',
    icon: 'Play',
    preview: '/projects/img1.png',
  },
  {
    title: '2. HealthSphere AI',
    href: 'https://github.com/mayukhdeep12/HealthSphere-AI',
    icon: 'Play',
    preview: 'https://cdn.glitch.global/986fc018-8516-42f5-af32-953ec30d55ab/create-a-architecture-visualization.jpg?v=1738615901650',
  },
  {
    title: '3. Mediview 3D',
    href: 'https://github.com/mayukhdeep12/MediView-3D',
    icon: 'Play',
    preview: 'https://cdn.glitch.global/986fc018-8516-42f5-af32-953ec30d55ab/create-a-generative-ai-modelling-3d.jpg?v=1738615897454',
  },
  {
    title: '4. PeerComm',
    href: 'https://github.com/mayukhdeep12/Peercomm',
    icon: 'Play',
    preview: '/images/genscribe-preview.jpg',
  },
  {
    title: '5. Supervised Agent',
    href: '#',
    icon: 'Play',
    preview: '/images/genscribe-preview.jpg',
    comingSoon: true,
  },
  {
    title: '6. Grounding Search',
    href: '#',
    icon: 'Play',
    preview: '/images/genscribe-preview.jpg',
    comingSoon: true,
  },
  {
    title: '7. AI Travel Planner',
    href: '#',
    icon: 'Play',
    preview: '/projects/img1.png',
    comingSoon: true,
  },

]

function Projects() {
  const isLoading = useStore((state) => state.isLoading);
  const isProjects = useStore((state) => state.isProjects);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [showDelayedContent, setShowDelayedContent] = useState(false); // New state variable

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isProjects && !isLoading) {
      timer = setTimeout(() => {
        setShowDelayedContent(true); // Set state to true after 1 second
      }, 1000);
    } else {
      setShowDelayedContent(false); // Reset when projects is closed
    }

    return () => clearTimeout(timer); // Clear timeout on unmount or re-render
  }, [isProjects, isLoading]);

  // Smooth scroll to top or bottom
  const scrollTo = (direction: 'up' | 'down') => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'down' ? 200 : -200; // Adjust scroll amount as needed
      projectsRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`projects ${isProjects && !isLoading ? 'open' : ''}`} style={{ zIndex: isProjects && !isLoading ? 3 : 2 }}>
      {/* Top Arrow */}
      <AnimatePresence>
        {isProjects && !isLoading && showDelayedContent && (
          <motion.div
            className="scroll-arrow top"
            onClick={() => scrollTo('up')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>↑</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollable Projects */}
      <div className="projects-scrollable" ref={projectsRef}>
        <div className="projects-socials">
          {projects.map((link, index) => (
            <div key={link.title} className="projects-socials-link-container">
              <ProjectsLink
                open={isProjects && !isLoading}
                title={link.title}
                href={link.href}
                icon={link.icon}
                delay={(index + 1) * 0.05 + 0.4}
                duration={0.7 + index * 0.1}
                onHover={() => setPreview(link.preview || null)}
              />
              {link.comingSoon && (
                <AnimatePresence>
                  {isProjects && !isLoading && showDelayedContent && (
                    <motion.span
                      className="coming-soon-tag"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Coming Soon
                    </motion.span>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Arrow */}
      <AnimatePresence>
        {isProjects && !isLoading && showDelayedContent && (
          <motion.div
            className="scroll-arrow bottom"
            onClick={() => scrollTo('down')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>↓</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preview Section */}
      <AnimatePresence>
        {isProjects && !isLoading && preview && showDelayedContent && (
          <motion.div
            className="projects-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <img src={preview} alt="Project Preview" /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects