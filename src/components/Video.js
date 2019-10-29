import React from "react";
import Player from "./Player";
import StyledVideo from "../styles/StyledVideo";
import StyledVideoContent from "../styles/StyledVideoContent";
import StyledVideoTitle from "../styles/StyledVideoTitle";
import StyledVideoDescription from "../styles/StyledVideoDescription";

const Video = ({ title, description, views, link }) => (
  <StyledVideo>
    <Player url={link} />
    <StyledVideoContent>
      <StyledVideoTitle>{title}</StyledVideoTitle>
      <StyledVideoDescription>{description}</StyledVideoDescription>
      <div>{views}</div>
    </StyledVideoContent>
  </StyledVideo>
);

export default Video;
