import React, { useState } from "react";

const useSignupForm = handler => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    handler();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return { inputs, handleSubmit, handleInputChange };
};

export default useSignupForm;
