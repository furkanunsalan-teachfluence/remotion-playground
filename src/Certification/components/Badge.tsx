import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { fontFamily, CERT_COLORS } from "../constants";

interface BadgeProps {
  text: string;
  delay?: number;
  bgColor?: string;
  textColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  delay = 0,
  bgColor = CERT_COLORS.primary,
  textColor = "#ffffff",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);
  const animationDuration = fps * 0.5; // 0.5 seconds

  // Smooth scale and fade entrance
  const progress = interpolate(adjustedFrame, [0, animationDuration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)), // Slight overshoot for playful feel
  });

  const scale = interpolate(progress, [0, 1], [0.7, 1]);
  const opacity = interpolate(adjustedFrame, [0, animationDuration * 0.5], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "14px 28px",
        borderRadius: 50,
        backgroundColor: bgColor,
        transform: `scale(${scale})`,
        opacity,
        fontFamily,
        fontSize: 18,
        fontWeight: 700,
        color: textColor,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
      }}
    >
      {text}
    </div>
  );
};
