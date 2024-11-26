import { useGLTF } from '@react-three/drei'
import React from 'react'

import backgroundScene from '../assets/3d/night_sky.glb' 
const Background = () => {
  const background = useGLTF(backgroundScene)
  return (
    <mesh>
      <primitive object={background.scene}/>
    </mesh>
  )
}

export default Background