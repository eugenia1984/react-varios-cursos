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

- **One Page** es una pagina completa con enlaces en la msima web.
 
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
![image](https://user-images.githubusercontent.com/72580574/223560839-2cfd30f4-d9b5-4fbf-8e96-8bf06a819416.png)


-[Grilla de 12 columnas](https://getbootstrap.com/docs/3.4/examples/grid/)

-Mobile First

-Responsive

---
---


