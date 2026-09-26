import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";

/*
#a9698a
#e7d560
#f39b4d
#ff364e
#f5c47b
#e76b3c

*/

const sphereList = [
  { id: 1, position: [8.6, 5.7, 11.3], scale_factor: [0.2], color: "#a9698a", multi_factor: [0.05, 0.8, 0.7], reset_position: [0, 0, 27]},
  { id: 2, position: [8.6, 5.7, 11.3], scale_factor: [0.2], color: "#a9698a", multi_factor: [0.05, 0.5, 1.15], reset_position: [0, 0, 34]},
  { id: 3, position: [8.6, 5.7, 11.3], scale_factor: [0.2], color: "#a9698a", multi_factor: [0.05, 0.6, 1.10], reset_position: [0, 0, 39]},

  { id: 4, position: [12.8, 5.3, 10], scale_factor: [0.2], color: "#f39b4d", multi_factor: [0.05, 0.6, 1.10], reset_position: [0, 0, 39]},
  { id: 5, position: [12.8, 5.3, 10], scale_factor: [0.2], color: "#f39b4d", multi_factor: [0.05, 0.6, 1.08], reset_position: [0, 0, 42]},

  { id: 6, position: [8.4, 7, 10], scale_factor: [0.2], color: "#e76b3c", multi_factor: [0.05, 0.5, 1.07], reset_position: [0, 0, 42]},
  { id: 7, position: [8.4, 7, 10], scale_factor: [0.2], color: "#e76b3c", multi_factor: [0.05, 0.65, 1.0], reset_position: [0, 0, 48]},
  { id: 9, position: [8.4, 7, 10], scale_factor: [0.2], color: "#e76b3c", multi_factor: [0.05, 0.7, 0.9], reset_position: [0, 0, 39]},

  { id: 10, position: [10.5, 5.5, 9], scale_factor: [0.2], color: "#f5c47b", multi_factor: [0.05, 0.68, 1], reset_position: [0, 0, 39]},
  { id: 11, position: [10.5, 5.5, 9], scale_factor: [0.2], color: "#f5c47b", multi_factor: [0.05, 0.71, 0.85], reset_position: [0, 0, 42]},
  { id: 12, position: [10.5, 5.5, 9], scale_factor: [0.2], color: "#f5c47b", multi_factor: [0.05, 0.7, 0.9], reset_position: [0, 0, 45]},
    
  { id: 13, position: [8, 5.5, 8.8], scale_factor: [0.2], color: "#ff364e", multi_factor: [-0.3, 0.8, 1], reset_position: [0, 0, 55]},
  { id: 14, position: [8, 5.5, 8.8], scale_factor: [0.2], color: "#ff364e", multi_factor: [-0.5, 0.71, 1.1], reset_position: [0, 0, 50]},

  { id: 15, position: [9, 6.5, 19], scale_factor: [0.4], color: "#ff364e", multi_factor: [0.3, 0.8, 0.2], reset_position: [0, 0, 45]},

  { id: 16, position: [8, 11, 0], scale_factor: [0.35], color: "#e7d560", multi_factor: [0.4, 0.5, 0.9], reset_position: [0, 0, 30]},
  { id: 17, position: [8, 11, 0], scale_factor: [0.3], color: "#e7d560", multi_factor: [0.7, 0.6, 1.1], reset_position: [0, 0, 30]},
  
  { id: 18, position: [5.5, 7.3, 0], scale_factor: [0.3], color: "#a9698a", multi_factor: [0.7, 0.6, 1.1], reset_position: [0, 0, 30]},
  
  { id: 19, position: [13, 7, 0.4], scale_factor: [0.2], color: "#f39b4d", multi_factor: [0.7, 0.6, 1.1], reset_position: [0, 0, 35]},

  { id: 20, position: [13, 9, -2], scale_factor: [0.2], color: "#a9698a", multi_factor: [0.7, 0.6, 1], reset_position: [0, 0, 35]},

  { id: 21, position: [4, 10, -2.5], scale_factor: [0.2], color: "#f39b4d", multi_factor: [0.7, 0.6, 1.5], reset_position: [0, 0, 45]},

  { id: 22, position: [2.5, 8, -17], scale_factor: [0.3], color: "#f5c47b", multi_factor: [0.5, 1, 1.6], reset_position: [0, 0, 45]},

  { id: 23, position: [9, 9, 25], scale_factor: [0.2], color: "#f39b4d", multi_factor: [0.5, 1, 0.8], reset_position: [0, 0, 45]},

  { id: 24, position: [-6.5, 8.2, 19], scale_factor: [0.25], color: "#ff364e", multi_factor: [0.8, 1, 0.8], reset_position: [0, 0, 45]},

  { id: 25, position: [-10, 8.2, 12], scale_factor: [0.2], color: "#f5c47b", multi_factor: [0.5, 1, 0.8], reset_position: [0, 0, 45]}


];// list to be rendered in a "for" statement


interface SphereInstanceProps {
  position: [number, number, number];
  scale: number;
  color: string;
  multi_factor: [number, number, number];
  reset_position: [number, number, number];
}

function SphereInstance({ position, scale, color, multi_factor, reset_position }: SphereInstanceProps) {
  const ref = useRef<THREE.Object3D>(null!);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    if (ref.current.position.z > reset_position[2]) {
      ref.current.position.set(position[0], position[1], position[2]);
    } else {
      ref.current.position.x += delta * multi_factor[0];
      ref.current.position.y += delta * multi_factor[1];
      ref.current.position.z += delta * multi_factor[2];
    }
  });

  return <Instance ref={ref} position={position} scale={scale} color={color} />;
}

function Spheres() {
  return (
    <>
    <Instances limit={sphereList.length}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshToonMaterial />
      {sphereList.map((s) => (
        <SphereInstance
          key={s.id}
          position={s.position as [number, number, number]}
          scale={s.scale_factor[0]}
          color={s.color}
          multi_factor={s.multi_factor as [number, number, number]}
          reset_position={s.reset_position as [number, number, number]}
        />
      ))}
    </Instances>

    {/* 
    <mesh position={[8, 5.5, 8.8]}>
      <sphereGeometry args={[1, 1, 1]}/>
      <meshToonMaterial color={"#ffffff"}/>
    </mesh>
    */}
    </>
  );
}
export default Spheres;