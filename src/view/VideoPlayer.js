import React, { useRef, useContext } from "react";
import { videoStore } from "../data/video/VideoContext";
import styles from "./styles.module.scss";

export default function VideoPlayer() {
  const [videoState] = useContext(videoStore);
  const video = videoState.selectedVideo;
  const videoRef = useRef();

  return (
    <div className={styles.videoPlayer}>
      <iframe
        width="1020"
        height="520"
        src={video.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        ref={videoRef}
      ></iframe>
    </div>
  );
}
