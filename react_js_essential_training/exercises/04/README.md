# :star2: Manejando formularios en React :star2:

---

## :star: 1 - Trabajando con componentes sin controlar

Vamos a utilizar otro hook, el **useRef** para buscar un elemento en particular y chequear el valor que tiene.

Entonces vamos a crear el primer formulario con dos inputs, uno de ellos es de tipo color. También voy a tener un colo r de agregar.

Y tambien vamosa  crear la funcion submit, para prevenir el comportamiento normal dle formulario (prevenir que la pagina se refresque). Y la voy a utilizar en la etqieuta del form con el evento onSubmit. Y asi cada vez que se aprete submit en el form se va a estar invocando esta función.

Lo que quiero es podertomar el dato del input y tomar el nombre del color como el color en si, entonces vamosa utilizar otra nueva constante txtTitle y otra más hexColor, para guardar esa información.

Y si mandamos por consola la variable/constante txtTitle vemos que es un objeto con al key current y por ahora el valor undefined, va a ser el valor del input.

Vamos a linkear esta info con el inpu por medio de ref y la variable txtTitle. Y en el input del color agrego el ref con la constante hexColor.

Dentro del submit creo las constantes para guardar ese color y su valor.

Y por un alert mando esos valores asi los veo.

Y luego los seteo en un String vacio para que si vuelvo a elegir me lo permita y no quede en lo que elegi antes.

```JSX
import './App.css';
import { useRef } from "react";

function App() {
  const txtTitle = useRef();
  const hexColor =useRef();

  console.log(txtTitle);

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input  
        ref={txtTitle}
        type="text"
        placeholder="color title..."
      />
      <input  
        ref={hexColor}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
```

Entconces ahora si en el primer input pongo red y elijo en los colores el red, le doy click a ADD y veo en el alert red y el hexagesimal correspondiente.

-> Pensamos a useREf como un hook que va a llegar al valor  de un elemento UI.

El modo que lo hacemos ahora es creando un componente descontrolado.

Con useRef no se va a renderizar, por mas que haya un cambio.

Manejamos fuera del estado.

-> Se puede ver el codigo en **App-1.js**

---

## :star: 2 - Creando elementos controlados de formulario

También podemos crear formularios usando useState.

Vamos a crear dos variables para manejar los estados: title y color. Y su estado inicial va a ser un string vacio para el title y el color negro para el color.

Y en los input vamos a settear los valores con lo que tengan las constantes recien creadas.


Y como queremos que se ejecute un evento onChange en el input, tambien se lo agregamos y nos va a setear el valor con lo que agarre del evento. De este modo agarramos lo que vayan poniendo en el input.

Entonces ahora cada evento maneja el estado, el que esta asociado a la variable.

DEjamos el alert y ahora le seteamos para limpiarlo con setTitle String vacio, lo mismo para el color, pero a este lo volvemos al estado incial al color negro.

```JSX
import './App.css';
import { useState} from "react";

function App() {
  const [ title, setTitle] = useState("");
  const [ color, setColor ] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={submit}>
      <input 
        value= {title}
        onChange={ event => 
          setTitle(event.target.value)
        }
        type="text"
        placeholder="color title..."
      />
      <input 
        value={color} 
        type="color"
        onChange={event => 
          setColor(event.target.value)
        }
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
```

-> Se puede ver el codigo en **App-2.js**

---

## :star: 3 - Construyendo un Custom Hook

Lo mejor de trabajar ocn hooks es que podemos crear los nuestros.

Sguimos con el formulario, con los dso inputs distintos, en el title quiero agarrar la info y luego setearlo, limpiarlo.

Es algo repetitivo.

Un **customHook** es una función que siempr eempieza con la palabra **use**.

Vamos a crear la funcion useInput que va a recibir por parametro el initialValue  y dentro va a tener otro constante (hook) value y vamos a usar la funcion useState para setearle el valor inicial.

Y retornamos un array con objeto y una funcion para setear el valor al inicial.

Y dentro del form vamosa  utilizar useInput en vez de useState.

Y en los input en vez de seter el valor usamos el spread operator, y asi nos desasemos del valor y dle evento onChange

```JSX
import './App.css';
import { useState} from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [ 
    {
      value, 
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ]
}

function App() {
  const [ titleProps, resetTitle] = useInput("");
  const [ colorProps, resetColor ] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input 
        {...titleProps} 
        type="text"
        placeholder="color title..."
      />
      <input 
        {...colorProps} 
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
```

---

## :star: 4 - Eligiendo una libreria

- [https://formik.org/](https://formik.org/) maneja los submit de los formularios, le podemos dar valores iniciales, es el formulario visto holisticamente como una coleccion de distintos campos.

- [https://react-hook-form.com/](https://react-hook-form.com/) nos ayuda a crear formularios con validaciones y hay muchas cosas interesantes en la API prra TypeScript. Se pueden crear formularios escalables.

- [https://usehooks.com/](https://usehooks.com/) no es especifico de los Forms pero hay muchos hooks, se pueden ver como recetas para crear los tuyo.


---