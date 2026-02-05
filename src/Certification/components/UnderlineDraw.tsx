import React from "react";
import { useCurrentFrame, interpolate, Easing } from "remotion";
import { CERT_COLORS } from "../constants";

interface UnderlineDrawProps {
  width: number;
  delay?: number;
  duration?: number;
  color?: string;
  strokeWidth?: number;
  direction?: "ltr" | "rtl";
}

export const UnderlineDraw: React.FC<UnderlineDrawProps> = ({
  width,
  delay = 0,
  duration = 20,
  color = CERT_COLORS.primary,
  strokeWidth = 4,
  direction = "ltr",
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [delay, delay + duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const dashOffset = direction === "ltr" ? width * (1 - progress) : -width * (1 - progress);

  return (
    <svg
      width={width}
      height={strokeWidth + 4}
      style={{ display: "block" }}
    >
      <line
        x1={0}
        y1={strokeWidth / 2 + 2}
        x2={width}
        y2={strokeWidth / 2 + 2}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={width}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
};
