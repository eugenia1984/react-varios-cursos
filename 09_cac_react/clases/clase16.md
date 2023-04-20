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

En general va de la mano dle **useState** porque lo que quiero es justamente modificar el estado.

---
