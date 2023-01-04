# :book: React Hooks Esencial (LinkedIn Learning)

---

## :star2: React Hooks para gestionar Effects

---

## :star: 1 -  ¿Qué son los Effects en React? 


Los **efectos** y especialmente el hook **useEffect** está relacionado con elementos como el **cambio del estado**.

:computer: [Ejemplo de código](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/MiComponente.jsx)


```JSX
import React, { useState, useEffect } from "react";

export default function MiComponente() {
  
  const [ nombre, setNombre ] = useState(1); // el valor por defecto dle estado, el initialValue
                                         
  useEffect( () => {
    console.log(`effect: ${nombre}`);
  })
  
  const metodo = () => {
    setNombre(nombre + 1);
  }
  
  return (
    <div>
      <h1 onClick={metodo}> {nombre} </h1>
    </div>
  )
}
```

Estamos escuchando el evento **onClick**, al hacer click se va a tener un **cambio de estado**, del valor inciial por medio dle setter lo cambio. Y voy a tener un efecto secundario la modificarse lo que se está observando, entonces voy a ir modificando el valor.

-> Cada vez que hagamos click en el ```h1``` se modificará el estado. Es una relación entre un **evento** y un **método**. Y al estar **modificando le estado** se incluye un **useEffect**, que se va a activar cada ve que se **modifique el estado**.

Se pueden realizar procesos adicionales en el código, cada vez que se modifica el estado.

---

## :star: 2 - Rastrear cambios del estado con el hook useEffect

El **useEffect** se puede utilizar para tareas en las cuales no se va a estar modificando el estado, entonces podemos traquear otros cambios de estado, llamadas externas, procesos adicionales, rastrear algunos elementos hasta que estén disponibles ciertas condiciones.


Ejemplo en código, no modifico el DOM:

```JSX
import React, { useState, useEffect } from "react";

export default function MiComponenteCambios() {
  
  const [ nombre, setNombre ] = useState(1); // el valor por defecto dle estado, el initialValue
                                         
  useEffect( () => {
    console.log(`effect: ${nombre}`);
    document.title = `Cambio de estado: ${nombre}`
  })
  
  const metodo = () => {
    setNombre(nombre + 1);
  }
  
  return (
    <div>
      <h1 onClick={metodo}> EFFECT </h1>
    </div>
  )
}
```

:computer: -> [aca esta en codigo](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/MiComponenteCambios.jsx)

- Un **error**, algo que **no** debe hacerse en el código.
```JSX
 useEffect( () => {
    console.log(`effect: ${nombre}`);
    document.title = `Cambio de estado: ${nombre}`;
    setNombre(nombre + 1);
  })
```

Voy a entrar en un loop infinito, se comienza a aumentar sin parar el valor del contador. Porque cada vez que se modifica el estado llamamos a effect. Effect a su vez llama a el estado y así quedamos en un loop infinito. -> **Nunca utilizar una llamada al estado que se modifique dentro de un useEffect**

---

## :star: 3 - Vincular Effects con propiedades especificas del estado

Tengo un **array de dependencia** en el **useEffect++, por lo que solo se va a ejecutar cuando tenga un cambio en el **valor** de **opción**, por loq ue solo se llamará al hacer click e invocar el metodoDos.

```JSX
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
```

:computer: -> [Ver el codigo](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/Contador.jsx)


---

## :star: 4 - Reemplazar componentDidMount con React Hooks

En base a este **componente de clase** con el método **componenteDidMount()**:

```JSX
import React, { Component } from "react";

class App extends Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      data: "test"
    }
  }

  getData() {}

  componenteDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
      {this.state.data}
      </div>
    )
  }
}

export default App;
```

Se va a cambiar a un **componente funcional** para manejarlo con un **hook**.

Con el hook **useState** creo unas propiedades y tengo el método **cambiarEstado** que modifica el valor de una de las propiedades del estado.

Hay un **boton** que invoca al método** y dentro del DOM renderizo la infomración del título, en cada click le voy a cambiar el estado y agregar un punto al texto.

Si quiero reemplaar el **componentDidMount** debo ejecutarlo **una única vez** en el momento en que **Se monta (se inicializa)** el componente.

Necesito un **useEffect** para saber cuantas veces hicimos click en el boton y modificamos el estado.

Pero... como está ahora **el useEffect se ejecuta muchas veces**, no una unica vez:

```JSX
import React, { useEffect, useState } from "react";

export default function MiComponenteHook() {
  
  const [ conteo, setConteo ] = useState(1);
  const [ opcion, setOpcion ] = useState({ titulo: "Mi texto", valor: 1});
  
  useEffect( () => {
    document.title = `Conteo : ${conteo}`;
  })
  
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
```

Lo que voy a hacer es agregar el **array de dependencia**:

```JSX
useEffect( () => {
  document.title = `Conteo : ${conteo}`;
}, [])
```


En un **componente de clase**, tengo:

```JSX
componentDidUpdate() {
    this.setData();
  }
  ```
  
  Lo tengo que reemplazar por un **hook** en un **componente funcional**.
  
:computer: -> [aca esta el codigo](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/MiComponenteHook.jsx)

---

## :star: 5 - Reemplazar componentDidUpdate con React Hook


El **componentDidUpdate** se ejecuta cada vez que se realiza una **actualización** dentro de los elementos del componente.

Tomando el mismo ejemplo anterior, modificando el **useEffect**:

```JSX
useEffect( () => {
  document.title = `Primer conteo : ${conteo}`;
}, [])

// como  componentDidUpdate, se ejecuta cada vez que hay una actualizacion del estado
// porque no tiene el dependecy array
useEffect( () => {
  document.title = `Conteo : ${conteo}`;
})
```

Puede ser una forma muy intensiva, se puede ejecutar muchas veces, hay que tener cuidado cuando se utiliza asi.

---

## :star: 6 - Reemplazar componentWillUnmount con React Hooks


El **componentWillUnmount** se ejecuta en el momento en que se va a **remover el componente**, es útil para hacer limpieza de cualquier proceso que tengamos ejecutando dentro del componente, para evitar fugas de memoria. Puede ser reemplazado utilizando el **useEffect**.

En este caso vamos a tener un **return** dentro del **useEffect** que se ejecutará al momento de desmontar el componente.


```JSX
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
```

:computer: -> [aca esta el codigo](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/ComponentWillMount.jsx)

---

## :star: 7 - Actualización de datos con el Hooks de Effects


Ejemplo de codigo con un carrito de compra que tiene elementos y al seleccinarlos se agregan al carrito.

```JSX
import React, { useEffect, useState } from "react";

export default function MiComponenteActualizar() {

  const [ lista, setLista ] = useState( [
    { nombre: "leche", status: 0, precio: 4 },
    { nombre: "fruta" , status:0 , precio: 5 },
    { nombre: "vinagre" , status:0 , precio: 3 },
    { nombre: "cafe" , status:0 , precio: 10 }
  ]);
  
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
```

Con el useEffect primero se hace el cambio de la lista y luego se procesan los valores.

Si tendria las dos cosas en **agregarALista**, entonces siempre estaría un producto atrasada.

---

## :star: 8 - Importar datos externos con useEffect

En el proyecto dentro de ```public > data > lista.json``` armo un json para tomar los datos desde ahí, son los mismos datos que teníamos antes:

lista.json
```JSON
[
  { 
    "nombre": "leche", 
    "status": 0, 
    "precio": 4 
  },
  { 
    "nombre": "fruta" , 
    "status":0 , 
    "precio": 5 
  },
  { 
    "nombre": "vinagre" , 
    "status":0 , 
    "precio": 3 
   },
   { 
      "nombre": "cafe" , 
      "status":0 , 
      "precio": 10 
   }
]
```

Con todas las propiedades entre " ".


:computer: -> [aca esta la lista](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/lista.json)


Y en mi componente:

```JSX
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
  ```
  
---
