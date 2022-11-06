# :star2: APIS * Unidad 2

---

 

COMO: Usuario administrador
QUIERO: Crear o editar un Proyectos existente
PARA: Gestionar el contenido de forma dinámica

Contendrá los campos title, description, image y due_date. 

Form reutilizable edición/creación. Recibir un objeto de forma condicional, y form de creación/ edición. En el caso de no recibir el objeto como propiedad, deberá hacer POST a /projects/create. De recibirlo, completar el form con los campos y petición PATCH a /projects/:id). En bo creación/edición.


Validaciones:
Los campos title, description e image son obligatorios
Imagen deberá tener formato .png o .jpg
Si se completa el campo due_date, deberá ser una fecha


