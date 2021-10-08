//synchronous action creators
import { resetLoginForm } from "./loginForm.js";
import { resetSignupForm } from "./signupForm.js";

import { getAllPosts } from "./allPosts.js";
import { clearAllPosts } from "./allPosts.js";

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user, //shorthand syntax (really user: user)
  };
};

export const clearCurrentUser = () => {
  //still on frontend need to clear out the user.
  return {
    type: "CLEAR_CURRENT_USER",
  };
};
//getting rid of the current user that was sitting in our redux store.

//asynchronous action creators

export const login = (credentials, history) => {
  console.log(credentials); //also taking history object from props.

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
      .then((response) => {
        if (response.error) {
          alert(response.error);
          //if this response (user/response) has an error key that means that the error "Invalid Credentials in sessions controller happened."
        } else {
          dispatch(setCurrentUser(response));
          dispatch(resetLoginForm());
          dispatch(getAllPosts());
          history.push("/"); //can do this to change the url once I've successfully logged in.
          console.log("HISTORY!", history);
        } //history is a mutable object that we are allowed to change on the fly.
      })
      .catch(console.log); //if something goes wrong in the javascript end..
  };
};

export const signup = (credentials, history) => {
  //passing credentials along as an object
  console.log(credentials);

  return (dispatch) => {
    const userInfo = {
      user: credentials, //this credentials should have all those top level keys under user.
    };
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("http://localhost:4500/api/v1/signup", {
      credentials: "include", //put credentials: "include" in every fetch.
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
      //can dispatch as needed in this fetch.
    })
      .then((r) => r.json()) //we return json of a user if the user was successful.
      .then((response) => {
        if (response.error) {
          alert(response.error);
          //if this response (user/response) has an error key that means that the error "Invalid Credentials in sessions controller happened."
        } else {
          dispatch(setCurrentUser(response));
          dispatch(resetSignupForm());
          dispatch(getAllPosts());
          history.push("/");
        }
      })
      .catch(console.log); //if something goes wrong in the javascript end..
  };
};

export const logout = () => {
  //this action creator is just clearing our session.
  //return a function from async action creators using thunk
  //if user clicked log out, we should go ahead and log them out right away on the frontend.
  return (dispatch) => {
    dispatch(clearCurrentUser()); //have to invoke it to get your action
    dispatch(clearAllPosts());
    return fetch("http://localhost:4500/api/v1/logout", {
      credentials: "include", //sends our cookies back.
      method: "DELETE",
    });
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
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response));
        }
      })
      .catch(console.log);
  };
};
