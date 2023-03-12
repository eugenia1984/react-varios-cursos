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
```

---
---


## :star: 2. Funciones

En términos generales, **una función es un "subprograma" que puede ser llamado por código externo (o interno en caso de recursión) a la función**. Al igual que el programa en sí mismo, una función se compone de una **secuencia de declaraciones**, que conforman el llamado **cuerpo de la función**. Se pueden **pasar valores a una funció**n, y la función puede **devolver un valor**.

- Una función es un bloque de código que podemos invocar todas las veces que necesitemos.

- Puede realizar una tarea especifica y retornar un valor.

- Nos permite agrupar el código que vayamos a usar muchas veces.

 

### General


Las funciones no son lo mismo que los procedimientos. Una función siempre devuelve un valor, pero un procedimiento, puede o no puede devolver un valor.


Para devolver un valor especifico distinto del predeterminado, una función debe tener una **sentencia return**, que especifique el valor a devolver. Una función sin una instrucción return devolverá el valor predeterminado.

 
**Los parámetros en la llamada a una función son los argumentos de la función**. **Los argumentos se pasan a las funciones por valor**. Si la función cambia el valor de un argumento, este cambio no se refleja globalmente ni en la llamada de la función. Sin embargo, las referencias a objetos también son valores, y son especiales: si la función cambia las propiedades del objeto referenciado, ese cambio es visible fuera de la función, tal y como se muestra en el siguiente ejemplo:

 

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Estructura básica de una Función:

Usamos la palabra **function** para indicarle a Javascript que vamos a escribir una función.

 
```JavaScript
function sumar(a, b) {
 return a+b;
}
```
 
- **nombre**: Definimos un nombre para referirnos a nuestra función al momento de querer invocarla, en este caso el nombre de la función es sumar.

- **parámetro**: escribimos los paréntesis y dentro de ellos los parámetros de la función. Si tiene mas de uno, los podemos separar mediante una coma. Si la función no lleva parámetros , escribimos los paréntesis sin nada adentro.

Dentro de nuestra función podremos acceder a los parámetros como si fueran variables. Es decir, con solo escribir los nombres de los parámetros, podremos trabajar con ellos.

- **cuerpo**: Entre las llaves de apertura y cierre escribimos la lógica de nuestra función, es decir, el código que queremos que se ejecute cada vez que llamemos a la función.

El retorno: es muy común a la hora de escribir una función que necesitemos devolver al exterior el resultado del proceso que estamos haciendo dentro de ella, para esto utilizamos una palabra reservada return.

 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Funciones declarativas

 

Son aquellas que se declaran usando la estructura básica. Reciben un nombre formal a través del cual la podemos invocar.

```JavaSCript 
Function mostrarEdad(edad) {
 return edad;
}
```
 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Funciones

### Funciones expresivas:

En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

 
```JavaScript
const nombre = function mostrarEdad(edad) {
 return edad;
}
```
 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Invocación de una función

La forma de llamar a una función (invocar) es escribiendo su nombre seguido de apertura y cierre de paréntesis.

```JavaScript 
nombreFuncion();
```
 

En el caso de que necesitemos guardar el valor que retorna una función, será necesario almacenarlo en una variable, también podemos mostrarlo usando console.log.

 ```JavaScipt
let edad = nombreFuncion(edad)
console.log(nombreFuncion(edad))
```
 

Si la función espera argumentos, se los podemos pasar dentro de los paréntesis, es muy importante respetar el orden si hay más de un parámetro debido a que Javascript los asignara en el orden que vayan llegando.

 
```JavaScript
Function mostrarEdad(edad, nombre) {
 return “mostrar” + nombre + “tienen” + edad;
}

mostrarEdad(18,”juan”)
```
 

---

-> **Los parámetros son las variables que escribimos cuando definimos la función**.

-> **Los argumentos son los valores que enviamos cuando invocamos la función**.


---
---

## :star: 3. Arrows functions


Una expresión de función flecha **es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones**.



### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Comparación de funciones tradicionales con funciones flecha

 
Desglose de una "función tradicional" hasta la "función flecha" más simple:

*Nota*: Cada paso a lo largo del camino es una "función flecha" válida

```JavaScript 
// Función tradicional
function (a) {
 return a + 100;
}

// Desglose de la función flecha
// 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
(a) => {
 return a + 100;
}

// 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
(a) => a + 100;

// 3. Suprime los paréntesis de los argumentos
a => a + 100;
```
 

Como se muestra arriba, los { corchetes }, ( paréntesis ) y "return" son opcionales, pero pueden ser obligatorios.


Por ejemplo, con varios argumentos o ningún argumento, tenés que volver a introducir paréntesis alrededor de los argumentos:

```JavaScript 
// Función tradicional
function (a, b) {
 return a + b + 100;
}

// Función flecha
(a, b) => a + b + 100;

// Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function () {
 return a + b + 100;
}

// Función flecha (sin argumentos)
let a = 4;
let b = 2;
() => a + b + 100;
```
 

Del mismo modo, si el cuerpo requiere líneas de procesamiento adicionales, tenés que volver a introducir los corchetes más el "return" (las funciones flecha no adivinan qué o cuándo querés "volver"):

```JavaScript 
// Función tradicional
function (a, b) {
 let edad = 42;
 return a + b + edad;
}

// Función flecha
(a, b) => {
 let edad = 42;
 return a + b + edad;
}
```
 

Y finalmente, en las funciones con nombre tratamos las expresiones de flecha como variables

```JavaScript
// Función tradicional
function suma (a) {
 return a + 100;
}

// Función flecha
let suma = a => a + 100;
```



### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Sintaxis básica

- **parámetro**: con una expresión simple no se necesita return:
```
param => expression
```

- **varios parámetros requieren paréntesis**: con una expresión simple no se necesita return:
```
(param1, paramN) => expression
```

- **Las declaraciones de varias líneas requieren corchetes y return**:

```JavaScript 
param => {
 let a = 1;
 return a + b;
}
```

- **varios parámetros requieren paréntesis**: las declaraciones de varias líneas requieren corchetes y return:

```JavaScript 
(param1, paramN) => {
 let a = 1;
 return a + b;
}
```
 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  "this" y funciones flecha

Una de las razones por las que se introdujeron las funciones flecha fue para eliminar complejidades del ámbito (this) y hacer que la ejecución de funciones sea mucho más intuitiva.

 
This se refiere a la instancia. Las instancias se crean cuando se invoca la palabra clave new. De lo contrario, this se establecerá —de forma predeterminada— en el ámbito o alcance de window.

En las funciones tradicionales de manera predeterminada this está en el ámbito de window:

```JavaScript 
window.age = 10; // <-- definición de age por primera vez
function Person() {
 this.age = 42; // <-- definición de age por segunda vez
 setTimeout(function () {// <-- La función tradicional se está ejecutando en el ámbito de window
 console.log("this.age", this.age); // genera "10" porque se ejecuta en el ámbito window
}, 100);
}

var p = new Person();
```
 

- Las funciones flecha no predeterminan this al ámbito o alcance de window, más bien se ejecutan en el ámbito o alcance en que se crean:

```JavaScript 
window.age = 10; // <-- acá

function Person() {
 this.age = 42; // <-- acá
 setTimeout(() => {// <-- Función flecha ejecutándose en el ámbito de "p" (una instancia de Person)
  console.log("this.age", this.age); // genera "42" porque la función se ejecuta en el ámbito de Person
 }, 100);
}

var p = new Person();
```
 

En el ejemplo anterior, la función flecha no tiene su propio this. Se utiliza el valor this del ámbito léxico adjunto; las funciones flecha siguen las reglas normales de búsqueda de variables. Entonces, mientras busca this que no está presente en el ámbito actual, una función flecha termina encontrando el this de su ámbito adjunto.

 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  call, apply y bind

Los métodos call, apply y bind NO son adecuados para las funciones flecha, ya que fueron diseñados para permitir que los métodos se ejecuten dentro de diferentes ámbitos, porque las funciones flecha establecen "this" según el ámbito dentro del cual se define la función flecha.


Por ejemplo, call, apply y bind funcionan como se esperaba con las funciones tradicionales, porque establecen el ámbito para cada uno de los métodos:

```JavaScript
// ----- Ejemplo tradicional ---------
// Un objeto simplista con su propio "this".

var obj = {
 num: 100
}

// Establece "num" en window para mostrar cómo NO se usa.
window.num = 2020; // ¡Ay!

// Una función tradicional simple para operar en "this"
var add = function (a, b, c) {
 return this.num + a + b + c;
}

// call
var result = add.call(obj, 1, 2, 3) // establece el ámbito como "obj"
console.log(result) // resultado 106

// apply
const arr = [1, 2, 3]
var result = add.apply(obj, arr) // establece el ámbito como "obj"
console.log(result) // resultado 106

// bind
var result = add.bind(obj) // estable el ámbito como "obj"
console.log(result(1, 2, 3)) // resultado 106
```

Con las funciones flecha, dado que la función add esencialmente se crea en el ámbito del window (global), asumirá que this es window.

 
```JavaScript
// ------- Ejemplo de flecha -------------------
// Un objeto simplista con su propio "this".
var obj = {
 num: 100
}

// Establecer "num" en window para mostrar cómo se recoge.
window.num = 2020; // ¡Ay!

// Función flecha
var add = (a, b, c) => this.num + a + b + c;

// call
console.log(add.call(obj, 1, 2, 3)) // resultado 2026

// apply
const arr = [1, 2, 3]
console.log(add.apply(obj, arr)) // resultado 2026

// bind
const bound = add.bind(obj)
console.log(bound(1, 2, 3)) // resultado 2026
```
 

Quizás el mayor beneficio de usar las funciones flecha es con los métodos a nivel del DOM (setTimeout, setInterval, addEventListener) que generalmente requieren algún tipo de cierre, llamada, aplicación o vinculación para garantizar que la función se ejecute en el ámbito adecuado.

 

##### Ejemplo tradicional:

```JavaScript 
var obj = {
 count : 10,
 doSomethingLater : function (){
  setTimeout(function(){ // la función se ejecuta en el ámbito de window
  this.count++;
  console.log(this.count);
 }, 300);
}
}

obj.doSomethingLater(); // la consola imprime "NaN", porque la propiedad "count" no está en el ámbito de window.
``` 

#### Ejemplo de flecha:

```JavaScript
var obj = {
 count : 10,
 doSomethingLater : function(){ // las funciones flecha no son adecuadas para métodos
  setTimeout( () => { // dado que la función flecha se creó dentro del "obj", asume el "this" del objeto
  this.count++;
  console.log(this.count);
 }, 300);
}
}

obj.doSomethingLater();
```
 

#### Sin enlace de arguments

Las funciones flecha no tienen su propio objeto arguments. Por tanto, en este ejemplo, arguments simplemente es una referencia a los argumentos del ámbito adjunto:

```JavaSCript 
var arguments = [1, 2, 3];
var arr = () => arguments[0];
arr(); // 1

function foo(n) {
 var f = () => arguments[0] + n; // Los argumentos implícitos de foo son vinculantes. arguments[0] es n
 return f();
}

foo(3); // 6
```

En la mayoría de los casos, usar parámetros rest es una buena alternativa a usar un objeto arguments.

 
```JavaScript
function foo(n) {
 var f = (...args) => args[0] + n;
 return f(10);
}

foo(1); // 11
```


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Uso del operador new

Las funciones flecha no se pueden usar como constructores y arrojarán un error cuando se usen con new.

```JavaScript 
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo no es un constructor
```


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Uso de la propiedad prototype

Las funciones flecha no tienen una propiedad prototype.

```JavaScript 
var Foo = () => {};
console.log(Foo.prototype); // undefined
``` 

 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Cuerpo de función

Las funciones flecha pueden tener un "cuerpo conciso" o el "cuerpo de bloque" habitual.

En un cuerpo conciso, solo se especifica una expresión, que se convierte en el valor de retorno implícito. En el cuerpo de un bloque, debes utilizar una instrucción return explícita.

 
```JavaScript
var func = x => x * x;
// sintaxis de cuerpo conciso, "return" implícito
var func = (x, y) => { return x + y; };
// con cuerpo de bloque, se necesita un "return" explícito
``` 

 


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/>  Orden de procesamiento

Aunque la flecha en una función flecha no es un operador, las funciones flecha tienen reglas de procesamiento especiales que interactúan de manera diferente con prioridad de operadores en comparación con las funciones regulares.

 
```JavaSCript
let callback;

callback = callback || function() {}; // ok

callback = callback || () => {};
// SyntaxError: argumentos de función flecha no válidos

callback = callback || (() => {}); // bien
```
 

#### Ejemplos

- Uso básico

```JavaScript
// Una función flecha vacía devuelve undefinided
let empty = () => {};

(() => 'foobar')();
// Devuelve "foobar"
// (esta es una expresión de función invocada inmediatamente)

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;
// Fácil filtrado de arreglos, mapeo, ...
var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b); // 66

var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]

var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]

// Cadenas de promesas más concisas
promise.then(a => {
 // ...
 }).then(b => {
 // ...
});



// Funciones flecha sin parámetros que son visualmente más fáciles de procesar
setTimeout( () => {
 console.log('sucederá antes');
 setTimeout( () => {
  // código más profundo
  console.log ('Sucederá más tarde');
 }, 1);
}, 1);
```
 

---
---

## :star: 4. Scope


Se refiere a el contexto actual de ejecución. El contexto en el que los valores y las expresiones son "visibles" o pueden ser referenciados. Si una variable u otra expresión no está "en el Scope o alcance actual", entonces no está disponible para su uso.

Los Scope también se pueden superponer en una jerarquía, de modo que los Scope secundarios tengan acceso a los ámbitos primarios, pero no al revés.

Una función sirve como un cierre en JavaScript y, por lo tanto, crea un ámbito, de modo que (por ejemplo) no se puede acceder a una variable definida exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones.

Por ejemplo, lo siguiente no es válido:

```JavaScript 
function exampleFunction() {
 var x = "declarada dentro de la función"; // x solo se puede utilizar en exampleFunction
 console.log("funcion interna");
 console.log(x);
}
console.log(x); // error
```
 

Sin embargo, el siguiente código es válido debido a que la variable se declara fuera de la función, lo que la hace global:

```JavaScript
var x = "función externa declarada";

exampleFunction();

function exampleFunction() {
 console.log("funcion interna");
 console.log(x);
}

console.log("funcion externa");
console.log(x);
```

---
---

## :star: 5. Objetos en Javascript


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Programación Orientada a Objetos

La programación orientada a objetos es un paradigma de programación que utiliza la abstracción para crear modelos basados ​​en el mundo real. Utiliza diversas técnicas de paradigmas previamente establecidas, incluyendo la modularidad, polimorfismo y encapsulamiento. Hoy en día, muchos lenguajes de programación (como Java, JavaScript, C#, C++, Python, PHP, Ruby y más) soportan programación orientada a objetos (POO).

La programación orientada a objetos puede considerarse como el diseño de software a través de un conjunto de objetos que cooperan, a diferencia de un punto de vista tradicional en el que un programa puede considerarse como un conjunto de funciones, o simplemente como una lista de instrucciones para la computadora. En la programación orientada a objetos, cada objeto es capaz de recibir mensajes, procesar datos y enviar mensajes a otros objetos. Cada objeto puede verse como una pequeña máquina independiente con un papel o responsabilidad definida.

POO pretende promover una mayor flexibilidad y facilidad de mantenimiento en la programación y es muy popular en la ingeniería de software a gran escala. Gracias a su fuerte énfasis en la modularidad, el código orientado a objetos está concebido para ser más fácil de desarrollar y más fácil de entender posteriormente, prestándose a un análisis más directo, a una mayor codificación y comprensión de situaciones y procedimientos complejos que otros métodos de programación menos modulares


### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Objetos

Los Objetos son aquellos que tienen propiedades y comportamientos, también serán sustantivos. Pueden ser físicos o conceptuales.

Las Propiedades también pueden llamarse atributos y estos también serán sustantivos. Algunos atributos o propiedades son nombre, tamaño, forma, estado, etc. Son todas las características del objeto.

Los Comportamientos serán todas las operaciones que el objeto puede hacer, suelen ser verbos o sustantivos y verbo. Algunos ejemplos pueden ser que el usuario pueda hacer login() y logout(), hacerreporte().

#### Ejemplo:

- Objeto: Perro

- Propiedades: + nombre, + color, + raza, + altura.

- Comportamientos: + ladrar, + comer, + dormir, + correr.

```
Objeto #1 llamado “Pancho”:
tributo_1: color = marrón
atributo_2: tamannio = pequenio
atributo_3: raza = chiguagua

metodo_1: ladrar
metodo_2: comer
metodo_3: dormir

 
Objeto #2 llamado "Carlos"
atributo_1: color = blanco
atributo_2: tamannio = grande
atributo_3: raza = hunky siberiano

metodo_1: ladrar
metodo_2: comer
metodo_3: dormir
```

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Objetos Literales en JavaScript

Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas, cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.

Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.

Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.

#### Ejemplo de creación de un Objeto:

Sintaxis:

```
var nombreObjeto (
 atributo1: "valorString",
 atributo2: "valorString",
 atributo3: valornumerico,
 atributo4: valorBoleano
)
```

Código:

```JavaScript
var usuario {
nombre: "carlos",
apellido: "sanchez",
edad: 25,
programador: true
}
```

### <img src="https://img.icons8.com/emoji/48/null/check-mark-button-emoji.png"/> Llamado de Atributos

como vimos en el ejemplo anterior, pudimos crear un objeto con sus respectivos atributos, para luego llamar a cada atributo en particular solo queda realizarlo de la siguiente manera:

- Sintaxis:
```
nombreobjeto.atributo;
```
 
- Código:

```JavaScript 
console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.edad);
console.log(usuario.programador);
```
 


---
---

## :star: 6. Callbacks

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

#### Ejemplo:

```JavaScript 
function saludar(nombre) {// ←-- definición de la función
 alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
 var nombre = prompt('Por favor ingresa tu nombre.');
 callback(nombre);
}

procesarEntradaUsuario(saludar);// ←-- función pasada como parámetro
```

El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

 

Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación asincrónica — estas se denominan devoluciones de llamada asincrónicas.


---
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
