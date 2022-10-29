/**** Iteraciones de objetos ****/
const objeto = {
  a1: 1,
  b1: 2,
  a2: 3,
  b2: 4
}
// Recorro el objeto con FOR IN
console.log("*** Recorro el objeto con FOR IN *** ");
for (let value in objeto) {
  console.log(value);
}
// Me muestra las keys
/*
a1
b1
a2
b2
*/

// Recorro el objeto con FOR OF
console.log("*** Recorro el objeto con FOR OF *** ");
for([clave, valor] of Object.entries(objeto)) {
  console.log("clave: ", clave, " - valor: ", valor);
}
/*
clave:  a1  - valor:  1
clave:  b1  - valor:  2
clave:  a2  - valor:  3
clave:  b2  - valor:  4
*/

for(clave of Object.keys(objeto)) {
  console.log("clave: ", clave);
}
/*
clave:  a1
clave:  b1
clave:  a2
clave:  b2
*/

for(valor of Object.values(objeto)) {
  console.log("valor: ", valor);
}
/*
valor:  1
valor:  2
valor:  3
valor:  4
*/