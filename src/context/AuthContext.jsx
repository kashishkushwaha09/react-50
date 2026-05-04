import { createContext, useState, useEffect } from "react";
import { validateToken } from "../services/authService";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);


  useEffect(() => {
    const checkAuth=async()=>{
        const storedToken = localStorage.getItem("token");
console.log("storedToken ",storedToken)
if(storedToken){
  console.log("storedToken valid")
}
    //        if (!storedToken) {
    //   logout();
    //   return;
    // } 
 
      const isValid=await validateToken(storedToken);
     if(isValid){
  setToken(storedToken);
     }else{
      logout();
     }
    }
 
   checkAuth();     
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};