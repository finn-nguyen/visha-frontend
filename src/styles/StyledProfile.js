import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
  justify-content: space-around;
`;

const StyledName = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
`

const StyledShareMovie = styled.button`
  height: 33px;
  width: 150px;
  font-size: 16px;
  font-weight: 500;
  background-color: #7c818c;
  outline: none;
  color: white;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
`

const StyledLogout = styled.button`
  height: 33px;
  width: 120px;
  font-size: 16px;
  font-weight: 500;
  background-color: #7c818c;
  outline: none;
  color: white;
  margin-left: 20px;

  :hover {
    cursor: pointer;
  }
`

export { StyledProfile, StyledName, StyledLogout, StyledShareMovie};
