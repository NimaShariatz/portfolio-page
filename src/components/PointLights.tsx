import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import gsap from 'gsap';

const pointLights = [
  { id: 1, position: [4.9, 4.5, 13] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 2, position: [4.9, 4.5, 10.9] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 3, position: [4.9, 4.6, -1] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 4, position: [4.9, 4.6, -3] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 5, position: [4.9, 4.7, -14.1] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 6, position: [4.9, 4.7, -16.1] as [number, number, number], color: "#ffce63", intensity: 0 },
]

function PointLightWithHelper({ position, color, intensity, index, start_spotLight }: { position: [number, number, number]; color: string; intensity: number; index: number; start_spotLight: boolean;})
{
  const lightRef = useRef<THREE.PointLight>(null!);
  useHelper(lightRef, THREE.PointLightHelper, 0.5, 'teal');
  
  useEffect(() => {
    if (!start_spotLight) {
      console.log(index)
      if( index==0 || index==1){
        gsap.to(lightRef.current, {
          intensity: 10,
          duration: 1.5,
          delay: index + 5
        });
      }else if(index==2 || index==3){
        gsap.to(lightRef.current, {
          intensity: 7,
          duration: 1.5,
          delay: index + 5
        });
      }else if(index==4 || index==5){
        gsap.to(lightRef.current, {
          intensity: 4,
          duration: 1.5,
          delay: index + 5
        });
      }
    }
  }, [start_spotLight, index]);

  return (
    <pointLight 
      ref={lightRef} 
      position={position} 
      intensity={intensity} 
      color={color} 
    />
  );
}

interface PointLightsProps {
  start_spotLight: boolean;
}

function PointLights({ start_spotLight }: PointLightsProps) {
  return(
    <>
      {pointLights.map((light, index) => (
        <PointLightWithHelper
          key={light.id}
          index={index}
          start_spotLight={start_spotLight}
          position={light.position}
          color={light.color}
          intensity={light.intensity}
        />
      ))}
    </>
  )
}

export default PointLights;