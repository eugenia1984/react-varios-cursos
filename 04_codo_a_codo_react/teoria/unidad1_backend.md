# <img src="https://img.icons8.com/officel/32/000000/react.png"/> SECCIÓN BACK END : Unidad 1

---

## :book:  Temas:

```
- 1 - ¿Que es una base de datos? Ventajas y desventajas de una Base de Datos. ¿Cuál es la diferencia entre una base de datos y una hoja de cálculo?
- 2 - ¿Qué es MySQL?
- 3 - ¿Qué es SQL?
- 4 - Modelo entidad relación
- 5 - Tipos de datos MySQL
- 6 - Componentes SQL
- 7 -  Trabajar con varias tablas
```

---

## :star: 1 - Que es una base de datos

Una base de datos es **una colección organizada de información estructurada, o datos, típicamente almacenados en un sistema de computadora**. Una base de datos es usualmente controlada por un sistema de gestión de base de datos (**DBMS**). En conjunto, los datos y el DBMS, junto con las aplicaciones que están asociados con ellos, se conocen como un **sistema de base de datos**, que a menudo se reducen a solo base de datos.

## Ejemplos de base de datos

Algunos ejemplos posibles de bases de datos a lo largo de la historia son:

- **Guías telefónicas**: Aunque en desuso, estos voluminosos libros solían contener miles de números telefónicos asignados a hogares, empresas y particulares, para permitir al usuario dar con el que necesitaba. Eran engorrosos, pesados, pero completos.

- **Archivos personales**: El conjunto de los escritos de vida de un autor, investigador o intelectual a menudo son preservados en un archivo, que se organiza en base a la preservación y reproducción de los originales, permitiendo su consulta sin poner en riesgo el documento original.

- **Bibliotecas públicas**: El perfecto ejemplo de bases de datos, pues contienen miles o cientos de miles de registros pertenecientes a cada título de libro disponible para su préstamo, ya sea en sala o circulante, y del que puede haber más de un mismo ejemplar en el depósito. Los bibliotecólogos se encargan de diseñar estos sistemas y velar por su funcionamiento.

- **Registros de transacciones**:  Las operaciones realizadas con una tarjeta de crédito, así como las llamadas realizadas con un celular, u otro tipo de transacciones comerciales cotidianas, generan todo un conjunto de registros que van a dar a una base de datos de la empresa.

- **Historial médico**: Cada vez que acudimos al doctor o a un hospital, se actualiza la información respecto a nuestra salud, al tratamiento recibido y demás detalles médicos en un archivo que lleva registro de nuestra historia médica, en caso de que a futuro se requiera conocer datos específicos, como operaciones o tratamientos recibidos.

Los datos dentro de los tipos más comunes de bases de datos en funcionamiento hoy en día se modelan típicamente en **filas** y **columnas** en una serie de **tablas** para que el procesamiento y la consulta de datos sean eficientes. Luego se puede **acceder(READ)**,  **administrar**, **modificar**, **actualizar(UPDATE)**, **controlar** y **organizar** fácilmente los datos. La mayoría de las bases de datos utilizan lenguaje de **consulta estructurado (SQL)** para escribir y consultar datos.


## Ventajas de las bases de datos

1. **Control sobre la redundancia de datos**: Los sistemas de ficheros almacenan varias copias de los mismos datos en ficheros distintos. Esto hace que se desperdicie espacio de almacenamiento, además de provocar la falta de consistencia de datos.

En los sistemas de bases de datos todos estos ficheros están integrados, por lo que no se almacenan varias copias de los mismos datos. Sin embargo, en una base de datos no se puede eliminar la redundancia completamente, ya que en ocasiones es necesaria para modelar las relaciones entre los datos.

2. **Consistencia de datos**: Eliminando o controlando las redundancias de datos se reduce en gran medida el riesgo de que haya inconsistencias. Si un dato está almacenado una sola vez, cualquier actualización se debe realizar sólo una vez, y está disponible para todos los usuarios inmediatamente. Si un dato está duplicado y el sistema conoce esta redundancia, el propio sistema puede encargarse de garantizar que todas las copias se mantienen consistentes.

3. **Compartir datos**: En los sistemas de ficheros, los ficheros pertenecen a las personas o a los departamentos que los utilizan. Pero en los sistemas de bases de datos, la base de datos pertenece a la empresa y puede ser compartida por todos los usuarios que estén autorizados.

4. **Mantenimiento de estándares**: Gracias a la integración es más fácil respetar los estándares necesarios, tanto los establecidos a nivel de la empresa como los nacionales e internacionales. Estos estándares pueden establecerse sobre el formato de los datos para facilitar su intercambio, pueden ser estándares de documentación, procedimientos de actualización y también reglas de acceso.

5. **Mejora en la integridad de datos**: La integridad de la base de datos se refiere a la validez y la consistencia de los datos almacenados. Normalmente, la integridad se expresa mediante restricciones o reglas que no se pueden violar. Estas restricciones se pueden aplicar tanto a los datos, como a sus relaciones, y es el SGBD quien se debe encargar de mantenerlas.

6. **Mejora en la seguridad**: La seguridad de la base de datos es la protección de la base de datos frente a usuarios no autorizados. Sin unas buenas medidas de seguridad, la integración de datos en los sistemas de bases de datos hace que éstos sean más vulnerables que en los sistemas de ficheros.

 
7. **Mejora en la accesibilidad a los datos**: Muchos SGBD proporcionan lenguajes de consultas o generadores de informes que permiten al usuario hacer cualquier tipo de consulta sobre los datos, sin que sea necesario que un programador escriba una aplicación que realice tal tarea.

8. **Mejora en la productividad**: El SGBD proporciona muchas de las funciones estándar que el programador necesita escribir en un sistema de ficheros. A nivel básico, el SGBD proporciona todas las rutinas de manejo de ficheros típicas de los programas de aplicación.

El hecho de disponer de estas funciones permite al programador centrarse mejor en la función específica requerida por los usuarios, sin tener que preocuparse de los detalles de implementación de bajo nivel.

9. **Mejora en el mantenimiento**: En los sistemas de ficheros, las descripciones de los datos se encuentran inmersas en los programas de aplicación que los manejan.

Esto hace que los programas sean dependientes de los datos, de modo que un cambio en su estructura, o un cambio en el modo en que se almacena en disco, requiere cambios importantes en los programas cuyos datos se ven afectados.

Sin embargo, los SGBD separan las descripciones de los datos de las aplicaciones. Esto es lo que se conoce como independencia de datos, gracias a la cual se simplifica el mantenimiento de las aplicaciones que acceden a la base de datos.

10. **Aumento de la concurrencia**: En algunos sistemas de ficheros, si hay varios usuarios que pueden acceder simultáneamente a un mismo fichero, es posible que el acceso interfiera entre ellos de modo que se pierda información o se pierda la integridad. La mayoría de los SGBD gestionan el acceso concurrente a la base de datos y garantizan que no ocurran problemas de este tipo.

11. **Mejora en los servicios de copias de seguridad**:Muchos sistemas de ficheros dejan que sea el usuario quien proporcione las medidas necesarias para proteger los datos ante fallos en el sistema o en las aplicaciones. Los usuarios tienen que hacer copias de seguridad cada día, y si se produce algún fallo, utilizar estas copias para restaurarlos.

En este caso, todo el trabajo realizado sobre los datos desde que se hizo la última copia de seguridad se pierde y se tiene que volver a realizar. Sin embargo, los SGBD actuales funcionan de modo que se minimiza la cantidad de trabajo perdido cuando se produce un fallo.

## Desventajas de las bases de datos

1. **Complejidad**: Los SGBD son conjuntos de programas que pueden llegar a ser complejos con una gran funcionalidad. Es preciso comprender muy bien esta funcionalidad para poder realizar un buen uso de ellos.

 

2. **Coste del equipamiento adicional**: Tanto el SGBD, como la propia base de datos, pueden hacer que sea necesario adquirir más espacio de almacenamiento. Además, para alcanzar las prestaciones deseadas, es posible que sea necesario adquirir una máquina más grande o una máquina que se dedique solamente al SGBD. Todo esto hará que la implantación de un sistema de bases de datos sea más cara.

3. **Vulnerable a los fallos**: El hecho de que todo esté centralizado en el SGBD hace que el sistema sea más vulnerable ante los fallos que puedan producirse. Es por ello que deben tenerse copias de seguridad (Backup).

---

## :star:  2 - ¿Qué es MySQL?


---

## :star:  3 - ¿Qué es SQL?


---

## :star:  4 - Modelo entidad relación


---

## :star: 5 - Tipos de datos MySQL


---

## :star:  6 - Componentes SQL


---

## :star:  7 -  Trabajar con varias tablas

---
