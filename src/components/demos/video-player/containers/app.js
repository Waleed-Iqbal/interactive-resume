import React from 'react';
import VideoPlayer from './video-player';
import GlobalStyle from '../styles/global-style';

const VideoPlayerApp = ({props}) => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <VideoPlayer props={props} />
    </React.Fragment>
  );
}

export default VideoPlayerApp;