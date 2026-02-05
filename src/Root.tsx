import "./index.css";
import { Composition, Folder } from "remotion";
import { TeachfluenceVideo } from "./Teachfluence/TeachfluenceVideo";
import { CertificateTemplate } from "./Teachfluence/CertificateTemplate";
import { FPS, SCENE_DURATIONS, TRANSITION_DURATION } from "./Teachfluence/constants";
import { CertificationVideo } from "./Certification/CertificationVideo";
import { CertificationReels } from "./Certification/CertificationReels";
import { CertificationReelsCover } from "./Certification/CertificationReelsCover";
import {
  FPS as CERT_FPS,
  CERT_SCENE_DURATIONS,
  CERT_REELS_DURATIONS,
  TRANSITION_DURATION as CERT_TRANSITION_DURATION,
} from "./Certification/constants";

const totalSceneFrames =
  SCENE_DURATIONS.scene1 +
  SCENE_DURATIONS.scene2 +
  SCENE_DURATIONS.scene3 +
  SCENE_DURATIONS.scene4 +
  SCENE_DURATIONS.scene6 +
  SCENE_DURATIONS.scene7 +
  SCENE_DURATIONS.scene8;

// 6 transitions between 7 scenes
const totalTransitionFrames = 6 * TRANSITION_DURATION;
const totalDuration = totalSceneFrames - totalTransitionFrames;

// Certification video duration calculation (9 scenes, 8 transitions)
const certSceneFrames =
  CERT_SCENE_DURATIONS.scene1Intro +
  CERT_SCENE_DURATIONS.scene2ProblemHook +
  CERT_SCENE_DURATIONS.scene3Solution +
  CERT_SCENE_DURATIONS.scene4EditorDemo +
  CERT_SCENE_DURATIONS.scene5Criteria +
  CERT_SCENE_DURATIONS.scene6IssueCertificate +
  CERT_SCENE_DURATIONS.scene7StudentExperience +
  CERT_SCENE_DURATIONS.scene8PublicSharing +
  CERT_SCENE_DURATIONS.scene9CTA;

const certTransitionFrames = 8 * CERT_TRANSITION_DURATION;
const certTotalDuration = certSceneFrames - certTransitionFrames;

// Certification reels duration calculation
const certReelsSceneFrames =
  CERT_REELS_DURATIONS.scene1Intro +
  CERT_REELS_DURATIONS.scene2ProblemHook +
  CERT_REELS_DURATIONS.scene3Solution +
  CERT_REELS_DURATIONS.scene4EditorDemo +
  CERT_REELS_DURATIONS.scene5Criteria +
  CERT_REELS_DURATIONS.scene6IssueCertificate +
  CERT_REELS_DURATIONS.scene7StudentExperience +
  CERT_REELS_DURATIONS.scene8PublicSharing +
  CERT_REELS_DURATIONS.scene9CTA;

const certReelsTotalDuration = certReelsSceneFrames - certTransitionFrames;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Teachfluence Promo Video */}
      <Folder name="Teachfluence">
        <Composition
          id="TeachfluencePromo"
          component={TeachfluenceVideo}
          durationInFrames={totalDuration}
          fps={FPS}
          width={1280}
          height={720}
        />
        <Composition
          id="CertificateTemplate"
          component={CertificateTemplate}
          durationInFrames={1}
          fps={FPS}
          width={2474}
          height={1748}
        />
      </Folder>

      {/* Certification Feature Promo */}
      <Folder name="Certification">
        <Composition
          id="CertificationPromo"
          component={CertificationVideo}
          durationInFrames={certTotalDuration}
          fps={CERT_FPS}
          width={1920}
          height={1080}
        />
        <Composition
          id="CertificationReels"
          component={CertificationReels}
          durationInFrames={certReelsTotalDuration}
          fps={CERT_FPS}
          width={1080}
          height={1920}
        />
        <Composition
          id="CertificationReelsCover"
          component={CertificationReelsCover}
          durationInFrames={1}
          fps={CERT_FPS}
          width={1080}
          height={1920}
        />
      </Folder>
    </>
  );
};
