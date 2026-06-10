import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";


/*
#a9698a
#e7d560
#f39b4d
#ff364e
#f5c47b
#e76b3c

*/

const sphereList = [
  { id: 1, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.05, 0.8, 0.7], reset_position: [0, 0, 27]},
  { id: 2, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.05, 0.5, 1.15], reset_position: [0, 0, 34]},
  { id: 3, position: [8.6, 5.7, 10.3], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.05, 0.6, 1.10], reset_position: [0, 0, 39]},

  { id: 4, position: [12.8, 5.3, 9.2], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.05, 0.6, 1.10], reset_position: [0, 0, 39]},
  { id: 5, position: [12.8, 5.3, 9.2], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.05, 0.6, 1.08], reset_position: [0, 0, 42]},

  { id: 6, position: [8.4, 7, 9.5], arg_values: [0.2, 10, 10], color: "#e76b3c", multi_factor: [0.05, 0.5, 1.07], reset_position: [0, 0, 42]},
  { id: 7, position: [8.4, 7, 9.5], arg_values: [0.2, 10, 10], color: "#e76b3c", multi_factor: [0.05, 0.65, 1.0], reset_position: [0, 0, 48]},
  { id: 9, position: [8.4, 7, 9.5], arg_values: [0.2, 10, 10], color: "#e76b3c", multi_factor: [0.05, 0.7, 0.9], reset_position: [0, 0, 39]},

  { id: 10, position: [10.5, 6.5, 7.8], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.05, 0.68, 1], reset_position: [0, 0, 39]},
  { id: 11, position: [10.5, 6.5, 7.8], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.05, 0.71, 0.85], reset_position: [0, 0, 42]},
  { id: 12, position: [10.5, 6.5, 7.8], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.05, 0.7, 0.9], reset_position: [0, 0, 45]},
    
  { id: 13, position: [8, 5.5, 8.2], arg_values: [0.2, 10, 10], color: "#ff364e", multi_factor: [-0.3, 0.8, 1], reset_position: [0, 0, 55]},
  { id: 14, position: [8, 5.5, 8.2], arg_values: [0.2, 10, 10], color: "#ff364e", multi_factor: [-0.5, 0.71, 1.1], reset_position: [0, 0, 50]},

  { id: 15, position: [9, 6.5, 19], arg_values: [0.4, 10, 10], color: "#ff364e", multi_factor: [0.3, 0.8, 0.2], reset_position: [0, 0, 45]},

  { id: 16, position: [8, 11, 0], arg_values: [0.35, 10, 10], color: "#e7d560", multi_factor: [0.4, 0.5, 0.9], reset_position: [0, 0, 30]},
  { id: 17, position: [8, 11, 0], arg_values: [0.3, 10, 10], color: "#e7d560", multi_factor: [0.7, 0.6, 1.1], reset_position: [0, 0, 30]},
  
  { id: 18, position: [5.5, 7.3, 0], arg_values: [0.3, 10, 10], color: "#a9698a", multi_factor: [0.7, 0.6, 1.1], reset_position: [0, 0, 30]},
  
  { id: 19, position: [13, 7, 0.4], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.7, 0.6, 1.1], reset_position: [0, 0, 35]},

  { id: 20, position: [13, 9, -2], arg_values: [0.2, 10, 10], color: "#a9698a", multi_factor: [0.7, 0.6, 1], reset_position: [0, 0, 35]},

  { id: 21, position: [4, 10, -2.5], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.7, 0.6, 1.5], reset_position: [0, 0, 45]},

  { id: 22, position: [2.5, 8, -17], arg_values: [0.3, 10, 10], color: "#f5c47b", multi_factor: [0.5, 1, 1.6], reset_position: [0, 0, 45]},

  { id: 23, position: [9, 9, 25], arg_values: [0.2, 10, 10], color: "#f39b4d", multi_factor: [0.5, 1, 0.8], reset_position: [0, 0, 45]},

  { id: 24, position: [-6.5, 8.2, 19], arg_values: [0.25, 10, 10], color: "#ff364e", multi_factor: [0.8, 1, 0.8], reset_position: [0, 0, 45]},

  { id: 25, position: [-10, 8.2, 12], arg_values: [0.2, 10, 10], color: "#f5c47b", multi_factor: [0.5, 1, 0.8], reset_position: [0, 0, 45]}


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
    <mesh position={[-4, 8.2, 12]}>
      <sphereGeometry/>
      <meshToonMaterial color={"#ffffff"}/>
    </mesh>
    */}
  </>
  )


}
export default Spheres;