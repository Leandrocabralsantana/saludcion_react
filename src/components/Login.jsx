import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import  "../styles/Login.css";

export const Login = ({ setUserLogged }) => {
  const { handleNewLogin } = useContext(UserContext);
  const [loginData, setLoginData] = useState({ nickname: "", password: "" });
  const [userData, setUserData] = useState(null);
  const { loginUser } = useUsers();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await loginUser(loginData);
    setUserData(result);
  };

  useEffect(() => {
    // console.log("userData changed:", userData);  // Agregamos este log para depurar
    if (userData) {
      setUserLogged(true);
      handleNewLogin(userData);
      navigate("/home");
    } else {
      setUserLogged(false);
    }
  }, [userData, setUserLogged, handleNewLogin, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
    <div className="login">
    <h3>Bienvenido</h3>
      <label>Ingresa tu usuario</label>
      <input
        type="text"
        name="nickname"
        value={loginData.nickname}
        onChange={handleInputChange}
      />
      <label>Ingresa tu contraseña</label>
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
     
    </>
  );
};
