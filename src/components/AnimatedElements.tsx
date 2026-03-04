'use client';

import { useInView } from '@/hooks/useInView';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function Reveal({ children, className = '', delay = 0, direction = 'up', duration = 700 }: RevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const directionStyles: Record<string, string> = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    none: '',
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translate(0, 0)' : undefined,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className={`transition-transform ${!isInView ? directionStyles[direction] : ''}`}
           style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms`, transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
        {children}
      </div>
    </div>
  );
}

// Stagger children animation container
interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 100 }: StaggerProps) {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <div ref={ref} className={className} style={{ '--stagger-delay': `${staggerDelay}ms` } as React.CSSProperties}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 600ms cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${i * staggerDelay}ms`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
}

// Floating particles background
export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}
        />
      ))}
    </div>
  );
}

// Gradient line separator
export function GradientDivider() {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className="relative h-px my-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        style={{
          transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
