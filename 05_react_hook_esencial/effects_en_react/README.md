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

Estamos escuchando el evento **onCLick**, al hacer click se va a tener un **cambio de estado**, del valor inciial por medio dle setter lo cambio. Y voy a tener un efecto secundario la modificarse lo que se está observando, entonces voy a ir modificando el valor.

Se pueden realizar procesos adicionales en el código, cada vez que se modifica el estado.

---

## :star: 2 - Rastrear cambios del estado con el hook useEffect

---

## :star: 3 - Vincular Effects con propiedades especificas del estado

---

## :star: 4 - Reemplazar componentDodMount con React Hooks

---

## :star: 5 - Reemplazar componentDidUpdate con React Hook

---

## :star: 6 - Reemplazar componentWillUnmount con React Hooks

---

## :star 7 - Actualización de datos con el Hooks de Effects

---

## :star: 8 - Importar datos externos con useEffect

---
