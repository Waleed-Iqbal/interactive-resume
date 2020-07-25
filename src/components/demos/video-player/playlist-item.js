import React from "react";
import StyledPlaylistItem from "./styles/styled-playlist-item";

const PlaylistItem = ({ video, active, played }) => (
  <StyledPlaylistItem active={active} played={played}>
    <div className='video-player__video-nr'>{video.num}</div>
    <div className='video-player__video-name'>{video.title}</div>
    <div className='video-player__video-time'>{video.duration}</div>
  </StyledPlaylistItem>
);

export default PlaylistItem;
