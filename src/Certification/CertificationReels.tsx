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
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { fontFamily, CERT_COLORS, CERT_REELS_DURATIONS, TRANSITION_DURATION } from "./constants";
import { Badge } from "./components/Badge";
import { TypewriterText } from "./components/TypewriterText";
import { UnderlineDraw } from "./components/UnderlineDraw";
import { Callout } from "./components/Callout";
import { Watermark } from "./components/Watermark";

const timing = linearTiming({ durationInFrames: TRANSITION_DURATION });

export const CertificationReels: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene1Intro}>
        <ReelsScene1Intro />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene2ProblemHook}>
        <ReelsScene2ProblemHook />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene3Solution}>
        <ReelsScene3Solution />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene4EditorDemo}>
        <ReelsScene4EditorDemo />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene5Criteria}>
        <ReelsScene5Criteria />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene6IssueCertificate}>
        <ReelsScene6IssueCertificate />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene7StudentExperience}>
        <ReelsScene7StudentExperience />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene8PublicSharing}>
        <ReelsScene8PublicSharing />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      <TransitionSeries.Sequence durationInFrames={CERT_REELS_DURATIONS.scene9CTA}>
        <ReelsScene9CTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

// Reels Scene Components

const ReelsScene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoProgress = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const logoScale = interpolate(logoProgress, [0, 1], [0.8, 1]);
  const logoOpacity = logoProgress;

  const titleProgress = interpolate(frame, [fps * 0.4, fps * 0.9], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleOpacity = titleProgress;
  const titleY = interpolate(titleProgress, [0, 1], [20, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily, gap: 20 }}>
      <div style={{ position: "absolute", top: 120 }}>
        <Badge text="Yeni Özellik" delay={10} />
      </div>
      <Img src={staticFile("images/logo-full.png")} style={{ height: 90, objectFit: "contain", transform: `scale(${logoScale})`, opacity: logoOpacity }} />
      <div style={{ fontSize: 32, fontWeight: 500, color: CERT_COLORS.textMuted, textAlign: "center", opacity: titleOpacity, transform: `translateY(${titleY}px)`, padding: "0 40px", letterSpacing: 2, textTransform: "uppercase" }}>
        Sertifika Sistemi
      </div>
    </AbsoluteFill>
  );
};

const ReelsScene2ProblemHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const iconProgress = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const iconScale = interpolate(iconProgress, [0, 1], [0.7, 1]);
  const iconOpacity = iconProgress;

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily, gap: 60, padding: "0 40px" }}>
      <div style={{ transform: `scale(${iconScale})`, opacity: iconOpacity }}>
        <svg width={120} height={120} viewBox="0 0 24 24" fill="none" stroke={CERT_COLORS.primary} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
          <circle cx="17" cy="18" r="3" fill={CERT_COLORS.primary} stroke="none" />
        </svg>
      </div>
      <TypewriterText text="Öğrencilerinize profesyonel sertifikalar vermek zor mu?" startFrame={12} charactersPerFrame={1} fontSize={42} fontWeight={600} color={CERT_COLORS.text} />
      <Watermark position="bottom-center" size={100} />
    </AbsoluteFill>
  );
};

const ReelsScene3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textProgress = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.2)),
  });
  const textScale = interpolate(textProgress, [0, 1], [0.8, 1]);
  const textOpacity = textProgress;

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontSize: 84, fontWeight: 800, color: CERT_COLORS.primary, transform: `scale(${textScale})`, opacity: textOpacity }}>
          Artık değil.
        </div>
        <div style={{ marginTop: 12 }}>
          <UnderlineDraw width={380} delay={15} duration={20} color={CERT_COLORS.primary} strokeWidth={8} />
        </div>
      </div>
      <Watermark position="bottom-center" size={100} />
    </AbsoluteFill>
  );
};

// Multi-part scene with flip and focus transitions
const PART_DURATION = 45;
const FLIP_DURATION = 15;
const FOCUS_DURATION = 20;

const ReelsScene4EditorDemo: React.FC = () => {
  const frame = useCurrentFrame();

  const flipStart = PART_DURATION - FLIP_DURATION / 2;
  const flipEnd = PART_DURATION + FLIP_DURATION / 2;
  const focusStart = PART_DURATION * 2 - FOCUS_DURATION / 2;
  const focusEnd = PART_DURATION * 2 + FOCUS_DURATION / 2;

  // PART 1: Flip out
  const part1Visible = frame < flipEnd;
  const part1FlipProgress = interpolate(frame, [flipStart, flipEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const part1RotateY = interpolate(part1FlipProgress, [0, 0.5], [0, 90], { extrapolateRight: "clamp" });
  const part1Opacity = part1FlipProgress < 0.5 ? 1 : 0;
  const part1Zoom = interpolate(frame, [0, PART_DURATION], [1, 1.04], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  // PART 2: Flip in and focus out
  const part2Visible = frame >= flipStart && frame < focusEnd;
  const part2RotateY = interpolate(part1FlipProgress, [0.5, 1], [-90, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const part2FlipOpacity = part1FlipProgress >= 0.5 ? 1 : 0;
  const part2FocusProgress = interpolate(frame, [focusStart, focusEnd], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.inOut(Easing.cubic) });
  const part2FocusOpacity = interpolate(part2FocusProgress, [0, 1], [1, 0]);
  const part2FocusScale = interpolate(part2FocusProgress, [0, 1], [1, 0.85]);
  const part2FocusBlur = interpolate(part2FocusProgress, [0, 1], [0, 8]);

  // PART 3: Focus in
  const part3Visible = frame >= focusStart;
  const part3FocusProgress = interpolate(frame, [focusStart, focusEnd], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const part3Opacity = part3FocusProgress;
  const part3Scale = interpolate(part3FocusProgress, [0, 1], [1.15, 1]);
  const part3Blur = interpolate(part3FocusProgress, [0, 0.7], [6, 0], { extrapolateRight: "clamp" });
  const part3Zoom = interpolate(frame, [PART_DURATION * 2, PART_DURATION * 3], [1, 1.04], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });

  const callout1Visible = frame < flipStart;
  const callout2Visible = frame >= flipEnd && frame < focusStart;
  const callout3Visible = frame >= focusEnd;

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, fontFamily, perspective: 1500 }}>
      {part1Visible && (
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: part1Opacity, transformStyle: "preserve-3d", transform: `rotateY(${part1RotateY}deg)` }}>
          <div style={{ width: "92%", maxHeight: 600, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", transform: `scale(${part1Zoom})`, backfaceVisibility: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Img src={staticFile("certification/01-empty-state.png")} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </div>
        </AbsoluteFill>
      )}

      {part2Visible && (
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: part2FlipOpacity * part2FocusOpacity, transformStyle: "preserve-3d", transform: part1FlipProgress < 1 ? `rotateY(${part2RotateY}deg)` : `scale(${part2FocusScale})`, filter: part2FocusProgress > 0 ? `blur(${part2FocusBlur}px)` : "none" }}>
          <div style={{ maxWidth: 580, maxHeight: 600, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", backfaceVisibility: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Img src={staticFile("certification/02-editor-canvas.png")} style={{ height: "100%", width: "auto", maxHeight: 600, objectFit: "contain" }} />
          </div>
        </AbsoluteFill>
      )}

      {part3Visible && (
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: part3Opacity, transform: `scale(${part3Scale * part3Zoom})`, filter: part3Blur > 0 ? `blur(${part3Blur}px)` : "none" }}>
          <div style={{ width: "92%", maxHeight: 600, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Img src={staticFile("certification/03-field-selected.png")} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </div>
        </AbsoluteFill>
      )}

      {callout1Visible && (
        <div style={{ position: "absolute", bottom: 620, left: 40 }}>
          <Callout text="Şablon oluşturmak için tek tık" delay={10} position="bottom-left" />
        </div>
      )}
      {callout2Visible && (
        <div style={{ position: "absolute", top: 300, right: 40 }}>
          <Callout text="Sürükle & Bırak Düzenleyici" delay={0} position="top-right" />
        </div>
      )}
      {callout3Visible && (
        <div style={{ position: "absolute", bottom: 620, left: 40 }}>
          <Callout text="Her şey özelleştirilebilir" delay={0} position="bottom-left" />
        </div>
      )}

      <Watermark position="bottom-center" size={100} />
    </AbsoluteFill>
  );
};

const ReelsScene5Criteria: React.FC = () => (
  <ReelsSingleScreenshot screenshot="04-criteria-dropdown.png" callout="Otomatik sertifika kriterleri" calloutPosition="bottom-right" />
);

const ReelsScene6IssueCertificate: React.FC = () => (
  <ReelsSingleScreenshot screenshot="05-issued-certificates.png" callout="Tek yerden yönetim" calloutPosition="bottom-left" />
);

const ReelsScene7StudentExperience: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const entranceProgress = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const initialScale = interpolate(entranceProgress, [0, 1], [1.1, 1]);
  const opacity = entranceProgress;

  const zoomDuring = interpolate(frame, [0, durationInFrames], [1, 1.06], {
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, display: "flex", alignItems: "center", justifyContent: "center", fontFamily }}>
      <div style={{ maxWidth: 400, maxHeight: 560, borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", transform: `scale(${initialScale * zoomDuring})`, opacity, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Img src={staticFile("certification/07-student-claim-card.png")} style={{ height: "100%", width: "auto", maxHeight: 560, objectFit: "contain" }} />
      </div>
      <div style={{ position: "absolute", bottom: 620, right: 40 }}>
        <Callout text="Öğrenci ilerleme takibi" delay={15} position="bottom-right" />
      </div>
      <Watermark position="bottom-center" size={100} />
    </AbsoluteFill>
  );
};

const ReelsScene8PublicSharing: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const zoomStartFrame = durationInFrames * 0.45;
  const zoomEndFrame = durationInFrames * 0.65;

  // Entrance animation
  const entranceProgress = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const entranceScale = interpolate(entranceProgress, [0, 1], [1.05, 1]);
  const entranceOpacity = entranceProgress;

  // Zoom transition progress
  const zoomProgress = interpolate(frame, [zoomStartFrame, zoomEndFrame], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Scale and pan to focus on buttons area (bottom right of card)
  const scale = interpolate(zoomProgress, [0, 1], [1, 3.5]);
  const translateX = interpolate(zoomProgress, [0, 1], [0, -25]);
  const translateY = interpolate(zoomProgress, [0, 1], [0, -30]);

  // Hold zoom
  const holdZoom = interpolate(frame, [zoomEndFrame, durationInFrames], [1, 1.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const callout1Visible = frame < zoomStartFrame;
  const callout2Visible = frame >= zoomEndFrame;

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, fontFamily, overflow: "hidden" }}>
      <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "92%", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", opacity: entranceOpacity }}>
          <div style={{ transform: `scale(${entranceScale * scale * holdZoom}) translate(${translateX}%, ${translateY}%)`, transformOrigin: "center center" }}>
            <Img src={staticFile("certification/08-public-page.png")} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </AbsoluteFill>

      {callout1Visible && (
        <div style={{ position: "absolute", bottom: 620, left: 40 }}>
          <Callout text="Doğrulanabilir sertifika" delay={10} position="bottom-left" />
        </div>
      )}
      {callout2Visible && (
        <div style={{ position: "absolute", bottom: 620, right: 40 }}>
          <Callout text="LinkedIn paylaş, PDF indir" delay={0} position="bottom-right" />
        </div>
      )}

      <Watermark position="bottom-center" size={100} />
    </AbsoluteFill>
  );
};

const ReelsScene9CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const glowRadius = interpolate(Math.sin(frame * 0.08), [-1, 1], [200, 400]);

  const titleProgress = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const titleScale = interpolate(titleProgress, [0, 1], [0.85, 1]);
  const titleOpacity = titleProgress;

  const buttonProgress = interpolate(frame, [fps * 0.4, fps * 0.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.3)),
  });
  const buttonScale = interpolate(buttonProgress, [0, 1], [0.7, 1]);
  const buttonOpacity = buttonProgress;
  const buttonGlow = interpolate(Math.sin(frame * 0.12), [-1, 1], [10, 30]);

  const logoProgress = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const logoOpacity = logoProgress;

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily, gap: 50, padding: "0 40px" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: glowRadius * 2, height: glowRadius * 2, borderRadius: "50%", background: `radial-gradient(circle, ${CERT_COLORS.primary}15 0%, transparent 70%)`, pointerEvents: "none" }} />
      <Img src={staticFile("images/logo-full.png")} style={{ height: 90, objectFit: "contain", opacity: logoOpacity, zIndex: 1 }} />
      <div style={{ fontSize: 28, fontWeight: 500, color: CERT_COLORS.textMuted, textAlign: "center", transform: `scale(${titleScale})`, opacity: titleOpacity, zIndex: 1, lineHeight: 1.2, letterSpacing: 2, textTransform: "uppercase" }}>
        Sertifikalarınızı bugün oluşturun
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 50px", borderRadius: 16, backgroundColor: CERT_COLORS.primary, color: CERT_COLORS.lightText, fontSize: 28, fontWeight: 700, transform: `scale(${buttonScale})`, opacity: buttonOpacity, boxShadow: `0 0 ${buttonGlow}px ${buttonGlow / 2}px ${CERT_COLORS.primary}60`, zIndex: 1 }}>
        Hemen Deneyin
      </div>
    </AbsoluteFill>
  );
};

// Single screenshot scene
const ReelsSingleScreenshot: React.FC<{ screenshot: string; callout: string; calloutPosition: "bottom-left" | "bottom-right" }> = ({ screenshot, callout, calloutPosition }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const entranceProgress = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const initialScale = interpolate(entranceProgress, [0, 1], [1.1, 1]);
  const opacity = entranceProgress;

  const zoomDuring = interpolate(frame, [0, durationInFrames], [1, 1.06], {
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: CERT_COLORS.background, display: "flex", alignItems: "center", justifyContent: "center", fontFamily }}>
      <div style={{ width: "92%", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", transform: `scale(${initialScale * zoomDuring})`, opacity }}>
        <Img src={staticFile(`certification/${screenshot}`)} style={{ width: "100%", height: "auto" }} />
      </div>
      <div style={{ position: "absolute", bottom: 620, ...(calloutPosition === "bottom-left" ? { left: 40 } : { right: 40 }) }}>
        <Callout text={callout} delay={15} position={calloutPosition} />
      </div>
      <Watermark position="bottom-center" size={100} />
    </AbsoluteFill>
  );
};
