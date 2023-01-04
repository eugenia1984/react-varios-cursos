import React from "react";
import MiComponente from "/MiComponente";

export default function Contenedor() {
  return (
    <div>
      <MiComponente />
    </div>
  )
}

// creo mi contexto
export const MiContexto = React.createContext(null);
