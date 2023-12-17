import React, { useEffect, useRef } from 'react';
import { Scene, PerspectiveCamera, WebGLRenderer, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

export function ThreeJSCanvas() {
    const canvasRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const CANVAS_WIDTH = 400;
        const CANVAS_HEIGHT = 300;
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
        const renderer = new WebGLRenderer();

        const geometry = new SphereGeometry(2, 32, 16);
        const material = new MeshBasicMaterial({ color: 0x00b040, wireframe:true });
        const sphere = new Mesh(geometry, material);

        scene.add(sphere);
        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.005;
            renderer.render(scene, camera);
        };

        renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
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