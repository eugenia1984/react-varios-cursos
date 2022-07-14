# Tic Tac Toe: A playfull Intro to React (SKILL SHARE) 


¿Queres aprender React de forma divertida?

En esta clase, aprenderás os conceptos claves de React mientras contruyes un juego de Tic Tac Toe.

mientras construimos un juego completamente funcional, nos sumergimos en algunos conceptos básicos de React, como:

- Dividir la aplicaicón  o juego en partes pequeñas, en componentes.

- Como estructurar su logica y cómo conectar estos componentes con **props** y **callbacks**

- Como lidiar con el cambio, qué es el **estado**, qué alamcenar en él y cómo definirlo

- Como agregar **interacción** y cómo funciona el **renderizado** en React

También dibujaremos algunas imágenes básicas mediante codificación de SVG.

Es un curso introductorio, no requiere conocimiento previo de React, pero se requiere algunas habilidades básicas de **HTML**, **CSS** y **JavaScript**

---

## Algunos conceptos



- **COMPONENTE**: un componente es como una función por dos motivos...

... deberemos romper la aplicacion en pequeños componentes que tengan significado

... para evitar repetir el codigo, se crea una vez y se llama en varios lugares

Vamos a necesitar elcomponente principal, el **root** para inyectarlo en el HTML, que contenga a toda al app.

---

### ¿ Qué componentes necesitaremos en la app del tic tac toe ?

Viendo el tic-tac-toe hay cosas que se repiten, y serán los compoenntes:

- **X** (la equis) -> **cross**

- **O** (el circulo) -> **circle**

- hay una grilla con 9 **cuadrados**, donde vamos a ir poniendo las X ú O -> **square**

- Luego de jugar en esta aplicación vamos a tener que mostrar el resultado, si uno ganó o no -> **result**

---
