"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function InteractiveGrain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const getViewportWidth = () => document.documentElement.clientWidth || window.innerWidth;
    const getViewportHeight = () => window.innerHeight;

    let width = (canvas.width = getViewportWidth());
    let height = (canvas.height = getViewportHeight());

    // Redimensionamento responsivo
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = getViewportWidth();
      height = canvas.height = getViewportHeight();
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Geração de partículas de poeira/grão
    const particleCount = Math.min(Math.floor((width * height) / 9000), 160);
    const particles: Array<{
      x: number;
      y: number;
      originX: number;
      originY: number;
      size: number;
      baseAlpha: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    // Loop de renderização
    const render = () => {
      // Suavização do movimento do mouse (interpolação)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme === "dark";
      const rgb = isDark ? "245, 245, 245" : "25, 25, 25";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movimento ambiente lento
        p.originX += p.vx;
        p.originY += p.vy;

        // Wrap around bounds
        if (p.originX < 0) p.originX = width;
        if (p.originX > width) p.originX = 0;
        if (p.originY < 0) p.originY = height;
        if (p.originY > height) p.originY = 0;

        // Interação com o mouse: repulsão e flutuação
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 22;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 0.5;
          p.y -= Math.sin(angle) * force * 0.5;
        }

        // Retorno suave à posição de origem
        p.x += (p.originX - p.x) * 0.04;
        p.y += (p.originY - p.y) * 0.04;

        // Desenho da partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.baseAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80 transition-opacity duration-500"
    />
  );
}
