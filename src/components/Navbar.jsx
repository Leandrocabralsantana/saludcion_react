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
          Guardias pasivas
        </button>
        <button onClick={() => navigateTo("phonebook")}>
          Agenda general
        </button>
        <button onClick={() => navigateTo("abm")}>
          ABM de profesionales
        </button>
        <button onClick={() => navigateTo("internalnumbers")}>
         Numeros internos
        </button>
        <button onClick={() => navigateTo("poe")}>
          POEs
        </button>
        <button onClick={() => navigateTo("ambulance")}>
          Traslados
        </button>
      </div>
      {/* <button onClick={handleLogOut()}>Cerrar sesión</button> */}
    </>
  );
};
