import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { CERT_COLORS, fontFamily, SPRING_CONFIG } from "../constants";

interface PhoneFrameProps {
  children: React.ReactNode;
  showStatusBar?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  showStatusBar = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scaleSpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG.default,
  });

  const scale = interpolate(scaleSpring, [0, 1], [0.9, 1]);
  const opacity = interpolate(scaleSpring, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        width: 380,
        height: 780,
        borderRadius: 40,
        overflow: "hidden",
        boxShadow: "0 25px 80px rgba(0,0,0,0.2)",
        border: `8px solid ${CERT_COLORS.text}`,
        background: CERT_COLORS.background,
        position: "relative",
      }}
    >
      {/* Dynamic Island / Notch */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          width: 100,
          height: 28,
          borderRadius: 20,
          backgroundColor: CERT_COLORS.text,
          zIndex: 10,
        }}
      />

      {/* Status bar */}
      {showStatusBar && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            fontFamily,
            fontSize: 14,
            fontWeight: 600,
            color: CERT_COLORS.text,
            zIndex: 5,
          }}
        >
          <span>9:41</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {/* Signal bars */}
            <svg width="18" height="12" viewBox="0 0 18 12">
              <rect x="0" y="6" width="3" height="6" fill={CERT_COLORS.text} rx="1" />
              <rect x="5" y="4" width="3" height="8" fill={CERT_COLORS.text} rx="1" />
              <rect x="10" y="2" width="3" height="10" fill={CERT_COLORS.text} rx="1" />
              <rect x="15" y="0" width="3" height="12" fill={CERT_COLORS.text} rx="1" />
            </svg>
            {/* Battery */}
            <svg width="25" height="12" viewBox="0 0 25 12">
              <rect x="0" y="0" width="22" height="12" rx="3" stroke={CERT_COLORS.text} strokeWidth="1" fill="none" />
              <rect x="2" y="2" width="18" height="8" rx="1" fill={CERT_COLORS.text} />
              <rect x="23" y="3" width="2" height="6" rx="1" fill={CERT_COLORS.text} />
            </svg>
          </div>
        </div>
      )}

      {/* Content area */}
      <div
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
        }}
      >
        {children}
      </div>

      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 140,
          height: 5,
          borderRadius: 3,
          backgroundColor: CERT_COLORS.text,
        }}
      />
    </div>
  );
};
