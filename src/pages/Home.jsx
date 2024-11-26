import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/loader';
import Office from '../models/Office';
import Background from '../models/Background';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustOfficeForScreenSize = () => {
    let screenScale, screenPosition, officeRotation;
    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -9, -8];
    } else {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -9.5, -11];
    }
    officeRotation = [-Math.PI / 2, 0, -8.5];
    return [screenScale, screenPosition, officeRotation];
  };

  const [officeScale, officePosition, officeRotation] = adjustOfficeForScreenSize();

  return (
    <section className="w-full h-screen relative font-mono">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center text-white">
        <div className="absolute top-20 left-0 right-0 z-10 flex flex-col items-center justify-center text-white">
        <div className="mb-2 pl-1 bg-white text-black-500 font-extrabold ">HI THERE,</div>
        <div className='justify-items-start'> MY NAME IS <span className="font-semibold">KYLE</span></div>
        <div>AND I'M IN MY THIRD YEAR OF COMPUTER SCIENCE AT JOHN ABBOTT</div>
        </div>
        </div>
      <Canvas
        className={`w-full h-screen bg-black ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} />
            <pointLight intensity={5} position={[1, 1, 1]} />
            <spotLight
            position={[10, 10, 10]}
            angle={Math.PI / 4}
            penumbra={0.5}
            intensity={1}
            distance={50}
            castShadow
            shadow-mapSize-width={512} // Reduce from default 1024 or 2048
            shadow-mapSize-height={512}
            />

            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={2.3} />

            <Office
                position={officePosition}
                scale={officeScale}
                rotation={officeRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
             />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
