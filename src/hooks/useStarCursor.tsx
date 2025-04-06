
import { useEffect } from 'react';

export const useStarCursor = () => {
  useEffect(() => {
    // Create star cursor styles
    const style = document.createElement('style');
    style.textContent = `
      .star-cursor {
        cursor: none;
      }
      .cursor-star {
        pointer-events: none;
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(155, 135, 245, 1) 0%, rgba(155, 135, 245, 0.8) 50%, rgba(155, 135, 245, 0) 100%);
        transform: translate(-50%, -50%);
        z-index: 9999;
        mix-blend-mode: screen;
        box-shadow: 0 0 10px 2px rgba(155, 135, 245, 0.7);
      }
      .cursor-trail {
        pointer-events: none;
        position: fixed;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(155, 135, 245, 0.7);
        transform: translate(-50%, -50%);
        z-index: 9998;
        mix-blend-mode: screen;
        transition: width 0.2s, height 0.2s, opacity 0.5s;
      }
    `;
    document.head.appendChild(style);

    // Create star cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-star');
    document.body.appendChild(cursor);

    // Create trail elements
    const trails: HTMLDivElement[] = [];
    const trailCount = 12;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');
      document.body.appendChild(trail);
      trails.push(trail);
    }

    // Add body class
    document.body.classList.add('star-cursor');

    // Trail animation variables
    let mouseX = 0;
    let mouseY = 0;
    const trailPositions: { x: number, y: number }[] = Array(trailCount).fill({ x: 0, y: 0 });

    // Update cursor and trails
    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    // Animation loop for trails
    const animateTrails = () => {
      // Update trail positions
      for (let i = trails.length - 1; i > 0; i--) {
        trailPositions[i] = { ...trailPositions[i-1] };
      }
      trailPositions[0] = { x: mouseX, y: mouseY };

      // Apply positions to trail elements
      trails.forEach((trail, index) => {
        const position = trailPositions[index];
        trail.style.left = `${position.x}px`;
        trail.style.top = `${position.y}px`;
        trail.style.opacity = `${1 - index / trails.length}`;
        trail.style.width = `${6 * (1 - index / trails.length)}px`;
        trail.style.height = `${6 * (1 - index / trails.length)}px`;
      });

      requestAnimationFrame(animateTrails);
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    animateTrails();

    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.body.classList.remove('star-cursor');
      cursor.remove();
      trails.forEach(trail => trail.remove());
      document.head.removeChild(style);
    };
  }, []);
};

export default useStarCursor;
