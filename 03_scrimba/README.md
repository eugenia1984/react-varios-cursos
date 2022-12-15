# <img src="https://img.icons8.com/clouds/100/null/react.png"/> Scrimba * React

Todo el curso lo podés ver acá: [https://scrimba.com/learn/learnreact](https://scrimba.com/learn/learnreact), es de **Bob Ziroll**

En este [link](https://github.com/eugenia1984/react-varios-cursos/blob/main/03_scrimba/teoria.md) podés ver un poco de la teoría que se vio la principio.

---

##  <img src="https://img.icons8.com/dusk/50/null/untested.png"/> MiniProyectos

### 1er mini-proyecto : Saludo desde React

En la carpeta [01_setup](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/01_setup) pueden ver el primer mini proyecto, un simple mensaje mostrado en una pagina con React.


![saludos desde React](https://user-images.githubusercontent.com/72580574/206909649-7747203e-cb4c-45b5-9e01-4fc2468c8054.png)


:tv: -> [Aca lo pueden ver desde un SandBox.io](https://codesandbox.io/s/mini-proyecto1-4mjh8q)


### 2do miniproyecto : Renderizando un listado

En la carpeta [02_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/02_mini-proyecto)  hay un segundo ejercicio de practica, esta vez en vez de solo renderizar una etiqueta ```<h>``` se despliega una lista.

![Renderizando un listado](https://user-images.githubusercontent.com/72580574/206909709-39a20d78-e95f-4a06-94d5-86995c31ecc8.png)


:tv: -> [Aca lo pueden ver en SandBox.io](https://codesandbox.io/s/mini-proyecto2-ujpmko)


### 3er miniproyecto : Navbar

En la carpeta [03_mini-proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/03_mini-proyecto) la tercer practica con una NavBar de Bootstrap vamos a crear el primer componente que sera el NavBar y luego crearemos nuestro segundo componente funcional. También vemos como incorporar Bootstrap a React.

![image](https://user-images.githubusercontent.com/72580574/206909765-393da7b2-532c-4b10-b2bc-ab9d652b1956.png)


:tv: -> [Aca pueden ver el proyecto en Sandbox.io](https://codesandbox.io/s/mini-proyecto3-j7n76y)

### 4to Miniproyecto : home page

Hago una mini homePage, con **Header** (logo con una lista que es el menu), **List** y **Footer**, trabajando separando en componentes y estilando con CSS.


![image](https://user-images.githubusercontent.com/72580574/206909925-4d9051e4-4c9a-48a3-9f8f-add851c9ab91.png)


:tv: -> [Aca pueden ver el proyecto en Sandbox.io](https://codesandbox.io/s/mini-proyecto4-rm4z2q)


### 5to miniproyecto : cards con datos de gatos


En [05_experiencias_airbnb](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/05_experiencias_airbnb) renderizo tarjetas con datos de contacto de gatos que se crean dinamicamente por las **props** que reciben de su componente padre. También desestructuramos las props.

![image](https://user-images.githubusercontent.com/72580574/206910070-e52e4f9e-9e86-4f13-b161-33e40fae644e.png)

:tv: -> [Aca pueden ver el proyecto en Sandbox.io](https://codesandbox.io/s/cats-vor2ho)


### 6to miniproyecto : cards con chistes

En [05_experiencias_airbnb](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/05_experiencias_airbnb) renderizamos diferentes cards que reciben la información dinámicamente mediante **props** de su componente padre. Y le sumamos el **renderizado condicional** con **&&**. Además de pasar datos de tipo **String** como props pasamos datos de tipo **boolean** y **Number**.

![image](https://user-images.githubusercontent.com/72580574/206910186-c97cb25f-764d-40bc-a26c-3ac81961bffc.png)


:tv: -> [Aca pueden ver el proyecto en Sandbox.io](https://codesandbox.io/s/jokes-challenge-dykeox)

### 7mo miniproyecto: cards de chistes, mapeando un array de objetos

En [05_experiencias_airbnb](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/05_experiencias_airbnb) al ejercicio anterior le vamos a sumar el renderizado por medio de un **.map()** de un array de objetos, simulando el llamado a una API, para lo que creamos el archivo JokesData.js que es un array de objetos con keys: setup y punchline.. 

![image](https://user-images.githubusercontent.com/72580574/206910268-0d58477c-7731-4fcd-a202-cb52c0f88b13.png)


:tv: -> [Aca pueden ver el proyecto en Sandbox.io](https://codesandbox.io/s/joke-mapping-d7ztuj)


### 8vo miniproyecto: diario de viaje

En [06_mini-proyecto-travel-journal](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/06_mini-proyecto-travel-journal) pueden ver la teoría.


### 9no miniproyecto: onCLick y onMouseOver

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator) se puede ver la teoría del EventListener con la práctica de los eventos **onClick** y **onMouseOver** haciendo que al pasar el mouse sobre la imagen se vea más oscura y al hacer click en el boton se muestre un mensaje por consola.

![image](https://user-images.githubusercontent.com/72580574/206910458-25224192-f013-4c3e-928d-4adab237e0ab.png)


:tv: -> [Lo podes ver en este sandbox](https://codesandbox.io/s/adoring-wood-f0knvl)

### 10mo Mini proyecto: agregar items

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator) sigo con los EventListeners. Ahora haciendo click en el boton vamos a agregar items. Utilice el EventListener **onClick** y el hook **useState**.

![image](https://user-images.githubusercontent.com/72580574/206910427-91dd6a93-4670-4488-811a-07ddfdc84e48.png)


:tv: -> [Lo podes ver desde este sandbox](https://codesandbox.io/s/sad-rgb-nx9vb9)


### 11ro Mini proyecto: contador 

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator) practicando el hook **useStatate** arme un contador que sume y reste, para poder modificar más de una vez el estado.


![contador](https://user-images.githubusercontent.com/72580574/206909601-cc845e38-e6aa-4a9f-b35f-9147a6b8e368.png)

:tv: -> [Acá se puede ver este otro mini proyecto para utilizar useState en codigo con SandBox.io](https://codesandbox.io/s/damp-mountain-pzmv2h)


### 12do Mini Proyecto: Yes / No question

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator) practicando el hook **useStatate**, los **operadores ternarios** y una función **callback*** para modificar el estado teneindo en cuenta el estado previo, modifico la respuesta a una pregunta al hacer click: Yes -> No -> Yes -> No ...

![Yes / No question](https://user-images.githubusercontent.com/72580574/206909292-2f3f438d-a861-4ae1-9812-338289f3b744.png)


:tv: -> [Acá se puede ver este otro mini proyecto para utilizar useState en codigo con SandBox.io](https://codesandbox.io/s/vigorous-moore-hez2zv)


### 13er Mini Proyecto: Card con datos de un objeto

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator) se muestra una card utilizando los datos de un objeto, para simplificar el llamado a las key de los objetos utilizo **desestructuración** y también **spread operator**

![Card con datos de un objeto](https://user-images.githubusercontent.com/72580574/206909141-527a3051-fb99-414d-96a8-e8c08c617189.png)


:tv: ->  [Acá se puede ver este otro mini proyecto en codigo con SandBox.io](https://codesandbox.io/s/interesting-feynman-e0u5e9)


## 14to Mini Proyecto : Mensaje con conditional rendering

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator) practicando **conditional rendering** con el operador **&&**, se muestra la etiqueta ```<h1>``` sólo si hay mensajes sin leer. Y también modifico el mensaje de tenes un mensaje a tenes X mensajes sin leer, dependiendo de si tiene 1 o más mensajes sin leer.

![Mensaje con conditional rendering](https://user-images.githubusercontent.com/72580574/206908215-38597bc8-1cc0-474c-9cab-6d8989430da4.png)


:tv: ->  [Acá se puede ver este otro mini proyecto en codigo con SandBox.io](https://codesandbox.io/s/youthful-engelbart-d616uf)


## 15to MiniProyecto : formulario de login

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator)  practicando **formularios**

Consignas:

1. Crear un estado del objeto para que guarde 4 valores.

2. Crear una sola función handleChange que pueda manejar el estado de todos los inputs y los setee correctamente.

3. Cuando el usuario haga click en **Sing up**, vea si el password y la confirmación metcheen, si es así hacer un console.log con el mensaje "Sucessfully singed up", si no que el mensaje diga "PAssword to not match".

4. Cuando se haga el submit del form, si el usuario checkea el checkbox **newsletter** que tenga un console.log con el mensaje "Thanks for singing up for our newsletter!".

![mini proyecto formulario de login](https://user-images.githubusercontent.com/72580574/206907711-b480c09f-7967-448b-a5b8-16124d95573f.png)


:tv: -> [Codigo en CodeSandBox.io](https://codesandbox.io/s/great-bessie-bpiyvx)

## 16 Mini Proyecto : useEffect y función cleanup

En [07_meme_generator](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator)  practicando useEffect y función cleanup

![image](https://user-images.githubusercontent.com/72580574/206915671-c78cc590-69bd-4f46-a3fa-d9018e9c1e7c.png)

:tv: -> [Codigo en CodeSandBox.io](https://codesandbox.io/s/nice-hooks-d09q9o)

---

##  <img src="https://img.icons8.com/dusk/50/null/untested.png"/> Proyectos


### :star: 1er proyecto: Página estática en React

![image](https://user-images.githubusercontent.com/72580574/200196250-ec76c280-a6f6-4b79-ba73-92dac7779299.png)


En una página estática, como las que se hacen con HTML y CSS, pero empezando a usar React, para así poder aprender la sintaxis básica y el vocabulario de React.

Se aprende a cómo pensar en React, porque se modifica el modo de crear aplicaciones.

Temas que se ven:

```
- JSX
- componentes
- aplicar CSS
```

:book: -> [aca pueden ver la teoria](https://github.com/eugenia1984/scrimba-project1)

:computer: -> [aca se puede ver deployado](https://airbnb-project2-scrimba.netlify.app/)


### :star: 2do proyecto: Clone de las experiencias de airbnb

![image](https://user-images.githubusercontent.com/72580574/200696130-a2a9bec3-6564-443f-8557-fd207560766b.png)

Temas que se ven:

```
- props
- crear componentes desde un array de datos
```

:tv: -> [Aca se puede ver el diseño en Figma](https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1&t=7dq2BK8ToYT7D9wQ-0)

:book: ->  [Aca pueden ver la teoria](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/05_experiencias_airbnb)

:computer: -> [Aca pueden ver el proyecto en codigo](https://github.com/eugenia1984/scrimba-project2)



### :star: 3er proyecto: Generador de memes (web interactiva)

Este es el ejemplo de como va a quedar:

![image](https://user-images.githubusercontent.com/72580574/205065437-9adcaefb-5d24-467b-9218-c6f0451c8d7f.png)


Temas que se ven:

```
- Event listeners
- State
- Conditional rendering
- Forms
- Side effects
```

:tv: -> [link al diseño en Figma](https://www.figma.com/file/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0%3A1&t=d6jKjjGA1qYGBk71-0)

:book: -> [Aca pueden ver la teoria que se repaso para hacer el proyecto](https://github.com/eugenia1984/react-varios-cursos/tree/main/03_scrimba/07_meme_generator)


:tv: -> [Aca se ve en Demo](https://react-scrimba-meme.netlify.app/)


## :star: 4to Proyecto : Light / Dark mode

Volviendo al primer proyecto, vamos a implementarle el efecto **light / dark mode**.

![Light / Dark mode](https://user-images.githubusercontent.com/72580574/206916963-6b118d0b-9ce8-4946-81a5-9b4a52d4764b.png)

:computer: -> [Este es el repositorio del 1er y 4to proyecto](https://github.com/eugenia1984/scrimba-project1/blob/main/README.md)

:tv: -> [Aca se ve en demo](https://scrimba-proyect4.netlify.app/)


## :star: 5to Proyecto: un clone de notas

![image](https://user-images.githubusercontent.com/72580574/206916979-844a5599-bbf5-4a8b-82d9-73a7a9a636bf.png)

:tv: -> [Aca pueden ver el repositorio del proyecto](https://github.com/eugenia1984/scrimba-project5)

<img src="https://user-images.githubusercontent.com/72580574/207923083-960c0db5-0a05-4331-94d7-5bb19d71439f.png" alt="que features agregamos" style="width: 300px;">


## :star: 6to Proyecto : Tenzies

![image](https://user-images.githubusercontent.com/72580574/206916991-8b468050-aef1-483c-9e85-999f743d42aa.png)


---
---

