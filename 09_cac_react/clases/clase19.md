# :star: CLASE  19 - Librerías externas para trabajar con React

---

## Links:

- [Tailwind](https://tailwindui.com/) - [documentacion de instalacion](https://tailwindcss.com/docs/installation) - [componentes](https://tailwindui.com/components/marketing/sections/pricing) - [Componentes2](https://tailwindcomponents.com/) - [tailwindshades](https://www.tailwindshades.com/) - [componentes - cheatsheet](https://tailwindcomponents.com/cheatsheet/)

- [headlessui](https://headlessui.com/)

- [Para iconos: heroicons](https://heroicons.com/)

- [React Bootstrap](https://react-bootstrap.github.io/)

- [Material UI](https://mui.com/)

- [Chakra](https://chakra-ui.com/)

---


## :computer: Pasos para instalar Tailwind

- Se puede instalar con **npm** o por ***CDN**

- Con npm: una vez cre **creamos el proyecto**, `npm install -D tailwindcss` y `npx tailwindcss init`, para crear el archivo en el que vamos a configurar Tailwind, el archivo se llama: **tailwind.config.js**, en este archivo debemos agregar: 

```
content: [
  "./src/**7**.{html,js,jsx,ts,tsx}"
]
```
Si uso TS agrego **ts** y **tsx**, si trabajo con JavaScript no la agrego.

- Hay que cargar las propiedades de estilos css en el archivo: *src/input.css***, si me creo esta hoja de estilos, sino la puedo poner en mi index.css, tiene que ser el que le los estilos a mi App

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Empezamos el proceso CLI build: `npx tailwind -i ./src/input.css -o ./dist/output.css --watch`

Hay que ver porque hay comoponentes que usan otras librerias como: **heroicons**(iconos) y **headlessui**(componentes para integraarse con Tailwind, tiene: menu, listbox, combobox, switch, modal, popover, radio groups, etc). Lo instalamos con `npm install @heroicons/react` y  `npm install @headlessui/react`


---


## :computer: React Bootstrap - MUI - Chakra


Las tres tienen componentes de React estilizados con la librería correspondeinte.

---

:computer: [Repo de muestra de la profe](https://github.com/GiselaFlores/tailwindcss)

---
