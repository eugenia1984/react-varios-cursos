# :star: Unidad 1 * JS Avanzado 2

---

# Temas:

-Condicionales (if - else , operador ternario, switch)

-Bucles: While y For - For in - For of

---

## 1. Condicionales


IF es una estructura de control utilizada para tomar decisiones. Es un condicional que sirve para realizar unas u otras operaciones en función de una expresión y primero se evalúa una expresión, si da resultado positivo se realizan las acciones relacionadas con el caso positivo.

La sintaxis de la estructura IF es la siguiente.

```JavaScript
if (expresión) {
  //acciones a realizar en caso positivo
  //...
}
```

Opcionalmente se pueden indicar acciones a realizar en caso de que la evaluación de la sentencia devuelva resultados negativos.

```JavaScript
if (expresión) {
  //acciones a realizar en caso positivo
  //...
} else {
  //acciones a realizar en caso negativo
  //...
}
```

Las llaves engloban las acciones que queremos realizar en caso de que se cumplan o no las expresiones. Estas llaves han de colocarse siempre, excepto en el caso de que sólo haya una instrucción como acciones a realizar, que son opcionales.

Por ejemplo:

```JavaScript
if (llueve)
alert("Cae agua");
```

Sería exactamente igual que este código:

```JavaScript
if (llueve){
  alert("Cae agua");
}
```

O incluso, igual a este otro:

```JavaScript
if (llueve) alert("Cae agua");
```

Generalmente, cuando utilizamos las llaves, el código queda bastante más claro, porque se puede apreciar en un rápido vistazo qué instrucciones están dependiendo del caso positivo del if.

Los saltos de línea tampoco son necesarios y se han colocado también para que se vea mejor la estructura. 

Perfectamente podríamos colocar toda la instrucción IF en la misma línea de código, pero eso no ayudará a que las cosas estén claras.

Ejemplo de condicionales IF.

```
if (dia == "lunes")
document.write ("Que tengas un feliz comienzo de semana")
```

Si es lunes nos deseará una feliz semana. No hará nada en caso contrario. Como en este ejemplo sólo indicamos una instrucción para el caso positivo, no hará falta utilizar las llaves (aunque sí sería recomendable haberlas puesto).

Ejemplo :

```JavaScript
if (credito >= precio) {
  document.write("has comprado el artículo " + nuevoArtículo) //enseño compra
  carrito += nuevoArticulo //introduzco el artículo en el carrito de la compra
  credito -= precio //disminuyo el crédito según el precio del artículo
} else {
  document.write("se te ha acabado el crédito") //informo que te falta dinero
  window.location = "carritodelacompra.html" //voy a la página del carrito
}
```

Este ejemplo comprueba si tiene crédito para realizar una supuesta compra. Para ello analizamos si el crédito es mayor o igual que el precio del artículo, si es así informo de la compra, introduzco el artículo en el carrito y resto el precio al crédito acumulado. Si el precio del artículo es superior al dinero disponible informo de la situación y mando al navegador a la página donde se muestra su carrito de la compra.

## Expresiones condicionales

La expresión a evaluar se coloca siempre entre paréntesis y está compuesta por variables que se combinan entre si mediante operadores condicionales. Recordamos que los operadores condicionales relacionaban dos variables y devolvían siempre un resultado boleano. Por ejemplo un operador condicional es el operador "es igual" (==), que devuelve true en caso de que los dos operandos sean iguales o false en caso de que sean distintos.

```JavaScript
if (edad > 18)
  document.write("puedes ver esta página")
```

En este ejemplo utilizamos en operador condicional "es mayor" (>). En este caso, devuelve true si la variable edad es mayor que 18, con lo que se ejecutaría la línea siguiente que nos informa de que se puede ver el contenido para adultos.

Las expresiones condicionales se pueden combinar con las expresiones lógicas para crear expresiones más complejas. Recordamos que las expresiones lógicas son las que tienen como operandos a los boleanos y que devuelvan otro valor boleano.

## Son los operadores negación lógica, Y lógico y O lógico.

```JavaScript
if (bateria < 0.5 && redElectrica == 0)
  document.write("la notebook se va a apagar en segundos")
```

Lo que hacemos es comprobar si la batería de nuestra supuesta notebook es menor que 0.5 (está casi vacía) y también comprobamos si no tiene red eléctrica (desenchufado). Luego, el operador lógico los relaciona con un Y, de modo que si está casi sin batería Y sin red eléctrica, muestro el mensaje que el equipo se va a apagar.

La estructura if es de las más utilizadas en lenguajes de programación, para tomar decisiones en función de la evaluación de una sentencia.

## Sentencias IF anidadas

Para hacer estructuras condicionales más complejas podemos anidar sentencias IF, es decir, colocar estructuras IF dentro de otras estructuras IF. Con un solo IF podemos evaluar y realizar una acción u otra según dos posibilidades, pero si tenemos más posibilidades que evaluar podemos anidar IF’s y crear el flujo de código necesario para decidir correctamente.

Por ejemplo, para comprobar si un número es mayor menor o igual que otro, tengo que evaluar tres posibilidades distintas. Primero puedo comprobar si los dos números son iguales, si lo son, ya he resuelto el problema, pero si no son iguales todavía tendré que ver cuál de los dos es mayor. Veamos este ejemplo en código Javascript.

```JavaScript
var numero1=23
var numero2=63

if (numero1 == numero2){
  document.write("Los dos números son iguales")
}else{
  if (numero1 > numero2) {
    document.write("El primer número es mayor que el segundo")
  }else{
    document.write("El primer número es menor que el segundo")
  }
}
```

El flujo del programa primero evalúa si los dos números son iguales, en caso positivo se muestra un mensaje informando de ello, en caso contrario ya sabemos que son distintos, pero aún debemos averiguar cuál de los dos es mayor. Para eso se hace otra comparación para saber si el primero es mayor que el segundo. Si esta comparación da resultado positivo mostramos un mensaje que el primero es mayor que el segundo, en caso contrario indico que el primero es menor que el segundo.

Las llaves son en este caso opcionales, y sólo ejecutan una sentencia para cada caso. Además, los saltos de línea y tabuladores son también opcionales en todo caso y nos sirven sólo para ver el código de una manera más ordenada.

Mantener el código bien estructurado y escrito de una manera comprensible es muy importante.

## Operador IF Ternario

Este operador es un claro ejemplo de ahorro de líneas y caracteres al escribir los scripts. .

Un ejemplo de uso del operador IF se puede ver a continuación.

```JavaScript
variable = (condición) ? valor1 : valor2
```

Este ejemplo no sólo realiza una comparación de valores, además asigna un valor a una variable. Lo que hace es evaluar la condición (colocada entre paréntesis) y si es positiva asigna el valor1 a la variable y en caso contrario le asigna el valor2. Veamos un ejemplo:

```JavaScript
momento = (hora_actual < 12) ? "Antes del mediodía" : "Después del mediodía"
```

Este ejemplo analiza si la hora actual es menor que 12. Si es así, es antes del mediodía, y asigna "Antes del mediodía" a la variable momento. Si la hora es mayor o igual a 12 es después del mediodía, con lo que se asigna el texto "Después del mediodía" a la variable momento.
