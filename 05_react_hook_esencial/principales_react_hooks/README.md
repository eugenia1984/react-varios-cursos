# :book: React Hooks Esencial (LinkedIn Learning)

---

## :star2: Utilizando los principales React Hooks

---

## :star: 1 - ¿ Qué es el contexto ?

En React el **contexto**(**context**) nos permite compartir información entre componentes.

Teniendo un proyecto ocn la sigueinte estructura:
```
> src
  > components
    MiComponente.jsx
    Contenedor.jsx
App.jsx
```

Tengo los archivos: [MiComponente.jsx](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/principales_react_hooks/MiComponente.jsx) y [Contenedor.jsx](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/principales_react_hooks/Contenedor.jsx)

Tengo la **App**, dentro un componente llamado ```<Contenedor />``` y dentro del mismo otro componente llamado ```<MiComponente />```.

En el **Contenedor** se crea el contexto y se comparte información hacia los demas componentes.

```JSX
<MiContexto.Provider>
  <MiComponente />
</MiContexto.Provider>
```


Y ahora tengo que hacer que **MiComponente** tenga la capacidad de leer el contexto, utilizanod el **hook useContext**
```JSX
import React, { useContext } from "react";
import { MiContexto } from "./Contenedor";

export default function MiComponente() {
  const valor = useContext(MiContexto)
  
  return (
    <div>
      Valor: {valor}
    </div>
  )
}
```

Y a el **Contenedor** agrego: 
```JSX
 <MiContexto.Provider value={10}>
 ```
 
 Asi le paso el valor.
 
---

## :star: 2 - Prevenir el propr drilling con React Hooks

El contexto nos ayuda a reducir el **Drop drilling** de React.


---

## :star:  3 - Utilizar useReducer

---

## :star: 4 - Utilizar useReducer en conjunto con context

---

## :star: 5 - Utilizar useMemo y callback

---

## :star: 6 - Utilizar useRef

---
