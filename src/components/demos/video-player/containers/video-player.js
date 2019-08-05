import React from 'react';
import Video from '../video';
import Playlist from './playlist';
import GlobalStyle from '../styles/global-style';

const VideoPlayer = (props) => {
  return (
    <React.Fragment>
      <Video />
      <Playlist />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default VideoPlayer;