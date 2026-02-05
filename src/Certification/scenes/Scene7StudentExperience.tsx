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

export const Scene7StudentExperience: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Entrance
  const entranceProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const slideY = interpolate(entranceProgress, [0, 1], [40, 0]);
  const scale = interpolate(entranceProgress, [0, 1], [0.97, 1]);
  const opacity = entranceProgress;

  // Slow zoom
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
          maxWidth: 500,
          maxHeight: 700,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          transform: `translateY(${slideY}px) scale(${scale * zoomDuring})`,
          opacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Img
          src={staticFile("certification/07-student-claim-card.png")}
          style={{
            height: "100%",
            width: "auto",
            maxHeight: 700,
            objectFit: "contain",
          }}
        />
      </div>

      {/* Callout overlapping bottom-right corner */}
      <div style={{ position: "absolute", bottom: 200, right: 350 }}>
        <Callout
          text="Öğrenciler ilerlemelerini takip eder"
          delay={25}
          position="bottom-right"
        />
      </div>

      <Watermark />
    </AbsoluteFill>
  );
};
