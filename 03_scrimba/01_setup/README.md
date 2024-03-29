## Primer mini-proyecto

En esta carpeta [setup](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/01_setup) pueden ver el primer mini proyecto, un simple mensaje mostrado en una pagina con React.

---

## ¿ Qué pasos hice?

- En el **head** debo relacionar con **React**:
```html
    <!--Para usar React DOM-->
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

- Para usar **babel** agrego **tex/babel** como atrubito a mi archivo **JavaScript**:

```html
<!-- Para usar Babel-->
<script src="index.js" type="text/babel"></script>
```

- En el **html** debo tener indicado donde voy a agregar React, en este caso es con :
 ```html 
<div id="root"></div>
```

- En el archivo JavaScript, utilizo la variable global **ReactDOM** y el método **render**, entre los **()** primero escribo en etiquetas html que quiero renderizar en el DOM, y luego con **document.getElementoById** indico donde lo voy a renderizar, tambien podria usar **document.querySelector(#id)**, es algo similar al node.append(child):

```JavaScript
ReactDOM.render(<h1>Hola!!</h1>, document.getElementById("root"))
```

-> Entonces me queda asi:
![image](https://user-images.githubusercontent.com/72580574/200191998-abc60fff-8a8b-4e3c-b495-ee7f2b60aff8.png)


---

:tv: -> [Aca lo pueden ver desde un SandBox](https://codesandbox.io/s/mini-proyecto1-4mjh8q)


Asi es el codigo:
![image](https://user-images.githubusercontent.com/72580574/200194257-4bf68dfc-ac78-4aa2-bbde-43213642cfaa.png)


---
