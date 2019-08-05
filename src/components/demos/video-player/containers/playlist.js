import React from 'react';
import PlaylistHeader from '../playlist-header';
import PlaylistItems from './playlist-items';
import Nightmode from '../nightmode';
import StyledPlaylist from '../styles/styled-playlist';

const Playlist = (props) => (
  <StyledPlaylist>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;