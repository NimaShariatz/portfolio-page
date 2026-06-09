//import { useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import gsap from 'gsap';
import { spotlight_coffee_tablet } from "../constants";

const pointLights = [
  { id: 1, position: [9.42, 2.05, 9.70] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 2, position: [4.9, 4.5, 13] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 3, position: [4.9, 4.5, 10.9] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 4, position: [4.9, 4.6, -1] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 5, position: [4.9, 4.6, -3] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 6, position: [4.9, 4.7, -14.1] as [number, number, number], color: "#ffce63", intensity: 0 },
  { id: 7, position: [4.9, 4.7, -16.1] as [number, number, number], color: "#ffce63", intensity: 0 },
  
]

interface PointLightWithHelperInterface{
  position: [number, number, number]
  color: string
  intensity: number;
  index: number;
  start_pointLights: boolean;
  handle_setSectionTracker: (sect: 'start_pointLights' | 'trigger_camera') => void;
}

function PointLightWithHelper({ position, color, intensity, index, start_pointLights, handle_setSectionTracker }:  PointLightWithHelperInterface)
{
  const lightRef = useRef<THREE.PointLight>(null!);
  //useHelper(lightRef, THREE.PointLightHelper, 0.4, 'teal');
  
  useEffect(() => {
    if (!start_pointLights) {

      if (index==0){
        gsap.to(lightRef.current, {
          intensity: 0.15,
          duration: 1.3,
          delay: spotlight_coffee_tablet
        });
      } else if( index==1 || index==2){
        gsap.to(lightRef.current, {
          intensity: 15,
          duration: 1.3,
          delay: index + spotlight_coffee_tablet
        });
      }else if(index==3){
        gsap.to(lightRef.current, {
          intensity: 7,
          duration: 1.3,
          delay: index + spotlight_coffee_tablet,
          onComplete: () => {
            handle_setSectionTracker('trigger_camera');
          }
        });
      }else if(index==4){
        gsap.to(lightRef.current, {
          intensity: 7,
          duration: 1.3,
          delay: index + spotlight_coffee_tablet
        });
      }else if(index==5 || index==6){
        gsap.to(lightRef.current, {
          intensity: 4,
          duration: 1.3,
          delay: index + spotlight_coffee_tablet,
          onComplete: () => {
            handle_setSectionTracker('start_pointLights')
          }
        });
      }
    }
  }, [handle_setSectionTracker, start_pointLights, index]);

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
  start_pointLights: boolean;
  handle_setSectionTracker: (sect: 'start_pointLights' | 'trigger_camera') => void;
}

function PointLights({ start_pointLights, handle_setSectionTracker }: PointLightsProps) {
  return(
    <>
      {pointLights.map((light, index) => (
        <PointLightWithHelper
          key={light.id}
          index={index}
          start_pointLights={start_pointLights}
          position={light.position}
          color={light.color}
          intensity={light.intensity}
          handle_setSectionTracker = {handle_setSectionTracker}
        />
      ))}
    </>
  )
}

export default PointLights;