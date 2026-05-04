const API_KEY = "AIzaSyCvImdLW-QPJpNfOTNbhFkggxLferQdw1Q";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";


const request = async (endpoint, body) => {
  try {
    const res = await fetch(`${BASE_URL}:${endpoint}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        returnSecureToken: true,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const message = getErrorMessage(data.error.message);
      throw new Error(message);
    }

    return data;
  } catch (err) {
    throw err;
  }
};

const getErrorMessage = (code) => {
  switch (code) {
    case "EMAIL_EXISTS":
      return "Email already registered";
    case "EMAIL_NOT_FOUND":
      return "Email not found";
    case "INVALID_PASSWORD":
      return "Wrong password";
       case "INVALID_LOGIN_CREDENTIALS":
      return "Invalid login credentials";
    case "WEAK_PASSWORD":
      return "Password should be at least 6 characters";
        case "TOKEN_EXPIRED":
      return "Session expired, please login again";
    case "INVALID_ID_TOKEN":
      return "Invalid session, please login again";
    default:
      return "Something went wrong";
  }
};
export const changePassword = async (idToken, newPassword) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken, 
          password: newPassword,
          returnSecureToken: true,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      const message = getErrorMessage(data.error.message);
      throw new Error(message);
    }

    return data;
  } catch (err) {
    throw err;
  }
};

export const signupUser = (email, password) => {
  return request("signUp", { email, password });
};


export const loginUser = (email, password) => {
  return request("signInWithPassword", { email, password });
};

export const validateToken=async(token)=>{
 
  try {
     const response= await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
     {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: token,
       
      }),
     }
     );
     const data=await response.json();
     if(!response.ok){
      
      throw new Error(data.error.message);
     }
     return true;
  } catch (error) {
    console.log("Token invalid:", error.message);
return false;
  }
}


