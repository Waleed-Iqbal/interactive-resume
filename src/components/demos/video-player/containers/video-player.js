import React, { useState, useEffect } from 'react';
import Video from '../video';
import Playlist from './playlist';
import { ThemeProvider } from 'styled-components';
import StyledVideoPlayer from '../styles/styled-video-player';

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcolorItemActive: "#405c63",
  bgcolorPlayed: "#526d4e",
  border: "none",
  borderPlayed: "none",
  color: "#fff"
};

const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcolorItemActive: "#80a7b1",
  bgcolorPlayed: "#7d9979",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535"
};

const VideoPlayer = ({ match, history, location }) => {

  const videos = JSON.parse(document.querySelector('input[name="videos"]').value);

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightmode: true,
    playlistId: videos.playlistId,
    autoplay: false
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;

    if(videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex( video => video.id === videoId );

      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }))

    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false
      })

    }
  }, []);


  const nightModeCallback = () => { }

  const endCallback = () => { }

  const progressCallback = () => { }

  return (
    <ThemeProvider theme={state.nightmode ? theme : themeLight}>
      {
        state.video !== null ?
          <StyledVideoPlayer>
            <Video
              active={state.activeVideo}
              autoplay={state.autoplay}
              endCallback={endCallback}
              progressCallback={progressCallback} />
            <Playlist
              videos={state.videos}
              active={state.activeVideo}
              nightModeCallback={nightModeCallback}
              nightmode={state.nightmode}
            />
          </StyledVideoPlayer>
          : null
      }
    </ThemeProvider>
  );
}

export default VideoPlayer;