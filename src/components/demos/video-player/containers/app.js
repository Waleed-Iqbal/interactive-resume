import React from 'react';
import VideoPlayer from './video-player';
import GlobalStyle from '../styles/global-style';

const VideoPlayerApp = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <VideoPlayer />
    </React.Fragment>
  );
}

export default VideoPlayerApp;