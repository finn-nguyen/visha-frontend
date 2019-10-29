import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledSubmitButton
} from "../styles/StyledForm";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const submitForm = () => {
    console.log(inputs.username, inputs.password);
  };
  const { inputs, handleInputChange, handleSubmit } = useLogin(submitForm);
  return (
    <StyledForm>
      <StyledInput
        name="username"
        placeholder="username"
        type="text"
        onChange={handleInputChange}
        value={inputs.email}
        required
      />
      <StyledInput
        name="password"
        placeholder="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.email}
        required
      />
      <StyledSubmitButton onClick={handleSubmit}>
        Login/Register
      </StyledSubmitButton>
    </StyledForm>
  );
};

export default Login;
