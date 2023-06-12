# :computer: CLASE 22 - 17 MAYO - USECONTEXT

---

## :star: useContext

Nos facilita el traspado de datos, sin tener el **prop drilling**

:book: [documentación](https://react.dev/reference/react/useContext)

:book: [Repositorio de ejemplo de la profesora](https://github.com/GiselaFlores/usecontext)

Es el siguiente codigo:

- **App-js**:

```JSX
import React from "react"
import './App.css'
import User from "./componentes/User"
export const UserContext = React.createContext()

function App() {
  const user = {
    nombre: "Gisela",
    edad: 41,
    sector: "codo a codo",
    isAdmin: "si"
  }

  return (
    <UserContext.Provider value={user}>
         <User />
    </UserContext.Provider>
  )
}

export default App
```

- **User.jsx**:

```JSX
import React, {useContext} from "react"
import {UserContext} from "../App.js"

const User = () => {
    const user = useContext(UserContext)

    return (
        <div>
            <p> Nombre: {user.nombre} </p>
            <p> Edad: {user.edad} </p>
            <p> Sector: {user.sector} </p>
            <p> Adminitrador: {user.isAdmin}</p>
        </div>
    )
}

export default User
```

---
