import React from "react";
import StyledVideo from "../styles/StyledVideo";

const Video = ({ title, description, views, link }) => (
  <StyledVideo>
    <div>{title}</div>
    <div>{description}</div>
    <div>{views}</div>
  </StyledVideo>
);

export default Video;
