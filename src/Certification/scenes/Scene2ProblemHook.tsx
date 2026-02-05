import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { fontFamily, CERT_COLORS, SPRING_CONFIG } from "../constants";
import { TypewriterText } from "../components/TypewriterText";
import { Watermark } from "../components/Watermark";

// Certificate icon SVG
const CertificateIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 80,
  color = CERT_COLORS.primary,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
    <path d="M7 15h4" />
    <circle cx="17" cy="18" r="3" fill={color} stroke="none" />
    <path d="M17 16v2l1 1" stroke={CERT_COLORS.background} strokeWidth={1.5} />
  </svg>
);

export const Scene2ProblemHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Icon entrance
  const iconSpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG.default,
  });

  const iconScale = interpolate(iconSpring, [0, 1], [0.5, 1]);
  const iconOpacity = interpolate(iconSpring, [0, 1], [0, 1]);

  // Background pulse
  const pulseRadius = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [300, 500]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        gap: 40,
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: pulseRadius,
          height: pulseRadius,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${CERT_COLORS.primary}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          transform: `scale(${iconScale})`,
          opacity: iconOpacity,
        }}
      >
        <CertificateIcon size={120} />
      </div>

      {/* Typewriter question */}
      <div style={{ maxWidth: 900, padding: "0 40px" }}>
        <TypewriterText
          text="Öğrencilerinize profesyonel sertifikalar vermek zor mu?"
          startFrame={15}
          charactersPerFrame={0.8}
          fontSize={42}
          fontWeight={600}
          color={CERT_COLORS.text}
        />
      </div>

      <Watermark />
    </AbsoluteFill>
  );
};
