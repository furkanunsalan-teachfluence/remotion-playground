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
  VideoIcon,
  MailIcon,
  PackageIcon,
  LayoutIcon,
  CreditCardIcon,
} from "./icons";

const features = [
  {
    icon: <GraduationCapIcon size={24} color="white" />,
    title: "Kurslar",
    description: "Kolayca kurs oluşturun ve satın",
  },
  {
    icon: <VideoIcon size={24} color="white" />,
    title: "1:1 ve Webinarlar",
    description: "Canlı dersler ve görüşmeler",
  },
  {
    icon: <MailIcon size={24} color="white" />,
    title: "Mail Marketing",
    description: "Otomatik kampanyalar ve analizler",
  },
  {
    icon: <PackageIcon size={24} color="white" />,
    title: "Dijital Ürünler",
    description: "E-kitap ve şablon satışı",
  },
  {
    icon: <LayoutIcon size={24} color="white" />,
    title: "Website Editörü",
    description: "Sürükle bırak sayfa editörü",
  },
  {
    icon: <CreditCardIcon size={24} color="white" />,
    title: "Ödeme Altyapısı",
    description: "Güvenli ödeme entegrasyonu",
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
        gap: 36,
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
        İhtiyacınız olan her şey
      </div>

      {/* 3x2 Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={10 + i * 5}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
