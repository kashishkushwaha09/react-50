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
     const storedToken = localStorage.getItem("token");
console.log("storedToken ",storedToken)
if(storedToken){
  console.log("storedToken valid")
}
const expirationTime=localStorage.getItem("expirationTime");
 const currentTime=new Date().getTime();

  console.log("expirationTime:", expirationTime);
  console.log("currentTime:", currentTime);
 if(currentTime>expirationTime){
  logout();
  return;
 }
 setToken(storedToken);
    // const checkAuth=async()=>{
       
    //        if (!storedToken) {
    //   logout();
    //   return;
    // } 
 
      // const isValid=await validateToken(storedToken);
    //  if(isValid){
  
    //  }else{
    //   logout();
    //  }
    // }
 
  //  checkAuth();     
  }, []);


  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);

    const expirationTime = new Date().getTime()+(10 * 1000);
    localStorage.setItem("expirationTime", expirationTime);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
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