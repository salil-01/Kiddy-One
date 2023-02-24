import { createContext, useState } from "react";
export const AuthContext = createContext()

function AuthContextProvider({ children }) {
 
  const [isAuth,setIsAuth] = useState(false);
  const logout = ()=>{
    setIsAuth(false);
  }
  const login = ()=>{
    setIsAuth(true);
  }
//   console.log(state);
  return (
    <AuthContext.Provider value={{isAuth,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;
