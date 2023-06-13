# :computer: CLASE 24 - 29 MAYO

---

## Empezo con lo del TP final

Que actualicemos como tenemos los grupos


## Ejemplo de una comisión anterior

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/6454b744-1e5d-4a48-ac71-7c45dff12d33)

- Ya registrado:

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/8d31f68d-a6fc-4c33-b0e3-cd0018e1d55e)

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/527cb6fc-eada-4006-aee7-2bc7bdeba3c7)

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/ccb2fa0e-bc8d-4e9e-83e3-4e7cd89f0983)

- Logueado puedo tneer favoritos:

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/52bb36b5-cbcd-42c9-b172-711b0c0e2f94)


---

## Proyecto de la clase grabada de otra comisión con el fetch(cuando vimos asincronismo)

- Ahora lo hacemos con **Redux**

[Link al proyecto](https://github.com/GiselaFlores/Redux-users)

- **src/App.js**

```JavaScript
import Navbar from "./components/Navbar"
import UserList from "./components/UserList"
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserList />
    </Provider>
  )
}

export default App
```

- **src/store/index.js**:

```JavaScript
import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users'

export default configureStore({
  reducer: {
    users
  }
})
```

- **src/store/slices/users**:

```JavaScript
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  },
})

export const { setUserList } = userSlice.actions

export default userSlice.reducer

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("https://reqres.in/api/users?per_page=12")
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error))
}
```

- **src/components/Navbar.js**:

```JavaScript
import React from "react"

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">React Redux App</a>
      </div>
    </nav>
  )
};

export default Navbar
```

- **src/components/UserList.js**:

```JavaScript
import React, { useEffect } from 'react'
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'

const UserList = () => {
  const { list: users } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch])

  return (
    <div className="container mt-4">
      <div className="row">
        {
          users.map((user, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card">
                <img src={user.avatar} alt="avatar" />
                <div className="card-body">
                  <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                  <p className="card-text">{user.email}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default UserList
```

---

## Queda asi

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/e853d476-7a49-441e-92ae-df5ec3392228)


---
