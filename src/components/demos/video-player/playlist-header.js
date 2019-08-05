import React from 'react';
import StyledPlaylistHeader from './styles/styled-playlist-header';
import StyledJourney from './styles/styled-journey';

const PlaylistHeader = ({active, total}) => (
  <StyledPlaylistHeader>
    <p>{active.title}</p>
    <StyledJourney>
      {active.num} / {total}
    </StyledJourney>
  </StyledPlaylistHeader>
);

export default PlaylistHeader;
