import React, { createContext, useContext, useState, useEffect } from 'react';

const AnimationContext = createContext({
  isPaused: false,
  toggleAnimation: () => {},
  pauseAnimation: () => {},
  playAnimation: () => {},
});

export const AnimationProvider = ({ children }) => {
  const [isPaused, setIsPaused] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('animations_paused');
      if (stored !== null) return stored === 'true';
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isPaused) {
      root.classList.add('animations-paused');
      // Pause any active HTML5 videos
      document.querySelectorAll('video').forEach((v) => {
        try {
          v.pause();
        } catch (e) {
          /* ignore */
        }
      });
      localStorage.setItem('animations_paused', 'true');
    } else {
      root.classList.remove('animations-paused');
      // Play back videos with autoplay
      document.querySelectorAll('video').forEach((v) => {
        try {
          if (v.hasAttribute('autoplay') || v.autoplay) {
            v.play().catch(() => {});
          }
        } catch (e) {
          /* ignore */
        }
      });
      localStorage.setItem('animations_paused', 'false');
    }
  }, [isPaused]);

  const toggleAnimation = () => setIsPaused((prev) => !prev);
  const pauseAnimation = () => setIsPaused(true);
  const playAnimation = () => setIsPaused(false);

  return (
    <AnimationContext.Provider
      value={{ isPaused, toggleAnimation, pauseAnimation, playAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
