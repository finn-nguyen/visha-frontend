import styled from "styled-components";

const StyledForm = styled.form`
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-right: 100px;
`;

const StyledInput = styled.input`
  width: 120px;
  padding: 5px;
  color: black;
  outline: none;
  font-size: 16px;
  margin-right: 15px;
`;

const StyledSubmitButton = styled.button`
  height: 33px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  background-color: #7c818c;
  outline: none;
`;

export { StyledForm, StyledInput, StyledSubmitButton };
