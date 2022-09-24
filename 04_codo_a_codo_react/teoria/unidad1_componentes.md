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

Los distintos componentes se apoyarán en otros para solucionar problemas mayores y al final la aplicación será un conjunto de componentes que trabajan entre sí.

Este modelo de trabajo tiene varias ventajas, como:

- la facilidad de mantenimiento

- depuración

- escalabilidad


A menudo, las actualizaciones se convierten en un problema porque la aplicación tiene una lógica compleja y los cambios en un componente pueden afectar a otros. Para resolver el problema, Facebook ha complementado React con la capacidad de **reutilizar componentes del sistema**, y los desarrolladores lo definen como una de las mejores características de React js.

 
La reutilización de activos es bien conocida entre los diseñadores, que suelen volver a emplear los mismos objetos digitales. Puede comenzar con los **componentes más finos** (casilla de verificación, botón, etc.), luego pasar a los **componentes de envoltura compuestos por estos pequeños elementos** y avanzar hasta el **componente raíz principal**. Todos los componentes tienen su lógica interna, lo que facilita su manipulación y definición. Este enfoque garantiza un **aspecto uniforme de la aplicación** y **facilita el mantenimiento y el crecimiento de la base de código**.


### Ventajas:

- Favorece la separación de responsabilidades: cada componente debe tener una única tarea.

- Al tener la lógica de estado y los elementos visuales por separado, es más fácil reutilizar los componentes.

- Se simplifica la tarea de hacer pruebas unitarias.

- Puede mejorar el rendimiento de la aplicación.

- La aplicación es más fácil de entender.

---

## 3 - Propiedades en React (props)


En React, los **Props** se refieren a **las propiedades las cuales cumplen un rol importante en el proceso de desarrollo de una aplicación o página web**. Los **componentes** son los **bloques de construcción** de React y estos componentes usan **Props para mejorar su funcionalidad y poder reusar el código**.

### ¿ Cuál es el propósito de los Props de React ?

Como ya sabemos, React es uno de los frameworks JavaScript más usados en los últimos años. 

Los Props tiene una importante función: **ellos pasan los datos de un componente a otro, ofreciendo así un canal por el medio del cual los componentes se puede comunicar**.

Hay una regla que debes aprender antes de comenzar a usar los Props de React: **todos los componentes deben funcionar de la misma manera que una función pura (con respecto a los props)**.

### Cómo usar los Props de React para hacer un encabezado

1. Primero, debes pasar el Prop como un **atributo** al componente funcional.
 
2. Lluego de esto podrás tener acceso al Prop y a los datos dentro del componente.

 

### Usar un Prop en el componente de encabezado

```JSX 
function Header(props) {
  return (
    <div>
      <h1> {props.title} </h1>
    </div>
  );
}

export default Header;
```
 

El componente de encabezado anterior toma un atributo prop y lo usa para acceder a los datos sobre el título de la aplicación. Para que este componente se vea en la interfaz del usuario, debes insertarlo en el archivo App.js de React.

 

-> El archivo App.js

```JSX
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header title='administrador' />
    </div>
  );
}

export default App;
```
 

Este código muestra el archivo App.js en React, el cual se procesa en la interfaz de usuario. 

El componente de la aplicación muestra el Header o Encabezado en la interfaz usando el tag "Header" y este tag contiene un Prop y un valor de Prop, por lo que ahora tiene acceso a una propiedad de título que se puede usar en esta sección.

### Usar Props predeterminados

El archivo App.js actualizado debe verse así:

```JSX
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
```

Al hacer esto, la interfaz de usuario mostrará un encabezado en blanco pero hay una simple manera de solucionar este problema. Añadiendo un Prop predeterminado al componente que utiliza el Prop, puedes efectivamente resolver el problema. Incluso así el componente no reciba un Prop, siempre tendrá uno con el que pueda trabajar.

 

### Ejemplo de uso de un Prop predeterminado

```JSX
function Header(props) {
  return (
    <div>
      <h1> {props.title} </h1>
    </div>
   );
}

Header.defaultProps ={
  title: 'Nombre de App'
}

export default Header;
```


Con este código, el encabezado ahora podrá utilizar un Prop predeterminado para mostrar el encabezado en la interfaz de usuario, sin necesidad de insertar un Prop solo para esta función en el archivo App.js.

---

## 4 - Tipos de Componentes

---
