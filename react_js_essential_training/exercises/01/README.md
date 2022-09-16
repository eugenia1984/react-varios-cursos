# :star2: Introduccion a los elementos de React :star2:

---


##  :star: 1 - Agregando React a nuestro proyecto

### REACT CDN

CDN (Content Delivered Network)

```
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin ></script>
```

Es todo la llibreria de React, si en un browser buscamos  [https://unpkg.com/react@17/umd/react.development.js](https://unpkg.com/react@17/umd/react.development.js) y vamos a referenciarla al codear.

También tenemos REACT DOM:
```
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```

Lo que vamos a hacer es crear los elementos que antes eran etiquetas de HTML en React (por medio de componentes).

En el index.html tenemos in div con id root, y ahi renderizaremos todo loq ue creamos con React.

---

## :star: 2 - Creando elementos en React (RactDOM Render)

- **ReactDOM.Render** lleva 2 parametros...

... el elemento que va a crear, con : **React.createElement("h1", null, "Getting Started!")**, primero el elemento que voy a crear **h1**, **null** porque no le voy a pasar propiedades, **Getting Started!!** es el texto que va a ir dentro del h1

... **document.getElementById("root")**: donde vamos a poner el elemento creado.

---

## Primer ejemplo:

```JSX
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      ReactDOM.render(
        React.createElement(
          "h1", 
          null, 
          "Getting Started!"
          ),
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

---

- Ahora vamos a cambiarlo a que este en una variable:

```JSX
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/javascript">
      let heading = React.createElement(
        "h1",
        { style: { color: "blue" } },
        "Heyyyy Everyone!"
      );

      ReactDOM.render(
        heading,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

---

- Ahora vamos a cambiar el heading a una lista de items desordenada.

Primero modifico el h1 a ul, y luego en vez de tener un texto voy a tener un nuevo React.createElement() y el null lo cambiamos por una prop, en este caso por estilos css

```JSX
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      let ul = React.createElement(
          "ul", 
          { style: {color: "blue"} }, 
          React.createElement(
            "li", 
            null, 
            "Monday"
          ),
          React.createElement(
            "li", 
            null, 
            "Tuesday"
          ),
          React.createElement(
            "li", 
            null, 
            "Wednesday"
          ),
          React.createElement(
            "li", 
            null, 
            "Thursday"
          ),
          React.createElement(
            "li", 
            null, 
            "Friday"
          ),
          );
      ReactDOM.render(
        ul,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

Y en el navegador vemos:

```
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
```

---

## :star: 3 - Refactorizando elementos usando JSX

Mientras más elementos vayamos agregando, como cada uno deberá tener su propio REact.createElement() se nos va haciendo mucho codigo, por eso vamos a **refactorizar elementos usando JSX**.

Entonces voy a pasar de esto:

```JSX
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      let ul = React.createElement(
          "ul", 
          { style: {color: "blue"} }, 
          React.createElement("li", null, "save"),
          React.createElement("li", null,"me"),
          React.createElement("li", null, "JSX"),
        );
      ReactDOM.render(
        ul,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

A usar JSX, vamos a cambiar al lista a unos emojis:
```JSX
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>
    
    <script type="text/javascript">
      ReactDOM.render(
        <ul>
          <li>🤖</li>
          <li>🤠</li>
          <li>🌝</li>
        </ul>,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

Pero...al renderizarlo tenemos un error, BABEL nos va a ayudar a solucionarlo.

---

## :star: 4 - Incorporando Babel

Lo que sucede es que JSX no es soportado por los navegadores.

Entonces si vamos a [https://babeljs.io/](https://babeljs.io/) y vamos a TRy it out, y ahi podemos copiar el codigo:

```JSX
ReactDOM.render(
        <ul>
          <li>🤖</li>
          <li>🤠</li>
          <li>🌝</li>
        </ul>,
        document.getElementById("root")
      );
```
Convierte el codigo para que todos los navegadores lo puedan interpretar:
```JavaScript
"use strict";

ReactDOM.render( /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "\uD83E\uDD16"), /*#__PURE__*/React.createElement("li", null, "\uD83E\uDD20"), /*#__PURE__*/React.createElement("li", null, "\uD83C\uDF1D")), document.getElementById("root"));
```

Y se va a compilar para que se renderice bien en el navegador.

Para poder usar Babel necesitamos agregarla:
```JSX
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Y en vez de utilizar:
```
<script type="text/javascript">
```
Necesitamos tener:
```
<script type="text/babel">
```

Y ahora si vemos la lista de emoticones

---

## :star: 5 - Trabajando con la sintaxis de JSX

Con JSX podemos injectar contenido dinamico en las etiquetas, simplemente referenciandolas con nombres de variables.

Cuando tenog {} en JSX estoy indicando que adentro tengo JavaScript. Por lo que puedo utilizar todo loq ue tiene JavaScript, variables, funciones, arrays, objetos, etc.

```JSX
<script type="text/babel">
  let robot = "🤖";
  let cowboy = "🤠";
  let smile = "🌝";
  let name= "React";

  ReactDOM.render(
    <ul>
      <li>{robot}</li>
      <li>{cowboy}</li>
      <li>{smile}</li>
      <li>{name.toUpperCase()}</li>
    </ul>,
    document.getElementById("root")
  );
</script>
```

---