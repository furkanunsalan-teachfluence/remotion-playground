import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { fontFamily, CERT_COLORS, SPRING_CONFIG } from "../constants";
import { UnderlineDraw } from "../components/UnderlineDraw";
import { Watermark } from "../components/Watermark";

export const Scene3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Text entrance
  const textSpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG.bouncy,
  });

  const textScale = interpolate(textSpring, [0, 1], [0.8, 1]);
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: CERT_COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Main text */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: CERT_COLORS.primary,
            transform: `scale(${textScale})`,
            opacity: textOpacity,
          }}
        >
          Artık değil.
        </div>

        {/* Underline */}
        <div style={{ marginTop: 12 }}>
          <UnderlineDraw
            width={380}
            delay={20}
            duration={25}
            color={CERT_COLORS.primary}
            strokeWidth={6}
          />
        </div>
      </div>

      <Watermark />
    </AbsoluteFill>
  );
};
