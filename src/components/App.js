import React from "react";
import Videos from "./Videos";
import NavBar from "./NavBar";
import StyledAppContainer from "../styles/StyledAppContainer";
import StyledContentContainer from "../styles/StyledContentContainer";

const App = () => (
  <StyledAppContainer>
    <NavBar />
    <StyledContentContainer>
      <Videos />
    </StyledContentContainer>
  </StyledAppContainer>
);

export default App;
