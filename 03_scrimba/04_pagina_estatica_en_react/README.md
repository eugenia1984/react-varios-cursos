## :star: Cuarto proyecto * Pagina estática con React

---

### Vamos a crear esta pagina en React

![image](https://user-images.githubusercontent.com/72580574/200199764-24888020-8fc7-4d71-9aef-0134d79d83d9.png)



---
---

### :book: Componentes Padres / Hijos

Aca se ve el ejemplo del componente padre **App** y del componente hijo *+Header**

![image](https://user-images.githubusercontent.com/72580574/200211268-0bcd2901-8001-4c40-8c00-b5fa6cbf278d.png)


:tv: [En este Sandbox.io esta el codigo](https://codesandbox.io/s/mini-proyecto4-rm4z2q)

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

Una funcion que devuelve elementos de REact, los objetos que se crean en JSX, se convierten luego a elementos reales del DOm, son las UI. Puede ser reutilizado, las veces que se necesiten.

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
---

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
