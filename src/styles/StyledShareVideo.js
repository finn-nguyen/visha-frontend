import styled from "styled-components";

const StyledShareVideo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledShareVideoContainer = styled.div`
  border: 2px solid #404552;
  border-radius: 3px;
  box-shadow: 0px 1px 10px #404552;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 60px;
`;

const StyledShareVideoButton = styled.div`
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 500;
  background-color: #404552;
  outline: none;
  color: white;
  border-radius: 3px;
  border: 2px solid white;
  margin-top: 50px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const StyledShareVideoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

const StyledShareVideoInput = styled.input`
  flex: 1;
  padding: 10px;
  color: black;
  outline: none;
  font-size: 16px;
  border: 2px solid #404552;
  border-radius: 3px;
`;

const StyledShareVideoLabel = styled.div`
  color: white;
  font-size: 18px;
  margin-right: 5px;
  font-weight: 500;
`;

export {
  StyledShareVideo,
  StyledShareVideoContainer,
  StyledShareVideoRow,
  StyledShareVideoButton,
  StyledShareVideoInput,
  StyledShareVideoLabel
};
