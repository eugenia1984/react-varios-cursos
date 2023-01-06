# React Design PAtterns - 03 - Containers Components

---

## :star:  ¿Qué son los Container Components ?

Son componentes de React que se encargan de cargar y manejar la **data** para sus **componentes hijos**.

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

---

## :star: CurrentUserLoader component

---

## :star: UserLoader component

---

## :star: ResourceLoader component

---

## :star: DataSource component

---

## :star: Loading data from localStorage

---
