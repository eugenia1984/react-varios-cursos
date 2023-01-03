import React, { useEffect, useState } from "react";

export default function MiComponenteHook() {
  
  const [ conteo, setConteo ] = useState(1);
  const [ opcion, setOpcion ] = useState({ titulo: "Mi texto", valor: 1});
  
  useEffect( () => {
    document.title = `Conteo : ${conteo}`;
  }, [])
  
  const cambiarEstado = () => {
    setConteo( conteo + 1);
    setOpcion( {
      ...opcion,
      titulo: opcion.titulo + "."
    })
  };
  
  return (
    <div className="container">
      <button onClick={cambiarEstado}>Cambiar Estado</button>
      <h1>{opcion.titulo}</h1>
    </div>
  );
}
