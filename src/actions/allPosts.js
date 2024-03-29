import { getCurrentUser } from "./currentUser";

export const setAllPosts = (posts) => {
  return {
    type: "SET_ALL_POSTS",
    posts, //shorthand syntax
  };
};

export const getAllPosts = () => {
  return (dispatch) => {
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/posts", {
      mode: "cors",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`, //this is so we know who the user is. server will verify that the signature is correct and then send the response to the client.
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        dispatch(setAllPosts(response));
      })
      .catch((error) => console.log(error.message));
  };
};

export const clearAllPosts = () => {
  return {
    type: "CLEAR_ALL_POSTS",
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
    return fetch("https://photo-sharer-backend.herokuapp.com/api/v1/posts", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin":
          "https://photo-sharer-kkirby16.netlify.app",
      },
      body: post,
    })
      .then((r) => r.json()) //we return json of a user if the user was successful.
      .then((response) => {
        if (response.error) {
          alert(response.error); //could dipatch action saying found error.
          //if this response (user/response) has an error key that means that the error "Invalid Credentials in sessions controller" happened.
        } else {
          dispatch(setNewPost(response));
        }
      })
      .catch(console.log); //if something goes wrong in the javascript end.
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
    return fetch(
      `https://photo-sharer-backend.herokuapp.com/api/v1/posts/${postId}`,
      {
        credentials: "include",
        withCredentials: true,
        method: "DELETE",
        mode: "cors",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
      }
    ).then((res) => {
      dispatch(clearPost(postId));
    });
  };
};

export const addComment = (text, postId) => {
  return (dispatch) => {
    return fetch(
      `https://photo-sharer-backend.herokuapp.com/api/v1/posts/${postId}/comments`,
      {
        credentials: "include",
        withCredentials: true,
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
        body: JSON.stringify(text), //converts an object into json string
      }
    )
      .then((res) => res.json()) //res is a whole response which has headers, body and a lot of info and what we want is just the body of the response and that is why .json() exists... to just get that and convert to a javascript object that is readable and nice to process.
      .then((response) =>
        dispatch({
          type: "ADD_COMMENT",
          payload: response,
        })
      );
  };
};

export const clearComment = (postId, commentId) => {
  return {
    type: "CLEAR_COMMENT",
    postId,
    commentId,
  };
};

export const removeComment = (postId, commentId) => {
  return (dispatch) => {
    return fetch(
      `https://photo-sharer-backend.herokuapp.com/api/v1/posts/${postId}/comments/${commentId}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
      }
    ).then((res) => {
      dispatch(clearComment(postId, commentId));
    });
  };
};

export const addLike = (user_id, post_id) => {
  return (dispatch) => {
    return fetch(
      `https://photo-sharer-backend.herokuapp.com/api/v1/posts/${post_id}/likes`,
      {
        credentials: "include",
        withCredentials: true,
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
        body: JSON.stringify(user_id),
      }
    )
      .then((res) => res.json())
      .then((response) =>
        dispatch({
          type: "ADD_LIKE",
          payload: response,
        })
      );
  };
};

export const clearLike = (user_id, post_id, users_like) => {
  return {
    type: "DELETE_LIKE",
    user_id,
    post_id,
    users_like,
  };
};

export const deleteLike = (user_id, post_id, users_like) => {
  return (dispatch) => {
    return fetch(
      `https://photo-sharer-backend.herokuapp.com/api/v1/posts/${post_id}/likes/${users_like.id}`,
      {
        credentials: "include",
        withCredentials: true,
        method: "DELETE",
        mode: "cors",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin":
            "https://photo-sharer-kkirby16.netlify.app",
        },
      }
    ).then((res) => {
      dispatch(clearLike(user_id, post_id, users_like));
    });
  };
};

//build the reducer first, then add it to the store so you see it, and then build your action creator.
