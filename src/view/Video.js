import React from "react";
import styles from "./styles.module.scss";
import ptBR from "date-fns/locale/pt-BR";
import format from "date-fns/format";

export default function Video({ video, onClick, children }) {
  const currentDate = format(Date.parse(video.date), "d MMM yyyy", {
    locale: ptBR,
  });

  return (
    <div className={styles.container}>
      <span className={styles.gender}>{video.gender}</span>
      <img
        onClick={() => onClick(video)}
        className={styles.cover}
        src={video.cover}
        alt={video.title}
      />
      <li>
        <div>
          <p>{video.author}</p>
          <p>{video.duration}</p>
          <p>{video.visualization}</p>
          <p>{currentDate}</p>
        </div>
        <h2>{video.title}</h2>
        <div>
          {video?.tags &&
            video.tags.map((tag) => <p className={styles.tag}>{tag}</p>)}
        </div>
        <p className={styles.description}>{video.description}</p>
        <div>
          <button onClick={() => onClick(video)}>Reproduzir</button>
          {children}
        </div>
      </li>
    </div>
  );
}
