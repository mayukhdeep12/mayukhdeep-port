import { Icon } from '@/assets';
import { useCursor } from '@/hooks/useCursor';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export interface ProjectsLinkProps {
  open: boolean;
  title: string;
  href: string;
  icon: Icon;
  delay: number;
  duration: number;
  onHover: () => void;
}

function ProjectsLink(props: ProjectsLinkProps) {
  const { open, title, href, icon, delay, duration, onHover } = props;
  const ref = useRef<HTMLAnchorElement>(null);
  useCursor(`projects-socials-link-${title}`, ref, icon);

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
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
        transition={{ 
          ease: [0.25, 0.46, 0.45, 0.94], 
          delay, 
          duration,
          type: "spring",
          stiffness: 300
        }}
        onMouseEnter={onHover}
      >
        <span className="link-text">View Project</span>
        <div className="link-arrow">→</div>
      </motion.a>
    </motion.div>
  );
}

export default ProjectsLink;