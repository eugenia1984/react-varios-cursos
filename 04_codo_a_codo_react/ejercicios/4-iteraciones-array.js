/**** Iteraciones arrays ****/
const array = [1, 2, 3, 4, 5, 6];
console.log("array :", array); // array : [ 1, 2, 3, 4, 5, 6 ]

// Iteramos con el FOR
console.log("Iteramos el array con el FOR")
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
  
}
/*
1
2
3
4
5
6
*/

// Iteramos el array con el FOR IN
console.log("Iteramos el array con el FOR IN");
for (let value in array) {
  console.log(value);
}
/*
0
1
2
3
4
5
*/

// Iteramos el array con FOR OF
console.log("Iteramos el array con FOR OF");
for (let valor of array) {
  console.log(valor);
}
/*
1
2
3
4
5
6
*/

// Iteramos el array con el WHILE
console.log("Iteramos el array con el WHILE");
// con el WHILE 1ro ve si cumple la condicion, si la cumple ejecuta el bucle
let i = 0;
while(i < 10) {
  console.log(i);
  i++;
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
console.log("Iteramos con el DO WHILE")
// A difernecia del WHILE, el DO WHILE primero ejecuta y luego evalua la condicion
// Entonces si no se cumple la condicion se ejecuta al menos una vez
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
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
// Iteramos ocn el SWITCH
// debo siempre tener el break, para que al llegar a la coincidencia sale de la iteracion y no evalua las otras opciones
console.log("Iteramos ocn el SWITCH");
i = "b";
switch (i) {
  case "a":
    console.log("Soy una A");
    break;
  case "b":
    console.log("Soy una B");
    break  
  default:
    console.log("No soy A ni B");
    break;
}
// Soy una B