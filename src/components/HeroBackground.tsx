import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface FloatingObject {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  rotationSpeed: THREE.Vector3;
  originalY: number;
}

export const HeroBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const objectsRef = useRef<FloatingObject[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00d4ff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 2, 50);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd4a574, 1.5, 50);
    pointLight2.position.set(10, -10, -10);
    scene.add(pointLight2);

    // Create materials
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00d4ff,
      metalness: 0.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.6,
      transmission: 0.9,
      thickness: 0.5,
      envMapIntensity: 1,
    });

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x00d4ff,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.7,
    });

    // Create floating objects
    const objects: FloatingObject[] = [];
    const geometries = [
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.OctahedronGeometry(1.5),
      new THREE.TetrahedronGeometry(1.5),
      new THREE.IcosahedronGeometry(1.2),
      new THREE.TorusGeometry(1, 0.4, 8, 16),
      new THREE.DodecahedronGeometry(1.3),
      new THREE.SphereGeometry(1, 16, 16),
    ];

    const materials = [glassMaterial, wireframeMaterial, glowMaterial];

    // Create 25 floating objects
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)].clone();
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position spread across the scene
      mesh.position.x = (Math.random() - 0.5) * 50;
      mesh.position.y = (Math.random() - 0.5) * 40;
      mesh.position.z = (Math.random() - 0.5) * 30 - 10;
      
      // Random scale
      const scale = 0.3 + Math.random() * 1.2;
      mesh.scale.setScalar(scale);
      
      // Random initial rotation
      mesh.rotation.x = Math.random() * Math.PI * 2;
      mesh.rotation.y = Math.random() * Math.PI * 2;
      mesh.rotation.z = Math.random() * Math.PI * 2;
      
      scene.add(mesh);
      
      objects.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        rotationSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        originalY: mesh.position.y,
      });
    }

    // Add some small particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 40 - 15;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    objectsRef.current = objects;

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate objects
      objects.forEach((obj, index) => {
        // Floating animation
        obj.mesh.position.y = obj.originalY + Math.sin(time + index * 0.5) * 0.5;
        
        // Apply velocity
        obj.mesh.position.x += obj.velocity.x;
        obj.mesh.position.z += obj.velocity.z;
        
        // Rotation
        obj.mesh.rotation.x += obj.rotationSpeed.x;
        obj.mesh.rotation.y += obj.rotationSpeed.y;
        obj.mesh.rotation.z += obj.rotationSpeed.z;
        
        // React to mouse (anti-gravity effect)
        const mouseInfluence = 0.3;
        obj.mesh.position.x += mouseRef.current.x * mouseInfluence * (index % 3 === 0 ? 1 : 0.5);
        obj.mesh.position.y += mouseRef.current.y * mouseInfluence * (index % 2 === 0 ? 1 : 0.5);
        
        // Boundary check - wrap around
        if (obj.mesh.position.x > 30) obj.mesh.position.x = -30;
        if (obj.mesh.position.x < -30) obj.mesh.position.x = 30;
        if (obj.mesh.position.y > 25) obj.mesh.position.y = -25;
        if (obj.mesh.position.y < -25) obj.mesh.position.y = 25;
      });
      
      // Rotate particles slowly
      particles.rotation.y += 0.0005;
      
      // Subtle camera movement based on mouse
      camera.position.x += (mouseRef.current.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouseRef.current.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      objects.forEach(obj => {
        obj.mesh.geometry.dispose();
        if (Array.isArray(obj.mesh.material)) {
          obj.mesh.material.forEach(m => m.dispose());
        } else {
          obj.mesh.material.dispose();
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
