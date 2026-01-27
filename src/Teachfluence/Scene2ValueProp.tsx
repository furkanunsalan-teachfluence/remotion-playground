import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { COLORS, fontFamily } from "./constants";

const words = [
  { text: "Create.", color: COLORS.primary },
  { text: "Teach.", color: COLORS.warningAccent },
  { text: "Grow.", color: COLORS.primary },
];

export const Scene2ValueProp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

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
        const wordSpring = spring({
          frame,
          fps,
          delay: i * 8,
          config: { damping: 10, stiffness: 120 },
        });

        const scale = interpolate(wordSpring, [0, 1], [0.5, 1]);
        const opacity = interpolate(wordSpring, [0, 1], [0, 1]);

        return (
          <div
            key={word.text}
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: word.color,
              transform: `scale(${scale})`,
              opacity,
            }}
          >
            {word.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
