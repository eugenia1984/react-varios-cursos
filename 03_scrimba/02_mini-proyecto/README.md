## Segundo mini-proyecto

En esta carpeta [02_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/04_scrimba/02_mini-proyecto) pueden ver el segundo mini proyecto, un lista mostrada en una pagina con React.


---

## ¿ Qué pasos hice?

- En el **head** debo relacionar con **React**:
```html
    <!--Para usar React DOM-->
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

- Para usar **babel** agrego **tex/babel** como atrubito a mi archivo JavaScript:

```html
<!-- Para usar Babel-->
<script src="index.js" type="text/babel"></script>
```

- En el **html** debo tener indicado donde voy a agregar React, en este caso es con un nuevo **div** con el **id=root**:
 ```html 
<div id="root"></div>
```

- En el archivo JavaScript, utilizo la variable global **ReactDOM** y el método **render**, entre los **()** primero escribo en etiquetas html que quiero renderizar en el DOM (```<ul><li>Esta es</li><li>mi primer</li><li>lista</li><li>desordenada</li><li>con React</li></ul>```), y luego con **document.getElementoById** indico donde lo voy a renderizar```root```, es algo similar al node.append(child):

```JavaScript
ReactDOM.render(
  <ul><li>Esta es</li><li>mi primer</li><li>lista</li><li>desordenada</li><li>con React</li></ul>, 
  document.getElementById("root")
);
```

---
