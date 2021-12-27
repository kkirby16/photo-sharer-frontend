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
  return {
    type: "CLEAR_CURRENT_USER",
  };
}; //getting rid of the current user that was sitting in our redux store.

export const login = (credentials, history) => {
  return (dispatch) => {
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":
          "https://photo-sharer-kkirby16.netlify.app",
      },
      body: JSON.stringify(credentials),
    }) //can dispatch as needed after this fetch.
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          localStorage.setItem("token", response.token); //returning token to user & putting token in token key of localstorage
          dispatch(setCurrentUser(response.user)); //user object response will have user key and token key.
          dispatch(resetLoginForm());
          dispatch(getAllPosts());
          history.push("/");
        } //history is a mutable object that we are allowed to change on the fly. changes the url once successfully logged in.
      })
      .catch(console.log);
  };
};

export const signup = (credentials, history) => {
  //passing credentials along as an object
  return (dispatch) => {
    const userInfo = {
      user: credentials, //this credentials should have all those top level keys under user.
    };
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":
          "https://photo-sharer-kkirby16.netlify.app",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          console.log("Response", response);
          localStorage.setItem("token", response.token); //token
          dispatch(setCurrentUser(response.user)); //user object response will have user key and token key.
          dispatch(resetSignupForm());
          dispatch(getAllPosts());
          history.push("/"); //changes the url once successfully logged in
        }
      })
      .catch(console.log);
  };
};

export const logout = () => {
  //this action creator is just clearing our session.
  return (dispatch) => {
    dispatch(clearCurrentUser()); //if user clicked log out, we should go ahead and log them out right away on the frontend.
    dispatch(clearAllPosts());
    localStorage.clear();
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch(
      "https://photo-sharer-backend.herokuapp.com/api/v1/get_current_user",
      {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, //this is so we know who the user is. we need to know you're a user here.
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
      }
    )
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
        } else {
          dispatch(setCurrentUser(response));
        }
      })
      .catch(console.log);
  };
};
