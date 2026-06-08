import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";


/*
#A9698AFF
#E7D560FF
#F39B4DFF
#ff364e
#f5c47b
#e76b3c

*/

const sphereList = [
  { id: 1, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.05, 0.8, 0.7], reset_position: [0, 0, 27]},
  { id: 2, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.05, 0.5, 1.2], reset_position: [0, 0, 34]},
  { id: 3, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.05, 0.6, 1.15], reset_position: [0, 0, 39]},
  { id: 4, position: [12.8, 5.3, 9.2], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.05, 0.6, 1.15], reset_position: [0, 0, 39]},
  { id: 5, position: [12.8, 5.3, 9.2], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.05, 0.6, 1.12], reset_position: [0, 0, 42]},
  { id: 6, position: [8.4, 7, 9.5], arg_values: [0.2, 10, 10], color: "#e76b3c", multi_factor: [0.05, 0.5, 1.11], reset_position: [0, 0, 42]},
  { id: 7, position: [8.4, 7, 9.5], arg_values: [0.2, 10, 10], color: "#e76b3c", multi_factor: [0.05, 0.65, 1.0], reset_position: [0, 0, 48]},
  { id: 8, position: [8.4, 7, 9.5], arg_values: [0.2, 10, 10], color: "#e76b3c", multi_factor: [0.05, 0.7, 0.9], reset_position: [0, 0, 39]},

  { id: 8, position: [10.5, 6.5, 7.8], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.05, 0.68, 1], reset_position: [0, 0, 39]},
  { id: 9, position: [10.5, 6.5, 7.8], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.05, 0.71, 1.1], reset_position: [0, 0, 42]},
  { id: 10, position: [10.5, 6.5, 7.8], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.05, 0.7, 0.9], reset_position: [0, 0, 45]},
    
  { id: 11, position: [8, 5.5, 8.2], arg_values: [0.2, 10, 10], color: "#ff364e", multi_factor: [-0.3, 0.8, 1], reset_position: [0, 0, 55]},
  { id: 12, position: [8, 5.5, 8.2], arg_values: [0.2, 10, 10], color: "#ff364e", multi_factor: [-0.5, 0.71, 1.3], reset_position: [0, 0, 50]}

  /*
  { id: 2, position: [8.6, 5.7, 10.3], arg_values: [0.1, 10, 10], color: "#a9698a", reset_position: [0, 0, 0]},
  { id: 3, position: [8.6, 5.7, 10.3], arg_values: [0.15, 10, 10], color: "#a9698a", reset_position: [0, 0, 0]},
  { id: 4, position: [8.6, 5.7, 10.3], arg_values: [0.3, 10, 10], color: "#a9698a", reset_position: [0, 0, 0]},
  { id: 5, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", reset_position: [0, 0, 0]},
  { id: 6, position: [8.6, 5.7, 10.3], arg_values: [0.10, 10, 12], color: "#a9698a", reset_position: [0, 0, 0]},
   */
];// list to be rendered in a "for" statement

interface SphereListHelperInterface{
  position: [number, number, number];
  arg_values: [number, number, number];
  color: string;
  multi_factor: [number, number, number];
  reset_position: [number, number, number];
}

function SphereListHelper({ position, arg_values, color, multi_factor, reset_position }: SphereListHelperInterface){
  const sphere = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if(sphere.current){

      if(sphere.current.position.z > reset_position[2]){
        sphere.current.position.x = position[0]
        sphere.current.position.y = position[1]
        sphere.current.position.z = position[2]
      }else{
        sphere.current.position.x += delta * multi_factor[0]
        sphere.current.position.y += delta * multi_factor[1]
        sphere.current.position.z += delta * multi_factor[2]

      }


    }
  })

  
  
  return(
  <>
    <mesh ref={sphere} position={position as [number, number, number]}>
      <sphereGeometry args={arg_values as [number, number, number]}/>
      <meshToonMaterial color={color}/>
    </mesh>

  </>
  )
}







function Spheres() {
  return (
  <>
    {sphereList.map((sphere) => (
      
      <SphereListHelper
        key={sphere.id}
        position={sphere.position as [number, number, number]}
        arg_values={sphere.arg_values as [number, number, number]}
        color={sphere.color}
        multi_factor={sphere.multi_factor as [number, number, number]}
        reset_position={sphere.reset_position as [number, number, number]}

      />
    ))}
    {/*
    <mesh position={[8, 5.5, 8.2]}>
      <sphereGeometry/>
      <meshToonMaterial color={"#ffffff"}/>
    </mesh>
    */}
  </>
  )


}
export default Spheres;