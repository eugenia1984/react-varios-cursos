# React

---

## :star: Clase 14/09

React es **reactivo**

**Reconciliación** cuando unifica el VIRTUAL DOM al DOM.

**Flujo de datos unidireccional** del componente padre al componente hijo.

**Proceso** -> **Subproceso** -> **Treads** -> **Fiber** (un subproceso más avanzado)

---

```<div className="container">Pepe</div>```


```react.creeateElement('div', {className: 'container'}, 'Pepe')```

---

## npm

Node Package Manager, es un manejador de paquetes (son librerias) que terceros las crean, por eso hay que ver con que se trabaja.

Comandos:

```npm i nombre_paquete``` ò ```npm install nombre_paquete``` para instalar

```npm un nombre_paquetew``` ó ```npm uninstall nombre_paquete``` para desinstalar

```npm init``` para crear un nuevo paquete

```npm update nombre_paquete``` para actualizarlo (aca hay que teer cuidado que no se nos rompa todo

En **node_modules** están todos y en el **package.json** voy a tener el detalle de las librerias y las versiones utilizadas.

Dentro del **package.json** tengo el **script** donde puedo poner mis propios comandos.

---

### webpack

Es un empaquetador de modulos, trabaja como compilador, vincula todos los elementos del proyecto para el elemento definitivo. Gestiona las dependencias, la ejecucion de tareas. Carga y usa modulos de todo tipo.

Task runner, procesa los archivos para poder mostrarlos en el navegador.

No es sencillo configurar webpack.

Nos sirve como servidor y como compilador.

---

### Babel

Es un traspilador, transcribe le codigo posterior a ES6, para que sea compatible con los navegadores viejitos.

---

### JSX

JavaScript XML

Las etiquetas deben tener todas sus cierre, por eso la imagen es ```<img />```

No podemos utilizar **class** por ser palabra reservada (en JS es clase), por lo que usamos **className**, lo mismo con el atributo **for** que en JS es para el bucle por lo que hay un **htmlFor**.

---

### Frameworks para CSS

- Bootstrap React

- Tailwind React

- Material UI

- Styled Components (de todas es el más complejo)

#### Tailwind

[https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

1. Para instalarlo:
```
npm install -D tailwindcss postcss autoprefixer
```

2. Para inciializarlo:
```
npx tailwindcss init -p
```

**tailwind.config.js** ashi me puedo crear mis clases para usarlas en tailwind.

3. Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

index.css:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Start your build process

Run your build process with npm run start.

Terminal
```
npm run start
```

6. Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

App.js
```JSX
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```


Como las clases me van a quedar muy larga con Tailwind, las voy guardando en variables:
```JSX
export default function App() {
const hello = "text-3xl font-bold underline";

  return (
    <h1 className={hello}>
      Hello world!
    </h1>
  )
}
```

---
---

## :star: Clase 19/09

Dentro del componente le podemos pasar props para utilizar esa información

### Hooks

Elementos que vinculan el DOm con el codigo, con las cosas que  hacemos, ya que al trabajar con el virtual DOm le tenemos que avisar al DOM.


### Estructura de mi proyecto

```
src
    assets
        fonts
        images
    components
        NavBar 
            Logo.js
            Menu.js
    pages
    App.cs
    App.js
    index.css
    index.js
    .gitignore
    package-lock.json
    package.json
    README.md
```

---
---
