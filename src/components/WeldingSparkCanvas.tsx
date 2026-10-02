import React, { useEffect, useRef } from 'react';

interface WeldingSparkCanvasProps {
  intensity?: 'subtle' | 'high';
  className?: string;
  enableInteraction?: boolean;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  alpha: number;
  trail: { x: number; y: number }[];
}

export const WeldingSparkCanvas: React.FC<WeldingSparkCanvasProps> = ({
  intensity = 'high',
  className = '',
  enableInteraction = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Source coordinates for hero spark origin (matches the welder torch tip in the image, around bottom-right/center)
    const getOrigin = () => ({
      x: width * 0.72,
      y: height * 0.58,
    });

    const createSpark = (originX?: number, originY?: number, burst = false): Spark => {
      const orig = getOrigin();
      const ox = originX !== undefined ? originX : orig.x;
      const oy = originY !== undefined ? originY : orig.y;

      const angle = burst 
        ? Math.random() * Math.PI * 2 
        : -Math.PI * (0.1 + Math.random() * 0.85); // Spray upward and sideways like real sparks
      
      const speed = burst 
        ? 3 + Math.random() * 9 
        : 2 + Math.random() * 7;

      const colors = [
        '#ffea00', // Intense white-yellow core
        '#ff9900', // Vivid flame orange
        '#ff5500', // Deep welding orange
        '#ff3300', // Fiery red-orange
        '#60a5fa', // Electric blue arc spark
      ];

      return {
        x: ox + (Math.random() - 0.5) * 8,
        y: oy + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2.5 + 1.2,
        life: 0,
        maxLife: Math.random() * 45 + 25,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        trail: [],
      };
    };

    const maxSparks = intensity === 'high' ? 90 : 35;
    const spawnRate = intensity === 'high' ? 3 : 1;

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Spawn ongoing sparks from welder arc
      if (sparksRef.current.length < maxSparks) {
        for (let i = 0; i < spawnRate; i++) {
          if (Math.random() > 0.15) {
            sparksRef.current.push(createSpark());
          }
        }
      }

      // Update and draw sparks
      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const s = sparksRef.current[i];
        s.life++;

        // Add position to trail
        s.trail.push({ x: s.x, y: s.y });
        if (s.trail.length > 4) {
          s.trail.shift();
        }

        // Apply physics: gravity + air resistance
        s.vy += 0.18; // gravity
        s.vx *= 0.98; // air drag
        s.vy *= 0.98;

        s.x += s.vx;
        s.y += s.vy;

        s.alpha = Math.max(0, 1 - s.life / s.maxLife);

        if (s.life >= s.maxLife || s.y > height + 20) {
          sparksRef.current.splice(i, 1);
          continue;
        }

        // Draw spark streak
        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;

        ctx.beginPath();
        if (s.trail.length > 1) {
          ctx.moveTo(s.trail[0].x, s.trail[0].y);
          for (let j = 1; j < s.trail.length; j++) {
            ctx.lineTo(s.trail[j].x, s.trail[j].y);
          }
        } else {
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x + s.vx * 0.5, s.y + s.vy * 0.5);
        }
        ctx.stroke();

        // Draw bright core dot
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    // Click or touch interaction creates a burst of sparks
    const handlePointerDown = (e: PointerEvent) => {
      if (!enableInteraction || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      for (let i = 0; i < 28; i++) {
        sparksRef.current.push(createSpark(clickX, clickY, true));
      }
    };

    if (enableInteraction) {
      canvas.addEventListener('pointerdown', handlePointerDown);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (enableInteraction && canvas) {
        canvas.removeEventListener('pointerdown', handlePointerDown);
      }
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [intensity, enableInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto absolute inset-0 z-10 w-full h-full ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
