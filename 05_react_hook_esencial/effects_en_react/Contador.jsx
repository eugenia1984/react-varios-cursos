import React, { useEffect,  useState } from "react";

export default function Contador() {
  
  const [ conteo, setConteo ] = useState(1);
  const [ opcion, setOpcion ] = useState({ 
    titulo:"texto", 
    valor: 1
  });
  
  useEffect( () => {
    conosle.log("Test");
    // setConteo(conteo + 1);
  }, [opcion.valor])
  
  const metodoUno = () => {
     setOpcion( { 
       ...opcion,
       titulo: "opcion.titulo + "."
     })
  }
  
  const metodoDos = () => {
    setOpcion( { 
       ...opcion,
       valor: "opcion.valor + 1
     })
  }
  
  return (
    <div>
      <button onClick={metodoUno}>Primer evento </button>
      <button onClick={metodoDos}>Segundo evento </button>
    </div>
  )
}
