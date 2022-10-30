let objeto = {
  nombre: "Maria Eugenia",
  apellido: "Costa",
  direccion: {
    calle: "Avenida",
    altura: 123,
    vehiculo: true
  }
}

console.log(objeto);
console.log("nombre que figura en objeto: ", objeto.nombre); // nombre que figura en objeto:  Maria Eugenia
/*
{
  nombre: 'Maria Eugenia',
  apellido: 'Costa',
  direccion: { calle: 'Avenida', altura: 123, vehiculo: true }
}
*/

/***** Operaciones con objetos *******/
// para transformarlo en String
objeto = JSON.stringify(objeto);
console.log(objeto);
/*
{"nombre":"Maria Eugenia","apellido":"Costa","direccion":{"calle":"Avenida","altura":123,"vehiculo":true}}
*/
// para volverlo a objeto
objeto = JSON.parse(objeto);
console.log("apellido que figura en objeto: ", objeto.apellido); // apellido que figura en objeto:  Costa

// Dentro del localStorage solo podemos guardar Strings, no podemos guardar arrays ni objetos