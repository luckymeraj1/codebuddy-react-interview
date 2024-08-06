export const postForm = (userData, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "FORM_POST_INITIATE" });
    try {
      const endpoint = "https://codebuddy.review/submit";
      await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (!response.ok) {
            dispatch({ type: "FORM_POST_FAILED" });
            throw new Error(
              `HTTP error! Status: ${response.status}, Message: ${response.statusText}`,
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);

          setTimeout(() => {
            dispatch({ type: "FORM_POST_SUCCESS" });
            navigate();
          }, 2000);
        });
    } catch (error) {
      console.log("error in formDropdown", error);
      dispatch({ type: "FORM_POST_FAILED" });
    }
  };
};
