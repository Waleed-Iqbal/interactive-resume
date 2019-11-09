import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './video-player';
import GlobalStyle from '../styles/global-style';
import '../../../../styles/globals.scss';

const VideoPlayerApp = ({ props }) => (
  <React.Fragment>
    <GlobalStyle />
    <VideoPlayer props={props} />
    <h2 className="text-center mt-40">
      Inspired by ... <Link className="link" to="https://www.youtube.com/watch?v=iVRO0toVdYM">FreeCodeCamp</Link>.
    </h2>
  </React.Fragment>
);

export default VideoPlayerApp;