import "./Home.css"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"
import Scene from "../components/scene"

function Home() {

  




  return(
    <>
      <div className="canvas_container">
      <Canvas flat camera={{fov:55, near: 0.1, far: 300}}>
        <OrbitControls makeDefault/>
        <Perf position="top-left"/>
        <color args={ [ '#070500' ] } attach="background" />

        <Scene/>



      </Canvas>
      </div>
    </>
  )

}

export default Home