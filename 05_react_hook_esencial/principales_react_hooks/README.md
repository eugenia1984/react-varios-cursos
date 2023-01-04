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

Teniedo:

```JSX
import React from "react";
import MiComponente from "./MiComponente";

export default function Contenedor() {
  const data = {
    nombrecomun: "sardina común",
    reino: "Animal",
    familia: "clupeidae",
    genero: "Sardina",
    especie: "Sardina pilchardus
  }
  
  return (
    <div className="container">
   
        <MiComponente data={data}/>
    
    </div>
  )
}
```

MiCoponente.jsx:
```JSX
import React, { useContext} from "react";
import { MiContexto } from "./Contenedor",
import SubComponente from "./SubComponente";

export default function MiComponente(props) {
  const animal = props.animal;
  
  return (
    <>
      <SubComponente data={data} />
    </>
  )
}
```


Si tengo que ir pasando de componente padre a hijos y mas inferiores, se vuelve un inconveneinte, para eso tengo el **contexto**, no voy a tener que ir pasando todo entre propr, directamente al poner el Provider van a estar disponible para los hijos, nietos, bisnietos, etc, sin tneer que pasarlos como props, se manda como **value** y va a estar disponible para todos los subcomponentes.

Entonces tendría:

MiComponente:
```JSX
export default function MiComponente(props) {
  const animal = useContext(MiContexto);
  
  return (
    <div className="col-12 col-md-4 mt-5>
      <div className="card border rounded overflow-hidden card_icon p-2" >
        <h3 className="card-title border-bottom"> {animal.nombreComun} </h3>
        <SubComponente  />
       </div>
    </div>
  )
}
```

SubComponente:
```JSX
import React, { useContext } from "react";
import { MiContexto } from "./Contenedor";

export default function SubComponente(props) {
  const animal = useContext(MiContexto);
  
  return (
    <p className="card-text">
      <strong>Reino:</strong> {animal.reino} <br />
      <strong>Familia:</strong> {animal.familia} <br />
      <strong>Género:</strong> {animal.genero} <br />
      <strong>Especie:</strong> {animal.especie} <br />
    </p>
  )
}
```

---

## :star:  3 - Utilizar useReducer

Un hook especial que nos permite trabajr el estado de la aplicacion mientras utilizamos un patron similar al de REdux.


:computer: -> [se puede ver el codigo aca en ContenedorConUseReducer.jsx](https://github.com/eugenia1984/react-varios-cursos/blob/main/05_react_hook_esencial/principales_react_hooks/ContenedorConUseReducer.jsx)

---

## :star: 4 - Utilizar useReducer en conjunto con context

---

## :star: 5 - Utilizar useMemo y callback

---

## :star: 6 - Utilizar useRef

---
