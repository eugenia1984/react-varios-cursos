# :star2: Los estados en el Componente Arbol :star2:

---

## :star: 1 - Creando un proyecto con create-react-app

Voy a ir a mi carpeta de exercises y ahi
```
npx create-react-app my-app
```

Para crear una app con CRA(Create React App), tarda un poco porque se baja todas las librerias, Babel, todo lo que se necesita.

Voy hacia mi app:
```cd my-app```

Y la corro en mi navegador:
```npm start```

Y en el navegador: 
```http://localhost:3000/``` para ver nuestra app

- Estructura del proyecto:

```
my-app
  node_modules
  public
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTest.js
  .gitignore
  package-lock.json
  package.json
  README.md
```

El el **package.json** vemos todas las librerias, las principales son:

- **React**, para poder crear los componentes

- **React DOM**, para agregar los componentes a la pagina

- **React Script** es como manejamos todo el bundling.

- También tenemos algunas librerías de testing.

En el **src** están los archivos principales:

- **index.js** como el entrypoint de la aplicación. El archivo principal de JavScript que podemos usar para renderizar la app el en DOM. El document.getElementBy("id") se refiere al div con id "root" que está en **public** / **index.html** (ahi vamos a inyectar todos nuestros componentes de React).
Y tambien vemos a App encerrada en React.StrictMode, es un paquete que va a agregar unso chequeaos adicionales para hacerte saber si hay algo para arreglar (es solo para la parte de desarrollo no para produccion). 
```JSX
<React.StrictMode>
  <App />
</React.StrictMode>
```
- **App.js** vamos a tener el componente funcional App que va a renderizar dentro otros componentes y se exporta en default.

Con Create React App cada vez que se nos guarda un cambio la app lo va a reflezar al renderizarse y se va a ver en el navegador. Esto es muy util al estar armando los proyectos.

- **App.css** va a tener el CSS con los estilos. Y estos estilos se ven reflejados en App.js porque tenemos importado:
```JSX
import './App.css';
```

Si nos bajamos un proyecto y vemos dependencias en el package.json pero no estan debemos instalarlas con:
```npm i ``` ó ```npm install ```
Vamos a tener node_modules ahora.

---

## :star: 2 - Desestructurando arrays en objetos

Nos va a ayudar a tratar con el estado (**state**) en nuestra apliación.

En index.js
```JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App library="React" />
  </React.StrictMode>
);
```

Y la paso como props para usarla
```JSX
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Hello from {props.library}!</h1>
    </div>
  );
}

export default App;
```

Lo podemos desestructurar, verlo como un objeto con sus key-value, asi no tenemos que poner props.key. Estamos desestructurando un objeto para llegar a agarrar su key.

```JSX
function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}!</h1>
    </div>
  );
}
```

También podemos desestructurar arrays.

Tenemos que utilizar un patron de desestructuración de array.

```JSX
const cities = [ "Tokyo", "New York", "Buenos Aires"];
```

```JSX
const [ firstCity, secondCity, ThirdCity] = [ "Tokyo", "New York", "Buenos Aires"];
console.log(fisrtCity); // Tokyo
console.log(secondCity) ; // New York
console.log(thirdCity); // Buenos Aires
```

-> **Lo que hacemos es asignar un nombre de variable basandonos en la posición del array**.

---

## :star: 3 - Entendiendo el useState Hook

Con la función **useState** vamos a poder manejar los estados en REact.

Para eso primero importamos:
```JSX
import { useState } from "react";

function App({ library }) {
  const what = useState("happy");
  console.log(what);
  
  return (
    <div className="App">
      <h1>Hello from {library}!</h1>
    </div>
  );
}
```

Por consola vemos un array que tiene dos valores , el primero es un valor undefined y el segundo es una funcion (en esta función actualizaremos el **estado**).

- ¿ Cómo seteo el estado inciial de la app ?

La paso el estado "happy":
```JSX
const what = useState("happy");
```

Y ahora renderizo: 
```(2)[ undefined, f]```

¿Y como le doy un nombre a ese valor?

```JSX
function App() {
  const [ emotion, setEmotion ] = useState("happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
    </div>
  );
}
```

Y necesitamos a setEmotion para cambiar ese estado.

Necesitamos tener esta respuesta por medio de algún input, en este caso vamos a usar un boton, entonces al hacer click en el boton Sad vamos a cambiar la emoción a sad por medio de un evento onClick.

```JSX
import './App.css';
import { useState } from "react";

function App() {
  const [ emotion, setEmotion ] = useState("happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
    </div>
  );
}

export default App;
```

**setEmotion** es la fucnión que vamos a usar para actualizar el estado.

Y vamos a poder setear más de una:
```JavaScript
function App() {
  const [ emotion, setEmotion ] = useState("happy");

  return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("exited")}>Exited</button>
    </div>
  );
}
```

Puedo setearle un String, un Number, un Boolean, un array; lo importante es que cuando le pasamos el **estado inicial** es con el valor con el que se renderizará la app en su estado inicial y cada vez que toque algun boton voy a setear es estado y cambiarlo..  

---

## :star: 4 - Trabajando con useEffect

**useEffect** es otro de los hooks creados en React.

Se utiliza para manejar efectos secundarios que no son relacionados a nuestros componentes.

Pensemos en mensajes por consola, información que se carga, trabajar con animaciones, etc.

1. importamos useEffect: 

```JSX
import { useState, useEffect } from "react";
```

2. Lo usamos psandole por parametro una función.

```JSX
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [ emotion, setEmotion ] = useState("happy");

  useEffect( () => {
    console.log(`It´s ${emotion} right now`)
  })
  
  return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("exited")}>Exited</button>
    </div>
  ); 
}

export default App;
```

Y cada vez que hacemos click en uno de los botones por consola veo el mensaje conla emoción del momento.

Es algo que pasa mientras estamos renderizando.

- useEffects toma **dos argumentos**...

... la primera es una función que se va a llamar en el momento en que el efecto pase.

... la segunda tiene que ver con cuando el efecto esta llamandose efectivamente. 

```JSX
useEffect( () => {
    console.log(`It´s ${emotion} right now`)
}, []);
```

Al pasarle como segundo parametro el array vacio, el efecto no va a ser llamado de nuevo una ve que se renderiza, por lo que solo va a ser llamado una vez, cuando se renderiza el componente, peor no cuando cambiamos las emociones. A este array lo llamamos **dependency array** porque lo usamos para definir cuando debe ser llamado. ¿Debe ser llamado solo una vez cuando el componente se renderiza por primera vez? Otra opción es que le podemos pasar una propiedad para escuchar cualquier cambio en el array.

Si no paso como parametro el segundo array con emotion adentro no voy a ver los cambios en el estado, si el array esta vacio por mas que haga click veo el estado inicial.

```JSX
useEffect( () => {
  console.log(`It´s ${emotion} right now`)
}, [emotion]);
```


---

## :star: 5 - Entendiendo la dependencia array


Se pueden utilizar las **useEffects** y el **useState** para mantener un registro de las diferentes variables.

Entonces vamos a crear una nueva llamada **secondary**:
```JSX
 const [ secondary, setSecondary] = useState("tired");
```

Y vamos a agregar otro boton que va a llamar a ese cambio:
```JSX
<h2>Current secondary emotion is {secondary}</h2>
```
Y se ve tired.

Y agrego el boton para grateful con el evento onClick que me activa setSecondary y antes del return el useEffect:

```JSX
useEffect( () => {
    console.log(`It´s ${secondary} around here`)
  }, [secondary]);

return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
      <button 
        onClick={() => setEmotion("sad")}
      >Sad</button>
      <button 
        onClick={() => setEmotion("exited")}
      >Exited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button 
        onClick={() => setSecondary("grateful")}
      >Grateful</button>
    </div>
  );
```

-> se puede pasar mas de una variable al dependency array, se pueden pasar cuantas necesitemos.

-> es super importante utilizar el DEPENDENCY ARRAY al utilizar el useEffect. Es decir pasar como segundo parametro el array con la variable.

```JSX
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [ emotion, setEmotion ] = useState("happy");
  const [ secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It´s ${emotion} right now`)
  }, [emotion]);

  useEffect( () => {
    console.log(`It´s ${secondary} around here`)
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}!</h1>
      <button 
        className="Btn"
        onClick={() => setEmotion("sad")}
      >Sad</button>
      <button 
        className="Btn"
        onClick={() => setEmotion("exited")}
      >Exited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button 
        className="Btn"
        onClick={() => setSecondary("grateful")}
      >Grateful</button>
    </div>
  );
}

export default App;
```

-> Se puede ver el codigo en **App-5.js**

---

## :star: 6 - Incorporando useReducer

Vamos a crear un check box para manejar el estado de useState con useReduder, asi que vamos a borrrar todo lo de useState.

Entonces vamos a tener un check bottom que por el momento tiene un label que dice Checked y voy a crear la constante checked.  

Vamos a usar el valor de la constante checked para manejar el estado del checkbox Checked. Entonces al input le pasamos como valor esa variable. Y con el evento onCHange pasamos de treu a false y viceversa.

Ahora en mi boton voy a querer mostrar la variable, para reflejar el cambio usando un ternario


Por ahora me queda asi:
```JSX
import './App.css';
import { useState } from "react";

function App() {
  const [ checked, setChecked ] = useState(false);
  return (
    <div className="App">
      <input 
        type="checkbox" 
        value={checked}
        onChange={() => {
          setChecked((checked) => !checked)
        }}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
```

Pero es mejor sacar esa funcionalidad a una funcion aparte, para no manejarlo dentro del onChange. Entonces vamos a cambiar y utilizar otro hook, el **useReducer**.

useReducer va a tener más de un argumento...

... el primero es la función que vamos a utilizar para cambiar el estado. 

... el segundo es el estado incial (false)


Y en el evento onChange vamos a tene la funcion que me setea el estado del checked (setCHecked)
```JSX
import './App.css';
import { useReducer } from "react";

function App() {
  const [ checked, setChecked ] = useReducer(
    (checked) => !checked, 
    false
  );

  return (
    <div className="App">
      <input 
        type="checkbox" 
        value={checked}
        onChange={setChecked}
      />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
```

-> Se puede ver el codigo en **App-6.js**

---