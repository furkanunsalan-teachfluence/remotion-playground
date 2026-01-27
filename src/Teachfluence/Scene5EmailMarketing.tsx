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
import { COLORS, fontFamily } from "./constants";
import { BrowserFrame } from "./BrowserFrame";
import { StatBadge } from "./StatBadge";

const badges = [
  {
    text: "94.9% Delivery",
    bg: COLORS.primary,
    style: { top: 140, right: -70 } as React.CSSProperties,
  },
  {
    text: "22.2% Open Rate",
    bg: COLORS.warningAccent,
    style: { bottom: 80, left: -60 } as React.CSSProperties,
  },
  {
    text: "2.6% Click Rate",
    bg: COLORS.primary,
    style: { bottom: 40, right: -60 } as React.CSSProperties,
  },
];

export const Scene5EmailMarketing: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Image scroll
  const scrollY = interpolate(frame, [0, durationInFrames], [0, -30], {
    easing: Easing.inOut(Easing.cubic),
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
        justifyContent: "flex-start",
        paddingTop: 40,
        fontFamily,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: COLORS.text,
          textAlign: "center",
        }}
      >
        Grow with email marketing
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 400,
          color: COLORS.textMuted,
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Automated campaigns with detailed analytics
      </div>

      {/* Browser frame with stat badges */}
      <div style={{ marginTop: 24, position: "relative" }}>
        <BrowserFrame url="teachfluence.com/admin/email">
          <Img
            src={staticFile("images/mail.png")}
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transform: `translateY(${scrollY}%)`,
            }}
          />
        </BrowserFrame>

        {/* Floating stat badges */}
        {badges.map((badge, i) => (
          <StatBadge
            key={badge.text}
            text={badge.text}
            bgColor={badge.bg}
            delay={15 + i * 12}
            style={badge.style}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
