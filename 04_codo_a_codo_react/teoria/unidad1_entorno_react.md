## :star: Unidad 1 * Entorno React

---

## Temas


```
- 1. Performance de React
- 2. NPM
- 3. Dependencies
- 4. CLI
- 5. Instalación de React
```

---

## :star: 1. Performance de React

### ¿Qué es el DOM virtual?

El DOM virtual (VDOM) es un concepto de programación donde una representación ideal o “virtual” de la IU se mantiene en memoria y en sincronía con el DOM “real”, mediante una biblioteca como ReactDOM. Este proceso se conoce como reconciliación.

Este enfoque hace posible la API declarativa de React: le dices a React en qué estado quieres que esté la IU, y se hará cargo de llevar el DOM a ese estado. Esto abstrae la manipulación de atributos, manejo de eventos y actualización manual del DOM que de otra manera tendrías que usar para construir tu aplicación.

Ya que “DOM virtual” es más un patrón que una tecnología específica, las personas a veces le dan significados diferentes. En el mundo de React, el término “DOM virtual” es normalmente asociado con elementos de React ya que son objetos representando la interfaz de usuario. Sin embargo, React también usa objetos internos llamados “fibers” para mantener información adicional acerca del árbol de componentes. Éstos pueden ser también considerados como parte de la implementación de “DOM virtual” de React.

### ¿Qué es React Fiber?

La explicación oficial de una frase es "React Fiber es una reimplementación del algoritmo central ". El ajuste de la arquitectura de fibra se anunció oficialmente muy temprano, pero tomó dos años lanzarlo oficialmente en la versión V16. La explicación oficial del concepto es demasiado general, de hecho, en resumen, React Fiber es una nueva tarea de reconciliación (reconciliación), que se explicará en detalle más adelante en este capítulo.

### ¿Por qué se llama "fibra"?

Todo el mundo debería conocer los conceptos de proceso y subproceso. El proceso es la unidad más pequeña de asignación de recursos del sistema operativo, y el subproceso es la unidad más pequeña de programación del sistema operativo. Existe otro concepto en informática llamado Fibra, que significa "" Fibra "significa un subproceso que es más delgado que Thread, que es un mecanismo de procesamiento concurrente que es más sofisticado que Thread. La fibra y la fibra React mencionadas anteriormente no son el mismo concepto, pero el equipo de React llamó a esta función Fiber, lo que significa un mecanismo de procesamiento más cercano, que es más detallado que Thread.

### Reconciliation

El nombre oficial del algoritmo central de React es Reconciliación, sinodimo de "coordinación" La implementación del algoritmo React diff Está relacionado con eso.

Repasemos brevemente React Diff: React fue pionero en el concepto de "DOM virtual". La razón principal para que el "DOM virtual" se vuelva popular es que el concepto es una innovación revolucionaria en la optimización del rendimiento de front-end;

Los estudiantes de front-end que tienen un poco de comprensión del principio de cargar páginas en los navegadores saben que los problemas de rendimiento de las páginas web ocurren principalmente en operaciones frecuentes de nodos DOM;

 

Y React garantiza el rendimiento del front-end a través del algoritmo **"DOM virtual" + React Diff;**

### Algoritmo Diff tradicional

Al comparar los nodos a su vez a través de ciclos recursivos, la complejidad del algoritmo llega a O (n ^ 3), donde n es el número de nodos en el árbol ¿Qué tan terrible es esto? ——Si desea mostrar 1000 nodos, debe realizar cientos de millones de comparaciones. . Incluso si la CPU puede ejecutar rápidamente 3 mil millones de comandos,Es difícil en un segundoCalcule la diferencia.

### Algoritmo de React Diff

Convierta el árbol DOM virtual en el árbol DOM realProceso de operación mínimo Se llama Reconciliación.

### Resumen de Virtual DOM:

- Es un patrón de comportamiento y React lo implementa con una tecnología llamada “Fiber”.

- En sí resulta ser todo lo que React sabe de tu aplicación y cada nodo o fibra.

- Esto es básicamente lo que React hace con el Virtual DOM: una representación virtual de la IU que se mantiene en memoria y en sincronía “reconciliado” con el DOM “real”.
 


---


## :star: 2. NPM


### ¿ Qué es npm ?

npm, **Node Package Manager**, es un gestor de paquetes para JavaScript. Es el gestor de paquetes más popular ahora mismo, pertenece a GitHub (Microsoft), y es el predeterminado para el entorno de ejecución de Node.js.

Gracias a npm, como desarrollador web, o agencia de desarrollo web, puedes beneficiarte de npm de muchas maneras. Sobre todo, puedes compartir código entre tus equipos o con otros programadores.

El objetivo de npm, Inc. es llevar el “desarrollo en JavaScript a la elegancia, productividad, y seguridad” y que no tengas que reinventar la rueda si quieres resolver problemas que la comunidad ya ha dado solución y otros proyectos con las mismas necesidades.

### ¿ Cómo está organizado npm ?

npm se organiza principalmente en tres partes, o componentes:

- El portal, un sitio web que te permite encontrar paquetes de terceros, gestionar tus paquetes o configurar perfiles

- La interfaz de línea de comandos de npm que te permite interactuar, instalar y publicar paquetes

- El Registro, es una colección pública de paquetes de código open-source para la mayoría de las necesidades de la comunidad JavaScript.


### El fichero package.json

Como lograste entender, npm te permite instalar un nuevo paquete desde el Registro. Además, podes descubrir y publicar nuevos paquetes de Node.js.

Si ya has instalado npm en tu máquina, debes tener acceso a los comandos típicos de npm, por ejemplo “npm -v”, para conocer la versión de tu gestor. Además, para que tu proyecto funcione correctamente con npm necesitarás tener un fichero llamado package.json en el directorio raíz.

Este fichero contiene información importante que npm usa para identificar el proyecto y gestionar las dependencias. Cuando instalas un paquete y este tiene dependencias, npm instalará también las dependencias de las dependencias.

### Algunos comandos útiles de npm

```npm install -g npm```

```npm install -g npm ``` (sirve para descargar la última versión de npm)

```npm install <nombre_del_paquete>```

Para instalar un nuevo paquete, puedes utilizar ```npm install``` *seguido del nombre del paquete*. 

Puedes encontrar el nombre del paquete en el sitio web de npm. 

También puedes utilizar “```pm i <paquete>``` para instalar, ```npm un <paquete>``` para desinstalar, ```npm up <paquete>``` para actualizar.

```npm init``` Puedes utilizar npm init para configurar un paquete de npm nuevo o uno existente. npm init crea un fichero package.json.

### ¿ Dónde se guardan los paquetes y módulos de npm ?

Cuando instalas con éxito por primera vez un paquete, podrás ver un nuevo directorio llamado **/node_modules** creado en la raíz del proyecto. Los nuevos módulos que instales se guardarán en este directorio

Además, si abres el fichero package.json, verás que la sección de dependencias se ha actualizado, incluyendo el nuevo paquete.

### Conclusión

Para finalizar, npm es una herramienta que cualquier desarrollador de aplicaciones web modernas utiliza de alguna forma. Si tu proyecto, por ejemplo, requiere funcionalidades para gestionar fechas y horas, npm te permite integrar bibliotecas como moment de forma fácil, y gestionar estas fechas.

Creo que vale la pena referir que existen otras herramientas y gestores de paquetes con el mismo objetivo. De todas formas, utilices npm u otro, te recomiendo que lo hagas de manera responsable.




---


## :star: 3. Dependencies

---


## :star: 4. CLI

---


## :star: 5. Instalación de React

---
