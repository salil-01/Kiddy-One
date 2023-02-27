import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
let cartdata = JSON.parse(localStorage.getItem("cartdata"))||[];
const initialVal = (cartdata.length||0)
function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);
  const [cartCount, setCartCount] = useState(initialVal);
  const [cartData,setcartData] = useState(cartdata);

  const login = () => {
    setisAuth(true);
    // console.log(isAuth);
  };
  const logout = () => {
    setisAuth(false);
    // localStorage.clear();
  };

  //   console.log(state);
  return (
    <AuthContext.Provider
      value={{ isAuth, setisAuth, login, logout, cartCount, setCartCount,cartData,setcartData }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
