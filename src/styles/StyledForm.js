import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const StyledForm = styled.form`
  background-color: #404552;
  border: 3px solid #383c4a;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 50px 50px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const StyledField = styled.label`
  color: white;
  width: 150px;
  font-size: 20px;
`;

const StyledInput = styled.input`
  height: 20px;
  width: 250px;
  padding: 10px;
  color: black;
  outline: none;
  font-size: 16px;
`;

const StyledSubmitButton = styled.button`
  margin-top: 50px;
  height: 40px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  background-color: #7c818c;
  outline: none;
`;

export {
  StyledFormContainer,
  StyledForm,
  StyledRow,
  StyledField,
  StyledInput,
  StyledSubmitButton
};
