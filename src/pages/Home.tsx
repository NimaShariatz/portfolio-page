import "./Home.css"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import Scene from "../components/scene"

import { useState } from "react";

import PopupEdu from "../components/popupEdu/popupEdu"
import ShortcutCircles from "../components/shortcutCircles/shortcutCircles"

function Home() {
  
  const [sectionTracker, setSectionTracker] = useState({ //used for event tracking across components
    start_spotLight: false,
    start_pointLights: false,
    trigger_camera: false
  })
  const handle_setSectionTracker = (sect: 'start_spotLight' | 'start_pointLights' | 'trigger_camera') => {
    setSectionTracker(prev => ({ ...prev, [sect]: true }))
  }


  const [triggerEDU, setTriggerEdu] = useState(false);
  const handle_triggerEDU = () =>{
    setTriggerEdu(!triggerEDU);
  }


  return(
    <>
    <div className="canvas_container">
      <Canvas camera={{fov: 45, near: 0.1, far: 300}}>
        <OrbitControls rotateSpeed={0.45} zoomToCursor={true} makeDefault/>
        <Perf position="top-left"/>
        <color args={ [ '#080010' ] } attach="background" />

        <Scene sectionTracker={sectionTracker} handle_setSectionTracker={handle_setSectionTracker} handle_triggerEDU={handle_triggerEDU}/>


      </Canvas>

      <ShortcutCircles camera_trigger={sectionTracker.trigger_camera} triggerEDU={triggerEDU} handle_triggerEDU={handle_triggerEDU}/>
      <PopupEdu triggerEDU={triggerEDU} handle_triggerEDU={handle_triggerEDU}/>

    
    </div>
      
    </>
  )

}

export default Home