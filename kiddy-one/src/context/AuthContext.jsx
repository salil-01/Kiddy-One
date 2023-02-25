import { createContext, useState } from "react";
export const AuthContext = createContext();
let cartData = JSON.parse(localStorage.getItem("cartdata"));

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [cartCount, setCartCount] = useState(cartData.length);
  const logout = () => {
    setIsAuth(false);
  };
  const login = () => {
    setIsAuth(true);
  };
  //   console.log(state);
  return (
    <AuthContext.Provider
      value={{ isAuth, login, logout, cartCount, setCartCount }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
