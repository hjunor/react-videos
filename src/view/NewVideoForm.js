import React, { useState, useContext } from "react";
import { videoStore } from "../data/video/VideoContext";

const NewVideoForm = ({ setVideoList, videoList }) => {
  const [, videoDispatch] = useContext(videoStore);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [peoples, setPeoples] = useState("");
  const [visualization, setVisualization] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");

  const coverId = url.replace("https://www.youtube.com/watch?v=", "");

  function handleAddVideo() {
    const newVideo = {
      title,
      duration,
      url: url.replace("watch?v=", "embed/"),
      cover: `https://img.youtube.com/vi/${coverId}/0.jpg`,
      description,
      author,
      tags: tags.split(","),
      peoples,
      visualization,
      date,
      gender,
    };
    videoDispatch({
      type: "add",
      value: newVideo,
    });

    handleResetValues();
  }
  function handleResetValues() {
    setTitle("");
    setDuration("");
    setUrl("");
    setAuthor("");
    setDate("");
    setDescription("");
    setGender("");
    setPeoples("");
    setTags("");
    setVisualization("");
  }

  function handleVideoList() {
    setVideoList(!videoList);
  }
  return (
    <div className="form">
      <label>Titulo:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>Autor:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />

      <label>Duração:</label>
      <input
        type="text"
        value={duration}
        onChange={(e) => {
          setDuration(e.target.value);
        }}
      />

      <label>Link:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <label>Tags:</label>
      <input
        type="text"
        value={tags}
        onChange={(e) => {
          setTags(e.target.value);
        }}
      />

      <label>Inscritos:</label>
      <input
        type="text"
        value={peoples}
        onChange={(e) => {
          setPeoples(e.target.value);
        }}
      />
      <label>Visualizações:</label>
      <input
        type="text"
        value={visualization}
        onChange={(e) => {
          setVisualization(e.target.value);
        }}
      />
      <label>Data:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <label>Gênero:</label>
      <input
        type="text"
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <label>Descrição:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      {title &&
      duration &&
      url &&
      description &&
      author &&
      tags &&
      peoples &&
      visualization &&
      date &&
      gender ? (
        <button onClick={handleAddVideo}>Adicionar</button>
      ) : (
        <button disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
          Adicionar
        </button>
      )}
      <button onClick={handleVideoList}>
        {videoList ? "Ocultar" : "Listar"}
      </button>
    </div>
  );
};

export default NewVideoForm;
