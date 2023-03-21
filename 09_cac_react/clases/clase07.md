# :star: CLASE 07 - 20 Marzo

---

## Ejemplo de código visto en clase, para repasar métodos de arrays:

- Diferencia entre el **map** y el **forEach**, el map me retorna un nuevo arreglo, por eso se guarda siempre en una variable o constante. Ambos recorren un array.

- Dentro del **forEach** tengo el **callback**(que es una **arrow function**).

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


/* Metodos */ 
const entreNum = numeros.filter(numDos => numDos>2 && numDos<6);
console.log(entreNum);

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


---

## :computer: Links para ver más sobre métodos:

[https://es.javascript.info/array-methods](https://es.javascript.info/array-methods)

[https://francescricart.com/metodos-javascript/](https://francescricart.com/metodos-javascript/)

[https://tutobasico.com/metodos-arrays-javascript/](https://tutobasico.com/metodos-arrays-javascript/)

---
