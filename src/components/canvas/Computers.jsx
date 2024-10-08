import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'  // basically and empty canvas that allows us to place something
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'  // useGltf is used to import 3D models these will help us to draw on the canvas
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene} />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // x axis , y axis , z axis
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls />
      </Suspense>

    </Canvas>
  )

}

export default Computers