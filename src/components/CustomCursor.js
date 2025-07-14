import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursorPosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;
      
      setPosition({ x: cursorX, y: cursorY });
      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursorPosition);

    const hoverableElements = document.querySelectorAll('a, button, .btn, .nav-link, .social-icons a, .tech-icons, .project-card-view, .blog-card-view, .home-social-icons');
    
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    document.body.style.cursor = 'none';

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: position.y - 10,
        left: position.x - 10,
        width: isHovering ? '25px' : '15px',
        height: isHovering ? '25px' : '15px',
        backgroundColor: isHovering ? 'rgba(199, 112, 240, 0.4)' : 'rgba(255, 255, 255, 0.3)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'all 0.15s ease',
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        backdropFilter: 'blur(2px)',
        border: `1px solid ${isHovering ? 'rgba(199, 112, 240, 0.6)' : 'rgba(255, 255, 255, 0.2)'}`,
        boxShadow: isHovering ? '0 0 20px rgba(199, 112, 240, 0.3)' : '0 0 10px rgba(255, 255, 255, 0.1)',
      }}
    />
  );
};

export default CustomCursor; 