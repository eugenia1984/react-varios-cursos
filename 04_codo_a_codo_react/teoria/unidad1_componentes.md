# Componentes * Unidad 1

---

## Temas:

```
- Introduccion
- Diseño modular
- Propiedades en React
- Tipos de Componentes
```

---

## 1 - Introduccion

### Componentes en React

Las aplicaciones en React se construyen mediante componentes.

El potencial de este funcionamiento consiste en que podemos crear aplicaciones completas de una manera modular y de fácil mantenimiento, a pesar de su complejidad.

Pero en sí, para javascript, un **componente** no es más que **una función que recibe un objeto, al que llamaremos “props”, y retorna un elemento de React que describe que va a aparecer en la pantalla**.

React admite 2 tipos de componentes, los **funcionales** y los de **clase**, nosotros trabajaremos con componentes del tipo funcional, ya que en la actualidad se trabaja de esa forma.

### Componente de clase:

```JSX
import React from "react";

class Clase extends React.Component {
  constructor() {
    super();
    this.state = {saludo: "Hola! Soy un componente de clase"}
  }
  
  render() {
   return <h1>{this.state.saludo}</h1>
  }
}

export default Clase;
```

### Componente Funcional:

```JSX
import React from "react";

function Funcional() {
  const saludo = "Hola!Soy un componente funcional";
  
  return <h1>{saludos}</h1>
}

export default Funcional;
```

---

## 2 - Diseño modular

Los componentes permiten **separar la interfaz de usuario en piezas independientes**, **reutilizables** y pensar en cada pieza de forma totalmente aislada.

Al desarrollar **crearemos componentes para resolver pequeños distintos problemas**, que son fáciles de visualizar y comprender durante el proceso de desarrollo, por lo cual nos ahorrar mucho tiempo.

```

----------             |-----------------|
--- 1 ---              |         2       |
----------             |-----------------|

|----------|            -------   -------
|     2    |            ---3---   ---3---
|----------|    --->    -------   -------

-------                 -------   ------- 
---3---                 ---1---   ---1---
-------                 -------   ------ 

---                     --- --- --- ---
 4                       4   4   4   4
---                     --- --- --- ---

```

---

## 3 - Propiedades en React

---

## 4 - Tipos de Componentes

---
