export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case "SET_ALL_POSTS":
      console.log("WHAT'S STATE HERE?", state.posts);
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

      // let commentIdx = post.comments.findIndex(
      //   (comment) => comment.id === action.commentId
      // );

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
    case "ADD_LIKE":
      console.log("What is the action", action.payload);
      let posts = [...state.posts].map((post) => {
        if (parseInt(post.id) === action.payload.post_id) {
          let updatedPost = {
            ...post,
            likes: [...post.likes, action.payload],
          };
          console.log("UPDATED POST", updatedPost);

          return updatedPost;
        } else {
          return post;
        }
      });
      return { ...state, posts: posts };

    case "DELETE_LIKE":
      let unlikedPost = state.posts.find((post) => post.id == action.post_id);
      console.log("UNLIKED POST", unlikedPost);
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
      return state; //should I have a different default here since I always want posts to be returned?
  }
};

//ADD_COMMENT
//find a post in state that has same id as the post id you get returned.
