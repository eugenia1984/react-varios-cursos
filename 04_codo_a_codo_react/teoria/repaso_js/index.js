// variables
let a = 1;
let b = 'abc';
const c = true;

console.log(`La variable a : ${a}`);
console.log(`La variable b: ${b}`);
console.log(`La variable c que es constante: ${c}`);

// Array
let array = [1, 2, 'a', 'b', true];
console.log(`El valor del primer elemento del array es: array[0]`); // 1
console.log(`El valor del segundo elemento del array es: array[1]`); // 2

// Objeto
let objeto = {
  posicion_a: 1,
  posicion_b: 2,
  posicion_c: 3,
  posicion_d: 'a',
  posicion_e: 'b',
  posicion_f: true
}

console.log(`Valor objeto posicion_a: ${objeto.posicion_a}`);
console.log(`Valor objeto posicion_b: ${objeto.posicion_b}`);

// Clases
// Con # declaramos una clase privada
class Objeto1 {
  #forma;
  constructor(apodo, edad) { // constructor
    this.apodo = apodo; // atributos
    this.edad = edad;
    this.color = 'verde';
    this.#forma = 'cuadrado';
  }

  metodo() { // metodo de la clase
    console.log(this.#forma);
  }
}

let clase = new Objeto1('Pepe', 24);

console.log(clase);

clase.metodo();

// Funciones
function funcion1() { // funcion sin parametros
  return "hola"; // que tiene retorno
}
console.log(funcion1()); // Invoco la funcion y por consola veo: 'Hola'
let laFuncion = funcion1(); // la guardo en una variable
console.log(`La funcion funcion1 me devuelve: ${laFuncion}`);

function funcion2(nombre) { // funcion con parametro
  console.log(`Hola ${nombre}`)
}
funcion2('Juan'); // invoco a mi funcion2

const funcion3 = function(color) {
  return color;
}
console.log(funcion3('verde')); // verde

// Arrow function
const funcion4 = (edad) => {
  return edad;
}
console.log(funcion4(30)); // 30

function funcion5(...args) {
  console.log(args);
}
funcion4([1, 2, 3, 4])

// funcion autoinvocada
/*
( () => {
  console.log("Soy una funcion autoinvocada");
})(); // si no tengo el ; tengo errores
*/

// Desestructuracion
const { posicion_a, posicion_b} = objeto;
console.log(posicion_a); // 1
console.log(posicion_b); // 2

function funcion6(posicion_a, posicion_b) {
  console.log(posicion_a);
  console.log(posicion_b);
}

function funcion7(object) {
  const { posicion_a, posicion_b} = object
  console.log(posicion_a);
  console.log(posicion_b);
}

funcion6(objeto);

// Math y sus metodos
let num1 = 5.5;
console.log(Math.floor(num1));
console.log(Math.round(num1));
// .random() para crear cosas aleatorias, por ejemplo los colores
let random = Math.random();
console.log(random);
let entero = Math.floor( random * 255);
console.log(entero);
console.log(`rgb(${entero}, ${entero}, ${entero})`); // para crear un color
const max = 10;
const min = 5;
const numero = Math.random() * (max - min) * min;
console.log(numero);

const PI = Math.PI;
console.log(`PI : ${PI}`);