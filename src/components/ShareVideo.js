import React from "react";
import {
  StyledShareVideo,
  StyledShareVideoContainer,
  StyledShareVideoRow,
  StyledShareVideoButton,
  StyledShareVideoInput,
  StyledShareVideoLabel
} from "../styles/StyledShareVideo";

const ShareVideo = () => {
  return (
    <StyledShareVideo>
      <StyledShareVideoContainer>
        <StyledShareVideoRow>
          <StyledShareVideoLabel>Youtube URL:</StyledShareVideoLabel>
          <StyledShareVideoInput />
        </StyledShareVideoRow>
        <StyledShareVideoButton>Share</StyledShareVideoButton>
      </StyledShareVideoContainer>
    </StyledShareVideo>
  );
};

export default ShareVideo;
