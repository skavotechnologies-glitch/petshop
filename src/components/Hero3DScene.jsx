import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Cylinder, MeshDistortMaterial, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// 3D Stylized Puppy Mascot
function PuppyMascot({ isBarking, onClick }) {
  const groupRef = useRef();
  const headRef = useRef();
  const tailRef = useRef();
  const leftEarRef = useRef();
  const rightEarRef = useRef();
  const [spinAngle, setSpinAngle] = useState(0);

  useFrame((state, delta) => {
    const { x, y } = state.pointer; // Mouse coords (-1 to +1)

    // Smooth head tracking towards user's cursor
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, x * 0.45, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -y * 0.3, 0.1);
    }

    // Happy tail wagging animation
    if (tailRef.current) {
      const speed = isBarking ? 18 : 8;
      tailRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed) * 0.45;
    }

    // Ear natural floppy bounce
    if (leftEarRef.current && rightEarRef.current) {
      const earBounce = Math.sin(state.clock.elapsedTime * 4) * 0.08;
      leftEarRef.current.rotation.z = -0.3 + earBounce;
      rightEarRef.current.rotation.z = 0.3 - earBounce;
    }

    // Spin animation when barking/clicked
    if (groupRef.current && isBarking) {
      groupRef.current.rotation.y += delta * 12;
    } else if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.1);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} onClick={onClick} cursor="pointer">
      {/* Puppy Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial color="#E8A858" roughness={0.65} metalness={0.05} />
      </mesh>

      {/* Collar */}
      <mesh position={[0, 0.45, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 32]} />
        <meshStandardMaterial color="#FFCC00" roughness={0.3} metalness={0.2} />
      </mesh>

      {/* Gold Tag on Collar */}
      <mesh position={[0, 0.32, 0.58]} rotation={[0.2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.03, 16]} />
        <meshStandardMaterial color="#FACC15" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Tail */}
      <group position={[0, 0.1, -0.75]}>
        <mesh ref={tailRef} position={[0, 0.25, -0.1]} rotation={[-0.6, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.12, 0.5, 16]} />
          <meshStandardMaterial color="#E8A858" roughness={0.7} />
        </mesh>
      </group>

      {/* Head Group (Tracks Pointer) */}
      <group ref={headRef} position={[0, 0.85, 0.25]}>
        {/* Main Head Sphere */}
        <mesh castShadow>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial color="#F4B86A" roughness={0.65} />
        </mesh>

        {/* Snout / Muzzle */}
        <mesh position={[0, -0.1, 0.45]} scale={[1, 0.8, 1]}>
          <sphereGeometry args={[0.34, 24, 24]} />
          <meshStandardMaterial color="#FDE3B8" roughness={0.5} />
        </mesh>

        {/* Shiny Black Nose */}
        <mesh position={[0, 0.02, 0.72]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1A1A1A" roughness={0.15} metalness={0.3} />
        </mesh>

        {/* Cute Pink Tongue */}
        <mesh position={[0, -0.22, 0.55]} rotation={[0.4, 0, 0]}>
          <capsuleGeometry args={[0.08, 0.14, 8, 16]} />
          <meshStandardMaterial color="#FF5F7E" roughness={0.3} />
        </mesh>

        {/* Left Eye */}
        <group position={[-0.22, 0.12, 0.5]}>
          <mesh>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color="#111111" roughness={0.1} />
          </mesh>
          {/* Eye Catchlight / Glint */}
          <mesh position={[-0.03, 0.03, 0.07]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Right Eye */}
        <group position={[0.22, 0.12, 0.5]}>
          <mesh>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color="#111111" roughness={0.1} />
          </mesh>
          {/* Eye Catchlight / Glint */}
          <mesh position={[-0.03, 0.03, 0.07]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>
        </group>

        {/* Left Floppy Ear */}
        <mesh
          ref={leftEarRef}
          position={[-0.55, 0.2, 0]}
          rotation={[0.2, 0, -0.3]}
          scale={[0.7, 1.4, 0.5]}
        >
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#D79544" roughness={0.7} />
        </mesh>

        {/* Right Floppy Ear */}
        <mesh
          ref={rightEarRef}
          position={[0.55, 0.2, 0]}
          rotation={[0.2, 0, 0.3]}
          scale={[0.7, 1.4, 0.5]}
        >
          <sphereGeometry args={[0.28, 16, 16]} />
          <meshStandardMaterial color="#D79544" roughness={0.7} />
        </mesh>
      </group>
    </group>
  );
}

// Floating 3D Dog Bone
function FloatingDogBone({ position = [-1.8, 1.2, 0] }) {
  const boneRef = useRef();

  useFrame((state, delta) => {
    if (boneRef.current) {
      boneRef.current.rotation.x += delta * 0.8;
      boneRef.current.rotation.y += delta * 1.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
      <group ref={boneRef} position={position} scale={0.45}>
        {/* Shaft */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 1.2, 16]} />
          <meshStandardMaterial color="#FFF8EE" roughness={0.3} metalness={0.1} />
        </mesh>
        {/* Left knobs */}
        <mesh position={[-0.6, 0.18, 0]}>
          <sphereGeometry args={[0.24, 16, 16]} />
          <meshStandardMaterial color="#FFF8EE" roughness={0.3} />
        </mesh>
        <mesh position={[-0.6, -0.18, 0]}>
          <sphereGeometry args={[0.24, 16, 16]} />
          <meshStandardMaterial color="#FFF8EE" roughness={0.3} />
        </mesh>
        {/* Right knobs */}
        <mesh position={[0.6, 0.18, 0]}>
          <sphereGeometry args={[0.24, 16, 16]} />
          <meshStandardMaterial color="#FFF8EE" roughness={0.3} />
        </mesh>
        <mesh position={[0.6, -0.18, 0]}>
          <sphereGeometry args={[0.24, 16, 16]} />
          <meshStandardMaterial color="#FFF8EE" roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

// Floating 3D Spa Bubbles with Refraction & Shimmer
function FloatingBubble({ position = [1.8, 1.4, 0], scale = 0.4 }) {
  return (
    <Float speed={4} rotationIntensity={0.8} floatIntensity={2.5}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#A7E8D0"
          transparent
          opacity={0.65}
          roughness={0.05}
          metalness={0.3}
          distort={0.35}
          speed={3}
        />
      </mesh>
    </Float>
  );
}

// Floating 3D Sparkle Star
function FloatingStar({ position = [1.7, -0.2, 0.5] }) {
  const starRef = useRef();

  useFrame((state, delta) => {
    if (starRef.current) {
      starRef.current.rotation.z += delta * 1.5;
      starRef.current.rotation.y += delta * 0.9;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.8}>
      <mesh ref={starRef} position={position} scale={0.28}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#FFCC00" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  const [isBarking, setIsBarking] = useState(false);
  const [speechBubble, setSpeechBubble] = useState(false);

  const handlePetClick = () => {
    setIsBarking(true);
    setSpeechBubble(true);
    setTimeout(() => {
      setIsBarking(false);
    }, 1200);
    setTimeout(() => {
      setSpeechBubble(false);
    }, 2800);
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Interactive Speech Balloon */}
      {speechBubble && (
        <div className="absolute top-4 sm:top-8 z-30 px-4 py-2 rounded-2xl bg-white shadow-elevated border-2 border-[#FFCC00] text-[#0A0A0A] text-xs sm:text-sm font-extrabold animate-bounce flex items-center gap-1.5 pointer-events-none">
          <span>Woof! Welcome to PAWORA! 🐾💛</span>
        </div>
      )}

      {/* Interactive Tag Badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/90 backdrop-blur-sm text-[11px] font-extrabold text-[#FFCC00] shadow-sm border border-[#FFCC00]/30 pointer-events-none flex items-center gap-1.5 whitespace-nowrap">
        <span className="text-sm">👆</span>
        <span>Tap Milo to play & wag tail!</span>
      </div>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0.8, 3.8], fov: 45 }}
        dpr={[1, 1.5]}
        className="w-full h-full cursor-pointer"
      >
        {/* Three-point Studio Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#FFF8E7" castShadow />
        <directionalLight position={[-5, 3, -2]} intensity={0.6} color="#FEF08A" />
        <pointLight position={[0, -2, 2]} intensity={0.4} color="#FFCC00" />

        {/* 3D Elements */}
        <PuppyMascot isBarking={isBarking} onClick={handlePetClick} />
        <FloatingDogBone position={[-1.6, 1.1, 0.2]} />
        <FloatingBubble position={[1.5, 1.2, -0.2]} scale={0.35} />
        <FloatingBubble position={[-1.3, -0.6, 0.8]} scale={0.22} />
        <FloatingStar position={[1.4, -0.3, 0.4]} />

        {/* Soft Ground Contact Shadow */}
        <ContactShadows
          position={[0, -1.35, 0]}
          opacity={0.45}
          scale={5}
          blur={2.4}
          far={3}
          color="#0A0A0A"
        />
      </Canvas>
    </div>
  );
}
