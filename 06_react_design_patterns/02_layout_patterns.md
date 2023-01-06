# React Design Patterns - 02 - Layout Components

---

## :star: ¿Que son los layout components ?

Principalmente ordenen como se muestran otros componentes en la web.

- Un ejemplo  es el de la pantalla dividida, donde se van a ver varios componentes distribuidos en distintas secciones.

- Otro ejemplo es una lista de items

- Modales

Ejemplo:


Pasamos de esto: 
```JSX
<div style={...}>
  <h1>Component Code...>/h1>
</div>
```

A esto, separando al componente de como va a ser desplegado, para que sea mas reutilizable.
```JSX
<div style={...}>
  {children}
</div>

<>
  <h1>Component Code...>/h1>
</>
```

- Los componentes no deberían saber qué van a renderizar.

---

## :star: Split-screen components

:computer: -> [Ejemplo de codigo en **01-02**]([)](https://github.com/eugenia1984/react-varios-cursos/tree/main/06_react_design_patterns/01-02)

-> Se utiliza **styled- components**

[App.js](https://github.com/eugenia1984/react-varios-cursos/blob/main/06_react_design_patterns/01-02/App.js):

```JSX

import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
    return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>;
}

const RightHandComponent = () => {
    return <p style={{ backgroundColor: 'red' }}>Right!</p>;
}

function App() {
  return (
	<SplitScreen
	   left={LeftHandComponent}
	   right={RightHandComponent} />
   );
}

export default App;
```


[SplitScreen.js](https://github.com/eugenia1984/react-varios-cursos/blob/main/06_react_design_patterns/01-02/SplitScreen.js):

```JSX
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
`;

const Pane = styled.div`
   flex: 1;
`;

export const SplitScreen = ({
   left: Left,
   right: Right,
}) => {
   return (
	<Container>
  	   <Pane>
	      <Left />
	   </Pane>
	   <Pane>
	      <Right />
	   </Pane>
         </Container>
      );
})
```

Y queda asi:

<img width="600" alt="split-screen" src="https://user-images.githubusercontent.com/72580574/211024605-30636ecd-d406-452a-b423-b8b78b52ccae.png">




---

## :star: Split-screen components improvment

Aplicamos algunas modificaciones para hacerlo más **developer fliendly**.

Agregamos más propiedades a **SliptScreen**.

[**Ejemplo de codigo en 01-03**](https://github.com/eugenia1984/react-varios-cursos/tree/main/06_react_design_patterns/01-03)

[App.js](https://github.com/eugenia1984/react-varios-cursos/blob/main/06_react_design_patterns/01-03/App.js)
```JSX
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <p style={{ backgroundColor: "red" }}>{message}!</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Shaun" />
      <RightHandComponent message="Hello" />
    </SplitScreen>
  );
}

export default App;
```

[SplitScreen.js](https://github.com/eugenia1984/react-varios-cursos/blob/main/06_react_design_patterns/01-03/SplitScreen.js)
```JSX
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
```


---

## :star: List and list items

---

## :star: Creando distintas tipos de listas

---

## :star: Componentes modales

---

