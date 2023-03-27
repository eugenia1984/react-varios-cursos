# :star: CLASE 09 - 27 MAR

---

## Virtual DOM

![image](https://user-images.githubusercontent.com/72580574/227961234-e0e0908a-4174-47b0-b4a8-729d5683caa5.png)

Hace como una copia del DOM, y solo va a renderizar lo que cambie, lo que queda igual no va a volver a re renderizar.

---

### Componentes

Componentes reutilizables, y me permite achicar el problema en prblemas mas chicos, cada uno hara una parte.

Los componentes se van armando de acorde a lo que voy necesitando.

---

## ¿Que hay que tener pre instalado antes de usar React?

- Nodejs y npm

- Babel: el compilador, como un traductor de JSX.

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
