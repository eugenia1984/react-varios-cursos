# :star2: Componentes :star2:

---

## :star: 1 - Creando componentes

Ahora vamos a crear componentes, los podemos ver como pequeños bloques, que vamos a ir utilizando como UI para crear lo que veran.

Vamos a crear el primer componente como una **funcion**, será un **compoennte funcional**, es decir es una funcion de JavaScript que retorna JSX.

Cada vez que creemos un componente:

-Lo nombramos con la primer letra en mayuscula, y si tengo mas de una palabra van todas juntas siempre la primer letra en mayuscula y el resto en minuscula.

Siempre deben tener un return y adentro solo un div padre que englobe a todos los subdivs (no puedo tener divs hermanos retornandose).

Y vamos a crear otro componente funcional más, asi tenemos Header y Main

```JSX
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <title>React ⚛️</title>
  </head>
  <body>
    <div id="root"></div>
    
    <script type="text/babel">
      function Header() {
        return (
          <header>
          <h1>Eve´s kittchen</h1>
        </header> 
        );  
      }

      ReactDOM.render(
        <Header />,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```

Y vamos a crear otro componente funcional más, asi tenemos Header y Main

```JSX
<script type="text/babel">
      function Header() {
        return (
          <header>
          <h1>Eve´s kittchen</h1>
        </header> 
        );  
      }

      function Main() {
        return (
          <section>
            <p>We serve the most delicous food around</p>
          </section> 
        );  
      }
      ReactDOM.render(
        <div>
          <Header />
          <Main />
        </div>,
        document.getElementById("root")
      );
    </script>

```

---


## :star: 2 - Agregando propiedades a los componentes

---

## :star: 3 - Trabajando con listas

---

## :star: 4 - Agregando keys a los items

---

## :star: 5 - Mostando imagenes con React

---

## :star: 6 - Usando Fragmentos

---