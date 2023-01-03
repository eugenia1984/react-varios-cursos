import React, { useState, useEffect } from "react";

export default function MiComponente() {
  
  const [ nombre, setNombre ] = useState(1); // el valor por defecto dle estado, el initialValue
                                         
  useEffect( () => {
    console.log(`effect: ${nombre}`);
  })
  
  const metodo = () => {
    setNombre(nombre + 1);
  }
  
  return (
    <div>
      <h1 onClick={metodo}> {nombre} </h1>
    </div>
  )
}
