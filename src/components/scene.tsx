import { useGLTF, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import gsap from 'gsap'
import PointLights from "./PointLights"

interface SceneProps {
  sectionTracker: {
    start_spotLight: boolean
    start_pointLights: boolean
  };
  handle_setSectionTracker: (sect: 'start_spotLight' | 'start_pointLights') => void;
}

function Scene({ sectionTracker, handle_setSectionTracker }: SceneProps) {
  const blender_scene = useGLTF('./scene.glb')

  const spotLightRef = useRef<THREE.SpotLight>(null!);
  useHelper(spotLightRef, THREE.SpotLightHelper, 'hotpink');

  const moonLightRef = useRef<THREE.PointLight>(null!);
  useHelper(moonLightRef, THREE.PointLightHelper, 0.5, 'teal');
  
  
  //const plane = useRef<THREE.Mesh>(null);


  useEffect(() => {
    blender_scene.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const sourceMaterial = mesh.material as THREE.Material & {
            map?: THREE.Texture;
            color?: THREE.Color | string | number;
          }
          mesh.material = new THREE.MeshToonMaterial({
            map: sourceMaterial.map,
            color: sourceMaterial.color ?? 0xffffff
          })
        }
      }
    })
  }, [blender_scene.scene])




  useEffect(() => {
    if(!sectionTracker.start_spotLight){
      gsap.to(moonLightRef.current, {
        intensity: 150,
        duration: 2,
        delay: 2
      })
      
      gsap.to(spotLightRef.current, {
        intensity: 90,
        duration: 3,
        delay: 5,
        onComplete: () => {
          handle_setSectionTracker('start_spotLight')
        }
      })


      /*
      if (plane.current) {
        gsap.to(plane.current.position, {
          z: -50,
          duration: 10,
          delay: 3
        })
      }//if
      */
    }
  },[handle_setSectionTracker, sectionTracker.start_spotLight])
  



  return(
    <>
    <group position={[0, -2, -25]}>
      <primitive object={blender_scene.scene} />
      
      {/* Imported PointLights Component */}
      <PointLights start_spotLight={sectionTracker.start_spotLight} />

      <pointLight ref={moonLightRef} color={"#32006e"} intensity={0} position={[10, 20, 14]}/>



      <spotLight
        ref={spotLightRef}
        intensity={0} 
        color={"#ffce63"} 
        position={[11, 7, 16.5]}
        penumbra={0.7}
        angle={0.8}
      >
        <object3D attach="target" position={[0, -50, -10]} />
      </spotLight>
    </group>
    </>
  )
}

export default Scene;