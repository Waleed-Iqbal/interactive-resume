import React from 'react';
import PlaylistHeader from '../playlist-header';
import PlaylistItems from './playlist-items';
import Nightmode from '../nightmode';
import StyledPlaylist from '../styles/styled-playlist';

const Playlist = ({videos, active, nightModeCallback, nightmode}) => (
  <StyledPlaylist>
    <Nightmode nightModeCallback={nightModeCallback} nightmode={nightmode} />
    <PlaylistHeader active={active} total={videos.total} />
    <PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
);

export default Playlist;