import React, { useState } from "react";
import { AuthContext } from "./auth";

const restoreAuthFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const user_id = localStorage.getItem("user_id");
  if (token && username && user_id) {
    return {
      token,
      username,
      user_id
    };
  }
  return null;
};

const AppProviders = ({ children }) => {
  const [auth, setAuth] = useState(restoreAuthFromLocalStorage());

  const setUser = auth => {
    if (auth && auth["token"] && auth["username"] && auth["user_id"]) {
      const { token, username, user_id } = auth;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("user_id", user_id);
      setAuth({ token, username });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("user_id");
      setAuth();
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AppProviders;
