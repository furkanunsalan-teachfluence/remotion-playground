import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { COLORS, fontFamily } from "./constants";

export const Scene8CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background glow pulse
  const glowRadius = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [200, 400]
  );

  // Title entrance
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Button entrance
  const buttonSpring = spring({
    frame,
    fps,
    delay: 10,
    config: { damping: 12, stiffness: 100 },
  });
  const buttonOpacity = interpolate(buttonSpring, [0, 1], [0, 1]);
  const buttonY = interpolate(buttonSpring, [0, 1], [20, 0]);
  // Button pulse
  const buttonPulse = 1.0 + Math.sin(frame * 0.1) * 0.03;

  // Subtitle fade in
  const subtitleOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        gap: 24,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: glowRadius * 2,
          height: glowRadius * 2,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.primary}1a 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          color: COLORS.text,
          textAlign: "center",
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
          zIndex: 1,
        }}
      >
        Start teaching today
      </div>

      {/* CTA Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: COLORS.primary,
          borderRadius: 16,
          padding: "16px 40px",
          opacity: buttonOpacity,
          transform: `translateY(${buttonY}px) scale(${buttonPulse})`,
          zIndex: 1,
        }}
      >
        <Img
          src={staticFile("images/logo-full.png")}
          style={{
            height: 32,
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
        />
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "white",
          }}
        >
          teachfluence.com
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 18,
          fontWeight: 400,
          color: COLORS.textMuted,
          opacity: subtitleOpacity,
          zIndex: 1,
        }}
      >
        Your all-in-one education platform
      </div>
    </AbsoluteFill>
  );
};
