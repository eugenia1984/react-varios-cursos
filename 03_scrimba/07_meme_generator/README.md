# :star2: 3er proyecto: Generador de memes (web interactiva)

---


![image](https://user-images.githubusercontent.com/72580574/205065437-9adcaefb-5d24-467b-9218-c6f0451c8d7f.png)

---

## :book: Temas que se ven:

```
- Event listeners
- State
- Conditional rendering
- Forms
- Side effects
```

:tv: -> [link al diseño en Figma](https://www.figma.com/file/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0%3A1&t=d6jKjjGA1qYGBk71-0)

---

## <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/40/null/external-command-line-computer-science-flaticons-lineal-color-flat-icons.png"/> Comenzamos a armarlo

###  <img src="https://img.icons8.com/clouds/35/null/head-profile.png"/> Header

- Me aseguro que sea mobile first:

MOBIL:

![image](https://user-images.githubusercontent.com/72580574/205089127-c843f6e3-3420-421d-96c9-f0eccd9b0a3e.png)


TABLET / DESKTOP:

![image](https://user-images.githubusercontent.com/72580574/205089255-fe9a3640-4a86-4a35-8eed-5b49ad12fee5.png)


Para esto modifique el CSS haciendo que **React Couse - Project 3** sea de **position: absolute** pero que esté fijo hacia el borde derecho de la aplicación.

Y además en vez de tener un solo componente ```<Header />``` lo arme en base a otros tres componentes hijos, para poder pasar desde ```<Header>``` **props** a los componentes hijos.

Asi es esta parte del código:

![image](https://user-images.githubusercontent.com/72580574/205090082-bc9000f3-1151-4389-b166-7bddc37c6fbe.png)

---

## <img src="https://img.icons8.com/external-others-zufarizal-robiyanto/35/null/external-lup-mutualiz-ui-essential-others-zufarizal-robiyanto.png"/> Search Bar (Form)

![image](https://user-images.githubusercontent.com/72580574/205110287-3bc39166-caa1-4611-a77f-34f0a9720aaa.png)

Por ahora tengo un componente ```<Meme />```

![image](https://user-images.githubusercontent.com/72580574/205110436-e6d95787-2a4d-472b-a569-840bee2f8bab.png)


---

## :star: Event Listeners

Lo que diferencia a una aplicación web de una web estática es **la posibilidad de interactuar del usuario con la pantalla** esto lo hacemos mediante los **EventListeneers**.

Con JavaScript vanilla lo haciamos mediante:

```Javascript
.addEventlistener("click", function() {});
```

Otro modo es directamente en el HTML dentro de un boton;

```
<button onclick="myFunction()">Click Me</button>
```

Con React lo vamos a hacer de un modo parecido a el HTML


### Ejemplo con codigo:

![image](https://user-images.githubusercontent.com/72580574/205113021-f3cd8ef5-b20b-4184-a167-2758b94405dc.png)

```JSX
export default functionApp() {
  function handleClick() {
    console.log("I was clicked");
  }
  
  return (
    <div className="container">
      <img src="https://picsum.photos/640/360" alt="random picture" />
      <button onClick={ handleClick } >Click me</button>
    </div>
  )
}
```

Tener en cuante que ahora dentro de la etiqueta de **button** el evento es **onClick** en camelCase.

Y en este caso como estamos con JSX al pasar a la función con el evento no ponemos los (), sino se va a estar llamando al cargarse el componente, en vez de cuando se haga el click.

-> [Aca se puede ver en la documentación de React todos estos eventos sintéticos](https://reactjs.org/docs/events.html#mouse-events) : onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver,  onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut,  onMouseOver y onMouseUp.


Y ahora vamos a agregar otro evento, asi cuando pasamos con el mouse por la imagen esta se oscurece.

```JSX
export default functionApp() {
  function handleClick() {
    console.log("I was clicked");
  }
  
  function handleOnMouseOver() {
    console.log("Mouse Over")
  }
  
  return (
    <div className="container">
      <img 
        src="https://picsum.photos/640/360" 
        alt="random picture" 
        onMouseOver={ handleOnMouseOver }
       />
      <button onClick={ handleClick } >Click me</button>
    </div>
  )
}
```

Practique con los eventos **onClick** y **onMouseOver** haciendo que al pasar el mouse sobre la imagen se vea más oscura y al hacer click en el boton se muestre un mensaje por consola.

Entonces a mi me quedo: 

![image](https://user-images.githubusercontent.com/72580574/205127468-6143e14a-3e6d-4916-97de-b2b3393eab4e.png)


:tv: -> [Lo podes ver en este sandbox](https://codesandbox.io/s/adoring-wood-f0knvl)

---

## :star: Volviendo al generador de memes...

En realidad no es necesario tener el boton dentro dle form, porque sino cada vez que se haga click en el botón se va a volver a renderizar la app, asi que hacemos esa modificación. Simplemente cambiamos la etiqueta de **form** por **div** y nos vamos a importar memeData.js que es un simil JSON que nos armamos para traer algunas imagenes de memes, sin tener que estar llamando a la API.


Por ahora lo importamos a ese JSON y haemos que al hacer click en el boton por consola se muestre la URL:

![image](https://user-images.githubusercontent.com/72580574/205126041-adadf4cf-52c2-463b-92cf-2e97b944bb07.png)


---

### :star: Mini proyecto: agregar items

Haciendo click en el boton vamos a agregar items. Para esto vimos el concepto de **estados**, al tener un cambio de estado React va a volver a renderizar el componente y modifica la UI. Use **useState** 

![image](https://user-images.githubusercontent.com/72580574/205133820-ce6404b9-fdac-4886-8c97-326aa596c1b0.png)


:tv: -> [Lo podes ver desde este sandbox](https://codesandbox.io/s/sad-rgb-nx9vb9)

---

## :star: Props vs. State 

- **Props**: son las **propiedades** que pasamos a un componente para que funcione correctamente, similar a como una función recibe parámetros "desde arriba". El componente que recive esas props no puede modificarlas (son inmutables).

- **State**: refiere al valor que es manejado por el componente, similar a as variables que se declaran dentro de una función. Cada vez que un valor se modifica debe ser guardado / mostrado, se va a estar utilizando el estado.

---

## :star: Mini quiz

1. ¿Cómo describís el concepto de **state** (estado)?

Los valores que un componente va a mantener entre los ciclos de renderizado.

Es la forma que tiene React de recordar los valores guardados en un componente. Es similar a cuando declaramos variables en un componente, con algunas cosas más.

2. ¿ Cuándo vamos a utilizar una **props** en vez de un **state**?

Cada vez que tenemos que pasar información a un componente para que ese componente muestre eso de forma de texto o a veces se use para configurar el componente.

Siempre que se pase **data** a un componente.

3. ¿Cuándo vamos a utilizar un **State** en vez de una **props**?

Cada vez que queremos que un componente reciba un valor y lo mantenga, inclusive cuando React re-renderiza el componente.

4. ¿Qué significa **inmutable**? ¿ Las **props** son inmutables? ¿Los **States** son inmutables?

Inmutable es que no cambia, las **props** son inmutables, no debemos modificar los parametros que recibimos como props. Los **States** si son mutables, simpre declaramos los **states** porque los queremos modificar.

5. Tenes dos opciones para pasar dentro de un **state** **setter** (por ejemplo: setCount) ¿Qué son ?

-Opción A: pasar el nuevo valor del estado (por ejemplo setCount(42) y cada vez que se invoque se a settear en 42, queda fijo)

-Opción B: una función callback que retornará el nuevo valor del estado, va a ser variable.

6. ¿Cuándo queremos pasar la primera opción (de la respuesta anterior) a una función que settea el estado?

Cada vez que quiera modificar el estado y no me importe el valor previo del estado para determinar el nuevo valor.

7. ¿Cuándo quiero pasar la segunda opción (de la respuesta anterior) a una función que settea el estado?

Cada vez que quiera modificar el estado y si me importe el valor previo del estado para determinar el nuevo valor.

8. ¿ Que es **conditional rendering**?

Una forma de determinar si una cosa debe ser renderizada o no, dependiendo de una condición, o a veces renderizar una cosa u otra dependiendo de la condición.

9. ¿Cuándo usamos **&&**?

Si quiero decidir si renderizar o no algo. Si la condición es verdadera se renderiza loq ue está a la derecha del &&.

10. ¿Cuando usamos el **operador ternario**?

Para decidir que renderizar entre dos cosas, en base a la condición.

11. ¿Qué pasa si hay que decidir entre más de dos opciones para mostrar ?

Una condición regular con if- else if ó un switch, en este caso deberán estar fuera del **Retunr**, en cambio paa los **&&** o el **ternadrio** deben estar dentro del **return**.


Ejemplo:
```JSX
function App() {
    let someVar
    if () {
        someVar = <SomeJSXOne />
    } else if() {
        someVar = <SomeJSXTwo />
    } else {
        someVar = <SomeJSXThree />
    }
    return (
        <div>{someVar}</div>
    )
}
```


12. En una app de JavaScritp vanilla ¿en qué parte del formulario se reune toda la información que se completó en el mismo?

Justo antes que se hace el submit, se va por cada uno de los elementos y se reune la información.

13. En una app de React ¿ Cuándo se junta la información que se completó en un formulario?

Mientras el formulario se va completando. Toda la data se guarda en local state.

14. ¿ Qué atributo del formulario (value, name, onChange, etc) debe coincidir con la propiedad name que se tiene en el state para ese input?

**name** property.

15. ¿ Cuál es la diferencia entre guardar la data de un checkbox element a otros de los elementos del formulario?

En un checkbox vemos la propiedad **checked** para determinar si debe guardarse en el estado. Todos los demás elementos ven la propiedad **value**.

16. ¿Cómo vemos unu form submit? ¿Cómo hacemos le trigger en el form submit?

Agregamos un **onSubmit** **handler** que generalmente está dentro de un **button** que va a ser trigger en la función que trerá la data.

---

## :star: useState

En React no funciona declarar una variable y modificar el valor y que React automaticamente re renderice y modifique la UI.

React no esta monitoreando si nuestras variables se modifican. Para esto tenemos el hook **useState**.

- Utilizamos el desestructuring del array para poder utilizar useState.

![image](https://user-images.githubusercontent.com/72580574/205142980-7bc084d4-7054-48dd-b55a-8b85c889b9f1.png)

Lo que nos falta mejorar es que de YES haciendo click pasa a NO, pero si volvemos a hacer click va a quedar fijo en NO, no se nos va a volver a cambiar.

:tv: -> [Acá se puede ver este otro mini proyecto para utilizar useState en codigo con SandBox.io](https://codesandbox.io/s/vigorous-moore-hez2zv)

- Hacemos otro mini proyecto, un **contador** que **sume** y **reste**, para ahora si poder modificar más de una vez el estado.

![image](https://user-images.githubusercontent.com/72580574/205149425-d16ed4d5-8b98-44b8-872b-6a44b67ff545.png)

-> Pero es mejor modificar el estado con una **callback function**, etnocnes las funciones para sumar y restar las vamos a modificar asi:

```JSX
function add() {
    setCount(prevCount => prevCount + 1)
  }

  function subtract(){
    setCount(prevCount => prevCount -1)
  }
  ```
  
  **prevCount** ->  va a ser el valor previo. Esto se hace siempre que el nuevo valor dependa del valor anterior modificado, siempre lo haremos mediante una **CallBack**.
  

:tv: -> [Acá se puede ver este otro mini proyecto para utilizar useState en codigo con SandBox.io](https://codesandbox.io/s/damp-mountain-pzmv2h)

---

## :star: Volviendo al generador de memes

Vamos a crear un estado e ir modificandolo para que nos vaya guardando las url de las imagenes. Y de este modo se pueda mostrar la imagen debajo del boton.


```JSX
import React, { useState } from "react";
import "./MemeStyles.css";
import { memesData } from "../../memesData.js";

function Meme( { text } ) {
  const [ memeImage, setMemeImage ] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    setMemeImage( url)
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form-input" 
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form-input"  
        />
        <button 
          className="form-button"
          onClick={ getMemeImage }> 
          { text} 
        </button>
      </div>
      <img src={memeImage} alt="meme" className="meme-img"/>
    </main>
  );
}

export default Meme;
```

Agrego la etiqueta **img** para poder mostrar la imagen y al hacer click en el boton invoco a **gerMemeImage()** que ahora si va a ir seteando el nuevo estado gracias a **useState**.


---

## :star: Volviendo a nuestro mini proyecto del SI - NO

Voy a modificarlo con unos condicionales if - else para que siempre se vaya cambiando de YES a NO y viceversa al ir clickeando.

![image](https://user-images.githubusercontent.com/72580574/205155614-23d692d1-5c27-4b24-8792-08eef0b151ee.png)

Y lo mejoro con un ternario y utilizanod una **callback** ya que necesito saber cual es el **Estado previo**:

![image](https://user-images.githubusercontent.com/72580574/205156721-587c287b-77da-470d-ab36-dd38f91b6f20.png)


---

## :star: Volviendo al mini proyecto de Agregar items

Ahora que vi useState lo implemento y utilizo la desestructuración

![image](https://user-images.githubusercontent.com/72580574/205164147-c863a72f-479e-4a9e-815d-1e739c78a63b.png)

Y ahora voy a utilizar una función callback para poder utilizar el estado previo y modificar el nuevo:

![image](https://user-images.githubusercontent.com/72580574/205165431-d51dc074-e595-492f-af00-065a19d0a254.png)


---

## :star: Estados complejos con objetos

- Realicé otro mini proyecto, de mostrar una card utilizando los datos de un objeto, para simplificar el llamado a las key de los objetos utilizo **desestructuración** y también **spread operator**

![image](https://user-images.githubusercontent.com/72580574/205172136-db52733a-a82c-4e0b-bd1c-5e8345adbc6d.png)


:tv: ->  [Acá se puede ver este otro mini proyecto en codigo con SandBox.io](https://codesandbox.io/s/interesting-feynman-e0u5e9)

---

## :star: Pasando states como props

Volvienod al mini proyecto dle contador vamos a pasar el contador a un *componente** y le vamos a pasar el **State** como una **prop**, el codigo nos queda así:

![image](https://user-images.githubusercontent.com/72580574/205353854-b8952abc-0d0b-44b5-a2a1-e41a361e85ed.png)


---

## :star: Volviendo a la card con los datos desde un objeto

Vamos a setear el **state** de un **componente hijo** desde el del padre.

![image](https://user-images.githubusercontent.com/72580574/205362425-d98dd5fb-24e2-44fc-b05c-0fe5053dc7ed.png)

Al hacer click en la estrella el estado isFavourite va cambiando entre true y false entonces se va mostrando la estrella completa o vacía.

El estado lo tengo en el componente padre y se lo paso al componente hijo mediante props.


![image](https://user-images.githubusercontent.com/72580574/205362382-186f7ef1-99f5-4c84-9b3f-56f03b619fbc.png)


:tv: -> [Aca esta en CodeSandBox.io](https://codesandbox.io/s/interesting-feynman-e0u5e9)

---

## :star: Pasando data

- Desde un **componente padre** a los **componentes hijos**: Van de **aariba hacia abajo** desde el componente padre a los hijos / nietos/ bisnietos, etc.

![image](https://user-images.githubusercontent.com/72580574/205362713-b0b875a8-2d57-4f64-b7b9-993ff6858ee0.png)


- ¿Cómo pasamos información entre **componentes hermanos**?

![image](https://user-images.githubusercontent.com/72580574/205362972-2f667042-8c96-4bd4-83a7-022460cfd4a2.png)

Lo que tenemos que hacer es pasar el **state** al **componente padre** que que pase mediante **props** a los **componentes hijos**.

![image](https://user-images.githubusercontent.com/72580574/205363364-c64ae0be-cdae-4672-a28a-8a9a3f0c77d7.png)

- Mientras la app s ehaga más compleja vamos a necesitar que el estado esté en el nivel superior y vaya pasandolo como en cascada, pero se hace muy engorroso si hay muchos hijos /nietos/bisnietos, en ese caso tenemos el**context** y **Redux**
 
![image](https://user-images.githubusercontent.com/72580574/205363413-de4710db-e0a3-40fa-951e-7bca50935dce.png)


- Lo vemos con un ejemplo en codigo:

![image](https://user-images.githubusercontent.com/72580574/205364039-eb27f4ba-0622-47ad-936b-622ec689f5a4.png)

![image](https://user-images.githubusercontent.com/72580574/205364136-58c8fa86-1a17-4fc9-b5dd-f8f7eb2a0b61.png)


Header.js:
```JSX
import React from "react"

export default function Header(props) {
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}
```

Body.js:
```JSX
import React from "react"

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}
```

---


## <img src="https://img.icons8.com/material-outlined/40/null/imac-medal.png"/> Coding challenge

Realicé algunos challenge de código para practicar lo aprendido hasta ahora.

:tv: -> [Boxes](https://codesandbox.io/s/confident-jasper-6qsm6v)

- Parte 1:

1- Inicializar un estado con el valor por default del array de boxes.js

2- Mapear sobre el estadod el array y mostrar cada uno como un cuadrado vacío (bordes negros y color transparente). Por ahora no usamos la propiedad **on**.

![image](https://user-images.githubusercontent.com/72580574/205367481-17f858ae-800b-4799-9d17-95e4d2412847.png)

- Parte 2:

1- Estilos dinámicos con estilos en línea. Voy a utlizar **Style** en línea para lo que voy a tener que igualarlo a {} para indicar que empiezo con JavaScript, y dentro voy a tener que pasar un **object**, para no tneer dos grupos de {} me lo separo en una constante, y al ser un objeto tengo que usar camelCase en la key que es como el atributo de CSS, y en vez de = uso los : como en el object.

![image](https://user-images.githubusercontent.com/72580574/205368265-85d10cea-bf05-4021-8b8e-38efd45cdfa8.png)

2- El beneficio es que al ser un valor mediante JavaScript es dinámico, se puede cambiar, asi puedo utilizar el valor true / false de boxes.js y cambiar dinamicamente el color dependiendo de si está on:true ú on:false. Asi se hace en las apps con el **dark / light mode**.

3- En el componente ```<Main />``` agrego la props **darkMode** para que tenga los valores **true** / **false** y asi poder cambiar el valor del color de fondo. 

Si tiene false el fondo es gris claro:

![image](https://user-images.githubusercontent.com/72580574/205369490-7317269a-51ed-47ef-a047-7273021f0dda.png)

Si tiene true el fondo es negro:

![image](https://user-images.githubusercontent.com/72580574/205369812-132e5df8-e198-48a0-95c7-c3aaab311037.png)

- Parte 3:

1- Crear un componente separado llamado **Box** 

2- Pasar al componente Box la propr **on** con el valor que tiene la key del mismo nombre en boxes.js

3- En el componente Box aplicar el estilo dinámico para determinar el color de fondo, si está on que sea **#222** si no está off que no tenga.


-> Saco de App el darkMode

-> En el componente ```<Main />``` agrego: ```<Box key={square.id} on={square.on} />```

-> En el componente ```<Box />``` seteo el color de fondo.

![image](https://user-images.githubusercontent.com/72580574/205373201-293a9628-d56e-444d-9ae7-4830515822e1.png)


## local state


Por el momento tenemos en App (mi caso **Main**) el array con la data de on: true/false que se pasa a los componentes hijos ```<Box />``` por **props** para determinar el valor de fondo.

![image](https://user-images.githubusercontent.com/72580574/205373514-25151e3d-3f4f-4414-9a77-53d5c827999c.png)

-> ¿ Cómo los modificamos ? 

Tenemos dos formas:

- **1er forma** Se pueden inicializar nuevos estados en cada uno de los componentes  (mi caso **Main**) el array con la data de on: true/false que se pasa a los componentes hijos ```<Box />```. El beneficio es la simplifidad y que cada Box se puede actualizar su estado de forma individual.

![image](https://user-images.githubusercontent.com/72580574/205373831-20e53ae4-e2af-4fb7-bda2-f74cf5cae1f0.png)

- Parte 4: hacemos este modo en el challenge. En vez de setearlo con la props **on** y su valor, vamos a setearlo con su propio estado.

![image](https://user-images.githubusercontent.com/72580574/205376909-78bfa637-ba44-48e8-975d-3d03ce7b9aca.png)


Y ahora cada box maneja su propio estado, cada vez que le hacemos click cambia entre on: true / false.

![image](https://user-images.githubusercontent.com/72580574/205376978-2757e205-0fc4-4403-adf4-a1a9c9414fe0.png)

-> De este modo vamos a tener un problema porque tenemos un estado en **App** y otro estado en **Box**, por lo que **vamos a tener dos fuentes de verdad**, lo cual no se puede en React. esta rpimera forma se la llama **derived state**.

- **2da forma**: usamos el estado de la **App** en ella creamos la funcion y se la pasamos a cada **Box** asi cuando en el **Box** hay un cambio va a llegar a **App**

![image](https://user-images.githubusercontent.com/72580574/205377681-2426b6c4-21e2-4f53-9f54-e78a92d7d172.png)

-> Es el modo que se usa en React.

- Parte 5: creamos esta función toggle().


Box.jsx:
```JSX
export default function Box({ on, id, handleClick }) {
  const styles = {
    backgroundColor: on ? "#222" : "transparent"
  };

  return (
    <div
      style={styles}
      className="box"
      onClick={() => handleClick(id)}
    />
  );
}
```

![image](https://user-images.githubusercontent.com/72580574/205381454-733508cb-a922-464d-86bc-4c94c9e9f382.png)


Ahora lo modificamos a hacerlo de un modo más declarativo.

Directamente utilizo un map para que me devuelva un nuevo array de square y con un operador ternario veo que si el id es el mismo del que hago click cambio la propiedad de on por el opuesto y si no es el mismo id paso el mismo.

![image](https://user-images.githubusercontent.com/72580574/205382487-7be6ddf2-4e62-4644-9eb8-b6608921f15b.png)


---

## :star: Volviendo al mini challenge de Jokes con mapping

:tv: -> [Aca se puede ver en CodeSandBox.io](https://codesandbox.io/s/joke-mapping)

- Cree un estado **isShown** que es **boolean**

- Agrego un botòn que cambia el valor entre true y false

![image](https://user-images.githubusercontent.com/72580574/205498409-c43e6899-c5d1-4eb9-bec5-b22e9045fd96.png)


 - Ahora volviendo al **conditional rendering** punchline solo debe mostrarse si es true.
 
 
 ![image](https://user-images.githubusercontent.com/72580574/205498698-5e79bb96-c97d-45ce-a304-8580e2ea3e94.png)


---

## :star: Conditional Rendering - Mini Challenge

Se muestra la etiqueta ```<h1>``` sólo si hay mensajes sin leer.

![image](https://user-images.githubusercontent.com/72580574/205507288-266179eb-8bbd-4a2d-88dc-231da2127f4e.png)

Y también modifico el mensaje de tenes un mensaje a tenes X mensajes sin leer, dependiendo de si tiene 1 o más mensajes sin leer.

![image](https://user-images.githubusercontent.com/72580574/205508824-cdc1b3ba-5f67-4c71-9da9-652563a47139.png)

También puedo aplicar un ternario para que muestre mensaje o mensajes

![image](https://user-images.githubusercontent.com/72580574/205508943-9b9466f7-6c0e-4a06-a185-9993ac2eea7b.png)


:tv: -> [Codigo y demo en CodeSandBox.io](https://codesandbox.io/s/youthful-engelbart-d616uf)

---

## :star: Conditional Rendering : ternary

Volvienod al mini challenge de los chistes mapeados con el array, vemos que al hacer click en el boton siempre dice Show Punchline y en realidad debería ir cambiando entre : **Show Punchline** y **Hide Punchline** dependiendo de si el punchline se muestra o no.

![image](https://user-images.githubusercontent.com/72580574/205507695-b87efb2a-6d75-4071-a2a3-4bc6b9d868a0.png)


:tv: -> [CodeSandBox.io](https://codesandbox.io/s/joke-mapping-d7ztuj)

---
---

##  <img src="https://img.icons8.com/color/40/null/fill-in-form.png"/> FORMS


![image](https://user-images.githubusercontent.com/72580574/205509279-95b598ca-1777-4119-b4ca-36d00839fd62.png)

- Con JavaScript vanilla al hacer click en Submit agarro la **data** y la envío.

![image](https://user-images.githubusercontent.com/72580574/205509286-838a9a62-67a6-43e1-9178-33d3d6e2b5cd.png)

- En React en vez de esperar a que se complete todo el formulario, creamos **State** y vamos a ir viendolos constantemente, en cada input que completemos y en cada modificación.

:book: -> [Documentación de FORM en React](https://reactjs.org/docs/forms.html)


- Practicamos con un solo input

```JSX
import React, { useState } from "react";

export default function Fomr() {
  const [ firstName, setFirtName ] = useState("")

  function handleCahnge(event) {
    console.log(event)
  }
  return (
    <form>
      <input 
        type="text" 
        placeholder="First Name" 
        onChange={handleCahnge}
      />
    </form>
  );
}
```

Y al consologear el **event**:

```
SyntheticBaseEvent {_reactName: "onChange", _targetInst: null, type: "change", nativeEvent: InputEvent, target: HTMLInputElement…}
_reactName: "onChange"
_targetInst: null
type: "change"
nativeEvent: InputEvent
target: 
<input type="text" placeholder="First Name"></input>
currentTarget: null
eventPhase: 3
bubbles: true
cancelable: false
timeStamp: 53269.39999997616
defaultPrevented: false
isTrusted: true
isDefaultPrevented: ƒ functionThatReturnsFalse() {}
isPropagationStopped: ƒ functionThatReturnsFalse() {}
preventDefault: ƒ preventDefault() {}
stopPropagation: ƒ stopPropagation() {}
persist: ƒ persist() {}
isPersistent: ƒ functionThatReturnsTrue() {}
<constructor>: "SyntheticBaseEvent"
```

-> De todos estos el que me importa es **target** si conologeo: **event.target**:

```JSX
<input type="text" placeholder="First Name"></input>
```

Es el objeto del DOM que va a ser trigger en el evento, lo va a lanzar, me va a ir leyendo la información que voy poniendo en el input.

Modificamos el codigo:

![image](https://user-images.githubusercontent.com/72580574/205509926-f4f4fb4b-bcae-43bd-91b0-69740241828e.png)

- ¿Y si en vez de un solo input con le nombre tengo otro más con el apellido ?

Podría pensar en agregar un nuevo estado para el apellido y en el mismo handleCahnge me vuelvo a setear, o para tenerlo separado me armo dos handleChange, uno para cada input.

![image](https://user-images.githubusercontent.com/72580574/205510181-387bc551-6b12-4bd5-af2a-58aceaa43735.png)


En tema es que si tengo mucho más input esto se va poniendo cada vez más largo, entonces ¿que conviene? Manejarlo con un **object**, entonces tenemos una solo función **setter**.

```JSX
const [formData, setFormData ] = useState(
    {
      firstName: "",
      lastName:"",
    })
 ```
 
 En cada **input** debo agregar un **name** para poder indentificarlos, por buena practica le pongo el mismo nombre que la key del objeto, entonces:
 
 ```name="firstName" ``` y  ```name="lastName" ```
 
 Tengo que ver el estado previo de los valores en los name de mis input, para solo actualizar el que se modifica.
 
 Como *event.target.name* es una variable, lo pongo entre [] para tratarlo ocmo tal y no tener errores.
 
 ```JSX
 function handleChange(event) {
    setFormData(prevFormData => {
      return {
          ...prevFormData,
          [event.target.name]: event.target.value
      }
    })
  ```
 
 ![image](https://user-images.githubusercontent.com/72580574/205510983-6e61325e-f00a-4b5d-a10f-175b4bb6706c.png)

- Mini challenge: agregar un input de tipo email.

![image](https://user-images.githubusercontent.com/72580574/205511132-1f572461-2a58-4435-a0ac-32ecfe8881b0.png)


:tv: -> [Codigo en CodeSandBox.io](https://codesandbox.io/s/xenodochial-boyd-9sbouq)

---

## :star: Componentes: uncontrolled / controlled

La **única fuente de verdad** es el **state** del componente, siempre debe haber sólo una.

Para eso en cada uno de los **input** la vamos a agregar **value**:

En el input de First Name:
```JSX
value={formData.firstName}
```

En el input de Last Name:
```JSX
value={formData.lastName}
```

En el input del e-mial:
```JSX
value={formData.eMail}
```

- De este modo el **state** se maneja con **react** en vez de con el form, de este modo no tenemos el warning de tener componentes uncontrolled.

![image](https://user-images.githubusercontent.com/72580574/205511419-d1e14922-759b-4adf-829d-b4ecd0517f5b.png)


### TEXTAREA

- Ahora vamos a ver los **textareas**, vemos que son distintos que los input, en HTML los input son una sola etiqueta y los textArea son dos etiquetas (de apertura y cierre).

- En React se modificaron y los **textarea** son **etiquetas autocerrables**.

![image](https://user-images.githubusercontent.com/72580574/205511690-16a5370d-bdcc-4227-9f78-0f1df59a332d.png)

### CHECKBOX

- Son un **input** con el **type** de  **checkbox**, la diferencia es que no son un **String** sino que tiene un **valor boolean (true/false)**.

Entonces voy a tener que inicializarlo con este valor boolean:

```JSX
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    comments: "",
    isFiendly: true
  });
  ```

- Ahora en ve de ver el **value** necesito ver el **checked** en mi **handleCheck**


### LABELS

En el HTML los ```<label >``` tienen la propiedad **for**, pero ahora al estar en JSX, **for** es una palabra reservada de JavaScript, por lo que usamos **htmlFor**

![image](https://user-images.githubusercontent.com/72580574/205512203-7a818935-c734-4162-89f3-a16c909ab85c.png)

- Y volvemos al **handleChange** para adaptaro y que tambien pueda ver los cambios en el input de tipo checkbox.

- Desestructuramos: 
```JSX 
const { name, value, type, checked } = event.target
```

Y lo usamos:

![image](https://user-images.githubusercontent.com/72580574/205512406-83e80d00-23d7-46c6-917b-494ebb92b0a4.png)

![image](https://user-images.githubusercontent.com/72580574/205512439-dd07f250-0388-4877-b05c-5865aafff89b.png)


### RADIO BUTTONS

- Deben tener el **type=radio** y un **id**.

- En mi estado para poder verlos voy a agregar **employment**

![image](https://user-images.githubusercontent.com/72580574/205512615-2512640a-b511-4c15-b59c-bcc090f74459.png)

- Debo agregar la **prop** **name** que deben coincidir con como lo llamo en el estado.

![image](https://user-images.githubusercontent.com/72580574/205512696-02a51cd0-5b1b-4bc4-bfa3-0c7b8f88e33c.png)

![image](https://user-images.githubusercontent.com/72580574/205512711-5f54be41-addc-41c9-b670-582d9942f0f4.png)

- Cada input de tipo radio va a tener su propio **value** unico, voy a darle de value lo mismo que tiene de id.

- Y para estar escuchando el evento agrego ** onChange={handleChange}**

![image](https://user-images.githubusercontent.com/72580574/205512864-fc4de5e6-1bcd-4dcd-9d25-b9d2d1285a22.png)

- Para controlar la propiedad checked es distinto al textarea, en este caso lo tengo que comparar con el value:

```JSX
checked={formData.employment === "unemployed"}
````

- Dejo un input de ejemplo:

![image](https://user-images.githubusercontent.com/72580574/205512998-8ca0465b-9f4f-4b79-9bb3-44361f144c96.png)

 ## SELECT & OPTIONS
 
 - Vamos a seleccionar el color favorito
 
 - Primero lo agregamos en el estado
 ![image](https://user-images.githubusercontent.com/72580574/205513172-25c0863c-5106-4c07-8c8a-a36f62d06eae.png)

- Después agregamos el **select** como componente

Como no tnego un valor que sea **""** como inicializo el estafo, voy a agregar como primera opcion:

```JSX
<option value="">--Choose--</option>
```

![image](https://user-images.githubusercontent.com/72580574/205513359-5ff0895d-b859-429a-8bf5-770f3f590c2f.png)

## SUBMIT
 
 - En HTML en la etiqueta ```<form >``` tenemos el **method** POST / GET y la **action**, pero en React tenemos ``` <form onSubmit={handleSubmit}>```
 
---

## :star: 15to MiniProyecto : otro formulario

Consignas:

1. Crear un estado del objeto para que guarde 4 valores.

2. Crear una sola función handleChange que pueda manejar el estado de todos los inputs y los setee correctamente.

3. Cuando el usuario haga click en **Sing up**, vea si el password y la confirmación metcheen, si es así hacer un console.log con el mensaje "Sucessfully singed up", si no que el mensaje diga "PAssword to not match".

4. Cuando se haga el submit del form, si el usuario checkea el checkbox **newsletter** que tenga un console.log con el mensaje "Thanks for singing up for our newsletter!".

![image](https://user-images.githubusercontent.com/72580574/206872779-4b21b949-06b0-4686-a602-74e9c49d13f0.png)

![image](https://user-images.githubusercontent.com/72580574/206872792-0ae080b6-13ab-4c63-8069-379afe52444c.png)


![image](https://user-images.githubusercontent.com/72580574/206872824-2da3f624-c206-4739-96d5-37eec1b23bc1.png)




:tv: ->  [CodeSandBox.io](https://codesandbox.io/s/great-bessie-bpiyvx)

---

## :star: Volvemos al Meme generator

- Agregamos estilos a la imagen pra poder ponerle los textos:

```JSX
<div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-img"/>
        <h2 className="meme-text top">One does not simply</h2>
        <h2 className="meme-text bottom">Walk into Mordor</h2>
      </div>
```

- Seguimos con los input del form, le agregamos...

... la propiedad **name**: ``` name="topText" ``` y ``` name="bottomText" ``` 

... la propiedad **Value**: ``` value={ meme.topText } ``` y   ``` value={ meme.bottomText } ```

... para poder escuchar el evento cuando cambia: ``` onChange={ handleChange} ``` y creamos la función **handleChange()**

```JSX
function handleChange(event) {
    const { name, value } = event.target;
    setMeme( prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
  }
  ```
  
 - Cambio el texto top y bottom que tenía harcodeado para que sea dinámico:

```JSX
 <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-img"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
```

- Logramos que lo que ponamos en los input se vean como texto:



![image](https://user-images.githubusercontent.com/72580574/206873975-3e26b346-4f86-4d57-a2ca-d4a7e64b9737.png)

---

