import React, { useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

export function ThreeJSCanvas() {
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new WebGLRenderer();

        const geometry = new SphereGeometry(1, 32, 32);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const sphere = new Mesh(geometry, material);

        scene.add(sphere);
        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current?.appendChild(renderer.domElement);

        animate();

        return () => {
            canvasRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div ref={canvasRef}>
            <h3>ThreeJS Canvas</h3>
        </div>
    );
}