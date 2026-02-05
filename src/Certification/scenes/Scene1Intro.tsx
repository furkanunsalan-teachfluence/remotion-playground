import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  Easing,
} from "remotion";
import { fontFamily, CERT_COLORS } from "../constants";
import { Badge } from "../components/Badge";

export const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo smooth entrance
  const logoProgress = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const logoScale = interpolate(logoProgress, [0, 1], [0.8, 1]);
  const logoOpacity = logoProgress;

  // Title entrance (delayed)
  const titleProgress = interpolate(frame, [fps * 0.4, fps * 0.9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleOpacity = titleProgress;
  const titleY = interpolate(titleProgress, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        gap: 16,
      }}
    >
      {/* Badge */}
      <div style={{ position: "absolute", top: 100 }}>
        <Badge text="Yeni Özellik" delay={15} />
      </div>

      {/* Logo */}
      <Img
        src={staticFile("images/logo-full.png")}
        style={{
          height: 100,
          objectFit: "contain",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}
      />

      {/* Title - smaller and lighter to complement the logo */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 500,
          color: CERT_COLORS.textMuted,
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Sertifika Sistemi
      </div>
    </AbsoluteFill>
  );
};
