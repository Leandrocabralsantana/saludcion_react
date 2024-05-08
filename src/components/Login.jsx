import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useUsers } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

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
    if (userData != null) {
      setUserLogged(true);
      handleNewLogin(userData);
      // Redirigir al usuario a la página de inicio después del inicio de sesión exitoso
      navigate("/home");
    } else {
      setUserLogged(false);
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <h3>Bienvenido</h3>
      <label>Ingresa tu cuenta</label>
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
    </>
  );
};
