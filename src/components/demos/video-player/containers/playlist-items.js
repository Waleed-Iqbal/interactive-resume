import React from 'react'
import PlaylistItem from '../playlist-item';
import StyledPlaylistitems from '../styles/styled-playlist-items';

const PlaylistItems = ({videos, active}) => (
  <StyledPlaylistitems>
    {
      video.map(video => {
        <PlaylistItem
          key={video.id}
          video={video}
          active={video.id === active.id}
          played={video.played}
         />
      });
    }
  </StyledPlaylistitems>
);

export default PlaylistItems;