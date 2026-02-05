import React from "react";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { CERT_SCENE_DURATIONS, TRANSITION_DURATION } from "./constants";
import { Scene1Intro } from "./scenes/Scene1Intro";
import { Scene2ProblemHook } from "./scenes/Scene2ProblemHook";
import { Scene3Solution } from "./scenes/Scene3Solution";
import { Scene4EditorDemo } from "./scenes/Scene4EditorDemo";
import { Scene5Criteria } from "./scenes/Scene5Criteria";
import { Scene6IssueCertificate } from "./scenes/Scene6IssueCertificate";
import { Scene7StudentExperience } from "./scenes/Scene7StudentExperience";
import { Scene8PublicSharing } from "./scenes/Scene8PublicSharing";
import { Scene9CTA } from "./scenes/Scene9CTA";

const timing = linearTiming({ durationInFrames: TRANSITION_DURATION });

export const CertificationVideo: React.FC = () => {
  return (
    <TransitionSeries>
      {/* Scene 1: Intro */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene1Intro}>
        <Scene1Intro />
      </TransitionSeries.Sequence>

      {/* Transition 1→2: fade */}
      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      {/* Scene 2: Problem Hook */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene2ProblemHook}>
        <Scene2ProblemHook />
      </TransitionSeries.Sequence>

      {/* Transition 2→3: fade */}
      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      {/* Scene 3: Solution */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene3Solution}>
        <Scene3Solution />
      </TransitionSeries.Sequence>

      {/* Transition 3→4: slide from right */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={timing}
      />

      {/* Scene 4: Editor Demo */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene4EditorDemo}>
        <Scene4EditorDemo />
      </TransitionSeries.Sequence>

      {/* Transition 4→5: fade */}
      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      {/* Scene 5: Criteria Selection */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene5Criteria}>
        <Scene5Criteria />
      </TransitionSeries.Sequence>

      {/* Transition 5→6: slide from left */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-left" })}
        timing={timing}
      />

      {/* Scene 6: Issue Certificate */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene6IssueCertificate}>
        <Scene6IssueCertificate />
      </TransitionSeries.Sequence>

      {/* Transition 6→7: slide from right */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={timing}
      />

      {/* Scene 7: Student Experience */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene7StudentExperience}>
        <Scene7StudentExperience />
      </TransitionSeries.Sequence>

      {/* Transition 7→8: fade */}
      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      {/* Scene 8: Public Sharing */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene8PublicSharing}>
        <Scene8PublicSharing />
      </TransitionSeries.Sequence>

      {/* Transition 8→9: fade */}
      <TransitionSeries.Transition presentation={fade()} timing={timing} />

      {/* Scene 9: CTA */}
      <TransitionSeries.Sequence durationInFrames={CERT_SCENE_DURATIONS.scene9CTA}>
        <Scene9CTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
