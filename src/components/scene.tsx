import { useGLTF, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react"
import * as THREE from 'three'

function Scene() {
  const blender_scene = useGLTF('./scene.glb')



  const pointLightRef = useRef<THREE.PointLight>(null!);
  useHelper(pointLightRef, THREE.PointLightHelper, 0.5, 'teal');

  const directionalLightRef = useRef<THREE.SpotLight>(null!);
  useHelper(directionalLightRef, THREE.SpotLightHelper, 'hotpink')
  
  

  useEffect(() =>{
    blender_scene.scene.traverse((child) => {

      if ((child as THREE.Mesh).isMesh) {// just making sure its a mesh
        const mesh = child as THREE.Mesh;
        //console.log(mesh)
        if (mesh.material) {
          const sourceMaterial = mesh.material as THREE.Material & {
            map?: THREE.Texture;
            color?: THREE.Color | string | number;
          }
          mesh.material = new THREE.MeshToonMaterial({
            map: sourceMaterial.map,
            color: sourceMaterial.color ?? 0xffffff
          })

        }//if

      }//if

    })
  })

  
  return(
    <>
    <group>

      <primitive
        object={blender_scene.scene}
      />


      {/*
      <mesh position={[0, 4, 25]}>
        <sphereGeometry args={[1, 20, 20]}/>
        <meshToonMaterial color={"#ff0000"}/>
      </mesh>
      */}

      <ambientLight intensity={0.01} color={"#ffb922"}/>
      
      <pointLight 
        ref={pointLightRef} 
        position={[4.9, 4.3, 13]} 
        intensity={5} 
        color={"#ffb922"} 
      />

      <spotLight
        ref={directionalLightRef}
        intensity={100} 
        color={"#ffd67e"} 
        position={[9, 9, 16]}
        penumbra={0.9}
      >
        <object3D attach="target" position={[0, -50, 20]} />
      </spotLight>
      

    </group>
    </>
  )
}

export default Scene;