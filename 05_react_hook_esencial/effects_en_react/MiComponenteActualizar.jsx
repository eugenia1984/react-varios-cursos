import React, { useEffect, useState } from "react";

export default function MiComponenteActualizar() {

  const [ lista, setLista ] = useState( [
    { nombre: "leche", status: 0, precio: 4 },
    { nombre: "fruta" , status:0 , precio: 5 },
    { nombre: "vinagre" , status:0 , precio: 3 },
    { nombre: "cafe" , status:0 , precio: 10 }
  ]);
  
  const [ seleccionados, setSeleccionados ] = useState();
  
  const agregarALista = (e) => {
    const nuevaLista = lista.map( (producto) => 
      producto.nombre === e.target.value ? { ...producto, status: (e.target.checked)? 1 : 0} : producto
    );

    setLista(nuevaLista);
  };
  
  return (
  );
} 
