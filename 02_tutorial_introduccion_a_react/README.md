# Tutorial : Introducción a React

Desde la web de React -> [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

---


# Este tutorial está dividido en varias secciones:

- **Configuración para el tutorial** te dará un punto de partida para seguir el tutorial.

- **Visión general** te enseñará los **fundamentos** de React: componentes, props y estado.

- **Completando el juego** te enseñará las **técnicas más comunes** en desarrollo de React.

- **Agregando viaje en el tiemp**o** te dará una **visión más profunda** de las fortalezas únicas de React.

---

## 1 - ¿Qué estamos construyendo?

En este tutorial, te mostraremos cómo construir un juego de tic-tac-toe interactivo con React.

Puedes ver lo que construiremos aquí: [Resultado Final](https://codepen.io/gaearon/pen/gWWZgR?editors=0010). El objetivo de este tutorial es ayudarte a entender React y su sintaxis.

---

## 2 - Configuración para el tutorial

Hay dos maneras de completar este tutorial: puedes escribir el código en tu navegador, o puedes configurar tu entorno de desarrollo local en tu computador.

### Opción de configuración 1: Escribe código en el navegador

¡Esta es la forma más rápida de empezar!

Primero, abre este código inicial en una nueva pestaña. La nueva pestaña deberá mostrar un tablero vacío del juego de tic-tac-toe y código de React. Estaremos editando el código de React en este tutorial.

Ahora puedes saltarte a la segunda opción de configuración o ir a la sección de visión general para obtener una idea general de React.

### Opción de configuración 2: Entorno de desarrollo local

¡Esta es completamente opcional y no es requerida para este tutorial!


-> *Instrucciones para seguir adelante localmente usando tu editor de texto preferido*

Esta configuración requiere más trabajo pero te permite completar el tutorial usando un editor de tu elección.

 Aquí los pasos a seguir:

1- Asegúrate de tener una versión reciente de Node.js instalada, versión 14 en adelante, y npm desde 5.6 en adelnte.

2- Sigue las instrucciones de instalación de Create React App para hacer un nuevo proyecto.

```
npx create-react-app my-app
cd my-app
npm start
````

3- Elimina todos los archivos en la carpeta src/ del nuevo proyecto.

*Nota*: No elimines la carpeta src por completo, solo los archivos de código fuente originales dentro de ella. Reemplazaremos los archivos de código fuente por defecto con ejemplos para este proyecto en el siguiente paso.

```
cd my-app
cd src

# Si usas Mac ó Linux:
rm -f *

# Ó, si usas Windows:
del *

# Luego, regresa a la carpeta del proyecto
cd ..
```

4- Agrega un archivo llamado **index.css** en la carpeta src/ con este código CSS.

5- Agrega un archivo llamado **index.js** en la carpeta src/ con este código JS.

6- Agrega estas 3 líneas en la parte superior del archivo index.js en la carpeta src/:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

Ahora, si tu ejecutas ```npm start``` en la carpeta del proyecto y abres *http://localhost:3000* en el navegador, deberías ver un campo de tic-tac-toe vacío.

---

## 3 - Visión General

Ahora que está tu entorno configurado, ¡vamos a obtener una visión general de React!


### ¿Qué es React?

React es una librería de JavaScript declarativa, eficiente y flexible para construir interfaces de usuario. 

Permite componer IUs complejas de pequeñas y aisladas piezas de código llamadas “componentes”.

React tiene pocos tipos diferentes de componentes, pero vamos a empezar con la subclase **React.Component**:

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Lista de compras para {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Uso de ejemplo: <ShoppingList name="Mark" />
```

Vamos a ver las etiquetas divertidas que parecen XML pronto. Usamos componentes para decirle a React lo que queremos que se vea en la pantalla. Cuando nuestros datos cambian, React actualizará eficientemente y volverá a renderizar (re-render) nuestros componentes.

Aquí, ShoppingList es una clase de componente de React, ó tipo de componente de React. Un componente acepta parámetros, llamados props (abreviatura de “propiedades”), y retorna una jerarquía de vistas a mostrar a través del método render.

El método render retorna una descripción de lo que quieres ver en la pantalla. React toma la descripción y muestra el resultado. En particular, render retorna un elemento de React, el cuál es una ligera descripción de lo que hay que renderizar. La mayoría de desarrolladores de React usan una sintaxis especial llamada **JS** que facilita la escritura de estas estructuras. La sintaxis ```<div /> ``` es transformada en tiempo de construcción a ```React.createElement('div')```. El ejemplo anterior es equivalente a:

```JavaScript
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```


Si tienes curiosidad, **createElement()** está descrito en más detalle en la referencia de la API, pero no lo usaremos en este tutorial. En cambio, seguiremos usando JSX.

JSX viene con todo el poder de JavaScript. Puedes poner cualquier expresión de JavaScript en el interior de las llaves dentro de JSX. Cada elemento de React es un objeto de JavaScript que puedes almacenar en una variable o pasar alrededor de tu programa.

El componente anterior ShoppingList solo renderiza componentes pre-construidos del DOM como``` <div />``` y ```<li />```. Pero, también puedes componer y renderizar componentes personalizados de React. Por ejemplo, ahora podemos referirnos al listado de compras completo escribiendo``` <ShoppingList />```. Cada componente de React está encapsulado y puede operar independientemente; esto te permite construir IUs complejas desde componentes simples.

### Inspeccionando el código inicial

Si vas a trabajar el tutorial en tu navegador, abre este código en un nuevo tab: Código inicial. Si vas a trabajar el tutorial localmente, abre src/index.js en la carpeta de tu proyecto (ya has tocado este archivo durante la configuración).

Este código inicial es la base de lo que estás construyendo. 

Nos han provisto los estilos de CSS así que solo necesitas enfocarte en aprender React y programar el juego tic-tac-toe.

Inspeccionando el código, notarás que tenemos 3 componentes de React:

- Square

- Board

- Game

El componente **Square** renderiza un simple ```<button>``` y el **Board** renderiza 9 cuadrados. 

El componente **Game** renderiza un table con valores de posición por defecto que modificaremos luego. 

Actualmente no hay componentes interactivos.

### Pasando datos a través de props

Solo para ensuciarnos las manos, vamos a pasar algo de datos de nuestro componente Board a nuestro componente Square.

Recomendamos firmemente escribir el código a mano mientras sigues el tutorial sin copiar y pegar. Esto te ayudará a desarrollar una memoria muscular y un entendimiento más sólido.

En el método renderSquare de Board, cambia el código para pasar una prop llamada value al Square:

```JavaScript
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

Cambia el método render de Square para mostrar ese valor, reemplazando {/* TODO */} con {this.props.value}:


```JavaScript
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```
¡Felicidades! Acabas de “pasar una prop” de un componente padre Board a un componente hijo Square. Pasando props es cómo la información fluye en apps de React, de padres a hijos.



###  Haciendo un componente interactivo
Vamos a rellenar el componente de Square con una “X” cuando damos click en él. Primero, cambia la etiqueta button que es retornada del método render() del componente Square a esto:


```JavaScript
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={function() { console.log('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
```

Si haces click en un cuadrado ahora, deberías ver ‘click’ en la consola de desarrollo de tu navegador.

Nota

Para continuar escribiendo código sin problemas y evitar el confuso comportamiento de this, vamos a usar la sintaxis de funciones flecha para manejar eventos aquí y más abajo:


```JavaScript
class Square extends React.Component {
 render() {
   return (
     <button className="square" onClick={() => console.log('click')}>
       {this.props.value}
     </button>
   );
 }
}
```

Ten en cuenta cómo con onClick={() => console.log('click')}, estamos pasando una función como valor de la prop onClick. React solo llamará a esta función después de un click. Olvidar () => y escribir onClick={console.log('click')} es un error común, y se ejecutaría cada vez que el componente se re-renderice.

Como un siguiente paso, queremos que el componente Square “recuerde” que fue clickeado, y se rellene con una marca de “X”. Para “recordar” cosas, los componentes usan estado.

Los componentes de React pueden tener estado estableciendo this.state en sus constructores. this.state debe ser considerado como privado para un componente de React en el que es definido. Vamos a almacenar el valor actual de un cuadrado en this.state, y cambiarlo cuando el cuadrado es clickeado.

Primero, vamos a agregar el constructor a la clase para inicializar el estado:

```JavaScript
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => console.log('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

Nota

En las clases de JavaScript, necesitas siempre llamar super cuando defines el constructor de una subclase. Todas las clases de componentes de React que tienen un constructor deben empezar con una llamada a super(props).

Ahora vamos a cambiar el método render de Square para mostrar el valor del estado actual cuando es clickeado:

Reemplaza this.props.value por this.state.value dentro de la etiqueta <button>.

Reemplaza el manejador de evento onClick={...} por onClick={() => this.setState({value: 'X'})}.

Pon las props className y onClick en líneas separadas para mejor legibilidad.

Luego de estos cambios, la etiqueta <button> que es retornada del método render de Square se ve así:

```JavaScript
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}
```

Llamando a this.setState desde el manejador onClick en el método render de Square, decimos a React que re-renderice el cuadrado siempre que su <button> es clickeado. Luego de la actualización, el this.state.value del cuadrado será 'X', así que veremos X en el tablero de juego. Si tu haces click en cualquier cuadrado, una X debería mostrarse en el mismo.

Cuando llamas setState en un componente, React actualiza automáticamente los componentes hijos dentro del mismo también.

### Herramientas de desarrollo

La extensión de React Devtools para Chrome y Firefox te permite inspeccionar el árbol de componentes de React con tus herramientas de desarrollo del navegador.

React DevTools te permite revisar las props y el estado de tus componentes de React.

Después de instalar React DevTools, puedes hacer click derecho en cualquier elemento de la página, click en “Inspeccionar elemento” para abrir las herramientas de desarrollo, y la pestaña de React aparecerá como la última pestaña a la derecha. Usa “⚛️ Components” para inspeccionar el árbol de componentes.

Sin embargo, notar que hay unos cuantos pasos extras para hacerlo funcionar con CodePen:

Loguéate o regístrate y confirma tu correo electrónico (requerido para prevenir spam).

Click en el botón “Fork”.

Click en “Change View” y luego selecciona “Debug mode”.

En la nueva pestaña que se abre, el devtools debería ahora tener una pestaña de React.

---

## 4 - Completando el juego

---

### 5 - Agregando viaje en el tiempo 


---

