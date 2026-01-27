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

export const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo spring animation: scale from 0 to 1
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const logoScale = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  // URL reveal: clip-path from right to left, starts after logo settles (~frame 30)
  const urlRevealStart = 30;
  const urlProgress = interpolate(
    frame,
    [urlRevealStart, urlRevealStart + 20],
    [100, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Tagline fade in: 0.5s (15 frames) after URL starts
  const taglineStart = urlRevealStart + 15;
  const taglineOpacity = interpolate(
    frame,
    [taglineStart, taglineStart + 15],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
      }}
    >
      {/* Logo */}
      <Img
        src={staticFile("images/logo-full.png")}
        style={{
          height: 80,
          objectFit: "contain",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      />

      {/* URL */}
      <div
        style={{
          marginTop: 16,
          fontSize: 20,
          fontWeight: 600,
          color: COLORS.primary,
          clipPath: `inset(0 ${urlProgress}% 0 0)`,
        }}
      >
        teachfluence.com
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 12,
          fontSize: 24,
          fontWeight: 400,
          color: COLORS.textMuted,
          opacity: taglineOpacity,
        }}
      >
        The Modern Platform for Online Education
      </div>
    </AbsoluteFill>
  );
};
