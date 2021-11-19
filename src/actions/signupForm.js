export const updateSignupForm = (formData) => {
  //all I need are the name and the value that I'm changing.
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData: formData,
  };
};

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM",
  };
};
