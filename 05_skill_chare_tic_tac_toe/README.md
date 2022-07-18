# Tic Tac Toe: A playfull Intro to React (SKILL SHARE) 


## ¿ Queres aprender React de forma divertida?

En esta clase, aprenderás os conceptos claves de React mientras contruyes un juego de Tic Tac Toe.

Mientras construimos un juego completamente funcional, nos sumergimos en algunos conceptos básicos de React, como:

- Dividir la aplicaicón  o juego en partes pequeñas, en componentes.

- Como estructurar su logica y cómo conectar estos componentes con **props** y **callbacks**

- Como lidiar con el cambio, qué es el **estado**, qué alamcenar en él y cómo definirlo

- Como agregar **interacción** y cómo funciona el **renderizado** en React

También dibujaremos algunas imágenes básicas mediante codificación de SVG.

Es un curso introductorio, no requiere conocimiento previo de React, pero se requiere algunas habilidades básicas de **HTML**, **CSS** y **JavaScript**

---

## Componente



Nn **componente** es como una función por dos motivos...

... deberemos romper la aplicacion en pequeños componentes que tengan significado

... para evitar repetir el codigo, se crea una vez y se llama en varios lugares


->> Vamos a necesitar el componente principal, el **root** para inyectarlo en el HTML, que contenga a toda al app.

---

### ¿ Qué componentes necesitaremos en la app del tic tac toe ?

Viendo el tic-tac-toe hay cosas que se repiten, y serán los compoenntes:

- **X** (la equis) -> **cross**

- **O** (el circulo) -> **circle**

- hay una grilla con 9 **cuadrados**, donde vamos a ir poniendo las X ú O -> **square**

- Luego de jugar en esta aplicación vamos a tener que mostrar el resultado, si uno ganó o no -> **result**

---

En el curso lo hace en CodePen y el **Pen Settings** > **JavaSCript** > **Add External Scrips/Pens** va a agregar React y React DOM (siempre viendo que los numeros de versiones coincidan) y como **JavaScript Preprocesador** elije **Babel**.

---

### Vamos a ver el primer componente

Y aunque te sorprenda, ocmo dijimos un **componente** es una funcion:

```JavaScript
function TicTacToe() {
  return <div>Hello from React!</div>;
}

ReactDOM.render(
  <TicTacToe />,
  document.getElementById('app')
)
```

Un componente es una función especial que está retornando que se ve como HTML, peor no es HTMl porque estamos dentro de JavaScript, entonces ¿como funciona?

En realidad, al tener Babel va a transpilar el JSX en JavaScript, en realidad en puro JavaScript sería así:

```JavaSCript
"use strict";

function TicTacToe() {
  return React.createElement("div", null, "Hello from React");
}
```

Bueno ahora tenemos al componente, pero en la pantalla todavía no lo vemos.

Es como tener una función que todavía no la invocamos, todavía no dijimos donde este HTML debe generarse, debemos tener un entry point en nuestro HTML.

```HTML
<h1>Hello World!</h1>
<p>This is some text</p>
<div id="app"></div>
```

En el div con id app vamos a inyectar el codigo (se puede usar el id que se quiera, en general se suele usar root).

**ReactDOM** es una bibilioteca de utilidades simple, cuyo propósito es buscar el HTML, encontrar el id y reemplazar su contenido por nuestro componente.

Solo falta ahora crear las nuevas funciones para los componentes antes mencionados, por ahora van a ser unos componentes muy simples, solo veremos un div con el nombre del componente, pero como todavía no están conectados al **componente raiz** ni los vamos a ver. pero este es el esqueleto de nuestra aplicación y vamos a ir conectando los componentes al componente raiz.


```JavaScript
function TicTacToe() {
  return <div>Hello from React!</div>;
}

function Square() {
  return <div>Square</div>;
}

function Circle() {
  return <div>Circle</div>;
}

function Cross() {
  return <div>Cross</div>;
}

ReactDOM.render(
  <TicTacToe />,
  document.getElementById('app')
)
```

---

### ¿ Como incrustro componentes dentro de otros ?

Como cada componente es una funcion, se la puede invocar como una función, pero en Reac van entre ```< />``` para tener el componente **Square** dentro de **TicTacToe**:

```JavaScript
import './App.css';

function TicTacToe() {
  return (
    <div>
      <Square />
    </div>
  );
}

function Square() {
  return <div>Square</div>;
}

function Circle() {
  return <div>Circle</div>;
}

function Cross() {
  return <div>Cross</div>;
}


function App() {
  return (
    <div className="App">
        { TicTacToe() }
    </div>
  );
}

export default App;
```

---

Recordemos que **class** es una palabra reservada, entonces al utilizar JSX para las clases de CSS utilizaremos **className**

---
## Props

Ahora tenemos los 9 cuadrados en 3 x 3 gracias a CSS con su FlexBox y Grid.

Pero ahora...¿ como sabemos cuál es cada cuadrado? 

Todos lucen iguales.

Para diferenciarlos a cada uno le podemos dar una identificación única. En React podemos configurar instancias pasando **props** a ellos.

Una  **prop** es como un atributo del **componente funcional**.

Entonces vamos a establecer un atributo de posición para cada una de las instancias del componente Square.


En React se puede pasar una propiedad de la misma forma que se establecería un atributo para una etiqueta HTML. En esta caso vamos a tener el atributo **position** y comoenzamos desde el **0**:

```JSX
<Square position="0"/>
```

Otro modo de pasar un valor es el usando **{}**, a este modo se lo llama **binding**, es un modo mucho más fuerte de pasar propiedades a los componentes hijos. Porque con las llaves estamos abriendo una ventana para poder utilizar JavaScript

```JSX
<Square position={0}/>
```

En este momento no utilizamos todo su potencial, solo le estamos pasando un numero, pero podria tener una variable, hacer cálculos matemáticos, pasar una función, etc.

Hay una difernecia entre pasar valores en **" "** o en **{}**, si se pasa un número entre comillas va a ser interpretado como un String, en cambio si lo pasamos entre {} se interpreta como un Number.

Las **propiedades** los los **componentes** de React se pasan como **atributos** del **componente funcional**.

Pero en vez de que el atributo sea una position, el **primer atributo** va a ser un objeto generico para todas las otras propiedades del componente. Esto puede ser confuso en componentes que solo tienen una propiedad, asi que hay que tener en cuenta que **el primer atributo va a ser un objeto** que por el momento tiene un atributo (position). Entonces podemos agarrar todo el objeto **props** y referirnos al atributo de posicion del objeto props o podemos descomponerlo este objeto props de inmediato en la funcion.

```JavaScript
function Square({ position }) {
  return <div className="square">Square</div>;
}
```

¿ Y ahora como lo usamos ?

Básicamente lo que queremos hacer es en lugar de mostrar "Square" queremos mostrar el número de posición dentro de este componente.

¿ Cómo podemos hacerlo ?

Queremos utilizar una variable de JavaScript dentro de JSX. Podemos haer de nuevo lo que hicimos recién de pasar una variable como propiedad, podemos usar binding, utilizando {}:

```JavaScript
function Square({ position }) {
  return <div className="square">{position}</div>;
}
```

---

## Partes que cambian (Estado)
Por ahora lo que ingresamos en los cuadrados fueron los números, pero lo que necesitamos tener con las X ó O, dependeindo del juego. Y va a ser algo dinámico, inicialemnte todos los **square** van a estar **vacíos** y cuando le hacemos click deben mostrar **O** o **X**.

En React cada cosa que es **dinamica**, que **cambia en el tiempo**, se define como **ESTADO**, el estado junto a las **props** son los factores que dan forma a nuestros componentes; pero mientras las props son pasadas por el componente padre (vienen de afuera del componente) en cambio el estado es algo interno.

```
     Props
      |
------V----------
|  COMPONENTE   |
| State         |
-----------------
```

¿ Y qué es lo que va a ir cambiando a través del juego?

Tenemos dos cosas...

... en cada turno cada square recibe un valor de O o X

... otra cosa que vaa ir variando en cada turno es el **jugador**, luego de cada turno va a ir cambiando entre O a X y viceversa.

¿Y... donde definimos el **estado** (**state**)?

Cada **square** de los 9 va a ser responsable de su propio estado interno, van a saber si deben seguir vacío o contener O o X.

Tenemos un inconveniente, si bien cada **square** va a saber su propio estado interno, nadie va a saber el estado de toda la grilla, ni cómo detectar si el juego terminó. Y esto se debe  a coo funciona la comunicación en REact, que va de arriba hacia abajo, del componente padre a los hijos.



```
   TicTacToe
      |
      |
  -----------
  |          |
  V          V
Square   Square    
```

**Los componentes padres le pueden pasar sus variables / estados a sus hijos**. Pero no funciona a la inversa, el componente hijo no puede pasarle al padre las props. Entonces los **square** pueden tener acceso a los statados dle padre, porque los heredan.

Lo que podemos hacer es unar **callbacks** para reportar cierto progreso dle hijo hacia el padre, pero es un poco diferente porque con **props** están heredando **propiedades** y estás exponiendo las variables a los hijos, pero las **callbaks** son llamados a la función, son como un **evento**.

->> Si necesitamos detectar si el juego termnó y quiien ganó, todo el estado debe estar en un solo lugar y va a estar a un nivel superior al componente TicTacToe (en el **top-level component**). En general los **componentes top level** son los **smart**(tienen la lógica y el estado de la aplicación) y los **componentes low level** son la **visual**, ellos reciben todo lo que necesitan (los valores por props) de sus componentes padres. Pero igualmente la parte **smart** no debe estar tan arriba, debe estar lo más abajo que le sea posible.


Ahora lo vamos a ir agregando en **App.js**

Primero deinimos constantes que van a representar los estados:

```JavaScript
const EMPTY ='EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';
```


Y antes del retorno de la funcion agregamos las constantes, por ahora las vamos a tener como simples variables.
```JavaScript
  const player = CIRCLE;
  const positions = [
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY
  ];
```

Y como les pasamos el atributo de la posicion ahora tambien pasemosles el atributo del valor (**value**) que puede contener estos valores: EMPTY, CIRCLE, CROSS.

```JavaScript
  return (
    <div className="grid">
      <Square position={0} value={positions[0]}/>
      <Square position={1} value={positions[1]}/>
      <Square position={2} value={positions[2]}/>
      <Square position={3} value={positions[3]}/>
      <Square position={4} value={positions[4]}/>
      <Square position={5} value={positions[5]}/>
      <Square position={6} value={positions[6]}/>
      <Square position={7} value={positions[7]}/>
      <Square position={8} value={positions[8]}/>
    </div>
  );
```

Entonces ahora vamos a tener que modificar el componente **Square** para que reciba y refleje esos valores, voy a evaluar si el value es CIRCLE o CROSS y si es lo muestro

```JavaScript
function Square({ position, value }) {
  return (
    <div className="square">
      {value == CIRCLE && <Circle/>}
      {value == CROSS && <Cross/>}
    </div>);
}
```

De este modo solo va a mostrar o un O o una X, nunca los dos.

Entonces en este momento en la grilla solo se debe ver O o X o en este caso los placeholders Circle o Cross.


---

## Un Estado que puede cambiar

Antes de seguir, veamos como va a funcionar la aplicación.

- Tenemos la función que va a generar unuestro estado inicial:

```JavaScript
function TicTacToe() {
  let player = CROSS
  let positions = [
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
    EMPTY, EMPTY, EMPTY,
  ]

  return (...)
}
```

- Luego el renderizado va a ir modificandose de acuredo a nuestra interacción. Y vamos a querer reflejar estos cambios en el layoout. Lo que va a hacer React es renderizar todo el componente corrindo la misma función. Y si nos damos cuenta vamos a correr la mismo función dos veces, pero nos va a renderizar distinto resultado.

- Necesitamos tener un estado que nos devuelva el último valor asignado, para poder hacer esto tenemos los **React Hooks**, uno de ellos se llama **useState**, al utilizarlo podemos guardar el state afuera del componente y siempre nos va a retornar su último valor. Podemos inicializarlo con un valor que pasaremos como atributo, pero este valor va a ser ignorado en los proximos llamados a la funcion ya que su valor ya esta. Usando el **useState** voy a tener un array the 2 items, el primero es el state por si mismo 


Si corremos la funcion la primera vez va a dar el estado inicial.

Pero si la corremos con re-rendering va a mostrar el ultimo valor asignado, el más actual.

El segundo parametro (useState) es una función que puede ser usada para cambiar el estado.

En el futuro si necesitamos cambiar el estado vamos a llamar a esta función. Esta función también va a ser llamada automaticamente al re-renderizar el componente.

Entonces al cambiar el estado también estamos re-renderizando el componente que va a reflejar el cambio hecho..

```JavaScript
function TicTacToe() {
  let [state, setState] = React.useState({
    player: CROSS,
    positions = [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
    ]
  })

  return (...)
}
```

---

## Circulos y cruces

Para dibujarlos en vez de utilizar imagenes usaremos ```<svg>```, que es un XML basado en un formato de imagen vectorial. Al estar basado en XML son parte de la sintaxis de HTML y se puden agregar como un elemento en linea, de modo que no se necesita cargar una imagen externa.


¿ Y cómo son los **svg**?

- Están rodeados de una etiqueta ```<svg></svg>```

- Dentro de la etiqueta podemos definir el **width** y el **height** junto al **viewBox** (que va a definir el sistema de coordenadas), en el ejemeplo de empieza en -50 en X y -50 en Y y va a tener 100 tanto de alto como de ancho, entonces el centro de la imagen va a ser (0,0). Se puede observar que el alto y ancho que definimos en el svg coincide con el del viewBox, pero no siempre deben ser iguales, el widht y height van a ser el alto y ancho del svg y el viewBox está definiendo el canvas en donde podremos dibujar.

```HTML
<html>
  <svg width="100" height="100"
    viewBox="-50 -50 100 100">
    ...
  </svg>
</html>
```

Y de este modo vamos a ahacer un circulo, rellenado de negro, al ser etiquetas que están dentro dle HTML, luego con el CSS la podemos estilar.

```JavaScript
function Circle() {
  return (
    <svg width="100" height="100" viewBox="-50 -50 100 100">
      <circle cx="0" cy="0" r="40"></circle>
    </svg>
  );
}
```

Y también vamos a hacer las cruces, por el momento no se van a ver, porque por default el ancho en 0 de la linea, luego con css lo modificaremos con la propiedad **stroke-width**:
```JavaScript
function Cross() {
  return (
    <svg width="100" height="100" viewBox="-50 -50 100 100">
      <line xl="-40" yl="-40" x2="40" y2="40"></line>
      <line xl="-40" yl="40" x2="-40" y2="-40"></line>
      <line xl="-40" yl="40" x2="40" y2="-40"></line>
      <line xl="-40" yl="40" x2="-40" y2="40"></line>
    </svg>
  );
}

```

Y si por ejemplo quiero que los circulos tengan otro color en la funcion Circle dentro de la etiqueta svg agrego ```className="circle"``` para poder estilarla con css

---

## Interaccion

Debemos unr los **event handlers** en las etiquetas HTML, en nuestro caso lo ás cercano que podemos estar es en la etiqueta contenedora dentro del componente Square. 

Pero tenemos un problema acá, dijimos que ibamos a tener el stado dentro del componente TicTacToe, pero el event handler esta en el componente Square por lo que debemos ver el modo de que el componente Square pueda setear el estado. Una idea puede ser que la pasar el estado al componente Square podamos pasar la funcion useState y de este modo el componente Square puede cambiar el mismo su estado. 

Pero además de cambiar el estado de la grilla también necesitamos cambiar el estado dle jugador. Claro que podemos pasar el jugador al componente Square y luego el componente Square puede cambiar todo el estado porque sabrá todo. Pero esto choca con la idea de tener el componente Square lo más simple posible y si lopensamos el jugador no tiene nada que ver con el componente Aquare realmente. El jugador pertenece a la lógica principal que debe ser definida en el componente TicTacToe.

Entonces en vez de psar todo, vamos a pasar un callback. Entonces el componente TicTacToe va a pasar una funcion y el componente Square va a llamar a dicha funcion cuando sea clickeado.

Entonces escribamos la funcion que reciba que Square fue clickeado y cambie el estado actualizando la grilla y cambiando al jugador. Y luego pasamos como propiedad esta funcion al Square, pero no llamaremos a la funcion sino que pasaremos una referencia a la misma, como podemos hacer con cuqlquier variable. En el único lugar que si vamos a llamar a esta función será dentro del componente Square, entonces dentro del componenteSquare podemos definir un event handler para el evento click y este event handler requiere una funcion (no podemos usar la funcion pasado por el componente TicTacToe porque requiere el atributo position) por lo que definimos un event handler intermedio en el componente Square que va a ser llamado una vez que el Square sea clickeado y va a transferir la llamada a nuestro callback. En este event handler intermedio podemos pasar el atributo de posicion porque el componente Square sabe la posicion. 

Podemos agregar lógica extra, si el Square no esta vacio vamos a ignorar el click. 

Voy a tener la funcion:

```JavaScript
function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions
    })
  }
```

Y en mi componente Square voy a tener el nuevo atributo:

```takeTurn={takeTurn}```

Y en la funcion Square:

```JavaScript
function Square({ position, value, takeTurn }) {
  function handleClick(){
    if(value === EMPTY) takeTurn(position)
  }
  return (
    <div className="square" onClick={handleClick}>
      {value === CIRCLE && <Circle/>}
      {value === CROSS && <Cross/>}
    </div>);
}
```

---

## Detectando al ganador

Voy a necesitar una función para determinar quien gano, para poder hacer este calculo la funcion necesitará el estado dle juego, va a necesitar cada valor de los 9 Square; per sacando esto poria ser una simple funcion de JavaScript, es una funcion que recibe un array de 9 valores y devuelve un resultado (no es algo propio de React).

Asi que detectar que alguien gano el juego es chequear si hay tres circulos o cruces seguidas en fila, en una columna o en una diagonal-

Vamos a tener que buscar un item especifico en este array de 9 items, si por ejemplo queremos chequear si la primer fila es de circulos, vamos a chequear si el primer, segundo y tercer item son circulos:
```JSX
if(p[0] === CIRCLE && p[1] === CIRCLE && p[2] === CIRCLE) return circle 
```

Si quiero saber si la segunda fila es de circulos, ve el cuarto, quinto y sexto item: 
```JSX
if(p[4] === CIRCLE && p[5] === CIRCLE && p[6] === CIRCLE) return circle 
```  

Es una funcion simple con varios if para ir chequeando las condiciones.

```JSX
function detectWinnrt(p) {
  if(p[0] === CIRCLE && p[1] === CIRCLE && p[2] === CIRCLE) return CIRCLE;
  if(p[4] === CIRCLE && p[5] === CIRCLE && p[6] === CIRCLE) return CIRCLE;
  if(p[7] === CIRCLE && p[8] === CIRCLE && p[9] === CIRCLE) return CIRCLE; 

  if(p[0] === CIRCLE && p[3] === CIRCLE && p[6] === CIRCLE) return CIRCLE;
  if(p[1] === CIRCLE && p[4] === CIRCLE && p[7] === CIRCLE) return CIRCLE; 
  if(p[2] === CIRCLE && p[5] === CIRCLE && p[8] === CIRCLE) return CIRCLE;

  if(p[0] === CIRCLE && p[4] === CIRCLE && p[8] === CIRCLE) return CIRCLE; 
  if(p[2] === CIRCLE && p[4] === CIRCLE && p[6] === CIRCLE) return CIRCLE;

  if(p[0] === CROSS && p[1] === CROSS && p[2] === CROSS) return CROSS;
  if(p[4] === CROSS && p[5] === CROSS && p[6] === CROSS) return CROSS; 
  if(p[7] === CROSS && p[8] === CROSS && p[9] === CROSS) return CROSS; 

  if(p[0] === CROSS && p[3] === CROSS && p[6] === CROSS) return CROSS;
  if(p[1] === CROSS && p[4] === CROSS && p[7] === CROSS) return CROSS; 
  if(p[2] === CROSS && p[5] === CROSS && p[8] === CROSS) return CROSS;

  if(p[0] === CROSS && p[4] === CROSS && p[8] === CROSS) return CROSS; 
  if(p[2] === CROSS && p[4] === CROSS && p[6] === CROSS) return CROSS;

  if(p.every(position => position != EMPTY)) return "It is a tie";
}
```

Esta funcion la podemos tener fuera de los componentes de React, pero tambien lo podemos tener dentro del componente TicTacToe.

Detectar el ganador puede venir luego de cada click:

```JSX

function TicTacToe() {
  const [state, setState] = React.useState({
    player : CROSS,
    positions : [
      EMPTY, EMPTY, CIRCLE,
      EMPTY, CROSS, EMPTY,
      EMPTY, CIRCLE, EMPTY
    ],
    winner: EMPTY
  });

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setState({
      player: state.player === CIRCLE ? CROSS : CIRCLE,
      positions,
      winner: detectWinner(positions)
    });
  }

  return ()
} 
```

podemos tener al ganador en un estado, lo podemos inciializar EMPTY y podemos ir renderizando el resultado.

Otra opcion es que el ganador sea un derivado del estado. Entonces podemso agregar cierta logica entre tener el estado del hook que esta conteneindo el valor del cuadrado(square) y re-renderizando la grilla basada en el useState.

```JSX
function TicTacToe() {
  const [state, setState] = React.useState(...)

  function takeTurn(position) {...}

  const winner = detectWinner(state.positions);

  return(...)
}
```

->> Elijo la segunda oopcion

Ya manejamos en una varaible si tenemos o no ganador, si gano el O o la X o si es empate o si nadie gano y el juego sigue.

Entonces ahora en el return debo encerrar todo en ```<> </>``` para poder tneer más de una etiqueta HTML, voy a tener el div de la grilla y tambien ```<Result /> ``` que lo voy a renderizar cuando tenga un ganador, por lo que me voy a basar en el atributo winner


Y completar la funcion Result:

```JSX
function Result({ winner }){
  return(
    <div className="result">
      {winner === CIRCLE && 'Circle won the game'}
      {winner === CROSS && 'Cross won the game'}
      {winner === 'It is a tie' && 'It is a tie'}
    </div>
  )
}
```

Tambien tengo que hacer el reseteo para cuando termine con la funcion Reset
---

## ¿ Donde ver la app?

Está dentro de la carpeta [tic-tac-toe](https://github.com/eugenia1984/react-varios-cursos/tree/main/05_skill_chare_tic_tac_toe/tic-tac-toe)