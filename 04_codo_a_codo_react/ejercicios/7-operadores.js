/***** Operadores *****/
/***** Operadores Binarios ******/
// falsy -> "", 0
// truthy -> [], {}

/**** Operadores ternarios ****/
const a = 1;
const b = "a";
const c = true;
// IF - ELSE
if(c) {
  console.log(a);
} else {
  console.log(b);
}
// Operador ternatio simplificado
c ? console.log(a) : console.log(b);
// si ? true : false
// si ? if : else

/***** Operadores Avanzados *****/
/* 
//antes tenia
const d = (nro) => {return nro}
*/
// Con arrow function puedo sacar los () ya que tengo el parametro
// con arrow function puedo sacar las {} ya que es un solo renglon y tener el return implicito
const d = nro => nro;

/****** Metodos con arrays *******/
const array = [1, 2, 3, 4, 5, 6, 3, 4, 5, 3, 2, 3, 5, 6, 5, 6];

/******* forEach ******/
// por cada elemento dle array voy a hacer algo
// quiero que mi arrayFe tenga el cuadrado de cada elemento de array
let arrayFE = [];
array.forEach(valor => arrayFE.push(valor ** 2));
console.log("arrayFE :", arrayFE);
/*
arrayFE : [
   1,  4,  9, 16, 25, 36,
   9, 16, 25,  9,  4,  9,
  25, 36, 25, 36
]
*/

/********* find ******/
// para buscar un elemento con cierto valor dentro del array
// pero si tengo más d eun elemento con dicho valor
// va a encontrar el primero, lo retorna y para, no sigue buscando a los demas
const arrayFind = array.find( valor => valor === 5)
console.log("arrayFind : ", arrayFind); // 5

/****** filter *******/
// va a filtrar el array por el valor que le paso
// en este caso me devuelve todos los que encuentra
// no se corta en el primero que encuentra
const arrayFilter = array.filter( valor => valor === 5);
console.log("arrayFilter: ", arrayFilter); //  [ 5, 5, 5, 5 ]

/******** map *****/
// la diferencia entre el forEach y el map es que map va a ir
// mapeando y me lo puede guardar en algun lugar
const arrayMap = array.map( valor => valor ** 3);
console.log("arrayMap : ", arrayMap);
/*
arrayMap :  [
    1,   8,  27,  64, 125, 216,
   27,  64, 125,  27,   8,  27,
  125, 216, 125, 216
]
*/