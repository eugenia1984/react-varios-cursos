# :star2: APIS * Unidad 2

---

## :book: Temas:

```
- 1 - ¿Qué es React Router?
- 2 - Instalación
- 3 - Configuración de React-Router
- 4 - Tipos de rutas
- 5 - UseParams
```

---

## :star:  1 - ¿Qué es React Router?

**React Router** es **una colección de componentes de navegación la cual podemos usar tanto en web o en móvil con React Native**. Con esta librearía **vamos a obtener un enrutamiento dinámico gracias a los componentes**, en otras palabras, **tenemos unas rutas que renderizan un componente**.

Beneficios de React Router:

- **Establecer rutas** en nuestra aplicación ej: Home, About, User.

- Realizar **redirecciones**

- Acceso al **historial del navegador**

- Manejo de **rutas con parámetros**

- Páginas para el manejo de errores como **404**

- Componentes pilares de React Router

- **BrowserRouter** -> Este componente es el encargado de **envolver nuestra aplicación dándonos acceso al API historial de HTML5 (pushState, replaceState y el evento popstate) para mantener su UI sincronizada con la URL**.

### Switch

Este componente es el encargado de que **solo se renderice el primer hijo Route o Redirect que coincide con la ubicación**. Si no usar este componente todos los componentes Route o Redirect se van a renderizar mientras cumplan con la condición establecida.

-> En la version 6 es el Navigate, para redireccionar

### Route

Con Route **podemos definir las rutas de nuestra aplicación**, quizás sea el componente más importante de React Router para llegar a comprender todo el manejo de esta librería. **Cuando definimos una ruta con Route le indicamos que componente debe renderizar**.

Este componente cuanta con algunas propiedades

- **Path**: la **ruta** donde debemos renderizar nuestro componente podemos pasar un string o un array de string.

- **Exact**: Solo vamos a **mostrar nuestro componente cuando la ruta sea exacta**. Ej: /home === /home.

- **Strict**: Solo vamos a mostrar nuestro componente **si al final de la ruta tiene un slash**. Ej: /home/ === /home/

- **Sensitive**: Si le pasamos **true** vamos **a tener en cuenta las mayúsculas y las minúsculas de nuestras rutas**. Ej: /Home === /Home

- **Component**: Le pasamos un componente para **renderizar solo cuando la ubicación coincide**. En este caso el componente se monta y se desmonta no se actualiza.

- **Render**: Le pasamos una función para **montar el componente en línea**.

---

## :star: 2 - Instalación

Por defecto, React no viene con un sistema integrado de navegación, ya que debe mantener sus dependencias al mínimo porque no todos los proyectos necesitan routing, la misma se maneja con una dependencia aparte.

Tenemos varias formar de instalar, pero de las cuales utilizaremos el siguiente comando:

```npm install react-router-dom```

### Importar

- Una vez instalado debemos importar el modulo

```JSX
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
```

- Una vez realizada la importación se necesita realizar varias cosas:

1. Envolver la aplicación en un BrowserRouter

2. Crear un Switch, en el cual se proyectarán las vistas navegadas

3. Crear las rutas (Route´s) de las distintas secciones para navegar


---

## :star: 3 - Configuración de React-Router

Comencemos a **configurar nuestro Router**, para eso genera el siguiente archivo dentro de la carpeta ```src/Router.js``` este archivo sustituirá al archivo ```App.js``` en el ```index.js``` de nuestra aplicación, en él haremos la configuración y la gestión de nuestras rutas:

Primero si queremos proveer a toda nuestra aplicación de rutas tenemos que posicionar al componente ```BrowserRouter``` como el componente padre de todas nuestras rutas es decir este debe envolverlas de la siguiente manera:

 
```JSX
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
```
 

Como se habrá notado agregamos el **componente Routes** antes de nuestra primera ruta, esto se debe a que **Routes genera un árbol de rutas a partir de su props.children** es decir que **cada Route es un elemento hijo de Routes** y esto es así, ya que en el momento en que cambiamos la URL en nuestra aplicación, Routes busca en todos sus children Routes para encontrar la mejor coincidencia y renderizar esa rama en la interfaz del usuario.

```JSX
//src > Router.js

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  const Home = () => <h1>Home</h1>;
  const Pets = () => <h1>Pet List</h1>;
  const Layout = () => <h1>Layout</h1>;
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="pets" element={<Pets />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
};

export default Router;
```
 

Dentro de nuestro Router podemos generar todas las rutas que queramos solo necesitamos hacer uso del **componente Route** agregarle al menos dos **propiedades path y element**, de esta manera si el path coincide con la URL del navegador renderizara el valor de element.

Perfecto hasta este punto ya tenemos nuestro Router con una configuración básica, podemos dirigirnos a cada una de las rutas que configuramos y obtendremos una vista especifica. Continuemos con el desarrollo de nuestro **componente Layout**, tener una **navbar** no solo nos facilitará el desarrollo también provee a nuestros usuarios de los enlaces disponibles dentro de nuestra aplicación, para ello React Router nos proporciona el siguiente componente:

```<Link />``` Este componente recibe en su propiedad **to** el ```path de la ruta a la cual nos queremos dirigir dentro de nuestra aplicación```. Es importante hacer uso de este, ya que además de permitirnos crear los enlaces de navegación este no recarga nuestra aplicación, característica fundamental de una SPA.

```JSX
import { Link } from "react-router-dom";
  const Layout = () => {
    return (
      <>
        <nav style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">Home</Link>
          <Link to="/pets">Pets</Link>
        </nav>
      </>
    );
};

export default Layout;
```


---

## :star:  4 - Tipos de rutas

---

## :star:  5 - UseParams

---
