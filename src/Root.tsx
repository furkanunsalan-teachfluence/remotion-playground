import "./index.css";
import { Composition } from "remotion";
import { TeachfluenceVideo } from "./Teachfluence/TeachfluenceVideo";
import { FPS, SCENE_DURATIONS, TRANSITION_DURATION } from "./Teachfluence/constants";

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

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TeachfluencePromo"
        component={TeachfluenceVideo}
        durationInFrames={totalDuration}
        fps={FPS}
        width={1280}
        height={720}
      />
    </>
  );
};
