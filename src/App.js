import React, { useState } from "react";
import VideoList from "./view/VideoList";
import NewVideoForm from "./view/NewVideoForm";
import VideoPlayer from "./view/VideoPlayer";
import { VideoContext } from "./data/video/VideoContext";

import "./global.scss";

function App() {
  const [videoList, setVideoList] = useState(false);
  console.log(videoList);
  return (
    <div className="App">
      <VideoContext>
        <VideoPlayer />
        <NewVideoForm setVideoList={setVideoList} videoList={videoList} />
        {videoList ? <VideoList /> : ""}
      </VideoContext>
    </div>
  );
}

export default App;
