# :star: CLASE 03 - 06 MAR

## :stars:  Vamos a realizar la pagina de Dulces Amaya


Primero vamos a realizar el **PROTOTIPADO** y vamos a realizar el **DIAGRAMA DE FLUJO**.

Tenemos:

- El **HEADER** con el **LOGO** (que tambien va a tener un link el que me va a dejar en la parte del logo-cabecera) y el **NAVBAR** (que tiene los **LINKS INTERNOS** ya que nuestra web es ONEPAGE).

Se puede mejorar la cabecera con un fondo que tenga colos asi se ven bien los links y no se pierden, el logo en general esta hacia la izquierda y hacia la derecha el NavBar. Y hay que hacerlo responsivo, por ejemplo al ver en celular que tengamos el Menu Hamburguesa.

Para no perder el Header al scrolear se puede poner fixed o sino se puede tener abajo a la derecha la flecha hacia arriba para ir al NavBar.


Los links son 

-**Home**, va a ser el sector de la HERO IMAGE con el texto y el CTA, que dice CONCENOS, pero como no tenemos una seccion de Nosotros queda redundante ya que justo la seccion que sigue es la de los productos.

-**Productos**, van a ser los recuadros con los productos, en vez de tenerlos en cajas lo podria tener en un **slider** con las flechas a los costados que me indica que tiene una continuacion, me interactua con el carousel, que me va a mostrar mas productos, y el usuario lo maneja.

La Gestalt habla de la CONTINUIDAD, por eso en el carousel se le pone un pre y un post sobreado, asi el usuario tiene esa sensacion de **continuidad**.

También tiene una parte de **Recetas**, las cuales pueden venir de una base de datos o de una API. -> **Recetas** tendría que ser un nuevo link en el **NavBar** -> Tengo un CTA que me va a crear un Pop Up donde se muestre la receta. Como viene de una bd o una API, va a ser un carousel, y puede tener un paginado si son muchas. Podría tenr la opción de **marcarla como favorito** -> Tendría que tener un **login** o escribirme a un **newsletter** asi los guardamos en la base de datos como **futuro cliente**


-**Locales**

-**Contacto**, va a ser el formulario de contacto, que antes va a tener mi nueva seccion de Conocenos o Nosotros.

- El **FOOTER** con... 

...los links del sitio, es otro modo de que me redirija a las secciones dle sitio, ademas del NavBar.

...las Redes Sociales

...la ubicacion con el mapa

---


![image](https://user-images.githubusercontent.com/72580574/223558555-ed25245a-c6c5-4f61-982a-f0177645c503.png)


---

 ## :stars: Funcionalidades

- Tener el NavBar fijo arriba o si me fui para abajo y no tengo el Navbar fixed puedo tener la flecha para ir hacia arriba.


---

El usuario quiere que **la nevegabilidad sea facil**, scrolea la pagina, no la lee toda.

Debemos hacer un sitio simple atractivo para que el usuario la utilice, interactue y no abandone la web

---

- Estamos aramndo como un **Diagrama de Flujo** de toda la **navegación interna** y sus **funciones**(links internos, links externos, interacciones como los CTA, los botones-que hacen, que despliegan). 

- Y luego analizar itnernamente, por ejemplo el **botón enviar**, al hacer click, ¿qué funcionalidad me da? Una vez que se completa el **form** debe ir a una **base de datos**, la cual debe estar conectada y voy a tener dos casos: envío exitoso o envío fallido(voy a tener un evento y avisarle al usuario que no se envío, debe saber). Además en el mismo form tengo que tener mis **validaciones del front** para que en cada campo que el usuario vaya completando, tengo que ir avisando si manda mal algo para que lo corrija(se ve si se avisa al hacer click en enviar o a medida que va completando cada parte del formulario).

- Por más que tengo un buen diseño, siempre antes hago todo este análisis

---

- **Landing Page** no lleva links.

- **One Page** es una pagina completa con enlaces en la misma web.
 
---
---

## 📋 Tarea

Armar el prototipo de funcionalidad, ya sea a mano, con Figma o con lo que podamos.

---
---

## :star: Diseño Adaptable o Responsive Design

![image](https://user-images.githubusercontent.com/72580574/223559516-0150ee2f-849e-492b-bba9-6c1fe8e67bd9.png)

:tv: Referentes:

- [**Ethan Marcotte**](https://ethanmarcotte.com/)

![image](https://user-images.githubusercontent.com/72580574/223559958-85049dd0-4709-4319-827a-72935641de65.png)


- [**Luke Wroblewski**](Ethan Marcotte http://ethanmarcotte.com/)

De responsive web design hacia **mobile first design**

![image](https://user-images.githubusercontent.com/72580574/223559821-8a9a4aeb-d751-454f-9aac-1a401a493a1f.png)


### Media Queries 

**Media Queries** es un módulo CSS3 que permite la representación de contenido para adaptarse a condiciones como la resolución de pantalla. Se convirtió en un estándar recomendado por la W3C en Junio del 2012. y es un principio básico de la tecnología de Diseño web adaptativo.

[Para ampliar](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)

[http://mediaqueri.es/](http://mediaqueri.es/)

### Framework

Un **framework de CSS** es una **librería de estilos genéricos** que puede ser usada para implementar diseños web. Aportan una serie de utilidades que pueden ser aprovechadas frecuentemente en los distintos diseños web.

- **Foundation**:

-[GRilla de 12 columnas](https://get.foundation/sites/docs-v5/components/grid.html)

-Mobile First

-Responsive

![image](https://user-images.githubusercontent.com/72580574/223560445-886898dc-a735-4acd-a245-a1cd3cd2ca59.png)

- **Bootstrap**
- 
![image](https://user-images.githubusercontent.com/72580574/223560839-2cfd30f4-d9b5-4fbf-8e96-8bf06a819416.png)


-[Grilla de 12 columnas](https://getbootstrap.com/docs/3.4/examples/grid/)

-Mobile First

-Responsive

---
---

## :star: DISEÑO DE APPS WEB Y MOBILE - VISUALIZACIÓN E INTERFACES


### Calidad del diseño de webapps

![image](https://user-images.githubusercontent.com/72580574/223561227-7381a1ad-09a8-46f4-bd69-24d01f94ebbf.png)


- **Usabilidad**_

-Comprensión global del sitio

-Características y estética de la interfaz

-Características especiales

-Retroalimentación y ayuda en línea

### METAS DEL DISEÑO WEB

```
-Simplicidad
-Consistencia
-Identidad
-Robustez
-Navegabilidad
-Atractivo visual
-Compatibilidad
```

![image](https://user-images.githubusercontent.com/72580574/223561595-bd5b16c2-0ad4-48ca-98f8-bca99e462822.png)

- **Objetivos de la interfaz**:

-Establecer una ventana congruente en el contenido y las funciones que brinda.

-Guiar al usuario a través de una serie de interacciones con la webapp.

-Organizar las opciones de navegación y contenido disponibles para el usuario.

### SEMÁNTICA DE LA NAVEGACIÓN

- Jerarquía de usuarios (actores)

- Casos de uso desarrollados (para cada actor)

- Unidades semánticas de navegación:

• Formas de navegación

• Nodos de navegación

• Jerarquía de unidades semánticas de

### SINTAXIS DE NAVEGACIÓN

- Vínculo de navegación individual

- Barra de navegación horizontal

- Columna de navegación vertical

- Pestañas

- Mapas del sitio

### CREACIÓN DE UNA UNIDAD SEMÁNTICA DE NAVEGACIÓN

Ejemplo “Casa Segura”, tomado de Pressman.

![image](https://user-images.githubusercontent.com/72580574/223562047-5bcefb34-0780-4f6b-b435-da75d94e9c90.png)


### MÉTODO DE DISEÑO DE HIPERMEDIOS ORIENTADO A OBJETOS

Ejemplo “Casa Segura”, tomado de Pressman.

![image](https://user-images.githubusercontent.com/72580574/223562144-eec03213-e598-4375-8fe8-de45936c7b2d.png)


### DIFERENCIAS ENTRE APLICACIONES Y WEB MÓVILES

- Deben ser descargadas e instaladas.

- Diseñadas específicamente para dispositivos móviles.

- Pueden verse aun cuando se está sin conexión a Internet.

- Acceden a ciertas características de hardware del teléfono.

- Mejor experiencia de uso.


### MOBILE FIRST

- Tendencia emergente de trabajo.

- El diseño comienza desde cero (no hay web antecesora).

- Implica plantear el proceso de diseño teniendo en cuenta el móvil en primer lugar.


### PROCESO DE DISEÑO Y DESARROLLO DE UNA APP

![image](https://user-images.githubusercontent.com/72580574/223562379-01a62c98-2dea-4bf2-a396-6facf39af53c.png)

![image](https://user-images.githubusercontent.com/72580574/223562430-bb337035-8827-4a57-817b-6c225000e8a9.png)

### TIPOS DE APLICACIONES SEGÚN SU DESARROLLO

- **Aplicaciones nativas**:

• Desarrolladas con Software Development Kit

• Se descargan e instalan desde las tiendas de aplicaciones

• Se actualizan frecuentemente

• Pueden hacer uso de las notificaciones del sistema operativo

• No requieren Internet para funcionar

• Interfaz basada en las guías de cada sistema operativo

- **Aplicaciones web**:

• Base de programación de las aplicaciones web

• Pueden ser fácilmente utilizadas en diferentes plataformas

• No necesitan instalarse

• No requieren actualización (por parte del usuario)

• Requieren de una conexión a Internet

• Interfaz más genérica e independiente de la apariencia del sistema operativo

- **Aplicaciones híbridas**:

• Desarrollo parecido a la de una aplicación web, pero se compila o empaqueta como una aplicación nativa.

• Casi con un mismo código se obtienen diferentes aplicaciones y distribuirlas en tiendas.

• Permiten acceder, usando librerías, a las capacidades del teléfono.

• Diseño visual que no se identifica en gran medida con el del sistema operativo.

### DEFINIENDO LA PROPUESTA

- Investigación del usuario

- Definición funcional

- Arquitectura de información

- Wireframes

• Papel

• Stencils

• Plantillas

- Prototipo

• Documentos navegables

• Versiones web

• Otros formatos

### INTERACCIÓN Y PATRONES

- Principios de experiencia de usuario

- Simplicidad Consistencia Navegación

- Intuitiva

### INTERACCIÓN Y FORMAS DE SOSTENER EL MÓVIL

De acuerdo a la forma de sostener el móvil, el pulgar tiene mayor o menor dificultad en acceder a ciertas zonas.

![image](https://user-images.githubusercontent.com/72580574/223563063-f9f47543-b8c6-4ddd-a0bb-874531473cfa.png)


Saine, Jamie. How Mobile Users Hold Devices. http://blog.utest.com/how-mobile-users-hold-devices/2013/03/


### INCIDENCIA EN LA ORIENTACIÓN DEL TERMINAL

Las diferentes orientaciones son una oportunidad de repensar la disposición de información que sea más útil en cada caso.

![image](https://user-images.githubusercontent.com/72580574/223563167-b9101cf2-5694-4159-ae23-e276baf71b19.png)

### PATRONES DE INTERACCIÓN

Según Martijn van Welie, «un patrón de interacción es un resumen práctico de una solución de diseño que se ha demostrado que funciona más de una vez.
Utilízalos como guía, no como una ley»*.

* [http://www.androidpatterns.com/](http://www.androidpatterns.com/)


### NAVEGACIÓN: PESTAÑAS

Se pueden utilizar para filtrar contenidos o cambiar entre pantallas que tienen el mismo nivel de jerarquía, indicando siempre dónde se está y hacia dónde más se puede ir.

Es necesario destacar siempre la pestaña seleccionada, mantener el orden y la ubicación inicial y no usarlas para incluir otras acciones distintas a la navegación.

Google sugiere aplicar una regla de oro: no emplear más de cinco o siete pestañas.

![image](https://user-images.githubusercontent.com/72580574/223563395-de52ac83-8db0-4e39-a335-26c443085d30.png)

Las pestañas se ubican arriba en Android y Windows Phone y en iOS, abajo.

### NAVEGACIÓN: LISTAS

Esta forma de mostrar tantos ítems como sea necesario permite al usuario tocar alguno de ellos para obtener información complementaria.

Las listas pueden mostrar tanto textos como imágenes, pero es importante siempre jerarquizar su contenido.

Cuando contiene muchos elementos puede añadirse un sistema de índice que complemente la navegación a medida que se va desplazando, de forma vertical, por el
contenido de la lista.

![image](https://user-images.githubusercontent.com/72580574/223563525-783d15b5-108c-4650-97df-e3edcc1c09a2.png)


Uso de listas en Android, iOS y Windows Phone.


### NAVEGACIÓN: GALERÍAS DE IMÁGENES

La disposición de imágenes está regida por la retícula propuesta por cada sistema operativo. En caso de que excedan el área disponible, se realiza un recorte de las imágenes a mostrar.

Android es un caso particular, ya que al mostrar imágenes en la vista de cuadrícula es posible utilizar un desplazamiento horizontal, siendo recomendable mostrar una parte de las imágenes siguientes.

![image](https://user-images.githubusercontent.com/72580574/223563656-bd6607c0-5b92-4967-b437-bcb65a765a37.png)


Las galerías de imágenes usan un formato reticular en Android, iOS y Windows Phone.

###  NAVEGACIÓN: MENÚ TIPO CAJÓN

Este patrón, popularizado por Facebook, permite cambiar rápidamente entre pantallas de la aplicación.

Brinda mejor aprovechamiento del espacio y, una vez desplegada la lista, ofrece una forma cómoda de navegar los contenidos, pero obliga a los usuarios a tocar el botón y desplegar el panel para poder saber cuáles son las opciones disponibles en la lista.

Android ha estandarizado su uso en las guías oficiales, recomendándolo para los niveles de navegación más altos o cuando las opciones de menú no tengan relación directa entre sí.

![image](https://user-images.githubusercontent.com/72580574/223563798-6cdaccbd-f0c2-4760-a90e-b66445a04622.png)


Muy popular en Android, iOS y Windows Phone, aunque por ahora solo el primero lo incorpora en sus guías oficiales.

###  NAVEGACIÓN: VOLVER

Los usuarios acostumbrados a usar la web encontrarán aquí una forma conocida de navegar. En el mundo móvil, con la navegación pantalla a pantalla, el uso del botón «volver» es muy frecuente.

En iOS, este botón está contenido en la barra de navegación. La navegación entre páginas es jerárquica.

En Windows Phone, el botón físico del teléfono se encarga de gestionar esta forma de navegar entre los contenidos.

![image](https://user-images.githubusercontent.com/72580574/223564232-94b6d86e-2e6e-4c33-b0c1-e06d6818fb8e.png)


El botón de volver en Android se usa arriba y abajo; en iOS, siempre arriba y en Windows Phone, es el botón físico del terminal.


### ACCIONES: BARRA DE ACCIONES

El compendio de acciones que se pueden realizar se representa por medio de íconos, por ello la correcta selección de estos recursos gráficos es fundamental.

Es importante ordenar las acciones en función de la frecuencia de uso. El ancho de la pantalla determinará cuantos ítems se pueden mostrar.

![image](https://user-images.githubusercontent.com/72580574/223564543-5a6ed0e7-6750-4fd7-8c79-d83d44b0baac.png)


La barra de acciones se ubica arriba en Android y abajo en iOS y Windows Phone.


###  ACCIONES: DESBORDE DE ACCIONES

Las funciones extra y de uso poco frecuente se descubren por medio de la «revelación progresiva». Están ocultas la mayor parte del tiempo, hasta que el usuario las reclame.

![image](https://user-images.githubusercontent.com/72580574/223564675-84b4a743-ea32-48ce-b530-6d95f4312508.png)


Android, iOS y Windows Phone plantean diferentes alternativas para resolver el desborde de acciones.

### ACCIONES: ACCESOS RÁPIDOS

Hay acciones que deben estar muy a mano, por ejemplo, acceder a las acciones asociadas a ítems en una lista o retícula.

![image](https://user-images.githubusercontent.com/72580574/223564778-f19634a0-f6da-4104-8880-029911da6b56.png)


Formas de acceder rápidamente a acciones en Android, iOS y Windows Phone.

### ACCIONES: COMPARTIR

Probablemente una de las acciones más empleadas en estos días: compartir contenidos con amigos, en Facebook, en Twitter, por mensaje de texto, como sea. Los
sistemas operativos también han notado esta necesidad y han facilitado una implementación integrada al sistema muy fácil de aprovechar.

![image](https://user-images.githubusercontent.com/72580574/223564925-28ad4dd1-435a-4468-ad93-b8b0a48ca815.png)


La acción de compartir se despliega arriba en Android, abajo en iOS y en pantalla completa en Windows Phone. 


### ACCIONES: BUSCAR

Mediante la introducción de texto o por voz. 

Es preferible ir mostrando los resultados a medida que el usuario escribe para mejorar la experiencia de uso. Idealmente, el tiempo de espera entre la introducción de los datos y el resultado no debería ser superior a uno o dos segundos.

![image](https://user-images.githubusercontent.com/72580574/223565026-90c4fe11-83ca-4ad4-a51a-f6ac61eeffd0.png)

Buscar se ubica arriba en Android y iOS; en Windows Phone utiliza una pantalla aparte.

### ACCIONES: EDICIÓN DE LISTAS

Es posible que el usuario necesite modificar varios elementos de una lista de forma simultánea. Debe seleccionar los elementos sobre los que se quiere actuar y luego aplicar la acción correspondiente.

La manera de seleccionar elementos en una lista varía considerablemente de un SO a otro.

![image](https://user-images.githubusercontent.com/72580574/223565141-ad33de52-587c-44c6-bc3e-139fe0a4c619.png)


Android, iOS y Windows Phone presentan diferentes alternativas para realizar la selección múltiple de elementos en una lista.

### ACCIONES: CUADROS DE DIÁLOGO
 
Hay veces que se interrumpir al usuario para que tome una decisión o para explicarle algo antes de continuar una tarea. Mientras los diálogos están visibles en pantalla no es posible hacer otra cosa en el resto de la aplicación.

Cuando no requieren una toma de decisión, los cuadros son informativos y tienen únicamente un botón para cerrarlos. Se debe limitar su uso para mensajes graves o trascendentales que no puedan esperar.

Otros se usan para comunicar al usuario que debe tomar una decisión para poder continuar y puede elegir entre dos o más opciones disponibles. 

![image](https://user-images.githubusercontent.com/72580574/223565262-bb22eced-3a93-4ed7-8107-59572e4abced.png)


Cuadros de diálogo que requieren la toma de decisiones por parte del usuario en Android, iOS y Windows Phone.

### ACCIONES: NOTIFICACIONES DENTRO DE LA APP

No requieren la intervención del usuario ni tampoco interrumpen su flujo de trabajo.

Son la confirmación visual (u otra) de que la acción que se acaba de realizar ha ido bien.

Se muestra explícitamente cómo han ido las cosas o que sucederá en breve con simples mensajes de confirmación. Se presentan en pequeños avisos que desaparecen luego de unos segundos.

Comunican mensajes que no tienen una importancia crítica.

![image](https://user-images.githubusercontent.com/72580574/223565431-3630b507-e3a0-4718-9d45-7fd3183df78b.png)


Android ofrece notificaciones in-app nativas, en iOS y Windows Phone deben programarse especialmente.

### ACCIONES: INTRODUCCIÓN DE DATOS

Los sistemas operativos han desarrollado teclados diferentes dependiendo del tipo de dato que deba ingresarse. Ya que es un un elemento que ocupa gran parte de la pantalla y que dificulta la navegación entre los campos para introducir información.

Es recomendable usar otras alternativas como menús deslizantes, desplegables, checks o cualquier opción similar a una lista donde el usuario pueda elegir entre varias opciones. Y los componentes de hardware en el teléfono.

![image](https://user-images.githubusercontent.com/72580574/223565576-cf23c3d2-5eb5-4fb0-9167-da6285572cd9.png)


Diferentes tipos de teclados usados para introducción de datos en Android, iOS y Windows Phone.

### GESTOS: TOCAR

Toca la superficie con la yema del dedo.

Android -> Selecciona la acción primaria.

Apple -> Selecciona la acción primaria.

Windows -> Selecciona la acción primaria.

![image](https://user-images.githubusercontent.com/72580574/223565707-6ea09f87-f970-4b4b-abab-eeb63a98530e.png)


### GESTOS: ARRASTRAR

Mueve un dedo sobre la superficie sin perder el contacto.

Android -> Archivar o borrar al arrastrar horizontalmente en listas.

Apple -> Mostrar un botón de eliminar al arrastrar horizontalmente en listas. Mover ítems en listas.

Windows -> Cambiar a otras pestañas o sectores de una vista Panorama.

![image](https://user-images.githubusercontent.com/72580574/223565909-8f6bfcbd-8624-4273-ae2f-4ae6a1c954e4.png)



### GESTOS: DESLIZAR

Desliza rápidamente y sin detenerte la yema de un dedo sobre la superficie.

Androd -> Desplazarse a través del contenido. Cambiar a otras pestañas.

Apple -> Desplazarse a través del contenido.

Windows -> Desplazarse a través del contenido. Cambiar a otras pestañas o sectores de una vista Panorama.

![image](https://user-images.githubusercontent.com/72580574/223565967-831a8469-1e68-49c6-bb5f-1f023b67b3ee.png)


### GESTOS: MANTENER PULSADO

Toca la superficie durante un período prolongado de tiempo sin mover el dedo.

Android -> Entrar al modo de edición de listas.

Apple -> Mostrar un tooltip. Aumentar el contenido visible bajo el dedo.

Windows -> Mostrar un tooltip sin seleccionar el elemento.

![image](https://user-images.githubusercontent.com/72580574/223566217-6bc331ed-f0d5-4ae0-afa2-28da0714922e.png)


### GESTOS: DOBLE TOQUE

Toca rápidamente la superficie dos veces con la yema del dedo.

Android -> Alternar entre acercar y alejar. Seleccionar texto.

Apple -> Alternar entre acercar y alejar.

Windows -> Alternar entre acercar y alejar.

![image](https://user-images.githubusercontent.com/72580574/223566327-c067601d-4efd-4597-b5eb-8b28306e8494.png)

### GESTOS: JUNTAR Y SEPARAR

Toca la superficie con dos dedos y júntalos o sepáralos.

Android -> Aumentar o reducir el zoom.

Aple -> Aumentar o reducir el zoom.

Windows- > Aumentar o reducir el zoom.

![image](https://user-images.githubusercontent.com/72580574/223566441-993288c2-9c89-441e-bffe-c6703e9c45e0.png)

### GESTOS: GIRAR

Toca la superficie con dos dedos y júntalos o sepáralos mientras giras la muñeca.

Android -> Girar una imagen o un mapa.

Aple -> Girar una imagen o un mapa.

Windows -> Girar una imagen o un mapa.

![image](https://user-images.githubusercontent.com/72580574/223566544-3c41c8ff-38bc-4720-b523-1761fde0b795.png)

## DISEÑO VISUAL

La interfaz de una aplicación es el lugar donde nacen las interacciones.

En mayor medida está compuesta por botones, gráficos, íconos y fondos, que tienen una apariencia visual diferente en cada uno de los sistemas 
operativos.

- Identidad visual

- Grilla o retícula de construcción

- Tipografía

- Color

- Lenguaje textual

- Animación

### PROBANDO CON USUARIOS

- Test de usabilidad

- Test en móviles

- Test guerrilla

- Otras formas de obtener información

• Dogfooding

• Test de los cinco segundos

## EL MUNDO TABLETA

• Si ya se tiene una app para móvil, el siguiente paso natural es diseñar una versión para Tablet.

• Se trata de dos medios que se diferencian, no solo en tamaño, sino también en los modos de uso —cómo y dónde son utilizados— y en la relación que
generan con el usuario.

### LA PANTALLA GRANDE

Mayor protagonismo visual

Tipografía

Aprovechamiento del espacio


### MAYOR PROTAGONISMO VISUAL

El espacio disponible en una tableta permite que los gráficos se luzcan más en pantalla.

### APROVECHAMIENTO DEL ESPACIO

Las tabletas hacen un uso diferente del espacio, lo que permite mostrar dos pantallas en una sola. En este caso, Dropbox muestra la lista de archivos junto con el contenido, algo que no se puede hacer en iPhone sin cambiar de pantalla.

![image](https://user-images.githubusercontent.com/72580574/223567024-3b051337-9e06-44c8-870b-761f1dddf576.png)

## CONTEXTO DE USO

La interacción

La funcionalidad

Contenido de la app

### LA INTERACCIÓN

Según la manera de sostener la tableta, las zonas inferiores de la pantalla son más fáciles de acceder.

![image](https://user-images.githubusercontent.com/72580574/223567124-4a3a800f-4d3a-43ec-8fbd-3be7baea1fcb.png)


### FUENTES

• Pressman, Roger. Ingeniería de Software, enfoque práctico. Capítulo 13.
McGraw-Hill, 7ma Edición.

• Cuello, Javier y Vittone, José. Diseñando apps para móviles. Capítulos 1, 5, 7,
8, 10, 14. Edición: Catalina Duque Giraldo. Primera edición: junio de 2013.

---
---


