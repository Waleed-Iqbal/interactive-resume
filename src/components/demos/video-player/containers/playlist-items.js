import React from 'react'
import PlaylistItem from '../playlist-item';
import StyledPlaylistItems from '../styles/styled-playlist-items';

const PlaylistItems = ({videos, active}) => (
  <StyledPlaylistItems>
    {
      videos.map(video => {
        return <PlaylistItem
          key={video.id}
          video={video}
          active={video.id === active.id}
          played={video.played}
         />
      })
    }
  </StyledPlaylistItems>
);

export default PlaylistItems;