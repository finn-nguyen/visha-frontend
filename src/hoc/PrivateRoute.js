import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { auth } = useAuth();
  return (
    <Route
      {...rest}
      render={props =>
        auth && auth.username ? <Component {...props} /> : <Redirect to="login" />
      }
    />
  )
}

export default PrivateRoute;
