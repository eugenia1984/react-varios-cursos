/* Desestructuracion */

// creo el objeto
const objeto = {
  a: 1,
  b: 2,
  c: 3,
  d: "a",
  e: "b",
  f: "c"
}

console.log("valores de objeto: ", objeto); // valores de objeto:  { a: 1, b: 2, c: 3, d: 'a', e: 'b', f: 'c' }
// Desestructuramos un object
// al desestructurar un objeto tenemos las key del objeto
const { a, c, f } = objeto;
console.log(`Desestructuracion: a: ${a}, c: ${c} y f: ${f}`); // Desestructuracion: a: 1, c: 3 y f: c


// Desestructuramos un array
// en los arrays, a difernecia de los objetos no tneemos las key, entonces para desestructurar entre las {} debemos asignarle el nombre a esa nueva variable
const array = [1, 2, 3, "a", "b", "c, true"];
console.log("Valores de array: ",array); // Valores de array: [ 1, 2, 3, 'a', 'b', 'c, true' ]
// como mi array tiene 7 items y solo desestructuro con 3 variables me muestra los 3 primeros
// para saltearme algun valor tengo que poner , , - haciendo un espacio entre comas-
const [valor1, valor2, valor3, , valor5] = array;
console.log(`Desestructuracion de array: valor1: ${valor1}, valor2: ${valor2}, valor3: ${valor3} y valor5: ${valor5}`); // Desestructuracion de array: valor1: 1, valor2: 2 , valor3: 3 y valor5: b
