import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { videoStore } from "../../data/video/VideoContext";

export const Video = ({ video, play, children }) => {
  const [videoDispatch] = useContext(videoStore);

  return (
    <div className={styles.container}>
      <img
        onClick={() => play(video)}
        className={styles.cover}
        src={video.cover}
        alt={video.url}
      />
      <h2>{video.title}</h2>
      <li>
        <button className={styles.play} onClick={() => play(video)}>
          Reproduzir
        </button>
        {children}
        <button
          className={styles.removeButton}
          onClick={(e) => {
            videoDispatch({
              type: "remove",
              value: video,
            });
          }}
        >
          <AiOutlineDelete size="24" />
        </button>
      </li>
    </div>
  );
};
