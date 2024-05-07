import { useState, useEffect } from "react";
import guardiasPasivas from "../assets/pasivasData.json";

export const OnCallSpecialist = () => {
  const [especialidad, setEspecialidad] = useState("");
  const [guardias, setGuardias] = useState([]);

  const especialidades = Object.keys(guardiasPasivas);

  const handleClick = (especialidad) => {
    setEspecialidad(especialidad);
    setGuardias(guardiasPasivas[especialidad]);
  };

  return (
    <div>
      <div>
        <h2>Selecciona una especialidad:</h2>
        {especialidades.map((especialidad, index) => (
          <button key={index} onClick={() => handleClick(especialidad)}>
            {especialidad}
          </button>
        ))}
      </div>
      {especialidad && (
        <div>
          <h2>Guardias Pasivas de {especialidad}:</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre y Apellido</th>
                <th>Fecha de inicio</th>
                <th>Fecha de fin</th>
              </tr>
            </thead>
            <tbody>
              {guardias.map((guardia, index) => (
                <tr key={index}>
                  <td>{guardia.nombre}</td>
                  <td>{guardia.fecha_inicio}</td>
                  <td>{guardia.fecha_fin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
