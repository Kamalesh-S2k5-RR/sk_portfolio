import { useEffect, useRef } from 'react';

/**
 * Isolated Content Motion Blur:
 * Strictly applies velocity-based optical motion blur to foreground content only.
 * Completely isolated from the background canvas so stars remain 100% stable and crisp.
 */
export default function ScrollMotionBlur({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let targetVelocity = 0;
    let currentVelocity = 0;
    let rafId;
    let isApplied = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY);
      targetVelocity = delta;
      lastScrollY = currentY;
    };

    const loop = () => {
      // Smooth exponential interpolation for responsive acceleration & deceleration
      currentVelocity += (targetVelocity - currentVelocity) * 0.35;
      targetVelocity *= 0.8; // Natural inertial decay

      if (currentVelocity > 1.2) {
        // Clamp subtle blur between 0 and 2.5px for readable, cinema-grade scroll momentum
        const blurAmount = Math.min(2.5, currentVelocity * 0.055);

        if (containerRef.current) {
          containerRef.current.style.filter = `blur(${blurAmount.toFixed(2)}px)`;
          if (!isApplied) {
            containerRef.current.style.willChange = 'filter';
            isApplied = true;
          }
        }
      } else if (isApplied) {
        // Snap back to zero blur the instant scrolling pauses/settles
        if (containerRef.current) {
          containerRef.current.style.filter = 'none';
          containerRef.current.style.willChange = 'auto';
        }
        isApplied = false;
        currentVelocity = 0;
        targetVelocity = 0;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full relative z-10">
      {children}
    </div>
  );
}
