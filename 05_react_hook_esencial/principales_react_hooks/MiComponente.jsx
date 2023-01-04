import React, { useContext } from "react";
import { MiContexto } from "./Contenedor";

export default function MiComponente() {
  const valor = useContext(MiContexto)
  
  return (
    <div>
      Valor: {valor}
    </div>
  )
}
