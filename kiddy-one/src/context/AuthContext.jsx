import { createContext, useReducer } from "react";

export const AuthContext = createContext();
const initialState = {
    
}
function AppContextProvider({children}){
    const [state,dispatch] = useReducer(reducer,initialState);
}