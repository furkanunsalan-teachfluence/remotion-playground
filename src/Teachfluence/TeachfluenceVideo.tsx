import React from "react";
import {
  TransitionSeries,
  linearTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { SCENE_DURATIONS, TRANSITION_DURATION } from "./constants";
import { Scene1Opening } from "./Scene1Opening";
import { Scene2ValueProp } from "./Scene2ValueProp";
import { Scene3CourseManagement } from "./Scene3CourseManagement";
import { Scene4WebsiteBuilder } from "./Scene4WebsiteBuilder";
import { Scene5EmailMarketing } from "./Scene5EmailMarketing";
import { Scene6Features } from "./Scene6Features";
import { Scene7SocialProof } from "./Scene7SocialProof";
import { Scene8CTA } from "./Scene8CTA";

const timing = linearTiming({ durationInFrames: TRANSITION_DURATION });

export const TeachfluenceVideo: React.FC = () => {
  return (
    <TransitionSeries>
      {/* Scene 1: Opening */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene1}>
        <Scene1Opening />
      </TransitionSeries.Sequence>

      {/* Transition 1→2: fade */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={timing}
      />

      {/* Scene 2: Value Proposition */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene2}>
        <Scene2ValueProp />
      </TransitionSeries.Sequence>

      {/* Transition 2→3: slide from right */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={timing}
      />

      {/* Scene 3: Course Management */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene3}>
        <Scene3CourseManagement />
      </TransitionSeries.Sequence>

      {/* Transition 3→4: fade */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={timing}
      />

      {/* Scene 4: Website Builder */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene4}>
        <Scene4WebsiteBuilder />
      </TransitionSeries.Sequence>

      {/* Transition 4→5: fade */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={timing}
      />

      {/* Scene 5: Email Marketing */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene5}>
        <Scene5EmailMarketing />
      </TransitionSeries.Sequence>

      {/* Transition 5→6: slide from right */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-right" })}
        timing={timing}
      />

      {/* Scene 6: All-in-One Features */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene6}>
        <Scene6Features />
      </TransitionSeries.Sequence>

      {/* Transition 6→7: slide from bottom */}
      <TransitionSeries.Transition
        presentation={slide({ direction: "from-bottom" })}
        timing={timing}
      />

      {/* Scene 7: Social Proof */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene7}>
        <Scene7SocialProof />
      </TransitionSeries.Sequence>

      {/* Transition 7→8: fade */}
      <TransitionSeries.Transition
        presentation={fade()}
        timing={timing}
      />

      {/* Scene 8: CTA */}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.scene8}>
        <Scene8CTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
