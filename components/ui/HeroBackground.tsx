"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const particlesCount = 1200;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.015,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      color: new THREE.Color("#6366f1"),
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particles);

    const gridGeometry = new THREE.PlaneGeometry(20, 20, 40, 40);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: "#4f46e5",
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const grid = new THREE.Mesh(gridGeometry, gridMaterial);
    grid.rotation.x = -Math.PI / 2.5;
    grid.position.y = -2;
    scene.add(grid);

    let animationFrameId = 0;

    const animate = (time: number) => {
      const elapsedTime = time * 0.001;

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      particles.rotation.y = elapsedTime * 0.02 + mouse.x * 0.1;
      particles.rotation.x = mouse.y * 0.1;

      const gridPositions = gridGeometry.attributes.position;
      for (let i = 0; i < gridPositions.count; i++) {
        const x = gridPositions.getX(i);
        const y = gridPositions.getY(i);
        const wave1 = Math.sin(x * 0.5 + elapsedTime) * 0.1;
        const wave2 = Math.sin(y * 0.5 + elapsedTime * 0.5) * 0.1;
        const dist = Math.sqrt((x - mouse.x * 5) ** 2 + (y - mouse.y * 5) ** 2);
        const mouseForce = Math.max(0, (1.5 - dist) * 0.2);

        gridPositions.setZ(i, wave1 + wave2 + mouseForce);
      }
      gridPositions.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    const container = containerRef.current;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(animationFrameId);

      if (container?.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      particlesGeometry.dispose();
      particleMaterial.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #030014 0%, #000000 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')] bg-repeat"
        aria-hidden="true"
      />
    </div>
  );
}
