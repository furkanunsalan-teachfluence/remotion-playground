import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";
import { fontFamily, CERT_COLORS } from "../constants";
import { Callout } from "../components/Callout";
import { Watermark } from "../components/Watermark";

const PART_DURATION = 60;
const FLIP_DURATION = 20;
const FOCUS_DURATION = 25;

export const Scene4EditorDemo: React.FC = () => {
  const frame = useCurrentFrame();

  // Timeline:
  // Part 1: frames 0 to PART_DURATION (then flip transition)
  // Part 2: frames PART_DURATION to PART_DURATION * 2 (then focus transition)
  // Part 3: frames PART_DURATION * 2 to PART_DURATION * 3

  const flipStart = PART_DURATION - FLIP_DURATION / 2;
  const flipEnd = PART_DURATION + FLIP_DURATION / 2;

  const focusStart = PART_DURATION * 2 - FOCUS_DURATION / 2;
  const focusEnd = PART_DURATION * 2 + FOCUS_DURATION / 2;

  // PART 1: First screenshot with flip-out
  const part1Visible = frame < flipEnd;
  const part1FlipProgress = interpolate(frame, [flipStart, flipEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  // Flip rotates from 0 to 90 degrees (disappears at 90)
  const part1RotateY = interpolate(part1FlipProgress, [0, 0.5], [0, 90], {
    extrapolateRight: "clamp",
  });
  const part1Opacity = part1FlipProgress < 0.5 ? 1 : 0;

  // Ken Burns zoom for part 1
  const part1Zoom = interpolate(frame, [0, PART_DURATION], [1, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // PART 2: Second screenshot with flip-in and focus-out
  const part2Visible = frame >= flipStart && frame < focusEnd;
  // Flip in (from -90 to 0)
  const part2RotateY = interpolate(part1FlipProgress, [0.5, 1], [-90, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const part2FlipOpacity = part1FlipProgress >= 0.5 ? 1 : 0;

  // Focus out transition for part 2
  const part2FocusProgress = interpolate(frame, [focusStart, focusEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const part2FocusOpacity = interpolate(part2FocusProgress, [0, 1], [1, 0]);
  const part2FocusScale = interpolate(part2FocusProgress, [0, 1], [1, 0.85]);
  const part2FocusBlur = interpolate(part2FocusProgress, [0, 1], [0, 8]);


  // PART 3: Third screenshot with focus-in
  const part3Visible = frame >= focusStart;
  const part3FocusProgress = interpolate(frame, [focusStart, focusEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const part3Opacity = part3FocusProgress;
  const part3Scale = interpolate(part3FocusProgress, [0, 1], [1.15, 1]);
  const part3Blur = interpolate(part3FocusProgress, [0, 0.7], [6, 0], {
    extrapolateRight: "clamp",
  });

  // Ken Burns zoom for part 3
  const part3Zoom = interpolate(
    frame,
    [PART_DURATION * 2, PART_DURATION * 3],
    [1, 1.04],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );

  // Callout visibility
  const callout1Visible = frame < flipStart;
  const callout2Visible = frame >= flipEnd && frame < focusStart;
  const callout3Visible = frame >= focusEnd;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        fontFamily,
        perspective: 1500,
      }}
    >
      {/* Part 1 - First screenshot with flip */}
      {part1Visible && (
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: part1Opacity,
            transformStyle: "preserve-3d",
            transform: `rotateY(${part1RotateY}deg)`,
          }}
        >
          <div
            style={{
              width: "82%",
              maxWidth: 1350,
              maxHeight: 750,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              transform: `scale(${part1Zoom})`,
              backfaceVisibility: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile("certification/01-empty-state.png")}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Part 2 - Second screenshot with flip-in and focus-out */}
      {part2Visible && (
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: part2FlipOpacity * part2FocusOpacity,
            transformStyle: "preserve-3d",
            transform:
              part1FlipProgress < 1
                ? `rotateY(${part2RotateY}deg)`
                : `scale(${part2FocusScale})`,
            filter: part2FocusProgress > 0 ? `blur(${part2FocusBlur}px)` : "none",
          }}
        >
          <div
            style={{
              maxWidth: 700,
              maxHeight: 750,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              backfaceVisibility: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile("certification/02-editor-canvas.png")}
              style={{ height: "100%", width: "auto", maxHeight: 750, objectFit: "contain" }}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Part 3 - Third screenshot with focus-in */}
      {part3Visible && (
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: part3Opacity,
            transform: `scale(${part3Scale * part3Zoom})`,
            filter: part3Blur > 0 ? `blur(${part3Blur}px)` : "none",
          }}
        >
          <div
            style={{
              width: "82%",
              maxWidth: 1350,
              maxHeight: 750,
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile("certification/03-field-selected.png")}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </AbsoluteFill>
      )}

      {/* Callouts - overlapping corners of images */}
      {callout1Visible && (
        <div style={{ position: "absolute", bottom: 140, left: 80 }}>
          <Callout
            text="Sertifika şablonu oluşturmak için tek tık"
            delay={12}
            position="bottom-left"
          />
        </div>
      )}

      {callout2Visible && (
        <div style={{ position: "absolute", top: 140, right: 80 }}>
          <Callout
            text="Sürükle & Bırak Düzenleyici"
            delay={0}
            position="top-right"
          />
        </div>
      )}

      {callout3Visible && (
        <div style={{ position: "absolute", bottom: 140, left: 80 }}>
          <Callout
            text="Konum, font, renk - her şey özelleştirilebilir"
            delay={0}
            position="bottom-left"
          />
        </div>
      )}

      <Watermark />
    </AbsoluteFill>
  );
};
