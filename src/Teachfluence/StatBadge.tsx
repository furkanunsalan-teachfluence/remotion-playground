import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { fontFamily } from "./constants";

interface StatBadgeProps {
  text: string;
  bgColor: string;
  delay: number;
  style?: React.CSSProperties;
}

export const StatBadge: React.FC<StatBadgeProps> = ({
  text,
  bgColor,
  delay,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    delay,
    config: { damping: 12, stiffness: 120 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const scale = interpolate(entrance, [0, 1], [0.5, 1]);
  const floatY = Math.sin(frame * 0.05) * 5;

  return (
    <div
      style={{
        position: "absolute",
        opacity,
        transform: `scale(${scale}) translateY(${floatY}px)`,
        background: bgColor,
        color: "white",
        borderRadius: 9999,
        padding: "8px 20px",
        fontSize: 14,
        fontWeight: 600,
        fontFamily,
        whiteSpace: "nowrap",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        ...style,
      }}
    >
      {text}
    </div>
  );
};
