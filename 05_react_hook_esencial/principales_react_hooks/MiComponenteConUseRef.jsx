import React, { useState, useRef } from "react";

function MiComponenteConUseRef() {
  
  const [ valorEstado, setValorEstado ] = useState(0);
  
  // creo un ref, una referencia hacia un valor
  // una variable mutable
  const valorRef = useRef(0);
  
  const cambiarEstado = () => {
     setValorEstado("Estado Modificado");
  }
  
  const cambiarRef = () => {
    valorRef.current = "Referencia Modificada";
    console.log(valorRef.current)
  }
  
  return (
    <div>
      <h1>Referencia: {valorRef.current}</h1>
      <h2>Estado: {valorEstado}</h2>
      <button onClick={cambiarRef}> Cambiar Ref </button>
      <button onClick={cambiarEstado> Cambiar Estado </button>
    </div>
  )
}

export default MiComponenteConUseRef;
