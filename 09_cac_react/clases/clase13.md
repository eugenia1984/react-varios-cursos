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

# :star: CLASE 13 - 17 ABRIL

- Seguimos con el generador de memes


---
---

# :star: CLASE 15 - 19 APR

## React-Router-DOM

---
