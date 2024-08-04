export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP_SUCCESS":
      return {
        newUser: action.payload,
        loginUser: null,
      };
    case "SIGN_OUT_SUCCESS":
      return {
        newUser: null,
        loginUser: null,
      };
      localStorage.removeItem("newUser");
    case "LOG_IN_SUCCESS":
      return {
        newUser: null,
        loginUser: action.payload,
      };
    case "LOG_OUT_SUCCESS":
      return {
        newUser: null,
        loginUser: null,
      };
      localStorage.removeItem("loginUser");
    default:
      return {
        ...state,
      };
  }
};
