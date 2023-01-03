# :book: React Hooks Esential (LinkedIn Learning)

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

:computer: -> [aca esta el codigo](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/effects_en_react/MiComponenteHook.jsx)

---

## :star: 5 - Reemplazar componentDidUpdate con React Hook

---

## :star: 6 - Reemplazar componentWillUnmount con React Hooks

---

## :star 7 - Actualización de datos con el Hooks de Effects

---

## :star: 8 - Importar datos externos con useEffect

---
