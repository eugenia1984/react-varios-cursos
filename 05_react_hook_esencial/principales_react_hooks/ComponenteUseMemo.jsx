import React, { useState, useMemo } from "react";

export default function ComponenteUseMemo() {
  const [ valor, setValor ] = useState(0);
  
  const fxLenta = () => {
    console.log("Ejecutando fxLenta");
    let numero = 0;
    for(let i = 0; i <9999999; i++) {
      numero++;
    }
  }
  
  const granNumero = useMemo( () => {
    return fxLenta()
  }, []);
  
  const nuevoValor = () => {
    setValor(Math.random()*10);
    console.log("OK");
  }
  
  const mismoValor = () => {
    setValor(10);
    console.log("OK");
  }
  
  return (
    <div className="container">
      <h1>Estado: {valor}</h1>
      <button onClick={nuevoValor}>Nuevo valor</button>
      <button onCLick={mismoValor}>Mismo valor</button>
    </div>
  )
} 
