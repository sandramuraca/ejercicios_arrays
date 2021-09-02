/* 1.Definí una función sumar
 2. que reciba como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

 sumar([5, 7, 10, 12, 24])
58 

*/

const listaNumeros = [5, 7, 10, 12, 24]

const sumar = (numeros) => {
    
    let resultado = 0; 

    for( let i = 0; i < numeros.length; i++){
        resultado = resultado + numeros[i]
    }
    return resultado
}

console.log(sumar(listaNumeros));
