import React, { useContext } from "react";
import { videoStore } from "../../data/video/VideoContext";
import styles from "./styles.module.scss";
import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube as YouTube } from "@vime/react";
export const VideoPlayer = () => {
  const [videoState] = useContext(videoStore);
  const video = videoState.selectedVideo;
  if (!video?.url) {
    return (
      <div className={styles.videoStop}>
        <h1 color="red">selecione um video!</h1>
      </div>
    );
  }
  return (
    <div className={styles.videoPlayer}>
      <Player>
        <YouTube videoId={video.url} />
        <DefaultUi />
      </Player>
    </div>
  );
};
