# :star2: React Asincronismo :star2:

---

## :star: 1 - Mostrando información con Hooks


Algo importante que se puede hacer con React es **mostrar información que venga de una API externa**.


Vamos a usar la API de GitHub [https://api.github.com/users/eugenia1984](https://api.github.com/users/eugenia1984) voy a usar con mi usuario y con la combinacion de **useState** y **useEffect** vamos a manejar estos datos.

Con useState manejamos la información y con useEffect hacemos la llamada a esa información externa.

Entonces ahora en nuestra app me creo la constante data, para guardar los datos, va a tener su funcion setData para actualizarla y con el useState le seteo el valor inicial en null.

Y ahora usamos useEffect y aca viene lo emocionante porque
 vamos a utilizar una llamada fetch a https://api.github.com/users/eugenia1984. Y una vez que tenemos esa informacion la mandamos como respuesta que viene en un string y la pasamos a un JSON. Y finalmente usamos otro then para setData (que es lo mismo que decir toma esta información  y llama a setData con data como parametro), es decir:

```data => setData(data)```

Pero como el mismo valor es el que esta en el parametro, se usa el shorthand: 
``` setData```


Y como segundo parametro le pasamos el array vacio para que solo hacemos una vez el pedido a la informacion al renderizarse la aplicacion, porque si hacemos muchos request a la API se bloquea.

Entonces si ya enemso esa información, y esa información tiene un valor devolvemos una etiqueta pre que va a formatear el JSON con el metodo stringify y voy a recibir 3 parametros data, null, 2 y van a ayudar a formatear para poder leerlo en el navegador.

-> Se puede ver el codigo en **App-1.js**

```JSX
import './App.css';
import { useState, useEffect} from "react";

function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/eugenia1984`
  ).then( response => response.json())
  .then(setData)
  }, []);
  if(data) return <pre>{JSON.stringify(data, null, 2)}</pre>

  return (
    <h1>Data</h1>
  );
}

export default App;
```

---

## :star: 2 - Mostrando información con API

Ahora vamos a querer separar en componentes, porque nos quedo mucho codigo junto.

Me creo la funcion GitHubUser que va a tener la información y la mostrare luego.

Y en la funcion App vamos a retornar nuestro componente GitHubUser y la vamos a pasar algunas props como el nombre


---

## :star: 3 - Manejando loading states

---

## :star: 4 - Fetching data with GraphQL

---

## :star: 5 - Trabajando con render props

---