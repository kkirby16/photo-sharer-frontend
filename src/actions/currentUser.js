//synchronous action creators
export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user, //shorthand syntax (really user: user)
  };
};

//asynchronous action creators

export const login = (credentials) => {
  console.log(credentials);

  return (dispatch) => {
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("http://localhost:4500/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      //can dispatch as needed in this fetch.
    })
      .then((r) => r.json()) //we return json of a user if the user was successful.
      .then((user) => {
        if (user.error) {
          alert(user.error);
          //if this response (user/response) has an error key that means that the error "Invalid Credentials in sessions controller happened."
        } else {
          dispatch(setCurrentUser(user));
        }
      })
      .catch(console.log); //if something goes wrong in the javascript end..
  };
};

//login action will be asynchronous because we need to send a request to our backend in order to login.

//this action creator will receive as an argument a user object.
