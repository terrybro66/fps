import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <Scene />
        <OrbitControls minPolarAngle={0} maxDistance={50} />
      </Canvas>
    </div>
  );
}

export default App;
