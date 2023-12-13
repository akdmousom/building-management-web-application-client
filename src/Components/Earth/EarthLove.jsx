import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from '../../../public/Earth'

const EarthLove = () => {
    return (
        <>
    <Canvas>
      <Suspense fallback={null}>
      <ambientLight/>
      <OrbitControls autoRotate={true} />
      <Environment  preset="sunset" />
     
      
       
        <Earth scale={2}/>
        
        

      </Suspense>
    </Canvas>
    </>
    );
};

export default EarthLove;