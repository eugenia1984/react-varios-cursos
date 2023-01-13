# React Design Patterns - 03 - Containers Components

---

## :star:  ¿Qué son los Container Components ?

Son componentes de React que se encargan de **cargar** y **manejar** la **data** para sus **componentes hijos**.

Imaginemos que tenemos un componente contenedor con hilds adentro:

```
<ContainerComponent>
  <Child1 />
  <Child2 />
  <Child3 />
</ContainerComponent>
```

Normalmente lo que harías, sería:
```
const Child1 = () => {
  // load data ...
  return (
    // display data
  )
}
```

En **load data ...** tendria el **useState** y **useEffect** hook, y utilizaría **axios** o **fetch** para obtener la data dle servidor.

El problema con esto es que muchas veces necesitamos que los componentes hijos compartan la lógica y la forma que lo hace el contenedor es dividiendo esa información :

```
const Container = () => {
  // load the data
  
  return (
    // pass data to children
  );
}

const Child1 = ( { data}) => {
  return (
    // display the data
  )
}
```


-> Como los componentes no deben saber de donde viene la data (solo la reciben y la usan).


---

## :star: Server instructions

Partiendo desde **App.js**:

```JSX
import React from "react";

function App() {
  return <h1>Your code goes here</h1>;
}

export default App;
```

Vamos a armar algo reutilizable.

También tenfo **UserInfo.js**, que toma los datos del usuario y los muestra, para los hobbies hace un **.map()** para ir cargando una **unordered list**(lista desordenada) y mostrar cada uno como **list item**(elemento de la lista) de la misma. Todos estos datos del **user** los recibe como parametro de la función en un **onject** que luego es **Desestructurado** para no estar repitiendo porps.name, props.age, etc, asi directamente nombro solo la propiedad. Esta **prop** la va a estar pasando el ^**componente padre**.

```JSX
import React from "react";

export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user;
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};
```



También tengo **ProductInfo** que me renderiza la información de los productos, también recibe por parametro al objet **Product** que tiene como cada key una característica que se renderiza(se va a desestructurar):

```JSX
import React from "react";

export const ProductInfo = ({ product }) => {
  const {name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Avarage Rating: {rating}</p>
    </>
  );
}

```

En vez de ahora utilizar la información desde **people.js** tengo el array de object de personas y **products.js** el array de objetos de productos, voy a tomar los datos ahora desde [**Server.js**](https://github.com/eugenia1984/react-varios-cursos/blob/main/06_react_design_patterns/02-02/Server.js), para **Cargar la data desde el servidor**. Este archivo va a estar en el **root** del proyecto, por **fuera de src**.

Y para correr el server: ```node server.js```, simplemente ejecutamos ```server``` y a continuación el nombre del archivo, y asi estará nuestro servidor ya corriendo en el puerto 8080(por como lo configuramos).

Y por consola se va a leer el conole.log ```Server is listening on port 8080```

:computer: -> [todo el curso esta aca en **02-02**](https://github.com/eugenia1984/react-varios-cursos/tree/main/06_react_design_patterns/02-02)

---

## :star: CurrentUserLoader component

Para que el **Front End** se comunique con el **Back End**, en el archivo **package.json** hay que agregar:

```
{
  "name": "react-design-patterns
",
"version": "0.1.0",
"proxy": "https://localhost:8080/",
"dependencies": {
  }
}
```

**"proxy": "https://localhost:8080/"**

Vamos a crear un **Componente Contenedor**(llamado **CurrentUserLoader.js**) que se va a encargar de **cargar la data del user** y la va a psar al  componente **UserInfo**.

**CurrentUserLoader.js** va a recibir como **prop** a **children**. 

Vamos a necesitar usar los **hooks**: **useState** y **useEffect**.

-> Para en el **useEffect** traer la información desde el **server** voy a utilizar **AXIOS**, por lo que lo instalo por consola: ```npm install axios```

**CurrentUserLoader.js**:
```JSX
"react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  // load the data from the server
  useEffect(() => {
    // anonymous asynct function
    (async () => {
      // store the data od the current user
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, []);
};
```

Ahora falta pasar el estado actual hacia los childrens.

Modifico **App.js**:
```JSX
import React from "react";
import {CurrentUserLoader} from "./CurrentUserLoader";
import {UserInfo} from "./UserInfo";

function App() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default App;
```

Al tener:
```
<CurrentUserLoader>
  <UserInfo />
</CurrentUserLoader>
```
Aunque no vea **props**  el **CurrentUserLoader** le va a pasar al **UserInfo** la data, solo por sel **children**, y ¿ cómo hacemos esto? 

-> Volviendo al **useEffect** del **CurrentUserLoader**

```JSX
// load the data from the server
  useEffect(() => {
    // anonymous asynct function
    (async () => {
      // store the data od the current user
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, []);

  return (
    <>
      {React.children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // we pass the user state
          return React.cloneElement(child, { user });
        }

        // if it´s not valid
        return child;
      })}
    </>
  );
  ```

Y en **UserInfo** tenía que por default se cargaba inicialmente null, entonces agrego un ternario en el return:
```JSX
import React from "react";

export const UserInfo = ({ user }) => {
  const { name, age, hairColor, hobbies } = user || {};
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ): <p>Loading...</p>
};
```

Y además agrego un default value (objeto vacio):
```JSX
const { name, age, hairColor, hobbies } = user || {};
```

:computer: -> [En **02-03** está todo el código completo](https://github.com/eugenia1984/react-varios-cursos/tree/main/06_react_design_patterns/02-03)

---

## :star: UserLoader component

Todavía hay cosas por mejorar en el CurrentUserLoader...

... está en un modo bastante restrictivo, carga un solo usuario y lo pasa a los children, y ese user se carga desde el server.

Vamos a modificarlo para que en vez de cargar a **currentUser**, sea capaz de cargar a cualquier usuario que quiera por su **id**.

En vez de modificar a **CurrentUserLoader** se crea un nuevo componente ```<UserLoader /> ```

Se van a traer la data del server desde **`/users/${userId}`** asi se puede filtrar por **id**.

Va a estar recibiendo como **prop** a **userId** que lo voy a usar como el id en la URL param y ademas va a estar en el dependency array, asi cuando cambie el id va a cambiar el usuario a mostrar.

UserLoader.js:
```JSX
import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  // load the data from the server
  useEffect(() => {
    // anonymous asynct function
    (async () => {
      // store the data od the current user
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);

  return (
    <>
      {React.children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // we pass the user state
          return React.cloneElement(child, { user });
        }

        // if it´s not valid
        return child;
      })}
    </>
  );
};
```

Lo que hay que hacer ahora es agregar **id** a los **users**(el array de objectos users) y a **currentUser** en el **server.js**.

Lo mismo voy a hacer con el array de objetos productos (**products**).

Y ahora vamos a utilizar a **UserLoader** dentro de **App.js**

```JSX
import React from "react";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
  );
}

export default App;
```

Hay que reiniciar el servidor y se va a ver el user con id **234**.

Si quiero mostrar más de un user, acorde la id:

```JSX
import React from "react";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
```


También puedo hacer que el id se vargue dinámicamente, mapeando un array de ids, asi tengo un solo ```<UserLoader>``` y no tres.

```JSX
import React from "react";

import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

const userIds = ["123", "234", "345"];

function App() {
  return (
    <UserLoader userId="123">
      {userId.map((user) => (
        <UserInfo userId={user} />
      ))}
      <UserInfo />
    </UserLoader>
  );
}

export default App;
```

:computer: -> [En **02-04** está todo le código](https://github.com/eugenia1984/react-varios-cursos/tree/main/06_react_design_patterns/02-04)

---

## :star: ResourceLoader component

Ahora en vez de tener un componente contenedor que cargue un tipo específico de recurso (el **user**, tendria que tener otro para que cargue a **products**), vamos a tener una genérico, para poder cargar cualquier recurso, para lo que vamos a crear un nuevo componente llamado ```<ResourceLoader />```

- En vez de tener **useId** vamos a tener dos props:

... una será la **URL**(**resourceURL**), de donde obtendremos la data dle servidor.

...la otra será  **resourceName**, algo similar a lo visto anteriormente en el curso cuando se crea el listado de distintos componentes.

- Hay que cambiar el nombre del estado de **user** para que sea más genérico, se va a lalmar **state**.

- En vez de tener la URL harcodeada en el get al axios:
```JSX
useEffect(() => {
  (async () => {
    const response = await axios.get(resourceURL);
    setState(response.data);
  })();
}, [resourceURL]);
```

- Modificamos dentro del map en vez de pasar **user** como props, se va a pasar una prop con el nombre que iguale al **resourceName** y el valor actual del **state**:
```JSX
return (
  <>
    {React.children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // we pass the user state
        return React.cloneElement(child, { [resourceName]: state });
      }

      // if it´s not valid
      return child;
    })}
  </>
);
```
  
- En **App.js**:
```JSX
import React from "react";
import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";

const userIds = ["123", "234", "345"];

function App() {
  return (
    <>
      <ResourceLoader resourceURL="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
```

Y si quiero mostrar un user y un product:

```JSX
import React from "react";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";

const userIds = ["123", "234", "345"];

function App() {
  return (
    <>
      <ResourceLoader resourceURL="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceURL="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
```

-> Y va a faltar hacer los cambios en **ProductInfo** para que sea con un renderizado flexible, como hicimos en **UserInfo**.


---

## :star: DataSource component

---

## :star: Loading data from localStorage

---
