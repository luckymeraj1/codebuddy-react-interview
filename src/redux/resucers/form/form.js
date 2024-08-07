const initialState = {
  loading: false,
  currentStep: 1,
  completed: [0],
  profileData: {
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  },
};
export const form = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_UPDATE":
      console.log("FORM_UPDATE");

      return {
        ...state,
        profileData: action.payload,
        completed: !state.completed.includes(state.currentStep)
          ? [...state.completed, state.currentStep]
          : [...state.completed],
      };
    case "STEPER_STATE":
      return { ...state, currentStep: action.payload };
    case "STEP_UPDATE":
      console.log("STEP_UPDATE");
      return { ...state, currentStep: state.currentStep + action.payload };
    case "FORM_POST_INITIATE":
      console.log("FORM_POST_INITIATE");
      return { ...state, loading: true };
    case "FORM_POST_SUCCESS":
      console.log("FORM_POST_SUCCESS");
      return { ...initialState, loading: false };
    case "FORM_POST_FAILED":
      console.log("FORM_POST_FAILED");
      return { ...state, loading: false };
    default:
      console.log("DEFAULT RUN");
      return state;
  }
};
