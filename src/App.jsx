import React from "react";
import { VideoList } from "./view/VideoList";
import { NewVideoForm } from "./view/NewVideoForm";
import { VideoPlayer } from "./view/VideoPlayer";
import { VideoContext } from "./data/video/VideoContext";

import "./global.scss";

function App() {
  return (
    <section>
      <VideoContext>
        <VideoPlayer />
        <NewVideoForm />
        <VideoList />
      </VideoContext>
    </section>
  );
}

export default App;
