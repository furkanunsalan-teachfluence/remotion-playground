import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { COLORS, fontFamily } from "./constants";

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ url, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const scale = interpolate(scaleSpring, [0, 1], [0.9, 1]);
  const opacity = interpolate(scaleSpring, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        width: 1000,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        border: `1px solid ${COLORS.border}`,
        background: COLORS.background,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 16px",
          background: COLORS.backgroundAlt,
          borderBottom: `1px solid ${COLORS.border}`,
          gap: 8,
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: COLORS.background,
            borderRadius: 6,
            padding: "6px 12px",
            fontSize: 13,
            fontFamily,
            color: COLORS.textMuted,
            textAlign: "center",
          }}
        >
          {url}
        </div>
      </div>
      {/* Content area */}
      <div
        style={{
          width: "100%",
          height: 560,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
};
