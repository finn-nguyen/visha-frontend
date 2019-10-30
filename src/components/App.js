import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ShareVideo from "./ShareVideo";
import PrivateRoute from "../hoc/PrivateRoute";
import StyledAppContainer from "./styles/StyledAppContainer";

const App = () => (
  <StyledAppContainer>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/share" component={ShareVideo} />
      </Switch>
    </BrowserRouter>
  </StyledAppContainer>
);

export default App;
