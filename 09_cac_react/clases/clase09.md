# :star: CLASE 09 - 27 MAR

---

## Virtual DOM

Con **Vanilla JavaScript** ante el mínimo cambio en un nodo se vuelve a renderizar todo, se carga toda la página. En cambio **React** utiliza el **virtual DOM**, hace como una copia del DOM, y solo va a renderizar lo que cambie, lo que queda igual no va a volver a re renderizar.

![image](https://user-images.githubusercontent.com/72580574/227961234-e0e0908a-4174-47b0-b4a8-729d5683caa5.png)


---

### Componentes

Componentes reutilizables, y me permite achicar el problema en prblemas mas chicos, cada uno hara una parte.

Los componentes se van armando de acorde a lo que voy necesitando.

---

## ¿Que hay que tener pre instalado antes de usar React?

- Nodejs y npm

- Babel: el compilador, como un traductor de JSX.

---

**React** es una **librería**(orientada a crear interacción con la interfaz del usuario con componentes reutilizables), no es un **framework**(una herramienta completa, tiene muchas librerías, una base integrada, todo una estructura fija).

VUE y ANGULAR si son Frameworks.

---

## Primer proyecto de React

- Abrimos VSC, ya teniendo instalaod **Nodejs**(`node -v`) y **Babel**(`npm install babel` ò `npm i babel-install -DE`).

- Abrimos la terminal.

- Creamos el proyecto por línea de comandos. Se puede usar **CDN** o por comando **instalando toda la biblioteca**.

- Se crea con **CRA** `npx create-react-app el-nombre-de-la-app`, no lo van a hacer con **Vite**. Si da error, volver a repetir el comando hasta que este ok.

- Para poder ver el proyecto tengo que **ir a la carpeta del proyecto**, entrar con `cd` a la carpeta que cree. Una vez en la carpeta `npm start`. Y se va a abrir en el puerto 30000, salvoq ue este usandose y abre en el proximo puerto disponible.

- La estructura del proyecto inicial, que viene por defecto:

![image](https://user-images.githubusercontent.com/72580574/227970947-4368b2fd-1f0e-47ce-8fa3-8184219712b1.png)

- Dentro de **public** ya viene cosas pre cargadas:

![image](https://user-images.githubusercontent.com/72580574/227971009-48d6b8cd-0a5b-47ac-a03b-c1baf65175c8.png)

En public puedo tener una carpeta de **imagenes**, peor no vamos a tocar mucho, si el `<title>` y lo que no use lo elimino.

- Dentro de **src** también ya viene una estructura por default:

![image](https://user-images.githubusercontent.com/72580574/227971479-24887a18-d68f-4169-8e48-bfc895b8efce.png)

Voy a ir borrando lo que no utilizo.

---
---

# :book: CONFiGURACIÓN REACT - CAMBIO DE PUERTO 3000

## GUÍA CON EL PASO A PASO

```
Configuración | Evitar conflictos de puertos
Profesora Gisela Flores
```

### CÓMO MODIFICAR EL NÚMERO DE PUERTO PREDETERMINADO 3000 EN UN PROYECTO REACT

Debido a que json-server se usa para simular la interfaz de back-end, se abre el puerto 3000. Ahora, cuando se inicia el proyecto de reacción, siempre preguntará si el puerto 3000 está ocupado y si se quiere cambiar a otro puerto. En caso que no lo haga se debe determinarlo manualmente cada vez que se abre el proyecto. Para hacer este proceseso debemos realizar los siguientes pasos:

Ingresar al proyecto y seleccionar el archivo {} package.json:

![image](https://user-images.githubusercontent.com/72580574/228054446-8e7a8530-a3b9-4a90-8846-896b124a8048.png)

Dentro del package.json modificar el start de la siguiente manera:

![image](https://user-images.githubusercontent.com/72580574/228054511-fd839807-2acc-4358-8904-47712ee7b5b4.png)

![image](https://user-images.githubusercontent.com/72580574/228054594-e61b24bc-7e4c-48fe-b95f-9fc7d969c5ed.png)

![image](https://user-images.githubusercontent.com/72580574/228054653-0c6e5c97-5eba-436a-ae6c-d39d96fbaa50.png)

Luego de guardar el cambio, por la terminal ingresar el siguiente comando:

![image](https://user-images.githubusercontent.com/72580574/228054700-fda2ef2a-b24e-4057-9358-8edfed29e88b.png)


Y el proyecto se cargará automáticamente en el puerto ingresado listo para trabajar sin problemas. En caso de no tener conflictos no modificar el puerto 3000 que viene por defecto.


![image](https://user-images.githubusercontent.com/72580574/228054785-19b526b8-c3ea-4b1c-bb53-48eb96acaf68.png)


---
---

# :book: React

## :star: Sugerencias 

Antes de empezar te recomendamos algunas instalaciones que te servirán para trabajar mucho mejor con React.

- **INSTALACIONES NECESARIAS**:

-Google Chrome

-React Developer Tools

-Redux Devtools

-Visual Studio Code

-Firebase

-Mongo Compass

-Git

-Node

- **EXTENSIONES DE VSC**

-Activitus Ba r

-ES7 React/Redux

-Simple React Snippets

-Auto Close Tag


## :star: ¿Qué es React? 

REACT ES UNA LIBRERÍA QUE NOS PERMITE CREAR APLICACIONES. ESTÁ HECHO PARA TRABAJAR CON TODO TIPO DE APLICACIONES SENCILLAS, INTERMEDIAS O COMPLEJAS, CON ALTO NIVEL DE INTERACTIVIDAD.

Esta librería, al ser declarativa, hace más fácil seguir patrones de diseño y crear interfaces de usuario interactivas.

Es increíblemente eficiente.

Los cambio impacta en el DOM, y se ven reflejados en el HTML, siendo renderizado por React solo en aquellas partes deseadas sin necesidad de recargar por completo la web, el cambio en ese elemento se realiza en el instante sin afectar el resto.

Otro punto fuerte de React es que trabaja de manera predecible porque toda la información fluye en un solo eje como javaScript.

A su vez con React podremos crear componentes, que son pequeñas piezas de código encapsuladas que pueden tener estado o no, y formar estructuras bastantes complejas con pequeños componentes o en pequeñas piezas sencillas y fáciles de mantener.

Con React, también se puede trabajar del lado del servidor y hacer Aplicaciones con Node.

También podemos crear aplicaciones móviles con React Native y también podemos crear aplicaciones de escritorio utilizando Electron y otras tecnologías, todos con el mismo tipo de código.


REACT DOCUMENTACIÓN

LINK: [https://es.reactjs.org](https://es.reactjs.org)


## :star: ¿Cómo funciona React? 

REACT TIENE UNA ESTRUCTURA PARTICULAR PARA TRABAJAR Y REQUIERE CIERTOS CUIDADOS A LA HORA DE ESCRIBIR CÓDIGO, YA QUE NO ES HTML NI JAVASCRIPT PURO, UTILIZA COMPONENTES Y JSX.

### FUNCIONAMIENTO LÓGICO

#### FORMA DE COMPRENDER COMO TRABAJA

Para poder comprender como funciona REACT vamos a desarrollar un simple ejercicio que nos permitirá ver como es su secuencia lógica de ejecución, para ello deberás cargar un archivo index.html en una carpeta y luego cargar los siguientes links que te permitirán importar REACT para nuestro ejemplo. Recuerda que si presionas el atajo en VSC de ! + TAB, obtendrás un HTML básico.

#### CARGAR LOS SIGUIENTES SCRIPTS EN EL HTML

```
<SCRIPT CROSSORIGIN SRC="HTTPS://UNPKG.COM/REACT@18/UMD/REACT.DEVELOPMENT.JS" > < /SCRIPT >
<SCRIPT CROSSORIGIN SRC="HTTPS://UNPKG.COM/REACT-DOM@18/UMD/REACT-DOM.DEVELOPMENT.JS" > < /SCRIPT >
<SCRIPT SRC="HTTPS://UNPKG.COM/BABEL-STANDALONE@6/BABEL.MIN.JS " > < / SCRIPT >
```

Asegurate de tener NODE JS instalado.

Cuando los cargues se verá asi:

![image](https://user-images.githubusercontent.com/72580574/228059388-3de808ce-53fd-4368-a022-c52de2f57bab.png)

A continuación vamos a crear un SCRIPT y asignaremos a una variable un TAG.

Pareciera código de JavaScript pero es JSX porque estamos mezclando lo que es XML (del HTML) con código de JAVASCRIPT, pero a pesar de que tenemos importado React no hará nada, ya que para poder ser comprendido vamos a tener que importar el uso BABEL al componente del script.

BABEL se va a encargar de hacer la traducción de un código moderno a lo que un código que sea soportado por cualquier navegador web, es básicamente lo que hace Babel. Vemos como queda!!


![image](https://user-images.githubusercontent.com/72580574/228059543-2bde3957-a623-4396-a381-15ec9188f446.png)


A continuación vamos a crear un <div> en el HTML con un id="root" y lo llamaremos desde nuestro SCRIPT, para que sea renderizado por lo que agreguemos allí.
  
Para ello usaremos un selector y el ReactDOM con el createRoot que serán los encargados de poder tomar el objeto desde DOM.
  
  ![image](https://user-images.githubusercontent.com/72580574/228059636-70d0a985-4196-4056-b1dc-8776213ef293.png)

Cuando vayamos a abrir la web desde un navegador veremos que el "hola mundo" ya esta a la vista, pero para hacerlo más dinámico vamos a cargar otra variable con un saludo y haremos que lo muestre utilizando el recurso de JS puro, veamoslo en la práctica:
  
  ![image](https://user-images.githubusercontent.com/72580574/228059741-eb3bdad4-8252-4b8e-9ed3-b6ab74b53c9f.png)

  
  Ahora si!!! con estos pasos ya creaste tu primer archivo en React, y podrás ver reflejado en pantalla lo que se cargo en el script, no es la única forma de trabajar con un archivo en React, a continuación lo haremos cargando los comandos necesario desde el VSC e instalando el mismo junto a otras librerías también. Y ahora si podemos decir que ya tuvimos nuestro tan esperado "HOLA MUNDO".
  
  ![image](https://user-images.githubusercontent.com/72580574/228059832-d2d341ee-f69e-469c-bdef-40b39bb380db.png)

  
  Proba realizar todos los pasos para crear tu primer archivo de REACT, podes agregarle más cosas para que quede mejor, te lo dejamos como desafío.
  
Pero antes de menternos con la estructura sólida de REACT y la otra forma de abrir un archivo REACT vamos a ver un poco que es BABEL y la función de NODE JS.
  
### NODEJS
  
Node fue ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos especialmente, además fue diseñado para crear aplicaciones network escalables. Permite compilar el código y poder verlo en pantalla.
  
Node. js es un entorno de ejecución de un solo hilo, de código abierto y multiplataforma para crear aplicaciones de red y del lado del servidor rápidas y escalables.
  
[HTTPS://NODEJS.ORG/ES/ABOUT/](https://nodejs.org/es/about/) 

  
### BABEL
  
Babel es un compilador (o transpilador) para JavaScript. Básicamente permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos. Babel es de código abierto y se utiliza principalmente para convertir el código ECMAScript de JS.
  
 [HTTPS://BABELJS.IO/DOCS/EN/](https://babeljs.io/docs/en/)
  
## :star: ¿Cómo arrancamos con React? 

  
