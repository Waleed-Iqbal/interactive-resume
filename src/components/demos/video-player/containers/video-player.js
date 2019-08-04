import React from 'react';
import Video from '../video';
import Playlist from './playlist';

const VideoPlayer = (props) => {
  return (
    <React.Fragment>
      <Video />
      <Playlist />
    </React.Fragment>
  );
}

export default VideoPlayer;