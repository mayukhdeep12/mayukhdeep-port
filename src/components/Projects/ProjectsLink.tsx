import { Icon } from '@/assets';
import { useCursor } from '@/hooks/useCursor';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export interface ProjectsLinkProps {
  open: boolean;
  title: string;
  href: string;
  icon: Icon;
  delay?: number;
  duration?: number;
  onHover?: () => void;
  variant?: 'default' | 'gradient' | 'compact' | 'large' | 'primary' | 'success' | 'warning';
  disabled?: boolean;
}

function ProjectsLink(props: ProjectsLinkProps) {
  const { 
    open, 
    title, 
    href, 
    icon, 
    delay = 0, 
    duration = 0.3, 
    onHover,
    variant = 'default',
    disabled = false
  } = props;
  
  const ref = useRef<HTMLAnchorElement>(null);
  useCursor(`projects-socials-link-${title}`, ref, icon);

  // Get button class based on variant
  const getButtonClass = () => {
    let baseClass = 'projects-link-button';
    
    switch (variant) {
      case 'gradient':
        return `${baseClass} projects-link-button-gradient`;
      case 'compact':
        return `${baseClass} projects-link-button-compact`;
      case 'large':
        return `${baseClass} projects-link-button-large`;
      case 'primary':
        return `${baseClass} btn-primary-glass`;
      case 'success':
        return `${baseClass} btn-success-glass`;
      case 'warning':
        return `${baseClass} btn-warning-glass`;
      default:
        return baseClass;
    }
  };

  // Handle click for disabled state or coming soon projects
  const handleClick = (e: React.MouseEvent) => {
    if (disabled || href === '#') {
      e.preventDefault();
      return;
    }
  };

  if (!open) return null;

  return (
    <motion.div 
      className='projects-link-wrapper'
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <motion.a
        ref={ref}
        href={disabled ? undefined : href}
        target={disabled ? undefined : '_blank'}
        rel={disabled ? undefined : 'noreferrer'}
        className={`${getButtonClass()} ${disabled ? 'disabled' : ''}`}
        variants={{
          hidden: { opacity: 0, scale: 0.8, y: 20 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        initial='hidden'
        animate={open ? 'visible' : 'hidden'}
        transition={{ 
          ease: [0.25, 0.46, 0.45, 0.94], 
          delay, 
          duration,
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
        onMouseEnter={onHover}
        onClick={handleClick}
        style={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
      >
        <span className="link-text">
          {disabled ? 'Coming Soon' : 'View Project'}
        </span>
        <div className="link-arrow">
          {disabled ? '⏳' : '→'}
        </div>
      </motion.a>
    </motion.div>
  );
}

export default ProjectsLink;