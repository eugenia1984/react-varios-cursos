/*** Modificacion Objetos ***/
const objeto = { a:1, b:2, c:3};
console.log("objeto: ", objeto); // objeto:  { a: 1, b: 2, c: 3 }
const objetoCopia = objeto;
console.log("objetoCopia: ", objetoCopia); // objetoCopia:  { a: 1, b: 2, c: 3 }
// vemos los value de las keys
console.log("Valor de la key a del objeto :", objeto.a); // 1
console.log("valor de la key b del objeto: ", objeto["b"]);  // 2

// agregamos valores a un objeto
objeto.d = 4;
console.log("objeto con nueva key-value : ", objeto); // objeto con nueva key-value :  { a: 1, b: 2, c: 3, d: 4 }
// Tengo el mismo problema que con lso arrays, me modifica a mi objeto original
console.log("objetoCopia :", objetoCopia); // objetoCopia : { a: 1, b: 2, c: 3, d: 4 }

// Modificamos con el Spread Operator para no mutar el objeto original
const objetoSpread = { ...objeto}
console.log("objetoSpread :", objetoSpread); // objetoSpread : { a: 1, b: 2, c: 3, d: 4 }

// Borramos pares key - value del objeto con DELETE
delete objeto.d;
console.log("objeto borrado :" , objeto); // objeto borrado : { a: 1, b: 2, c: 3 }

const objeto2 = {w: true, x:1, y:2, z:"a" };
const objeto3 = Object.assign(objeto, objeto2);
console.log("objeto fusion :", objeto3); // objeto fusion : { a: 1, b: 2, c: 3, w: true, x: 1, y: 2, z: 'a' }