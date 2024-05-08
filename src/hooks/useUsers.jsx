import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { UserLogin_services } from "../api/UserLogin_services";
import Swal from "sweetalert2";
export const useUsers = () => {
  const [userInformation, setUserInformation] = useState(null);
  const {user} = useContext(UserContext)
  const loginUser = async (userData) => {
    try {
      const response = await UserLogin_services().LoginUser(userData);
      setUserInformation(response);
      Swal.fire({
        title: `Bienvenido ${response.nickname}`, // Utiliza backticks
        timer: 1500,
      });
      return userInformation;
    } catch (error) {
      Swal.fire("Ha ocurrido un error. Verifique sus credenciales!");
    }
  };

  const newUserInfo = async (userInformation) => 
  {
    await console.log(userInformation)
    return userInformation;
  }

  return { userInformation, loginUser, newUserInfo,user };
};
