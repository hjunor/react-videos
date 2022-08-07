import React, { useContext } from "react";
import { Video } from "../Video";
import styles from "./styles.module.scss";
import { videoStore } from "../../data/video/VideoContext";

export const VideoList = () => {
  const [videoState, videoDispatch] = useContext(videoStore);
  function handlerPlay(video) {
    videoDispatch({
      type: "select",
      value: video,
    });
  }

  return (
    <ul className={styles.list}>
      {videoState.videos.map((item) => (
        <>
          <Video
            className={styles.videoList}
            key={item.url}
            play={handlerPlay}
            video={item}
          ></Video>
        </>
      ))}
    </ul>
  );
};
