# Tic Tac Toe: A playfull Intro to React (SKILL SHARE) 


## ¿ Queres aprender React de forma divertida?

En esta clase, aprenderás os conceptos claves de React mientras contruyes un juego de Tic Tac Toe.

Mientras construimos un juego completamente funcional, nos sumergimos en algunos conceptos básicos de React, como:

- Dividir la aplicaicón  o juego en partes pequeñas, en componentes.

- Como estructurar su logica y cómo conectar estos componentes con **props** y **callbacks**

- Como lidiar con el cambio, qué es el **estado**, qué alamcenar en él y cómo definirlo

- Como agregar **interacción** y cómo funciona el **renderizado** en React

También dibujaremos algunas imágenes básicas mediante codificación de SVG.

Es un curso introductorio, no requiere conocimiento previo de React, pero se requiere algunas habilidades básicas de **HTML**, **CSS** y **JavaScript**

---

## Componente



Nn **componente** es como una función por dos motivos...

... deberemos romper la aplicacion en pequeños componentes que tengan significado

... para evitar repetir el codigo, se crea una vez y se llama en varios lugares


->> Vamos a necesitar el componente principal, el **root** para inyectarlo en el HTML, que contenga a toda al app.

---

### ¿ Qué componentes necesitaremos en la app del tic tac toe ?

Viendo el tic-tac-toe hay cosas que se repiten, y serán los compoenntes:

- **X** (la equis) -> **cross**

- **O** (el circulo) -> **circle**

- hay una grilla con 9 **cuadrados**, donde vamos a ir poniendo las X ú O -> **square**

- Luego de jugar en esta aplicación vamos a tener que mostrar el resultado, si uno ganó o no -> **result**

---

En el curso lo hace en CodePen y el **Pen Settings** > **JavaSCript** > **Add External Scrips/Pens** va a agregar React y React DOM (siempre viendo que los numeros de versiones coincidan) y como **JavaScript Preprocesador** elije **Babel**.

---

Vamos a ver el primer componente

Y aunque te sorprenda, ocmo dijimos un **componente** es una funcion:

```JavaScript
function TicTacToe() {
  return <div>Hello from React!</div>;
}
```

Un componente es una función especial que está retornando que se ve como HTML, peor no es HTMl porque estamos dentro de JavaScript, entonces ¿como funciona?

En realidad, al tener Babel va a transpilar el JSX en JavaScript, en realidad en puro JavaScript sería así:

```JavaSCript
"use strict";

function TicTacToe() {
  return React.createElement("div", null, "Hello from React");
}
```

Bueno ahora tenemos al componente, pero en la pantalla todavía no lo vemos.

Es como tener una función que todavía no la invocamos, todavía no dijimos donde este HTML debe generarse, debemos tener un entry point en nuestro HTML.

```HTML
<h1>Hello World!</h1>
<p>This is some text</p>
<div is="app"></div>
```

En el div con id app vamos a inyectar el codigo (se puede usar el id que se quiera, en general se suele usar root).

ReactDOm es una bibilioteca de utilidades simple, cuyo propósito es buscar el HTML, encontrar el id y reemplazar su contenido por nuestro componente.


---