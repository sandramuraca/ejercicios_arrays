/*1. Definí una función multiplicar
2. que reciba como argumentos un número multiplicador y un array de números numeros
3. que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

 multiplicar(2, [5, 7, 15, 22, 40])
[10, 14, 30, 44, 80]
 multiplicar(10, [2, 5, 77])
[20, 50, 770]*/

/*
const multiplicar = (multiplicador, numeros) =>{
    let resultado 
    const arrayResultados = [];
    for (let numero of numeros){
        resultado = multiplicador * numero;
        arrayResultados.push(resultado);
    }
    return arrayResultados
}

console.log(multiplicar(2, [5, 7, 15, 22, 40] ));
console.log(multiplicar(10, [2, 5, 77]));
*/
const lista1 = [5, 7, 15, 22, 40]
const lista2 = [2, 5, 77]

const multiplicar = (multiplicador, array) =>{
    let resultado = 0
    const arrayResultados= []

    for (let i = 0; i < array.length; i++) {
        resultado = multiplicador * array[i]
        arrayResultados.push(resultado)
    }
    return arrayResultados
}
console.log(multiplicar(2, lista1 ));
console.log(multiplicar(10, lista2));
