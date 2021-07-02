import React, { useContext } from "react";
import Video from "./Video";
import styles from "./styles.module.scss";

import { videoStore } from "../data/video/VideoContext";

export default function VideoList() {
  const [videoState, videoDispatch] = useContext(videoStore);
  function onClick(video) {
    videoDispatch({
      type: "select",
      value: video,
    });
  }

  return (
    <ul className={styles.list}>
      {videoState.videos.map((item) => (
        <>
          <Video key={item.url} onClick={onClick} video={item} />
          <button
            onClick={(e) => {
              videoDispatch({
                type: "remove",
                value: item,
              });
            }}
          >
            remove
          </button>
        </>
      ))}
    </ul>
  );
}
