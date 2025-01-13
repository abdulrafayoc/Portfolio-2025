import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import fontImbue from "../assets/fonts/Imbue-VariableFont_opsz,wght.ttf";

const TextPathAnimation = ({
  text = "How can I help you? | \
How can I help you? | \
How can I help you? | \
How can I help you? | \
How can I help you? | \
How can I help you? | \
How can I help you? | \
How can I help you? | \
How can I help you? | \
 How can I help you? | ",
  radiusX = 7,
  radiusY = 12,
  speed = 0.02,
  fontSize = 1,
  color = "white",
  scale = .26, 
}) => {
  const groupRef = useRef();
  const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() * speed;
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        const progress = (elapsed + index / text.length) % 1;
        const point = curve.getPointAt(progress);
        const tangent = curve.getTangentAt(progress);
        child.position.set(point.x, point.y, 0);
        child.rotation.z = Math.atan2(tangent.y, tangent.x);
      });
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      {text.split("").map((char, index) => (
        <Text
          key={index}
          fontSize={fontSize}
          color={color}
          font={fontImbue}
          position={[0, 0, 0]}
        >
          {char}
        </Text>
      ))}
    </group>
  );
};

export default TextPathAnimation;
