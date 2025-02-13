import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../modules/Island';
import  Sky  from '../modules/Sky';
import Birds from '../modules/Birds';
import  Plane  from '../modules/Plane';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [islandConfig, setIslandConfig] = useState({
    scale: [1, 1, 1],
    position: [0, -6.5, -43.4],
    rotation: [0.1, 4.7, 0],
  });
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const adjustIslandForScreenSize = () => {
    let screenScale = [1, 1, 1];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }

    setIslandConfig({
      scale: screenScale,
      position: [0, -6.5, -43.4],
      rotation: [0.1, 4.7, 0],
    });
  };

  useEffect(() => {
    adjustIslandForScreenSize();
    window.addEventListener('resize', adjustIslandForScreenSize);
    return () => window.removeEventListener('resize', adjustIslandForScreenSize);
  }, []);
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  // const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
       {currentStage && <HomeInfo currentStage={currentStage}/> }
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5}/>
          <hemisphereLight 
          skyColor='#b1e1ff'
          groundColor='#000000'
          intensity={1} />

          <Birds/>
          <Sky isRotating = {isRotating}/>
          <Island 
            position={islandConfig.position}
            scale={islandConfig.scale}
            rotation={islandConfig.rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}

          />
          <Plane 
          isRotating = {isRotating}
          scale={biplaneScale}
          position = {biplanePosition}
          rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
