import React, { useContext } from "react";
import Video from "./Video";
import styles from "./styles.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { videoStore } from "../data/video/VideoContext";

const VideoList = () => {
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
          <Video
            className={styles.videoList}
            key={item.url}
            onClick={onClick}
            video={item}
          >
            <button
              className={styles.removeButton}
              onClick={(e) => {
                videoDispatch({
                  type: "remove",
                  value: item,
                });
              }}
            >
              <AiOutlineDelete size="24" />
            </button>
          </Video>
        </>
      ))}
    </ul>
  );
};

export default VideoList;
