'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

interface FloatingElementProps {
  position: [number, number, number]
  geometry: 'box' | 'sphere' | 'torus'
  scale?: number
}

export function FloatingElement({ position, geometry, scale = 1 }: FloatingElementProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })

  const getGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[scale, scale, scale]} />
      case 'sphere':
        return <sphereGeometry args={[scale * 0.5, 16, 16]} />
      case 'torus':
        return <torusGeometry args={[scale * 0.4, scale * 0.2, 8, 16]} />
      default:
        return <boxGeometry args={[scale, scale, scale]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={theme === 'dark' ? '#0ea5e9' : '#0284c7'}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  )
}

export function FloatingElements() {
  const elements = [
    { position: [-3, 2, -2] as [number, number, number], geometry: 'box' as const, scale: 0.5 },
    { position: [3, -1, -3] as [number, number, number], geometry: 'sphere' as const, scale: 0.8 },
    { position: [-2, -2, -1] as [number, number, number], geometry: 'torus' as const, scale: 0.6 },
    { position: [2, 3, -4] as [number, number, number], geometry: 'box' as const, scale: 0.4 },
    { position: [0, -3, -2] as [number, number, number], geometry: 'sphere' as const, scale: 0.7 },
  ]

  return (
    <>
      {elements.map((element, index) => (
        <FloatingElement
          key={index}
          position={element.position}
          geometry={element.geometry}
          scale={element.scale}
        />
      ))}
    </>
  )
}