import { useReducer } from "react";
import AuthContext from "./AuthContent";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user, token: action.payload.token };

    case "LOGOUT":
      return { user: null, token: null };

    case "SIGNUP":
      return { user: action.payload.user, token: action.payload.token };

    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const localData = JSON.parse(localStorage.getItem("user"));
  const [state, dispatch] = useReducer(AuthReducer, {
    user: localData ? localData.user : null,
    token: localData ? localData.token : null,
  });
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
