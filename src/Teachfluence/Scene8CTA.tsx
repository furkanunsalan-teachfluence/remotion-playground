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

  // Logo row entrance
  const logoSpring = spring({
    frame,
    fps,
    delay: 10,
    config: { damping: 12, stiffness: 100 },
  });
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoY = interpolate(logoSpring, [0, 1], [20, 0]);

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
        gap: 20,
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

      {/* Logo */}
      <Img
        src={staticFile("images/logo-full.png")}
        style={{
          height: 44,
          objectFit: "contain",
          opacity: logoOpacity,
          transform: `translateY(${logoY}px)`,
          zIndex: 1,
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
        Bugün öğretmeye başlayın
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
        Hepsi bir arada eğitim platformunuz
      </div>
    </AbsoluteFill>
  );
};
