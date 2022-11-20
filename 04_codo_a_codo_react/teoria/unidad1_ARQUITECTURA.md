# :star2: ARQUITECTURA * Unidad 1

---

## :book: Temas

```
- 1 - ¿Qué es firestore?
- 2 - Estructura de firestore
- 3 - Crear Base de datos en firebase
```

---

## :star: 1 - ¿Qué es firestore?

![image](https://user-images.githubusercontent.com/72580574/202919469-eff2fd9e-e14b-4af3-9a9f-1018714fd6a3.png)

Firestore es **una base de datos muy flexible y fácil de usar para el desarrollo de móviles, web y servidores**. Si estás familiarizado con la base de datos en tiempo real de Firebase, Firestore tiene muchas similitudes, pero con una API diferente (posiblemente más declarativa).

 

### Obtenga fácilmente datos en tiempo real

Al igual que la base de datos en tiempo real de Firebase, Firestore **proporciona métodos útiles como .onSnapshot(), que hacen que sea muy fácil escuchar las actualizaciones de tus datos en tiempo real**. Esto hace que Firestore sea una opción ideal para los proyectos que dan **prioridad a la visualización y el uso de los datos más recientes (aplicaciones de chat, por ejemplo)**.

### Flexibilidad como base de datos NoSQL

Firestore es una opción muy flexible para backend, porque **es una base de datos NoSQL**. NoSQL significa que **los datos no se almacenan en tablas y columnas como lo haría una base de datos SQL estándar**. Está estructurada **como un almacén de valores clave, como si fuera un gran objeto de JavaScript**.

En otras palabras, **no hay ningún esquema, ni necesidad de describir qué datos almacenará nuestra base de datos. Mientras proporcionemos claves y valores válidos, Firestore los almacenará**.

### Escalable sin esfuerzo

Una de las grandes ventajas de elegir Firestore, para su base de datos es la potente infraestructura sobre la que se asienta y que le **permite escalar su aplicación con gran facilidad. Tanto vertical como horizontalmente**. No importa si tienes cientos o millones de usuarios. Los servidores de Google serán capaces de soportar cualquier carga que les impongas.

En resumen, Firestore es una gran opción para aplicaciones tanto pequeñas como grandes. **Para aplicaciones pequeñas es potente, porque podemos hacer mucho sin mucha configuración y crear proyectos rápidamente con ellos. Firestore es muy adecuado, para proyectos grandes debido a su escalabilidad**.

### Configuración de Firestore en un proyecto JavaScript

Vamos a utilizar el SDK de Firestore para JavaScript. A lo largo de esta hoja de trucos, cubriremos cómo utilizar Firestore dentro del contexto de un proyecto de JavaScript. A pesar de esto, los conceptos que cubriremos aquí son fácilmente transferibles a cualquiera de las librerías cliente de Firestore disponibles.

Para empezar con Firestore, nos dirigiremos a la consola de Firebase. Puedes visitarla yendo a *firebase.google.com*. Tendrás que tener una cuenta de Google para iniciar sesión.


### Caracteristicas:

1. Base de datos de documentos sin servidor que se escala fácilmente para ajustarse a cualquier demanda, sin necesidad de mantenimiento.
 
2. Agiliza el desarrollo de aplicaciones móviles, web y del Internet de las cosas con conectividad directa a la base de datos.
La sincronización en directo integrada y el modo sin conexión facilitan el desarrollo de aplicaciones en tiempo real.
 
3. La seguridad totalmente personalizable y las reglas de validación de datos garantizan que la información esté siempre protegida.
 
4. Se integra a la perfección con Firebase y con servicios de Google Cloud como Cloud Functions y BigQuery.



---

## :star:  2 - Estructura de firestore

### ☑️ Modelo de datos de Cloud Firestore

Cloud Firestore **es una base de datos NoSQL orientada a los documentos**. A diferencia de una base de datos SQL, no hay tablas ni filas; En su lugar, **almacenas los datos en documentos, que se organizan en colecciones**.

Cada **documento** contiene **un conjunto de pares clave-valor**. Cloud Firestore está optimizado para almacenar grandes colecciones de documentos pequeños.

Todos los **documentos** se deben almacenar en **colecciones**, y pueden contener **subcolecciones** y **objetos anidados**. Además, ambos pueden incluir campos primitivos, como strings, o tipos de objetos complejos, como listas.

Las colecciones y los documentos se crean de manera implícita en Cloud Firestore; solo debes asignar datos a un documento dentro de una colección. Si la colección o el documento no existen, Cloud Firestore los crea.

### ☑️ Documentos

En Cloud Firestore, la unidad de almacenamiento es el documento. **Un documento es un registro que usa pocos recursos y contiene campos con valores asignados**. Cada documento se identifica con un nombre.

![image](https://user-images.githubusercontent.com/72580574/202919760-a8b40306-a36d-4e82-b2dc-9ef3bda3550f.png)

### Ejemplo de documento

Un documento que representa a un usuario alovelace puede tener el siguiente aspecto:

```
class alovelace

first : "Ada"
last : "Lovelace"
born : 1815
```

*Nota*: Cloud Firestore es compatible con diversos tipos de datos para los valores, como **booleanos**, **números**, **strings**, **puntos geográficos**, **BLOB binarios** y **marcas de tiempo**. Además, puedes usar **arreglos** u **objetos anidados**, llamados **mapas**, para estructurar datos dentro de un documento.

- Los objetos complejos anidados en un documento se llaman mapas. Por ejemplo, podrías estructurar el nombre del usuario del ejemplo anterior con un mapa como este:

```
class alovelace

name :

first : "Ada"

last : "Lovelace"

born : 1815
```

Tal vez te parezca que los documentos son muy similares a JSON; de hecho, básicamente son JSON. Existen algunas diferencias (por ejemplo, **los documentos admiten tipos de datos adicionales y su tamaño se limita a 1 MB**), pero en general, **puedes tratar los documentos como registros JSON livianos**.


### ☑️ Colecciones

- **Los documentos viven en colecciones, que simplemente son contenedores de documentos**. 

- Por ejemplo, podrías tener una colección llamada **users** con los distintos usuarios de tu app, en la que haya un documento que represente a cada uno:

```
collections_bookmark users
 
class alovelace

first : "Ada"
last : "Lovelace"
born : 1815

 

class aturing

first : "Alan"
last : "Turing"
born : 1912
```
 

**Cloud Firestore no usa esquemas, por lo que tienes libertad total sobre los campos que pones en cada documento y los tipos de datos que almacenas en esos campos. Los documentos dentro de una misma colección pueden contener campos diferentes o almacenar distintos tipos de datos en esos campos**. Sin embargo, **se recomienda usar los mismos campos y tipos de datos en varios documentos, de manera que puedas consultarlos con mayor facilidad**.

- **Una colección contiene solo documentos; no puede contener campos sin procesar con valores de manera directa ni tampoco otras colecciones** (Consulta los datos jerárquicos para ver una explicación sobre cómo estructurar datos más complejos en Cloud Firestore).

- **Los nombres de documentos dentro de una colección son únicos**. Puedes proporcionar tus propias claves, como los ID de usuario, o puedes dejar que Cloud Firestore cree ID aleatorios de forma automática.

- No es necesario "crear" ni "borrar" las colecciones. Cuando se crea el primer documento de una colección, esta pasa a existir. Si borras todos los documentos de una colección, esta deja de existir.


### ☑️ Referencias

Cada documento de Cloud Firestore se identifica de forma única por su ubicación dentro de la base de datos. El ejemplo anterior muestra un documento alovelace en la colección users. Para hacer referencia a esta ubicación en tu código, puedes crear una referencia a ella.

Una referencia es un objeto liviano que simplemente apunta a una ubicación en la base de datos. Puedes crear una referencia sin importar si existen datos ahí, y crearla no ejecuta ninguna operación de red.

 

Nota: Las referencias a colecciones y las referencias a documentos son dos tipos distintos de referencias que permiten ejecutar diferentes operaciones. Por ejemplo, podrías usar una referencia a una colección para consultar los documentos de la colección y podrías usar una referencia a un documento para leer o escribir en un documento individual.


### ☑️ Datos jerárquicos

- Para comprender cómo funcionan las estructuras de datos jerárquicas en Cloud Firestore, considera el siguiente ejemplo de una app de chat con mensajes y salas de chat.

- Puedes crear una colección llamada rooms para almacenar diferentes salas de chat:

 
```
collections_bookmark rooms

class roomA
name : "my chat room"

class roomB
```
 

- Ahora que tienes salas de chat, decide cómo almacenarás los mensajes. Es posible que no quieras almacenarlos en el documento de la sala de chat. Los documentos en Cloud Firestore deben usar pocos recursos, y una sala de chat podría contener muchos mensajes. Sin embargo,** puedes crear colecciones adicionales en el documento de tu sala de chat, como subcolecciones**.

 

### ☑️ Subcolecciones

- La mejor manera de almacenar mensajes en este caso es usar subcolecciones. **Una subcolección es una colección asociada con un documento específico**.

- *Nota*: Puedes realizar consultas en varias subcolecciones que tengan el mismo ID de colección con las consultas a grupos de colecciones.

- Puedes crear una subcolección llamada messages para cada documento de la sala que integra la colección rooms:

```
collections_bookmark rooms

class roomA
name : "my chat room"
 
collections_bookmark messages

class message1
from : "alex"
msg : "Hello World!"

class message
class roomB
```
 

- Las subcolecciones te permiten estructurar datos de forma jerárquica, lo que facilita el acceso a los datos.

- Los documentos de las subcolecciones también pueden contener subcolecciones, lo que te permite anidar datos en más niveles. Puedes anidar datos hasta 100 niveles de profundidad.



---

## :star: 3 - Crear Base de datos en firebase

### Pasos para crear una Base de datos en Firebase

1. Deberemos crear un proyecto
![image](https://user-images.githubusercontent.com/72580574/202920177-dfc085e3-7a27-484b-a22d-b53a6be496db.png)


2.  Nos da la opción de activar Google Analytics
![image](https://user-images.githubusercontent.com/72580574/202920196-475bef93-70b9-4057-b748-4216724f37d0.png)


3. Seleccionamos la cuenta y hacemos click en crear proyecto
![image](https://user-images.githubusercontent.com/72580574/202920200-845b7329-4f78-4d7c-8889-17b88e775506.png)

4.  En el panel podemos acceder a las opciones, cloud Firestore
![image](https://user-images.githubusercontent.com/72580574/202920209-f794efd1-66e6-46a5-b667-52576a6ab2b8.png)

5.  Seleccionamos la opción crear base de datos
![image](https://user-images.githubusercontent.com/72580574/202920212-58412eb0-f0f9-47dc-999e-5ba3e13bc57b.png)

6. Elegimos la opción modo de prueba
![image](https://user-images.githubusercontent.com/72580574/202920220-0f023e27-c0cc-4134-819d-5464a1c22dff.png)

7. Seleccionamos la zona mas próxima de los servidores
![image](https://user-images.githubusercontent.com/72580574/202920226-3fa181f3-6e7b-4dc3-ada9-5661d57d8af0.png)

8. Tenemos listo nuestra base de datos para poder trabajar
![image](https://user-images.githubusercontent.com/72580574/202920240-dad95fd1-5782-45a0-bb13-933656ba4bda.png)





---
