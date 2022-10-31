# <img src="https://img.icons8.com/office/40/000000/react.png"/> React 

---
---

## :star: Clase 5/09

- Para poder utilizar React debemos tener **node** , **npm** y **npx**.

- Para inicializar el proyecto: ```npx create-react-app my-app``` ó ```npm create-react-app my-app```. Voy al directorio y con ```npm start```

-> En el caso de que lo inicialicemos con **vite**: ``` yarn create vite my-pp```, hay que elegir si usamos React y si es solo con JavaScript o con TypeScript. Se crea muchisimo mas rapido. Se utiliza ```yarn``` (para instalar los paquetes) y luego ```yarn dev``` (para inicilizar el proyecto)

```my-app``` va a ser el nombre que le ponga a mi proyecto, como ejemplo use my-app


---
---

## :star: Clase 7/09

- Volvemos a hacer dos proyectos, uno con npm y otro con yarn.

-> create-react-app con npm trabaja en el puerto 3000. El index.html esta dentro de public. Es una SPA, toda la **App.js** se renderiza desde el div con id **root** (que lo llama en el **index.js**).

-> Vite tiene cosas en TS y ademas tiene vite.config.js. El index.html esta dentro de src. En public solo tiene un .svg que es un favicon.

-> ``` ctrl + c  ``` para terminar la terminal y frenar mi aplicacion que se renderiza en el browser

-> ``` npm run build ``` para el deploy. Voy a ver una nueva carpeta **build**. En yarn es ```yarn build``` y la carpeta se va a lalmar **dist** (vamos a tener un archivo .js que esta todo minificado). EL tema es que se desactivo JavaScript ahi no se va a ver nada (en cambio con Next si se sigue viendo). -> **React no trabaja sin JavaSCript**. -> Lo puedo deployar, llendo a **Netlify**, y me arrastro la carpeta **build** o **dist**, tambien con el githubpage.

-> En definitiva se termina pasando todo a JavaScript para que sea interpretado en los navegadores.

---
---

## :star: Clase 12/09

-> Cuando tenemos **Node.js** y queremos inicializar un proyecto, hacemos: ``` npm init -y``` o sin el -y vamos a ir respondiendo las preguntas para completar el package.json con: name, version, descripcion, main, script, keywords, author, etc.

### git

- Trabaja con todos los sistemas operativos.

- Cada uno trabaja en su **rama**, hace un **push** y se pide el **pull request** para poder hacer el **merge** y fusionar ramas.

- Ofrece flexibilidad al momento de trabjar en equipo

### github

- Ahora es de Microsoft

- Es la manera de poder tneer nuestro codigo local alojado en un servidor web y poder compartir el codigo.

- Junto con **git** tenemos **git bash** para poder usar git desde la terminal

- Algunos comandos:


1. Para configurar el usuario y el email:

```gt confirg --global user.name "aca va el nombre"``` -> configuro el usuario

```git config --global user.email example@example.com``` -> configuro el e-mail


2. Para ver el usuario y el email configurado:

```git config user.name``` -> para ver el nombre de usuario

```git config user.email``` -> para ver el e-mial del usuario


### Repositorios en GitHub

-> Tenemos el README.md que va a tener la presentacion del repositorio/proyecto

-> Tenemos el .gitignore que va a tener la lista de los archivos que no se van a subir a github. Por ejemplo: *node_modules*

-> Se puede elegir una licencia.

-> Si no agrego README.md, ni el .gitignore ni elijo licencia, me va a dar los comandos para poder cargar en el mismo archivos locales, y asi vincular ambos proyectos.

Entonces en **mis archivos locales**:

``` git init``` -> para inicializar git

``` git add .``` -> para agregar todos los archivos al stage area

```git commit -m "aca el mensaje" ```

```git remote add origin https://github.com/.....``` -> para relacionarlo (vincularlo) con el repositorio de github

``` git branch -m main``` -> para renombrar a la rama principal como main (para no tener master)

``` git push -u origin main``` -> para recordar el origen asi luego en las proximas veces solo hacemos ```git push```

Ahora si voy a github y actualizo el browser voy a ver lo que recien commitee.

-> Con ```git add -am "mensaje"``` voy a hacer dos pasos en uno hago el add y el commit y solo commmitea lo que fue modificado, con lo que ya existia, si cree algun archivo nuevo no me lo va a subir (en este caso usar el ```git add .```).

```git atatus ``` -> para ver el estado de proyecto, vemos si falta agregar algun archivo, si tenemos algun archivo modificado, si eliminamos algo, etc.

### log

Con ```git log``` -> veo mis commits, con ```tecla espacio``` voy pasando de commit en commit, con ```q``` salimos.

Con ``` git log --oneline``` -> veo los commits mas resumidos en una sola linea y muestra el comienzo del hash.

```git checkout nro-de-hash``` -> y asi puedo "viajar en el tiempo" y volver a donde estaba con ese commit

```git reset --hard HEAD-2 ``` -> con el 2 me vuelvo 2 commits atras, pero OJO porque esto es irreversible, una vez que volvi atras voy a perder lo que hice.

### ramas (branch)

```git branch -m main``` -> para modificar el nombre de una rama

``` git branch``` para ver las ramas locales

```git branch -a``` para ver todas las ramas, tanto las locales como las remotas.

```git branch nuva-rama``` -> para crear una nueva rama ```nueva-rama``` es el nombre

```git checkout nueva-rama``` -> para irme a la rama nueva-rama

```git checkout -b nueva-rama-2``` -> creo una nueva rama y ya me posiciono en ella

```git branch -d nueva-rama``` -> para borrar la rama

### merge

``` git merge otrarama``` -> para acer el merge, debo estar en la rama a la que le voy a querer sumar la otrarama, y otrarama seria el nombre de la rama que quiero sumarle.

---

- [guia para git](https://www.atlassian.com/es/git)

---

## DOM

```
"text"  <li> <li>   "text"
<h1>      <ul>      <title> <meta>
    <body>            <head>    
           <html>
       <document>
```

Al modificar algo en el DOm y trabajar todo con JavaScript vailla, es muy costoso, porque se va a renderizar el 100% del DOm, tanto lo que cambio como lo que no cambio.

-> Para esto React trae la solucion y trabaja con el **virtual DOM** (**vDOM**) es una copia del DOM y solo renderiza lo que se ha modificado. Va a necesitar ciertas cosas para que el cambio sea aprovado y renderizado en pantalla (para loq ue nos van a ayudar los **hooks**).

### React * JSX 

- Todo lo que sea JavaScript debe estar entre {}

- Las clases son **className**

Un mini ejemplo en codigo:

```JSX
import "./styles.css";
import { useState } from "react";

export default function App() {

  const [banderita, setBanderita] = useState(false);
  const palo = "palo";

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {palo === "palo"
        ? "palo"
        :"no palo"}
    </div>
  );
}
```

-> estamos usando el **hook** : **useState**

-> estamos utilizando variables de JavaSCript : **palo**

-> dentro del return tenemos un **renderizado condicional** utilizando el **ternario ismplificado** de JavaScript


----> Creamos un **componente**:

```JSX
const Contador = () => {
  return (
    <>
      <div>
        <p>Hola</p>
      </div>
    </>
  );
};
```


---
---

## :star: Clase 14/09

- React es **reactivo**, va a usar estados para hacer cambios en el DOM, utilizando el virtual DOM. Cada vez que el usuario interactue, haga click en un boton, se va a modificar la UI.

- **Reconciliación** (React Fiber) cuando unifica el VIRTUAL DOM al DOM.

- **Flujo de datos unidireccional** la informacion se propaga del componente padre al componente hijo.

```
componente padre
 |
 v
compoennte hijo
```

- **Proceso** -> **Subproceso** -> **Treads** -> **Fiber** 

-> Proceso: la unidad mas pequeña en asignacion de recurso dle sistema operativo

-> Subproceso: la parte mas pequeña de programacion del sistema operativo

-> Treads: los hilos de procesamiento (las secuencias encadenadas)

-> Fiber: un subproceso más avanzado que se encarga de la reconciliacion

---

Esto que tendriamos en "HTML":
```
<div className="container">Pepe</div>
```

En nuestro JavaScript seria:
```JavaScript
document.createElement("div");
```

React para renderizarlo no usa el document.createElement, sino:
```JSX
react.creeateElement('div', {className: 'container'}, 'Pepe')
```

---> es decir me va a crear un **div** que va a tener de propiedad el atributo **className** con el valor **container** (esta entre {} porque se pasa como un objeto con key-value) y dentro va a tener **Pepe** como texto.

---

## <img src="https://img.icons8.com/color/40/000000/npm.png"/> npm

- **Node Package Manager**, es un manejador de paquetes (son librerias) que terceros las crean, por eso hay que ver con que se trabaja.

- Comandos:

```npm i nombre_paquete``` ò ```npm install nombre_paquete``` -> para instalar

```npm un nombre_paquetew``` ó ```npm uninstall nombre_paquete``` -> para desinstalar

```npm init``` ó ``` npm init -y``` -> para crear un nuevo paquete

```npm update nombre_paquete``` -> para actualizarlo (aca hay que teer cuidado que no se nos rompa todo.

- En **node_modules** están todos y en el **package.json** voy a tener el detalle de las librerias y las versiones utilizadas.

- Dentro del **package.json** tengo el **script** donde puedo poner mis propios comandos.

- La pagina es [https://www.npmjs.com/](https://www.npmjs.com/)

---

### <img src="https://img.icons8.com/dusk/40/000000/webpack.png"/> webpack

- Es un **empaquetador de modulos**, trabaja como **compilador**, vincula todos los elementos del proyecto para el proyecto definitivo. Gestiona las dependencias, la ejecucion de tareas. Carga y usa modulos de todo tipo. Gestiona dependencias. Trabaja como servidor para renderizar la aplicacion en el browser.

- Task runner, procesa los archivos para poder mostrarlos en el navegador.

- No es sencillo configurar webpack.

- Nos sirve como servidor y como compilador.

---

### <img src="https://img.icons8.com/dusk/40/000000/babel.png"/> Babel

- Es un **traspilador**, transcribe le codigo posterior a ES6 (ECMA script 2015), para que sea compatible con los navegadores viejitos.

---

### JSX

- JavaScript XML

- Las etiquetas deben tener todas sus cierre, por eso la imagen es ```<img />```

- No podemos utilizar **class** por ser palabra reservada (en JS es clase), por lo que usamos **className**, lo mismo con el atributo **for** que en JS es para el bucle por lo que hay un **htmlFor**.

---

### Frameworks para CSS

- <img src="https://img.icons8.com/color/40/000000/bootstrap.png"/> [Bootstrap React](https://react-bootstrap.github.io/)

- <img src="https://img.icons8.com/color/40/000000/tailwind_css.png"/> [Tailwind React](https://tailwindcss.com/docs/guides/create-react-app)

- <img src="https://img.icons8.com/color/40/000000/material-ui.png"/> [Material UI](https://mui.com/)

- <img src="https://img.icons8.com/emoji/40/000000/artist-palette.png"/> [Styled Components](https://styled-components.com/) (de todas es el más complejo)

#### Tailwind

[https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

1. Para instalarlo:
```
npm install -D tailwindcss postcss autoprefixer
```

2. Para inicializarlo:
```
npx tailwindcss init -p
```

**tailwind.config.js** ahi me puedo crear mis clases para usarlas en tailwind.

3. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Start your build process

Run your build process with npm run start.

Terminal
```
npm run start
```

6. Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

App.js
```JSX
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```


Como las clases me van a quedar muy larga con Tailwind, las voy guardando en variables:
```JSX
export default function App() {
const hello = "text-3xl font-bold underline";

  return (
    <h1 className={hello}>
      Hello world!
    </h1>
  )
}
```

-> Lo mismo puedo hacer con **Bootrstrap**:
```JSX
import "./styles.css";

export default function App() {
  const hello = "text-center my-5 bg-success p-2 text-dark bg-opacity-10";
  return (
    <>
      <div>
        <h1 className={hello}>Holis</h1>
      </div>
    </>
  );
}
```

-> Se puede ver [en este sandbox](https://codesandbox.io/s/primer-practica-codo-a-codo-oftwie)

Armamos un menu:
```JSX
import "./styles.css";

export default function App() {
  const hello = "text-center my-5 bg-success p-2 text-dark bg-opacity-10";
  const menu = [
    "Inicio", 
    "Servicios", 
    "Nosotros", 
    "Contacto"
  ]
  
  return (
    <>
      <div className="container">
        <h1 className={hello}>Primer practica de React</h1>
      </div>
      <nav>
        <ul className="row">
          { menu.map(item => 
            <li 
              key={item} 
              className="col-3" 
            >
              {item}
            </li>
          )}
        </ul> 
      </nav>   
    </>
  );
}
```

Pero nuestro return nos queda muy largo, es mejor comenzar a componetizar.

Mi estructura queda asi:
```
>public
>src
    >components
        Menu.jsx
    App.js
    index.js
    styles.css
package.json
```

App.js:
```JSX
import { Menu } from "./components/Menu";
import "./styles.css";

export default function App() {
  const hello = "text-center my-5 bg-success p-2 text-dark bg-opacity-10";
  
  return (
    <>
      <div className="container">
        <h1 className={hello}>Primer practica de React</h1>
      </div>
      <Menu />
    </>
  );
}

```

Menu.jsx:
```JSX
export const Menu = () => {
  const menu = ["Inicio", "Servicios", "Nosotros", "Contacto"];

  return (
    <nav>
      <ul className="row">
        {menu.map((item) => (
          <li key={item} className="col-3">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
```

---> Ahora vamos a pasar **porps** y a trabajar con un **boton** y un **evento**
App.js:
```JSX
import { Menu } from "./components/Menu";
import "./styles.css";

export default function App() {
  const hello = "text-center my-5 bg-success p-2 text-dark bg-opacity-10";
  const numero = 0;
  function clickHandler() {
    console.log(numero);
  }

  return (
    <div className="container">
      <div className="container">
        <h1 className={hello}>Primer practica de React</h1>
      </div>
      <Menu nuevaOpcion="Productos" />
      <div className="d-grid gap-2 my-3 mx-3">
        <button className="btn btn-primary" onClick={clickHandler}>
          Soy un boton
        </button>
      </div>
    </div>
  );
}
```

Menu.js:
```JSX
export const Menu = ({ nuevaOpcion }) => {
  const menu = ["Inicio", "Servicios", "Nosotros", "Contacto"];
  console.log(nuevaOpcion);
  const cols = "col-sm-12 col-md-2 text-center nav-item";

  return (
    <nav>
      <ul className="row nav">
        {menu.map((item) => (
          <li key={item} className={cols}>
            {item}
          </li>
        ))}
        <li className={cols}>{nuevaOpcion}</li>
      </ul>
    </nav>
  );
};
```

![como va quedando el componente](https://user-images.githubusercontent.com/72580574/198898552-be5f7127-00c0-4d6a-9c62-7ab58c4c1291.png)


---
---

## :star: Clase 19/09

-> Los **componentes** son partes de la **UI** y se pueden reutilizar.

-> Dentro del componente le podemos pasar **props** para utilizar esa información, para poder ir modificarlos

### Hooks

Elementos que vinculan el DOM con el codigo, con las cosas que  hacemos, ya que al trabajar con el virtual DOM le tenemos que avisar al DOM, mediante estos elementos intermediarios (los hooks).


### Estructura de mi proyecto

```
src
    assets
        fonts
        images
    components
        NavBar 
            Logo.jsx
            Pages.jsx
    pages
    App.cs
    App.js
    index.css
    index.js
    .gitignore
    package-lock.json
    package.json
    README.md
```

-> Seguimos componentizando el proyectito:

Menu.jsx:
```JSX
export const Menu = ({ nuevaOpcion }) => {
  const menu = ["Inicio", "Servicios", "Nosotros", "Contacto"];
  console.log(nuevaOpcion);
  const cols = "col-sm-12 col-md-2 text-center nav-item";

  return (
    <nav>
      <ul className="row nav">
        {menu.map((item) => (
          <li key={item} className={cols}>
            {item}
          </li>
        ))}
        <li className={cols}>{nuevaOpcion}</li>
      </ul>
    </nav>
  );
};
```

Title.jsx
```JSX
export const Title = ({ text }) => {
  
  const hello = "text-center my-5 bg-success p-2 text-dark bg-opacity-10";

  return (
    <div className="container">
        <h1 className={hello}>{text}</h1>
    </div>
  );
};
```

App.js:
```JSX
import { Menu } from "./components/Menu";
import { Title } from "./components/Title";
import "./styles.css";

export default function App() {
  const numero = 0
  function handleClick() {
    console.log(numero);
  }

  return (
    <div className="container">
      <Title text="Primer practica de React"/>
      <Menu nuevaOpcion="Productos" />
      <div className="d-grid gap-2 my-3 mx-3">
        <button 
          className="btn btn-primary" 
          onClick={handleClick}>
          Soy un boton
        </button>
      </div>
    </div>
  );
}

```
---
---

## :star: Clase 21/09

- useEffect es un hook que trabaja con tareas secundarias en nuestra pagina.

Por ejemplo va a ir escuchando para ver cuando recibimos los datos y ahi los renderiza.

```JSX
useEffect(()=> {
  if(!iniciado) {
    return;
  }
  
  setTimeOut(() => {
    setValor(valor+1);
  })
}, [iniciado, valor])
```

Si usariamos setInterval, como tiene un tiempo de espera se nos van a ir acumulando y nos va a ir sumando mal, por eso usamos SetTimeOut, que se ejecuta una sola vez, pero con el useEffect lo vamos a ir modificando cada vez que varie.


---
---

## :star: Clase 26/9

---

## React Bootstrap

- Web : [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)

- Instalar: ```npm install react-bootstrap bootstrap``` de este modo vamos a tener tanto **react-bootstrap** como **bootstrap**

---

## Hook useState, useEffect, useRef

UseState.jsx
```JSX
import { useState } from "react";

export const useState = () = {
  const [state, setState] = useState(0);
  const clase = "d-flex border border-2 bg-light p-2 round justify-between align-item-center";
  
  function changeState() {
    setState(state + 1);
  }
  
  return (
    <div className={clase}>
      <h1>El useState:</h1>
      <h3>{ state }</h3>
      <button 
        className="btn btn-outline-primary"
        onClick={changeState}
      >
        Haceme click
      </button>
    </div>
  );
}
```

-> eventos sinteticos, no son las funciones de evento del DOm, son no reales que luego React los vincula con los del DOM.

-> Con el **useState** siempre debo aclarar que valor inicial tiene. Y luego en cada click del boton, con el changeState lo voy a ir cambiando con el **setState**.

UseEffect.jsx:
```JSX
import { useState } from "react";
import { useEffect } from "react";

export const UseEffect = ( { clase }) => {
  
  const [valores, setValores] = useState({})
  
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/bitboin")
      .then(respuesta => respuesta.json())
      .then(datos => 
          setValores({
            ars: datos.market_data.current_price.ars,
            usd: datos.market_data.current_price.usd
          })
       }) 
    .catch(err=> conosle.log("Hubo un error"))
  }, [valores])

  return (
    <div>
      <h2>Precio del Bitcoin:</h2>
      <h3>{valores.ars && valores.ars} ARS - {valores.usd && valores.usd}</h3>
      <button
        className="btn"
        
      >
        Actualizar
      </button>
    <div>
  )
}
```

-> El **fetch** trabaja de modo asincrono, va a hacer la peticiony cuando este responde, voy a tener una **promesa pendiente**, por eso luego tengo el **then**



UseRef.jsx:
```JSX
import { useRef } from "react";

export const UseRef = () => {

  const valorRef = useRef(5);
  const datosRef = useRef();
  
  const handlerCLick = () {
    valor.current = valorRef.current + 10;
    console.log("valor ref.current: ", valorRef.current)
  }

  return (
    <div
      clasName={ clase }
      ref={ datosRef }
    >
      <h1>useRef:</h1>
      <h2>{valorRef.current.getBoundlingReact()} </h2>
      <button
        onCLick={handlerClick}
      >Click Me</button>
    </div>
  )

}

```

-> getBoundlingReact()  es como una referencia a donde esta un elemento, ya que no estamos trabjanaod con JS puro y no tenemos el document.getElementById.

---

-> useLayoutEffect si esta junto a useEffect, se va a ejecutar antes el useLeyoutEffect

---

## onClickCapture



---
---
