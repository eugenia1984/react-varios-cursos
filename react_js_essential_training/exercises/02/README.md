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

Y ahora vamos a crear una funcion llamada App que va a renderizar los otros dos componentes.

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

      function App() {
        return (
          <div>
            <Header />
            <Main />
          </div>
        )
      }

      ReactDOM.render(
        <App />,
        document.getElementById("root")
      );
    </script>
```


---


## :star: 2 - Agregando propiedades a los componentes

Ahora queremos que nuestros componentes muestren información dinámica.

Vamos a pasar un **objeto** llamado **props** en la función **Header**.

Y antes del **return** lo consologueamos:

console.log(props);

Vamos a ver por consola un objeto vacio. Entonces vamos a utilizarlo en nuestra funcion App!

```JSX
function App() {
  return (
    <div>
      <Header name="Euge"/>
      <Main />
    </div>
  )
}
```

Y si refrescamos ahora por consola vemso a un bjeto con ese nombre:

```JavaSCript
{name: 'Euge'}
```

Y para ahora utillizar esos valores, simplemente lo agarramos del objeto props que pasamos como parametro en la funcion Header y los usamos como variables de JavaScript entre las {}.

```JSX
function Header(props) {
  console.log(props);
  return (
    <header>
    <h1>{props.name}´s kittchen</h1>
  </header> 
  );  
}
```

Y ahora le agregamos dinamismo al componente Main:

```JSX
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around</p>
    </section> 
  );  
}

function App() {
  return (
    <div>
      <Header name="Euge" />
      <Main adjective="delicious" />
    </div>
  );
}
```

Creamos un nuevo componente llamado Footer.

```JSX
function Footer(props) {
  return (
    <footer>
      <p>Copywright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header name="Euge" />
      <Main adjective="delicious" />
      <Footer year={2022}/>
    </div>
  );
}
```

También lo puedo hacer más dinamico usando una función para el día.


```JSX
<Footer year={new Date().getFullYear()}/>
```

- Props object como un mini contenedor donde podemos poner información en cualquier componente.

- Cuando renderizamos el componente (en App()) pasamos las props en el componente.

- Y en el componente funcional pasamos las props como parametros y las utilizamos como un objeto props con dot notation.


---

## :star: 3 - Trabajando con listas

¿Que pasa si necesitamos parsar algo más complejo como un array ?

Vamos a crear una lista de platos para nuestro restaurante. Y para poder mostrarlo vamos a tener que utilizar la función map. Lo que vamos a hacer es reemplazar el parrafo en una lista.

1. Me creo la constante dishes que es un array de platos.

2. Agrego la propiedad dishes en el componente Main en App

```JSX
const dishes = [ 
  "Black Bean Soup",
  "Macaroni and Cheese",
  "Pizza",
  "Milanesa Napolitana"
];

function App() {
  return (
    <div>
      <Header name="Euge" />
      <Main 
        adjective="delicious"
        dishes = {dishes} />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}
```

3. Y lo mapeo en mi Main:
```JSX
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <h2>Our top 5 dishes:</h2>
      <ul>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
    </section> 
  );  
}
```

4. Pero mirando en la consola vemos un warning CADA HIJO DEBE TENER SU KEY UNICA.


---

## :star: 4 - Agregando keys a los items

Pensamos a las key como un ID que mantiene todo sincronizado.

Como usamos el map podemos utilizar el index para tener esas keys unicas

```JSX
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <h2>Our top 5 dishes:</h2>
      <ul>
        {props.dishes.map((dish, index) => (
          <li key={index}>{dish}</li>
        ))}
      </ul>
    </section> 
  );  
}
```

Pero la documentación de React no recomienda esto porque puede habre problemas de renderizado.

Entonces lo que podemos hacer es transformar la información.

Entonces vamos a crear un array de ibjetos


```JSX
const dishObjects = dishes.map((dish, index) => ({
  id: index,
  title: dish
}));
```

-> Cuando retornamos un objeto en una arrow function debemos encerrarlo entre ()

Agregamos este array de objetos:
```JSX
<Main 
  adjective="delicious"
  dishes = {dishObjects} 
/>
```


```JSX
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <h2>Our top 5 dishes:</h2>
      <ul>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section> 
  );  
}
```

Aunque parezca similar no es igual, ahora la información es estable. La creamos a al key con la funcion antes de crear la lista de las comidas.

Cada vez que estes iterando sobre algo debes agregar las keys.

---

## :star: 5 - Mostando imagenes con React

Vamos a agregar una imagen en nuestra app en la funcion Main.

```JSX
<img 
  height={200} 
  src="./restaurant.jpeg"
  alt="A server presents two plates at a fancy restaurant"
/>
```

---

## :star: 6 - Usando Fragmentos

REact solo renderiza de a un componente, por eso cuando tenemos varios utilizamos los Fragments para englobarlos a todos.

Y de esta forma vamosa  tener el div con el id root y luego nuestro Header, Main y Footer, asi me evito de tener un div y otro div.

Los puedo llamar asi:
```JSX
<React.Fragment>
</React.Fragment>
```

Y también asi:
```JSX
<>
</>
```

---