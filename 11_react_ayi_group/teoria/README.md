# :computer: Teoria

## :book: Temas:

 - 1 - Transpiling y JSX
 
---

## :computer: 1 - Transpiling y JSX

Es el proceso de convertir codigo escrito en un lenguaje, a su representación en otro lenguaje. Usualmente extienden o simplifican la escritura del lenguaje, o representación original.

### JavaScript XML

JSX es una extensión de sintaxis de JavaScript que se parece a HTML.

Oficialmente, es una extensión que permite hacer llamadas a funciones y a construcción de objetos. No es ni una cadena de caracteres, ni HTML.

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/fe29c2a9-9989-499d-a3d0-ce4e031a0ee8)

-> Al final toda esta sugar sintax es codigo JavaScript, HTML y CSS. Esta traspilación la hace **Babel**

Después de compilarse,las expresiones JSX se convierten en llamadas a **funciones JavaScript regulares** y se evalúan en objetos JavaScript.

Podemos usar JSX dentro de declaraciones if y bucles for, asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones.


![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/98b2faa2-976e-4d10-a360-81b88e33bcd7)


Esta función retorna de forma condicional uno u otro tipo de expresión JSX, según la condicion que recibe por argumento,


## Tips

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/f781a293-411a-43c7-92a8-cf090b8b40fa)


Siempre que pasamos por props algoq ue no es string va entre `´{}`

Si una etiqueta esta vacia, se abre y cierra en al misma

---

## :computer: Componentes

Las aplicaciones en React se construyen mediante componentes. Podemos crear aplicaciones completas de una manera **modular** y de **fácil mantenimiento**, a pesar de su complejidad.

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/068fbc50-8a08-4abb-bec9-15db6ba3e6ba)


Los componentes tiene **responsabilidades separadas**, solo recibe info de lo que le pasa el padre y hace lo que tiene que hacer.


## Diseño modular

Los componentes permiten separar la interfaz de usuari oen piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

Al desarrollar creamos componentes para resolver pequeños problemas, que son fáciles de visualizar y ocomprender.

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/f358c897-3707-4409-9bcb-558a4efe11b7)


---

## :computer: Componentes de Clase y Componentes funcionales

Hay 2 tipos o representaciones de componentes, en la actualidad se utiliza la representación de clase en aplicaciones muy específicas.


![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/3056e551-9ecf-4809-bb0b-08322dd68062)


## Puntos en comun


- Pueden recibir props

- Tienen la capacidad de hacer render de un único elemento(aunque este elemento pueda tener muchos elementos dentro)

Ñas propiedades son la forma que tiene React para pasar **parámetros de un componente superior a sus childrens**.

Es la manera de implementar el **flujo de datos undireccional**.

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/3b51282b-5907-4153-9874-1d6dd6c10703)

Si alguna es una función, el child component puede llamarla para provocar **efectos secundarios** en el parent.

## ¿Como se definen las propiedades?

- En COMPONENTES FUNCIONALES: recibimos como parametros dentro de la funcion:

```JSX
({name}) => <p>{name}<p>
```


```JSX
(props) => <p>{props.name}<p>
```

- En COMPONENTES DE CLASE: recibimos propiedades por `this.props` (acceso a objeto props)

---

## :computer: PROPS

Nuestras props se encuentran encerradas entre {}. Las {} son importantes, porque es la manera con la que se escapa un codigo JSX, permitiendo colocar dentro sentencias JavaScript 'nativo'.

Aquello que devuelvan esas sentencias se volcará como contenido en la vista.

---

## :computer: Garbage collector

Esto deriva de la manera en la que ocurren las cosas en JS. Al terminar la ejecución de addOne(num), a y b serán puestas a disposición del garbage collector.

```JavaScript
function addOne(number) {
 let a = Number(number)
 let b = 1 +b
 return b
}

let number = 2
console.log(addOne(number))
```

**Stackbliz** -> como el codesands

---

## :computer: Ejemplo de codigo con fragment

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/f6be6e47-20b0-48ef-90c7-b8ee6f969fa4)

Es muy util usar **fragment** para que sea más accesible (tener en ceunta el voice over), y no estoy inundada de `<divs>`

---

## :computer: JSX

**class** -> **className** la clase de HTML

**for** -> **htmlFor** en los formularios

---

## :computer: Ejemplo de componente de clase

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/2dc2471a-0422-4860-b451-2f813cc71fec)


---

Las funciones viven unicamente durante el tiempo que son ejecutadas.

Mientras el componente se esta montando se carga toda la UI y se renderiza (muestra en pantalla), si el usuario realiza alguna interaccion voy a tener una re - renderización, y si luego se ve otro componente, este se va a **Desmontar** y va a **montar** el nuevo componente. Siempre que se* **Actualiza** se **redibuja**.

![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/37d2603e-a1f8-49ce-9cf6-9aa1a3c13535)

-> cada evento que ocurra cmpliendo ciertas características invocará el completo de la función una vez por cada re-render.

Para saber que debe renderizar React busca ciertas condiciones específicas:

- **cambio en las props**: `<Title text="newText" />`

- **cambio en el estado**:

```JSX
this.setState({count: 2}) // class
setCount(2) // function
```

- **Eventos de modificación de estados**, al ocurrir eventos, programáticamente modificaremos el estado, lo cual detona los dos promeros puntos.

---

## :computer: hook

Empiezan todos con **use**

---

## :computer: Hook: useState

Nos permite persistir estados en variables.

`const [name, setName] = useState('')`

-> name es la variable persistida del estado

-> setName es como actualizo el estado

-> useState() es el valor inciial dle estado


Ejemplo de codigo:


![image](https://github.com/eugenia1984/react-varios-cursos/assets/72580574/9cd57621-e6f5-4601-9c56-389b385bf811)

---

-> Todo lo que está dentro de los **Componentes** son **children**

---
