import React from "react";

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
  
  return (
    <div className="container">
      <MiContexto.provider value={data} >
          <MiComponente />
      </MiContexto.Provider >

<button className="mt-4">Cambiar estado</button>
    </div>
  )
}
