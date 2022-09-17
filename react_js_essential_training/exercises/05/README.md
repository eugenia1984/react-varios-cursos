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

-> Se puede ver el codigo en **App-1.js** en **exercises** / **05**

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

1. Hay que hacer fetch con la data usando una combinacion de useState y useEffect

2. Con React pasamos por medio de props a los componentes hijos y sacamos de la API la información que necesitamos, para que sea renderizada.

```JSX
import './App.css';
import { useState, useEffect} from "react";

function GitHubUser({name, location, avatar}) {
  return(
    <>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt="{name}" height={200}  />
    </>
  )
}

function App() {
  const [ data, setData ] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/eugenia1984`
  ).then( response => response.json())
  .then(setData)
  }, []);
  if(data) 
    return (
      <GitHubUser 
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    )

  return (
    <h1>Data</h1>
  );
}

export default App;
```

-> Se puede ver en **App-2.js** en **exercises** / **05**

---

## :star: 3 - Manejando loading states


Cuando manejamos información que traemos de una API, la información puede estar en más de un estado, entonces veamoslos.

- LOADING: significa que estamos haciendo un fetch a la información pero todavía no regreso. 

- SUCCESS: tenemos alguna información que mostrar.

- ERROR: por si algo anda mal.

Todo esto lo podemos representar con **useState** **hooks**.

-> Vamos a crear otra constante ERROR para menejar si tenemos un estado de error y lo inciializamos su estado en null.

-> Creamos también la constante para el LOADING con false de estado incial.

-> Ahora tenemos que representar todo esto dentro del componente.

-> En nuestro useEffect debemos utilizar estas nuevas variables:

```setLoading(true);```

Y en el fetch agregamos al final:

```.then(() => setLoading(false)); ```

Porque el loading deber ser false, ya que la información la tenemos, no se estaría cargando y la esperamos.


Y al final de todos los then le podemos agregar un catch para el error:

```.catch(setError); ```

Asi de haber un error, lo setea

```JSX
import './App.css';
import { useState, useEffect} from "react";

function GitHubUser({name, location, avatar}) {
  return(
    <>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt="{name}" height={200}  />
    </>
  )
}

function App() {
  const [ data, setData ] = useState(null);
  const [  error, setError ] = useState(null);
  const [  loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
      fetch(`https://api.github.com/users/eugenia1984`
    )
      .then( response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.strintgify(error)}</pre>;
  if(!data) return null;
  
  return (
    <GitHubUser 
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
```

-> Se puede ver en **App-3.js** en **exercises** / **05**

---

## :star: 4 - Fetching data with GraphQL

- También podemos usar React para tomar información desde GraphQL API.

- Trabajamos aca: [https://snowtooth.moonhighway.com/](https://snowtooth.moonhighway.com/)

- GrapghQL es uan forma de crear una API, donde podes especificar que datos queres usando algunos formatos:

-> Usando el playground de GraphQL, por ejemplo hacemos esta query:

```
query {
  allLifts {
    name
  }
}
```

Y nos retorna un JSON:
```JSON
{
  "data": {
    "allLifts": [
      {
        "name": "Astra Express"
      },
      {
        "name": "Jazz Cat"
      },
      {
        "name": "Jolly Roger"
      },
      {
        "name": "Neptune Rope"
      },
      {
        "name": "Panorama"
      },
      {
        "name": "Prickly Peak"
      },
      {
        "name": "Snowtooth Express"
      },
      {
        "name": "Summit"
      },
      {
        "name": "Wally's"
      },
      {
        "name": "Western States"
      },
      {
        "name": "Whirlybird"
      }
    ]
  }
}
```

Y se puede usar para enviar resuest como se hace con REST.


Entonces vamos a cambiar nuestro componente GitHubUser por Lift y hacemos los cambios.

```JSX
function Lift({name, elevationGain, status}) {
  return(
    <>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </>
  )
}
```

Asi vamos a crear uno de los lift components
por cada lift de la lista del JSON.

-> Entonces ahora hacemos el fetch a este endpoint:

https://snowtooth.moonhighway.com/

```JSX
useEffect(() => {
    setLoading(true);
      fetch(`https://snowtooth.moonhighway.com/`
    )
      .then( response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  
  if(loading) return <h1>Loading...</h1>;
  if(error) return <pre>{JSON.strintgify(error)}</pre>;
  if(!data) return null;
```

-> La lógica del fetch puede ser la misma, pero hay que modificar el return.
Vamos a mapear con el map cada uno d elos lifts y los vamos a devolver como un compoennte Lift, y este va a necesitar algo de información.


```JSX
 return (
  <div>
    {data.allLifts.map((lift) => (
      <Lift 
        name={lift.name}
        elevationGain={lift.elevationGain}
        status={lift.status}
      />
    ))}
  </div>
);
```

-> Pero en este punto todavía esta en LOADING, todavía no terminamos.

Necesitamos la RESPUESTA del FETCH REQ.

Tenemos que mandar el BODY de la QUERY. Por ahora solo decimos traeme toda la información, peor necesito pasar la QUERY que se va a ver asi:

```
query {
  allLifts {
    name
    elevationGain
    status
  }
}
```

Y me va a devolver
```JSON
{
  "data": {
    "allLifts": [
      {
        "name": "Astra Express",
        "elevationGain": 899,
        "status": "OPEN"
      },
      {
        "name": "Jazz Cat",
        "elevationGain": 1230,
        "status": "OPEN"
      },
      {
        "name": "Jolly Roger",
        "elevationGain": 1350,
        "status": "OPEN"
      },
      {
        "name": "Neptune Rope",
        "elevationGain": 50,
        "status": "OPEN"
      },
      {
        "name": "Panorama",
        "elevationGain": 2800,
        "status": "HOLD"
      },
      {
        "name": "Prickly Peak",
        "elevationGain": 1700,
        "status": "OPEN"
      },
      {
        "name": "Snowtooth Express",
        "elevationGain": 1480,
        "status": "OPEN"
      },
      {
        "name": "Summit",
        "elevationGain": 1480,
        "status": "CLOSED"
      },
      {
        "name": "Wally's",
        "elevationGain": 820,
        "status": "HOLD"
      },
      {
        "name": "Western States",
        "elevationGain": 1330,
        "status": "CLOSED"
      },
      {
        "name": "Whirlybird",
        "elevationGain": 1003,
        "status": "HOLD"
      }
    ]
  }
}
```

-> Entonces vamos a copiar la query, luego de los importa la guardamos en una constante query, y uso los backticks (las comillas francesas)

```JSX
const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;
```

Y después vamos a especificar algunas opciones, como el metodo, el header y el body:

```JSX
const opt = {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body:JSON.strintgify({query})
};
```

-> Entonces vamos a estar mandando un Sting uando hagamso el request.

-> Pero todavia vemos el loading y un error de que no se pueden leer propiedades de un map indefinido.

-> Sin consologueamos a data vemos que esta viniendo, pero debajo de otra KEY llamada data

```JSX
import "./App.css";
import { useState, useEffect } from "react";

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`,
      opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;
```

-> Se puede ver en **App-4.js** en **exercises** / **05**

---

## :star: 5 - Trabajando con render props

Ahora vamos a ver como usar funciones para mostrar la informacion en el tiempo correcto.

Vamos a crear data en la constante tahoe_peaks que va a ser un array de objects, y cada object es el nombre de una elevacion(pico de montaña) y su altura.


```JSX
const tahoe_peaks = [ 
  { name: "Freel", elevation: 10891},
  { name: "Monument", elevation: 10067},
  { name: "Pyramid", elevation: 9983},
  { name: "Tallac, elevation: 9735"}
];
```

Ahora creamos el componente funcional List que va a tener 3 parametros: data, renderItem, renderEmpty. Nos va a ayudar a renderizar cada item del array y renderEMpty es lo que se va a ver si no hay nada en el array. Esto lo hago con un ternario. Y si renderizo recorro el array con un map. A cada elemnto de la lista le damos una key que va a ser el nombre dle item.


```JSX
function List({data, renderItem, renderEmpty}) {
  return !data.length ? (
    renderEmpty 
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

Ahora debemos ajusta a App para que nos renderiza esa información del array.

```JSX
function App() {
  return (
    <List 
      data={tahoe_peaks} 
      renderEmpty={<p>This is empty</p>} 
      renderItem={item => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}
```


Y nos queda:

```JSX
import "./App.css";

const tahoe_peaks = [ 
  { name: "Freel", elevation: 10891},
  { name: "Monument", elevation: 10067},
  { name: "Pyramid", elevation: 9983},
  { name: "Tallac, elevation: 9735"}
];

function List({data, renderItem, renderEmpty}) {
  return !data.length ? (
    renderEmpty 
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
 
function App() {
  return (
    <List 
      data={tahoe_peaks} 
      renderEmpty={<p>This is empty</p>} 
      renderItem={item => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;
```

-> Se puede ver en **App-5.js** en **exercises** / **05**

---