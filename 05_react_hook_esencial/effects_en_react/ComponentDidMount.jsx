import React, { useEffect, useState } from "react";

export default function ComponentDidMount() {
  
  const [ conteo, setConteo ] = useState(1);
  const [ opcion, setOpcion ] = useState({ titulo: "Mi texto", valor: 1});
  
  // cada vez que se monta, inicializa
  useEffect( () => {
    document.title = `Primer conteo : ${conteo}`;
  }, [])
  
  // cada vez que se actualiza
  useEffect( () => {
    document.title = `Conteo didUpdate : ${conteo}`;
  }, [])
  
  // cuando se desmonta
  useEffect( () => {
    document.title = `Conteo didUpdate : ${conteo}`;
    return () => {
    }
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
