import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Coventic Teal Lagoon — Dual-Theme Fluid Ink & 3D Bubbles
 * - Organic rising fluid plume with dual-layer ink dissipation
 * - Rising 3D glass bubbles with dynamic physics, wobble & mouse repulsion
 * - High-DPI crystal crisp rendering with dual-theme (light / dark) color palettes
 */
export default function HeroBackgroundAnimation({ className = '', fixed = false, hideVignette = false }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const preset = {
      title: '2. Coventic Teal Lagoon',
      plumeAnchorX: 0.6,
      light: {
        bgTop: '#f0fdfa',
        bgBottom: '#e0f2fe',
        primaryInk: [
          'rgba(13, 148, 136, 0.34)',
          'rgba(20, 184, 166, 0.18)',
          'rgba(15, 118, 110, 0.05)',
        ],
        secondaryInk: [
          'rgba(6, 182, 212, 0.32)',
          'rgba(2, 132, 199, 0.16)',
          'rgba(3, 105, 161, 0.04)',
        ],
        crestHighlight: 'rgba(255, 255, 255, 0.65)',
        bubbleRim: 'rgba(13, 148, 136, 0.38)',
        bubbleTop: 'rgba(255, 255, 255, 0.60)',
        bubbleBottom: 'rgba(45, 212, 191, 0.18)',
        sparkle: 'rgba(13, 148, 136, 0.65)',
      },
      dark: {
        bgTop: '#086968',
        bgBottom: '#021622',
        primaryInk: [
          'rgba(45, 212, 191, 0.54)',
          'rgba(20, 184, 166, 0.30)',
          'rgba(6, 78, 84, 0.20)',
        ],
        secondaryInk: [
          'rgba(34, 211, 238, 0.46)',
          'rgba(13, 148, 136, 0.26)',
          'rgba(4, 47, 56, 0.18)',
        ],
        crestHighlight: 'rgba(153, 246, 228, 0.44)',
        bubbleRim: 'rgba(153, 246, 228, 0.56)',
        bubbleTop: 'rgba(255, 255, 255, 0.26)',
        bubbleBottom: 'rgba(20, 184, 166, 0.26)',
        sparkle: 'rgba(153, 246, 228, 0.88)',
      },
    };

    const speed = 0.9;
    const bubbleCount = 38;
    let width = 0;
    let height = 0;
    let time = 0;
    let lastTs = 0;
    const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, active: false };

    const handleMouseMove = (e) => {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      const nx = e.clientX - r.left;
      const ny = e.clientY - r.top;
      if (pointer.active) {
        pointer.vx = (nx - pointer.x) * 0.25;
        pointer.vy = (ny - pointer.y) * 0.25;
      }
      pointer.x = nx;
      pointer.y = ny;
      pointer.active = true;
    };

    const handleMouseLeave = () => {
      pointer.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const puffs = Array.from({ length: 42 }, (_, i) => ({
      progress: i / 42,
      speed: 0.05 + Math.random() * 0.05,
      baseRadius: 58 + Math.random() * 90,
      swirlFreq: 2.1 + Math.random() * 2.4,
      swirlAmp: 32 + Math.random() * 76,
      phase: Math.random() * Math.PI * 2,
      angle: Math.random() * Math.PI * 2,
      scaleX: 0.84 + Math.random() * 0.42,
      scaleY: 0.80 + Math.random() * 0.40,
      isSecondary: Math.random() > 0.46,
    }));

    let bubbles = [];
    function makeBubble(y) {
      const r = Math.random() > 0.84 ? 22 + Math.random() * 20 : 6 + Math.random() * 14;
      return {
        x: Math.random() * Math.max(320, width),
        y: y ?? height + r + Math.random() * 120,
        vx: 0,
        vy: 0,
        radius: r,
        riseSpeed: 22 + (46 / Math.sqrt(r)) * 12 + Math.random() * 16,
        wobbleFreq: 1.1 + Math.random() * 1.5,
        wobbleAmp: 0.35 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function resize() {
      if (!container || !canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!bubbles.length) {
        bubbles = Array.from({ length: bubbleCount }, () => makeBubble(Math.random() * height));
      }
    }

    resize();
    window.addEventListener('resize', resize);

    function loop(ts) {
      const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0.016;
      lastTs = ts;
      time += dt * speed;
      pointer.vx *= 0.85;
      pointer.vy *= 0.85;

      const pal = preset[theme === 'dark' ? 'dark' : 'light'];
      ctx.clearRect(0, 0, width, height);

      // Background Gradient
      const bg = ctx.createLinearGradient(0, 0, width * 0.38, height);
      bg.addColorStop(0, pal.bgTop);
      bg.addColorStop(1, pal.bgBottom);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Fluid Ink Puffs
      const anchorX = width * preset.plumeAnchorX;
      puffs.forEach((p) => {
        p.progress += p.speed * dt * speed;
        if (p.progress > 1.08) p.progress = -0.06;
        const y = height * (1.06 - p.progress * 1.14);
        const x =
          anchorX +
          Math.sin(p.progress * 5.0 - time * 0.65) * (width * 0.055) +
          Math.cos(p.progress * p.swirlFreq * Math.PI + time * 0.78 + p.phase) *
            p.swirlAmp *
            (0.45 + p.progress * 0.85);
        const env =
          Math.min(1, (p.progress + 0.06) / 0.16) *
          Math.max(0, 1 - Math.max(0, (p.progress - 0.76) / 0.32));
        if (env <= 0.01) return;
        const r = p.baseRadius * (0.72 + p.progress * 0.84);
        const stops = p.isSecondary ? pal.secondaryInk : pal.primaryInk;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(p.angle);
        ctx.scale(p.scaleX, p.scaleY);
        ctx.globalAlpha = env * 0.88;

        const g = ctx.createRadialGradient(-r * 0.18, -r * 0.18, r * 0.06, 0, 0, r);
        g.addColorStop(0, stops[0]);
        g.addColorStop(0.54, stops[1]);
        g.addColorStop(0.85, stops[2]);
        g.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 3D Glass Bubbles
      bubbles.forEach((b) => {
        b.y -= b.riseSpeed * dt * speed;
        b.x += Math.sin(time * b.wobbleFreq + b.phase) * b.wobbleAmp * speed + b.vx;
        b.y += b.vy;
        b.vx *= 0.93;
        b.vy *= 0.93;

        if (pointer.active) {
          const dx = b.x - pointer.x;
          const dy = b.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < b.radius + 95 && d > 0.1) {
            const f = ((b.radius + 95 - d) / (b.radius + 95)) * 1.45;
            b.vx += (dx / d) * f;
            b.vy += (dy / d) * f * 0.75;
          }
        }

        if (b.y < -b.radius - 24) {
          Object.assign(b, makeBubble(height + b.radius + 20));
        }

        ctx.save();
        ctx.translate(b.x, b.y);

        // 3D Spherical Volume Gradient
        const sg = ctx.createRadialGradient(
          -b.radius * 0.32,
          -b.radius * 0.32,
          b.radius * 0.08,
          0,
          0,
          b.radius
        );
        sg.addColorStop(0, pal.bubbleTop);
        sg.addColorStop(0.6, 'rgba(255,255,255,0.04)');
        sg.addColorStop(1, pal.bubbleRim);

        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
        ctx.fill();

        // Bubble Rim Stroke
        ctx.strokeStyle = pal.bubbleRim;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // 3D Specular Highlight Gloss
        if (b.radius >= 6) {
          ctx.rotate(-Math.PI * 0.24);
          ctx.fillStyle = 'rgba(255,255,255,0.88)';
          ctx.beginPath();
          ctx.ellipse(0, -b.radius * 0.56, b.radius * 0.34, b.radius * 0.15, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div ref={containerRef} className={`${fixed ? 'fixed z-0' : 'absolute'} inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Fluid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle Bottom Vignette to Blend Seamlessly into Next Section */}
      {!hideVignette && (
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-50/90 dark:from-brand-darkBg to-transparent pointer-events-none" />
      )}
    </div>
  );
}