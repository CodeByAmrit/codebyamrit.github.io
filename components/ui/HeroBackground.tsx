"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 5;

        // --- Mouse Tracking ---
        const mouse = new THREE.Vector2(0, 0);
        const targetMouse = new THREE.Vector2(0, 0);

        const handleMouseMove = (event: MouseEvent) => {
            targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // --- Geometry: Particle Field ---
        const particlesCount = 1200;
        const positions = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);
        const colorShifts = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
            sizes[i] = Math.random() * 2 + 0.5;
            colorShifts[i] = Math.random();
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.015,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            color: new THREE.Color('#6366f1'), // Indigo
        });

        const particles = new THREE.Points(particlesGeometry, particleMaterial);
        scene.add(particles);

        // --- Geometry: Liquid Energy Grid ---
        const gridGeometry = new THREE.PlaneGeometry(20, 20, 40, 40);
        const gridMaterial = new THREE.MeshBasicMaterial({
            color: '#4f46e5',
            wireframe: true,
            transparent: true,
            opacity: 0.05,
        });
        const grid = new THREE.Mesh(gridGeometry, gridMaterial);
        grid.rotation.x = -Math.PI / 2.5;
        grid.position.y = -2;
        scene.add(grid);

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Smooth mouse interpolation
            mouse.x += (targetMouse.x - mouse.x) * 0.05;
            mouse.y += (targetMouse.y - mouse.y) * 0.05;

            // Parallax movement
            particles.rotation.y = elapsedTime * 0.02 + mouse.x * 0.1;
            particles.rotation.x = mouse.y * 0.1;

            // Animate grid "Energy Waves"
            const gridPositions = gridGeometry.attributes.position;
            for (let i = 0; i < gridPositions.count; i++) {
                const x = gridPositions.getX(i);
                const y = gridPositions.getY(i);
                
                // Distant wave math
                const wave1 = Math.sin(x * 0.5 + elapsedTime) * 0.1;
                const wave2 = Math.sin(y * 0.5 + elapsedTime * 0.5) * 0.1;
                
                // Mouse deflection
                const dist = Math.sqrt(Math.pow(x - mouse.x * 5, 2) + Math.pow(y - mouse.y * 5, 2));
                const mouseForce = Math.max(0, (1.5 - dist) * 0.2);

                gridPositions.setZ(i, wave1 + wave2 + mouseForce);
            }
            gridPositions.needsUpdate = true;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // --- Cleanup ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        const container = containerRef.current;

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            if (container) {
                container.removeChild(renderer.domElement);
            }
            // Dispose geometries and materials
            particlesGeometry.dispose();
            particleMaterial.dispose();
            gridGeometry.dispose();
            gridMaterial.dispose();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
            style={{ 
                background: 'radial-gradient(circle at 50% 50%, #030014 0%, #000000 100%)' 
            }}
        >
            {/* Soft Grain/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
        </div>
    );
};

export default HeroBackground;
