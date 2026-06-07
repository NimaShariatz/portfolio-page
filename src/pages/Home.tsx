import "./Home.css"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import Scene from "../components/scene"

import { useState } from "react";


function Home() {

  
  const [sectionTracker, setSectionTracker] = useState({ //used for event tracking across components
    start_spotLight: false,
    start_pointLights: false,
    

  })
  const handle_setSectionTracker = (sect: 'start_spotLight' | 'start_pointLights') => {
    setSectionTracker(prev => ({ ...prev, [sect]: true }))
  }



  return(
    <>
      <div className="canvas_container">
      <Canvas flat camera={{fov: 55, near: 0.1, far: 300}}>
        <OrbitControls makeDefault/>
        <Perf position="top-left"/>
        <color args={ [ '#000000' ] } attach="background" />

        <Scene sectionTracker={sectionTracker} handle_setSectionTracker={handle_setSectionTracker}/>


      </Canvas>
      </div>
    </>
  )

}

export default Home