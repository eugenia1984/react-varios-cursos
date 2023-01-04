# :book: React Hooks Esencial (LinkedIn Learning)

---

# :star2: Creación de Hooks personalizados

---

## :star: 1 - Sintaxis de un Hook personalizado

React nos permite crear nnuestros propios hooks. Para ello el proyecto debe estar rganizado de la sigueinte forma:

- Con una carpeta de nombre **hooks**, aca guardaremos los hooks personalizados

- Todos los React Hook comienzan con **use...**

:computer: -> [aca esta el ejemplo del codigo](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/hooks_personalizados/useDocumentMousePosition.js)

Para poder usarlo...

... lo **importo** : ```import useDocumentMousePosition from "./hooks/useDocumentMousePosition";````

... lo tengo listo para poder utilizarlo.

---

## :star: 2 - Utilizar Hooks de React dentro de tus propios hooks


Dentro de los Hook personalizados (que me permiten realizar tareas en momentos específicos) me van a permitir utilizar los Hooks de React dentro.

- Los hooks siempre **deben ser llaamdos a un nivel de raiz**

- Los hooks siempre **deben ser llamado dentro de una función de React**.

---

## :star:  3 - Detectar eventos dentro de tu hook personalizado

En el  **useEffect** escucho la posicion dle mouse:

```JSX
 useEffect( () => {
  document.addEventListener("mouseover", checkMousePosition);
}, [])
```
  
Invocando a:
  
```JSX
const checkMousePosition = (event) => {
  setIsMouseOnRange(event?.pageY < 150);
}
```

En el momento que dejamos de utilizar el hook tenemos una fuga de memoria porque no removemos el eventListener.
  
---

## :star: 4 - Prevenir fugas de memoria en tus Hooks

Con la propiedad de **cleanup** que tiene el useEffect podemso evitar esa fuga de memoria.

```JSX
useEffect( () => {
  document.addEventListener("mouseover", checkMousePosition);

  return () =>  document.removeEventListener("mouseover", checkMousePosition);
}, [])
```

Asi eliminamos de la memoria el puntero checkMousePosition.

---

## :star: 5 - Integrar tus Hooks personalizados dentro de un componente

Dependiendo de si esta activado o no, voy a tener cierta clase, que cambiara el color.


```JSX
import React from "react";
import useDocumentMousePosition from "./hooks/useDocumentMousePosition";

function App() {
  
  const estaActivado = useDocumentMousePosition();
  
  return (
    <div className="container>
      <div className={`${estaActivado ? "green" : "red"} `}>
        <h1>Detectar posicion del mouse</h1>
      </div>
    </div>
   )
}

export default App;
```

---
