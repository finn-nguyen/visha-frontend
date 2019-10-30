import React from "react";
import StyledNavBar from "../styles/StyledNavBar";
import UserStatus from "../UserStatus";

const Navbar = () => {
  return (
    <StyledNavBar>
      <UserStatus />
    </StyledNavBar>
  );
};

export default Navbar;
