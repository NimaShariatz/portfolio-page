import { useGLTF, Stars } from "@react-three/drei";
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import gsap from 'gsap'
import PointLights from "./pointLights"
import Spheres from "./spheres";
import BasicSpheres from "./basicSpheres";

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
  //useHelper(spotLightRef, THREE.SpotLightHelper, 'hotpink');

  const moonLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(moonLightRef, THREE.PointLightHelper, 0.5, 'teal');

  //const starsGroupRef = useRef<THREE.Group>(null!);
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
        intensity: 300,
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
      if (starsGroupRef.current) {
        gsap.to(starsGroupRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 2,
          delay: 1,
          ease: 'power2.inOut',
        });
      }
      */
      
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
    <group position={[-6, -3, -14]}>

      <primitive object={blender_scene.scene} />

      <BasicSpheres/>

      <Spheres/>

      <Stars radius={45} depth={30} count={500} factor={5} fade speed={1}/>

      
      <PointLights start_pointLights={sectionTracker.start_pointLights} handle_setSectionTracker={handle_setSectionTracker} />{/* Imported PointLights Component */}

      <pointLight ref={moonLightRef} color={"#38007d"} intensity={0} position={[8, 18, 14]}/>

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