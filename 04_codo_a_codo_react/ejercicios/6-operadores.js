/*** Operadores ***/
/***** Operadores Unarios *******/ 
let nro = 0;
while(nro < 10) {
  console.log(nro++); // modifica el valor luego de ser ejecutado
}
/*
0
1
2
3
4
5
6
7
8
9
*/
nro = 0;
while(nro < 10) {
  console.log(++nro); // hace el cambio de valor antes de ser ejecutado
}
/*
1
2
3
4
5
6
7
8
9
10
*/
// lo mismo que pasa con ++ pasa con --

// Con el operador boolean
const exist = true;
console.log("soy el valor a: ", exist); // true
// Negacion con !
console.log("no soy el valor a: ", !exist); // false

/***** Operadores Binarios ******/

// hago una comparacion que me va a dar un boolean
const a = 2 < 3; // es menor que ...
console.log("a: ", a); // true
const b = 2 > 3; // es mayor que ...
console.log("b: ", b); // false

// IF - ELSE
if (a) { // como es true ejecuta
  console.log("2 es menor a 3");
} else { // si no cumple la condicion, si es false, ejecuta aca
  console.log("2 no es menor a 3");
}
// 2 es menor a 3

const c = 2 +3;
console.log("c es igual a: ", c); // 5

// Comparacion en JavaScript
if( c == "5") {
  console.log("Comparador que no incluye el tipo de dato");
}

if(c === 5) {
  console.log("Comparador estricto, tambien compara el tipo de dato")
}

console.log(typeof c); // number
console.log(Boolean(c)); // true

const d = 0;
console.log(typeof d); // number
console.log(Boolean(d)); // false

const e = "Pepe";
console.log(typeof e); // string
console.log(Boolean(d)); // true

const f = " ";
console.log(typeof f); // string
console.log(Boolean(f)); // true

const g = NaN;
console.log(typeof g); // number
console.log(Boolean(g)); // false
// FALSY -> 0, NAN
// TRUTHY -> numeros positivos y negativos (menos el o), string, cadena vacia (char vacio)

const h = 2;
console.log("h :", h); // h : 2
console.log("casteado con toString : ", h.toString()); // casteado con toString :  2
console.log(typeof h.toString()); // string

const i = 3.14;
console.log("parseo de numero flotante a entero con parseInt: ",parseInt(i)); // 3
console.log("parseo con parseFloat: ",parseFloat(i)); // 3.14

const j = true;
console.log(Number(j)); // 1

const k = false;
console.log(Number(k)); // 0

const l = 20;

if(l === 19) console.log("da 19");
if(l === 20) console.log("da 20");
if(l === 21) console.log("da 21");
// da 20

l === 19 && console.log("che da 19");
l === 20 && console.log("che da 20");
l === 21 && console.log("che da 21");
// che da 20

const val1 = null;
const val2 = undefined;
const val3 = NaN;
const val4 = 1;
const val5 = 2;

// Operador OR
// Es mas esctricto, no toma el NaN
const valOR = val1 || val2 || val3 || val4 || val5;
console.log("valor de valOR: ", valOR); // 1

// Operador Nullish Coalescing
// no es tan estricto, almacena el NaN
const valNC = val1 ?? val2 ?? val3 ?? val4 ?? val5;
console.log("valor de valNC: ", valNC); // NaN

console.log(typeof val1); // object <- null
console.log(Boolean(val1)); // false
console.log(typeof val2); // undefined
console.log(Boolean(val2)); // false
console.log(typeof val3); // number <- NaN
console.log(Boolean(val3)); // false
console.log(typeof val4); // number
console.log(Boolean(val4)); // true
console.log(typeof val5); // number
console.log(Boolean(val5)); // true
