import React from "react";
import useDocumentMousePosition from "./hooks/useDocumentMousePosition";

function App() {
  
  const estaActivado = useDocumentMousePosition();
  
  return (
    <div className="container>
      <div className={`${estaActivado ? "green" : "red"} `}>
        <h1>Detectar posicion del mouse</h1>
      </div>
    </div>
   )
}

export default App;
