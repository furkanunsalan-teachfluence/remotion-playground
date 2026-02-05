import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { CERT_COLORS, SPRING_CONFIG } from "../constants";

interface GlowHighlightProps {
  x: number;
  y: number;
  width: number;
  height: number;
  delay?: number;
  color?: string;
  borderRadius?: number;
  pulseSpeed?: number;
}

export const GlowHighlight: React.FC<GlowHighlightProps> = ({
  x,
  y,
  width,
  height,
  delay = 0,
  color = CERT_COLORS.primary,
  borderRadius = 4,
  pulseSpeed = 0.1,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    delay,
    config: SPRING_CONFIG.default,
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const scale = interpolate(entrance, [0, 1], [0.95, 1]);

  // Pulsing glow effect
  const glowIntensity = interpolate(
    Math.sin((frame - delay) * pulseSpeed),
    [-1, 1],
    [0.3, 0.6]
  );

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        borderRadius,
        border: `2px solid ${color}`,
        boxShadow: `0 0 ${20 * glowIntensity}px ${10 * glowIntensity}px ${color}40`,
        opacity,
        transform: `scale(${scale})`,
        pointerEvents: "none",
      }}
    />
  );
};
