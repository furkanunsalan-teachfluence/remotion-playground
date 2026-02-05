import React from "react";
import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";

interface WatermarkProps {
  position?: "bottom-right" | "bottom-left" | "bottom-center";
  opacity?: number;
  size?: number;
}

export const Watermark: React.FC<WatermarkProps> = ({
  position = "bottom-right",
  opacity = 0.15,
  size = 120,
}) => {
  const frame = useCurrentFrame();

  // Fade in during first 15 frames
  const fadeIn = interpolate(frame, [0, 15], [0, opacity], {
    extrapolateRight: "clamp",
  });

  const positionStyles: React.CSSProperties = {
    position: "absolute",
    bottom: 24,
    ...(position === "bottom-right" && { right: 24 }),
    ...(position === "bottom-left" && { left: 24 }),
    ...(position === "bottom-center" && { left: "50%", transform: "translateX(-50%)" }),
  };

  return (
    <div style={{ ...positionStyles, opacity: fadeIn, zIndex: 100 }}>
      <Img
        src={staticFile("images/logo-full.png")}
        style={{
          height: size,
          objectFit: "contain",
        }}
      />
    </div>
  );
};
