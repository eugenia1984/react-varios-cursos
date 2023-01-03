# :book: React Hooks Esential (LinkedIn Learning)

---

## :star2: React Hooks para gestionar el estado

---

## :star: 1 - ¿ Qué es el estado en React?

El estado en React es un **observable**, se puede interactuar con el, modificarlo, pero no se puede hacer directamente.

Si es un **componente de clase** dentro del **constructor** voy a llamar a **super()** y voy a tener **this.state**(aca tengo el estado). En este caso se necesita un **binding** algo que tome el alcance de la clase y lo una al metodo que va a poder llamar al estado y con **setState** vamos a poder redefinir el estado.



---

## :star: 2 - Refactorizar un componente de clase a uno funcional


Los componentes funcionales no necesitan el contructor, tampoco el binding.

No necesitamos el this, porque ya estamos dentro de una función.

Solo necesito una función que ejecute el setState, para poder **administrar el estado dentro de un componente funcional**.

---

## :star: 3 - Como usar el useState

Nos ayudamos con el **hook** llamado **useState**, se deconstruye de este modo:

```JSX
const [ value, setValue ] = useState();
```

El **value** va a ser la constante que voy a ir guardando el valor con el estado.

El **setValue** va a set el setter que actualice mi estado, entre los () declaro los nuevos valores del estado.

El **useState** va a dar mi valor inicial del estado, puede ser **null**, un valor booleano (**true** / **false**), una string vacía **""**, un number, un objeto, etc.

Siempre antes recoardar que hay que importar el useState: 
```JSX
import { useState } from "react";
```

-> Todos los **hooks** comienzan con **use...**

---

## :star: 4 - Invocar hooks directamente desde el render

En vez de crear una función que se va a activar or algún evento, como por ejemplo el onClick, directamente dentro dle onClick creo una función anónima y ahi dentro ya tendré el setValue() para actualizar el estado. De este modo se hace todo directo en el return, sin tener que invocar a otra función definida anteriormente.

---

## 5 - Propiedades múltiples en el estado con hooks

Puedo tener más de una propiedad, con su setter y su useState(). De este modo puedo tener múltiples propiedades, así por ejemplo puedo tener un loading, isLoading cuando voy a hacer un llamado a la API, y de este modo con renderizado condicional si isLoading es true, puedo mostrar un spinner y una vez que isLoading sea false muestrolos datos traidos de la API, en paralelo voy a tener otra propiedad del estado que me guardará la información traida de la API para renderizar en la UI.

---

## 6 - Compatir estado con subcomponentes

Se pueden pasar a los componentes hijos mediante las **props** del componente padre que tiene al invocar al componente hijo.

Si dentro del componente padre hacemos una modificación del estado, se verá reflejado en los componentes hijos que renderizan estos estados.

---

## 7 - Modificar datos parciales con React Hooks

Una vez definido el estado necesitaremos modificarlo. Dentro del estado podemos tener distintos tipos de datos, como por ejemplo: string, number, objeto, array, etc.

- Para **actualizar estados de objetos** se puede utilizar el **spread operator**, asi llamamos a todas las propiedades del objeto, y solo actualizamos el que necesitamos. Ejemplo en codigo:


```JSX
const [ direccion, setDireccion ] = useState({
  pais: "USA",
  estado: "Arizona",
  ciudad: "Springfield
})

const cambio = () => {
  setDireccion({
    ...direccion,
    estado: "Ohio"
  })
}
```

De este modo solo actualizo el estado, el pais y la ciudad mantienen su valor.


- Si tenemos un **array de objetos**, se debe iterar sobre el array. Ejemplo en codigo:

```JSX
const [ opciones, setOpciones ] = useState([
  {
    name: "Opcion 1",
    value: 1
  },
  {
    name: "Opcion 2",
    value: 2
  },
  {
    name: "Opcion 3",
    value: 3
  }
])


const cambio = () => {
  const nuevoItem = {
    name: "Nuevo item",
    value: 1
  }
  
  const actualizado = opciones.map( (item) => item.value === 1 ? nuevoItem: item)
}
```

Si encuentra un item con valor 1 lo cambia, sino muestra lo que esta.

---

## 8 - Agregar o eliminar valores del estado con React Hooks

Volviendo al array de objetos, para poder **agregar valores**, voy nuevamente a utilizar el **spread operator** para tener los mismos elementos del array que tenia y le sumo uno nuevo.

```JSX
const cambio = () => {
  setOpciones( [...opciones, { 
    name: `Opcion ${opciones.length + 1}`, 
    value: opciones.length + 1
   } 
  ] )
}
```

Y para **eliminar un elemento**, voy a filtrar los items y el que tenga el valor de 1 va a ser eliminado.

```JSX
const cambio = () => {
  const actualizado = opciones.filter( item => item.value !== 1)
  setOpciones(actualizado)
}
```


----

## 9 - Reglas básicas para gestionar React Hooks


Hacemos lladas al estado ocn **useState**.

Tenemos reglas generales apra trabajar con hooks:

1. Los hooks comienzan con el nombre **use**

2. Los hooks los podemos utilizar unicamente dentro de funciones, dentro de una función de React, dentro de un componente funcional.

3. Hay que utilizar los hooks dentro de la raiz del componente, o sea al inicio, no dentro de una función, asi puede ser invocado en todo momento. Es como cuando se declara la variable al principio.

4. Se puede interactuar con los elementos a través del **useState**, no se puede modificar el valor directamente, se hace mediante el setter y el getter. Ya que siempre se rige con una única fuente de verdad.



---

