import React, { useState } from "react";
import { AuthContext } from "./auth";

const AppProviders = ({ children }) => {
  const [auth, setAuth] = useState({ username: "Tuong", token: "fasdfs" });

  const setUser = auth => {
    if (auth && auth["token"] && auth["username"]) {
      const { token, username } = auth;
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setAuth({ token, username });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
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
