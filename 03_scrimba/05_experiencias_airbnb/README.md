### 2do proyecto: Clone de las experiencias de airbnb

![image](https://user-images.githubusercontent.com/72580574/200696130-a2a9bec3-6564-443f-8557-fd207560766b.png)

---

-> [Aca se puede ver el diseño en Figma](https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1&t=7dq2BK8ToYT7D9wQ-0)

-> [Aca pueden ver el proyecto en codigo](https://github.com/eugenia1984/scrimba-project2)

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

- Extra: Algunas Joke son solo punchline sin setup, por ejemplo:

"It´s hard to explain puns to kleptomaniacs because they always take things literally".

Si no pasamos la pregunta ¿ como hacemos para que solo renderice punchline?

->  [Lo pueden ver en este SandBox](https://codesandbox.io/s/jokes-challenge-dykeox)

---
