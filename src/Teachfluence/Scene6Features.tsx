import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";
import { COLORS, fontFamily } from "./constants";
import { FeatureCard } from "./FeatureCard";
import {
  GraduationCapIcon,
  LayoutIcon,
  MailIcon,
  BarChartIcon,
} from "./icons";

const features = [
  {
    icon: <GraduationCapIcon size={24} color="white" />,
    title: "Course Management",
    description: "Create and sell online courses",
  },
  {
    icon: <LayoutIcon size={24} color="white" />,
    title: "Website Builder",
    description: "Drag & drop page builder",
  },
  {
    icon: <MailIcon size={24} color="white" />,
    title: "Email Marketing",
    description: "Automated campaigns & analytics",
  },
  {
    icon: <BarChartIcon size={24} color="white" />,
    title: "Student Analytics",
    description: "Track progress & engagement",
  },
];

export const Scene6Features: React.FC = () => {
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

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.backgroundAlt,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        gap: 40,
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: 44,
          fontWeight: 800,
          color: COLORS.text,
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        Everything you need
      </div>

      {/* 2x2 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={10 + i * 6}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
