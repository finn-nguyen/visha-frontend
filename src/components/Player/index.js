import React from "react";
import ReactPlayer from "react-player";
import StyledPlayer from "../styles/StyledPlayer";

const Player = ({ url }) => (
  <StyledPlayer>
    <ReactPlayer width="250px" height="250px" url={url} />
  </StyledPlayer>
);

export default Player;
