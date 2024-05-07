import { useState, useEffect } from "react";
import internosData from "../assets/internosData.json";
export const InternalNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [filteredNumbers, setFilteredNumbers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmpresa, setSelectedEmpresa] = useState(1);

  useEffect(() => {
    // Filtrar números basados en la empresa seleccionada y el término de búsqueda
    const filtered = internosData.filter(
      (number) =>
        number.empresa.id_empresa === selectedEmpresa &&
        (number.piso.includes(searchTerm) ||
          number.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          number.numero.includes(searchTerm))
    );
    setFilteredNumbers(filtered);
  }, [searchTerm, selectedEmpresa, numbers]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmpresaChange = (event) => {
    setSelectedEmpresa(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <div className="filters">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar por piso, nombre o número"
        />
        <select value={selectedEmpresa} onChange={handleEmpresaChange}>
          <option value={1}>Hospital Privado de Rosario</option>
          <option value={2}>Instituto Gamma</option>

          {/* Aquí puedes agregar más opciones si hay más empresas */}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Piso</th>
            <th>Nombre</th>
            <th>Número</th>
          </tr>
        </thead>
        <tbody>
          {filteredNumbers.map((number, index) => (
            <tr key={index}>
              <td>{number.empresa.nombre}</td>
              <td>{number.piso}</td>
              <td>{number.nombre}</td>
              <td>{number.numero}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
