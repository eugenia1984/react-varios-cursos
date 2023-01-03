import React, { useState, useEffect } from "react";

export default function MiComponenteCambios() {
  
  const [ nombre, setNombre ] = useState(1); // el valor por defecto dle estado, el initialValue
                                         
  useEffect( () => {
    console.log(`effect: ${nombre}`);
    document.title = `Cambio de estado: ${nombre}`
  })
  
  const metodo = () => {
    setNombre(nombre + 1);
  }
  
  return (
    <div>
      <h1 onClick={metodo}> EFFECT </h1>
    </div>
  )
}
