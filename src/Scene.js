import React, { useRef } from "react";
import { Plane, Sky, useTexture, Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Import the THREE object

import Fish from "./Fish";

function Scene() {
  // Load the brick texture
  const brickTexture = useTexture("/brick.jpg"); // Update the path to your texture
  brickTexture.wrapS = brickTexture.wrapT = THREE.RepeatWrapping;
  brickTexture.repeat.set(100, 100); // repeat texture twice in both directions
  brickTexture.needsUpdate = true;

  const cloudPositions = [
    [5, 5, 0],
    [-5, 5, 0],
    [0, 5, 5],
    // ... more positions
  ];

  const cameraRef = useRef();

  useFrame(({ camera }) => {
    // update camera position
    camera.position.y = Math.max(camera.position.y, 1);
  });
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          attach="material"
          map={brickTexture}
          repeat={[120, 120]}
        />
      </Plane>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      {cloudPositions.map((position, index) => (
        <Cloud key={index} position={position} />
      ))}
      <Fish position={[0, 0, 0]} />
      <perspectiveCamera
        ref={cameraRef}
        position={[-100, 100, 20]}
        fov={60}
        near={0.1}
        far={1000}
      />
    </>
  );
}

export default Scene;
