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
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
            };
        case 'DECREMENTO':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'INCREMENTO_ASYNC_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'INCREMENTO_ASYNC_SUCCESS':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default counterReducer;
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
      dispatch({ type: 'INCREMENTO_ASYNC_REQUEST' });
      // Simulamos una tarea asíncrona
      setTimeout(() => {
        dispatch({ type: 'INCREMENTO' });
        dispatch({ type: 'INCREMENTO_ASYNC_SUCCESS' });
      }, 1000);
    };
  };
```

