import "./Home.css"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import Scene from "../components/scene"

import { useState } from "react";

import PopupEdu from "../components/popups/popupEdu/popupEdu"
import ShortcutCircles from "../components/shortcutCircles/shortcutCircles"
import PopupExp from "../components/popups/popupExp/popupExp"
import PopupProj1 from "../components/popups/popupProj1/popupProj1"
import PopupProj2 from "../components/popups/popupProj2/popupProj2"
import PopupProj3 from "../components/popups/popupProj3/popupProj3"
import PopupProj4 from "../components/popups/popupProj4/popupProj4"

function Home() {
  
  const [sectionTracker, setSectionTracker] = useState({ //used for event tracking across components
    start_spotLight: false,
    start_pointLights: false,
    trigger_camera: false
  })
  const handle_setSectionTracker = (sect: 'start_spotLight' | 'start_pointLights' | 'trigger_camera') => {
    setSectionTracker(prev => ({ ...prev, [sect]: true }))
  }


  type PopupKey = 'Edu_popup' | 'Exp_popup' | 'Proj1_popup' | 'Proj2_popup' | 'Proj3_popup' | 'Proj4_popup'

  const [triggerPopup, setTriggerPopup] = useState<Record<PopupKey, boolean>>({
    Edu_popup: false,
    Exp_popup: false,
    Proj1_popup: false,
    Proj2_popup: false,
    Proj3_popup: false,
    Proj4_popup: false,
  })

  const handle_triggerPopup = (sect: PopupKey) => {
    setTriggerPopup(prev => ({ ...prev, [sect]: !prev[sect] }))
  }




  return(
    <>
    <div className="canvas_container">
      <Canvas camera={{fov: 45, near: 0.1, far: 300}}>
        <OrbitControls rotateSpeed={0.45} makeDefault/>
        <Perf position="top-left"/>
        <color args={ [ '#080010' ] } attach="background" />

        <Scene sectionTracker={sectionTracker} triggerPopup={triggerPopup} handle_setSectionTracker={handle_setSectionTracker} handle_triggerPopup={handle_triggerPopup}/>


      </Canvas>

      <ShortcutCircles camera_trigger={sectionTracker.trigger_camera} triggerPopup={triggerPopup} handle_triggerPopup={handle_triggerPopup}/>
      
      <PopupEdu triggerPopup={triggerPopup.Edu_popup} handle_triggerPopup={handle_triggerPopup}/>
      <PopupExp triggerPopup={triggerPopup.Exp_popup} handle_triggerPopup={handle_triggerPopup}/>
      <PopupProj1 triggerPopup={triggerPopup.Proj1_popup} handle_triggerPopup={handle_triggerPopup}/>
      <PopupProj2 triggerPopup={triggerPopup.Proj2_popup} handle_triggerPopup={handle_triggerPopup}/>
      <PopupProj3 triggerPopup={triggerPopup.Proj3_popup} handle_triggerPopup={handle_triggerPopup}/>
      <PopupProj4 triggerPopup={triggerPopup.Proj4_popup} handle_triggerPopup={handle_triggerPopup}/>

    
    </div>
      
    </>
  )

}

export default Home