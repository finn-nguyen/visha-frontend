import React from "react";
import Player from "./Player";
import {
  StyledVideo,
  StyledVideoContent,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledText
} from "../styles/StyledVideo";

const Video = ({ title, description, views, link, user }) => (
  <StyledVideo>
    <Player url={link} />
    <StyledVideoContent>
      <StyledVideoTitle>{title}</StyledVideoTitle>
      <StyledText>{`Shared by: ${user.username.toUpperCase()}, ${views ||
        0} views`}</StyledText>
      <StyledText>Description:</StyledText>
      <StyledVideoDescription>{description}</StyledVideoDescription>
    </StyledVideoContent>
  </StyledVideo>
);

export default Video;
