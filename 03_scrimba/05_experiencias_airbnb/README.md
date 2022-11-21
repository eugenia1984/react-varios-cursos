### 2do proyecto: Clone de las experiencias de airbnb

![image](https://user-images.githubusercontent.com/72580574/200696130-a2a9bec3-6564-443f-8557-fd207560766b.png)

---

-> [Aca se puede ver el diseño en Figma](https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1&t=7dq2BK8ToYT7D9wQ-0)

-> [Aca pueden ver el proyecto en codigo](https://github.com/eugenia1984/scrimba-project2)

---

## :book: Temas que se ven:

```
- props
- crear componentes desde un array de datos
```

## Primer problema: UI no reutilizables

![image](https://user-images.githubusercontent.com/72580574/203087057-34456282-e92d-4239-bfbb-ddebf3ced6de.png)

- Vemos un ejemplo similar al nuestro, el de estas peliculas, que cada vez que sale una nueva, no deben estar armando todo le HTMl para agregar la imagen, titulo, calificacion, descripcion, etc.

- En React no se harcodea, sino quqe se utilizan las **props** (**propiedades**)

### Entendamos el concepto básico de las props

-Si tenemos un ```<a >``` necesitamos el atributo **href**. Si tenemos ```<img > ``` necesitamso el atributo **src**.Si tenemos un ```<input ``` necesitamos el atributo **type**. Por lo que vemos, hay ciertas etiquetas las cuales necesitan ciertos atributos.

-Ahora hagamos un paralelo con JavaScript ¿Que necesitnan tener si o si las funciones?

Veamos un ejemplo:
```JavaScript
function addTwoNumbersTogether() {
  return 1 + 2;
} 
```

Solo se limita a sumar siempe 1 y 2, para que sea una función debería recibir **parametros** para que el **resultado** sea **más dinámico, dependiendo de los parametros que recibe**.

```JavaScript
function addTwoNumbersTogether(a, b) {
  return a + b;
} 
```

-Las **props** se pueden pensar como estos **parametros** en las **funciones**. Pasamos información adicional para poder **reutilizar**.



---
