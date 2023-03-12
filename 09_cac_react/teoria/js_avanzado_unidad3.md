# :star:JavaScript Avanzado - Unidad 3:star:

---

## :book:Temas:book:


- 1 - Arrays

- 2 - Funciones

- 3 - Arrows functions

- 4 - Scope

- 5 - Objetos en Javascript

- 6 - Callbacks

- 7 - Objeto String

- 8 - Objeto Math

- 9 - Reduce

- 10 - Map

- 11 - DOM

- 12 - Eventos

---
---

## :star: 1. Arrays
 

El objeto Array de JavaScript es un objeto global que es usado en la construcción de arrays, que son objetos tipo lista de alto nivel.

 

### Descripción

Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean correlativos y de extensión fija. Esto depende de cómo el programador elija usarlos. En general estas características son cómodas, aunque si algún caso particular, no resultan deseables, se puede considerar el uso de arrays con tipo.


##  Operaciones habituales

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Crear un Array

 
```JavaScript
let frutas = ["Manzana", "Banana"]
console.log(frutas.length) // 2
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Acceder a un elemento de Array mediante su índice

 
```JavaScript
let primero = frutas[0] // Manzana
let ultimo = frutas[frutas.length - 1] // Banana
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Recorrer un Array

 ```JavaScript
frutas.forEach(function(elemento, indice, array) {
 console.log(elemento, indice);
})
// Manzana 0
// Banana 1
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Añadir un elemento al final de un Array

```JavaScrit 
let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Eliminar el último elemento de un Array

 
```JavaScript
let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana"]
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Añadir un elemento al principio de un Array

```JavaScript 
let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
```

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Eliminar el primer elemento de un Array

 
```JavaScript
let primero = frutas.shift() // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Encontrar el índice de un elemento del Array

```JavaScript 
frutas.push('Pera') // ["Manzana", "Banana", "Pera"]
```
 
```JavaScript
let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Eliminar un único elemento mediante su posición

Ejemplo: Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

 ```JavaScript
let elementoEliminado = frutas.splice(pos, 1) // ["Manzana", "Pera"]
```

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Eliminar varios elementos a partir de una posición

Nota: Con `.splice()` no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. Al hacer esto estaríamos modificando el array de origen.

 
```JavaSCript
let vegetales = ['Repollo', 'Coliflor', 'Zapallo', 'Zanahoria']
console.log(vegetales) // ["Repollo", "Coliflor", "Zapallo", "Zanahoria"]

let pos = 1, numElementos = 2
let elementosEliminados = vegetales.splice(pos, numElementos)
// ["Coliflor", "Zapallo"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales)
// ["Zapallo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Copiar un Array

 
```JavaScript
let copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Acceso a elementos de un array

**Los índices de los arrays de JavaScript comienzan en cero**, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.


**Si se utiliza un número de índice no válido, se obtendrá undefined**.

 
```JavaScript
let arr = ['este es el primer elemento', 'este es el segundo elemento', 'este es el último elemento']
console.log(arr[0]) // escribe en consola 'este es el primer elemento'
console.log(arr[1]) // escribe en consola 'este es el segundo elemento'
console.log(arr[arr.length - 1]) // escribe en consola 'este es el último elemento'
```
 

Los elementos de un array pueden considerarse propiedades del objeto tanto como **toString** (sin embargo, para ser precisos, toString() es un método). Sin embargo, se obtendrá un error de sintaxis si se intenta acceder a un elemento de un array de la forma siguiente, ya que el nombre de la propiedad no sería válido:

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
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Relación entre length y las propiedades numéricas

La propiedad length de un array de JavaScript está conectada con algunas otras de sus propiedades numéricas.


Varios de los métodos propios de un array (p. ej., **join()**, **slice()**, **indexOf()**, etc.) tienen en cuenta el valor de la propiedad length de un array cuando se les llama.

Otros métodos (p. ej., **push()**, **splice()**, etc.) **modifican la propiedad length de un array**.

 
```JavaScript
const frutas = []
frutas.push('banana', 'manzana', 'pera')
console.log(frutas.length) // 3
```
 

Cuando se le da a una propiedad de un array JavaScript un valor que corresponda a un índice válido para el array pero que se encuentre fuera de sus límites, el motor actualizará el valor de la propiedad length como corresponda:

 
```JavaSCript
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
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Every

 

El método every ejecuta una **función callback** (en clases futuras veremos de que se tratan) dada una vez por cada elemento presente en el arreglo hasta encontrar uno que haga retornar un valor falso a callback (un valor que resulte falso cuando se convierta a booleano). Si no se encuentra tal elemento, el método every de inmediato retorna false. O si callback retorna verdadero para todos los elementos, every retornará true. callback es llamada sólo para índices del arreglo que tengan valores asignados; no se llama para índices que hayan sido eliminados o a los que no se les haya asignado un valor.

 

callback es llamada con tres argumetos: 

- el valor del elemento

- el índice del elemento

- el objeto Array que está siendo recorrido.

 

Si se proporciona un parámetro thisArg a every, será pasado a la función callback cuando sea llamada, usándolo como valor this. En otro caso, se pasará el valor undefined para que sea usado como valor this. El valor this observable por parte de callback se determina de acuerdo a las normas usuales para determinar el this visto por una función.

 

-> every no modifica el arreglo sobre el cual es llamado.

 

El intervalo de elementos procesados por every se establece antes de la primera llamada a callback. Los elementos que se agreguen al arreglo después de que la función every comience no serán vistos por la función callback. Si se modifican elementos existentes en el arreglo, su valor cuando sea pasado a callback será el valor que tengan cuando sean visitados; los elementos que se eliminen no serán visitados.

 

-> every opera como el cuantificador "para todo" en matemáticas. En particular con el arreglo vacío retorna true. (es un true que todos los elementos del conjunto vacío satisfacen una condición dada.)

 

###### Ejemplos

Probando el tamaño de todos los elementos de un arreglo

El siguiente ejemplo prueba si todos los elementos de un arreglo son mayores que 10.

```JavaScript 
function esGrande(elemento, indice, arrreglo) {
 return elemento >= 10;
}

[12, 5, 8, 130, 44].every(esGrande); // false
[12, 54, 18, 130, 44].every(esGrande); // true
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Arrow Functions

Las funciones flecha proveen una sintaxis más corta para la misma prueba.

```JavaScript
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true
``` 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Filters

 

filter() llama a la función callback sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales callback devuelve un valor verdadero. callback es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición callback simplemente los salta, y no son incluidos en el nuevo array.

 

-> callback se invoca con tres argumentos:

- El valor de cada elemento

- El índice del elemento

- El objeto Array que se está recorriendo


Si se proporciona un parámetro thisArg a filter(), este será pasado a callback cuando sea invocado, para usarlo como valor this. De lo contrario, se pasará el valor undefined como valor this. El valor this dentro del callback se determina conforme a las las normas habituales para determinar el this visto por una función.

 

-> filter() no modifica el array sobre el cual es llamado.

 

El rango de elementos procesados por filter() se establece antes de la primera invocación de callback. Los elementos que se añadan al array después de que comience la llamada a filter() no serán visitados por callback. Si se modifica o elimina un elemento existente del array, cuando pase su valor a callback será el que tenga cuando filter() lo recorra; los elementos que son eliminados no son recorridos.

 

#### Ejemplos

Filtrando todos los valores pequeños

El siguiente ejemplo usa filter() para crear un array filtrado que excluye todos los elementos con valores inferiores a 10.

```JavaScript 
function esGrande(elemento) {
 return elemento >= 10;
}

var filtrados = [12, 5, 8, 130, 44].filter(esGrande);
// filtrados es [12, 130, 44]
```
 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Some()


some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false. callback es invocada sólo para los índices del array que tienen valores asignados; no es invocada para índices que han sido borrados o a los que nunca se les han asignado valores.

 
-> callback es invocada con tres argumentos: 

- el valor del elemento

- el índice del elemento

- el objeto array sobre el que se itera.

 

Si se indica un parámetro thisArg a some(), se pasará a callback cuando es invocada, para usar como valor this. Si no, el valor undefined será pasado para usar como valor this. El valor this value observable por callback se determina de acuerdo a las reglas habituales para determinar el this visible por una función.

 

-> some() no modifica el array con el cual fue llamada.

 

El rango de elementos procesados por some() es configurado antes de la primera invocación de callback. Los elementos anexados al array luego de que comience la llamada a some() no serán visitados por callback. Si un elemento existente y no visitado del array es alterado por callback, su valor pasado al callback será el valor al momento que some() visita el índice del elemento; los elementos borrados no son visitados.

 

##### Ejemplos

Verificando el valor de los elementos de un array
El siguiente ejemplo verifica si algún elemento del array es mayor a 10.

```JavaScript 
function masquediez(element, index, array) {
 return element > 10;
}

[2, 5, 8, 1, 4].some(masquediez); // false
[12, 5, 8, 1, 4].some(masquediez); //

---

## :star: 2. Funciones

---

## :star: 3. Arrows functions

---

## :star: 4. Scope

---

## :star: 5. Objetos en Javascript

---

## :star: 6. Callbacks

---

## :star: 7. Objeto String

---

## :star: 8. Objeto Math

---

## :star: 9. Reduce

---

## :star: 10. Map

---

## :star: 11. DOM

---

## :star: 12. Eventos


---
