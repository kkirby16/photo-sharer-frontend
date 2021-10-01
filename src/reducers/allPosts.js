export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return { ...state, posts: [...state.posts, ...action.posts] };
    case "CLEAR_ALL_POSTS":
      return { ...state, posts: [] };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.post] };
    // return [...state, action.post];
    case "SET_NEW_POST":
      return { ...state, posts: [action.post, ...state.posts] };
    // return [action.post, ...state];
    case "CLEAR_POST":
      return state.filter((post) => post.id !== action.postId);
    case "ADD_COMMENT":
      let newPosts = [...state.posts].map((post) => {
        if (parseInt(post.id) === action.payload.post_id) {
          post.attributes.comments = [
            ...post.attributes.comments,
            action.payload,
          ];
          return post;
        } else {
          return post;
        }
      });
      return { ...state, posts: newPosts };

    // let newPosts = state.map((post) => {
    //   // console.log("ACTION", post);
    //   if (parseInt(post.id) === action.payload.post_id) {
    //     let newComments = [...post.attributes.comments, action.payload];
    //     return {
    //       ...post,
    //       [post.attributes.comments]: newComments,
    //     };

    // post.attributes.comments = [
    //   ...post.attributes.comments, //will the comment be put into the post with line 17-19 in time before the post is returned?
    //   action.payload, //should i use object assign instead? when doing post.attributes.comments = , i think I may be mutating part of state which is bad?
    // ];
    //this is the post that got commented on.
    //   } else {
    //     return post; //this will be all the other posts that didn't get commented on.
    //   }
    // });
    // return newPosts;
    default:
      return state; //should I have a different default here since I always want posts to be returned?
  }
};

//ADD_COMMENT
//find a post in state that has same id as the post id you get returned.
