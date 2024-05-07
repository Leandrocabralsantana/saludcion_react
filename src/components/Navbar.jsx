import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
export const Navbar = () => {
  const navigate = useNavigate();

  const navigateTo = (section) => {
    navigate("/" + section);
    console.log("section", section);
  };

  return (
    <>
      <div className="navbar">
        <button onClick={() => navigateTo("home")}>
          Ir a pantalla principal
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
    </>
  );
};
