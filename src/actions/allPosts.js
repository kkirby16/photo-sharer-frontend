//gonna need a synchronous action

export const setAllPosts = (posts) => {
  return {
    type: "SET_ALL_POSTS",
    posts, //shorthand syntax (really user: user)
  };
};

export const getAllPosts = () => {
  //or should this be called getAllPosts?
  return (dispatch) => {
    return fetch("http://localhost:4500/api/v1/posts", {
      credentials: "include",
      //say this for when you need to send an authenticated or authorized request of some sort.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        dispatch(setAllPosts(response.data));
      });
  };
};

export const clearAllPosts = () => {
  return {
    type: "CLEAR_ALL_POSTS",
    //shorthand syntax (really user: user)
  };
};

export const setNewPost = (post) => {
  return {
    type: "SET_NEW_POST",
    post,
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    //could dispatch before the fetch something like "loading/getting current user"
    return fetch("http://localhost:4500/api/v1/posts", {
      credentials: "include", //put credentials: "include" in every fetch.
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
      },
      body: post,
      //can dispatch as needed in this fetch.
    })
      .then((r) => r.json()) //we return json of a user if the user was successful.
      .then((response) => {
        if (response.error) {
          alert(response.error);
          //if this response (user/response) has an error key that means that the error "Invalid Credentials in sessions controller happened."
        } else {
          console.log("FETCH RESPONSE", response);
          dispatch(setNewPost(response.data));
        }
      })
      .catch(console.log); //if something goes wrong in the javascript end..
  };
};

export const clearPost = (postId) => {
  return {
    type: "CLEAR_POST",
    postId,
  };
};

export const removePost = (postId) => {
  console.log("LOG IN ACTION CREATOR", postId);
  return (dispatch) => {
    return fetch(`http://localhost:4500/api/v1/posts/${postId}`, {
      credentials: "include",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      dispatch(clearPost(postId));
    });
  };
};

//before you think about populating this piece of state with anything, you always want to get it into the store first so that you can see that the name and the data type are correct
//build the reducer first, then add it to the store so you see it, and then build your action creator.
