# Tic Tac Toe: A playfull Intro to React (SKILL SHARE) 

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
