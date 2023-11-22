import React, { useEffect, useMemo, useRef } from "react";
import fragmentShader from "./fragmentShader.js";
import vertexShader from "./vertexShader.js";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import * as THREE from "three";

const Sphere = ({ sound }) => {
  const mesh = useRef();
  const analyser = useRef();
  useEffect(
    () => void (analyser.current = new THREE.AudioAnalyser(sound.current, 32)),
    [sound]
  );
  
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 3 },
    };
  }, []);

  useFrame((state, delta) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        0.15,
        0.02
      );
    }
    if (analyser.current) {
      const data = analyser.current.getAverageFrequency();
      mesh.current.scale.x =
        mesh.current.scale.y =
        mesh.current.scale.z =
          (data / 100) * 2;
      uniforms.u_intensity.value = (data / 100) * 2;
    }
    mesh.current.rotation.x += 0.005 * delta;
    mesh.current.rotation.y += 0.005 * delta;
  });

  return (
    <mesh ref={mesh} scale={3} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Sphere;
