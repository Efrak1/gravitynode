'use client';
import { MouseEvent } from 'react';
import Link from 'next/link';
import { ScrollLinkProps } from './types/ScrollLink.types';

export const ScrollLink = ({ href, children, className }: ScrollLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      window.history.pushState(null, '', href);
    }
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick} 
      className={className}
      aria-label={`Scroll to ${href.replace('#', '')}`}
    >
      {children}
    </Link>
  );
};