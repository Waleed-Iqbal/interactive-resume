import React from 'react';
import ReactPlayer from 'react-player';
import StyledVideoWrapper from './styles/styled-video-wrapper';
import StyledVideo from './styles/styled-video';

const Video = ({active, autoplay, endCallback, progressCallback}) => {
  console.log('URL');
  console.log(active.video);

  return (
    <StyledVideo>
      <StyledVideoWrapper>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{position:'absolute', top: '0'}}
          playing={autoplay}
          controls={true}
          url={active.video}
          onEnded={endCallback}
          onProgress={progressCallback}
        />
      </StyledVideoWrapper>
    </StyledVideo>
  );
}

export default Video;
