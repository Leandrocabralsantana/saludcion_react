import {useState} from 'react'

export const Poe = () => {
    const [emergency, setEmergency] = useState(0); // Estado para almacenar el tipo de emergencia actual

    // Función para cambiar entre tipos de emergencias
    const changeEmergency = (type) => {
      setEmergency(type);
    };
  
    return (
      <div>
        <h3>Emergencias Hospitalarias: ¿Qué hacer en situaciones críticas?</h3>
        <p>Selecciona una emergencia para recibir instrucciones detalladas:</p>
  
        {/* Botones para cambiar entre tipos de emergencias */}
        <button onClick={() => changeEmergency(1)}>Paro Cardíaco</button>
        <button onClick={() => changeEmergency(2)}>Trauma Grave</button>
        <button onClick={() => changeEmergency(3)}>Paro Respiratorio</button>
  
        {/* Renderizado condicional basado en el tipo de emergencia */}
        {emergency === 1 && (
          <div>
            <h2>Paro Cardíaco</h2>
            <p>1. Lleve un desfibrilador al paciente si está disponible en el área.</p>
            <p>2. Comience la Reanimación Cardiopulmonar (RCP) con compresiones torácicas y ventilaciones.</p>
            <p>3. Solicite ayuda médica urgente utilizando el código correspondiente.</p>
          </div>
        )}
  
        {emergency === 2 && (
          <div>
            <h2>Trauma Grave</h2>
            <p>1. Estabilice la escena asegurando la seguridad del área y del paciente.</p>
            <p>2. Evalúe la gravedad y naturaleza de las lesiones.</p>
            <p>3. Movilice al paciente con cuidado, evitando movimientos bruscos, si es necesario.</p>
          </div>
        )}
  
        {emergency === 3 && (
          <div>
            <h2>Paro Respiratorio</h2>
            <p>1. Coloque al paciente en una posición que facilite la apertura de las vías respiratorias.</p>
            <p>2. Inicie la ventilación asistida con bolsa y máscara si el paciente no está respirando.</p>
            <p>3. Notifique al equipo médico utilizando el código de emergencia correspondiente.</p>
          </div>
        )}
      </div>
    );
  }

