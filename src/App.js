import React , {useEffect, useState, useRef}from 'react'


//Fim dos hooksCriados

import VideoList from './view/VideoList';
import NewVideoForm from './view/NewVideoForm';
import VideoPlayer from './view/VideoPlayer'
import { VideoContext } from './data/video/VideoContext'

import './App.css'

  function App(){

  return(
   
    <div className="App"> 
        <VideoContext>
            <VideoPlayer/>
            <VideoList/>
            <NewVideoForm/>
        </VideoContext>
    </div>
    
  )
}

export default App;