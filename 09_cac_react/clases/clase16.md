# :star: CLASE 16 - 19 ABRIL :star:

---

## Asincronismo

**setTimeOut** para ejecutar algo luego de transcurrido determinado tiempo.

**.fetch** en JavaScript es **Asincrónica** igual que **async-await**.

**Try-catch** y **.then** nos ayudan con la asincronía

---

[jsbin](https://jsbin.com/?html,output) para ver el tema del asincronismo

---

## API

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

## Hook useEffect

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
