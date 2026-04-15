"use client";

import { useEffect, useRef } from "react";

// Particle/Dot class moved outside to comply with React/Next.js and fix linting
class Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = 1.2;
    this.density = Math.random() * 20 + 5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(99, 102, 241, 0.25)"; // Indigo-400 with low opacity
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;

    if (distance < maxDistance) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx_back = this.x - this.baseX;
        this.x -= dx_back / 10;
      }
      if (this.y !== this.baseY) {
        const dy_back = this.y - this.baseY;
        this.y -= dy_back / 10;
      }
    }
  }
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
    };

    let dots: Dot[] = [];

    function init() {
      dots = [];
      const spacing = 45;
      for (let y = 0; y < height + spacing; y += spacing) {
        for (let x = 0; x < width + spacing; x += spacing) {
          dots.push(new Dot(x, y));
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < dots.length; i++) {
        dots[i].update(mouse);
        dots[i].draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none opacity-50"
      style={{ filter: "blur(0.5px)" }}
    />
  );
}
