import { createContext, useState } from "react";
export const AuthContext = createContext();
let cartData = JSON.parse(localStorage.getItem("cartdata"));

function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);
  const [cartCount, setCartCount] = useState(cartData.length);
  const login = () => {
    setisAuth(true);
    // console.log(isAuth);
  };
  const logout = () => {
    setisAuth(false);
  };

  //   console.log(state);
  return (
    <AuthContext.Provider
      value={{ isAuth, setisAuth, login, logout, cartCount, setCartCount }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
