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

const VideoPlayer = ({ props }) => {

  let match = props.match,
    history = props.history,
    location = props.location;

  const videos = JSON.parse(document.querySelector('input[name="videos"]').value);
  const savedState = JSON.parse(localStorage.getItem(videos.playlistId));

  const [state, setState] = useState({
    videos: savedState ? savedState.videos : videos.playlist,
    activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
    nightmode: savedState ? savedState.nightmode : true,
    playlistId: savedState ? savedState.playlistId : videos.playlistId,
    autoplay: false,
  });


  useEffect(() => {
    localStorage.setItem(state.playlistId, JSON.stringify({ ...state }));
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;

    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(video => video.id === videoId);

      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay,
      }));
    } else {
      history.push({
        pathname: `/video-player/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [history, location.autoplay, match.params.activeVideo, state.activeVideo.id, state.videos]);


  const nightModeCallback = () => {
    setState(prevState => ({ ...prevState, nightmode: !prevState.nightmode }));
  }

  const endCallback = () => {
    const videoId = match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(video => video.id === videoId);
    const nextVideo = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    props.history.push({
      pathname: `/video-player/${state.videos[nextVideo].id}`,
      autoplay: false,
    });
  }

  const progressCallback = e => {
    if (e.playedSeconds >= 10 && e.playedSeconds < 11) {
      const videos = [...state.videos];
      const playedVideo = videos.find(video => video.id === state.activeVideo.id);
      playedVideo.played = true;
      setState(prevState => ({ ...prevState, videos }));
    }
  }

  return (
    <ThemeProvider theme={state.nightmode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledVideoPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightmode={state.nightmode}
          />
        </StyledVideoPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default VideoPlayer;