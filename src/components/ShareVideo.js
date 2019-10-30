import React from "react";
import { useHistory } from "react-router-dom";
import {
  StyledShareVideo,
  StyledShareVideoContainer,
  StyledShareVideoRow,
  StyledShareVideoButton,
  StyledShareVideoInput,
  StyledShareVideoLabel
} from "../styles/StyledShareVideo";
import useForm from "../hooks/useLogin";
import { shareVideo } from "../requests";

const ShareVideo = () => {
  const history = useHistory();
  const submitLink = async () => {
    await shareVideo(inputs.link);
    history.push("/");
  };
  const { inputs, handleInputChange, handleSubmit } = useForm(submitLink);
  return (
    <StyledShareVideo>
      <StyledShareVideoContainer>
        <StyledShareVideoRow>
          <StyledShareVideoLabel>Youtube URL:</StyledShareVideoLabel>
          <StyledShareVideoInput
            name="link"
            placeholder="Youtube link"
            type="text"
            onChange={handleInputChange}
            value={inputs.link || ""}
            required
          />
        </StyledShareVideoRow>
        <StyledShareVideoButton onClick={handleSubmit}>
          Share
        </StyledShareVideoButton>
      </StyledShareVideoContainer>
    </StyledShareVideo>
  );
};

export default ShareVideo;
