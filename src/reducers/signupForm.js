//if need actions around signup going to need a new reducer, signupForm
//when adding state around redux, it is good to make sure you can get your new reducer in the store first.
const initialState = {
  name: "",
  username: "",
  password: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SIGNUP_FORM":
      return action.formData;
    case "RESET_SIGNUP_FORM":
      return initialState;
    default:
      return state;
  }
};
