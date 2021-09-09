//synchronous action creators
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user, //shorthand syntax (really user: user)
  };
};

//asynchronous action creators

export const login = (credentials) => {
  return (dispatch) => {
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("http://localhost:4500/api/v1/login");
    method: "POST";
    //can dispatch as needed in this fetch.
  };
};

//login action will be asynchronous because we need to send a request to our backend in order to login.

//this action creator will receive as an argument a user object.
