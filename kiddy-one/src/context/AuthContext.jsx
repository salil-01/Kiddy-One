import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext();
const initialState = {
  email: "",
  password: "",
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "email": {
      return {
        ...state,
        email: payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: payload,
      };
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};
function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAuth,setIsAuth] = useState(false);
  
//   console.log(state);
  return (
    <AuthContext.Provider value={{state,dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;
