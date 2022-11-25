### 2do proyecto: Clone de las experiencias de airbnb

![image](https://user-images.githubusercontent.com/72580574/200696130-a2a9bec3-6564-443f-8557-fd207560766b.png)

---

-> [Aca se puede ver el diseño en Figma](https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1&t=7dq2BK8ToYT7D9wQ-0)

-> [Aca pueden ver el proyecto en codigo](https://github.com/eugenia1984/scrimba-project2)

-> [Aca lo pueden ver ya deployado](https://airbnb-project2-scrimba.netlify.app/)

---

## :book: Temas que se ven:

```
- props
- crear componentes desde un array de datos
```

## Primer problema: UI no reutilizables

![image](https://user-images.githubusercontent.com/72580574/203087057-34456282-e92d-4239-bfbb-ddebf3ced6de.png)

- Vemos un ejemplo similar al nuestro, el de estas peliculas, que cada vez que sale una nueva, no deben estar armando todo le HTMl para agregar la imagen, titulo, calificacion, descripcion, etc.

- En React no se harcodea, sino quqe se utilizan las **props** (**propiedades**)

### :star: Entendamos el concepto básico de las props

-Si tenemos un ```<a >``` necesitamos el atributo **href**. Si tenemos ```<img > ``` necesitamso el atributo **src**.Si tenemos un ```<input ``` necesitamos el atributo **type**. Por lo que vemos, hay ciertas etiquetas las cuales necesitan ciertos atributos.

-Ahora hagamos un paralelo con JavaScript ¿Que necesitnan tener si o si las funciones?

Veamos un ejemplo:
```JavaScript
function addTwoNumbersTogether() {
  return 1 + 2;
} 
```

Solo se limita a sumar siempe 1 y 2, para que sea una función debería recibir **parametros** para que el **resultado** sea **más dinámico, dependiendo de los parametros que recibe**.

```JavaScript
function addTwoNumbersTogether(a, b) {
  return a + b;
} 
```

-Las **props** se pueden pensar como estos **parametros** en las **funciones**. Pasamos información adicional para poder **reutilizar**.


### Veamos un segundo ejemplo para seguir con props

![image](https://user-images.githubusercontent.com/72580574/203089487-20e8da20-f601-4e9f-adc1-3d3ed708c354.png)


En YouTube podmeos ver que hay muchas cards reutilizables que tiene la imagen del video que ocupa la mitad superior del cuadrado, luego tiene el titulo en negrita, y algunos otros datos; todas tienen la misma estructura.

Un desarrollador diseño un solo componente y lo hizo reutilizable, para poder renderizar cada una de las tarjetitas.

Y si volvemos a ver la estructura podemos darnos cuentas que tenemos un **cuadrado padre** (el de las categorías) y **cuadrados hijos** (cada tarjeta que se muestra dentro de las categorias).

![image](https://user-images.githubusercontent.com/72580574/203089758-e292a8b7-a961-4ced-8b03-acc108ba19bc.png)

Y si nos centramos en el navbar del lado izquierdo tambien podmeos pensar el menu como algo reutilizable que recibe props y va randerizando la imagen y el texto de cada opción:

![image](https://user-images.githubusercontent.com/72580574/203090132-202e37e2-db08-4f4f-af14-e8cc545574c1.png)


---

## :star: JavaScript dentro de JSX

- Simplement agregamos ```{}``` para encerrar el codigo de JavaScript. Y puedo pasar todo, no solo constantes,/variables, sino un objeto, una función, todo lo que sea JavaScript

Lo vemos con un ejemplo en codigo:

```JSX
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const firstName= "Joe",
  const lastName= "Doe";
  const date = new Date();
  
  return (
    <div>
      <h1>Hello {firstName} {lastName}!</h1>
      <p>It´s currently about {date.getHours % 12} o´clock.</p>
    </div>
  );
}
```

Pero para que sea más legible es recomendable hacer todo el JavaScript antes del return, por lo que podria ser asi:

```JSX
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const firstName= "Joe",
  const lastName= "Doe";
  const hours = new Date().getHours % 12;
  
  return (
    <div>
      <h1>Hello {firstName} {lastName}!</h1>
      <p>It´s currently about {hours} o´clock.</p>
    </div>
  );
}
```

-> Asi tengo al principio la **logica** y luego en el **return** voy a tener **lo que renderiza**

-> Vemos otro ejemplo que dependiendo el horario va a mostrar distinto saludo:

```JSX
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const  date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  
  return (
     <h1>Good {timeOfDay} !</h1>
  );
}
```

---

## :star: Creamos un componente card

[Aca se puede ver el codigo completo](https://codesandbox.io/s/cats-vor2ho)

![image](https://user-images.githubusercontent.com/72580574/203112994-7463b888-6d30-4010-9b53-0ef369351d65.png)

![image](https://user-images.githubusercontent.com/72580574/203113039-d07a33dd-5361-41a9-923c-ec238477dce3.png)


Por props voy a pasarle la información a renderizar:

- imagen

- nombre

- telefono

- email

-> Al estar pasandolo como ``` ({ img, name, phone, email })``` estoy **desestructurando**. 

-> Otro modo sería: ``` (props)```, en este caso, al no esta desestructurado en vez de usar:
```JSX
<img
   className="cat-photo"
   src={img}
   alt="cat"
/>
```
  
Tengo que cambiarlo a:
```JSX
<img
   className="cat-photo"
   src={props.img}
   alt="cat"
/>
```

---

## :star: Mini quiz


1. ¿En que nos ayudan las props?

Como los parametros que le pasamos a una funcion, las props pasadas a un componente nos ayudan a hacer ese componente más reutilizable.


2. ¿Como se pasan las props a un componente?

Similar a como tenemos los atributos en las etiquetas de HTML. 


3. ¿ Puedo pasar una prop custom (ej.: `blablabla={true}`) a un elemento nativo dle DOM (ej. `<div blablabla={true}>`)? ¿Por que?

No, porque utilizamos JSX que retorna un objeto, y eventualmente van a ser parte del DOM, el cual tiene solo atributos de HTML que cumplen con el standard de HTML5.


4. ¿Como recibo la prop en este componente ?
```JSX
function Navbar() {
  return (
    <header>
      ...
    </header>
  )
}
```

```JSX
function Navbar(props) {
  return (
    <header>
      ...
    </header>
  )
}
```


5. ¿ Que tipo de dato es la prop cuando la recibe el componente?

Es un **objeto** por eso para acceder a las propiedades del **prop** usamos **dot notation**, por ejemplo *prop.name*

---

## :star: Desestructuración

```JavaScript
const person = {
  img: "./image/cat.jpg",
  name: "Mr. cat",
  phone: "(000) 111 - 2222",
  email: "cat@cat.com"
}

const { image: img, name, phone, email } = person;
console.log(image); // "./image/cat.jpg"
console.log(name); // Mr. cat
```

---

## :star: Challenge

- Renderizar el componente ```<App />```, que debe estar en su propio archivo

- ```App``` debe renderizar 4 - 5  componentes ```<Joke />``` (estos components deben estar definidos en su propio archivo). Cada Joke debe recibir una propiedad ```setup``` y ```punchline``` y renderizarlas como a vos te parezca

- Extra 1: Algunas Joke son solo punchline sin setup, por ejemplo:

"It´s hard to explain puns to kleptomaniacs because they always take things literally".

Si no pasamos la pregunta ¿ como hacemos para que solo renderice punchline?

- Extra 2: ¿Como le pasamos una prop que no es un String? Por ejemplo, pensemos que queremos que cada componente Joke reciba las props **upvotes** y **downvotes** que son numeros, como una prop pero en **un array the comentarios**, y un boolean **isPun**

->  [Lo pueden ver en este SandBox](https://codesandbox.io/s/jokes-challenge-dykeox)


![image](https://user-images.githubusercontent.com/72580574/203125409-ebf9dd04-7b50-4991-80a3-99623494d62b.png)


## Extra 1 :  Renderizado condicional con && (AND)

![image](https://user-images.githubusercontent.com/72580574/203125477-1dd0c30d-1e48-4448-a00c-69806291726e.png)

```{setup && <p> Setup: {setup} </p>}``` -> Si tengo la **prop** **setup** entonces voy a mostrarla, si no tengo la propr, va a ser ***falsy** y no se muestra.


##  Extra 2: props que son otro tipo de datos además de String

![image](https://user-images.githubusercontent.com/72580574/203127944-db836d38-ba11-4400-9b23-53f5bae5a13f.png)


Y las muestro con un poco de renderizado condicional

![image](https://user-images.githubusercontent.com/72580574/203128401-16f43a93-20f3-4978-8136-70a4036740e7.png)

---

## :star: Array.map

Vamos a repasar el metodo, ya que se usa mucho en React para recorrer un array y poder renderizar la información en componentes.

Vamos a hacer 3 desafíos:

- Desafio 1: dado un array de numeros, retornar un array de cada numero al cuadrado.

```JavaScript
const nums = [1, 2, 3, 4, 5];
const squares = nums.map( num => num.num);
```

- Desafio 2: dado un array de Strings, devolver un array donde la primera letra de cada String sea mayuscula.

```JavaScript
const names= ["alice", "bob", "charlie", "daniel"];
const capitalized = names.map( (name) => return name[0].toUpperCase() + name.slice(1));
```

- Desafio 3: dado un array de Strings, devolver un array the Strings que transforme a cada una de las String originales y las envuelva en etiquetas ```<p>``` de HTML.

```JavaScript
const pokemon = ["Bulbasaur", "charmander", "Squirtle"];
const paragraphs = pokemon.map( (mon) => `<p>{mon}</p>`);
```

---

## :star: React renderiza arrays

En la realidad no se renderiza un simple String, sino objetos, es un poco más complejo, veamoslo con un ejemplo de código:

```JSX
export default function App() {
  const colors = [ "Red", "Green", "Yellow", "Blue", "Indogo"];
  
  return (
    <div>
     {colors.map( (element, index) => <h3 key ={index} > element </h3>)}
    </div>
  )
}
```

De este modo vamos a poder cambiar el ejercicio que hicimos de JOkes, creando un array de elementos JSX y renderizarlo, sin tener que pasarlo en cada componente.

---

## :star: Mapeando componentes

Ahora vamos a modificar el mino-proyecto de Jokes para poder mapear componentes.


Vamos a crear **JokesData.js** para simular el llamado a una API, y asi poder mostrar la información con el método **.map()**

![image](https://user-images.githubusercontent.com/72580574/203642955-868ee618-4292-48dc-863d-c7a9d19bacf2.png)


La importamos para poder utilizarla en nuestra App.js: 
```JSX
import JokesData from "./JokesData";
```

Me creo la constante **jokeElements** , la cual voy a hacerle el **map** a mi **JokesData** y me va a devolver cada uno de los componentes **Joke** con su **setup** y **punchline**.

Como React trabaja con el virtual DOM, para poder identificar a cada uno de los componenes Joke debo identificarlos conla **key** que debe ser única, por eso le asigno el valor del **index**

![image](https://user-images.githubusercontent.com/72580574/203643954-876a01e1-21af-4788-bfde-8a94912b1a6c.png)


:tv: -> [Aca esta el SandBox.io](https://codesandbox.io/s/joke-mapping-d7ztuj)

---

## :star: Mini quiz

1. ¿Que hace el metodo de los array .map()?

Refiriendos a JavaScript, recibe una función como parámetros y el resultado de esa callback va a ser puesto en el mismo index del nuevo array que va a devolver.  Va itinerando item por item del array, y los va a ir modificando y mostrando en un nuevo array, asi no modifica el original.

2. ¿Para que utilizamos el método .map() en React?

Tomamos un array de data, lo mapeamos y lo transformamos en un elemento JSX para poder mostrarlo.

3. ¿Porque es mejor utilizar .map() que crear un componente manual y tipearle los datos ?

Porque lo hace dinamico, de este modo se pueden agregar cuando elementos querramos y no vamos a tener que ir compiando y pegando el elemento y completarle las propiedades, si ya tenemos el .map() va a tener un nuevo elemento y lo renderiza.

Hace el codigo más sostenible, no tenemos que andar cambiandolo, se actualiza solo.

---

## :star: Volvemos al challenge del clone de Airbnb

1. Me creo **data.js**, con un array de objetos (cada objeto es una de las experiencias):

```JavaScript
const data = [
  {
    id: 1,
    title: "Life Lessons with Katie Zaferes",
    description: "I will share with you what I call Positively Impactful Moments of Disappointment. Throughout my career, many of my higest moments only come after setbacks and tosses. But learning from those difficult moments is what gave me the ability to rise above and reach my goals.",
    price: 135,
    coverImg: "../../assets/swimmer.jpg",
    stats: {
      rating: 5.0,
      reviewCount: 7
    },
    location: "Online",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Learn wedding photography",
    description: "Interested in becaming a wedding photographer? For beginner and experienced photographeres alike, join us in techniques required to leave the happy couple with memories that´ll last a lifetime",
    price: 125,
    coverImage: "../../assets/bride-smiling.jpg",
    stats: {
      rating: 5.0,
      reviewCount: 30
    },
    location: "Online",
    spots: 0,  
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description: "",
    price: 50,
    coverImg: "../../assets/mountain-bike.jpg",
    stats: {
      rating: 4.8,
      reviewCount: 2
    },
    location: "Norway",
    openSpots: 3,  
  }
];

export default data;
```

2. Para ver que la importe bien, simplemente lo muestro por consola:

![image](https://user-images.githubusercontent.com/72580574/203652810-2f12a0e6-7bef-4dc3-9748-50ffdfcb9721.png)

---

## :star: Key

Cada vez que utilizamos un **map** para recorrer un array de objetos y con la información del mismo renderizar componentes de React, cada uno debe tener su **key** unica e irrepetible, asi React puede ir comparando el virtual DOm y cuando nota un cambio lo va a mostrar en el DOM.

-> Deben tener una **prop** nombrada **key** y debe ser **única**, en general se utiliza el **id**.

---

## :star: Renderizado condicional en el proyecto clone de Airbnb

Vamos a aplicar el renderizado condicional, utilizando el valor que tenga la key **openSports**  en mi array de objetos de experiencias.

Para ello agrego en el componente ```<Cards />``` : **openSpots = { item.openSpots }** para que lo reciba cada ```<Card />```.

```JSX
{openSpots === 0 && <div className="card-badge">SOLD OUT </div>}
```

Y asi solo se me va a ser el SOLD OUT el que tega 0 lugares

Y además vamos a poner el texto dinamicamente y ver que si no esta SOLD OUT, pero si es ONLINE, también mostramos ese badge.

```JSX
function Card( { id , coverImg, coverImgAlt, rating, reviewCount, location, title, price, openSpots}) {

  let badgeText
  if(openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText="ONLINE";
  }
 
  return (
    <div key={ id } className="card">
      {openSpots === 0 && <div className="card-badge">{badgeText} </div>}
      {location === "Online" && <div className="card-badge">{badgeText} </div>}
   ```

---

## :star: Pasando un objeto ocmo una propiedad

En nuestro componente ```<Card />``` notamos que nos quedaron muchas propiedades para pasarle:

![image](https://user-images.githubusercontent.com/72580574/204060596-843529c4-ea86-4599-ae85-f2adb4ffb966.png)

Por lo que podemos cambiar y pasarle directamente todo el **objeto** **item** con cada una de sus key-values.

De modo que nos queda más conciso:
![image](https://user-images.githubusercontent.com/72580574/204060668-89c14c76-154a-411f-8ca5-c21db28c9497.png)


Lo que si nunca olvidarse que debe tener el **key**.

Y como paso too el **ITEM** voy a tener que hacer una desestructuración para poder utilizar las porps que necesito:

![image](https://user-images.githubusercontent.com/72580574/204061070-4f7b277c-e409-4f8f-a248-dfecabff31a2.png)

Otro modo era usando el **spread operator**:
![image](https://user-images.githubusercontent.com/72580574/204061251-1c611422-a99f-4bcc-aad8-e76b95798cd6.png)

Y se va a estar enviand directamente cada una de las **props** por lo que en el componente Card no voy a tener que volver a desestructurar.

---
