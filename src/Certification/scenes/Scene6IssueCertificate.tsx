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

export const Scene6IssueCertificate: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Entrance
  const entranceProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const initialScale = interpolate(entranceProgress, [0, 1], [1.12, 1]);
  const opacity = entranceProgress;

  // Continue zoom out
  const zoomDuring = interpolate(frame, [0, durationInFrames], [1.03, 1], {
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
          width: "82%",
          maxWidth: 1350,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          transform: `scale(${initialScale * zoomDuring})`,
          opacity,
        }}
      >
        <Img
          src={staticFile("certification/05-issued-certificates.png")}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Callout overlapping bottom-left corner */}
      <div style={{ position: "absolute", bottom: 160, left: 120 }}>
        <Callout
          text="Verilen sertifikaları tek yerden yönetin"
          delay={25}
          position="bottom-left"
        />
      </div>

      <Watermark />
    </AbsoluteFill>
  );
};
