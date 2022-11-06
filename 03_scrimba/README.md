# <img src="https://img.icons8.com/clouds/100/null/react.png"/> Scrimba * React

Todo el curso lo podés ver acá: [https://scrimba.com/learn/learnreact](https://scrimba.com/learn/learnreact), es de **Bob Ziroll**

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

## <img src="https://img.icons8.com/dusk/50/null/untested.png"/> Proyectos

### Primer mini-proyecto

En la carpeta [01_setup](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/01_setup) pueden ver el primer mini proyecto, un simple mensaje mostrado en una pagina con React.

### Segundo miniproyecto

En la carpeta [02_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/02_mini-proyecto)  hay un segundo ejercicio de practica, esta vez en vez de solo renderizar una etiqueta ```<h>``` se despliega una lista.

### Tercer miniproyecto

En la carpeta [03_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/03_mini-proyecto) la tercer practica con una NavBar de Bootstrap vamos a crear el primer componente que sera el NavBar y luego crearemos nuestro segundo componente funcional.

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

##:book: Drag and Drop en Netlify

1. Hacerse una cuenta en **Netlify**, se puede conectar con el email y con github

2. Vamos a [Netlify Drop](https://app.netlify.com/drop?utm_source=scrimba&utm_medium=referral&utm_campaign=learnreact) y simplemente hacemos el drag & drop de todos los archivos (los tenemos que tener a todos dentro de una sola carpeta).

3. Vamos a ir al dashboard y tendremos el link del proyecto, y lo podremos compartir con todos para que lo vean.

---

### Saludos CDNs

Dejaremos de utilizar Scrim y lo haremos con React, ya no vamos a tener los links al CND ni el JavaSCript con el type text/babel.

Vamos a agregar las dependencias que necesitamos:

- react

- react-dom

-> Estas dependencias va a ser similar a las dependencias de Node.js

-> No voy a tneer mas las variables globales como  ReactDOM -> voy a tener ahora que importar todo:
```JSX
import REact from "react";
```
Pero en la version de 17 en adelante ya no necesitamos importar React, se usa nativamente con JSX.


---

## :star: Primer proyecto * Página estática en React

En este Figma está [el diseño para ver](https://www.figma.com/file/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0%3A4). 

![image](https://user-images.githubusercontent.com/72580574/200196250-ec76c280-a6f6-4b79-ba73-92dac7779299.png)


En una página estática, como las que se hacen con HTML y CSS, pero empezando a usar React, para así poder aprender la sintaxis básica y el vocabulario de React.

Se aprende a cómo pensar en React, porque se modifica el modo de crear aplicaciones.

Temas que se ven:

- JSX

- componentes

- aplicar CSS


---