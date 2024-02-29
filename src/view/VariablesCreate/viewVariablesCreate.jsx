import React, { useState } from 'react';


const VariableList = () => {
  const [variables, setVariables] = useState([]);
  const [variableName, setVariableName] = useState('');
  const [variableType, setVariableType] = useState('String');
  const [variableContent, setVariableContent] = useState('String');

  const addVariable = () => {
    if (!variableName) return; // No agregar si el nombre está vacío
    setVariables([...variables, { name: variableName, type: variableType }]);
    setVariableName(''); // Limpiar campo de nombre
  };

  return (
    <div className="p-5">
      <div className="flex gap-3 mb-4 justify-center">
        <input
          type="text"
          value={variableName}
          onChange={(e) => setVariableName(e.target.value)}
          placeholder="Nombre de la variable"
          className="p-2 rounded border border-blue-500"
        />
        <select
          value={variableType}
          onChange={(e) => setVariableType(e.target.value)}
          className="p-2 rounded border border-blue-500 text-blue-600 font-bold"
        >
          <option className="text-blue-700" value="String">String</option>
          <option className="text-blue-700" value="Number">Number</option>
          <option className="text-blue-700" value="Boolean">Boolean</option>
          {/* Agrega más tipos de datos según sea necesario */}
        </select>
        <button
          onClick={addVariable}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar Variable
        </button>
        <button
          onClick={addVariable}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Agregar Variable
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {variables.map((variable, index) => (
            <li key={index} className="bg-blue-100 border border-blue-500 text-blue-700 p-2 mb-2 rounded shadow">
            {variable.name} ({variable.type})
            </li>
            ))}
        </ul>
    </div>
  );
};
export default VariableList;
