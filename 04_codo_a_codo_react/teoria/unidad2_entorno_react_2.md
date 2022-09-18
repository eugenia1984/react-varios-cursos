# :star2: Unidad 2 * Entorno React (2) :star2:

---

## Temas:

```
- Azucar sintactico - clases
- Let y Const
- ES6: Template Strings
- ES7: Elevación de potencia
- Webpack
- Babel + Node.js
- JSX
```

---

## :star: Azucar sintactico

**Sugar Syntax** refiere a la **sintaxis agregada a un lenguaje de programación con el
objetivo de hacer más fácil y eficiente su utilización**. Favorece su escritura, lectura y comprensión, existe porque los lenguajes tienden a evolucionar. Al implementarlos de manera adecuada podemos mejorar la legibilidad y pragmatismo
de nuestro codigo.

Ej: 
```JavaScript
i = 1+1 -> i++
```

### ES5 función normal

```JavaScript
var miFuncion = function(num) {
  returnnum + num;
}
```

### ES6 función arrow más corta y fácil de leer

```JavaScript
var miFuncion = (num) => num + num;
```

---

### Clases

Ahora JavaScript tendrá **clases**, muy parecidas las **funciones constructoras de objectos** que realizabamos en el estándar, pero ahora **bajo el paradigma de clases**, con todo lo que eso conlleva, como por ejemplo, **herencia**. Aunque no deja de ser un **azúcar sintáctico** (**Sugar Syntax**) porque en JavaScript no tenemos clases, tenemos **prototipos**.


```JavaScript
classLibro{
 constructor(tematica, paginas, autor) {
  this.tematica=tematica;
  this.paginas=paginas;
  this.autor=autor;
 }
 metodo() {
 // ...
 }
}
```

### Let y Const

Ahora podemos declarar variables con let en lugar de var si no queremos que sean
accesibles más allá de un á.

####  ES5
```JavaScript
(function() {
  console.log(x); // x no está definida aún.
  if(true) {
  var x = "hola mundo";
 }
  console.log(x);
  // Imprime "hola mundo", porque "var" hace que sea global
  // a la función;
})();
```

#### ES6

```JavaScript
(function() {
  if(true) {
  let x = "hola mundo";
 }
 console.log(x);
 //Da error, porque "x" ha sido definida dentro del "if"
})();
```

#### Template Strings

Ahora con EcmaScript6 se puede concatenar de una simple manera las cadenas de
string,para ello en vez de utilizar el signo de suma solamente se coloca el símbolo de dolar con llaves entre comillas invertida, ejemplo:

#### ES6
```JavaScript
let nombre1 = "JavaScript";
let nombre2 = "awesome";
console.log(`Sólo quiero decir que ${nombre1} is ${nombre2`);
```

#### Valores por defecto

Los valores por defecto se puede pasar como valores de las variables en los
parámetros de una función:

####  ES5
```JavaScript
function(valor) { 
  valor = valor || "foo";
}
```

####  ES6
```JavaScript
function(valor) { 
  valor = valor || "foo";
}
```

#### Elevación de potencia:

Ahora en ES7 tenemos una nueva para calcular una potencia
```JavaScript
let base = 3;
let exponente = 2;
let potencia = base ** exponente;
console.log(potencia);
```
---

### :star: Webpack

Webpack nació a finales de **2012** de la mano de un solo desarrollador (**Tobias Koppers**,alemán), y en la actualidad es utilizado por miles de proyectos de desarrollo web Front-End: desde frameworks como React o Angular hasta en el desarrollo de aplicaciones tan conocidas como Twitter, Instagram, PayPal o la versión web de Whatsapp.

Webpack se define como **un empaquetador de módulos** (un **bundler** en la jerga
habitual) pero que hace muchísimas cosas más:

-  Gestión de dependencias

- Ejecución de tareas

- Conversión de formatos

- Servidor de desarrollo

- Carga y uso de módulos de todo tipo (AMD, CommonJS o ES2015)

Y esto último lo que hace que destaque en especial. Es una herramienta extremadamente útil cuando desarrollas aplicaciones web diseñadas con **filosofía modular**, es decir, **separando el código en módulos que luego se utilizan como dependencias en otros módulos**. Una de las cosas que hace realmente bien Webpack es la **gestión de esos módulos y de sus dependencias**, pero también puede usarse para cuestiones como **concatenación de código, minimización y ofuscación, verificación de buenas prácticas (linting), carga bajo demanda de módulos**, etc...


Una de las muchas cosas interesantes de Webpack es que no solo el código JavaScript se considera un módulo. Las hojas de estilo, las páginas HTML e incluso las imágenes se pueden utilizar también como tales, lo cual da un extra de potencia muy interesante.

Webpack es una **herramienta de compilación** (una build tool) que coloca en un grafo de dependencias a todos los elementos que forman parte de tu proyecto de desarrollo: código JavaScript, HTML, CSS, plantillas, imágenes, fuentes... Esta idea central es la que lo convierte en una herramienta tan poderosa.

Webpack se puede considerar como un **Task Runner muy especializado en el procesamiento de unos archivos de entrada para convertirlos en otros archivos de salida**, para lo cual utiliza unos componentes que se denominan **loaders**.

Lo habitual es utilizar un archivo de código especial llamado **webpack.config.js** que está en la raíz de tu proyecto de desarrollo y que define mediante código JavaScript las operaciones que quieres realizar. En este archivo **defines toda la información necesaria para poder utilizar Webpack para tus propósitos**.

Generalmente las herramientas como Webpack (la más conocida: **Browserify**) se han utilizado en combinación con gestores de dependencias y task runners. Pero Webpack es tan potente que ya puede efectuar de serie, sin necesidad de nada más, casi cualquier tarea que puedas necesitar para tu desarrollo. En la actualidad está desplazando poco a poco el uso de otras herramientas.

Por ejemplo, no solo tiene soporte de serie para minimizar o combinar archivos, generar mapas de depuración o copiar recursos, sino que incluso **ofrece un servidor web integrado con la capacidad de recarga automática cuando algo cambia o reemplazo en caliente de módulos**. Las pocas cosas para las que no tiene soporte directo o a través de loaders o plugins se pueden conseguir con el uso de scripts npm, al fin y al cabo la herramienta está basada en Node.js y necesita npm para instalarse.

El mayor problema que ha tenido Webpack desde siempre es que **la configuración es un tanto complicada**, al menos al principio, lo que hace que tardes un poco en tenerlo funcionando para tu proyecto. Aunque en los últimos tiempos están haciendo lo posible para mejorar esto gracias a añadir funcionalidad en la interfaz de línea de comandos para partir de plantillas ya pre-configuradas.


#### Ventajas e inconvenientes de usar Webpack

El concepto del grafo de dependencias de Webpack es muy poderoso y ofrece muchísimos beneficios, como, por ejemplo:

- **Eliminación de recursos no utilizados**: permite de manera sencilla obtener para producción únicamente aquellos recursos que son necesarios, dejando de lado los que no se utilizan. Esto incluye, por ejemplo, las reglas CSS que de verdad se están utilizando, dejando fuera las demás, lo cual es una utilidad muy potente.

- **Control absoluto sobre cómo procesas los recursos**: para tomar decisiones avanzadas como que lleven un hash al final de su nombre en cada despliegue para que no queden "atrapados" en ninguna caché o que las imágenes pequeñas se incluyan codificadas en Base64 en la página en lugar de descargarse (ahorrando peticiones al servidor). Cosas por el estilo.

Te permite utilizar cualquier tipo de sistema de modularización para JavaScript, sea AMD, CommonJS, ES2015 o Angular, sin preocuparte de que el navegador tenga que soportarlo (Browserify, por ejemplo, solo soporta CommonJS, que es el de Node.js).

Tienes casi cualquier cosa que puedas necesitar sin recurrir a otras herramientas, por lo que no necesitarás un task runner como Gulp o un gestor de dependencias como Bower.

- Es muy rápido.

- **Despliegues confiables++: utilizando correctamente los conceptos de Webpack no puede darse el caso de que te dejes cosas fuera a la hora de desplegar. Esto en aplicaciones grandes es mucho decir.

Aunque al principio te puede costar arrancar con Webpack en el proyecto, una vez que lo hagas ganarás mucha velocidad de desarrollo.

**Pero Webpack también tiene inconvenientes**:

La configuración es bastante compleja y cuesta, sobre todo al principio, aunque están intentando mejorarlo ofreciendo plantillas y validadores intergados.

Todo lo que utilices debe ser modular. No solo deberás escribir los archivos JavaScript como módulos, sino que las dependencias de otras bibliotecas de JavaScript de terceros que utilices deben ser modulares también (aunque hoy en día eso no es muy problemático).

En proyectos grandes tocar la configuración puede ser complejo.

Algunas sintaxis pueden ser algo confusas.

La documentación ha sido tradicionalmente mala, difícil de entender y poco clara en algunas cosas, aunque la van mejorando.

Si algo falla es difícil de saber qué está pasando, ya que no da mucha información sobre el evento.

El código fuente es muy complejo. Esto está relacionado con lo anterior. No es que tengas que ir mucho a ver el código fuente, pero si alguna vez lo necesitas para ver por qué algo falla o cómo funciona una determinada característica, no es lo más fácil de seguir del mundo.

El uso de Webpack puede llegar a ser complejo y, al igual que otras herramientas típicas de desarrollo web Front-End,como gestores de dependencias o task runners, para un proyecto pequeño quizá no tenga mucho sentido usarlo o quizá no aporte grandes beneficios de entrada. Sin embargo, en proyectos de tamaño mediano o grande los beneficios se ven inmediatamente.


Si vas a programar con React es casi obligatorio que utilices Webpack, pues es la herramienta que han adoptado para su desarrollo y la que usa todo el mundo en su comunidad.


---

## :star: Babel + Node.js


```JavaScript

```

```JavaScript

```
---

## :star: JSX

---
