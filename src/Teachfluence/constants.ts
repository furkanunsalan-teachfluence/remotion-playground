import { loadFont } from "@remotion/google-fonts/Inter";

export const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

export const COLORS = {
  background: "#ffffff",
  backgroundAlt: "#f3f4f6",
  primary: "hsl(240, 84%, 42%)",
  primaryForeground: "hsl(210, 100%, 93.3%)",
  secondary: "hsl(240, 4.8%, 95.9%)",
  text: "#0f1117",
  textMuted: "#6b7280",
  border: "hsl(214.3, 31.8%, 91.4%)",
  destructive: "hsl(0, 84.2%, 60.2%)",
  warningAccent: "hsl(17, 88.3%, 40.4%)",
} as const;

export const FPS = 30;

// Scene durations in frames
export const SCENE_DURATIONS = {
  scene1: 135, // 4.5s
  scene2: 90, // 3s
  scene3: 135, // 4.5s
  scene4: 135, // 4.5s
  scene5: 120, // 4s
  scene6: 120, // 4s
  scene7: 135, // 4.5s
  scene8: 120, // 4s
} as const;

export const TRANSITION_DURATION = 12; // 0.4s at 30fps
