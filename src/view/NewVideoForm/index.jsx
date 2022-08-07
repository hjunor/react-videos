import React, { useState, useContext } from "react";
import { videoStore } from "../../data/video/VideoContext";
import styles from "./styles.module.scss";

export const NewVideoForm = ({ videoList }) => {
  const [, videoDispatch] = useContext(videoStore);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function handleAddVideo() {
    const newVideo = {
      title,
      url: url,
      cover: `https://img.youtube.com/vi/${url}/0.jpg`,
    };
    videoDispatch({
      type: "add",
      value: newVideo,
    });

    handleResetValues();
  }
  function handleResetValues() {
    setTitle("");
    setUrl("");
  }

  return (
    <div className={styles.form}>
      <label>Titulo:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <label>ID:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />

      {title && url ? (
        <button onClick={handleAddVideo}>Adicionar</button>
      ) : (
        <button disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
          Adicionar
        </button>
      )}
    </div>
  );
};
