import React from "react";
import { Link } from "react-router-dom";
import StyledNavBar from "../styles/StyledNavBar";
import StyledLinks from "../styles/StyledLinks";
import StyledLink from "../styles/StyledLink";

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledLinks>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <StyledLink>Login</StyledLink>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <StyledLink>Signup</StyledLink>
        </Link>
      </StyledLinks>
    </StyledNavBar>
  );
};

export default Navbar;
