export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_POSTS_INITIATE" });
    try {
      const endpoint = "https://codebuddy.review/posts";

      await fetch(endpoint, {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            dispatch({ type: "GET_POSTS_FAILED" });
            throw new Error(
              `HTTP error! Status: ${response.status}, Message: ${response.statusText}`,
            );
          }
          return response.json();
        })
        .then((res) => {
          console.log("post data:", res);
          // setTimeout(() => {
          //     dispatch({ type: 'GET_POSTS_SUCCESS', payload: res?.data })
          // }, 100);
          dispatch({ type: "GET_POSTS_SUCCESS", payload: res?.data });
        });
    } catch (error) {
      console.log("error in formDropdown", error);
      dispatch({ type: "GET_POSTS_FAILED" });
    }
  };
};
