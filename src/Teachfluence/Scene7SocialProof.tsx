import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { COLORS, fontFamily } from "./constants";
import { StarIcon } from "./icons";

const stats = [
  { text: "2.000+ Öğrenci", color: COLORS.primary },
  { text: "Aktif Kurslar", color: COLORS.text },
  { text: "Büyüyen Topluluk", color: COLORS.warningAccent },
];

export const Scene7SocialProof: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Badge entrance (first)
  const badgeSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120 },
  });
  const badgeOpacity = interpolate(badgeSpring, [0, 1], [0, 1]);
  const badgeScale = interpolate(badgeSpring, [0, 1], [0.8, 1]);

  // Image entrance (after badge)
  const imageSpring = spring({
    frame,
    fps,
    delay: 10,
    config: { damping: 12, stiffness: 100 },
  });
  const imageScale = interpolate(imageSpring, [0, 1], [0.9, 1]);
  const imageOpacity = interpolate(imageSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        gap: 24,
      }}
    >
      {/* Trust badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: COLORS.primary,
          color: "white",
          borderRadius: 9999,
          padding: "8px 20px",
          fontSize: 14,
          fontWeight: 600,
          opacity: badgeOpacity,
          transform: `scale(${badgeScale})`,
        }}
      >
        <StarIcon size={16} color="white" />
        Dünya genelinde eğitimciler tarafından tercih ediliyor
      </div>

      {/* Showcase image */}
      <Img
        src={staticFile("images/fluakademi.png")}
        style={{
          maxWidth: 700,
          width: "100%",
          transform: `scale(${imageScale})`,
          opacity: imageOpacity,
        }}
      />

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: 40,
          alignItems: "center",
        }}
      >
        {stats.map((stat, i) => {
          const statSpring = spring({
            frame,
            fps,
            delay: 25 + i * 8,
            config: { damping: 12, stiffness: 100 },
          });
          const statOpacity = interpolate(statSpring, [0, 1], [0, 1]);
          const statY = interpolate(statSpring, [0, 1], [15, 0]);

          return (
            <div
              key={stat.text}
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: stat.color,
                opacity: statOpacity,
                transform: `translateY(${statY}px)`,
              }}
            >
              {stat.text}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
