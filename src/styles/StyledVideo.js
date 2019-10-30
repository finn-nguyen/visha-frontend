import styled from "styled-components";

const StyledVideo = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const StyledVideoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledVideoTitle = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StyledVideoDescription = styled.div`
  color: #d3d3d3;
  font-size: 16px;
`;

const StyledText = styled.div`
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 600;
`;

export {
  StyledVideo,
  StyledVideoContent,
  StyledVideoTitle,
  StyledVideoDescription,
  StyledText
};
