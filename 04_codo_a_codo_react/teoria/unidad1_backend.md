# <img src="https://img.icons8.com/officel/32/000000/react.png"/> SECCIÓN BACK END : Unidad 1

---

## :book:  Temas:

```
- 1 :
¿Que es una base de datos? 
Ventajas y desventajas de una Base de Datos. 
¿Cuál es la diferencia entre una base de datos y una hoja de cálculo?
Tipo de bases de datos
Tipos de Clientes de Base de datos
¿Qué es el software de base de datos?
¿Qué es un sistema de administración de base de datos (DBMS)?
- 2 :
¿Qué es MySQL?
Características
- 3 :
¿Qué es SQL?
Usos
- 4 :
Modelo entidad relación
Cardinalidad
Diagrama Físico (tablas, campos y registros)
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


## ¿Cuál es la diferencia entre una base de datos y una hoja de cálculo?

![image](https://user-images.githubusercontent.com/72580574/205499410-5bddf534-68cb-435e-8bb5-1659c798b491.png)

Las bases de datos y las hojas de cálculo (como Microsoft Excel) son dos formas convenientes de almacenar información. Las principales diferencias entre las dos son:

- Cómo se almacenan y manipulan los datos

- Quién puede acceder a los datos

- Cuántos datos se pueden almacenar

Las hojas de cálculo se diseñaron originalmente para un usuario, y sus características lo reflejan. Son muy buenas para un solo usuario o un pequeño número de usuarios que no necesitan manipular una gran cantidad de datos complicados. Las bases de datos, por otro lado, están diseñadas para contener colecciones mucho más grandes de información organizada, cantidades masivas en ocasiones. Las bases de datos permiten a múltiples usuarios al mismo tiempo acceder y consultar los datos de forma rápida y segura utilizando una lógica y un lenguaje altamente complejos.

 
## Tipo de bases de datos

Hay muchos tipos diferentes de bases de datos. La mejor base de datos para una organización específica depende de cómo la organización pretende utilizar los datos.

- **Bases de datos relacionales**: Las bases de datos relacionales se popularizaron en los años ochenta. Los elementos de una base de datos relacional se organizan como un conjunto de tablas con columnas y filas. La tecnología de base de datos relacional proporciona la manera más eficiente y flexible de acceder a información estructurada.

- **Bases de datos orientadas a objetos**: La información en una base de datos orientada a objetos se representa en forma de objetos, como en la programación orientada a objetos.

- **Bases de datos distribuidas**: Una base de datos distribuida consta de dos o más archivos ubicados en diferentes sitios. La base de datos puede almacenarse en múltiples computadoras, ubicadas en la misma ubicación física o dispersas en diferentes redes.

- **Almacenes de datos**: Un almacén de datos es un tipo de base de datos diseñada específicamente para consultas y análisis rápidos, y funciona como un depósito central de datos.

- **Bases de datos NoSQL**: Una NoSQL, o una base de datos no relacional, permite que los datos no estructurados y semiestructurados se almacenen y manipulen, a diferencia de una base de datos relacional, que define cómo deben componerse todos los datos insertados en la base de datos. Las bases de datos NoSQL se hicieron populares a medida que las aplicaciones web se hacían más comunes y más complejas.

- **Bases de datos orientadas a grafos**: Una base de datos orientada a grafos almacena datos en términos de entidades y las relaciones entre entidades.

- **Bases de datos OLTP**: Una base de datos OLTP es una base de datos analítica y rápida diseñada para un gran número de transacciones realizadas por múltiples usuarios.

## Tipos de Clientes de Base de datos

- **Cliente CLI (Command Line Interface)**: Es un cliente que interactúa con la base de datos mediante el uso de la consola:

![image](https://user-images.githubusercontent.com/72580574/205499560-9e5b9c2f-7461-4c0e-a45c-285a7955cd7c.png)

- **Cliente GUI (graphical user interface)**: Es un cliente que interactúa con la base de datos mediante el uso de una aplicación gráfica. Por ejemplo: workbench.

![image](https://user-images.githubusercontent.com/72580574/205499577-639d74ce-f20c-4119-ad3d-20e221f2d0a2.png)

- **Cliente Web**: Es un cliente que interactúa con la base de datos a través de una página web mediante el uso de un navegador. Por ejemplo: phpMyAdmin


## ¿Qué es el software de base de datos?

El software de base de datos se utiliza para crear, editar y mantener archivos y registros de bases de datos, lo que facilita la creación de archivos y registros, la entrada de datos, la edición de datos, las actualizaciones y los informes. El software también se encarga del almacenamiento de datos, las copias de seguridad y los informes, el control de acceso múltiple y la seguridad. La sólida seguridad de las bases de datos es especialmente importante hoy en día, ya que el robo de información se vuelve más frecuente. En ocasiones, el software de base de datos también se denomina "sistema de administración de bases de datos" (DBMS).

El software de base de datos simplifica la gestión de la información al permitirles a los usuarios almacenar datos en una forma estructurada y luego, acceder a ellos. Por lo general, tiene una interfaz gráfica para ayudar a crear y administrar los datos y, en algunos casos, los usuarios pueden crear sus propias bases de datos mediante el software de base de datos.

## ¿Qué es un sistema de administración de base de datos (DBMS)?

Una base de datos generalmente requiere un programa completo de software de base de datos, que se conoce como sistema de administración de bases de datos (DBMS). Un DBMS sirve como una interfaz entre la base de datos y sus usuarios o programas finales, lo que permite a los usuarios recuperar, actualizar y administrar cómo se organiza y optimiza la información. Un DBMS también facilita la supervisión y el control de las bases de datos, lo que permite una variedad de operaciones administrativas, como la supervisión del rendimiento, el ajuste, las copias de seguridad y la recuperación.

Algunos ejemplos de software de bases de datos o DBMS populares incluyen MySQL, Microsoft Access, Microsoft SQL Server, FileMaker Pro, Oracle Database y dBASE.

![image](https://user-images.githubusercontent.com/72580574/205499701-b70f34d4-7fe5-41d4-8ce9-aecf6159dfd4.png)

MySQL es el DBMS detrás de algunos de los mejores sitios web y aplicaciones basadas en la web del mundo, incluyendo Airbnb, Uber, LinkedIn, Facebook, Twitter y YouTube.

Uso de bases de datos para mejorar el rendimiento empresarial y la toma de decisiones

Con la recopilación masiva de datos del Internet of Things, que transforma la vida y la industria en todo el mundo, las empresas hoy en día tienen acceso a más datos que nunca. Las organizaciones con visión de futuro ahora pueden usar bases de datos para ir más allá del almacenamiento de datos básicos y las transacciones para analizar grandes cantidades de datos de múltiples sistemas. Mediante el uso de bases de datos y otras herramientas informáticas y de inteligencia empresarial, las organizaciones ahora pueden aprovechar los datos que recopilan para ejecutar de manera más eficiente, permitir una mejor toma de decisiones y volverse más ágiles y escalables.

La base de datos independiente está lista para proporcionar un impulso significativo a estas capacidades. Debido a que las bases de datos independientes automatizan procesos manuales costosos y prolongados, liberan a los usuarios comerciales para que sean más proactivos con sus datos. Al tener un control directo sobre la capacidad de crear y usar bases de datos, los usuarios obtienen control y autonomía mientras mantienen importantes estándares de seguridad.


---

## :star:  2 - ¿Qué es MySQL?

![image](https://user-images.githubusercontent.com/72580574/205499739-41991e48-3615-4532-a9cc-afd4a74e9435.png)


MySQL es un sistema de gestión de bases de datos relacionales de código abierto basado en SQL. Fue diseñado y optimizado para aplicaciones web y puede ejecutarse en cualquier plataforma. A medida que surgían nuevos y diferentes requisitos con Internet, MySQL se convirtió en la plataforma elegida por los desarrolladores web y las aplicaciones basadas en la web. Debido a que está diseñada para procesar millones de consultas y miles de transacciones, MySQL es una opción popular para las empresas de comercio electrónico que necesitan administrar múltiples transferencias de dinero. La flexibilidad bajo demanda es la característica principal de MySQL.

## Características

Veamos cuáles son algunas de las principales características de MySQL que han hecho que se convierta en uno de los sistemas de bases de datos que más se utilizan en todo el mundo.

- **Es gratuito**: sin dudas un punto importantísimo. Si bien MySQL al día de hoy es un software propiedad de Oracle, esta empresa aún tiene disponible para el público general la versión gratuita de MySQL, la cual puede ser descargada por quien desee hacerlo. También se ofrece una versión de pago, aunque el uso de la misma es extremadamente reducido.

- **Es multiplataforma**: otra gran característica de MySQL que ha permitido que sea tan popular es su compatibilidad con muchos sistemas operativos, ya que funciona perfectamente en Solaris, FreeBSD, Linux, Mac OS y Windows, así que prácticamente cualquier computadora puede correrlo.

- **Interfaz gráfica**: si bien MySQL puede ser usado mediante una consola en cualquier sistema operativo, a menudo se prefiere darle uso por medio de una interfaz gráfica, ya que las mismas suelen facilitar diversas tareas, ya que dadas las características de las bases de datos no siempre es sencillo operar en ellas. En el caso particular de MySQL se dispone de excelentes interfaces como por ejemplo MySQL Workbench, phpMyAdmin entre varios otros.

- **Motores**: MySQL es compatible con casi una docena de motores de almacenamiento, sin embargo, por lo general la mayoría de las personas solo usan dos, los cuales son InnoDB y MyISAM.

- **Respaldos**: por defecto MySQL incluye un sistema de respaldo de bases de datos que se conoce como mysqldump. Esta herramienta es utilizada para crear una copia comprimida de una base de datos, y posteriormente dicha copia puede ser utilizada para volver a crear la base de datos en cuestión en caso de que la misma tenga algún problema, pérdida de datos, etc.

- **Arquitectura multihilo**: gracias a su arquitectura multihilo, MySQL nos brinda la posibilidad de que varios usuarios puedan acceder a los datos almacenados de forma simultánea. Si esto no fuera posible no hay duda que este gestor no sería ni la décima parte de lo popular que es hoy en día.

- **Privilegios**: para acceder a las bases de datos y escribir, ver, borrar o modificar el contenido de las mismas se requiere de ciertos privilegios. En MySQL podemos crear usuarios y darle los privilegios que deseemos según las tareas que los mismos necesiten ejecutar dentro de las bases de datos.

---

## :star:  3 - ¿Qué es SQL?

### ¿Qué es el lenguaje de consulta estructurado (SQL)?

SQL (Structured Query Language) es un lenguaje de programación usado por casi todas las bases de datos relacionales para consultar, manipular y definir datos, y para proporcionar control de acceso. SQL se desarrolló por primera vez en IBM en la década de 1970 con Oracle como uno de los principales contribuyentes, lo que llevó a la implementación del estándar ANSI de SQL. SQL ha generado muchas extensiones por parte de compañías como IBM, Oracle y Microsoft. Aunque SQL todavía se usa ampliamente en la actualidad, comienzan a aparecer nuevos lenguajes de programación.

### Usos

SQL es utilizado habitualmente no solo por los administradores de bases de datos, sino también por los desarrolladores que escriben scripts de integración de datos y por los analistas de datos que desean configurar y ejecutar consultas analíticas.

Los usos de SQL incluyen la modificación de las estructuras de tablas e índices de las bases de datos; la adición, actualización y eliminación de filas de datos; y la recuperación de subconjuntos de información de una base de datos para el procesamiento de transacciones y aplicaciones. Las consultas y otras operaciones SQL adoptan la forma de comandos escritos en forma de sentencias: las sentencias SQL más utilizadas son select, add, insert, update, delete, create, alter y truncate.

![image](https://user-images.githubusercontent.com/72580574/205499893-fe0beda6-957d-431e-830a-c7f2b6de3c94.png)


---

## :star:  4 - Modelo entidad relación

El modelo entidad relación es un concepto para diseñar Base de datos que posteriormente serán implementadas a través de un SGBD (MySql). Este modelo se representa a través de diagramas y está formado por varios elementos, de los cuales el principal es la entidad. El tipo de diagrama utilizado para realizar el modelado Entidad-Relación es el DER (Diagrama Entidad Relación), el cual pertenece al lenguaje de modelado universal (UML: Universal Modeling Languaje)

Se define una entidad (o instancia) como una unidad de una base de datos que contiene información. Esta unidad es una representación dentro de la base de datos de un objeto, persona, empresa... etc, que puede ser real o abstracto, y como tal posee ciertos atributos que la diferencian del resto de entidades. Así, por ejemplo, en una base de datos de un establecimiento educativo, una entidad podría ser los alumnos, otra las materias, otra los profesores. Cada una de estas entidades tendría ciertos atributos propios. Así, los alumnos tendrían atributos como nombre, edad, apellido.

## Entidades

Los atributos definen o identifican las características propias y por lo general únicas de una entidad

##  Entidad + atributos

En una base de datos compleja pueden existir entidades relacionadas entre sí por diversos parámetros o atributos, de tal modo que la existencia de una puede ir ligada a la existencia de otra. Así, las entidades pueden ser fuertes (existen por si mismas) o débiles (su existencia depende de que exista otra entidad). Las relaciones entre entidades suelen describirse en el esquema de la estructura de la base de datos e incluso pueden agruparse entre sí para formar conjuntos de entidades.

El modelo Entidad-Relación es de hecho uno de los más importantes a la hora de diseñar e implementar una base de datos con éxito. Mediante este modelo se relacionan una o varias entidades por sus atributos, que pueden ser comunes o no a varias de ellas.

### Cardinalidad 

Las relaciones tienen una característica denominada cardinalidad, la cual indica el sentido y la cantidad de “relaciones” existentes entre una entidad y otra. Estas pueden ser de los siguientes tipos:

- **Relación uno a muchos (1-n)**: En el siguiente ejemplo se ve que un alumno puede tener muchos autos (n) y a su vez muchos autos pueden ser de un alumno.

 

- **Relación uno a uno (1-1)**: En el siguiente ejemplo se ve que un alumno puede tener una sola libreta, y esa libreta puede pertenecer a ese único alumno.

 

- **Relación muchos a muchos (n-n)**: En el siguiente ejemplo se ve que un alumno puede estar asignada a muchas materias, y las materias pueden tener muchos alumnos.

 

El siguiente diagrama permite entender de forma rápida y sencilla todas las tablas de nuestra base de datos.

![image](https://user-images.githubusercontent.com/72580574/205500038-28c7ebdb-e6df-44c5-b88e-3e9f24c08863.png)

## Diagrama Físico (tablas, campos y registros)


Una tabla es una colección de datos con la misma estructura. Si se disponen los datos en una columna, esa columna siempre tiene el mismo tipo de datos, por ejemplo, un número de documento, un nombre, etc.


Cada tabla consta, si vamos a relacionarlo con el tema anterior podemos decir que una tabla es una entidad, de un cierto número de campos, en cada uno de los cuales se guarda un dato, que puede ser numérico, alfanumérico, fecha, etc.

Un **campo** es cada una de las columnas de la tabla y el nombre de la columna es el nombre del campo, relacionándolo con el tema anterior, un campo es un atributo.

Un **registro** es cada una de las filas de la tabla, y está formado por el dato de cada uno de los campos almacenados en una misma operación.

![image](https://user-images.githubusercontent.com/72580574/205500082-4b189181-ce63-450c-b1dd-00ffd8a82d06.png)



---

## :star: 5 - Tipos de datos MySQL


---

## :star:  6 - Componentes SQL


---

## :star:  7 -  Trabajar con varias tablas

---
