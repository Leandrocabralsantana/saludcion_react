import { useState } from "react";
import data from "../assets/AbmData.json";
export const AbmProffesional = () => {
  const [filtroCargo, setFiltroCargo] = useState("");

  const filtrarPorCargo = (cargo) => {
    setFiltroCargo(cargo);
  };

  const limpiarFiltros = () => {
    setFiltroCargo("");
  };

  const medicosFiltrados = data.filter((medico) => {
    if (filtroCargo === "") {
      return true;
    }
    return medico.cargo.includes(filtroCargo);
  });

  return (
    <div>
      <div>
        <button onClick={() => filtrarPorCargo("Director Médico")}>
          Directores Médicos
        </button>
        <button onClick={() => filtrarPorCargo("Practicante")}>
          Practicantes
        </button>
        {/* Agrega más botones para otros cargos */}
        <button onClick={() => limpiarFiltros()}>Limpiar Filtros</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Matrícula</th>
            <th>Especialidad</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Ingreso</th>
            <th>Cargo</th>
            <th>Número Fijo</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {medicosFiltrados.map((medico, index) => (
            <tr key={index}>
              <td>{medico.matricula}</td>
              <td>{medico.especialidad}</td>
              <td>{medico.nombre}</td>
              <td>{medico.apellido}</td>
              <td>{medico.fecha_ingreso}</td>
              <td>{medico.cargo.join(", ")}</td>
              <td>{medico.numero_fijo}</td>
              <td>{medico.celular}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
