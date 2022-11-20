## :star: Cuarto proyecto * Pagina estática con React

-> [Aca se puede ver deployado en Netlify](https://scrimba-proyect1.netlify.app/)

-> [Este es el repositorio de GitHub](https://github.com/eugenia1984/scrimba-project1)
---

### Vamos a crear esta pagina en React

![image](https://user-images.githubusercontent.com/72580574/200199764-24888020-8fc7-4d71-9aef-0134d79d83d9.png)


- En este Figma está [el diseño para ver](https://www.figma.com/file/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0%3A4). 

- ¿Como es el layout ?

Va a tener un rectangulo (Header/Nav) que va a tener a la izquierda el icono y logo y a la derecha el nombre. Luego esta el segundo rectangulo(Main)  que tendra el titulo (```h1```) y la lista desordenada(```ul```). Entocnes seria algo asi:

```
<div.container>
  <nav>
     <img />
     <h3></h3>
     <h4></h4>
  </nav>
  <main>
     <h1></h1>
     <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
     </ul>
  </main>
</div>
```

-> Esto pasandolo a React veo que voy a tener dos componentes: Nav y Main.

---
---

### :book: Componentes Padres / Hijos

Aca se ve el ejemplo del componente padre **App** y del componente hijo **Header**

![image](https://user-images.githubusercontent.com/72580574/200211268-0bcd2901-8001-4c40-8c00-b5fa6cbf278d.png)


:tv: [En este Sandbox.io esta el codigo](https://codesandbox.io/s/mini-proyecto4-rm4z2q)

---

### :book: Estilizando con clases

En vez de utilizar **class** usamos **className** y lo hacemos como siempre en la hoja de estilos de CSS:

![image](https://user-images.githubusercontent.com/72580574/200212466-727713c1-5333-47d9-ba04-457a7dbd0e54.png)

---

### <img src="https://img.icons8.com/ios/40/null/project-setup--v1.png"/> Otro mini desafio para practicar


- Realizar otra SPA [con este figma de ejemplo](https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1)

- Requerimientos:

```
- empezala desde cero
- completala con tu informacion personal
- debe tener los siguientes componentes por separado: Info( foto, nambre, botones, etc), About (titulo y texto), Interest (titulo y texto), Footer (iconos de RS)
```

---

### :book: Mini quiz

1. ¿Por que necesitamos importart "React" de "react" en nuestros archivos ?

Porque "React" es lo que define JSX

2. Si voy a consologear "page" en el index.js que se va a ver

El objto JavaScript. Son los elementos REact que se van a renderizar en el DOM real.

3.  ¿Qué esta mal en este codigo?

```JSX
const page = (
 <h1>Hello</h1>
 <p>Esta es my pagina web</p>
) 
```

Tenemos dos elementos que retornamos y solo debemos tener un elemento padre, lo podemos envolver todo dentro de un div padre o utilizar fragment.

4. ¿Que significa que sea "declarativo" a diferencia de "imperativo"?

Declarativo significa que le decimos a la computadora que hacer. 

Imperativo debo decirle que hacer en cada paso.

5. ¿Que significa que sea codigo componible?

Puedo crear pequeños pedazos de la UI y ponerlo en un componente, y luego juntar todos estos componentes para hacer la pagina web.

6. ¿ Que es un componente de React?

Una funcion que devuelve elementos de React, los objetos que se crean en JSX, se convierten luego a elementos reales del DOm, son las UI. Puede ser reutilizado, las veces que se necesiten.

7. ¿Que esta mal en este codigo?

```JSX
function myComponent() {
 return(
  <small>I´m tiny text!</small>
 )
}
```

Se escriben **PascalCase** la primer letra debe estar en mayuscula, y liego cada primer letra de la palabra debe estar en mayuscula.

8. ¿ Que esta mal con este codigo?
```JSX
function Header() {
 return (
  <header>
   <nav>
    <img src="./react-logo.png" width="40px" />
   </nav>
  </header>
 )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

En ReactDOM.render en vez de llamarla como la funcion se debe llamar como un componente: ```<Header />```


---

## :star: Asi quedo

![image](https://user-images.githubusercontent.com/72580574/200693576-02d63563-22d5-4a19-91f6-f3e88ce157bb.png)


---
---
