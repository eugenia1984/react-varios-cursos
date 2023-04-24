# :star: CLASE 16 - 19 ABRIL :star:

---

## :book: Asincronismo

**setTimeOut** para ejecutar algo luego de transcurrido determinado tiempo.

**.fetch** en JavaScript es **Asincrónica** igual que **async-await**.

**Try-catch** y **.then** nos ayudan con la asincronía

---

:book: [jsbin](https://jsbin.com/?html,output) para ver el tema del asincronismo

---

## :book:  API

Puedo usar las que existen o puedo crearme mi propia API.

Hay APIs gratuitas y APIs pagas.

TMDB es una API para trabajar con peliculas.

La mayoría necesita que me **Registre** y que cree una **API KEY**, esta API_KEY debe ser **Secreta**, **no se debe compartir**.

Los **Datos** vienen como un **objeto** en un archivo **JSON**.

Puedo buscar una pelicula por ``id: get/movie/:id``

Hay otras opciones que sea rman mediante una **query**

Siempre hay que ayudarse con la documentación de la API.


La respuesta viene junto a un codigo -> **200** es el ok

-> Hay que tener cuidado, porque las APIs tiene un maximo de consultas, sino te bloquean, por eso no se puede estar consultando a la API constantemente, sino que hay que controlarlo. Esto lo hacemos con el **useEffect**

---

## :book: Hook useEffect

¿Cómo es la sintaxis del useEffect?

```JSX
import { useEffect } from 'react'

useEffect( () => {
}, [])
```

- Tiene un **Callback**

- Tiene un **dependency array**, si esta el array de dependencia vacía, solo se ejecuta al momento de montar el componente. Si ese array de dependencia, adentro tiene variables, se va a ejecutar al montar el componente y cada vez que cambie el valor de esa variable.

Ejemplo en codig:

**Api.jsx**
```JSX
import React, { useState, useEffect } from 'react'

const API = () => {
  const [users, setUsers ] = useState([])
  
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(data => data.json()) // para convertir la data en JSON
      .then( json => setUsers(json.data)) // paso la info a la variable de estado
  }, [])
  
  console.log(users) // para ver por consola lo que tengo
  
  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {
          users.map(user => (
            <li key={user.id}><img src={user.avatar}/>{user.first_name}{user.last_name}{user.email}</li>
          ))
        }
      <ul>
    </div>
  )
}
```

Y luego en mi **App.jsx** importo `<Api>` y lo muestro.


En general va de la mano del **useState** porque lo que quiero es justamente modificar el estado.


---
---

# :star: CLASE 17 - 24 ABRIL :star:

:tv: Empezamos con proyecto de la búsqueda de películas.

Como devuelve muchas, hay que armar un paginado:

![image](https://user-images.githubusercontent.com/72580574/234038240-1d4a0a52-3be7-463b-8ec7-7409e81be872.png)


:computer: [Link al repo de la profesora](https://github.com/GiselaFlores/asincronismoaa)

```
> src
  > componentes
    > Peliculas.jsx
  > App.jsx
```

- **App.jsx**:


```JSX
import logo from './logo.svg';
import './App.css';
import Peliculas from './componentes/Peliculas';

function App() {
  return (
    <div className="App">
      <Peliculas/>
    </div>
  );
}

export default App;
```

- **Peliculas.jsx**:


```JSX
function Peliculas() {
  let pagina = 1;

  const btnAnterior = (e) => {
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();  
    }
  }

  const btnSiguiente = (e) => {
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();  
    }
  }

  const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`);
        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = "";
            datos.results.forEach(pelicula => {
                peliculas += `
                        <div class="pelicula">
                            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <h3 class="titulo">${pelicula.title} </h3>
                            <p>${pelicula.overview}</p>
                        </div> 
                `;
            });

            document.getElementById("contenedor").innerHTML = peliculas;
        }
        // Si hay errores y no trae bien los datos
        // habria que sumarle con el sweetalert2 agregar un mensaje, sino el usuario no sabe que pasa
        else if(respuesta.status === 401){ console.log("Key incorrecta");}
        else if(respuesta.status === 404){ console.log("no disponible");}
        else { console.log("no tengo idea del error");}
    } catch(error) {
        // Aca con el sweetalert2 se podria enviar un alerta
        console.log(error.message);
    }
}

 cargarPeliculas();

  return (
    <div>
        <div class="contenedor" id="contenedor"></div>
        <div className="paginacion">
            <button onClick={btnAnterior}>Anterior</button>
            <button onClick={btnSiguiente} id="btnSiguiente">Siguiente</button>
        </div>
    </div>
  )
}

export default Peliculas;
```

---
