# React

---

## Clase 14/09

React es **reactivo**

**Reconciliación** cuando unifica el VIRTUAL DOM al DOM.

**Flujo de datos unidireccional** del componente padre al componente hijo.

**Proceso** -> **Subproceso** -> **Treads** -> **Fiber** (un subproceso más avanzado)

---

```<div className="container">Pepe</div>```


```react.creeateElement('div', {className: 'container'}, 'Pepe')```

---

## npm

Node Package Manager, es un manejador de paquetes (son librerias) que terceros las crean, por eso hay que ver con que se trabaja.

Comandos:

```npm i nombre_paquete``` ò ```npm install nombre_paquete``` para instalar

```npm un nombre_paquetew``` ó ```npm uninstall nombre_paquete``` para desinstalar

```npm init``` para crear un nuevo paquete

```npm update nombre_paquete``` para actualizarlo (aca hay que teer cuidado que no se nos rompa todo

En **node_modules** están todos y en el **package.json** voy a tener el detalle de las librerias y las versiones utilizadas.

Dentro del **package.json** tengo el **script** donde puedo poner mis propios comandos.

---

### webpack

Es un empaquetador de modulos, trabaja como compilador, vincula todos los elementos del proyecto para el elemento definitivo. Gestiona las dependencias, la ejecucion de tareas. Carga y usa modulos de todo tipo.

Task runner, procesa los archivos para poder mostrarlos en el navegador.

No es sencillo configurar webpack.

Nos sirve como servidor y como compiladorÇ

---

### Babel

Es un traspilador, transcribe le codigo posterior a ES6, para que sea compatible con los navegadores viejitos.

---
