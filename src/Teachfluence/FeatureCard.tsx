import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, fontFamily } from "./constants";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    delay,
    config: { damping: 12, stiffness: 100 },
  });

  const scale = interpolate(entrance, [0, 1], [0.8, 1]);
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <div
      style={{
        width: 280,
        height: 160,
        background: COLORS.background,
        borderRadius: 12,
        border: `1px solid ${COLORS.border}`,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 12,
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: COLORS.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: COLORS.text,
            fontFamily,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: COLORS.textMuted,
            fontFamily,
            marginTop: 4,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
