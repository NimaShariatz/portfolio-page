import "./Home.css"
import { Canvas } from '@react-three/fiber'
import { Perf } from "r3f-perf"

function Home() {
  return(
    <>
      <div className="canvas_container">
      <Canvas>
        <Perf position="top-left" />


      </Canvas>
      </div>
    </>
  )

}

export default Home