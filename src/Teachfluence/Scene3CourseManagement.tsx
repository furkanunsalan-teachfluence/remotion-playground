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
import { COLORS, fontFamily } from "./constants";
import { BrowserFrame } from "./BrowserFrame";

export const Scene3CourseManagement: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Image scroll animation
  const scrollY = interpolate(frame, [0, durationInFrames], [0, -30], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 40,
        fontFamily,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: COLORS.text,
          textAlign: "center",
        }}
      >
        Manage your courses effortlessly
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 400,
          color: COLORS.textMuted,
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Track students, analytics & revenue in one dashboard
      </div>

      {/* Browser frame */}
      <div style={{ marginTop: 24 }}>
        <BrowserFrame url="teachfluence.com/admin/courses">
          <Img
            src={staticFile("images/content-management.jpg")}
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
              transform: `translateY(${scrollY}%)`,
            }}
          />
        </BrowserFrame>
      </div>
    </AbsoluteFill>
  );
};
