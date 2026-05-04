import { createContext, useState, useEffect } from "react";
import { validateToken } from "../services/authService";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: (token,email) => { },
  logout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);


  useEffect(() => {

    // const expirationTime=localStorage.getItem("expirationTime");
    //  const currentTime=new Date().getTime();

    //   console.log("expirationTime:", expirationTime);
    //   console.log("currentTime:", currentTime);
    //  if(currentTime>expirationTime){
    //   logout();
    //   return;
    //  }



    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");

      console.log("storedToken:", storedToken);

      if (!storedToken) {
        console.log("No token - logout");
        logout();
        return;
      }

      const isValid = await validateToken(storedToken);

      if (isValid) {
        console.log("Token valid ");
        setToken(storedToken);
      } else {
        console.log("Token invalid logout");
        logout();
      }
    };

    checkAuth();
  }, []);


  const login = (token,email) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);

    // const expirationTime = new Date().getTime()+(3600 * 1000);
    // localStorage.setItem("expirationTime", expirationTime);
  };


  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
     localStorage.removeItem("email");
    // localStorage.removeItem("expirationTime");
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