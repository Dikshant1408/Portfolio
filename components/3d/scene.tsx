'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={theme === 'dark' ? '#0ea5e9' : '#0284c7'}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { theme } = useTheme()

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002
      pointsRef.current.rotation.x += 0.001
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={theme === 'dark' ? '#64748b' : '#94a3b8'}
        transparent
        opacity={0.6}
      />
    </points>
  )
}

interface SceneProps {
  className?: string
}

export function Scene({ className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingGeometry />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  )
}