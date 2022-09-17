# :star2: React Router:star2:

---

## :star: 1 - Instalando React Router

-  ¿ Como me muevo de componente en componente cuando estoy en una SPA(Single Page Application)?

Incorporando React Router que nos permite movernos de pagina en pagina mostrando distintos componentes.

[https://reactrouter.com/en/main](https://reactrouter.com/en/main)

- Vamos a instalarlo en el proyecto:

1. Nos aseguramos de estar en el directorio correcto (me voy a my-app)

2. Lo instalamos por consola con npm: ```npm install react-router-dom6```

3. Hacemos algunos ajustes en nuestra App, borramos todo, solo por ahora retornamos un h1 con App, y creamos algunos componentes funcionales, como: Home, About y Contact, asi simulamos las opciones que tenemos en un NavBar.


```JSX
import "./App.css";
 
function Home() {
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Concat Us</h1>
    </div>
  );
}


function App() {
  return (
    <h1>App</h1>
  );
}

export default App;
```

-> Nos falta configurar el Router para poder ir de componente en componente y necesitamos renderizar ese mismo componente.

---

## :star: 2 - Configurando el router

1. Nos vamos al index.js y vamos a importar BrowserRouter, Routes y Route de react-router-dom.

Y dentro del componente BrowserRouters voy a tener el componente Routes, donde voy a configurartodos los path a mostrar, con el componente Route y le paso como path la ruta d ela url y como element el componente que mostrara.

2. Para poder usar en element los componentes los tengo que importar: ```import { App, About, Contact } from "./App";```

```JSX
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, About, Contact } from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route 
        path="/" 
        element={<App />} />
      <Route 
        path="/about" 
        element={<About />} />
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

```


3. en App.js me tengo que asegurar de exportar los componentes sino no los puedo usar en index.js

```JSX
export function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}
```

---

## :star: 3 - Incorporando el link a un componente


1. En App.js vamos a importar LInk de react-router-dom: ```import { Link } from "react-router-dom";```

2. Adentro del componente Home vamos a tener el link en el Nav. Y lo lo voy a ver hasta que agregue to="" y dentro a que ruta v aa ir el link.

```JSX
function Home() {
  return (
    <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
      <h1>My Website</h1>
    </div>
  );
}
```

3. Como tengo que copiar el Nav en varios componentes mejor lo pongo en un componente aparte:
```JSX
function Nav(){
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
function Home() {
  return (
    <div>
      <Nav />
      <h1>My Website</h1>
    </div>
  );
}
```

---

## :star: 4 - Nesting links con React Router v6

Ahora vamos a imaginar que dentro dle About Us vamos a tener otro link para mostrar el componente History

En el index.js vamos a la configuración de los routers, en el Route de Bout Us lo vamos a cerrar con componente de apertura y cierre, asi adentro podemos tener otro Route (antes acordarse de importarlo y en App.js tener el componente History exportado).

Y el path es simplemente /history, porque ya estoy en /about

```JSX
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, About, Contact, History } from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route 
        path="/" 
        element={<App />} />
      <Route 
        path="/about" 
          element={<About />}>
          <Route 
            path="history"
            element={<History />}/>
      </Route>
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```

Pero ahora si tenemos http://localhost:3000/about/history seguimos viendo lo de About.

Importamos en App.js el compoennte Outlet del react-router-dom: ```import { Link, Outlet } from "react-router-dom";``` y lo vemos a Outlet como un pequeño contenedor que va a mostrar al compoennte History.

En el compunente About le agregamos el Outlet