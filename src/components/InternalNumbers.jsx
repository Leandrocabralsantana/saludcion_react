import { useState, useEffect } from "react";
import internosData from "../assets/internosData.json";
import { useInternalNumbers } from "../hooks/useInternalNumbers";
export const InternalNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [filteredNumbers, setFilteredNumbers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInstitution, setSelectedInstitution] = useState(1);
  const { getAllInternalNumbers, getFloorDescription} = useInternalNumbers();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const internalNumbers = await getAllInternalNumbers();
        console.log(internalNumbers)
        setNumbers(internalNumbers);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  useEffect(() => {
    const filtered = numbers.filter((number) => {
      const matchesSearchTerm = 
        number.internal_number_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getFloorDescription(number.internal_number_floor).toLowerCase().includes(searchTerm.toLowerCase()) ||
        number.external_number_info.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesInstitution = number.id_institution === selectedInstitution;

      return matchesSearchTerm && matchesInstitution;
    });
    setFilteredNumbers(filtered);
  }, [ searchTerm, selectedInstitution]);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmpresaChange = (event) => {
    setSelectedInstitution(parseInt(event.target.value));
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
        <select value={selectedInstitution} onChange={handleEmpresaChange}>
          <option value={1}>Hospital Privado de Rosario</option>
          <option value={2}>Instituto Gamma</option>

        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Número interno</th>
            <th>Nombre</th>
            <th>Piso</th>
            <th>Número externo</th>
          </tr>
        </thead>
        <tbody>
          {filteredNumbers.map((number, index) => (
            <tr key={index}>
              <td>{number.internal_number_code}</td>
              <td>{number.internal_number_name}</td>
              <td>{getFloorDescription(number.internal_number_floor)}</td>
              <td>{number.external_number_info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
