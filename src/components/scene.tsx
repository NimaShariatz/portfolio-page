import { useGLTF, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react"
import * as THREE from 'three'

function Scene() {
  const blender_scene = useGLTF('./scene.glb')

  const pointLightRef = useRef<THREE.PointLight>(null!);
  useHelper(pointLightRef, THREE.PointLightHelper, 1, 'teal');


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

      <primitive
        object={blender_scene.scene}
      />


      <mesh position={[0, 5, 0]}>
        <sphereGeometry args={[1, 20, 20]}/>
        <meshToonMaterial color={"red"}/>
      </mesh>

      <pointLight 
        ref={pointLightRef} 
        position={[6, 13, 16]} 
        intensity={150} 
        color={"#ffffff"} 
      />

      <ambientLight  
        intensity={2.2} 
        color={"#ffffff"} 
      />



    </>

  )
}

export default Scene;