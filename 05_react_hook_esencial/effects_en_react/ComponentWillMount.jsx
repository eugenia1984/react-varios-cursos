import React, { useEffect, useState } from "react";
export { unmountComponentAtNode, render } from "react-dom";

export default function ComponentWillMount() {
  
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
    console.log("Componente agregado")
    return () => {
        console.log("Componente eliminado")
    }
  }, [])
  
  const cambiarEstado = () => {
    setConteo( conteo + 1);
    setOpcion( {
      ...opcion,
      titulo: opcion.titulo + "."
    })
  };
  
  const eliminar = () => {
    unmountComponentAtNode(document.getElementById("root"));
  };
  
  return (
    <div className="container">
      <button onClick={cambiarEstado}>Cambiar Estado</button>
      <button onClick={eliminar}Eliminar Componente</button>
      <h1>{opcion.titulo}</h1>
    </div>
  );
}
