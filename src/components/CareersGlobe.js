import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import styles from "../CSS/CareersPage.module.css";

/* 
   BASE GLOBE SHADER
 */

const vertexShader = `
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  vViewDir = normalize(-mvPos.xyz);
  gl_Position = projectionMatrix * mvPos;
}
`;

const fragmentShader = `
uniform vec3 ocean;
uniform vec3 glow;

varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  float view = dot(vNormal, vViewDir);

  // ===== BASE COLOR =====
  vec3 color = ocean;

  // ===== CENTER FOCUS (20% radius) =====
  // view ≈ 1.0 at center, 0.0 at edges
  float centerMask = smoothstep(0.75, 1.8, view);
  vec3 centerLift = ocean * 0.85 * centerMask;


  // ===== RIM GLOW (edges only) =====
  float rim = pow(1.0 - view, 4.0);
  vec3 rimGlow = glow * rim * 0.9;

  // ===== FINAL COLOR =====
  color += centerLift;
  color += rimGlow;

  gl_FragColor = vec4(color, 1.0);
}
`;

function BaseGlobe() {
  const ref = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  // scale globe relative to viewport
  const scale = viewport.width < 6 ? 0.75 : 1;

  return (
    <mesh ref={ref} scale={scale}>
      <sphereGeometry args={[2.6, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          ocean: { value: new THREE.Color("black") },
          glow: { value: new THREE.Color("white") },
        }}
      />
    </mesh>
  );
}

/* DOTS OVERLAY (LAND ONLY)*/

function GlobeDots() {
  const ref = useRef();
  const { viewport } = useThree();

  const dots = new THREE.TextureLoader().load("/earth-dots.png");
  dots.flipY = false;

  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });

  const scale = viewport.width < 6 ? 0.75 : 1;

  return (
    <mesh ref={ref} rotation={[Math.PI, 0, 0]} scale={scale}>
      <sphereGeometry args={[2.62, 128, 128]} />
      <meshBasicMaterial
        color="white"
        alphaMap={dots}
        transparent
        opacity={1.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

/*SCENE COMPOSITIon*/

function GlobeScene() {
  return (
    <>
      <BaseGlobe />
      <GlobeDots />
    </>
  );
}

/*EXPORT COMPONENT*/

export default function CareersGlobe() {
  return (
    <div
  style={{
    width: "100%",
    maxWidth: "600px",
    aspectRatio: "1 / 1",
    margin: "0 auto",
  }}
>
      <div className={styles.careersGlobeWrap}>
            <Canvas
  camera={{
    position: [0, 0, window.innerWidth < 768 ? 8.5 : 7],
    fov: window.innerWidth < 768 ? 50 : 45,
  }}
>

        <GlobeScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
     
    </div>
  );
}
