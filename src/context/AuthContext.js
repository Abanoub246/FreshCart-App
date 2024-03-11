import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const userToken = localStorage.getItem("token");
  const { id } = jwtDecode(userToken);

  useEffect(() => {
    if (userToken) {
      setToken(userToken);
      setUserId(id);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, userId }}>
      {children}
    </AuthContext.Provider>
  );
}
