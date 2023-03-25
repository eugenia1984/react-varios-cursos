# :star:CLASE 08 - 22 MARZO

---
---

## :star: TRABAJO INTEGRADOR

- La entrega final es en la primer quincena de Julio.

- Las dos fechas de entregaa coinciden con los examenes finales del aula virtual.

- Si entregamos en la primer fecha tenemos opción de hacer ajustes en la segunda fecha.

- Va a haber una clase especial de la **defensa del trabajo**, está todo el grupo, pero es un horario intermedio, si uno trabaja está justificado. Son 4 preguntas sobre el código.

- **1er etapa del integrador**: vamos a recibir un PDF con todo el detalle de lo que debe tener el proyecto. Solo faltan las fechas que se van a ir definiendo. Todos los pasos del proceso de principio a fin debe quedar registrado, la profesora nos va a pasar un ejemplo, es una guia.

- **Miércoles 29 de Marzo**: tener el grupo confirmado. Hacer un grupo para comunicarnos, definir quien es el responsable y el sub responsable, completar la grilla con los datos del grupo.

- **5 de Abril**: ya comenzamos con el grupo.

---
---

##  :star: Seguimos con JavaScript

- Comenzamos un nuevo proyecto, esta vez una **calculadora**

-> La semana que vieen empezamos con **React**, por eso ahora tenemos el proyecto intermedio de la **calculadora**.

![image](https://user-images.githubusercontent.com/72580574/227734335-19e0d114-e6bf-4f1a-9d3d-e31186fee92f.png)


:computer: -> [CALCULADORA - REPOSITORIO](https://github.com/eugenia1984/Calculadora) y [CALCULADORA - DEPLOY](https://eugenia1984.github.io/Calculadora/)

---

## :star: Vemos un poco de POO en JavaScript.

Ejemplo de código:

```JavaScript
class Animal{
    constructor(especie, nombreDeAnimal, alimentacion, domesticado, tamaño){
        this.especie=especie;
        this.nombreDeAnimal=nombreDeAnimal;
        this.alimentacion=alimentacion;
        this.domesticado=domesticado;
        this.tamaño=tamaño;
    }

    get verInfoAnimal(){
        return `El animal elegido es un ${this.nombreDeAnimal} del grupo de los ${this.especie}, tiene una alimentación ${this.alimentacion}, tiene un tamaño ${this.tamaño} y es ${this.domesticado} <br>`
    }

    set modificacionAlimentacion(tipoAlimentacion){
        this.alimentacion=tipoAlimentacion;
    }
}

class Mamiferos extends Animal{
    constructor(especie, nombreDeAnimal, alimentacion, domesticado, tamaño, toleranciaTemp, medioVida){
        super(especie, nombreDeAnimal, alimentacion, domesticado, tamaño);
        this.toleranciaTemp=toleranciaTemp;
        this.habitat=medioVida;
    }

    get verInfoMamifero(){
        return `El animal elegido es un ${this.nombreDeAnimal}, y es de la especie ${this.especie} tiene una alimentación ${this.alimentacion}, tiene un tamaño ${this.tamaño} y es ${this.domesticado}, el tigre ${this.toleranciaTemp} y vive en la ${this.habitat} <br>`
    }
}

let perro = new Animal("mamifero", "canino", "carnivoros", "domesticable", "mediano");
let gato = new Animal("mamifero", "felino", "carnivoros", "domesticable", "mediano");

let tigre= new Mamiferos("mamífero", "felino", "carnivoros", "domesticable", "mediano", "resiste a la temperatira", "selva");

document.write(tigre.verInfoMamifero);

/*
perro.modificacionAlimentacion="hervivoro";
console.log(perro.alimentacion);
document.write(perro.verInfoAnimal);
let cadena = new String ("hola");
document.write(cadena);
*/
```

---
---
