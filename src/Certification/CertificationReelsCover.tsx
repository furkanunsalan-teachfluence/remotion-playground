import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { fontFamily, CERT_COLORS } from "./constants";

export const CertificationReelsCover: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${CERT_COLORS.background} 0%, ${CERT_COLORS.primary} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily,
        padding: "100px 40px",
      }}
    >
      {/* Badge - blue pill */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 32px",
          borderRadius: 50,
          backgroundColor: CERT_COLORS.primary,
          fontSize: 22,
          fontWeight: 700,
          color: "#ffffff",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        Yeni Özellik
      </div>

      {/* Title section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 400,
            color: CERT_COLORS.text,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: 8,
          }}
        >
          SERTİFİKA
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 400,
            color: CERT_COLORS.text,
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: 8,
          }}
        >
          SİSTEMİ
        </div>
      </div>

      {/* Certificate preview */}
      <div
        style={{
          width: 750,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
          border: `1px solid ${CERT_COLORS.border}`,
        }}
      >
        <Img
          src={staticFile("certification/10-certificate-only.png")}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Profesyonel sertifikalar, tek tıkla
      </div>

      {/* Logo - white */}
      <Img
        src={staticFile("images/logo-full.png")}
        style={{
          height: 60,
          objectFit: "contain",
          filter: "brightness(0) invert(1)",
        }}
      />
    </AbsoluteFill>
  );
};
