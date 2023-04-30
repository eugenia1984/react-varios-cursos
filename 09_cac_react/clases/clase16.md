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

Y para los estilos: **App.css**:

```CSS
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Montserrat', sans-serif;
	background: #e0e0e0;
	color: #1d1d1d;
}

.export{
	margin: 0;
	padding: 0;
	text-align: center;
	margin: auto;
}

.contenedor {
	width: 100%;
	max-width: 1000px;
	margin: 40px auto 40px auto;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	-ms-grid-columns: repeat(4, 1fr);
	-ms-grid: grid;
	gap: 40px;
}

.contenedor .pelicula {
	text-align: center;
}

.contenedor .pelicula .titulo {
	font-size: 16px;
	font-weight: 600;
}

.contenedor .pelicula .poster {
	width: 100%;
	margin-bottom: 10px;
	border-radius: 15px;
}

.paginacion {
	position: fixed;
	bottom: 0;
	background: #100a1f;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 20px;
	padding: 10px;
}

.paginacion button {
	cursor: pointer;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	height: 50px;
	width: 200px;
	background: #241744;
	color: #fff;
	border-radius: 100px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	transition: .3s ease all;
}

.paginacion button:hover {
	background: #137c32;
}
```


:computer: -> [Documentacion de la API](https://www.themoviedb.org/documentation/api?language=es-es) y [para developers](https://developers.themoviedb.org/)

---

## PETICIONES - PROMESAS


Son **peticiones** que se hacen a un servidor, el cual me va a dar una **Response**(respuesta) con un **Status**, el **200** es **ok**, hay otros estados que me indican que tengo un **error**, manejamos el **400** y el **401** y con SweetAlert2 aviso con un cartel de alerta. y si tengo algún otor error, lo manejo con el **catch** y también aviso al usuario con el sweetAlert2.

Como estoy haciendo un FETCH a la API, va a estar ESPERANDO la RESPUESTA, por eso se utiliza el **async-await**, otro modo es con el **.then()**.

---
---

:star: CLASE 18 - 26 ABRIL

- 13 Y 14 DE JUNIO ES LA **FERIA DE APRENDIZAJE A LO LARGO DE LA VIDA**, está la entrega de diplomas, los poryectos, etc. La profe va a estar el 14 de Junio que es miércoles, asi que ese día no va a haber clases, si le cambian el día si hay clases.

- Seguimos con el proyecto de las películas con la API de THE MOVIE DB.

- Elegimos trabajar con el **get** `movie/popular`, las más populares en base al ranking(no implica que sean las más nuevas)

![image](https://user-images.githubusercontent.com/72580574/235377741-c48b311d-0cbe-4ac7-a086-0746048254c7.png)

1. Hacemos el fetch para traer la información de la API

2. Utilizamso el **try-catch**, en el **try** hacemos todo lo que está ok y en el **catch** manejar el error.

3. Para manejar el **Asincronísmo** utilizamos el **async-await**(debo tener un solo **async** y varios **await**).


---

## :stars: librerias externas para trabajar con React

Links:

-**TAILWIND**:

- [https://tailwindui.com/](https://tailwindui.com/)

- [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

- [https://tailwindui.com/components/marketing/sections/pricing](https://tailwindui.com/components/marketing/sections/pricing)

- [https://tailwindcomponents.com/cheatsheet/](https://tailwindcomponents.com/cheatsheet/)

- [https://www.tailwindshades.com/](https://www.tailwindshades.com/) 

-[**HEADLESS UI**](https://headlessui.com/)

-[**HERO ICONS**](https://heroicons.com/)


-[**REACT BOOTSTRAP**](https://react-bootstrap.github.io/)

-[**MATERIAL UI**](https://mui.com/)

-[**CHAKRA UI**](https://chakra-ui.com/)

---

## :computer: Ejemplo de la profe

[https://github.com/GiselaFlores/tailwindcss](https://github.com/GiselaFlores/tailwindcss)


---
---

