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

/*********** Promesas ***********/
/*
JavaScript trabaja de modo single threat, es un solo hilo.
Se va poniendo todo en un event loop (una rueda que va girando y va  air manejando los eventos). Si este event loop esta lleno la tarea va a la queue y va a ir fijandose cuando tengo lugar el event loop y al tener lugar pasa.
*/
let promesa = (respuesta => {
  return new Promise(function (resuelta, rechazada) {
    if(respuesta) {
      resuelta("Promesa resuelta")
    } else {
      rechazada("promesa rechazada")
    }
  })
})
// si el valor que recibe es true -> Promesa resuelta
// si el valor que recibe es false -> Promesa rechazada
console.log("Promesa con true: ", promesa(true)); // Promesa con true:  Promise { 'Promesa resuelta' }
/*
console.log("Promesa con false: ", promesa(false)); 
// Promesa con false:  Promise { <rejected> 'promesa rechazada' }
*/
promesa = (respuesta) => new Promise((resolve, reject) => {
  setTimeout(() => {
    respuesta
      ? resolve("Promesa resuelta")
      :reject("Promesa rechazada")
  })
});
console.log("Promesa con true: ", promesa(true)); 
// Promesa con true:  Promise { <pending> }
// asi con el setTimeout simulamos esta espera

/******** .then() .cath() .finally() ********/
// Vamos a resolver la promesa con el then , catch y finally
// El finally se ejecuta siempre, tenga error o no
promesa(true)
  .then(rta => console.log(rta))
  .catch(err => console.log(err))
  .finally(() => console.log("Finalizado"))
// si recibe true -> Promesa resuelta
// si recibe false -> Promesa rechazada

/******  .fetch() .then() *******/
// acemos una llamada a la poke API
fetch("https://pokeapi.co/api/v2/pokemon/haunter")
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    const img = document.getElementById("pokemon");
    img.src=`${data.sprites.front_default}`;
  })

/****** async - await ******/
async function dameMiPokemon(poke) {
  try {
    const promesa = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const pokemon = await promesa.json();
    const sprites = pokemon.sprites.front_default;
    // console.log("Los datos de mi pokemon: ", pokemon);
    //console.log("Ruta del sprite :", sprites);
    const imagen = document.createElement("img")
    imagen.src = sprites;
    imagen.width = 300;
    imagen.alt="pokemon";
    document.getElementById("pokemones3").append(imagen);
  } catch(error) {
    console.log("Hubo un error: ", error);
  }
}

dameMiPokemon("farfetchd");
