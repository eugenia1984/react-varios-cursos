# :book: React JS - Curso de introducción desde cero y primeros pasos

En este curso aprendí los fundamentos básicos de **React** desde cero y paso a paso con *Víctor Robles*. Instalación, Componentes, JSX y más.


---

## :star:  ¿Hay requisitos para realizar el curso?

- Saber utilizar un sistema operativo

- Tener un editor de código instalado

- Saber HTML y JavaScript básico

- NO es necesario saber nada de React, ni de ningún otro framework


---

## :star:  ¿Para quién es este curso?

- Desarrolladores web

- Estudiantes de informática

- Estudiantes de ciclos formativos

- Estudiantes de ingeniería

- Apasionados por la programación

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

---

### 2 - Estructura del proyecto 

- **README.md** con un poco de documentación

- **package.json** es el archivo de configuración del proyecto.

- **package-lock.json** al instalar las dependencias

- **.gitignore** que archivos no quiero subir al repositorio del github, como el node-modules

- **src** con: **logo.svg** (el logo de React), **index.js** (cargar e importar todo lo principal de React, la hoja de estilos, los componentes, la librerñia, y renderiza el componente que ca en el div con id root), **index.css** (la hoja de estilos), **app.test.js** (un fichero para hacer testing),**app.js** (es un componente, es todo lo que se ve, el que se carga en el index.js)

- **public** con: **index.html** (donde esta el div con id root que renderizo), **favicon.ico** (el icono que se ve en el browser), **logo192.png** (logo de react), **logo512.png** (logo de react), **manifest.json**, **robots.txt**

- **node_modules**


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

Un componente recibe parametros, propiedades, procesa una lógica, hace una funcionalidad.

Da soporte a una vista

Tenemos el componente **app.js**

---

### 6 - Conocer las bases de este framework de Facebook


---

### 7 - Ejercicio con JSX y más 

---