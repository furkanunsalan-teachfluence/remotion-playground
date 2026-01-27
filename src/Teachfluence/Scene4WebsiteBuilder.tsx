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

// Pills arranged in an elliptical pattern around the centered image
const pills = [
  { text: "Gerçek Zamanlı Önizleme", left: 720, top: 150 },
  { text: "Renk Temaları", left: 1010, top: 285 },
  { text: "Hazır Bloklar", left: 995, top: 470 },
  { text: "Sürükle Bırak", left: 765, top: 590 },
  { text: "Otomatik Kaydetme", left: 350, top: 590 },
  { text: "Yapay Zeka Desteği", left: 115, top: 470 },
  { text: "Responsive Tasarım", left: 95, top: 285 },
  { text: "Geri Alma & Yineleme Desteği", left: 305, top: 150 },
] as const;

export const Scene4WebsiteBuilder: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title entrance
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [20, 0]);

  // Image entrance
  const imageSpring = spring({
    frame,
    fps,
    delay: 5,
    config: { damping: 12, stiffness: 100 },
  });
  const imageScale = interpolate(imageSpring, [0, 1], [0.9, 1]);
  const imageOpacity = interpolate(imageSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily,
      }}
    >
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 40,
          fontWeight: 700,
          color: COLORS.text,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        Eğitim web sitenizi oluşturun
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 20,
          fontWeight: 400,
          color: COLORS.textMuted,
          opacity: titleOpacity,
        }}
      >
        Sürükle bırak editörü ile özel alan adı desteği
      </div>

      {/* Centered image */}
      <div
        style={{
          position: "absolute",
          top: 140,
          left: "50%",
          transform: `translateX(-50%) scale(${imageScale})`,
          opacity: imageOpacity,
          width: 520,
          height: 520,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Img
          src={staticFile("images/web_editor.webp")}
          style={{
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>

      {/* Floating pills */}
      {pills.map((pill, i) => {
        const pillSpring = spring({
          frame,
          fps,
          delay: 12,
          config: { damping: 12, stiffness: 120 },
        });

        const pillOpacity = interpolate(pillSpring, [0, 1], [0, 1]);
        const pillScale = interpolate(pillSpring, [0, 1], [0.5, 1]);
        const floatY = Math.sin(frame * 0.04 + i * 1.2) * 4;

        return (
          <div
            key={pill.text}
            style={{
              position: "absolute",
              top: pill.top,
              left: pill.left,
              opacity: pillOpacity,
              transform: `scale(${pillScale}) translateY(${floatY}px)`,
              background: i % 2 === 0 ? COLORS.primary : COLORS.warningAccent,
              color: "white",
              borderRadius: 9999,
              padding: "10px 22px",
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
    </AbsoluteFill>
  );
};
