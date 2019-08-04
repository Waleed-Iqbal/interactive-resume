import React from 'react';
import PlaylistHeader from '../playlist-header';
import PlaylistItems from './playlist-items';
import Nightmode from '../nightmode';

const Playlist = (props) => (
  <React.Fragment>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </React.Fragment>
);

export default Playlist;