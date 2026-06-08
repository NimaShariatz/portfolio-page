import { useGLTF, Stars } from "@react-three/drei";
import { useEffect, useRef } from "react"
import * as THREE from 'three'
import gsap from 'gsap'
import PointLights from "./pointLights"
import Spheres from "./spheres";
import { Float } from "@react-three/drei";

interface SceneProps {
  sectionTracker: {
    start_spotLight: boolean
    start_pointLights: boolean
  };
  handle_setSectionTracker: (sect: 'start_spotLight' | 'start_pointLights') => void;
}

function Scene({ sectionTracker, handle_setSectionTracker }: SceneProps) {
  const blender_scene = useGLTF('./scene.glb');
  const bicycle = useGLTF('./bicycle.glb');
  const tablet = useGLTF('./tablet.glb');
  const coffee_1 = useGLTF('./coffee_2.glb');
  const coffee_2 = useGLTF('./coffee_1.glb')
  const coffee_3 = useGLTF('./coffee_3.glb')
  const coffee_4 = useGLTF('./coffee_4.glb')
  

  const spotLightRef = useRef<THREE.SpotLight>(null!);
  //useHelper(spotLightRef, THREE.SpotLightHelper, 'hotpink');

  const moonLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(moonLightRef, THREE.PointLightHelper, 0.5, 'teal');

  const coffeeLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(coffeeLightRef, THREE.PointLightHelper, 0.1, 'teal');

  const tabletLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(tabletLightRef, THREE.PointLightHelper, 0.1, 'teal');
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

      gsap.to(coffeeLightRef.current, {
        intensity: 1,
        duration: 3,
        delay: 5,
      })

      gsap.to(tabletLightRef.current, {
        intensity: 0.04,
        duration: 3,
        delay: 5,
      })
      
      gsap.to(spotLightRef.current, {
        intensity: 110,
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
    <group position={[-9, -3, -15]}>

      <primitive object={blender_scene.scene} />
      <primitive object={bicycle.scene} position={[10.5, 0, 9.35]}/>
      <primitive object={tablet.scene} position={[7.98, 1.09, 16.84]}/>

      <primitive object={coffee_1.scene} position={[7.21, 1.358, 14.7]}/>
      <primitive object={coffee_2.scene} position={[7.26, 1.101, 14.93]}/>
      <primitive object={coffee_3.scene} position={[7.49, 1.112, 14.94]}/>
      <primitive object={coffee_4.scene} position={[7.54, 1.075, 15.15]}/>

      
      
   
      <mesh position={[75, 30, 5]}>
        <sphereGeometry args={[3, 16, 16]}/>
        <meshBasicMaterial color={"#ffffff"}/>
      </mesh>
      
      <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh position={[9.5, 2.42, 9.5]}>
          <sphereGeometry args={[0.04, 10, 10]}/>
          <meshBasicMaterial color={"#c2262b"}/>
        </mesh>

        <mesh position={[7.21, 1.54, 14.69]}>
          <sphereGeometry args={[0.04, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>


        <mesh position={[7.27, 1.33, 14.91]}>
          <sphereGeometry args={[0.04, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>

        <mesh position={[7.5, 1.33, 14.94]}>
          <sphereGeometry args={[0.04, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>

        <mesh position={[7.54, 1.26, 15.13]}>
          <sphereGeometry args={[0.04, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>

        <mesh position={[8.1, 1.35, 16.83]}>
          <sphereGeometry args={[0.04, 10, 10]}/>
          <meshBasicMaterial color={"#8BA046"}/>
        </mesh>
      </Float>



      <Spheres/>

      <Stars radius={45} depth={30} count={500} factor={5} fade speed={1}/>

      <PointLights start_pointLights={sectionTracker.start_pointLights} handle_setSectionTracker={handle_setSectionTracker} />{/* Imported PointLights Component */}

      <pointLight ref={moonLightRef} color={"#38007d"} intensity={0} position={[8, 18, 14]}/>
      <pointLight ref={coffeeLightRef} color={"#ffefb9"} intensity={0} position={[6.65, 1.5, 15.5]}/>
      <pointLight ref={tabletLightRef} color={"#ffefb9"} intensity={0} position={[7.8, 1.3, 16.8]}/>

      <spotLight
        ref={spotLightRef}
        intensity={0} 
        color={"#ffdb8e"} 
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