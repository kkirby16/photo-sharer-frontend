export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      return { ...state, posts: [...state.posts, ...action.posts] };
    case "CLEAR_ALL_POSTS":
      return { ...state, posts: [] };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.post] };
    case "SET_NEW_POST":
      return { ...state, posts: [action.post, ...state.posts] };
    case "CLEAR_POST":
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== action.postId)],
      };
    case "ADD_COMMENT":
      let newPosts = [...state.posts].map((post) => {
        if (parseInt(post.id) === action.payload.post_id) {
          let updatedPost = {
            ...post,
            comments: [...post.comments, action.payload],
          };
          return updatedPost;
        } else {
          return post;
        }
      });
      return { ...state, posts: newPosts };
    case "CLEAR_COMMENT":
      let post = state.posts.find((post) => post.id == action.postId); //had to do a complicated delete like this because comment was nested under post
      let postIdx = state.posts.findIndex((post) => post.id == action.postId);
      let postComments = post.comments.filter(
        (comment) => comment.id !== action.commentId
      );
      post.comments = postComments;

      return {
        ...state,
        posts: [
          ...state.posts.slice(0, postIdx), //grabs from beginning of array to right before the post index.
          Object.assign({}, post), //this is putting the newly updated post into a new object to be super clear with redux that there is a change in state (change of the post/less comments) so re-render happens
          ...state.posts.slice(postIdx + 1), //this will start putting the rest of posts starting from right after the postIdx
        ],
      };

    case "ADD_LIKE":
      let posts = [...state.posts].map((post) => {
        if (parseInt(post.id) === action.payload.post_id) {
          let updatedPost = {
            ...post,
            likes: [...post.likes, action.payload],
          };
          return updatedPost;
        } else {
          return post;
        }
      });
      return { ...state, posts: posts };

    case "DELETE_LIKE":
      let unlikedPost = state.posts.find((post) => post.id == action.post_id);
      let postIndex = state.posts.findIndex(
        (post) => post.id == action.post_id
      );
      let postLikes = unlikedPost.likes.filter(
        (like) => like.id !== action.users_like.id
      );
      unlikedPost.likes = postLikes;

      return {
        ...state,
        posts: [
          ...state.posts.slice(0, postIndex), //grabs from beginning of array to right before the post index.
          Object.assign({}, unlikedPost), //this is putting the newly updated post into a new object to be super clear with redux that there is a change in state (change of the post/less likes) so re-render happens
          ...state.posts.slice(postIndex + 1), //this will start putting the rest of posts starting from right after the postIdx
        ],
      };

    default:
      return state;
  }
};
