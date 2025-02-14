import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useRef, useState } from "react";
import { useTheme } from "@/components/theme-provider";

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(25000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      ref.current.rotation.z -= delta / 30;

      // Add a wave-like motion
      const time = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(time / 2) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={theme === "light" ? "#E91E63" : "#60A5FA"}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === "dark" ? 1 : 0.85}
        />
      </Points>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  );
}
