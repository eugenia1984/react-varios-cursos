# :star2: Unidad 2 * Entorno React (2) :star2:

---

## Temas:

```
- Azucar sintactico - clases
- Let y Const
- ES6: Template Strings
- ES7: Elevación de potencia
- Webpack
- Babel + Node.js
- JSX
```

---

## :star: Azucar sintactico

**Sugar Syntax** refiere a la **sintaxis agregada a un lenguaje de programación con el
objetivo de hacer más fácil y eficiente su utilización**. Favorece su escritura, lectura y comprensión, existe porque los lenguajes tienden a evolucionar. Al implementarlos de manera adecuada podemos mejorar la legibilidad y pragmatismo
de nuestro codigo.

Ej: 
```JavaScript
i = 1+1 -> i++
```

### ES5 función normal

```JavaScript
var miFuncion = function(num) {
  returnnum + num;
}
```

### ES6 función arrow más corta y fácil de leer

```JavaScript
var miFuncion = (num) => num + num;
```

---

### Clases

Ahora JavaScript tendrá **clases**, muy parecidas las **funciones constructoras de objectos** que realizabamos en el estándar, pero ahora **bajo el paradigma de clases**, con todo lo que eso conlleva, como por ejemplo, **herencia**. Aunque no deja de ser un **azúcar sintáctico** (**Sugar Syntax**) porque en JavaScript no tenemos clases, tenemos **prototipos**.


```JavaScript
classLibro{
 constructor(tematica, paginas, autor) {
  this.tematica=tematica;
  this.paginas=paginas;
  this.autor=autor;
 }
 metodo() {
 // ...
 }
}
```

### Let y Const

Ahora podemos declarar variables con let en lugar de var si no queremos que sean
accesibles más allá de un á.

####  ES5
```JavaScript
(function() {
  console.log(x); // x no está definida aún.
  if(true) {
  var x = "hola mundo";
 }
  console.log(x);
  // Imprime "hola mundo", porque "var" hace que sea global
  // a la función;
})();
```

#### ES6

```JavaScript
(function() {
  if(true) {
  let x = "hola mundo";
 }
 console.log(x);
 //Da error, porque "x" ha sido definida dentro del "if"
})();
```

#### Template Strings

Ahora con EcmaScript6 se puede concatenar de una simple manera las cadenas de
string,para ello en vez de utilizar el signo de suma solamente se coloca el símbolo de dolar con llaves entre comillas invertida, ejemplo:

#### ES6
```JavaScript
let nombre1 = "JavaScript";
let nombre2 = "awesome";
console.log(`Sólo quiero decir que ${nombre1} is ${nombre2`);
```

#### Valores por defecto

Los valores por defecto se puede pasar como valores de las variables en los
parámetros de una función:

####  ES5
```JavaScript
function(valor) { 
  valor = valor || "foo";
}
```

####  ES6
```JavaScript
function(valor) { 
  valor = valor || "foo";
}
```

#### Elevación de potencia:

Ahora en ES7 tenemos una nueva para calcular una potencia
```JavaScript
let base = 3;
let exponente = 2;
let potencia = base ** exponente;
console.log(potencia);
```
---

### :star: Webpack

```JavaScript

```

```JavaScript

```

---

## :star: Babel + Node.js

---

## :star: JSX

---
