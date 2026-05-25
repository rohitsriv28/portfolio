import React, { useState, useEffect } from 'react';

const ProgressLine = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const width = docHeight > 0 ? (scrollPos / docHeight) * 100 : 0;
      setScrollWidth(width);
    };

    window.addEventListener('scroll', updateScroll);
    updateScroll(); // Initial check
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-accent z-[300] transition-[width] duration-75 ease-linear"
      style={{ width: `${scrollWidth}%` }}
    />
  );
};

export default ProgressLine;
