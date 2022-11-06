# :book: React JS - Curso de introducción desde cero y primeros pasos

En este curso aprendí los fundamentos básicos de **React** desde cero y paso a paso con *Víctor Robles*. Instalación, Componentes, JSX y más.


---

## :star:  ¿Hay requisitos para realizar el curso?

```
- Saber utilizar un sistema operativo
- Tener un editor de código instalado
- Saber HTML y JavaScript básico
- No es necesario saber nada de React, ni de ningún otro framework
```

---

## :star:  ¿Para quién es este curso?

```
- Desarrolladores web
- Estudiantes de informática
- Estudiantes de ciclos formativos
- Estudiantes de ingeniería
- Apasionados por la programación
```

---


## :star: Lo que aprendí:

### 1 - Instalar React

Librería creada por Facebook, para desarrollar interfaces de usuarios completamente dinçamicas, reactivas y asíncronas con el servidor.

Primero hay que descargar NOdeJS y tenerlo instalado.

En Mac y Lunix se abre la terminal, en Windows el sistema; para actualizar npm (el gestor de paquetes de Node que nos sirve para bajarnos las dependencias, las librerías y paquetes de JavaScript).

```
npm install -g npm@latest
```

**-g** para decir que es una actualización global

Para saber la version:

```
npm --version
```

Veo que tengo la **8.5.5**

Para limpiar la cache de Node:

```
npm cache clean --force
```

Para limpiar consola:

```cls``` en windows o ```clear``` para linux o mac

Para instalar React vamos a utilizar un paquete **create react app**, es un modulo de nodejs. Es un interprete de consola, que ya incluye Web Pack y un Live Reload. También un scarfolding (una estructura básica).

```
npm install -g create-react-app
```

Tengo que ir al directorio donde voy a estar trabajando. Primero me asegura tener instalado la version 14 o más de NodeJS Y luego creo el proyecto con el comando:

```
create-react-app nombre_del_proyecto
```

Tener en cuenta que el nombre del proyecto no puede empezar con UpperCamelCase, ni camelCase, debe estar todo en minuscula.

Y se nos crea todo el proyecto.

También nos da unos comandos:

Inside that directory, you can run several commands:

``` npm start ``` ->    Starts the development server.

``` npm run build ``` ->   Bundles the app into static files for production.

```  npm test ``` ->     Starts the test runner.

```  npm run eject``` ->    Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

``` cd aprendiendoreact ```

``` npm start```

Una vez creado el proyecto si quiero utilizar camelCase o UpperCamelCase, le cambio el nombre

En windows para ver los directorios es con ```dir```, en Linux y Mac es con ```ls```

asi veo el listado y entro al directorio dle proyecto recien creado

```
cd aprendiendoreact
```
Y lo inicializo con ```npm start```

En consola veo

```
Starting the development server...
Compiled successfully!
You can now view aprendiendoreact in the browser.

Local:            http://localhost:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

```

Me va a abrir mi navegador web en ***http://localhost:3000/***



- Recordar siempre dejar abierta la consola con el npm start, porque de esta forma le levanta el servidor local y puedo ver el proyecto.

---

:tv: -> [En el directorio aprendiendoreact esta la primer practica](https://github.com/eugenia1984/react-con-Udemy/tree/main/01_react_js_curso_de_introduccion_desde_cero_primeros_pasos/aprendiendoreact)

-> Le hacemos algunos cambios en el **App.js** y nos queda:

```JSX
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

import MiComponente from "./components/MiComponente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola, bienvenidos a la primer práctica de REACT.</p>
      </header>
      <section className="componentes">
        <MiComponente />
      </section>
    </div>
  );
}

export default App;
```

Que en el nvegador se va a ver asi:

![image](https://user-images.githubusercontent.com/72580574/200187161-996e4899-0ef2-4b6e-a9f4-6e1addf4fe77.png)

---

### 2 - Estructura del proyecto 

- **README.md** con un poco de documentación

- **package.json** es el archivo de configuración del proyecto.

- **package-lock.json** al instalar las dependencias

- **.gitignore** que archivos no quiero subir al repositorio del github, como el node-modules

- **src** con: **logo.svg** (el logo de React), **index.js** (cargar e importar todo lo principal de React, la hoja de estilos, los componentes, la librerñia, y renderiza el componente que ca en el div con id root), **index.css** (la hoja de estilos), **app.test.js** (un fichero para hacer testing),**app.js** (es un componente, es todo lo que se ve, el que se carga en el index.js)

- **public** con: **index.html** (donde esta el div con id root que renderizo), **favicon.ico** (el icono que se ve en el browser), **logo192.png** (logo de react), **logo512.png** (logo de react), **manifest.json**, **robots.txt**

- **node_modules** donde voy a tener todas las librerias de react instaladas

![image](https://user-images.githubusercontent.com/72580574/200187193-82942982-c4cf-41bd-bb7b-bcfd7431a550.png)


---

### 3 - Trabajo básico con las plantillas de React y lo básico de JSX

Con **JSX** se pueden utilizar etiquetas de html con JavaScript; puedo agregar variables de JavaScript dentro de una etiqueta de html, sus funciones, todo. Lo que si NO se debe utilizar el punto y coma al final de la declaración como se hace con JavaScript.

Ejemplo de como utilizar una variable:

```JavaScript
import logo from './logo.svg';  //importo la imagen del logo

function App() {
  // aca puedo definir todas las variables que necesite
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
```

Ejemplo de como utilizar una funcion y variables, en este caso las variables van entre llaves, pero sin el $ delante:

```JavaScript
// Aca puedo tener funciones, dentro de la funcion puedo tener más de un renglon con etiquetas de html, como aca que tengo h2 y h3 siempre que las tenga dentro de un DIV
function HolaMundo(nombre, edad) {
  var presentacion = <div>
         <h2>Hola, soy {nombre} </h2>
         <h3>Tengo {edad} años </h3>
        </div>;
  return presentacion      
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {HolaMundo(Eugenia, 37)}
        </p>
      </header>
    </div>
  );
}

export default App;
```

También para dejar más explícito que es JSX puedo usar paréntesis, por ejemplo:

```JavaScript
function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre} </h2>
      <h3>Tengo {edad} años </h3>
    </div>
  );
  return presentacion      
}
```

Previene de inyecciones de código.

Es como un lenguaje de plantillas, me permite imprimir variables.

---
### 5 - Saber utilizar los componentes de React JS

¿Qué es un componente ? Es un pedazo de pantalla, la parte lógica que controla una parte de la pantalla, puedo tener varios componentes en una misma pantalla, puedo tner uno para el NavBar, otro para el footer, etc. Es una parte lógica de la aplicación la cual se va inscrustando en la pantalla. Todos los componentes hacen una pantalla completa.

Un componente recibe parámetros, propiedades, procesa una lógica, hace una funcionalidad.

Da soporte a una vista

Tenemos el componente **app.js**

#### ¿ Cómo crear componentes en React ?

Está el componente **App.js** que es el que viene por defecto dentro del directorio **src**. 

Se pueden hacer todos los componentes mezclados (html, css y js) o se los puede ir ordenando por carpetas, en el tutorial recomiendan tener :

**src** -> **components** y **assets**.

Y dentro de assets tener **images** y **css**. 

-> Entonces muevo los archivos: *App.css* y *index.css* dentro de esta nueva carpeta **css**. Ahora voy a tener que ajustar las rutas donde se cargan los archivos. Entonces en **App.js** : 
```JavaScript 
import './assets/css/App.css';
```

Y en **index.js**:
```JavaScript
import './assets/css/index.css';
```

-> el archivo *logo.svg* va dentro de la carpeta **images**. Y también ajusto la ruta en **App.js**:
```JavaScript
import logo from './assets/images/logo.svg';
```

-> De ahora en más los **componentes** los voy a ir cargando desde **components**. Y es muy sencillo, directamente dentro de mi directorio **components** creo el archivo .js. El nombre se debe poner en UppercamelCase. En este caso voy a crear:

**MiComponente.js**

Y dentro:

```JavaScript
// primero importo React, para tener dicho módulo
import React from 'React';
```


```JavaScript
// debo definir una clase dentro, en este caso la llamo como mi archivo MiComponente y hago que e¡herede de React.Component
class MiComponente extends React.Component {
  // el método RENDER es el que se va a encargar de mostrar información en pantalla, la vista que ve el usuario
   render() {
     // siempre debe tener un RETURN y entre los () va mi JSX
    return (
      <h1>Hola, soy el componente llamado: MiComponente</h1>
    );
  }
}
//Ahora debo EXPORTARLO para poder utilizarlo dentro de cualquier vista o componente de la aplicación y trabajar con el
export default MiComponente;
```

-> Felicitaciones! Quedo creado el primer componente :)

Ahora para mostrarlo o utilizarlo hay que ir a**App.js** e importarlo:

```JavaScript
import MiComponente from './components/MiComponente';
```

En JSX no puedo usar **calss** porque es una sintaxis mezclada entre HTML y JS, entonces debo utilizar **className**, porque sino **class** se me confunde con la **clase** creada en el archivo .js.

-> Entonces en **App.js** dentro de la función **App()** voy a renderizar mi componente dentro del **section** con **className ="componentes"**.

Y ... ¿cómo llamo a mi componente ? ``` <MiComponente />```


```JavaScript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola, bienvenidos a la primer práctica de REACT.
        </p>
      </header>
      <section className="componentes">
        <MiComponente />
      </section>
    </div>
  );
}
```

-> Como ya tengo creado mi primer componente, ahora lo puedo utilizar / llamar todas las veces que lo necesito, por se se reutiliza.

-> Si le paso propiedades, entonces cada componente va a tener una funcionalidad, es un objeto que va a ejecutar un metodo y va a tener su funcionalidad.




---

### 6 - Conocer las bases de este framework de Facebook

#### Formas de crear un componente:

- importando desde react y extendiendo React.Component

```JavaScript
import React from 'react';

class MiComponente extends React.Component {

}
```

- Usando desestructuración:

```JavaScript
import React, {Component} from 'react';

class MiComponente extends Component {

}
```

#### No puedo retornar más de un Nodo en la clase de mi componente

- Tener dos etiquetas html dentro de la clase del componente, dentro dle *return* -> **el return solo puede tener una sola etiqueta html**, no puede devolver dos nodos de html, lo que si puedo tener es una etqieuta padre que englobe a otras dos eqtiquetas hijas.


```JavaScript
class MiComponente extends Component {
  render() {
    return (
      // esto NO se puede hacer
      <h1>Hola, soy el componente llamado: MiComponente</h1>
      <h2> Estoy probando el componente </h2>
    );
  }
}
```


```JavaScript
class MiComponente extends Component {
  render() {
    return (
      // esto SI se puede hacer, solo devuelve la etiqueta DIV, es un solo nodo (dentro si tnego mas etiquetas hijas)
      <div className="mi-componnnte">
        <h1>Hola, soy el componente llamado: MiComponente</h1>
        <h2> Estoy probando el componente </h2>
      </div>
    );
  }
}
```

Otro modo, y mejor, de solucionarlo es creando un **React.Fragment**, que es un template, va a ser como una etqiqueta vacía donde puedo tener el codigo de HTML o de JSX.

```JavaScript
class MiComponente extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hola, soy el componente llamado: MiComponente</h1>
        <h2>Estoy probando el componente con React.Fragment</h2>
      </React.Fragment>
      
    );
  }
}
```

Estos **Fragment** NO crean etiquetas extras, crea el código tal cual.


![image](https://user-images.githubusercontent.com/72580574/200187275-6aece765-232e-42fe-9327-9c354f083d84.png)


#### Trabajando con variables

```JavaScript
class MiComponente extends Component {
  render() {
    //Siempre declaro mis variables fuera del return, antes del mismo
    // en este caso mi variable RECETA es un object JSON
    let receta = {
      nombre: 'pizza',
      ingredientes: ['tomate', 'queso', 'jamon cocido'],
      calorias: 400
    };
    // dentro del return voy a mostrar mi objeto pizza
    return (
      <React.Fragment>
        <h1>Hola, soy el componente llamado: MiComponente</h1>
        <h2>Estoy probando el componente con React.Fragment</h2>
        <hr/>
        <h2>Muestro mi objeto:</h2>
        <p>  {`Receta: ${receta.nombre}`} </p>
        <p> Ingredientes :</p>
        <ol> 
          {
            receta.ingredientes.map( (ingrediente, i) => {
              return (
                <li key={i}> {ingrediente}</li>
              )
            })
          }
        </ol>
        <p>{`calorias: ${receta.calorias}`} </p> 
      </React.Fragment>
      
    );
  }
}
```

¿ Para qué utilicé la *key* dentro del ```<li>``` para los elementos de los ingredientes de la pizza ?

Para localizar cada elemento del DOm. Esto se puede guardar en el state y se puede modificar en la vista.


![image](https://user-images.githubusercontent.com/72580574/200187284-6cd6cf74-3d9e-476d-9cca-e9ab74c5cbb7.png)


---
