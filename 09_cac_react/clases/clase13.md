# :star: CLASE 13 - 12 APR

---

## :star: Proyecto Memes


- [https://www.grabient.com/](https://www.grabient.com/) para hacer un formo con colores en gradiente. Elegimos uno y simplemente copiamos el código, por ejemplo:

```CSS
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 52%, #FFCC70 100%);
```

- Además de **React** usamos **SweetAlert2** y **html2canva**.

Dentro de la carpeta de **componentes** creamos un nuevo componente `<Descargado.js >` para probar el **SweetAlert2**:

```JSX
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Descargado = () => {
    const MySwal = withReactContent(Swal)
    Swal.fire('Hace tu meme favorito y acepta las cookies')
}

export default Descargado;
```

También funciona así, con `const MySwal = withReactContent(Swal)` como constante fuera del componente funcional, para cuando no necesito que esté ligado al componente de React:

```JSX
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Descargado = () => {    
    Swal.fire('Hace tu meme favorito y acepta las cookies')
}

export default Descargado;
```

Y en **App.js** tengo:

```JSX
import './App.css';
import Descargado from './Componentes/Descargado';
import Imgmeme from './Componentes/Imgmeme';

function App() {
  return (
    <div className="App">
      <Descargado/>
      <Imgmeme />
    </div>
  );
}

export default App;
```

- Y asi en el primer render de la app se ve el cartel:

![image](https://user-images.githubusercontent.com/72580574/232357121-24fb0f43-2167-4fd6-b31e-f56be0ea6be5.png)

- De nuevo usamos el **hook**: **useState** para ir modificando el estado de la opción elegida y poder ir cambindo la imagen del meme.

Al hacer el `<onChange>` en el `<Select>` es que voy a ir cambiando la elección, gracias al **value** es la imagen que se va a ver.


---

## :star: React-Router-DOM


## ¿Cómo ordene el proyecto ?

- **package.json**:

```JSON
{
  "name": "router",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "react-scripts": "^2.1.3",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

![image](https://user-images.githubusercontent.com/72580574/232355730-c3823fdc-a92e-42ae-a845-d167efb1b864.png)

- **index.js**:

```JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
 </BrowserRouter>
);

reportWebVitals();
```

- **App.js**:

```JSX
import './App.css';
import ComponenteUno from './componentes/ComponenteUno';

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<ComponenteUno />} />
    </Routes>
  );
}

export default App;
```

- **componentes/ComponenteUno.js**: 

```JSX
import {Link as LinkRouter} from 'react-router-dom';

const ComponenteUno = () => {
    return (
        <LinkRouter to={'./AboutMe'} />
    )
}

export default ComponenteUno;
```

---
---

# :star: CLASE 14 - 17 ABRIL

- Seguimos con el generador de memes

- Seguimos con html2canvas para poder exportar el meme.

Tenemos que hacer ciertos cambios:

-No necesitamos exportar todo el **body** sino solo la parte del meme, para eso le damos un **id** a la `<figure>` que es el que tiene el meme generado.

-No necesito tener un hijo adentro.

-Hay que personalizar a que carpeta se exporta, como se llama el archivo y que extensión va a tener.

-Canva trae un metodo **toDataURL** donde le aclaro el acceso a al información.

-Creamos uan etiqueta `<a>` para generar un download y se ejecute al hacer el click. La guardamos en la variable **link**, lo creo con **.createElement**. Y le aplico el método de descargas con el método **.download** y le indico como quiero que se descargue, le asigno un **nombre** al archivo y le agrego la extensión, por ejemplo: **meme.png**

-Ahora debo decirle de donde lo descarga `link.href`, le paso una ruta, entonces como no es una URL para redirigir a un lugar, el anchor me va a descargar el meme.

- La clase que viene vemos el **useEffect** y el fetch a las APIS, para modificar, en vez de usar imagenes que tengo yo, las voy a traer de una API.

- Un ejemplo de un trabajo de un compañero que ya curso:


Se pueden agregar texto en dos lados, se puede elegir el color del texto y el tamaño.

![image](https://user-images.githubusercontent.com/72580574/233364145-523ab834-a27f-478e-ab94-8058c9af0443.png)


![image](https://user-images.githubusercontent.com/72580574/233364183-4d5d380e-5ebc-41ba-b882-453f0e0f5904.png)


Otro ejemplo:

![image](https://user-images.githubusercontent.com/72580574/233364396-ec7088a5-044d-4a5b-afa1-05adef8c5aa6.png)


![image](https://user-images.githubusercontent.com/72580574/233364634-068e0c08-66e9-4281-a8a8-985d89077048.png)

---
---

# :star: CLASE 15 - 19 APR

## React-Router-DOM

Para poder navegar y cambiar los componentes que se van renderizando, puedo tener un Header y Footer que siempre se ven en todas las rutas y voy a ir cambiando lo dle medio, acorde a donde quiero ir.

Deja de ser un One Page y tiene varias paginas.

1. Con `npm i react-router-dom` lo instalamos

2. Se puede tener el `<Browser Router>` en el archivo index.js donde voy a envolver a mi `<App>`. Primero siempre voy a tner que **importar** para poder usarlo: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'`. Pero los componentes `<Routes>` y `<Route>` pueden estar dentro del compoennte `<App>` porque tal vez tengo el header y el footer que quiero que se renderice siempre (template) y solo me cambie lo del medio.

```JSX
<BrowserRouter>
    <App />
</BroswerRouter>    
```

3. Vamos a ir creando el **paginado** de la navegación de mi App, inclusive puedo tener **rutas hijas**. `<Routes>` es el **componente padre que tiene todas las rutas**, `<Route>` es cada ruta en si y `<Link>` es un link.


```JSX
<App>
    <Header/>
        <Routes>
            <Route path='/' element={<Home />}>
            <Route path='/about' element={<About />} >
        </ Routes>
    <Footer />
<App />
```


---

---
