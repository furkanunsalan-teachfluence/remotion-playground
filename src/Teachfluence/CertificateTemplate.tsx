import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { COLORS, fontFamily } from "./constants";

export const CertificateTemplate: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily,
        padding: 120,
      }}
    >
      {/* Subtle corner accents */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 60,
          width: 120,
          height: 120,
          borderTop: `6px solid ${COLORS.primary}`,
          borderLeft: `6px solid ${COLORS.primary}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 60,
          width: 120,
          height: 120,
          borderTop: `6px solid ${COLORS.primary}`,
          borderRight: `6px solid ${COLORS.primary}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 60,
          width: 120,
          height: 120,
          borderBottom: `6px solid ${COLORS.primary}`,
          borderLeft: `6px solid ${COLORS.primary}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 60,
          right: 60,
          width: 120,
          height: 120,
          borderBottom: `6px solid ${COLORS.primary}`,
          borderRight: `6px solid ${COLORS.primary}`,
        }}
      />

      {/* Organization Name Placeholder */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 600,
            minHeight: 64,
            borderBottom: `4px solid ${COLORS.border}`,
            marginBottom: 12,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            paddingBottom: 8,
          }}
        >
          {/* Empty - organization name goes here */}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: COLORS.textMuted,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Kurum
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: COLORS.primary,
          letterSpacing: 8,
          marginBottom: 16,
        }}
      >
        KATILIM SERTİFİKASI
      </div>

      {/* Decorative line */}
      <div
        style={{
          width: 240,
          height: 6,
          backgroundColor: COLORS.warningAccent,
          marginBottom: 48,
        }}
      />

      {/* Certifies text */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 400,
          color: COLORS.textMuted,
          marginBottom: 20,
        }}
      >
        Bu belge,
      </div>

      {/* Recipient Name Placeholder */}
      <div
        style={{
          width: 1000,
          minHeight: 96,
          borderBottom: `4px solid ${COLORS.border}`,
          marginBottom: 20,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 16,
        }}
      >
        {/* Empty - recipient name goes here */}
      </div>

      {/* Course completion text */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 400,
          color: COLORS.textMuted,
          marginBottom: 20,
        }}
      >
        adlı kişinin
      </div>

      {/* Course Name Placeholder */}
      <div
        style={{
          width: 1200,
          minHeight: 80,
          borderBottom: `4px solid ${COLORS.border}`,
          marginBottom: 20,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: 16,
        }}
      >
        {/* Empty - course name goes here */}
      </div>

      {/* Completion text */}
      <div
        style={{
          fontSize: 32,
          fontWeight: 400,
          color: COLORS.textMuted,
          marginBottom: 60,
        }}
      >
        eğitimini başarıyla tamamladığını belgeler.
      </div>

      {/* Footer section with Date and Certificate ID */}
      <div
        style={{
          display: "flex",
          gap: 240,
          marginBottom: 48,
        }}
      >
        {/* Date */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 360,
              minHeight: 64,
              borderBottom: `4px solid ${COLORS.border}`,
              marginBottom: 16,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {/* Empty - date goes here */}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: COLORS.textMuted,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Tarih
          </div>
        </div>

        {/* Certificate ID */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 360,
              minHeight: 64,
              borderBottom: `4px solid ${COLORS.border}`,
              marginBottom: 16,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 8,
            }}
          >
            {/* Empty - certificate ID goes here */}
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: COLORS.textMuted,
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Sertifika No
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div
        style={{
          width: 1200,
          height: 2,
          backgroundColor: COLORS.border,
          marginBottom: 32,
        }}
      />

      {/* Teachfluence branding */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Img
          src={staticFile("images/logo-full.png")}
          style={{
            height: 80,
            objectFit: "contain",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
