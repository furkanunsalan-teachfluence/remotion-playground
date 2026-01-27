import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
} from "remotion";
import { COLORS, fontFamily } from "./constants";
import { BrowserFrame } from "./BrowserFrame";

const pills = [
  {
    text: "Drag & Drop",
    bg: COLORS.primary,
    position: { top: 160, right: -60 } as React.CSSProperties,
  },
  {
    text: "Templates",
    bg: COLORS.warningAccent,
    position: { bottom: 60, left: -50 } as React.CSSProperties,
  },
  {
    text: "Custom Domain",
    bg: COLORS.primary,
    position: { bottom: 40, right: -70 } as React.CSSProperties,
  },
];

export const Scene4WebsiteBuilder: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

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
        Build your education website
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
        Drag & drop page builder with custom domains
      </div>

      {/* Browser frame with floating pills */}
      <div style={{ marginTop: 24, position: "relative" }}>
        <BrowserFrame url="teachfluence.com/admin/website">
          <Img
            src={staticFile("images/web_editor.webp")}
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transform: `translateY(${scrollY}%)`,
            }}
          />
        </BrowserFrame>

        {/* Floating pills */}
        {pills.map((pill, i) => {
          const pillSpring = spring({
            frame,
            fps,
            delay: 15 + i * 15,
            config: { damping: 12, stiffness: 120 },
          });

          const pillOpacity = interpolate(pillSpring, [0, 1], [0, 1]);
          const pillScale = interpolate(pillSpring, [0, 1], [0.5, 1]);
          const floatY = Math.sin(frame * 0.05 + i) * 5;

          return (
            <div
              key={pill.text}
              style={{
                position: "absolute",
                ...pill.position,
                opacity: pillOpacity,
                transform: `scale(${pillScale}) translateY(${floatY}px)`,
                background: pill.bg,
                color: "white",
                borderRadius: 9999,
                padding: "8px 20px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {pill.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
