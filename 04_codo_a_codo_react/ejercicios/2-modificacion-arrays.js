/***** Modificacion arrays *****/
const array =  [1, 3, 3];
console.log("valores del array: ", array); //valores del array:  [ 1, 3, 3 ]
// Quiero copiar sus items en otra variable
// 1ra forma: asignando a una variable nueva mi array
const array2 = array;
console.log("valores del array2: ", array2); //  valores del array2:  [ 1, 3, 3 ]
// 2da forma: le agrego un nuevo elemento a mi array
array[3] = 4;
console.log("Mi array modificado: ", array); // Mi array modificado:  [ 1, 3, 3, 4 ]
// Pero OJO porque de este modo voy a modificar tambien a array1
console.log("Mi array2 tambien se modifico: ", array2); // Mi array2 tambien se modifico:  [ 1, 3, 3, 4 ]
// 3er forma: con spread operator
const srraySpread = [...array];
console.log("array con spread operator: ", srraySpread); // array con spread operator:  [ 1, 3, 3, 4 ]

// Metodos que modifican el array
// push() agrega un item al final
array.push(5);
console.log("array con push(): ", array); // array con push():  [ 1, 3, 3, 4, 5 ]
// Pero cuando trabajemos con React NO queremos que se nos modfiiquen los arrays por eso vamos a utilizar los metodos que NO modifican el array 
const array3 = [1, 2, 3, 4, 5, 6];
console.log("array3: ", array3);
// con SLICE - copia el array sin modificarlo -
// recibe 2 params : 
// - param1: desde que lugar comienza a extraer los datos
// - param2: donde se frena (no lo incluye)
const slice = array3.slice(2, 4); // array3:  [ 1, 2, 3, 4, 5, 6 ]
console.log("slice: ", slice); // slice:  [ 3, 4 ]

// Con SPLICE - muta el array - 
// recibe 2 params : 
// - param1: desde que lugar comienza a extraer los datos
// - param2: cuantos valores voy a retirar
const splice = array3.splice(2, 1);
console.log("Splice: ", splice); // Splice:  [ 3 ]
console.log("array3 luego de slice : ", array3); // array3 luego de slice :  [ 1, 2, 4, 5, 6 ]
