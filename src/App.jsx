import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
