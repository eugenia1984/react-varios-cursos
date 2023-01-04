import React, { useReducer } from "react";
import MiComponente from "./MiComponente";

export default function ContenedorConUseReducer() {
  const data = 
    {
      nombreComun: "Tiburon blanco",
      reino: "Animal",
      familia: "Lamnidae",
      genero: "Carchardon",
      especie:"Carcharodon carcharias",
      status: 0
    }
  
  const reducer = ( estado, accion) => {
     switch (accion.type) {
       case "seleccionar":
         return { ...estado, status: 1};
       case "desSeleccionar":
         return { ...estado, status: 0};
       default:
         throw new Error();
     }
  
  }
  
  const [ estado, dispatch ] = useReducer( reducer, data );
  
  return (
    <div className="container">
      <MiContexto.provider value={data} >
          <MiComponente />
      </MiContexto.Provider >

      <button 
        className="mt-4"
        onClick={ () => { dispatch({type:"seleccionar"})} }
       >
        Cambiar estado
      </button>
    </div>
  )
}
