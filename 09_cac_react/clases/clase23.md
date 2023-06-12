## :computer: Clase 23 - 22 de Mayo: Redux y Redux thunk

---

## Instalaciones:

```
npm i redux
npm i react-redux
npm i redux-thunk
```

---

## :computer: Repo de la profe

[link al repo](https://github.com/GiselaFlores/Redux-contador)

- App.jsx:

```JSX
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

- src/reducers/countReducer.js

```Javascript

const initialState = {
    count: 0,
    loading: false,
};

const counterReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'INCREMENTO':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'DECREMENTO':
            return {
                ...state,
                count: state.count - 1,
            }
        case 'INCREMENTO_ASYNC_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'INCREMENTO_ASYNC_SUCCESS':
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
};

export default counterReducer
```

- src/actions/counterActions.js

```Javascript
export const incremento = () => ({
    type: 'INCREMENTO',
  });
  
  export const decremento = () => ({
    type: 'DECREMENTO',
  });
  
  export const incrementoAsync = () => {
    return (dispatch) => {
      dispatch({ type: 'INCREMENTO_ASYNC_REQUEST' })
      // Simulamos una tarea asíncrona
      setTimeout(() => {
        dispatch({ type: 'INCREMENTO' })
        dispatch({ type: 'INCREMENTO_ASYNC_SUCCESS' })
      }, 1000)
    }
  }
```

---


![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/b565be02-2095-40cf-93ab-1b95740b220a)

Ejemplo de un contador, tiene las sigueintes partes:

- **view** -> la parte visible del sitio, la **UI**(USER INTERFACE)

-> Cuando el usuario hace un **click** va a **incrementar** y va a ejecutar un **ACTION** que DISPARA(**DISPATCH**) un **REDUCER** y se va a ACTUALIZAR(**UPDATE**) el **STORE**

**dispatch** -> todas las funciones que llevan información, las encargadas de enviar datos entre la UI y las ACTIONS

**type** -> el tipo de dato que se va a pasar, que va a estar trabajando

**update** -> pasa de la función del estado actual a la nueva actualizada.

**STORE** -> tiene todos los estados compartidos de la aplicación, sin tener que hacer drop drilling de props.

---

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/cb623c94-8464-4c1d-aa3f-d5be7b4484ed)


---

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/195825bf-3064-4440-bdfa-3bf99598a71c)


---
