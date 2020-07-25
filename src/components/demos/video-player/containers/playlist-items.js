import React from "react";
import PlaylistItem from "../playlist-item";
import withLink from "../hoc/with-link";
import StyledPlaylistItems from "../styles/styled-playlist-items";

const PlaylistItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistItems>
    {videos.map(video => {
      return (
        <PlaylistItemWithLink
          key={video.id}
          video={video}
          active={video.id === active.id}
          played={video.played}
        />
      );
    })}
  </StyledPlaylistItems>
);

export default PlaylistItems;
