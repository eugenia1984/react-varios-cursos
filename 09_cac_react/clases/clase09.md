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

## :star: ¿Cómo arrancamos con React? 
