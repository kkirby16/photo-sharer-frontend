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
      credentials: "include", //put credentials: "include" in every fetch.
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

export const getCurrentUser = () => {
  console.log("DISPATCHING GET CURRENT USER");
  return (dispatch) => {
    return fetch("http://localhost:4500/api/v1/get_current_user", {
      credentials: "include", //say this for when you need to send an authenticated or authorized request of some sort.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((user) => {
        if (user.error) {
          alert(user.error);
        } else {
          dispatch(setCurrentUser(user));
        }
      })
      .catch(console.log);
  };
};
