import { useEffect, useRef } from "react";
import * as THREE from 'three';
import gsap from 'gsap';


/*
#A9698AFF
#E7D560FF
#F39B4DFF
#FF364EFF
#F5C47BFF
#E76B3CFF

*/

const sphereList = [
  { id: 1, position: [6, 8, 0], arg_values: [0.2, 10, 10], scale: 1, color: "#a9698a", target_position: [6, 7, 24], dur: 10},
  { id: 2, position: [6, 8, 0], arg_values: [0.1, 10, 10], scale: 1, color: "#a9698a", target_position: [6, 7, 24], dur: 12},
  { id: 3, position: [6, 8, 0], arg_values: [0.15, 10, 10], scale: 1, color: "#a9698a", target_position: [6, 4, 24], dur: 14},
  { id: 4, position: [6, 8, 0], arg_values: [0.3, 10, 10], scale: 1, color: "#a9698a", target_position: [6, 5, 30], dur: 14},
  { id: 5, position: [6, 8, 0], arg_values: [0.2, 10, 10], scale: 1, color: "#a9698a", target_position: [9, 6, 24], dur: 15},
  { id: 6, position: [6, 8, 0], arg_values: [0.10, 10, 12], scale: 1, color: "#a9698a", target_position: [12, 7, 24], dur: 13},
];// list to be rendered in a "for" statement

interface SphereListHelperInterface{
  index: number;
  position: [number, number, number];
  arg_values: [number, number, number];
  scale: number;
  color: string;
  target_position: [number, number, number];
  dur: number;
}

function SphereListHelper({  position, arg_values, color, target_position, dur }: SphereListHelperInterface){
  const sphere = useRef<THREE.Mesh>(null!)

useEffect(() => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.set(sphere.current.scale, {x: 1, y: 1, z: 1});

  tl.to(sphere.current.position, {
    x: target_position[0],
    y: target_position[1],
    z: target_position[2],
    ease: "sine.out",
    duration: dur,
  })
  .to(sphere.current.scale, {
    x: 0,
    y: 0,
    z: 0,
    duration: .9,
    ease:"power4.out"

  }, "-=1"); // starts 1s before the previous tween ends

  return () => {
    tl.kill();
  };
}, [target_position, dur]);
  
  
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
    {sphereList.map((sphere, index) => (
      
      <SphereListHelper
        key={sphere.id}
        index={index}
        position={sphere.position as [number, number, number]}
        arg_values={sphere.arg_values as [number, number, number]}
        scale={sphere.scale}
        color={sphere.color}
        target_position={sphere.target_position as [number, number, number]}
        dur={sphere.dur}
      />
    ))}
    <mesh position={[6, 8, 0]}>
      <sphereGeometry/>
      <meshToonMaterial color={"#ffffff"}/>
    </mesh>
  </>
  )


}
export default Spheres;