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
import { fontFamily, CERT_COLORS, SPRING_CONFIG } from "../constants";
import { Watermark } from "../components/Watermark";

export const Scene9CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Background glow pulse
  const glowRadius = interpolate(
    Math.sin(frame * 0.08),
    [-1, 1],
    [300, 500]
  );

  // Title entrance
  const titleSpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG.default,
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Button entrance
  const buttonSpring = spring({
    frame,
    fps,
    delay: 30,
    config: SPRING_CONFIG.bouncy,
  });
  const buttonScale = interpolate(buttonSpring, [0, 1], [0.5, 1]);
  const buttonOpacity = interpolate(buttonSpring, [0, 1], [0, 1]);

  // Button pulse glow
  const buttonGlow = interpolate(
    Math.sin(frame * 0.12),
    [-1, 1],
    [10, 30]
  );

  // Logo entrance
  const logoSpring = spring({
    frame,
    fps,
    delay: 15,
    config: SPRING_CONFIG.default,
  });
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoY = interpolate(logoSpring, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        gap: 36,
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
          background: `radial-gradient(circle, ${CERT_COLORS.primary}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <Img
        src={staticFile("images/logo-full.png")}
        style={{
          height: 100,
          objectFit: "contain",
          opacity: logoOpacity,
          transform: `translateY(${logoY}px)`,
          zIndex: 1,
        }}
      />

      {/* Title */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 500,
          color: CERT_COLORS.textMuted,
          textAlign: "center",
          transform: `scale(${titleScale})`,
          opacity: titleOpacity,
          zIndex: 1,
          maxWidth: 900,
          lineHeight: 1.2,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Sertifikalarınızı bugün oluşturun
      </div>

      {/* Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "18px 48px",
          borderRadius: 12,
          backgroundColor: CERT_COLORS.primary,
          color: CERT_COLORS.lightText,
          fontSize: 24,
          fontWeight: 700,
          transform: `scale(${buttonScale})`,
          opacity: buttonOpacity,
          boxShadow: `0 0 ${buttonGlow}px ${buttonGlow / 2}px ${CERT_COLORS.primary}60`,
          zIndex: 1,
        }}
      >
        Hemen Deneyin
      </div>
    </AbsoluteFill>
  );
};
