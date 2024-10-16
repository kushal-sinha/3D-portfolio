import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ screenSize }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const getScaleAndPosition = () => {
    switch (screenSize) {
      case 'small': return { scale: 0.5, position: [0, -2.5, -1.5] };
      case 'medium': return { scale: 0.6, position: [0, -2.8, -1.8] };
      default: return { scale: 0.75, position: [0, -3.25, -1.5] };
    }
  };
  const { scale, position } = getScaleAndPosition();
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive object={computer.scene} scale={scale} position={position} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState('large');
  const [enableControls, setEnableControls] = useState(true);
  const canvasRef = useRef(null);
  let scrollTimeout = null;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) setScreenSize('small');
      else if (window.innerWidth < 768) setScreenSize('medium');
      else setScreenSize('large');
    };

    const handleTouchMove = (e) => {
      // Check if the touch started on the canvas
      if (e.target === canvasRef.current) {
        e.preventDefault(); // Prevent default only if touch started on canvas
        setEnableControls(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setEnableControls(true);
        }, 200);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    handleResize(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const getCameraProps = () => {
    switch (screenSize) {
      case 'small': return { position: [30, 2, 5], fov: 30 };
      case 'medium': return { position: [18, 2.5, 5], fov: 28 };
      default: return { position: [20, 3, 5], fov: 25 };
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'auto' }}>
      <Canvas
        ref={canvasRef}
        frameloop="demand"
        shadows
        camera={getCameraProps()}
        gl={{ preserveDrawingBuffer: true }}
        style={{ position: 'sticky', top: 0, left: 0, width: '100%', height: '100vh' }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enabled={enableControls}
          />
          <Computers screenSize={screenSize} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;