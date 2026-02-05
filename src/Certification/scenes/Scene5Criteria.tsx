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
import { Callout } from "../components/Callout";
import { Watermark } from "../components/Watermark";

export const Scene5Criteria: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Entrance
  const entranceProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const initialScale = interpolate(entranceProgress, [0, 1], [1.1, 1]);
  const opacity = entranceProgress;

  // Continuous zoom
  const zoomDuring = interpolate(frame, [0, durationInFrames], [1, 1.05], {
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          width: "78%",
          maxWidth: 850,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          transform: `scale(${initialScale * zoomDuring})`,
          opacity,
        }}
      >
        <Img
          src={staticFile("certification/04-criteria-dropdown.png")}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Callout overlapping top-right corner */}
      <div style={{ position: "absolute", top: 140, right: 120 }}>
        <Callout
          text="Tamamlama kriterleri ile otomatik sertifika"
          delay={25}
          position="top-right"
        />
      </div>

      <Watermark />
    </AbsoluteFill>
  );
};
