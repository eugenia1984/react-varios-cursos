# :star: CLASE 20 - 8 de Mayo

- Nos dividimos en 3 grupos para hacer un **fetch** a la **API** de **Pokemons**: [https://pokeapi.co/](https://pokeapi.co/) para mostrar todas las cards de los pokemones con la mínima información, y al ver más ver el detalle del pokemon.
 
---

# :star: CLASE 21 - 10 Mayo

- Seguimos en grupo avanzando con el proyecto pokemones.

---

## :star: AXIOS

:computer: -> La documentación: [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)

## Instalación:

- Con npm: `$ npm install axios`

- Ejemplo de **get**:

1. Lo importo para usarlo: 
```JSX
const axios = require('axios').default;
```

2. Ejempplo:

```JSX
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

---
