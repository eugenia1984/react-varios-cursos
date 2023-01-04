import React, { useEffect, useState } from "react";

export default function MiComponenteDatosExternos() {
  // vamos a importar los initial values de una fuente externa
  const [ lista, setLista ] = useState( []);
  
  // para cuando se monte el componente
  useEffect( () => {
    const URL = "data/lista.json";
    
    // traigo los datos del JSON
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        // lo tomamos de formato json y procesamos
        const json = await response.json();
        // seteo los datos
        setLista(json);
        
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, [])
  
  // para cuando se cambie la lista se usara este useEffect
  useEffect( () => {
    // actualizar la lista del carrito de compras
    actualizarCarritoDeCompra();
  }, [lista])
  
  const [ seleccionados, setSeleccionados ] = useState();
  
  const agregarALista = (e) => {
    const nuevaLista = lista.map( (producto) => 
      producto.nombre === e.target.value ? { ...producto, status: (e.target.checked)? 1 : 0} : producto
    );

    setLista(nuevaLista);
  };
  
  const actualizarCarritoCompra = () => {
    const nuevoCarrito = lista
      .filter( (producto) => producto.status === 1)
      .map( (producto) => producto.nombre);
    
    setSeleccionados(nuevoCarrito);
    
    
  }
  
  const listaOpciones = lista.map( ({ nombre, precio }) => {
    <li 
      key={nombre.replace(" ", "").toLowerCase()} 
      onChange={agregarLista}
      className?"list-group-item"
    > 
        <input type="checkbox" value={nombre}/> ${precio} {nombre}
    </li>
  })
  
  return (
    <div className="container">
      <ul className="list-group> {listaOpciones} </ul>
      <div className="alert alert-warning" role="alert">
        {seleccionados.map( (tag, 1) => [1 < 0 && ", " , <>{tag}</>])}
      </div>
      <div></div>
    </div>
  );
} 
