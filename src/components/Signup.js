import React from "react";
import useSignupForm from "../hooks/useSignupForm";
import {
  StyledFormContainer,
  StyledForm,
  StyledRow,
  StyledField,
  StyledInput,
  StyledSubmitButton
} from "../styles/StyledForm";

const Signup = () => {
  const submitForm = () => {
    console.log(inputs.username, inputs.password);
  };
  const { inputs, handleInputChange, handleSubmit } = useSignupForm(submitForm);

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledRow>
          <StyledField>Username</StyledField>
          <StyledInput
            type="text"
            name="username"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </StyledRow>
        <StyledRow>
          <StyledField>Password</StyledField>
          <StyledInput
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
            required
          />
        </StyledRow>
        <StyledSubmitButton type="submit">Sign Up</StyledSubmitButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Signup;
