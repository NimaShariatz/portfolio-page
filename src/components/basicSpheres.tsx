import { Float } from "@react-three/drei";






function BasicSpheres() {
  return(
  <>
   
    <mesh position={[75, 30, 5]}>
      <sphereGeometry args={[3, 16, 16]}/>
      <meshBasicMaterial color={"#ffffff"}/>
    </mesh>
    
    <Float floatingRange={[0, 0.06]} rotationIntensity={0} speed={5}>
      <mesh position={[9.5, 2.45, 9.5]}>
        <sphereGeometry args={[0.04, 10, 10]}/>
        <meshBasicMaterial color={"#c2262b"}/>
      </mesh>

      <mesh position={[7.21, 1.53, 14.69]}>
        <sphereGeometry args={[0.04, 10, 10]}/>
        <meshBasicMaterial color={"#c7ad6b"}/>
      </mesh>


      <mesh position={[7.27, 1.32, 14.91]}>
        <sphereGeometry args={[0.04, 10, 10]}/>
        <meshBasicMaterial color={"#c7ad6b"}/>
      </mesh>

      <mesh position={[7.5, 1.32, 14.94]}>
        <sphereGeometry args={[0.04, 10, 10]}/>
        <meshBasicMaterial color={"#c7ad6b"}/>
      </mesh>

      <mesh position={[7.54, 1.25, 15.13]}>
        <sphereGeometry args={[0.04, 10, 10]}/>
        <meshBasicMaterial color={"#c7ad6b"}/>
      </mesh>

      <mesh position={[8.1, 1.32, 16.83]}>
        <sphereGeometry args={[0.04, 10, 10]}/>
        <meshBasicMaterial color={"#8BA046"}/>
      </mesh>
    </Float>
    
  </>
  )



}
export default BasicSpheres;