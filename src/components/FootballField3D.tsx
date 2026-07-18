"use client"

import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Plane, Line } from '@react-three/drei'
import * as THREE from 'three'

interface PlayerProps {
  position: [number, number, number];
  name: string;
  role: string;
  color?: string;
}

const PlayerMarker = ({ position, name, role, color = 'var(--color-primary)' }: PlayerProps) => {
  const group = useRef<THREE.Group>(null)
  const [hovered, setHover] = useState(false)

  // Body proportions
  const headSize = 0.15;
  const torsoWidth = 0.35;
  const torsoHeight = 0.45;
  const limbWidth = 0.12;
  const limbLength = 0.4;
  
  const baseY = limbLength + torsoHeight / 2 + 0.2; // Keep them above the court
  
  // A simple bobbing animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.05
    }
  })

  const skinColor = '#FAD6B1'; // Simple skin tone
  const kitColor = hovered ? '#FFFFFF' : '#121826'; // dark kit
  const accentColor = hovered ? '#000000' : '#CCFF00';

  return (
    <group position={position}>
      <group ref={group} position={[0, limbLength + torsoHeight/2, 0]} castShadow>
        {/* Head */}
        <mesh position={[0, torsoHeight/2 + headSize/2 + 0.05, 0]} castShadow>
          <sphereGeometry args={[headSize, 32, 32]} />
          <meshStandardMaterial color={skinColor} roughness={0.4} />
        </mesh>
        
        {/* Torso */}
        <mesh castShadow>
          <boxGeometry args={[torsoWidth, torsoHeight, 0.2]} />
          <meshStandardMaterial color={kitColor} roughness={0.7} />
        </mesh>
        
        {/* Kit details (stripes/accent) */}
        <mesh position={[0, 0, 0.101]}>
          <planeGeometry args={[torsoWidth * 0.3, torsoHeight * 0.8]} />
          <meshStandardMaterial color={accentColor} />
        </mesh>

        {/* Arms */}
        <mesh position={[-torsoWidth/2 - limbWidth/2 - 0.02, 0, 0]} castShadow>
          <boxGeometry args={[limbWidth, limbLength, limbWidth]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>
        <mesh position={[torsoWidth/2 + limbWidth/2 + 0.02, 0, 0]} castShadow>
          <boxGeometry args={[limbWidth, limbLength, limbWidth]} />
          <meshStandardMaterial color={skinColor} />
        </mesh>
        
        {/* Legs */}
        <mesh position={[-0.1, -torsoHeight/2 - limbLength/2, 0]} castShadow>
          <boxGeometry args={[limbWidth, limbLength, limbWidth]} />
          <meshStandardMaterial color={skinColor} />
          {/* Socks/Boots */}
          <mesh position={[0, -limbLength/2 + 0.1, 0.02]}>
            <boxGeometry args={[limbWidth + 0.02, 0.2, limbWidth + 0.04]} />
            <meshStandardMaterial color={accentColor} />
          </mesh>
        </mesh>
        
        <mesh position={[0.1, -torsoHeight/2 - limbLength/2, 0]} castShadow>
          <boxGeometry args={[limbWidth, limbLength, limbWidth]} />
          <meshStandardMaterial color={skinColor} />
          {/* Socks/Boots */}
          <mesh position={[0, -limbLength/2 + 0.1, 0.02]}>
            <boxGeometry args={[limbWidth + 0.02, 0.2, limbWidth + 0.04]} />
            <meshStandardMaterial color={accentColor} />
          </mesh>
        </mesh>
      </group>

      {/* Shadow plane or marker base */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI/2, 0, 0]}>
        <ringGeometry args={[0.2, 0.3, 32]} />
        <meshBasicMaterial color={hovered ? '#FFFFFF' : '#CCFF00'} transparent opacity={hovered ? 0.8 : 0.3} />
      </mesh>

      {/* Persistent Tiny Name Bubble */}
      <Html position={[0, baseY + torsoHeight + 0.5, 0]} center zIndexRange={[50, 0]}>
        <div style={{
          background: 'var(--color-surface)',
          color: 'var(--color-text)',
          padding: '2px 8px',
          borderRadius: '10px',
          border: `1px solid ${accentColor}`,
          whiteSpace: 'nowrap',
          fontSize: '10px',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          pointerEvents: 'none',
          opacity: 0.9
        }}>
          {name}
        </div>
      </Html>

      {hovered && (
        <Html position={[0, baseY + torsoHeight + 1.0, 0]} center zIndexRange={[100, 0]}>
          <div style={{
            background: 'var(--color-primary)',
            color: '#000',
            padding: '4px 10px',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            pointerEvents: 'none',
            textTransform: 'uppercase'
          }}>
            {role}
          </div>
        </Html>
      )}
    </group>
  )
}

const Pitch = () => {
  return (
    <group>
      {/* Grass Plane */}
      <Plane args={[10, 14]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#1A3B26" roughness={0.8} />
      </Plane>
      
      {/* Pitch Lines */}
      {/* Outer boundary */}
      <Line points={[[-4.8, 0.01, -6.8], [4.8, 0.01, -6.8], [4.8, 0.01, 6.8], [-4.8, 0.01, 6.8], [-4.8, 0.01, -6.8]]} color="white" lineWidth={2} />
      {/* Halfway line */}
      <Line points={[[-4.8, 0.01, 0], [4.8, 0.01, 0]]} color="white" lineWidth={2} />
      {/* Center circle */}
      <Line
        points={Array.from({ length: 65 }).map((_, i) => {
          const angle = (i / 64) * Math.PI * 2;
          return [Math.cos(angle) * 1.5, 0.01, Math.sin(angle) * 1.5];
        })}
        color="white"
        lineWidth={2}
      />
      
      {/* Penalty Areas */}
      <Line points={[[-2.5, 0.01, -6.8], [-2.5, 0.01, -4.5], [2.5, 0.01, -4.5], [2.5, 0.01, -6.8]]} color="white" lineWidth={2} />
      <Line points={[[-2.5, 0.01, 6.8], [-2.5, 0.01, 4.5], [2.5, 0.01, 4.5], [2.5, 0.01, 6.8]]} color="white" lineWidth={2} />

      {/* Goal Areas */}
      <Line points={[[-1, 0.01, -6.8], [-1, 0.01, -5.8], [1, 0.01, -5.8], [1, 0.01, -6.8]]} color="white" lineWidth={2} />
      <Line points={[[-1, 0.01, 6.8], [-1, 0.01, 5.8], [1, 0.01, 5.8], [1, 0.01, 6.8]]} color="white" lineWidth={2} />
    </group>
  )
}

export default function FootballField3D() {
  const players = [
    { name: "Tawsin", role: "Striker", pos: [0, 0, 3] as [number, number, number] },
    { name: "Wasi", role: "Right Winger", pos: [3, 0, 2] as [number, number, number] },
    { name: "Arif", role: "Central Midfielder", pos: [-1.5, 0, -0.5] as [number, number, number] },
    { name: "Ridwan", role: "Central Midfielder", pos: [1.5, 0, -0.5] as [number, number, number] },
    { name: "Ibrahim", role: "Center Back", pos: [-1.5, 0, -4] as [number, number, number] },
    { name: "Rowdro", role: "Center Back", pos: [1.5, 0, -4] as [number, number, number] },
    { name: "Sameer", role: "Center Back", pos: [0, 0, -3] as [number, number, number] },
    { name: "Fatin", role: "Goalkeeper", pos: [0, 0, -6] as [number, number, number] },
    { name: "Taheem", role: "Goalkeeper", pos: [-3, 0, -2] as [number, number, number] } // Placed as left back or bench
  ]

  return (
    <div className="tactics-container">
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, pointerEvents: 'none' }}>
        <h3 style={{ fontSize: '1.5rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Interactive Tactics</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>Drag to rotate • Scroll to zoom • Hover players</p>
      </div>
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 8, -12], fov: 45 }} performance={{ min: 0.5 }}>
        <color attach="background" args={['#0A0D14']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        
        <Pitch />
        
        {players.map((p, i) => (
          <PlayerMarker key={i} name={p.name} role={p.role} position={p.pos} />
        ))}
        
        <OrbitControls 
          enablePan={false} 
          minPolarAngle={Math.PI / 6} 
          maxPolarAngle={Math.PI / 2.1} 
          minDistance={5} 
          maxDistance={20}
        />
      </Canvas>
    </div>
  )
}
