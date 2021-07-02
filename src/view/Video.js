import React, { useContext } from "react";
import styles from "./styles.module.scss";
import ptBR from "date-fns/locale/pt-BR";
import format from "date-fns/format";
export default function Video({ video, onClick }) {
  const currentDate = format(Date.parse(video.date), "d MMM yyyy", {
    locale: ptBR,
  });

  return (
    <div className={styles.container} onClick={() => onClick(video)}>
      <span className={styles.gender}>{video.gender}</span>
      <img className={styles.cover} src={video.cover} alt={video.title} />
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
      </li>
    </div>
  );
}
