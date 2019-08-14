import React from 'react';
import VideoPlayer from './video-player';
import GlobalStyle from '../styles/global-style';

const VideoPlayerApp = ({props}) => (
    <div className="main-section">
      <GlobalStyle />
      <VideoPlayer props={props} />
      <h2 className="text-center mt-40">
        <a href="https://www.youtube.com/watch?v=iVRO0toVdYM">Developed from a project by FreeCodeCamp</a>.
      </h2>
    </div>
    );

export default VideoPlayerApp;