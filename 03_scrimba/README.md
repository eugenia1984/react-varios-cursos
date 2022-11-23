# <img src="https://img.icons8.com/clouds/100/null/react.png"/> Scrimba * React

Todo el curso lo podés ver acá: [https://scrimba.com/learn/learnreact](https://scrimba.com/learn/learnreact), es de **Bob Ziroll**


---

##  <img src="https://img.icons8.com/dusk/50/null/untested.png"/> MiniProyectos

### 1er mini-proyecto

En la carpeta [01_setup](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/01_setup) pueden ver el primer mini proyecto, un simple mensaje mostrado en una pagina con React.

:tv: -> [Aca lo pueden ver desde un SandBox.io](https://codesandbox.io/s/mini-proyecto1-4mjh8q)


### 2do miniproyecto

En la carpeta [02_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/02_mini-proyecto)  hay un segundo ejercicio de practica, esta vez en vez de solo renderizar una etiqueta ```<h>``` se despliega una lista.

:tv: -> [Aca lo pueden ver en SandBox.io](https://codesandbox.io/s/mini-proyecto2-ujpmko)


#### 3er miniproyecto

En la carpeta [03_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/03_mini-proyecto) la tercer practica con una NavBar de Bootstrap vamos a crear el primer componente que sera el NavBar y luego crearemos nuestro segundo componente funcional.


### 4to Miniproyecto

Hago una mini homePage, con **Header** (logo con una lista que es el menu), **List** y **Footer**, trabajando separando en componentes y estilando con CSS.

:tv: -> [Aca pueden ver el proyecto en Sandbox.io](https://codesandbox.io/s/mini-proyecto4-rm4z2q)


##  <img src="https://img.icons8.com/dusk/50/null/untested.png"/> Proyectos


### 1er proyecto: Página estática en React

![image](https://user-images.githubusercontent.com/72580574/200196250-ec76c280-a6f6-4b79-ba73-92dac7779299.png)


En una página estática, como las que se hacen con HTML y CSS, pero empezando a usar React, para así poder aprender la sintaxis básica y el vocabulario de React.

Se aprende a cómo pensar en React, porque se modifica el modo de crear aplicaciones.

Temas que se ven:

```
- JSX
- componentes
- aplicar CSS
```

-> :computer: [aca pueden ver la teoria](https://github.com/eugenia1984/scrimba-project1)

-> :computer: [aca se puede ver deployado](https://scrimba-proyect1.netlify.app/)


### 2do proyecto: Clone de las experiencias de airbnb

![image](https://user-images.githubusercontent.com/72580574/200696130-a2a9bec3-6564-443f-8557-fd207560766b.png)

Temas que se ven:

```
- props
- crear componentes desde un array de datos
```

-> [Aca se puede ver el diseño en Figma](https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1&t=7dq2BK8ToYT7D9wQ-0)

-> [Aca pueden ver el la teoria](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/05_experiencias_airbnb)

-> [Aca pueden ver el proyecto en codigo](https://github.com/eugenia1984/scrimba-project2)

---
---

## :book: ¿ Como setear React de modo simple y correcto ?

- El **modo simple**

En la documentación de React vemos cómo incluir React en el proyecto [https://reactjs.org/docs/cdn-links.html](https://reactjs.org/docs/cdn-links.html):


React y ReactDOM están disponibles por CDN
```
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```


- La **opción minificada**:

```
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

Y también vamos a agregar **JSX** con **babel**:

```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

*Now you can use JSX in any* ```<script>``` *tag by adding* ```type="text/babel"``` *attribute to it.*

---
---

## :book: ¿ Por qué React ?

1. Porque nos permite hacer **codigo componible**, es decir **usamos pequeñas partes para crear algo más grande**, como cuando somos chicos y usamos los Legos.

Nos permite hacer componentes, asi podemos tener una con la barra navegadora, y si tengo muchas páginas que la utilizan lo puedo guardar en un componente para poder reutilizarlo, asi el código se hace más amntenible y flexible.

Hay un pequeño ejemplo en la carpeta [03_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/03_mini-proyecto).

2. Porque es **declarativo**. Es decir se dice que debe hacerse. El opuesto es ser **imperativo**, cuando decimos cómo debe ser hecho (asi se hace con vanilla JavaScript).

Con React **declarativo**:
```JSX
ReactDOM.render(<h1 className="header">Hola</h1>, document.getElementById("root"))
```

Con vanilla JavaScript **imperativo**:
```JavaScript
const h1 = document.createElement("h1");
// Le voy a dar el texto que renderizara
h1.textContext = "Este es un modo imperativo de programar";
// le voy a asignar una clase
h2.classname = "header";
// lo appendeo al div de id root
document.getElementById("root").append(h1);
````


---
---

## :book: JSX

- **JSX** -> **JavaScript XML** se parece mucho a HTML con JavaScript.

- Tiene el beneficio de poder utilizar HTML, pero con algunas diferencias...

... en vez de utilizar **class** ahora utilizaremos **className**.

Lo vemos con un codigo de ejemplo:
```JSX
const element = <h1 className="header">Esto es JSX</h1>;
console.log(element);
/*
{
  type:"h1", 
  key: null, 
  ref: null, 
  props: {
    classname: "header", 
    children: "Esto es JSX"}
  }, 
  _owner: null, 
  store: {}
 }
*/
ReactDOM.render(element, document.getElementById("root"));
```

-> Si vemos **React** esta creando un **object** de JavaScript, y vemos que dentro tiene el objeto **propr** (propiedades). Con estos objetos React los interpreta y los renderiza en la UI. Si tuviera un return con un div padre y los hijos en  el children tendria nuevos object que seria cada una de las etiquetas hijas

- Siempre debemos renderizar **un solo elemento padre**, no podemos tener dos etiquetas hermanas, debemos tener un padre que englobe todo, si no tneemos un padre usamos un **div** o sino un **fragment**(```<> </>```). Hijos puedo tener tantos como necesite.

-> Podriamos guardar todo en una variable, lo que si me voy a tener que ayudar con los ():
```JSX
const page = (
  <div>
    <h1 className="header">Esto es JSX</h1>
    <p>Esto es un parrafo.</p>
  </div>
)

ReactDOM.render(
  page, 
  document.getElementById("root")
);
```

---
---

## :book: Drag and Drop en Netlify

1. Hacerse una cuenta en **Netlify**, se puede conectar con el email y con github

2. Vamos a [Netlify Drop](https://app.netlify.com/drop?utm_source=scrimba&utm_medium=referral&utm_campaign=learnreact) y simplemente hacemos el drag & drop de todos los archivos (los tenemos que tener a todos dentro de una sola carpeta).

3. Vamos a ir al dashboard y tendremos el link del proyecto, y lo podremos compartir con todos para que lo vean.

---
---

### :book: Saludos CDNs

Dejaremos de utilizar Scrim y lo haremos con React, ya no vamos a tener los links al CND ni el JavaSCript con el type text/babel.

Vamos a agregar las dependencias que necesitamos:

- react

- react-dom

-> Estas dependencias va a ser similar a las dependencias de Node.js

-> No voy a tener mas las variables globales como  ReactDOM -> voy a tener ahora que importar todo:

```JSX
import React from "react";
import ReactDOM from "react-dom";

const navBar = (
  <nav>
    <h1>Bob´s bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar, 
  document.getElementById("root")
);
```
Pero en la version de 17 en adelante ya no necesitamos importar React, se usa nativamente con JSX.

-> Si usamos la version **18** de React vamos a tener que cambiar lo de ReactDOM.render por **createRoot**:

index.js:
```JSX
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
```

---
---

## :book: Usamos .append() en vez de ReactDOM.render()

- Challenge:

Ver como usar .append() JSX en el div con id root, en vez de ReactDOM.

Los pasos a seguir:

1. Crear una pagina en JSC con al menos 4 elementos y guardarlo en variable.

2. Seleccionar el div con id root y utilizar .append() para apendear el JSX

3. Tratar de adivinar que va a mostrar el browser antes de renderizarlo

4. Tratar de explicar que se renderizo en el browser

-> Lo vemos en codigo:

```JSX
import React from "react";

const page = (
  <div>
    <h1>Mi increible websie de React</h1>
    <h2>Estas son las raones por las que amo React</h2>
    <ol>
      <li>Codigo componible</li>
      <li>Es declarativo</li>
      <li>Es mantenido activamente</li>
    </ol>
  </div>
)

document.getElementById("root").append(page)
```

-> Vamos [object Object] en el navegador. Vamos a modificarlo:

```JSX
document.getElementById("root").append(JSON.stringify(page))
```
-> Tenemos un objeto JavaScript. Ahora otamos que recien cuando utilizamos **ReactDOM.render()** es que React tome este objeto y lo va a transformar para poder renderizarlos en la UI, lo cambia a elementos del DOm que el navegador lo puede entender.

-> Seguimos modificando el codigo:

```JSX
import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <h1>Mi increible websie de React</h1>
    <h2>Estas son las raones por las que amo React</h2>
    <ol>
      <li>Codigo componible</li>
      <li>Es declarativo</li>
      <li>Es mantenido activamente</li>
    </ol>
  </div>
)

ReactDOM.render(
  page, 
  document.getElementById("root")
)
```

---
