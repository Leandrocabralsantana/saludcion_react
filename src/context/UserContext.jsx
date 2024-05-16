import { useState, createContext, useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { Navigate } from "react-router-dom";
export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user, "User en context")
  
  }, [user]
  )

  const handleNewLogin = (user) => {
    setUser(user);
  }

  const handleLogOut = () => {
    console.log("Usted esta cerrando sesion")
  }
  
  

  return (
    <UserContext.Provider value={{ user, handleNewLogin, handleLogOut  }}>{children}</UserContext.Provider>
  );
}