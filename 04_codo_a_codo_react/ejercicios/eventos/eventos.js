/***** Eventos ******/
// agarro cada elemeto del formulario
const d = document;
const boton = d.getElementById("boton");
const nombre = d.querySelector("#nombre");
const apellido = d.getElementById("apellido");
const email = d.getElementById("email");
const edad = d.getElementById("edad");
const direccion = d.getElementById("address");

// Modifico el DOM con eventos
// evento oncLick para cuando hago click en el boton
// e es el EVENTO
boton.onclick = (e) => {
  // para prevenir la accion que tiene por defecto que es el submit
  e.preventDefault(); 
  console.log("Me hiciste click ", nombre.value);
}

function fullLoaded() {
  alert("Ya se cargo el DOM");
}
// con el addEventListener voy a tener 2 params:
// param1: que evento voy a estar escuchando
// param2: la funcion que voy a ejecutar
// d.addEventListener("DOMContentLoaded", fullLoaded);

function funcionApellido(e) {
  console.log(e.target.value); // para agarrar el valor
  // al boton le voy a remover algunas clases
  boton.classList.remove("btn-secondary", "text-white"); 
  // Y le voy a agregar otras clases
  boton.classList.add("btn-warning", "text-black");
}
d.addEventListener("change", funcionApellido);

email.addEventListener("keyup", (e) => {
  console.log(e.target.value);
})
edad.addEventListener("click", function() {
  apellido.removeEventListener("change", funcionApellido);
  direccion.addEventListener("click", function(e) {
    e.target.value = "Siempre viva 123";
  });
});

// con el evento onsubmit usariamos:
//  boton.onsubmit
// d.addEventListener("submit");
