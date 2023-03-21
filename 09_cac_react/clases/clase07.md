# :star: CLASE 07 - 20 Marzo

---

## Ejemplo de código visto en clase, para repasar métodos de arrays:

- Diferencia entre el **map** y el **forEach**: el map me retorna un nuevo arreglo, por eso se guarda siempre en una variable o constante. Lo que tienen en común: ambos recorren un array.

- Dentro del **forEach** tengo el **callback**(que es una **arrow function**).

- Dentro del **map** tengo el **callback**(que es una **arrow function**).

- **arrays.js**:
```JavaScript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
ul = document.querySelector("ul");

/*** ForEach ***/
numeros.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);
});

/*** Map ***/
const multiplosDeDiez = numeros.map(multi => multi*50);
console.log(multiplosDeDiez);

const multiplosDeDiez2 = numeros.map((multiDos) => {
    let resultado = multiDos;
    const li = document.createElement("li");
    li.textContent = resultado;
    ul.appendChild(li);

    return resultado;
});

console.log(multiplosDeDiez2);


/* Metodo filter */ 
const entreNum = numeros.filter(numDos => numDos>2 && numDos<6);
console.log(entreNum);

/* Método reduce*/
const contadorUnico = numeros.reduce((acumulador, itera)=>acumulador + itera);
console.log(contadorUnico);

const orden = numeros.sort((a, b) => a>b ? -1 : 1);
console.log(orden);
```

- **index.html**:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>METODOS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        <ul></ul>
    </div>
    <script src="arrays.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
```

- **style.css**: está vacío

- **.filter()** retorna un nuevo array, de los elementos que cumplan con la condicion que yo indique, entonces también se guarda en una variable o constante, el array de estos elementos filtrados. Si no hay ningún elemento que cumpla la condición va a devolver un **array vacío**

- **reduce**: aplica una función a un acumulador y cada valor del array de izquierda a derecha se va reduciendo en un único valor. Se suele usar para sumar. Recibe un callback con dos parámetros: el acumulador y el que itera. Como devuelve ese pseudo acumulado, se iguala a una variable o constante. En este caso si el array está vacío va a devolver un error, porque no va a tener que acumular. Se puede aplicar en un **carrito**, para calcular el **total a abonar**:

- **sort** para ordenar los elementos de forma ascendente o descendente. 

- **operador condicional**: **&&** (AND), se deben cumplir todas las condiciones para que sea true.

- **condicional ternario**: `(condicion) ? caso_true : caso_false`

---

## :computer: Links para ver más sobre métodos:

[https://es.javascript.info/array-methods](https://es.javascript.info/array-methods)

[https://francescricart.com/metodos-javascript/](https://francescricart.com/metodos-javascript/)

[https://tutobasico.com/metodos-arrays-javascript/](https://tutobasico.com/metodos-arrays-javascript/)

---

## 📋 Para seguir con la Lista de Tareas

Tener un botón con las 10 tareas que más se repitieron, del historial o de las que se muestra en pantalla. O poner el criterio que querramos.

Si lo cambiamos parecido a un Trello también le podemos agregar:

- Te etiquete a alguien con el @

- Que pueda definir la importancia de la tarea, y en base a esa urgencia que se muestre en uno de los cuadros.

---
