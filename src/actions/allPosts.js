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
    return fetch("http://localhost:4500/api/v1/get_all_posts", {
      credentials: "include",
      //say this for when you need to send an authenticated or authorized request of some sort.
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((response) => {
        dispatch(setAllPosts(response));
      });
  };
};

//before you think about populating this piece of state with anything, you always want to get it into the store first so that you can see that the name and the data type are correct
//build the reducer first, then add it to the store so you see it, and then build your action creator.
