import React from "react";
import VideoList from "./view/VideoList";
import NewVideoForm from "./view/NewVideoForm";
import VideoPlayer from "./view/VideoPlayer";
import { VideoContext } from "./data/video/VideoContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <VideoContext>
        <VideoPlayer />
        <NewVideoForm />
        <VideoList />
      </VideoContext>
    </div>
  );
}

export default App;
