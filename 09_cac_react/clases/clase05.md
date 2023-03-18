# :star: CLASE 05 - 13 MAR

---

## :star:Proyecto HUMAYA:star:

Cada uno sigue maquetando y agregando el CSS necesario para que se vea bien, a futuro lo retomamos y le vamos a agregar JavaScript

---

## :star:Proyecto LISTA DE TAREAS:star:

- Vamos a crear una lista de tareas:

![image](https://user-images.githubusercontent.com/72580574/224829013-312dca1a-fc10-466b-8ece-88f727915570.png)

- Primero en la clase hacemos el maquetado con HTML y le agregamos los estilos con CSS.

🖥️: -> Links útiles para irse guiando:

[Repositorio de la profesora](https://github.com/GiselaFlores/ListaDeTareas)

[Link de resultado final, de la profesora](https://listadetareasjs-cac.netlify.app/)

---

## :computer: Para ver mi práctica:

[Aca está el repositorio con el código](https://github.com/eugenia1984/listaDeTareas)

---

# :star: CLASE 06 - 15 MAR

- Seguimos con la **lista de tareas**.

- Comenzamos con otra práctica de JavaScript, con HTML5 y CSS3 vanilla. En tl HTMl tenemos in ```<div>``` con un **id** -> ```<div id="arrayEstilos">```, es este div vamos a renderizar el JavaScript.

### Variables en JavaScript

- **var**: deprecado el uso, por el inconveneinte del scope global, por eso es mejor usar let.

- **let**: para variable

- **const**: para constante

### console.log

- Además del **console.log** hay otras formas como **console.info**, **console.warn**, **console.table**

- Nos ayuda a ir "debugueando" mientras hacemos el codigo, luego hay que sacarlo.

### Array

- Un conjunto de datos, como una caja contenedora de datos. Permite almacenar distintos objetos, pueden ser Number, Sting, otro Array, un Object.

- Cada elemento del array tiene una posición. Recordar que el primer item es la posición 0.

- Declaración:

```JavaScript
const miArray = [] // lo dejo vacio sin asignarle un valor
const numeros = [1, 2, 3, 4, 5] 77 array inicializado y con valores asignados
const arrayVariado = [1, true, "amanecer", ["a", "e", "i", "o", "u"], 3.5,{nombre:"Ana", apellido:"Bruni"}]
console.log(arrayVariado[3][1]) // "e"
console.log(arrayVarido[5].nombre) // "Ana"
```

-```length``` -> para saber la longitud del array, si es 0 el array está vacío.


-> Práctica

```JavaScript
let comidas = ["pastas", "ensaladas", "hamburguesas","milanesas"]
comidas.length // 4
```

Recorremos el array con el método **forEach**

```
comidas.forEach(comida => console.log(comida))
```

---

## 📋 Tarea

Generar con JavaScript una array, que sea una lista, y renderizarla en el HTML.


---
---

## :star:MANUAL DE JAVASCRIPT:star:


## ¿QUÉ ES JAVASCRIPT?

ES UN LENGUAJE DE SECUENCIAS DE COMANDOS QUE TE PERMITE CREAR CONTENIDO DE ACTUALIZACIÓN DINÁMICA,
CONTROLAR MULTIMEDIA, ANIMAR IMÁGENES Y PRÁCTICAMENTE TODO LO DEMÁS .

En una definición de alto nivel, JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, después de HTML y CSS.

Entonces, ¿qué puede hacer realmente? El núcleo del lenguaje JavaScript de lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas como:

- Almacenar valores útiles dentro de variables.

- Permite operaciones sobre fragmentos de texto (conocidas como "cadenas" (strings) en programación).

- Y ejecuta código en respuesta a ciertos eventos que ocurren en una página web. Usamos eventos como el click para detectar cuándo se hace clic en el botón y luego ejecutar el código que actualiza la etiqueta de texto. Y mucho más.

Sin embargo, lo que aún es más emocionante es la funcionalidad construida sobre el lenguaje JavaScript de lado del cliente. Las denominadas interfaces de programación de aplicaciones (API)
te proporcionan superpoderes adicionales para utilizar en tu código JavaScript.

Así también permite usar diferentes librerías como React o frameworks como Next que potencian el uso del lenguaje.


### ¿CÓMO FUNCIONA JAVASCRIPT?

Cuando cargas una página web en tu navegador, estás ejecutando tu código (HTML, CSS y JavaScript)
dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma
materias primas (el código) y genera un producto (la página web).

El uso más común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través del modelo de objetos del documento.

Ten en cuenta que el código de tus documentos web generalmente se cargan y ejecutan en el orden en que aparece en la página. Si JavaScript se carga e intenta ejecutarse antes de que se hayan cargado el HTML y el CSS al que afecta, pueden producirse errores. Por ese motivo JavaScript trabaja con un único hilo de producción y en su mayoría de forma asíncrona.

JavaScript es un lenguaje de programación interpretado ligero. El navegador web recibe el código
JavaScript en su forma de texto original y ejecuta el script a partir de ahí. Desde un punto de vista técnico, la mayoría de los intérpretes de JavaScript modernos utilizan una técnica llamada compilación en tiempo real para mejorar el rendimiento; el código fuente de JavaScript se compila en un formato binario más rápido mientras se usa el script, de modo que se pueda ejecutar lo más rápido posible. Sin embargo, JavaScript todavía se considera un lenguaje interpretado, ya que la compilación se maneja en el entorno de ejecución, en lugar de antes.

### ¿QUE ESECMASCRIPT?

ECMAScript es el nombre estandarizado del lenguaje de programación comúnmente conocido como Javascript, y ECMAScript2015 (su año de publicación), o ES6, hace referencia a la 6a versión de este
lenguaje, superando a la anterior, ES5, nacida en 2011.

Cuando hablamos de ECMAScript, nos referimos al estándar que ya va por la versión ES6 y determina cómo emplear el lenguaje Javascript, que permite a los fabricantes de software desarrollar las herramientas adecuada para interpretarlo correctamente.

### REQUISITOS PARA USAR JAVASCRIPT 

Para comenzar a usar JavaScript es necesario manejar algunos conceptos previos en cuanto a HTML y CSS, ya que será JavaScript el encargado de ponerle dinamismo a lo que antes era estático.

Para ello debemos contar con los siguientes recursos:

- 01 - Saber desarrollar un sitio web estático con HTML5 y CSS3.

- 02 - Un editor de código como el Visual Studio Code o similar.

- 03 - Conocer donde encontrar las propiedades y métodos de JS.

Haciendo incapíe en el último punto tendremos diferentes sitios de consulta para poder verificar y conocer como se maneja la sintaxis y la lógica de JavaScript, te dejamos los links para que puedas tenerlos siempre a mano:

#### LINKS DOCUMENTACIÓN JS

https://developer.mozilla.org/es/docs/learn/javascript

http:// www.w3schools.com/js/default.asp

https://es.stackoverflow.com

https://es.javascript.info

### ¿CÓMO SE CREA UN ARCHIVO .JS?

Para comenzar a trabajar con JavaScript es necesario crear una carpeta donde se va a guardar el proyecto de la web, luego crear los archivos index.html, style.css y javascript.js.

Con esos archivos creados podremos acceder desde el VSC para comenzar a operar.

Recuerda que si presionas el atajo en VSC de !+ TAB, obtendrás un HTML básico.

![image](https://user-images.githubusercontent.com/72580574/226080890-9fa4199f-751c-469e-ba13-26ff00ac83ca.png)


### ¿CÓMO VINCULAR UN .JS AL HTML?

Para poder vincular una hoja externa de javascript es necesario ingresar al html y usar las etiquetas `<script></script>` dentro del HEAD del HTML, también podemos usar la misma etiqueta y hacer el
código dentro del HTML, pero esta práctica no es la correcta ni la más optima o recomendada.

Veamos con un ejemplo como vincular la hoja de javascript.js en el HTML:

![image](https://user-images.githubusercontent.com/72580574/226080953-8665f33e-1176-4103-a446-04b05f37f036.png)

Mirando mas de cerca, la etiqueta `<script></script>` tiene una propiedad SRC="", donde va el nombre que lleva el archivo creado .JS, importante aclarar que es necesario colocar la ruta relativa si esta dentro de una carpeta y que con la tecla CRTL + ESPACIADORA nos permite seleccionar las opciones del desplegable como muestra en pantalla.

### ¿DESDE DÓNDE PODEMOS EJECUTAR JS?

PODEMOS TRABAJAR CON JAVASCRIPT DESDE DIFERENTES LADOS, POR SUPUESTO ALGUNAS FORMAS SON MÁS
EFECTIVAS QUE OTRAS, PERO VEAMOS CUAL ES HAY ADEMÁS DE LA HOJA.JS .


#### JS FUERA DEL NAVEGADOR

Ingresando a un powershell/cmd podemos verificar con el comando `node --version` si tenemos instalado NODE, en caso de que esté, podemos operar por medio de NODE y hacer un "Hola Mundo" directamente desde allí, veamos un ejemplo:

![image](https://user-images.githubusercontent.com/72580574/226081184-55a3b422-25ba-41f1-a9b5-2cff23e72e7c.png)

### JS DESDE LA TERMINAL DEL VSC

Podemos usar javascript desde VSC por medio de la terminal, veamos un ejemplo:

![image](https://user-images.githubusercontent.com/72580574/226081225-6041a245-7c8e-49d6-99e9-983c4d548c37.png)


###  JS DESDE HTML

Podemos usar javascript por medio de un archivo externo .js como vimos anteriormente
más útil y práctico, o bien localmente en el HTML, pero este último no es una buena
practica, veamos un ejemplo:

![image](https://user-images.githubusercontent.com/72580574/226081260-10c6bbec-0c54-4b26-a7cb-fce3621efe7e.png)

### ¿Y DÓNDE PONEMOS CORRECTAMENTE JS?

UN CONFLICTO EXISTENCIAL . . .

Si bien es algo que es relativo al tipo de diseño que desarrollemos, usualmente se recomienda que los scripts vayan al final de la página. ¿Por qué?

Porque cuando el navegador web empieza a cargar empieza por la primer línea, y va en forma secuencial, por lo pronto si ahí encontrara un archivo de JavaScript al principio se va a ir a cargar el archivo de JavaScript primero antes de continuar con la lógica que venía implementando, es decir que empieza a cargar ese archivo de JavaScript antes que el HTML y si este fuera un archivo muy pesado o tiene algún tipo de código que bloquea la ejecución de JavaScript nuestro sitio web no se va a renderizar hasta que todo el código de JavaScript se ejecute y va a dar la impresión de que el sitio web es lento o tarda demasiado en cargar.

Entonces por ese motivo se recomienda que primero lea todo el HTML, los botones, los Divs, las imágenes, etc. y por último ejecute el código de JavaScript que permitirá que el usuario interactúe con el sitio pero no vera ni su carga ni su ejecución.

Esta será una buena práctica para optimizar el sitio y procuren no utilizar scripts dentro del HTML a menos de que sea totalmente necesario.


### ¿CÓMO ES LA SINTAXIS DE JAVASCRIPT?

PARA TRABAJAR CON JAVASCRIPT ES NECESARIO TENER EN CUENTA ALGUNAS COSAS QUE NOS SERÁN ÚTILES A
MEDIDA QUE VAYAMOS TRABAJANDO Y CONOCIENDO SU ESTRUCTURA LÓGICA Y SINTAXIS.

En cuanto a la forma de programar en javascript tenemos que tener en cuenta algunos criterios esenciales que nos permitirán crear la lógica que deseamos.


Su estructura tiene varios componentes y formas que iremos viendo uno a uno con sus ejemplos correspondientes.

Por ahora veremos un código armado y explicaremos ese detalles de arranque para salir de dudas más adelante en cuanto a la forma de escribir.

Hay que tener presente que lo que formulemos desde el lado de javascript lo podremos ver reflejado tanto en la consola como en el HTML, va a depender que necesitemos para poder hacer uno u otro
proceso.

Y es importante resaltar que se escribe con formato CAMEL CASE en cuanto a las declaraciones de variables, funciones etc.

Tal como mencionamos en el párrafo anterior, tendremos habilitada una CONSOLA, que nos permitirá ver por medio de ciertas acciones las cosas que ejecutemos, así también los ERRORES que aparezcan de acuerdo a la lógica que armemos.

En cuanto a los Errores veremos que hay de diferentes tipos más adelante.

La forma de acceder a la consola de JS es por medio de las teclas F12 o en algunas otras PC con la opción FN + F12 o con botón derecho sobre la web abierta en el navegador, en la opción de
INSPECCIONAR, eligiendo del menú CONSOLE o CONSOLA (según el idioma).

A continuación veremos todos estos detalles en un código javascript simple.

En el siguiente archivo javascript.js veremos diferentes partes importantes a tener en cuenta para los proyectos futuros:

![image](https://user-images.githubusercontent.com/72580574/226081607-3083192f-7d7c-43df-81fb-f4ec2b70a668.png)


- **COMENTARIOS DEL CÓDIGO**: En JAVASCRIPT los comentarios pueden ser de línea o de bloque, similar a CSS, esas lineas no saldrán en ningún lado y solo serán pequeños aportes para comprender la lógica que se arme, es una buena práctica el implementar comentarios de los bloques importantes para comprender mejor lo que realiza cada parte.

- **DECLARACIONES**: En JAVASCRIPT decimos que "declaramos" algo cuando estamos armando una variable o una función por ejemplo, y al hacerlo es sumamente importante tener en cuenta el nombre de las mismas, ya que deberían ser declarativas y en formato CAMEL CASE, es decir, que si quiero declarar una variable por ejemplo que asigne el código de un producto, podría realizarse de las siguientes formas:

![image](https://user-images.githubusercontent.com/72580574/226081680-1e6c1037-cd23-4e42-a1e9-860ef16617ef.png)


![image](https://user-images.githubusercontent.com/72580574/226081692-8ed8d99f-459b-4243-8ec6-b845a64ac9d3.png)


- **SCOPE (ALCANCE)**: En JAVASCRIPT el uso de los diferentes componentes que se declaren están sujetos a un SCOPE, es decir a un alcance propiamente dicho de donde se está declarando. En el ejemplo anterior podemos ver que hay 2 variables con el mismo nombre SALUDO, pero una esta fuera de alcance para el proceso que realiza el condicional IF, por lo tanto el SCOPE del IF tomara como variable SALUDO a aquella que está en su contexto, es decir a su alcance. No es una buena práctica usar los mismos nombres, pero se podría si están dentro de SCOPE diferentes.

- **BASTICKS (`COMILLAS INVERTIDAS` )**: En JAVASCRIPT hay varias formas de concatenar contenidos, es decir, unir cosas, pero la más funcional es usando las comillas invertidas o BASTICKS, que se pueden colocar apretando la tecla ALT + 96, o bien algunos teclados la tienen en la segunda función de los caracteres.
 
Lo bueno e interesante que tiene esta forma es que permite concatenar o unir tres cosas:

- Texto

- Variables

- Tag de HTML

Es un potente unificador, lo único que hay que tener en cuenta es que:

- El texto debe ser agregado sin comillas dobles ni simples

- Las variables deben ser ingresadas con el formato `${ nombreVariable }` para ser reconocidas

- Los tags deben ser igual que en el HTML

- Y puede ser almacenado en una variable o usarse en alguna declaración.

![image](https://user-images.githubusercontent.com/72580574/226081835-b99bb2f4-5203-40d8-878d-e880fee9d857.png)

Lo cual permite combinar todo en un único formato sin contemplar espacios o signos " + " para unir
expresiones.

Es muy potente su uso y será el formato ideal para trabajar dinámicamente más adelante.

Con este tipo de expresión podemos ver en la web reflejado dichos cambios de dos maneras, una es
en el HTML propiamente dicho y la otra por consola.

A continuación veremos como queda el ejemplo anterior visto de ambos lados.

- **VISTA DE DATOS**: En JAVASCRIPT hay varias formas de visualizar los datos, una es por medio de la consola y la otra por diferentes métodos y propiedades que imprimen el código en el HTML.

A medida que vayamos conociendo el lenguaje y sus estructuras iremos viendo las que son del lado del
HTML y usaremos la consola solo para verificar cosas.

En el ejemplo anterior hay dos sentencias declarativas para mostrar el contenido, veremos como se ve
lo mismo en ambas partes:

![image](https://user-images.githubusercontent.com/72580574/226081880-0e3cc9fa-36d5-40d4-868a-e8d25acbf296.png)

-> desde el **HTML**: Por medio de esa sentencia podemos ver aplicado todo el renglón anterior en el HTML, es una función del DOM que veremos más adelante.

Pero nos muestra tal cual lo declaramos en la variable SALUDO, concatenando texto, variable y HTML.

-> desde la **CONSOLA**: Por medio de esa sentencia podemos ver aplicado todo el renglón anterior en la CONSOLA, pero nos muestra tal cual lo escribimos en la variable SALUDO, no aplica las conversiones como en la sentencia del HTML, solo nos muestra que contiene la variable SALUDO en su interior.


### ERRORES EN JAVASCRIPT


#### ¿QUÉ SALIO MAL ?

En general, cuando haces algo mal en el código JAVASCRIPT da error y no procesa la información, los
errores y el tipo de error se pueden visualizar en la CONSOLA.

Hay dos tipos principales de errores:

- **ERRORES DE SINTAXIS**: estos son errores de ortografía en tu código que provocan que tu
programa no se ejecute en absoluto, o que deje de funcionar a mitad del camino.

- **ERRORES LÓGICOS**: estos son errores en los que la sintaxis realmente es correcta pero el código no hace lo que pretendías, lo cual significa que el programa se ejecuta pero da resultados
incorrectos.

#### ¿CÓMO LO RESUELVO?

- 01- Verificá en el código si no hay un error ortográfico o espacio incorrecto.

- 02 - Verificá que tengas las asignaciones correctamente y que la sintaxis es adecuada.

- 03 - Verificá que la estructura lógica usada esté acorde para la función que deseas.

-> ASÍ SE VEN LOS ERRORES POR CONSOLA

![image](https://user-images.githubusercontent.com/72580574/226082004-2113bd2e-108f-46f2-a163-445291866bff.png)

## ESTRUCTURAS DE JAVASCRIPT

- **VARIABLES**

En JAVASCRIPT la menor porción de código posible que podemos escribir es una variable, por lo tanto
podemos decir que:

" Las variables son contenedores de valores como números, cadenas de texto, objetos, arrays etc. con
la finalidad de ser reutilizadas y manipular su contenido"

Hay tres tipos de variables:

- **VAR** (ya no se utiliza): En JAVASCRIPT las variables de tipo VAR tienen un alcance global pero ya no están en uso debido a la
lógica que se usa en la actualidad con respecto al alcance (SCOPE) y utilización local.
Se pueden crear sin problema pero no es una buena práctica.

- **LET**: En JAVASCRIPT las variables tipo LET tienen un alcance local de donde se declaran, respetando el SCOPE donde se definen. Por lo tanto siempre que trabajemos usaremos este tipo de variable.
- 
En la estructura del JAVASCRIPT moderno la idea es trabajar por pequeñas partes (lógicas simples) y
unirlas para formar una estructura más grande (lógicas complejas), a este sistema de trabajo se lo
denomina MODULACIÓN. Y las variables juegan un papel importante.

- **CONST** (un caso particular): En JAVASCRIPT las variables tipo CONST, son constantes, son unas especies de variables camufladas ya que su estructura cumple un rol similar pero con una gran diferencia, ya que su contenido no puede ser alterado, pero si usado, es decir, que le podemos indicar un valor propiamente dicho "CONSTANTE" como el valor del numero PI, un valor de IVA, un porcentaje de calculo, etc. que utilizamos en varias cuentas y cálculos sin alterar la misma. Su alcance es global y generalmente se declaran a principio, por convención generalmente sus nombres se escriben en mayúscula.

Las variables y constantes tienen una estructura similar que veremos a continuación, cuando las
DECLARAMOS, es decir, las creamos y definimos su nombre y uso, podemos asignarles diferentes
valores o no, qué queremos decir con eso? que cuando la declaramos podemos INICIALIZARLA o no, en
breve veremos unos ejemplos. A su vez las mismas son CASE SENSITIVE, por lo tanto reconoce
minúsculas y mayúsculas. En cuanto al tipo de dato que podemos cargar en ellas es muy variado y lo
iremos descubriendo con la practica.


#### Ejemplo de variables:

```JavaScript
let saludo = `<h1>Hola ${ nombre }</ h1> Bienvenida`;
let cursada = "Curso de JavaScript";
let numeroConComa = 2.5;
let futuraVariable;
let nuevaVariable = cursada;
let asignacionMultiple = 10, segunda, tercera = "algo";
```

Cuando le asignamos valores a las variables tenemos que tener en cuenta lo siguiente:

- Puede recibir números reales y decimales.

-Puede recibir cadenas de caracteres (palabras o texto), los mismos deben estar entre comillas
dobles " " o en comillas simples ' '.

- Puede recibir un expresión de cadena entre comas invertidas (BASTICKS).

-Puede recibir un objeto.

- Puede recibir un array.

- puede recibir otra variable.

- No es necesario declarar el tipo de dato que va a almacenar como otros lenguajes tales como
JAVA.

- No es necesario inicializarla con un valor.

- Se pueden asignar en forma múltiple en la misma línea.

#### Ejemplos de constantes

```JavaScript
const SALUDO = " hola";
const NUMEROPI = 3.14;
const IVA = 21;
const TITULO = `<h1>Hola</ h1>`;
```

Cuando le asignamos valores a las constantes tenemos que tener en cuenta lo siguiente:

- Puede recibir números reales y decimales.

- Puede recibir cadenas de caracteres (palabras o texto), los mismos deben estar entre comillas
dobles " " o en comillas simples ' '.

- Puede recibir un expresión de cadena entre comas invertidas (BASTICKS).

- Puede recibir un objeto.

-Puede recibir un array.

- puede recibir otra variable.

- No es necesario declarar el tipo de dato que va a almacenar como otros lenguajes tales como
JAVA.

- Debe estar inicializada siempre, no se puede dejar vacía.

- Se pueden asignar en forma múltiple en la misma línea.


### ¿SABIAS QUÉ...?

LAS VARIABL E S PUEDEN T ENER ASIGNADO UN VALOR ESPECIAL COMO:

![image](https://user-images.githubusercontent.com/72580574/226082368-0a79c7d9-9daf-434f-a1fd-82d5aed03495.png)

CUANDO SE OPERAN VARIABLES PUEDEN DAR COMO RESULTADO UN VALOR ESPECIAL COMO:

![image](https://user-images.githubusercontent.com/72580574/226082403-1d456dc7-d0ab-43de-bc0a-c3d5fbd841c1.png)


### ¿QUÉ MÁS...?

LAS VARIABLES TAMBIÉN PUEDEN NO TENER ASIGNADO UN VALOR O ASIGNACIÓN MULTIPLE LINEA COMO:

![image](https://user-images.githubusercontent.com/72580574/226082433-071cee9c-aa78-4172-b583-b84890f2d984.png)

### CON LAS VARIABLES PODEMOS REALIZAR CUALQUIER TIPO DE OPERACIÓN VEAMOS EL EJEMPLO ANTERIOR:

![image](https://user-images.githubusercontent.com/72580574/226082525-4246fc73-ce3a-4ffb-87da-d7554bef85b0.png)



---
---

## :star:GIT - HOJA DE REFERENCIA PARA GITHUB:star:

**Git** es el sistema de control de versiones distribuido de fuente abierta que facilita las actividades de GitHub en su computadora portátil o de escritorio. Esta hoja de referencia rápida resume las instrucciones de las líneas de comando de Git más comúnmente usadas.

- **INSTALAR GIT**: GitHub le ofrece a los clientes de computadoras de escritorio que 
incluye una interfaz gráfica de usuario para las acciones de repositorio más comunes y una edición de línea de comando de actualización automática de Git para escenarios avanzados.

- **GitHub para Windows**: [https://windows.github.com](https://windows.github.com)

- **GitHub para Mac**: [https://mac.github.com](https://mac.github.com).

-   Hay distribuciones de Git para sistemas Linux y POSIX en el sitio web oficial Git SCM.

- **Git para toda plataforma**: [http://git-scm.com](http://git-scm.com)

### CONFIGURAR HERRAMIENTAS

Configura la información del usuario para todos los respositorios locales

```$ git config --global user.name "[name]"``` -> Establece el nombre que desea esté anexado a sus transacciones
de commit

```$ git config --global user.email "[email address]"``` -> Establece el e-mail que desea esté anexado a sus transacciones de commit

```$ git config --global color.ui auto``` -> Habilita la útil colorización del producto de la línea de comando


### EFECTUAR CAMBIOS

Revisa las ediciones y elabora una transacción de commit

```$ git status``` -> Enumera todos los archivos nuevos o modificados que se deben confirmar

```$ git add [file]``` -> Toma una instantánea del archivo para preparar la versión

```$ git reset [file]``` -> Mueve el archivo del área de espera, pero preserva su contenido

```$ git diff``` -> Muestra las diferencias de archivos que no se han enviado aún al área de espera

```$ git diff --staged``` -> Muestra las diferencias del archivo entre el área de espera y la última versión del archivo

```$ git commit -m "[descriptive message]"``` -> Registra las instantáneas del archivo permanentemente en el historial de versión


### CAMBIOS GRUPALES

Nombra una serie de commits y combina esfuerzos ya culminados

```$ git branch``` -> Enumera todas las ramas en el repositorio actual

```$ git branch [branch-name]``` -> Crea una nueva rama

```$ git checkout [branch-name]``` -> Cambia a la rama especificada y actualiza el directorio activo

```$ git merge [branch]``` -> Combina el historial de la rama especificada con la rama actual

```$ git branch -d [branch-name]``` -> Borra la rama especificada


### NOMBRES DEL ARCHIVO DE REFACTORIZACIÓN

Reubica y retira los archivos con versión

```$ git rm --cached [file]``` -> Retira el archivo del control de versiones, pero preserva el archivo a nivel local

```$ git rm [file]``` -> Borra el archivo del directorio activo y pone en el área de espera el archivo borrado

```$ git mv [file-original] [file-renamed]``` -> Cambia el nombre del archivo y lo prepara para commit



### SUPRIMIR TRACKING

Excluye los archivos temporales y las rutas

```
*.log
build/
temp-*
```
Un archivo de texto llamado .gitignore suprime la creación accidental de versiones de archivos y rutas que concuerdan con los patrones 
especificados


```$ git ls-files --other --ignored --exclude-standard``` -> Enumera todos los archivos ignorados en este proyecto

### GUARDAR FRAGMENTOS

Almacena y restaura cambios incompletos

```$ git stash``` -> Almacena temporalmente todos los archivos tracked modificados

```$ git stash list``` -> Enumera todos los sets de cambios en guardado rápido

```$ git stash pop``` -> Restaura los archivos guardados más recientemente

```$ git stash drop``` -> Elimina el set de cambios en guardado rápido más reciente

### REPASAR HISTORIAL

Navega e inspecciona la evolución de los archivos de proyecto

```$ git log``` -> Enumera el historial de la versión para la rama actual

```$ git log --follow [file]``` -> Enumera el historial de versión para el archivo, incluidos los cambios de nombre

```$ git diff [first-branch]...[second-branch]``` -> Muestra las diferencias de contenido entre dos ramas

```$ git show [commit]``` -> Produce metadatos yc ambios de contenido del commit especificado


### REHACER COMMITS

Borra errores y elabora historial de reemplazo

```$ git reset [commit]``` -> Deshace todos los commits después de [commit], preservando los cambios localmente

```$ git reset --hard [commit]``` -> Desecha todo el historial y regresa al commit especificado


### SINCRONIZAR CAMBIOS

Registrar un marcador de repositorio e intercambiar historial de versión

```$ git fetch [bookmark]``` -> Descarga todo el historial del marcador del repositorio

```$ git merge [bookmark]/[branch]``` -> Combina la rama del marcador con la rama local actual

```$ git push [alias] [branch]``` -> Carga todos los commits de la rama local al GitHub

```$ git pull``` -> Descarga el historial del marcador e incorpora cambios

---
---

# :star: MANUALES Y APUNTES:star:

## Links importantes:

- [CÓDIGO ACSII](https://elcodigoascii.com.ar/codigos-ascii/acento-grave-codigo-ascii-96.html)

- [MANUAL DE JS](https://desarrolloweb.com/manuales/manual-javascript.html)

- [TUTORIAL DE HTML](https://www.youtube.com/watch?v=kN1XP-Bef7w)

- [TUTORIAL DE CSS3](https://www.youtube.com/watch?v=OWKXEJN67FE)

- TUTORIAL JS:

-[Nivel JS 1](https://www.youtube.com/watch?v=z95mZVUcJ-E)

-[Nivel JS 2](https://www.youtube.com/watch?v=xOinGb2MZSk)

-[Nivel JS 3](https://www.youtube.com/watch?v=EbMi1Qj4rVE)

- [TUTORIAL DE GIT Y GITHUB](https://www.youtube.com/watch?v=HiXLkL42tMU
https://www.youtube.com/watch?v=3XlZWpLwvvo)

---
---
