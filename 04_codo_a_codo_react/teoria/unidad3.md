# Unidad 3 * JS Avanzada * Arrays - Funciones

---

Temario:

```
- Arrays
- Funciones
- Arrows functions
- Scope
- Objetos en Javascript
- Callbacks
- Objeto String
- Objeto Math
- Reduce
- Map
- DOM
- Eventos
```

## :star: Arrays

- El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.

 
### Descripción

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean correlativos y de extensión fija. Esto depende de cómo el programador elija usarlos. En general estas características son cómodas, aunque si algún caso particular, no resultan deseables, se puede considerar el uso de arrays con tipo.

 

### Operaciones habituales

- Crear un Array
```JavaScript
let frutas = ["Manzana", "Banana"]
console.log(frutas.length) // 2
```

- Acceder a un elemento de Array mediante su índice

```JavaScript
let primero = frutas[0] // Manzana
let ultimo = frutas[frutas.length - 1] // Banana
```

- Recorrer un Array con **.forEach()**:

```JavaScript
frutas.forEach(function(elemento, indice, array) {
  console.log(elemento, indice);
})

// Manzana 0
// Banana 1
```

- Añadir un elemento al final de un Array con **.push()**:

```JavaScript
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
```

- Eliminar el último elemento de un Array con **.pop()**:

```JavaScript
let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]
```

- Añadir un elemento al principio de un Array con **.unshift()**:

```JavaScript
let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
```

- Eliminar el primer elemento de un Array con **.shift()**:

```JavaScript
let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
```

- Encontrar el índice de un elemento del Array con **.indexOf()**:

```JavaScript
frutas.push('Pera') // ["Manzana", "Banana", "Pera"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1
```

- Eliminar un único elemento mediante su posición

**Ejemplo**: 

Eliminamos "Banana" del array pasándole dos parámetros: 

-la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. 

-De esta forma: ```.splice(pos, 1)``` empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. 

-En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

```JavaScript
let elementoEliminado = frutas.splice(pos, 1) // ["Manzana", "Pera"]
```

- Eliminar varios elementos a partir de una posición


Nota:

Con ```.splice()``` no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. Al hacer esto estaríamos modificando el array de origen.

```JavaScript
let vegetales = ['Repollo', 'Coliflor', 'Zapallo', 'Zanahoria']

console.log(vegetales) // ["Repollo", "Coliflor", "Zapallo", "Zanahoria"]

let pos = 1, numElementos = 2

let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Coliflor", "Zapallo"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales)
// ["Zapallo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
```

- Copiar un Array

```JavaScript
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"
```

- Acceso a elementos de un array

Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.

Si se utiliza un número de índice no válido, se obtendrá undefined.

```JavaScript
let arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']

console.log(arr[0]) // escribe en consola 'este es el primer elemento'
console.log(arr[1]) // escribe en consola 'este es el segundo elemento'
console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'
```

Los elementos de un array pueden considerarse propiedades del objeto tanto como toString (sin embargo, para ser precisos, toString() es un método). Sin embargo, se obtendrá un error de sintaxis si se intenta acceder a un elemento de un array de la forma siguiente, ya que el nombre de la propiedad no sería válido:

```JavaScript
console.log(arr.0) // error de sintaxis
```


No hay nada especial ni en los arrays de JavaScript ni en sus propiedades que ocasione esto. En JavaScript, las propiedades cuyo nombre comienza con un dígito no pueden referenciarse con la notación punto y debe accederse a ellas mediante la notación corchete.


Por ejemplo, dado un objeto con una propiedad de nombre '3d', sólo podría accederse a dicha propiedad con la notación corchete.

```JavaScript
let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]

console.log(decadas.0) // error de sintaxis
console.log(decadas[0]) // funciona correctamente

renderizador.3d.usarTextura(modelo, 'personaje.png')
renderizador['3d'].usarTextura(modelo, 'personaje.png')
```

En el último ejemplo, ha sido necesario poner '3d' entre comillas. Es posible usar también comillas con los índices del los arrays de JavaScript (p. ej., decadas['2'] en vez de decadas[2]), aunque no es necesario.

El motor de JavaScript transforma en un string el 2 de decadas[2] a través de una conversión implícita mediante toString. Por tanto, '2' y '02' harían referencia a dos posiciones diferentes en el objeto decadas, y el siguiente ejemplo podría dar true como resultado:

```JavaScript
console.log(decadas['2'] != decadas['02'])
```

- Relación entre length y las propiedades numéricas

La propiedad **length** de un array de JavaScript está conectada con algunas otras de sus propiedades numéricas.

 
Varios de los métodos propios de un array (p. ej., **join()**, **slice()**, **indexOf()**, etc.) tienen en cuenta el valor de la propiedad length de un array cuando se les llama.

Otros métodos (p. ej., **push()**, **splice()**, etc.) modifican la propiedad length de un array.

```JavaScript
const frutas = []
frutas.push('banana', 'manzana', 'pera') 
console.log(frutas.length) // 3
```

Cuando se le da a una propiedad de un array JavaScript un valor que corresponda a un índice válido para el array pero que se encuentre fuera de sus límites, el motor actualizará el valor de la propiedad length como corresponda:

```JavaScript
frutas[5] = 'pera'

console.log(frutas[5]) // 'pera'
console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
console.log(frutas.length) // 6
```

Si se aumenta el valor de length:

```JavaScript
frutas.length = 10

console.log(frutas) // ['banana', 'manzana', 'pera', <2 empty items>, 'pera', <4 empty items>]
console.log(Object.keys(frutas)) // ['0', '1', '2', '5']
console.log(frutas.length) // 10
console.log(frutas[8]) // undefined
```

Si se disminuye el valor de la propiedad length pueden eliminarse elementos:

```JavaScript
frutas.length = 2
console.log(Object.keys(frutas)) // ['0', '1']
console.log(frutas.length) // 2
```

### Every

El método every ejecuta una función callback (en clases futuras veremos de que se tratan) dada una vez por cada elemento presente en el arreglo hasta encontrar uno que haga retornar un valor falso a callback (un valor que resulte falso cuando se convierta a booleano). Si no se encuentra tal elemento, el método every de inmediato retorna false. O si callback retorna verdadero para todos los elementos, every retornará true. callback es llamada sólo para índices del arreglo que tengan valores asignados; no se llama para índices que hayan sido eliminados o a los que no se les haya asignado un valor.

 
**callback** es llamada con tres argumetos: el valor del elemento, el índice del elemento y el objeto Array que está siendo recorrido.
 
Si se proporciona un parámetro thisArg a every, será pasado a la función callback cuando sea llamada, usándolo como valor this. En otro caso, se pasará el valor undefined para que sea usado como valor this. El valor this observable por parte de callback se determina de acuerdo a las normas usuales para determinar el this visto por una función.

**every** no modifica el arreglo sobre el cual es llamado.

El intervalo de elementos procesados por every se establece antes de la primera llamada a callback. Los elementos que se agreguen al arreglo después de que la función every comience no serán vistos por la función callback. Si se modifican elementos existentes en el arreglo, su valor cuando sea pasado a callback será el valor que tengan cuando sean visitados; los elementos que se eliminen no serán visitados.

**every** opera como el cuantificador "para todo" en matemáticas. En particular con el arreglo vacío retorna true. (es un true que todos los elementos del conjunto vacío satisfacen una condición dada.)


- Ejemplos:

-Probando el tamaño de todos los elementos de un arreglo. El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.

1. funcion declarada

```JavaScript
function esGrande(elemento, indice, arrreglo) {
  return elemento >= 10;
}

[12, 54, 18, 130, 44].every(esGrande); // true
[12, 5, 8, 130, 44].every(esGrande); // false
```

2. Usar funciones flecha

Las funciones flecha proveen una sintaxis más corta para la misma prueba.

```JavaScript
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
```

### filters

**filter()** llama a la función **callback** sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales callback devuelve un valor verdadero. callback es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición callback simplemente los salta, y no son incluidos en el nuevo array.

 
**callback** se invoca con tres argumentos:

 
- El valor de cada elemento

- El índice del elemento

- El objeto Array que se está recorriendo

 

Si se proporciona un parámetro thisArg a filter(), este será pasado a callback cuando sea invocado, para usarlo como valor this. De lo contrario, se pasará el valor undefined como valor this. El valor this dentro del callback se determina conforme a las las normas habituales para determinar el this visto por una función.

 

**filter() no modifica el array sobre el cual es llamado**.

El rango de elementos procesados por filter() se establece antes de la primera invocación de callback. Los elementos que se añadan al array después de que comience la llamada a filter() no serán visitados por callback. Si se modifica o elimina un elemento existente del array, cuando pase su valor a callback será el que tenga cuando filter() lo recorra; los elementos que son eliminados no son recorridos.

 

- Ejemplos:

-Filtrando todos los valores pequeños. El siguiente ejemplo usa filter() para crear un array filtrado que excluye todos los elementos con valores inferiores a 10.

1. funcion declarada

```JavaScript
function esGrande(elemento) {
  return elemento >= 10;
}

var filtrados = [12, 5, 8, 130, 44].filter(esGrande); // filtrados es [12, 130, 44]
```

### Some()

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. callback es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.

callback es invocada con tres argumentos: el valor del elemento, el índice del elemento, y el objeto array sobre el que se itera.

Si se indica un parámetro thisArg a some(), se pasará a callback cuando es invocada, para usar como valor this. Si no, el valor undefined será pasado para usar como valor this. El valor this value observable por callback se determina de acuerdo a las reglas habituales para determinar el this visible por una función.

**me() no modifica el array con el cual fue llamada**

El rango de elementos procesados por some() es configurado antes de la primera invocación de callback. Los elementos anexados al array luego de que comience la llamada a some() no serán visitados por callback. Si un elemento existente y no visitado del array es alterado por callback, su valor pasado al callback será el valor al momento que some() visita el índice del elemento; los elementos borrados no son visitados.


- Ejemplos:

-Verificando el valor de los elementos de un array. El siguiente ejemplo verifica si algún elemento del array es mayor a 10

```JavaScript
function masquediez(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(masquediez); // false
[12, 5, 8, 1, 4].some(masquediez); //
```


---

## :star: Funciones

En términos generales, una función es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, una función se compone de una secuencia de declaraciones, que conforman el llamado cuerpo de la función. Se pueden pasar valores a una función, y la función puede devolver un valor.

- Una función es un bloque de código que podemos invocar todas las veces que necesitemos.

- Puede realizar una tarea especifica y retornar un valor.

- Nos permite agrupar el código que vayamos a usar muchas veces.

### General

Las funciones no son lo mismo que los procedimientos. Una función siempre devuelve un valor, pero un procedimiento, puede o no puede devolver un valor.

Para devolver un valor especifico distinto del predeterminado, una función debe tener una sentencia return, que especifique el valor a devolver. Una función sin una instrucción return devolverá el valor predeterminado.

Los parámetros en la llamada a una función son los argumentos de la función. Los argumentos se pasan a las funciones por valor. Si la función cambia el valor de un argumento, este cambio no se refleja globalmente ni en la llamada de la función. Sin embargo, las referencias a objetos también son valores, y son especiales: si la función cambia las propiedades del objeto referenciado, ese cambio es visible fuera de la función, tal y como se muestra en el siguiente ejemplo:

### Estructura básica de una Función:
 

Usamos la palabra **function** para indicarle a Javascript que vamos a escribir una función.

```JavaScript
function sumar(a, b) {
 return a+b;
}
```

- **nombre**: Definimos un nombre para referirnos a nuestra función al momento de querer invocarla, en este caso el nombre de la función es sumar.

- **Parámetro**: escribimos los paréntesis y dentro de ellos los parámetros de la función. Si tiene mas de uno, los podemos separar mediante una coma. Si la función no lleva parámetros , escribimos los paréntesis sin nada adentro.

Dentro de nuestra función podremos acceder a los parámetros como si fueran variables. Es decir, con solo escribir los nombres de los parámetros, podremos trabajar con ellos.

- **Cuerpo**: Entre las llaves de apertura y cierre escribimos la lógica de nuestra función, es decir, el código que queremos que se ejecute cada vez que llamemos a la función.

- **El retorno**: es muy común a la hora de escribir una función que necesitemos devolver al exterior el resultado del proceso que estamos haciendo dentro de ella, para esto utilizamos una palabra reservada return.


###  Funciones declarativas

Son aquellas que se declaran usando la estructura básica. Reciben un nombre formal a través del cual la podemos invocar.

```JavaScript
Function mostrarEdad(edad) {
 return edad;
}
```

### Funciones expresivas:

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```JavaScript
Var nombre = function mostrarEdad(edad) {
 return edad;
}
```

### Invocación de una función

La forma de llamar a una función (invocar) es escribiendo su nombre seguido de apertura y cierre de paréntesis.

```JavaScript
nombreFuncion();
```

En el caso de que necesitemos guardar el valor que retorna una función, será necesario almacenarlo en una variable, también podemos mostrarlo usando console.log.

```JavaScript
Var edad = nombreFuncion(edad)
Console.log(nombreFuncion(edad))
```

Si la función espera argumentos, se los podemos pasar dentro de los paréntesis, es muy importante respetar el orden si hay más de un parámetro debido a que Javascript los asignara en el orden que vayan llegando.

```JavaScript
Function mostrarEdad(edad, nombre) { 
 return “mostrar” + nombre + “tienen” + edad;
}

mostrarEdad(18,”juan”)
```


-> **Los parámetros son las variables que escribimos cuando definimos la función**.

-> **Los argumentos son los valores que enviamos cuando invocamos la función**.



---

# :star: Arrows functions

```JavaScript
```

```JavaScript
```
```JavaScript
```

```JavaScript
```
```JavaScript
```

```JavaScript
```
---

# :star: Scope

---

# :star: Objetos en Javascript

---

# :star: Callbacks

--- 

# :star: Objeto String

---

# :star: Objeto Math

--- 

# :star: Reduce

--- 

# :star: Map

--- 

# :star: DOM

--- 

# :star: Eventos


---
