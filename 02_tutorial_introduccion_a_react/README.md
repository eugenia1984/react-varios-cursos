# Tutorial : Introducciçon a React

Desde la web de React -> [https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)

---


## Este tutorial está dividido en varias secciones:

- **Configuración para el tutorial** te dará un punto de partida para seguir el tutorial.

- **Visión general** te enseñará los **fundamentos** de React: componentes, props y estado.

- **Completando el juego** te enseñará las **técnicas más comunes** en desarrollo de React.

- **Agregando viaje en el tiemp**o** te dará una **visión más profunda** de las fortalezas únicas de React.

---

## ¿Qué estamos construyendo?

En este tutorial, te mostraremos cómo construir un juego de tic-tac-toe interactivo con React.

Puedes ver lo que construiremos aquí: [Resultado Final](https://codepen.io/gaearon/pen/gWWZgR?editors=0010). El objetivo de este tutorial es ayudarte a entender React y su sintaxis.

---

## Configuración para el tutorial

Hay dos maneras de completar este tutorial: puedes escribir el código en tu navegador, o puedes configurar tu entorno de desarrollo local en tu computador.

### Opción de configuración 1: Escribe código en el navegador

¡Esta es la forma más rápida de empezar!

Primero, abre este código inicial en una nueva pestaña. La nueva pestaña deberá mostrar un tablero vacío del juego de tic-tac-toe y código de React. Estaremos editando el código de React en este tutorial.

Ahora puedes saltarte a la segunda opción de configuración o ir a la sección de visión general para obtener una idea general de React.

### Opción de configuración 2: Entorno de desarrollo local

¡Esta es completamente opcional y no es requerida para este tutorial!


-> *Instrucciones para seguir adelante localmente usando tu editor de texto preferido*

Esta configuración requiere más trabajo pero te permite completar el tutorial usando un editor de tu elección.

 Aquí los pasos a seguir:

1- Asegúrate de tener una versión reciente de Node.js instalada.

2- Sigue las instrucciones de instalación de Create React App para hacer un nuevo proyecto.
```npx create-react-app my-app```

3- Elimina todos los archivos en la carpeta src/ del nuevo proyecto.

*Nota*: No elimines la carpeta src por completo, solo los archivos de código fuente originales dentro de ella. Reemplazaremos los archivos de código fuente por defecto con ejemplos para este proyecto en el siguiente paso.

```
cd my-app
cd src

# Si usas Mac ó Linux:
rm -f *

# Ó, si usas Windows:
del *

# Luego, regresa a la carpeta del proyecto
cd ..
```

4- Agrega un archivo llamado index.css en la carpeta src/ con este código CSS.

5- Agrega un archivo llamado index.js en la carpeta src/ con este código JS.

6- Agrega estas 3 líneas en la parte superior del archivo index.js en la carpeta src/:
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
```

Ahora, si tu ejecutas ```npm start``` en la carpeta del proyecto y abres *http://localhost:3000* en el navegador, deberías ver un campo de tic-tac-toe vacío.

---



