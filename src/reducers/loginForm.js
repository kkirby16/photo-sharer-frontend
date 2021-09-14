const initialState = {
  username: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FORM":
      return action.formData;
    case "RESET_LOGIN_FORM":
      return initialState; //this explicitly needs to return initialState which will always be a cleared out form.
    default:
      return state;
  }
};
