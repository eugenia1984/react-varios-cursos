# :star: CLASE 09 - 27 MAR

---

## :star: Virtual DOM

Con **Vanilla JavaScript** ante el mínimo cambio en un nodo se vuelve a renderizar todo, se carga toda la página. En cambio **React** utiliza el **virtual DOM**, hace como una copia del DOM, y solo va a renderizar lo que cambie, lo que queda igual no va a volver a re renderizar.

![image](https://user-images.githubusercontent.com/72580574/227961234-e0e0908a-4174-47b0-b4a8-729d5683caa5.png)


---

### :star: Componentes

Componentes reutilizables, y me permite achicar el problema en prblemas mas chicos, cada uno hara una parte.

Los componentes se van armando de acorde a lo que voy necesitando.

---

## :star: ¿Que hay que tener pre instalado antes de usar React?

- Nodejs y npm

- Babel: el compilador, como un traductor de JSX.

---

**React** es una **librería**(orientada a crear interacción con la interfaz del usuario con componentes reutilizables), no es un **framework**(una herramienta completa, tiene muchas librerías, una base integrada, todo una estructura fija).

VUE y ANGULAR si son Frameworks.

---

## :star: Primer proyecto de React

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


# ⭐ CLASE 10 - 29 MAR

## Componentes

- Creamos un **componente** Usuarios:

```JSX
import bootstrap from 'bootstrap';

export default function Usuarios(props) {
    return (
      <div>
{ /*       <h3 style={{backgroundColor : "#6ab150"}}>
        Nombre: {props.nombre}</h3>
        <p>Edad: {props.edad}</p>
    <p>{props.localidad} </p> */}

        <div className="card " style={{width : "18rem"}}>
        <div className="card-body">
            <h3 className="card-title">{props.nombre}</h3>
            <h6 className="card-subtitle mb-2 text-muted">Encargado</h6>
            <p className="card-text">{props.edad}</p>
        </div>
        </div>
        
      </div>
    )
  }
```

Si este componente lo invocamos en App lo vemos renderizado.


- `rfc` es el atajo para tener una estructura ya armada de un componente

- Hay dos formas de hacer el export:

-Aca ademas tengo el componente armado como funcion explicita:

```JSX
export default function App() {
  return (
    <div>
    </div>
  )
}
```

-Acá además tengo el componente armado como arrow function guardada en variable:
```JSX
const App = () => {
  return (
    <div>
    </div>
  )
}

export default App
```

- Tengo que tener un solo **export** por archivo, ya que debo tener un solo componente, no puedo exportar dos componentes juntos.

- Los componentes reciben **props**:

```JSX
<Usuario nombre="Maria Eugenia" edad=38 />
```

Para usarlo dentro del componente tengo dos formas:

-> Lo recibo como parametro en mi componente: 
```JSX
(props)
```

Y lo uso dentro del componente:
```JSX
{props.edad} {props.nombre}
```

- Otra forma es **desestructurar** para no tener que estar poneindo props.;

Asi desestructurado lo paso como parametro:

```JSX
({ edad, nombre})
```

Entonces dentro del componente no tengo que poner props.:

```JSX
{edad} {nombe}
```

![image](https://user-images.githubusercontent.com/72580574/229316441-d269843a-c882-437d-a92a-d0fff6a9f469.png)

![image](https://user-images.githubusercontent.com/72580574/229316487-12720b70-67de-425d-8a50-363f1afe1a6a.png)

---

### Estilos

Se pueden agregar como **estilos en linea**(no es la forma recomendada):

```<h3 style={{backgroundColor: "red"}}>Hola </h3> ````

Los atributos de CSS se escriben en camelCase, ya no se separan con -.

Es un objeto, cada atributo s la key y el valor es el value, si tengo más de uno separo con ,.

Ejemplo:

![image](https://user-images.githubusercontent.com/72580574/229316691-9a46b3b7-3bd1-4914-8312-ebe605894bd9.png)



- Pero es mejor tener aparte una **hoja de estilos**, en JSX no podemos usar **class** ya que es una palabra reservada de JavaScript, usamos **className**.

También hay otras librerías para manejar estilso como: React-Bootstrap, Styled Components, MUI, Tailwind, Chakra, etc.


Si por ejemplo me copio un componente de Bootstrap, en vez de React-Bootrstrap voy a tener que hacer cambios:

![image](https://user-images.githubusercontent.com/72580574/229317076-e92125ff-fb70-4bc8-91c9-16262e6fc92f.png)


- Fijarme que todas las etiquetas esten cerradas, es decir si tengo uan etiqueta `<img />` la debo cerrar

- A lo que tenga class le cambio a **className**

- Si tengo estilo en linea debo encerrarlo entre {} y adentro paarlo a un objeto con las {} y las propiedades en camelCase


Y me quedaría asi:

![image](https://user-images.githubusercontent.com/72580574/229317234-c5732df9-2018-4643-94f1-6864dd08f464.png)

---
---

# :book: CONFIGURACIÓN REACT - CAMBIO DE PUERTO 3000

## GUÍA CON EL PASO A PASO

```
Configuración | Evitar conflictos de puertos
Profesora Gisela Flores
```

### ¿CÓMO MODIFICAR EL NÚMERO DE PUERTO PREDETERMINADO 3000 EN UN PROYECTO REACT?

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

Vamos a tener:

- Distintos componentes

- Vamosa ir importando componentes, y trabajar con **atomic desing** de componentes chicos vamos a formar tdo un conjunto.

-> En el **index.html** tengo el **div** con el **id=root**. En mi app voy a aplicarle el método **render** que me va a crear mi **React DOM** y es donde se va a renderizar todo loq eu cree en mi app.

-> Todo componente tiene un **return**, retorna una información, va a tener un **Export**.

---
---

# :book: REACT

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


REACT DOCUMENTACIÓN - LINK: [https://es.reactjs.org](https://es.reactjs.org)


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

  
### :star: BABEL
  
Babel es un compilador (o transpilador) para JavaScript. Básicamente permite transformar código escrito con las últimas y novedosas características de JavaScript y transformarlo en un código que sea entendido por navegadores más antiguos. Babel es de código abierto y se utiliza principalmente para convertir el código ECMAScript de JS.
  
 [HTTPS://BABELJS.IO/DOCS/EN/](https://babeljs.io/docs/en/)
  
## :star: ¿Cómo arrancamos con React? 

EN REACT VEREMOS DIFERENTES PARTES EN CUANTO A SU SINTAXIS Y LA FORMA EN QUE FUNCIONA.
  
PARA COMPRENDER MEJOR PRIMERO VEREMOS COMO SE INSTALA E INICIA.

### :star: INSTALACION
  
Para comenzar a usar React es necesario tener instalados algunos recursos previamente. Por lo tanto debemos comenzar con la instalación de NODE JS que será la herramienta encargada de compilar lo que creemos desde React para ver los cambios en tiempo real.
  
Siempre es recomendable utilizar la versión normalizada, pero la última versión también servirá. Entonces primero con lo primero:
  
- **INSTALADOR NODEJS**: LINK : [HTTPS://NODEJS.ORG/ES/](https://nodejs.org/es/)
  
Una vez ingresado al link seleccionar la opción y comenzar la instalación, el proceso no genera ningún problema y solo se debe poner siguiente para completar los pasos.
  
Veremos el proceso de instalación:
  
![image](https://user-images.githubusercontent.com/72580574/228061193-c6ad827f-a42a-4bc1-92d6-840a4b31e879.png)

  
Descargará el paquete y luego pedirá los permisos de instalación, deberás poner que si a todo y seleccionar donde instalar.
  
En caso que quieras verificar si lo tenes instalado de algún otro proyecto, puedes abrir un cuadro CMD en windows y colocar el comando NODE --VERSION y de esa forma verás la versión instalada:
  
![image](https://user-images.githubusercontent.com/72580574/228061275-70694c04-4126-41c8-8487-f323394d7328.png)

Para comenzar abrir un proyecto en React lo que debemos hacer es tener en cuenta que debemos primero abrir el VISUAL STUDIO CODE, que previamente debe estar instalado (en la página 2 podrás ver las recomendaciones para el uso de React en VSC), luego abriremos la terminal y comenzaremos con la mágia!! veamos los pasos:
  
- **INSTALADOR VISUAL STUDIO CODE**: LINK: [HTTPS://CODE.VISUALSTUDIO.COM/](https://code.visualstudio.com/) 
  
  
Luego de instalar o abrir el VSC debemos ir al menú de arriba y colocar en TERMINAL, y del desplegable seleccionar NEW TERMINAL:
  
![image](https://user-images.githubusercontent.com/72580574/228061661-1a586cdb-ccf1-43e4-bc2d-117e6bf014d1.png)

  
Cuando hagamos ese proceso nos saldrá en la parte de abajo la terminal para poder comenzar con la linea de comandos:
  
![image](https://user-images.githubusercontent.com/72580574/228061720-013ca92d-ce2f-409d-b7c1-522eb4aee0f7.png)

Una vez habilitada la terminal, haremos los pasos necesarios para crear la carpeta o movernos hasta donde está la carpeta que alojará nuestro proyecto, recuerda que el comando para dicha gestione es:
  
```CD``` PARA INGRESAR A LA CARPETAS
  
Una vez dentro de la carpeta destino comenzaremos con el proceso de instalación de react para comenzar el proyecto, y para ello usaremos la linea de comando:
  
```NPX CREATE-REACT-APP NOMBREDELPROYECTO```
  
Luego de dar ENTER, comenzará el proceso de instalación de React, este puede demorar unos minutos, podremos apreciar que está trabajando ya que en la consola veremos lo siguiente:
  
![image](https://user-images.githubusercontent.com/72580574/228062202-825f743f-43bb-4e71-b48f-0140a8239121.png)

  
Cuando todo esté completo nos mostrará los posibles comandos para comenzar a trabajar:
  
![image](https://user-images.githubusercontent.com/72580574/228062285-766af9c1-9dec-4426-ac6a-0212f3d859fa.png)

Es necesario ingresar a la carpeta que fue creada para el proyecto y luego realizar el
otro comando, también se puede ir al explorador de windows donde se creó la
carpeta y arrastrarla al VSC.

  
```CD NOMBREDELPROYECTO```
  
```NPM START```
  
Por DEFAULT react se abre en el puerto 3000, en caso de tener conflicto con el puerto por alguna otra ejecución el mismo sistema de VSC nos informara indicándonos si queremos cambiar de puerto.
  
En caso de querer hacer el cambio manualmente pueden consultar los pasos en la guia sugerida de la página 2.
  
Listo!!! una vez completados todos los pasos, se nos abrirá en el navegador predeterminado una pestaña con http://localhost:3000/ que nos mostrará que React ya esta funcionando.
  
![image](https://user-images.githubusercontent.com/72580574/228063317-85a332a3-6367-4427-9755-9dbcbdcb18d9.png)

  
Ahora si !!! vamos a ver las partes que trae este proceso dentro de VSC.

Para comenzar a usar React es necesario entender las partes que trae la instalación y como están divididas las mismas.
  
Para comenzar marcaremos cuales son y las iremos desarrollando paso a paso, ya que son varias.
  
![image](https://user-images.githubusercontent.com/72580574/228063402-28652fb1-6041-4498-aa95-b03ca8c6a436.png)

  
## :star: NODE MODULE
  
Esta carpeta contiene todos los archivos que REACT necesita para poder funcionar, la misma no debe ser modificada para evitar inconvenientes.
  
![image](https://user-images.githubusercontent.com/72580574/228063515-3bd9a2b8-ec07-4931-a33b-f2f9fece45a6.png)

  
## :star: PUBLIC
  
En está carpeta se almacenan los archivos de uso común y el index.html que da inicio a react. En esta carpeta se deben guardar los ficheros de acceso público de toda la app, como por ejemplo la carpeta img que contiene las imágenes del sitio, carpetas de alguna template usada etc.
  
![image](https://user-images.githubusercontent.com/72580574/228063632-5acd5725-7fff-46f1-94d4-c588fcec0345.png)

  
Dentro del index.html podremos apreciar lo siguiente:
  
![image](https://user-images.githubusercontent.com/72580574/228063698-f08becae-4de0-4f16-b5d9-88d5c6413e69.png)

  
No contiene ningún tipo de código cargado, lo único que presenta son las etiquetas habituales de inicio de de HTML5 y un componente en el body que será el encargado de recibir lo que desarrollemos del lado de REACT para ser mostrado.
  
``` <DIV ID="ROOT" > </DIV>```
  
Para comprender mejor, REACT tomará ese contenedor y procederá a renderizar el mismo y eso se debe a que esta siendo seleccionado por el archivo index.js por medio de los nodos del DOM.
  
![image](https://user-images.githubusercontent.com/72580574/228063941-b5d0f5a6-0148-451b-be28-37213e5517cb.png)

  
Si miramos en detalle, podremos ver que el contenedor es seleccionado por su ID y guardado en una variable ROOT, la cual es renderizada y a la cual se le aplica todo lo que el componente `<APP />`traiga del lado de REACT. Más adelante veremos con detalle este proceso.
  
### :star: SRC
  
En está carpeta se almacenan los archivos del componente principal APP, a su vez allí podremos cargar nuevas hojas de JS para trabajar con los diferentes componentes de nuestro sitio.
  
![image](https://user-images.githubusercontent.com/72580574/228064116-a7232a31-af36-43b6-bde5-f241fba227c5.png)

Es importante destacar que el archivo APP.JS es el principal componente que almacena los cambios del sitio.
  
Al comenzar el proyecto este trae la presentación de REACT que vimos anteriormente a la hora colocar el NPX START.
  
En el mismo se podrán apreciar el logo, los textos y el formato inicial. Para poder comenzar a trabajar es necesario eliminarlos y dejar solamente el div principal.
  
![image](https://user-images.githubusercontent.com/72580574/228064207-e68a9f22-6bdf-4c7f-8764-78e790e19300.png)

  
##  :star: GITIGNORE
  
Son todos los archivos innecesarios a la hora de crear un repositorio del proyecto y que al figurar ahí no serán subidos.
 
![image](https://user-images.githubusercontent.com/72580574/228064284-fdf24f75-3f0e-45e3-b7a9-c1e9b6795dbf.png)

  
## :star: PACKAGE JSON
  
n este paquete se almacena la información necesaria JSON para que REACT funcione, también sobre esta pestaña se puede configurar un puerto especifico en caso de no querer o poder usar el PORT 3000 que viene por defecto. Para ello se modifica la linea START por la siguiente:
  
`"START": "SET PORT=3001 && REACT - SCRIPTS START",`
  
![image](https://user-images.githubusercontent.com/72580574/228064474-4ed9b42b-18b6-4e22-9296-5162dec448b1.png)
  
---
---
