/********* setTimeout y setInterval **********/
/*
-Cuando trabajamos con el FrontEnd trabajamos del lado del cliente con JavaScript y nos comunicamos con el servidor, pero tenemos que esperar los pedidos que nos a a devolver el servidor o la API.
-JavaScript trabaja de manera imperativa (de arriba hacia abajo).
-Hacemos un mock, porque el BackEnd todavia no esta finalizado, entonces se trabaja con un array de objetos, por ejemplo.
- Con el setTimeout vamos a simular esa "espera". Recibe dos params, el 1ro es la funcion a ejecuta y el 2do es el timepo de espera(esta en milisegundos).
*/
setTimeout(() => {
  console.log("Soy el mensaje desde el setTimeout");
},5000);

/*
- Otro modo de simularlo es con el setInterval, la diferencia es que el setTimeout se ejecuta una sola vez y el setInterval si no le pongo condicion se ejecuta infinitamente.
Ejemplo de codigo:
setInterval(() => {
  console.log("Soy el mensaje desde el setInterval");
},2000);
*/
