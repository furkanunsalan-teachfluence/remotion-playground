import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { COLORS, fontFamily } from "./constants";

const words = [
  { text: "Oluştur.", color: COLORS.primary },
  { text: "Öğret.", color: COLORS.warningAccent },
  { text: "Büyüt.", color: COLORS.primary },
];

export const Scene2ValueProp: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Fade out all words together near the end
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 5],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        fontFamily,
      }}
    >
      {words.map((word, i) => {
        const entranceDelay = i * 10;
        const scale = interpolate(
          frame,
          [entranceDelay, entranceDelay + 12],
          [0.5, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const entranceOpacity = interpolate(
          frame,
          [entranceDelay, entranceDelay + 12],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={word.text}
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: word.color,
              transform: `scale(${scale})`,
              opacity: entranceOpacity * fadeOut,
            }}
          >
            {word.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
