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

En la carpeta [03_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/03_mini-proyecto) la tercer practica con una NavBar de Botstrap vamos a crear el primer componente que sera el NavBar.
---

## :book: ¿ Por qué React ?

1. Porque nos permite hacer **codigo componible**, es decir usamos pequeñas partes para crear algo más grande, como cuando somos chicos y usamos los Legos.

Nos permite hacer componentes, asi podemos tener una con la barra navegadora, y si tengo muchas páginas que la utilizan lo puedo guardar en un componente para poder reutilizarlo, asi el código se hace más amntenible y flexible.

Hay un pequeño ejemplo en la carpeta [03_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/03_mini-proyecto).

2. Porque es **declarativo**.

---

## :star: Primer proyecto * Página estática en React

En este Figma está el diseño para ver: [https://www.figma.com/file/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0%3A4](https://www.figma.com/file/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0%3A4). 

En una página estática, como las que se hacen con HTML y CSS, pero empezando a usar React, para así poder aprender la sintaxis básica y el vocabulario de React.

Se aprende a cómo pensar en React, porque se modifica el modo de crear aplicaciones.

Temas que se ven:

- JSX

- componentes

- aplicar CSS


---
