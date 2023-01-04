import React from "react";
import MiComponente from "/MiComponente";

export default function Contenedor() {
  return (
    <div>
      <MiContexto.Provider value={10}>
        <MiComponente />
      </MiContexto.Provider>
    </div>
  )
}

// creo mi contexto
export const MiContexto = React.createContext(null);
