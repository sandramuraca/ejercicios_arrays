/*Definí una función obtenerMenor que tome por parámetro un array de números numeros y devuelva el menor de ellos. Ejemplo:

 obtenerMenor(5, 7, 99, 34, 54, 2, 12)
2*/

const obtenerMenor = (numeros) => {
    let menor = numeros[0];
    for(let i=0; i<numeros.length; i++){
       if(numeros[i] < menor){
        menor= numeros[i]
        }
    }
    return menor
}

console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12]));