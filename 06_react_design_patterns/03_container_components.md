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

---

## :star: UserLoader component

---

## :star: ResourceLoader component

---

## :star: DataSource component

---

## :star: Loading data from localStorage

---
