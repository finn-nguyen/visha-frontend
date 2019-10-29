import React from "react";
import { Redirect } from "react-router-dom"
import {
  StyledForm,
  StyledInput,
  StyledButton
} from "../styles/StyledForm";
import useLogin from "../hooks/useLogin";
import { login } from "../requests"
import { useAuth } from "../contexts/auth"

const Login = () => {
  const { auth, setAuth } = useAuth();
  const submitForm = async () => {
    const auth = await login(inputs.username, inputs.password)
    setAuth(auth)
  };
  const { inputs, handleInputChange, handleSubmit } = useLogin(submitForm);
  if(auth && auth.username) return <Redirect to="/" />
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
      <StyledButton onClick={handleSubmit}>
        Login / Register{" "}
      </StyledButton>
    </StyledForm>
  );
};

export default Login;
