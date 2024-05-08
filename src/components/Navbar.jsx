import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useUsers } from "../hooks/useUsers";
import { UserContext } from "../context/UserContext";
export const Navbar = () => {
  const { handleLogOut } = useContext(UserContext);

  const {user} = useUsers();
  const navigate = useNavigate();

  const navigateTo = (section) => {
    navigate("/" + section);
    console.log("section", section);
  };

  const UserLogout = () => {
    handleLogOut();
    
  }

  // if(user == null)
  // {
  //   navigate("/login");
  // }

  return (
    <>
      <div className="navbar">
        <button onClick={() => navigateTo("home")}>
         Novedades
        </button>

        <button onClick={() => navigateTo("oncall")}>
          Abrir guardias pasivas
        </button>
        <button onClick={() => navigateTo("phonebook")}>
          Abrir agenda general
        </button>
        <button onClick={() => navigateTo("abm")}>
          Abrir ABM de profesionales
        </button>
        <button onClick={() => navigateTo("internalnumbers")}>
          Abrir guia de numeros internos
        </button>
      </div>
      <button onClick={handleLogOut()}>Cerrar sesión</button>
    </>
  );
};
