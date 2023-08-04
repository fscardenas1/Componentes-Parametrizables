import React from "react";
import "./App.css"; // Crearemos este archivo para los estilos adicionales.
import ParametrizableButton from "./components/ParametrizableButton";

const App = () => {
  const handleButtonClick = (buttonLabel) => {
    alert(`¡Hola! Has hecho clic en el botón "${buttonLabel}"`);
  };

  return (
    <div>
      <h1 className="app-title">Componente Parametrizable de Material-UI</h1>
      <div className="button-container">
        <ParametrizableButton label="Botón Primario" color="primary" onClick={() => handleButtonClick("Botón Primario")} />
        <ParametrizableButton label="Botón Secundario" color="secondary" onClick={() => handleButtonClick("Botón Secundario")} />
        <ParametrizableButton label="Botón Éxito" color="success" onClick={() => handleButtonClick("Botón Éxito")} />
        <ParametrizableButton label="Botón Peligro" color="error" onClick={() => handleButtonClick("Botón Peligro")} />
        <ParametrizableButton label="Botón con Icono" color="info" icon="star" onClick={() => handleButtonClick("Botón con Icono")} />
      </div>
    </div>
  );
};

export default App;
