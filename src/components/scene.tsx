import { useGLTF, Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react"
import type { ThreeEvent } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import PointLights from "./pointLights"
import Spheres from "./spheres";
import { Float, Html } from "@react-three/drei";
import { spotlight_coffee_tablet } from "../constants";

interface SceneProps {
  sectionTracker: {
    start_spotLight: boolean
    start_pointLights: boolean
    trigger_camera: boolean
  };
  handle_setSectionTracker: (sect: 'start_spotLight' | 'start_pointLights' | 'trigger_camera') => void;
  handle_triggerEDU: () => void
}

function Scene({ sectionTracker, handle_setSectionTracker, handle_triggerEDU }: SceneProps) {

  const [cursorChanger, setCursorChanger] = useState(false)


  const blender_scene = useGLTF('./scene.glb');
  const bicycle = useGLTF('./bicycle.glb');
  const tablet = useGLTF('./tablet.glb');
  const coffee_1 = useGLTF('./coffee_1.glb');
  const coffee_2 = useGLTF('./coffee_4.glb');
  const coffee_3 = useGLTF('./coffee_2.glb');
  const coffee_4 = useGLTF('./coffee_3.glb');
  

  const spotLightRef = useRef<THREE.SpotLight>(null!);
  //useHelper(spotLightRef, THREE.SpotLightHelper, 'hotpink');

  const moonLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(moonLightRef, THREE.PointLightHelper, 0.5, 'teal');

  const coffeeLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(coffeeLightRef, THREE.PointLightHelper, 0.1, 'teal');

  const tabletLightRef = useRef<THREE.PointLight>(null!);
  //useHelper(tabletLightRef, THREE.PointLightHelper, 0.1, 'teal');


  const coffee_1_sphere = useRef<THREE.Mesh | null>(null);
  const coffee_2_sphere = useRef<THREE.Mesh | null>(null);
  const coffee_3_sphere = useRef<THREE.Mesh | null>(null);
  const coffee_4_sphere = useRef<THREE.Mesh | null>(null);

  const bicycle_sphere = useRef<THREE.Mesh | null>(null);
  const tablet_sphere = useRef<THREE.Mesh | null>(null);




  const scene_group_ref = useRef<THREE.Group>(null!);


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

      gsap.to(coffeeLightRef.current, {
        intensity: 1,
        duration: 3,
        delay: spotlight_coffee_tablet
      })

      gsap.to(tabletLightRef.current, {
        intensity: 0.04,
        duration: 3,
        delay: spotlight_coffee_tablet
      })
      
      gsap.to(spotLightRef.current, {
        intensity: 110,
        duration: 3,
        delay: spotlight_coffee_tablet,
        onComplete: () => {
          handle_setSectionTracker('start_spotLight')
        }
      })

    }
  },[handle_setSectionTracker, sectionTracker.start_spotLight])
  
  useEffect(() => {
    if(sectionTracker.trigger_camera){

      gsap.to(scene_group_ref.current.position, {
        x: -13,
        z: -10,
        y: -2.5,
        duration: 3,
        ease: "power1.inOut"
      })
      gsap.to(scene_group_ref.current.rotation, {
        y: THREE.MathUtils.degToRad(38),
        duration: 3,
        ease: "power1.inOut"
      })

      if(tablet_sphere.current && bicycle_sphere.current && coffee_1_sphere.current && coffee_2_sphere.current && coffee_3_sphere.current && coffee_1_sphere.current && coffee_4_sphere.current){
        bicycle_sphere.current.visible = true;
        tablet_sphere.current.visible = true;
        coffee_1_sphere.current.visible = true;
        coffee_2_sphere.current.visible = true;
        coffee_3_sphere.current.visible = true;
        coffee_4_sphere.current.visible = true;
      }
    }
  }, [sectionTracker.trigger_camera])



  useEffect(() =>{
    if(cursorChanger){
      document.body.style.cursor = 'pointer'
    } else {
      document.body.style.cursor = 'default'
    }

  }, [cursorChanger])





  return(
    <>
    <group ref={scene_group_ref} position={[-15, -3.3, -15]} rotation={[0, THREE.MathUtils.degToRad(45), 0]}>

      <primitive object={blender_scene.scene} />

      <primitive object={bicycle.scene} position={[10.5, 0, 9.35]}
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(true);
          e.stopPropagation();
          if (bicycle_sphere.current) bicycle_sphere.current.visible = false;
          const htmlEl = document.querySelector('.education_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '1';
          }
        }}
        onPointerLeave={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(false);
          e.stopPropagation();
          if (bicycle_sphere.current) bicycle_sphere.current.visible = true;
          const htmlEl = document.querySelector('.education_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '0';
          }
        }}
        onClick={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          handle_triggerEDU();
        }}
      />

      <primitive object={tablet.scene} position={[7.98, 1.09, 16.84]}      
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(true);
          e.stopPropagation();
          if (tablet_sphere.current) tablet_sphere.current.visible = false;
          const htmlEl = document.querySelector('.experience_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '1';
          }
        }}
        onPointerLeave={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(false);
          e.stopPropagation();
          if (tablet_sphere.current) tablet_sphere.current.visible = true;
          const htmlEl = document.querySelector('.experience_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '0';
          }
        }}
        onClick={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          handle_triggerEDU();
        }}
      />

      <primitive object={coffee_1.scene} position={[7.21, 1.358, 14.7]}
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(true);
          e.stopPropagation();
          if (coffee_1_sphere.current) coffee_1_sphere.current.visible = false;
          const htmlEl = document.querySelector('.proj1_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '1';
          }
        }}
        onPointerLeave={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(false);
          e.stopPropagation();
          if (coffee_1_sphere.current) coffee_1_sphere.current.visible = true;
          const htmlEl = document.querySelector('.proj1_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '0';
          }
        }}
        onClick={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          handle_triggerEDU();
        }}
      />
      
      <primitive object={coffee_2.scene} position={[7.26, 1.101, 14.93]}
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(true);
          e.stopPropagation();
          if (coffee_2_sphere.current) coffee_2_sphere.current.visible = false;
          const htmlEl = document.querySelector('.proj2_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '1';
          }
        }}
        onPointerLeave={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(false);
          e.stopPropagation();
          if (coffee_2_sphere.current) coffee_2_sphere.current.visible = true;
          const htmlEl = document.querySelector('.proj2_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '0';
          }
        }}
        onClick={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          handle_triggerEDU();
        }}
      />


      <primitive object={coffee_3.scene} position={[7.49, 1.112, 15]}
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(true);
          e.stopPropagation();
          if (coffee_3_sphere.current) coffee_3_sphere.current.visible = false;
          const htmlEl = document.querySelector('.proj3_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '1';
          }
        }}
        onPointerLeave={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(false);
          e.stopPropagation();
          if (coffee_3_sphere.current) coffee_3_sphere.current.visible = true;
          const htmlEl = document.querySelector('.proj3_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '0';
          }
        }}
        onClick={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          handle_triggerEDU();
        }}
      />


      <primitive object={coffee_4.scene} position={[7.54, 1.11, 15.25]}
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(true);
          e.stopPropagation();
          if (coffee_4_sphere.current) coffee_4_sphere.current.visible = false;
          const htmlEl = document.querySelector('.proj4_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '1';
          }
        }}
        onPointerLeave={(e: ThreeEvent<PointerEvent>) => {
          setCursorChanger(false);
          e.stopPropagation();
          if (coffee_4_sphere.current) coffee_4_sphere.current.visible = true;
          const htmlEl = document.querySelector('.proj4_text_in_scene > div') as HTMLDivElement | null;
          if (htmlEl) {
            htmlEl.style.opacity = '0';
          }
        }}
        onClick={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          handle_triggerEDU();
        }}
      />

      
      
   
      <mesh position={[85, 45, -10]}>
        <sphereGeometry args={[2.8, 18, 18]}/>
        <meshBasicMaterial color={"#ffffff"}/>
      </mesh>      

      <group position={[9.5, 2.42, 9.52]}>
        <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh ref={bicycle_sphere} visible={false}>
          <sphereGeometry args={[0.07, 10, 10]}/>
          <meshBasicMaterial color={"#c2262b"}/>
        </mesh>
        </Float>
        <Html
        position={[0, 0.1, 0]}
        wrapperClass="education_text_in_scene"
        center
        distanceFactor={9}
        >
          EDUCATION
        </Html>
      </group>


      <group position={[8.1, 1.35, 16.83]}>
        <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh ref={tablet_sphere}  visible={false}>
          <sphereGeometry args={[0.05, 10, 10]}/>
          <meshBasicMaterial color={"#8ba046"}/>
        </mesh>
        </Float>
        <Html
        position={[0, 0.1, 0]}
        wrapperClass="experience_text_in_scene"
        center
        distanceFactor={7}
        >
          EXPERIENCE
        </Html>
      </group>

      <group position={[7.21, 1.55, 14.69]}>
        <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh ref={coffee_1_sphere}  visible={false}>
          <sphereGeometry args={[0.05, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>
        </Float>
        <Html
        position={[0, 0.1, 0]}
        wrapperClass="proj1_text_in_scene"
        center
        distanceFactor={7}
        >
          PROJECT 1
        </Html>
      </group>

      <group position={[7.27, 1.33, 14.91]}>
        <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh ref={coffee_2_sphere}  visible={false}>
          <sphereGeometry args={[0.05, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>
        </Float>
        <Html
        position={[0, 0.1, 0]}
        wrapperClass="proj2_text_in_scene"
        center
        distanceFactor={7}
        >
          PROJECT 2
        </Html>
      </group>

      <group position={[7.55, 1.35, 14.95]}>
        <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh ref={coffee_3_sphere}  visible={false}>
          <sphereGeometry args={[0.05, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>
        </Float>
        <Html
        position={[0, 0.1, 0]}
        wrapperClass="proj3_text_in_scene"
        center
        distanceFactor={7}
        >
          PROJECT 3
        </Html>
      </group>

      <group position={[7.56, 1.35, 15.22]}>
        <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
        <mesh ref={coffee_4_sphere}  visible={false}>
          <sphereGeometry args={[0.05, 10, 10]}/>
          <meshBasicMaterial color={"#b8ae89"}/>
        </mesh>
        </Float>
        <Html
        position={[0, 0.1, 0]}
        wrapperClass="proj4_text_in_scene"
        center
        distanceFactor={7}
        >
          PROJECT 4
        </Html>
      </group>





      <Spheres/>

      <Stars radius={45} depth={30} count={500} factor={5} fade speed={1}/>

      <PointLights start_pointLights={sectionTracker.start_pointLights} handle_setSectionTracker={handle_setSectionTracker} />{/* Imported PointLights Component */}

      <pointLight ref={moonLightRef} color={"#220028"} intensity={400} position={[7, 14, 14]}/>
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