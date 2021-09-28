export const updateSignupForm = (formData) => {
  //all i need are the name and thevalue thta I'm changing.
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
