import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "./AuthReducer";

const INITIAL_STATE = {
  newUser: JSON.parse(localStorage.getItem("newUser")) || null,
  loginUser: JSON.parse(localStorage.getItem("loginUser")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("newUser", JSON.stringify(state.newUser));
    localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
  }, [state.newUser, state.loginUser]);

  return (
    <AuthContext.Provider
      value={{ newUser: state.newUser, loginUser: state.loginUser, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
