import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { fontFamily, CERT_COLORS } from "../constants";

interface TypewriterTextProps {
  text: string;
  startFrame?: number;
  charactersPerFrame?: number;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  showCursor?: boolean;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  startFrame = 0,
  charactersPerFrame = 1,
  fontSize = 32,
  fontWeight = 600,
  color = CERT_COLORS.text,
  showCursor = true,
}) => {
  const frame = useCurrentFrame();

  const adjustedFrame = Math.max(0, frame - startFrame);
  const charsToShow = Math.floor(adjustedFrame * charactersPerFrame);
  const displayedText = text.slice(0, Math.min(charsToShow, text.length));
  const isComplete = charsToShow >= text.length;

  // Blinking cursor
  const cursorOpacity =
    showCursor && !isComplete
      ? interpolate(Math.sin(frame * 0.3), [-1, 1], [0.3, 1])
      : 0;

  return (
    <div
      style={{
        fontFamily,
        fontSize,
        fontWeight,
        color,
        textAlign: "center",
        lineHeight: 1.4,
      }}
    >
      {displayedText}
      <span
        style={{
          opacity: cursorOpacity,
          marginLeft: 2,
        }}
      >
        |
      </span>
    </div>
  );
};
