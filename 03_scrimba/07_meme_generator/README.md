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

---


