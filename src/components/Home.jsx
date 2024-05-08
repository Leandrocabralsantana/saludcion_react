import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
export const Home = () => {

  const { user} = useContext(UserContext)

  return (
    <div>
      <h2>Bienvenido</h2>
      <h3>Novedades!</h3>
      <p>
        Cambios en las guardias pasivas del día de la fecha.{" "}
        <i>
          by <strong>Ana Laura</strong>
        </i>{" "}
        <small>"(Publicado el 27 de Abril de 2024) a las 07:30"</small>
      </p>
      <p>
        El departamento administrativo informa que se ha aprobado una nueva
        política de licencias remuneradas para el personal médico y
        administrativo. Para más detalles, consulte con Recursos Humanos.{" "}
        <i>
          by <strong>Luis Pérez</strong>
        </i>{" "}
        <small>"(Publicado el 27 de Abril de 2024) a las 09:00"</small>
      </p>
      <p>
        El director administrativo del hospital, el Dr. Martínez, estará de
        vacaciones del 1 al 15 de mayo. Durante su ausencia, el Dr. Gómez estará
        a cargo de las operaciones administrativas.{" "}
        <i>
          by <strong>Maria Rodríguez</strong>
        </i>{" "}
        <small>"(Publicado el 27 de Abril de 2024) a las 11:30"</small>
      </p>
    </div>
  );
};
