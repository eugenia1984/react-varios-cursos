const d = document;
const nombre = d.getElementById("nombre"); 
const apellido = d.getElementById("apellido"); 
const email = d.getElementById("email"); 
const boton = d.getElementById("boton"); 

// en el navegador, inspeccionando, en Application tengo STORAGE > Local Storage y Session Storage
// Si cierro el navegador y lo vuelvo a abrir lo de LocalStorae se sigue guardando en cambio el LovalStorage se pierde

boton.addEventListener("click", function(evento) {
  evento.preventDefault();
  sessionStorage.setItem("nombrecin", nombre.value);
  alert("Session Storage almacenado");
  localStorage.setItem("apellidito", apellido.value);
  alert("Local Storage guardado");
});

const nombreGuardado = sessionStorage.getItem("nombrecin");
const apellidoGuardado = sessionStorage.getItem("apellidito");

if(apellidoGuardado) {
  email.value = `${apellidoGuardado.toLocaleLowerCase()}@gmail.com`;
}
