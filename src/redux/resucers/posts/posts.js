const initialState = {
  loading: false,
};
export const posts = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS_INITIATE":
      return { ...state, loading: true };
    case "GET_POSTS_SUCCESS":
      return { ...initialState, posts: action.payload, loading: false };
    case "GET_POSTS_FAILED":
      return { ...state, loading: false };
    default:
      return state;
  }
};
