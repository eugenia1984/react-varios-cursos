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

---
---

## :star: Clase 14/09

React es **reactivo**

**Reconciliación** cuando unifica el VIRTUAL DOM al DOM.

**Flujo de datos unidireccional** del componente padre al componente hijo.

**Proceso** -> **Subproceso** -> **Treads** -> **Fiber** (un subproceso más avanzado)

---

```<div className="container">Pepe</div>```


```react.creeateElement('div', {className: 'container'}, 'Pepe')```

---

## npm

Node Package Manager, es un manejador de paquetes (son librerias) que terceros las crean, por eso hay que ver con que se trabaja.

Comandos:

```npm i nombre_paquete``` ò ```npm install nombre_paquete``` para instalar

```npm un nombre_paquetew``` ó ```npm uninstall nombre_paquete``` para desinstalar

```npm init``` para crear un nuevo paquete

```npm update nombre_paquete``` para actualizarlo (aca hay que teer cuidado que no se nos rompa todo

En **node_modules** están todos y en el **package.json** voy a tener el detalle de las librerias y las versiones utilizadas.

Dentro del **package.json** tengo el **script** donde puedo poner mis propios comandos.

---

### webpack

Es un empaquetador de modulos, trabaja como compilador, vincula todos los elementos del proyecto para el elemento definitivo. Gestiona las dependencias, la ejecucion de tareas. Carga y usa modulos de todo tipo.

Task runner, procesa los archivos para poder mostrarlos en el navegador.

No es sencillo configurar webpack.

Nos sirve como servidor y como compilador.

---

### Babel

Es un traspilador, transcribe le codigo posterior a ES6, para que sea compatible con los navegadores viejitos.

---

### JSX

JavaScript XML

Las etiquetas deben tener todas sus cierre, por eso la imagen es ```<img />```

No podemos utilizar **class** por ser palabra reservada (en JS es clase), por lo que usamos **className**, lo mismo con el atributo **for** que en JS es para el bucle por lo que hay un **htmlFor**.

---

### Frameworks para CSS

- Bootstrap React

- Tailwind React

- Material UI

- Styled Components (de todas es el más complejo)

#### Tailwind

[https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

1. Para instalarlo:
```
npm install -D tailwindcss postcss autoprefixer
```

2. Para inciializarlo:
```
npx tailwindcss init -p
```

**tailwind.config.js** ashi me puedo crear mis clases para usarlas en tailwind.

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

---
---

## :star: Clase 19/09

Dentro del componente le podemos pasar props para utilizar esa información

### Hooks

Elementos que vinculan el DOm con el codigo, con las cosas que  hacemos, ya que al trabajar con el virtual DOm le tenemos que avisar al DOM.


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
