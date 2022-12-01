# :star: 3er proyecto: Generador de memes (web interactiva)

---

## Este es el ejemplo de como va a quedar:

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

## Event Listeners

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

## Volviendo al generador de memes...

En realidad no es necesario tener el boton dentro dle form, porque sino cada vez que se haga click en el botón se va a volver a renderizar la app, asi que hacemos esa modificación. Simplemente cambiamos la etiqueta de **form** por **div** y nos vamos a importar memeData.js que es un simil JSON que nos armamos para traer algunas imagenes de memes, sin tener que estar llamando a la API.


Por ahora lo importamos a ese JSON y haemos que al hacer click en el boton por consola se muestre la URL:

![image](https://user-images.githubusercontent.com/72580574/205126041-adadf4cf-52c2-463b-92cf-2e97b944bb07.png)


---

### Mini proyecto: agregar items

Haciendo click en el boton vamos a agregar items. Para esto vimos el concepto de **estados**, al tener un cambio de estado React va a volver a renderizar el componente y modifica la UI. Use **useState** 

![image](https://user-images.githubusercontent.com/72580574/205133820-ce6404b9-fdac-4886-8c97-326aa596c1b0.png)


:tv: -> [Lo podes ver desde este sandbox](https://codesandbox.io/s/sad-rgb-nx9vb9)
