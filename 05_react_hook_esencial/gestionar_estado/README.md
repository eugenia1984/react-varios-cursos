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

-> Todos los **hooks** comienzan con **use...***

---

## :star: 4 - Invocar hooks directamente desde el render

---

## 5 - Propiedades múltiples en el estado con hooks

---

## 6 - Compatir estado con subcomponentes

---

## 7 - Modificar datos parciales con React Hooks

---

## 8 - Agregar o eliminar valores del estado con React Hooks

----

## 9 - Reglas básicas para gestionar React Hooks

---

