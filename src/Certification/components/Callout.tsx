import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { fontFamily, CERT_COLORS } from "../constants";

interface CalloutProps {
  text: string;
  delay?: number;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}

export const Callout: React.FC<CalloutProps> = ({
  text,
  delay = 0,
  position = "bottom-left",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delay);
  const animationDuration = fps * 0.5;

  // Smooth entrance
  const progress = interpolate(adjustedFrame, [0, animationDuration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const opacity = interpolate(progress, [0, 0.6], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Slide from the side
  const isLeft = position.includes("left");

  const slideX = isLeft
    ? interpolate(progress, [0, 1], [-50, 0])
    : interpolate(progress, [0, 1], [50, 0]);

  const scale = interpolate(progress, [0, 1], [0.85, 1]);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "22px 40px",
        borderRadius: 50,
        backgroundColor: CERT_COLORS.primary,
        fontFamily,
        fontSize: 28,
        fontWeight: 600,
        color: "#ffffff",
        maxWidth: 450,
        textAlign: "center",
        lineHeight: 1.4,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        opacity,
        transform: `translateX(${slideX}px) scale(${scale})`,
      }}
    >
      {text}
    </div>
  );
};
