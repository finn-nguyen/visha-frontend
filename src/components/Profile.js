import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/auth"
import { StyledProfile, StyledName, StyledLogout, StyledShareMovie } from "../styles/StyledProfile"

const Profile = () => {
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth();
  }

  return (
    <StyledProfile>
      <StyledName>{`Welcome`}</StyledName>
      <StyledShareMovie><Link to="/share">Share a movie</Link></StyledShareMovie>
      <StyledLogout onClick={handleLogout}>Logout</StyledLogout>
    </StyledProfile>
  )
}

export default Profile