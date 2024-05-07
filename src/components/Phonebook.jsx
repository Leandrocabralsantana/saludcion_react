import { useState } from "react";
import agendaData from "../assets/agendaData.json";
import "../styles/Phonebook.css";

export const Phonebook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  const filteredData = agendaData.filter((item) => {
    return (
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.telefonos.some((telefono) =>
        telefono.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "nombre") {
      return a.nombre.localeCompare(b.nombre);
    } else if (sortBy === "apellido") {
      return a.apellido.localeCompare(b.apellido);
    }
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={() => handleSort("nombre")}>Ordenar por Nombre</button>
      <button onClick={() => handleSort("apellido")}>
        Ordenar por Apellido
      </button>
      <table style={{ width: "100%" }}>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td style={{ width: "33%" }}>
                {item.nombre} {item.apellido}
              </td>
              <td style={{ width: "33%" }}>{item.descripcion}</td>
              <td style={{ width: "33%" }}>{item.telefonos.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
