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

export const Scene8PublicSharing: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Timeline:
  // Phase 1 (0 to 50%): Show full page
  // Phase 2 (50% to 70%): Zoom transition to buttons area
  // Phase 3 (70% to 100%): Hold on zoomed view

  const zoomStartFrame = durationInFrames * 0.45;
  const zoomEndFrame = durationInFrames * 0.65;

  // Entrance animation
  const entranceProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const entranceScale = interpolate(entranceProgress, [0, 1], [1.05, 1]);
  const entranceOpacity = entranceProgress;

  // Zoom transition progress
  const zoomProgress = interpolate(frame, [zoomStartFrame, zoomEndFrame], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Scale: start at 1, zoom to ~3.5x to focus on buttons area
  const scale = interpolate(zoomProgress, [0, 1], [1, 3]);

  // Pan to focus on the action buttons (bottom right area of the card)
  const translateX = interpolate(zoomProgress, [0, 1], [0, -25]); // Pan right
  const translateY = interpolate(zoomProgress, [0, 1], [0, -30]); // Pan down to buttons

  // Slight continuous zoom during hold
  const holdZoom = interpolate(
    frame,
    [zoomEndFrame, durationInFrames],
    [1, 1.03],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );

  // Callout visibility
  const callout1Visible = frame < zoomStartFrame;
  const callout2Visible = frame >= zoomEndFrame;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        fontFamily,
        overflow: "hidden",
      }}
    >
      {/* Image container with zoom/pan */}
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "88%",
            maxWidth: 1450,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            opacity: entranceOpacity,
          }}
        >
          <div
            style={{
              transform: `scale(${entranceScale * scale * holdZoom}) translate(${translateX}%, ${translateY}%)`,
              transformOrigin: "center center",
            }}
          >
            <Img
              src={staticFile("certification/08-public-page.png")}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </AbsoluteFill>

      {/* Callout 1: Full page view - overlapping corner */}
      {callout1Visible && (
        <div style={{ position: "absolute", bottom: 160, left: 120 }}>
          <Callout
            text="Her sertifikanın benzersiz doğrulanabilir sayfası"
            delay={12}
            position="bottom-left"
          />
        </div>
      )}

      {/* Callout 2: Zoomed view on buttons - overlapping corner */}
      {callout2Visible && (
        <div style={{ position: "absolute", bottom: 160, right: 120 }}>
          <Callout
            text="LinkedIn'de paylaş, PDF olarak indir"
            delay={0}
            position="bottom-right"
          />
        </div>
      )}

      <Watermark />
    </AbsoluteFill>
  );
};
