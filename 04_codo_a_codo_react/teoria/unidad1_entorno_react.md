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

---


## :star: 3. Dependencies

---


## :star: 4. CLI

---


## :star: 5. Instalación de React

---
