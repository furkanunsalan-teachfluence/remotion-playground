import { loadFont } from "@remotion/google-fonts/Inter";

export const { fontFamily } = loadFont("normal", {
  weights: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
});

export const FPS = 30;

// Certification-specific colors
export const CERT_COLORS = {
  // Light theme (main video)
  background: "#ffffff",
  backgroundAlt: "#f3f4f6",
  primary: "hsl(240, 84%, 42%)",
  primaryForeground: "hsl(210, 100%, 93.3%)",
  text: "#0f1117",
  textMuted: "#6b7280",
  border: "hsl(214.3, 31.8%, 91.4%)",

  // Dark theme (reels cover)
  darkBg: "#0c0a09",
  darkBgAlt: "#1a1a2e",
  accent: "#e11d48",
  lightText: "#f2f2f2",
} as const;

// Scene durations for 16:9 main version (in frames)
export const CERT_SCENE_DURATIONS = {
  scene1Intro: 90, // 3s
  scene2ProblemHook: 120, // 4s - more time to read question
  scene3Solution: 75, // 2.5s
  scene4EditorDemo: 180, // 6s (3 parts x 2s)
  scene5Criteria: 90, // 3s
  scene6IssueCertificate: 90, // 3s
  scene7StudentExperience: 90, // 3s
  scene8PublicSharing: 120, // 4s (2 parts x 2s)
  scene9CTA: 90, // 3s
} as const;

// Reels version (faster pacing)
export const CERT_REELS_DURATIONS = {
  scene1Intro: 75, // 2.5s
  scene2ProblemHook: 105, // 3.5s - more time to read question
  scene3Solution: 60, // 2s
  scene4EditorDemo: 135, // 4.5s
  scene5Criteria: 75, // 2.5s
  scene6IssueCertificate: 75, // 2.5s
  scene7StudentExperience: 75, // 2.5s
  scene8PublicSharing: 90, // 3s
  scene9CTA: 75, // 2.5s
} as const;

export const TRANSITION_DURATION = 18; // 0.6s at 30fps

// Animation presets
export const SPRING_CONFIG = {
  default: { damping: 12, stiffness: 100 },
  bouncy: { damping: 10, stiffness: 150 },
  snappy: { damping: 15, stiffness: 180 },
  smooth: { damping: 200 },
} as const;
