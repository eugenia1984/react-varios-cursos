import React, { useState, useEffect } from "react";

export default function MiComponente() {
  
  const [ nombre, setNombre ] = useState("Nombre"); // el valor por defecto dle estado, el initialValue
                                         
  useEffect( () => {
    console.log("effects")
  })
  
  const metodo = () => {
    setNombre("PRUEBA")
  }
  
  return (
    <div>
      <h1 onClick={metodo}> {nombre} </h1>
    </div>
  )
}
