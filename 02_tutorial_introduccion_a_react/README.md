# <img src="https://img.icons8.com/officel/50/null/react.png"/> Tutorial : Introducción a React

Desde la web de React -> [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

---


## Este tutorial está dividido en varias secciones:

- **1 - Configuración para el tutorial** te dará un punto de partida para seguir el tutorial.

- **2 - Visión general** te enseñará los **fundamentos** de React: componentes, props y estado.

- **3 - Completando el juego** te enseñará las **técnicas más comunes** en desarrollo de React.

- **4 - Agregando viaje en el tiemp**o** te dará una **visión más profunda** de las fortalezas únicas de React.

---

## <img src="https://img.icons8.com/clouds/50/null/question-mark.png"/> ¿Qué estamos construyendo?

En este tutorial, te mostraremos cómo construir un **juego de tic-tac-toe interactivo con React**.

Puedes ver lo que construiremos aquí: [Resultado Final](https://codepen.io/gaearon/pen/gWWZgR?editors=0010). El objetivo de este tutorial es ayudarte a entender React y su sintaxis.

---

## :star: 1 - Configuración para el tutorial

Hay dos maneras de completar este tutorial: puedes escribir el código en tu navegador, o puedes configurar tu entorno de desarrollo local en tu computador.

### Opción de configuración 1: Escribe código en el navegador

¡Esta es la forma más rápida de empezar!

Primero, abre este código inicial en una nueva pestaña. La nueva pestaña deberá mostrar un tablero vacío del juego de tic-tac-toe y código de React. Estaremos editando el código de React en este tutorial.

Ahora puedes saltarte a la segunda opción de configuración o ir a la sección de visión general para obtener una idea general de React.

### Opción de configuración 2: Entorno de desarrollo local

¡Esta es completamente opcional y no es requerida para este tutorial!


-> *Instrucciones para seguir adelante localmente usando tu editor de texto preferido*

Esta configuración requiere más trabajo pero te permite completar el tutorial usando un editor de tu elección.

- Aquí los pasos a seguir:

1. Asegúrate de tener una versión reciente de Node.js instalada, versión 14 en adelante, y npm desde 5.6 en adelnte.

2. Sigue las instrucciones de instalación de Create React App para hacer un nuevo proyecto.

```
npx create-react-app my-app
cd my-app
npm start
```

3. Elimina todos los archivos en la carpeta src/ del nuevo proyecto.

*Nota*: No elimines la carpeta src por completo, solo los archivos de código fuente originales dentro de ella. Reemplazaremos los archivos de código fuente por defecto con ejemplos para este proyecto en el siguiente paso.

```
cd my-app
cd src
```

### Si usas Mac ó Linux:
```rm -f *```

### Ó, si usas Windows:
```del *```

### Luego, regresa a la carpeta del proyecto
```cd ..```

4. Agrega un archivo llamado **index.css** en la carpeta src/ con este código CSS.

5. Agrega un archivo llamado **index.js** en la carpeta src/ con este código JS.

6. Agrega estas 3 líneas en la parte superior del archivo index.js en la carpeta src/:

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

```JSX
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

Cambia el método render de Square para mostrar ese valor, reemplazando ```{/* TODO */}``` con ```{this.props.value}```:


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

Vamos a rellenar el componente de Square con una “X” cuando damos click en él. Primero, cambia la etiqueta button que es retornada del método ```render()``` del componente Square a esto:


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

*Nota* -> Para continuar escribiendo código sin problemas y evitar el confuso comportamiento de this, vamos a usar la sintaxis de funciones flecha para manejar eventos aquí y más abajo:


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

Ten en cuenta cómo con ```onClick={() => console.log('click')}```, estamos pasando una función como valor de la prop onClick. React solo llamará a esta función después de un click. Olvidar ```() => ```y escribir ```onClick={console.log('click')}``` es un error común, y se ejecutaría cada vez que el componente se re-renderice.

Como un siguiente paso, queremos que el componente Square “recuerde” que fue clickeado, y se rellene con una marca de “X”. Para “recordar” cosas, los componentes usan estado.

Los componentes de React pueden tener estado estableciendo``` this.state ```en sus constructores.``` this.state ```debe ser considerado como privado para un componente de React en el que es definido. Vamos a almacenar el valor actual de un cuadrado en``` this.state```, y cambiarlo cuando el cuadrado es clickeado.

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

*Nota* -> En las clases de JavaScript, necesitas siempre llamar super cuando defines el constructor de una subclase. Todas las clases de componentes de React que tienen un constructor deben empezar con una llamada a super(props).

Ahora vamos a cambiar el método render de Square para mostrar el valor del estado actual cuando es clickeado:

Reemplaza ```this.props.value ``` por ```this.state.value``` dentro de la etiqueta ```<button>```.

Reemplaza el manejador de evento ```onClick={...}``` por ```onClick={() => this.setState({value: 'X'})}```.

Pon las props className y onClick en líneas separadas para mejor legibilidad.

Luego de estos cambios, la etiqueta``` <button> ```que es retornada del método render de Square se ve así:

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

Llamando a ```this.setState``` desde el manejador onClick en el método render de Square, decimos a React que re-renderice el cuadrado siempre que su``` <button> ```es clickeado. Luego de la actualización, el this.state.value del cuadrado será 'X', así que veremos X en el tablero de juego. Si tu haces click en cualquier cuadrado, una X debería mostrarse en el mismo.

Cuando llamas setState en un componente, React actualiza automáticamente los componentes hijos dentro del mismo también.

### Herramientas de desarrollo

La extensión de React Devtools para Chrome y Firefox te permite inspeccionar el árbol de componentes de React con tus herramientas de desarrollo del navegador.

React DevTools te permite revisar las props y el estado de tus componentes de React.

Después de instalar React DevTools, puedes hacer click derecho en cualquier elemento de la página, click en “Inspeccionar elemento” para abrir las herramientas de desarrollo, y la pestaña de React aparecerá como la última pestaña a la derecha. Usa “⚛️ Components” para inspeccionar el árbol de componentes.

Sin embargo, notar que hay unos cuantos pasos extras para hacerlo funcionar con CodePen:

Loguéate o regístrate y confirma tu correo electrónico (requerido para prevenir spam).

-> Click en el botón “Fork”.

-> Click en “Change View” y luego selecciona “Debug mode”.

En la nueva pestaña que se abre, el devtools debería ahora tener una pestaña de React.

---

## 4 - Completando el juego

Actualmente, cada componente Square mantiene el estado del juego. Para determinar un ganador, necesitamos mantener el valor de cada uno de los 9 cuadrados en un solo lugar.

Podemos pensar que el tablero debería solo preguntar a cada cuadrado por su estado. Aunque este enfoque es posible en React, te incentivamos a que no lo uses porque el código se vuelve difícil de ententer, susceptible a errores, y difícil de refactorizar. En su lugar, el mejor enfoque es almacenar el estado del juego en el componente padre Board en vez de cada componente Square. El componente Board puede decirle a cada cuadrado que mostrar pasándole una prop tal cual hicimos cuando pasamos un número a cada cuadrado.

Para recopilar datos de múltiples hijos, o tener dos componentes hijos comunicados entre sí, necesitas declarar el estado compartido en su componente padre. El componente padre puede pasar el estado hacia los hijos usando props; esto mantiene los componentes hijos sincronizados entre ellos y con su componente padre.

Elevar el estado al componente padre es común cuando componentes de React son refactorizados, vamos a tomar esta oportunidad para intentarlo.

Añade un constructor al Board y establece el estado inicial de Board para contener un arreglo con 9 valores null. Estos 9 nulls corresponden a los 9 cuadrados:

```JSX
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={i} />;
  }
```


Cuando rellenemos el tablero luego, el arreglo ```this.state.squares``` se verá algo así:

```JSX
[
  'O', null, 'X',
  'X', 'X', 'O',
  'O', null, null,
]
```

El método **renderSquare** del componente Board actualmente se ve así:

```JSX
 renderSquare(i) {
    return <Square value={i} />;
  }
```

Al principio, pasamos la prop value desde el Board para mostrar los números de 0 a 8 en cada cuadrado. En un paso previo, reemplazamos los números con una marca “X” determinado por el estado del propio Square. Esto es porque el cuadrado actualmente ignora la prop value pasado por el Board.

Ahora usaremos la prop pasando el mecanismo otra vez. Modificaremos el Board para instruir cada Square acerca de su valor actual ('X', 'O', ó null). Ya tenemos definido el arreglo squares en el constructor del Board, y modificaremos el método renderSquare para que lo lea desde allí:

```JSX
 renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
```

Cada Square ahora recibirá una prop value que será 'X', 'O', ó null para cuadrados vacíos.

Luego, necesitamos cambiar lo que sucede cuando un cuadrado es clickeado. El componente Board ahora mantiene qué cuadrados están rellenos. Necesitamos crear una forma para que el cuadrado actualice el estado del componente Board. Debido a que el estado es considerado privado al componente que lo define, no podemos actualizar el estado de Board directamente desde Square.

En cambio, pasaremos una función como prop desde Board a Square y haremos que Square llame a esa función cuando un cuadrado sea clickeado. Cambiaremos el método renderSquare en Board a:

```JSX
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
```

*Nota* -> Dividimos el elemento retornado en múltiples líneas por legibilidad, y agregamos paréntesis para que JavaScript no inserte un punto y coma después del return y rompa nuestro código.

Ahora estamos pasando dos props desde Board a Square: value y onClick. la prop onClick es una función que Square puede llamar cuando sea clickeado. Haremos los siguientes cambios a Square:

- Reemplazar``` this.state.value``` por ```this.props.value ```en el método render de Square

- Reemplazar ```this.setState()``` por ```this.props.onClick() ```en el método render de Square

- Eliminar el constructor de Square porque el componente ya no hace seguimiento del estado del juego

Luego de estos cambios, el componente Square se ve algo así:

```JSX
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}
```

Cuando un cuadrado es clickeado, la función onClick provista por el componente Board es llamada. Aquí un repaso de cómo esto fue logrado:

La prop onClick en el componente pre-construido del DOM``` <button>``` le dice a React para establecer un escuchador del evento ```click```.

Cuando el botón es clickeado, React llamará al manejador de evento onClick que está definido en el método ```render()``` de Square.

Este manejador de evento llama a ```this.props.onClick().``` la prop ```onClick``` del componente ```Square``` fue especificado por el componente ```Board```.

Debido a que el Board pasó ```onClick={() => this.handleClick(i)}``` a Square, el componente Square llama al ```handleClick(i)``` de Board cuando es clickeado.

No tenemos definido el método ```handleClick()``` aun, así que nuestro código falla. Si haces click ahora verás una pantalla roja de error que dice algo como “this.handleClick is not a function” (this.handleClick no es una función).

*Nota* -> El atributo onClick del elemento``` <button> ```del DOM tiene un significado especial para React porque es un componente pre-construido. Para componentes personalizados como Square, la nomenclatura la decides tú. Podríamos darle cualquier nombre al prop onClick de Square o al método handleClick de Board, y el código funcionaría de la misma forma. En React, sin embargo, es una convención usar los nombres ```on[Evento] ```para props que representan eventos y ```handle[Evento]``` para los métodos que manejan los eventos.

Cuando intentamos clickear un cuadrado, deberíamos obtener un error porque no hemos definido handleClick aun. Vamos ahora a agregar handleClick a la clase Board:

```JSX
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

Luego de estos cambios, podemos nuevamente clickear en los cuadrados para rellenarlos de la misma forma que lo hicimos antes. Sin embargo, ahora el estado está almacenado en el componente Board en lugar de cada componente Square. Cuando el estado del Board cambia, los componentes Square se re-renderiza automáticamente. Mantener el estado de todos los cuadrados en el componente Board nos permitirá determinar el ganador en el futuro.

Debido a que el componente Square ahora no mantiene estado, los componentes Square reciben valores del componente Board e informan al mismo cuando son clickeados. En términos de React, los componentes Square ahora son componentes controlados. El componente Board tiene control completo sobre ellos.

*Notar* -> cómo en ```handleClick```, llamamos ```.slice()``` para crear una copia del array de squares para modificarlo en vez de modificar el array existente. Ahora explicaremos porqué crear una copia del array squares en la siguiente sección.


## ¿Por qué es importante la inmutabilidad?

En el ejemplo de código anterior, sugerimos que crearas una copia del array de squares con el método slice() en vez de modificar el array existente. Ahora discutiremos la inmutabilidad y por qué es importante aprenderla.

Hay generalmente dos enfoques para cambiar datos. El primer enfoque es mutar los datos directamente cambiando sus valores. El segundo enfoque es reemplazar los datos con una nueva copia que tiene los cambios deseados.

Cambio de datos con mutación

```JSX
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Ahora `player` es {score: 2, name: 'Jeff'}
```


Cambio de datos sin mutación
```JSX
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Ahora `player` no ha cambiado, pero `newPlayer` es {score: 2, name: 'Jeff'}

// O si usas la sintaxis de propagación de objeto, puedes escribir:
// var newPlayer = {...player, score: 2};
```

El resultado final es el mismo, pero al no mutar (o cambiar los datos subyacentes) directamente, obtenemos muchos beneficios descritos a continuación

#### Funcionalidades complejas se vuelven simples

La inmutabilidad hace que funcionalidades complejas sean mucho más fácil de implementar. Luego en este tutorial, implementaremos una funcionalidad de “viaje en el tiempo” que nos permite repasar el historial del juego tic-tac-toe y “volver” a movimientos previos. Esta funcionalidad no es específica de juegos, una habilidad de deshacer y rehacer ciertas acciones es un requerimiento común en aplicaciones. Evitar la mutación de datos directamente nos permite mantener intacto versiones previas del historial del juego, y reusarlas luego.

#### Detectar cambios

Detectar cambios en objetos mutables es difícil porque son modificados directamente. Esta detección requiere que los objetos mutables sean comparados a la copia previa del mismo y que el árbol entero del objeto sea recorrido.

Detectar cambios en objetos inmutables es considerablemente más sencillo. Si el objeto inmutable que está siendo referenciado es diferente del anterior, significa que el objeto ha cambiado.

#### Determinar cuando re-renderizar en React

El beneficio principal de la inmutabilidad es que te ayuda a construir componentes puros en React. Con datos inmutables se puede determinar fácilmente si se han realizado cambios, lo que ayuda también a determinar cuando un componente requiere ser re-renderizado.

Puedes aprender más acerca de shouldComponentUpdate() y cómo puedes construir componentes puros leyendo Optimizando el rendimiento.


## Componentes de función

Ahora cambiaremos el componente Square a ser un componente de función.

En React, componentes de función son una forma más simple de escribir componentes que solo contienen un método render y no tiene estado propio. En lugar de definir una clase que extiende React.Component, podemos escribir una función que toma props como parámetros y retorna lo que se debe renderizar. Componentes de función son menos tediosos de escribir que clases, y muchos componentes pueden ser expresados de esta manera.

Reemplaza la clase Square por esta función:


```JSX
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

Hemos cambiado this.props a props en ambas veces que aparece.

*Nota* -> Cuando modificamos el componente Square a ser un componente de función, también cambiamos ```onClick={() => this.props.onClick()}``` a una más corta ```onClick={props.onClick} ```(notar la falta de paréntesis en ambos lados).


## Tomando turnos

Ahora necesitamos corregir un defecto obvio en nuestro juego tic-tac-toe: las “O” no pueden ser marcadas en el tablero.

Estableceremos el primer movimiento a ser una “X” por defecto. Podemos establecer el valor por defecto modificando el estado inicial en nuestro constructor del componente Board:

```JSX
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
```

Cada vez que el jugador haga un movimiento, xIsNext (un booleano) será invertido para determinar qué jugador sigue y el estado del juego será guardado. Actualizaremos la función handleClick del componente Board para invertir el valor de xIsNext:



```JSX
 handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```

Con este cambio, “X”s y “O”s pueden tomar turnos. ¡Inténtalo!

También vamos a cambiar el texto de “status” en el render del Board para que muestre qué jugador tiene el siguiente turno:

```JSX
  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      // el resto no ha cambiado
```

Luego de aplicar estos cambios, deberíamos tener este componente Board:
```JSX
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

##  Declarando un ganador

Ahora que mostramos de qué jugador es el siguiente turno, debemos también mostrar cuando alguien ganó el juego y si no hay más movimientos que hacer. Copia esta función de apoyo y pégala al final del archivo.

```JSX
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

Dado un arreglo de 9 cuadrados, esta función comprobará si hay un ganador y devolverá 'X', 'O' o null según corresponda.

Llamaremos a calculateWinner(squares) en el método render del componente Board para revisar si un jugador ha ganado. Si un jugador ha ganado, podemos mostrar un texto como: “Winner: X” o “Winner: O”. Reemplazaremos la declaración del status en el método render de Board con este código:


```JSX
render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      // el resto del código no ha cambiado
```

Ahora podemos cambiar la función handleClick del componente Board para retornar rápidamente ignorando un click si alguien ha ganado el juego o si un cuadrado está ya rellenado:
```JSX
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
```


---

### 5 - Agregando viaje en el tiempo 


```JSX
```

```JSX
```

```JSX
```

```JSX
```

```JSX
```



```JSX
```

```JSX
```

---

