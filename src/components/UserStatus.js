import React from "react";
import Login from "./Login";
import Profile from "./Profile"
import { useAuth } from "../contexts/auth"

const UserStatus = () => {
  const { auth } = useAuth()
  console.log({auth})
  return auth ? <Profile /> : <Login />
};

export default UserStatus;
