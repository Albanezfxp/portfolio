import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  id?: string;
}

export function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const getInitialAnimation = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: -50 };
      case 'right':
        return { opacity: 0, x: 50 };
    }
  };

  const getFinalAnimation = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      id={id}
      initial={getInitialAnimation()}
      whileInView={getFinalAnimation()}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
